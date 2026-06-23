<template>
  <div id="app">
    <HeaderComponent />
    <main class="main-content">
      <div class="controls">
        <div>
          <h2 class="section-title">Explore Our Classes</h2>
          <p class="subtitle">Handpicked workshops from world-class chefs</p>
        </div>
        <div class="filter-controls">
          <button
            @click="filter = 'all'"
            :class="{ active: filter === 'all' }"
            class="filter-btn"
          >
            All Classes
          </button>
          <button
            @click="filter = 'available'"
            :class="{ active: filter === 'available' }"
            class="filter-btn"
          >
            Available
          </button>
          <button
            @click="filter = 'sold-out'"
            :class="{ active: filter === 'sold-out' }"
            class="filter-btn"
          >
            Sold Out
          </button>
        </div>
      </div>

      <TransitionGroup name="course-list" tag="div" class="course-grid">
        <CourseCard
          v-for="course in filteredCourses"
          :key="course.id"
          :course="course"
        />
      </TransitionGroup>

      <p v-if="filteredCourses.length === 0" class="no-results">
        No classes match your current filter.
      </p>
    </main>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import HeaderComponent from "./components/Header.vue";
import CourseCard from "./components/CourseCard.vue";
import { courses } from "./data/courses.js";

export default {
  name: "App",
  components: {
    HeaderComponent,
    CourseCard,
  },
  setup() {
    const filter = ref("all");

    const filteredCourses = computed(() => {
      switch (filter.value) {
        case "available":
          return courses.filter((course) => course.available);
        case "sold-out":
          return courses.filter((course) => !course.available);
        default:
          return courses;
      }
    });

    return { courses, filter, filteredCourses };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Georgia", "Times New Roman", serif;
  background: #fafafa;
  color: #1a1a1a;
}

#app {
  min-height: 100vh;
}

.main-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 1.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.5px;
}

.subtitle {
  color: #666;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-family: "Arial", sans-serif;
}

.filter-controls {
  display: flex;
  gap: 0;
  border: 1px solid #d0d0d0;
  border-radius: 0;
}

.filter-btn {
  padding: 0.7rem 1.5rem;
  border: none;
  background: white;
  color: #333;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: "Arial", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
  border-right: 1px solid #d0d0d0;
}

.filter-btn:last-child {
  border-right: none;
}

.filter-btn:hover {
  background: #f5f5f5;
}

.filter-btn.active {
  background: #1a1a1a;
  color: white;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.5rem;
  position: relative;
}

.no-results {
  text-align: center;
  color: #999;
  font-size: 1.2rem;
  margin-top: 4rem;
  font-family: "Arial", sans-serif;
}

/* Transition animations for filtering */
.course-list-enter-active {
  transition: all 0.4s ease;
}

.course-list-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}

.course-list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.course-list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.course-list-move {
  transition: transform 0.4s ease;
}

@media (max-width: 768px) {
  .controls {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .filter-controls {
    width: 100%;
  }

  .filter-btn {
    flex: 1;
    text-align: center;
    padding: 0.6rem;
    font-size: 0.8rem;
  }

  .course-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .main-content {
    padding: 1.5rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
