<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <h1>COOKING MASTERCLASS</h1>
        <div class="logo-line"></div>
      </div>
      <div class="wishlist-badge" :class="{ bump: isAnimating }">
        <span class="label">SAVED</span>
        <span class="count">{{ wishlistCount }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "HeaderComponent",
  setup() {
    const store = useStore();
    const wishlistCount = computed(() => store.getters.wishlistCount);
    const isAnimating = ref(false);

    watch(wishlistCount, () => {
      isAnimating.value = true;
      setTimeout(() => {
        isAnimating.value = false;
      }, 300);
    });

    return { wishlistCount, isAnimating };
  },
};
</script>

<style scoped>
.header {
  background: #1a1a1a;
  color: white;
  border-bottom: 4px solid #c41e3a;
}

.header-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.logo h1 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 3px;
  font-family: "Arial", "Helvetica", sans-serif;
}

.logo-line {
  width: 60px;
  height: 3px;
  background: #c41e3a;
  margin-top: 0.5rem;
}

.wishlist-badge {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #2a2a2a;
  padding: 0.6rem 1.2rem;
  font-family: "Arial", sans-serif;
  transition: transform 0.3s ease;
}

.wishlist-badge.bump {
  transform: scale(1.1);
}

.label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #999;
}

.count {
  font-size: 1.4rem;
  font-weight: 800;
  color: #c41e3a;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .header-content {
    padding: 1.5rem 1rem;
  }

  .logo h1 {
    font-size: 1.1rem;
  }
}
</style>
