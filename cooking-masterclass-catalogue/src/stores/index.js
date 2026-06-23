import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      wishlist: [],
    };
  },
  mutations: {
    ADD_TO_WISHLIST(state, course) {
      const exists = state.wishlist.find((item) => item.id === course.id);
      if (!exists) {
        state.wishlist.push(course);
      }
    },
    REMOVE_FROM_WISHLIST(state, courseId) {
      state.wishlist = state.wishlist.filter((item) => item.id !== courseId);
    },
  },
  getters: {
    wishlistCount(state) {
      return state.wishlist.length;
    },
    isInWishlist: (state) => (courseId) => {
      return state.wishlist.some((item) => item.id === courseId);
    },
  },
});

export default store;
