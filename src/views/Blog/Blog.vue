<template>
  <section class="blog-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2>Futsal Blogs</h2>
        <p>
          Detailed information about the best futsal facilities in the area
        </p>
      </div>
      <!-- Search Bar -->
      <div class="search-wrapper">
        <label for="search-input">
          Search Blogs
        </label>
        <div class="search-input-wrapper">
          <input 
            id="search-input"
            v-model="searchQuery"
            type="text"
            placeholder="Search by title or description..."
          />
          <svg v-if="searchQuery" @click="clearSearch" class="clear-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      <!-- Filter Controls -->
      <div class="filter-controls">
        <div class="filter-wrapper">
          <label for="location-filter">
            Filter by Location
          </label>
          <select 
            id="location-filter" 
            v-model="selectedLocation"
          >
            <option value="">All Locations</option>
            <option v-for="location in availableLocations" :key="location" :value="location">
              {{ location }}
            </option>
          </select>
        </div>
        
        
        <button 
          v-if="selectedLocation || searchQuery" 
          @click="clearAllFilters"
        >
          Clear All
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Blog Grid - Centered for just two cards -->
      <div class="blog-grid-wrapper">
        <div class="blog-grid">
          <!-- Blog Card -->
          <article v-for="(post, index) in filteredPosts" :key="index" class="blog-card">
            <div class="card-content">
              <!-- Category and Location Tags -->
              <div class="tags">
                <span class="category-tag">
                  {{ post.category }}
                </span>
                <span class="location-tag">
                  {{ post.location }}
                </span>
              </div>
              
              <!-- Date and Read Time -->
              <div class="meta">
                <span>{{ post.date }}</span>
                <span>{{ post.readTime }} min read</span>
              </div>
              
              <!-- Title -->
              <h3>{{ post.title }}</h3>
              
              <!-- Excerpt -->
              <p class="excerpt">{{ post.excerpt }}</p>
              
              <!-- Read More Link -->
              <router-link v-if="post.id" :to="`/blog/${post.id}`" class="read-more">
                Read Full Review
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const selectedLocation = ref(''); 
const searchQuery = ref('');
const blogPosts = ref([]);
const isLoading = ref(false);
const errorMessage = ref('');

const fetchBlogPosts = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get('https://apibooksal.getintoto.com/api/v1/blog/list-blogs/');
    const data = await response.data;

    blogPosts.value = data.map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.meta_description || 'No description available.',
      date: new Date(post.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: post.category?.name || 'Uncategorized',
      location: post.meta_tags?.split(',')[1]?.trim() || 'Unknown',
      readTime: 5 
    }));
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    errorMessage.value = 'Could not load blogs. Please try again later.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchBlogPosts();
});

const availableLocations = computed(() => {
  const locations = blogPosts.value.map(post => post.location);
  return [...new Set(locations)].sort();
});

const filteredPosts = computed(() => {
  let filtered = blogPosts.value;
  
  if (selectedLocation.value) {
      filtered = filtered.filter(post => post.location === selectedLocation.value);
  }
  
  if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(query) || 
          post.excerpt.toLowerCase().includes(query)
      );
  }
  
  return filtered;
});

const clearFilter = () => {
  selectedLocation.value = '';
};

const clearSearch = () => {
  searchQuery.value = '';
};

const clearAllFilters = () => {
  selectedLocation.value = '';
  searchQuery.value = '';
};



</script>

<style scoped>
.blog-section {
  background-color: #f8f9fa;
  padding: 48px 16px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  background-color: var(--primary-600);
  color: white;
  padding:3rem 0;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 1rem;
  margin-top: -48px;
  margin-right: -384px;
  margin-left: -381px;
}

.section-header h2 {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ececec;
}

.section-header p {
  color: #ffffffab;
  max-width: 672px;
  margin: 0 auto;
}

.filter-controls {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}

.filter-wrapper {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.filter-wrapper label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
}

.filter-wrapper select {
  width: 100%;
  padding: 8px 40px 8px 12px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  outline: none;
}

.filter-wrapper select:focus {
  border-color: #15803d;
  box-shadow: 0 0 0 2px rgba(255, 87, 34, 0.2);
}

.search-wrapper {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin-inline: auto;
  padding: 2rem
}

.search-wrapper label {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #15803d;
  margin-bottom: 4px;
  text-align: center;
}

.search-input-wrapper {
  position: relative;
}

.search-input-wrapper input {
  width: 350px;
  padding: 12px 6px 9px 20px;
  font-size: 19px;
  border: 1px solid #d1d5db;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  outline: none;
  margin-inline: auto;
  margin-left: -58px;
}

.search-input-wrapper input:focus {
  border-color: #15803d;
  box-shadow: 0 0 0 2px rgba(255, 87, 34, 0.2);
}

.search-input-wrapper .clear-search {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: #6b7280;
}

.search-input-wrapper .clear-search:hover {
  color: #374151;
}

.filter-controls button {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  color: #15803d;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
}

.filter-controls button svg {
  width: 16px;
  height: 16px;
  margin-left: 4px;
}

.filter-controls button:hover {
  background-color: #f9fafb;
}

.blog-grid-wrapper {
  display: flex;
  justify-content: center;
}

.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  max-width: 1024px;
}

.blog-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.blog-card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.card-content {
  padding: 24px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.category-tag {
  background-color: #15803d;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 9999px;
}

.location-tag {
  background-color: #f3f4f6;
  color: #4b5563;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 9999px;
}

.meta {
  display: flex;
  align-items: center;
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 8px;
}

.meta span:first-child {
  margin-right: 12px;
}

.card-content h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.excerpt {
  color: #6b7280;
  margin-bottom: 16px;
}

.read-more {
  display: inline-flex;
  align-items: center;
  color: #15803d;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}

.read-more svg {
  width: 16px;
  height: 16px;
  margin-left: 4px;
}

@media (min-width: 768px) {
  .blog-section {
    padding: 48px 32px;
  }

  .filter-controls {
    flex-direction: row;
    gap: 24px;
  }

  .filter-controls button {
    margin-top: 0;
  }

  .blog-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .blog-section {
    padding: 48px 48px;
  }
}
</style>