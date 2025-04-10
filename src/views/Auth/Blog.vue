<template>
    <section class="blog-section py-12 px-4 md:px-8 lg:px-12">
      <div class="container mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold mb-2">Futsal Venue Reviews</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Detailed information about the best futsal facilities in the area
          </p>
        </div>
  
        <!-- Filter Controls -->
        <div class="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <div class="relative w-full max-w-xs">
            <label for="location-filter" class="block text-sm font-medium text-gray-700 mb-1">
              Filter by Location
            </label>
            <select 
              id="location-filter" 
              v-model="selectedLocation"
              class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm"
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
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-4 sm:mt-0"
          >
            Clear Filter
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
  
        <!-- Blog Grid - Centered for just two cards -->
        <div class="flex justify-center">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <!-- Blog Card -->
            <article v-for="(post, index) in filteredPosts" :key="index" class="blog-card bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div class="p-6">
                <!-- Category and Location Tags -->
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {{ post.category }}
                  </span>
                  <span class="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    {{ post.location }}
                  </span>
                </div>
                
                <!-- Date and Read Time -->
                <div class="flex items-center text-gray-500 text-sm mb-2">
                  <span class="mr-3">{{ post.date }}</span>
                  <span>{{ post.readTime }} min read</span>
                </div>
                
                <!-- Title -->
                <h3 class="text-xl font-bold mb-3">{{ post.title }}</h3>
                
                <!-- Excerpt -->
                <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
                
                <!-- Features List -->
                <div class="mb-4">
                  <h4 class="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li v-for="(feature, idx) in post.features" :key="idx" class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      {{ feature }}
                    </li>
                  </ul>
                </div>
                
                <!-- Rating -->
                <div class="flex items-center mb-4">
                  <div class="flex mr-2">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" :class="['h-4 w-4', i <= post.rating ? 'text-yellow-400' : 'text-gray-300']" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-sm text-gray-600">{{ post.rating }} out of 5</span>
                </div>
                
                <!-- Read More Link -->
                <a href="#" class="inline-flex items-center text-primary font-medium hover:underline">
                  Read Full Review
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  
  // Location filter state
  const selectedLocation = ref('');
  
  // Sample blog posts data with only two venue reviews
  const blogPosts = ref([
    {
      title: "Prime Futsal: The Premier Indoor Facility in Gyaneshwor",
      excerpt: "Prime Futsal offers a premium futsal experience with professional-grade courts, excellent amenities, and a convenient location in the heart of Gyaneshwor.",
      date: "June 15, 2023",
      category: "Venue Review",
      location: "Gyaneshwor",
      readTime: 5,
      rating: 4.8,
      features: [
        "FIFA-approved synthetic turf courts",
        "Professional LED lighting system",
        "Spacious changing rooms with showers",
        "Café and refreshment area",
        "Ample parking space",
        "Online booking system"
      ]
    },
    {
      title: "Imperial Futsal: Bhaktapur's Premier Futsal Destination",
      excerpt: "Imperial Futsal in Bhaktapur combines quality playing surfaces with excellent facilities and affordable rates, making it a top choice for futsal enthusiasts in the area.",
      date: "April 22, 2023",
      category: "Venue Review",
      location: "Bhaktapur",
      readTime: 6,
      rating: 4.6,
      features: [
        "High-quality futsal courts",
        "Modern changing facilities",
        "Spectator seating areas",
        "Equipment rental available",
        "Friendly and professional staff",
        "Flexible booking options"
      ]
    }
  ]);
  
  // Get unique locations for the filter dropdown
  const availableLocations = computed(() => {
    const locations = blogPosts.value.map(post => post.location);
    return [...new Set(locations)].sort();
  });
  
  // Filter posts based on selected location
  const filteredPosts = computed(() => {
    if (!selectedLocation.value) {
      return blogPosts.value;
    }
    
    return blogPosts.value.filter(post => post.location === selectedLocation.value);
  });
  
  // Clear the location filter
  const clearFilter = () => {
    selectedLocation.value = '';
  };
  </script>
  
  <style scoped>
  .blog-section {
    background-color: #f8f9fa;
  }
  
  .bg-primary {
    background-color: #ff5722;
  }
  
  .bg-primary-dark {
    background-color: #e64a19;
  }
  
  .text-primary {
    color: #ff5722;
  }
  
  .ring-primary {
    --tw-ring-color: #ff5722;
  }
  
  .border-primary {
    border-color: #ff5722;
  }
  </style>