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
            v-if="selectedLocation" 
            @click="clearFilter"
          >
            Clear Filter
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
                <a href="#" class="read-more">
                  Read Full Review
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const selectedLocation = ref('');
  
  const blogPosts = ref([
    {
      title: "Prime Futsal: The Premier Indoor Facility in Gyaneshwor",
      excerpt: "Prime Futsal offers a premium futsal experience with professional-grade courts, excellent amenities, and a convenient location in the heart of Gyaneshwor.",
      date: "June 15, 2023",
      category: "Venue Review",
      location: "Gyaneshwor",
      readTime: 5
    },
    {
      title: "Imperial Futsal: Bhaktapur's Premier Futsal Destination",
      excerpt: "Imperial Futsal in Bhaktapur combines quality playing surfaces with excellent facilities and affordable rates, making it a top choice for futsal enthusiasts in the area.",
      date: "April 22, 2023",
      category: "Venue Review",
      location: "Bhaktapur",
      readTime: 6
    }
  ]);
  
  //filter location section used grok.

  const availableLocations = computed(() => {
    const locations = blogPosts.value.map(post => post.location);
    return [...new Set(locations)].sort();
  });
  
  const filteredPosts = computed(() => {
    if (!selectedLocation.value) {
      return blogPosts.value;
    }
    return blogPosts.value.filter(post => post.location === selectedLocation.value);
  });
  
  const clearFilter = () => {
    selectedLocation.value = '';
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
    text-align: center;
    margin-bottom: 32px;
    
  }
  
  .section-header h2 {
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #15803d;

  }

  .section-header p {
    color: #15803cab;
    max-width: 672px;
    margin: 0 auto;
  }
  
  .filter-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  
  .filter-controls button {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 500;
    color: #15803d;;
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
  
  .features h4 {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 8px;
  }
  
  .features ul {
    color: #6b7280;
    font-size: 14px;
  }
  
  .features li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;
  }
  
  .features svg {
    width: 16px;
    height: 16px;
    color: #15803d;
    margin-right: 8px;
    margin-top: 2px;
  }
  
  .rating {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .stars {
    display: flex;
    margin-right: 8px;
  }
  
  .stars svg {
    width: 16px;
    height: 16px;
    fill: #d1d5db;
  }
  
  .stars svg.active {
    fill: #facc15;
  }
  
  .rating span {
    font-size: 14px;
    color: #6b7280;
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