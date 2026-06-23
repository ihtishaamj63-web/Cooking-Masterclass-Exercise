<template>
  <article class="course-card" :class="{ 'sold-out': !course.available }">
    <div class="card-image">
      <img
        v-if="course.image"
        :src="course.image"
        :alt="course.title"
        class="course-img"
      />
      <div
        class="availability-tag"
        :class="course.available ? 'available' : 'unavailable'"
      >
        {{ course.available ? "AVAILABLE" : "SOLD OUT" }}
      </div>
    </div>
    <div class="card-content">
      <div class="card-header">
        <span class="level-badge" :class="course.level.toLowerCase()">
          {{ course.level }}
        </span>
        <span class="price">{{ formatPrice(course.price) }}</span>
      </div>
      <h3 class="course-title">{{ course.title }}</h3>
      <p class="chef-name">by {{ course.chef }}</p>
      <p class="description">{{ course.description }}</p>

      <button
        v-if="course.available"
        @click="toggleWishlist"
        class="save-btn"
        :class="{ saved: isInWishlist }"
      >
        <span class="btn-content">
          <span class="btn-text">{{
            isInWishlist ? "SAVED" : "SAVE CLASS"
          }}</span>
          <span v-if="isAnimating" class="check-icon">&#10003;</span>
        </span>
      </button>

      <div v-else class="sold-out-notice">This class is currently full</div>
    </div>
  </article>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "CourseCard",
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const isAnimating = ref(false);

    const isInWishlist = computed(() =>
      store.getters.isInWishlist(props.course.id),
    );

    const toggleWishlist = () => {
      if (isInWishlist.value) {
        store.commit("REMOVE_FROM_WISHLIST", props.course.id);
      } else {
        store.commit("ADD_TO_WISHLIST", props.course);
        isAnimating.value = true;
        setTimeout(() => {
          isAnimating.value = false;
        }, 600);
      }
    };

    const formatPrice = (price) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
    };

    return {
      isInWishlist,
      toggleWishlist,
      formatPrice,
      isAnimating,
    };
  },
};
</script>

<style scoped>
.course-card {
  background: white;
  border: 1px solid #e0e0e0;
  position: relative;
  transition: all 0.3s ease;
}

.course-card:hover {
  transform: translateY(-4px);
  border-color: #c41e3a;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.course-card.sold-out {
  opacity: 0.8;
}

.card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: #f0f0f0;
}

.course-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  filter: brightness(0.95);
}

.course-card:hover .course-img {
  transform: scale(1.05);
  filter: brightness(1);
}

.availability-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  font-family: "Arial", sans-serif;
}

.availability-tag.available {
  background: #1a1a1a;
  color: white;
}

.availability-tag.unavailable {
  background: #c41e3a;
  color: white;
}

.card-content {
  padding: 1.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.level-badge {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Arial", sans-serif;
}

.level-badge.beginner {
  color: #2c5282;
}
.level-badge.intermediate {
  color: #c05621;
}
.level-badge.advanced {
  color: #c41e3a;
}

.price {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  font-family: "Georgia", serif;
}

.course-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.3rem;
  line-height: 1.3;
}

.chef-name {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 1rem;
  font-style: italic;
  font-family: "Georgia", serif;
}

.description {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1.5rem;
  font-family: "Arial", sans-serif;
}

.save-btn {
  width: 100%;
  padding: 0.9rem;
  border: 2px solid #1a1a1a;
  background: transparent;
  color: #1a1a1a;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Arial", sans-serif;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.save-btn:hover {
  background: #1a1a1a;
  color: white;
}

.save-btn.saved {
  background: #1a1a1a;
  color: white;
}

.save-btn.saved:hover {
  background: #c41e3a;
  border-color: #c41e3a;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-text {
  transition: all 0.3s ease;
}

.check-icon {
  font-size: 1.2rem;
  font-weight: bold;
  animation: pop-in 0.3s ease;
}

@keyframes pop-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.sold-out-notice {
  text-align: center;
  padding: 0.9rem;
  background: #f5f5f5;
  color: #999;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Arial", sans-serif;
}
</style>
