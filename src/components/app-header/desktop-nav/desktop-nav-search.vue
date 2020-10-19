<template>
  <div>
    <div
      :class="[
        'search-cont w-full mt-4 fixed w-full top-0 left-0 right-0 flex justify-center transition duration-100 delay-100 ease-in',
        isActive && 'active'
      ]"
    >
      <div class="w-3/6 relative" @click="prevenClose">
        <label :id="_uid" class="hidden">Search</label>
        <input
          :aria-labelledBy="_uid"
          type="text"
          class="w-full h-12 rounded-full px-5 text-black"
          placeholder="Search"
        />
        <search-icon
          class="absolute text-gray-400 right-0 mr-6 top-half transform -translate-y-1/2"
        />
      </div>
    </div>
    <div
      :class="[
        'search-overlay fixed h-full w-full top-0 left-0 right-0 bg-black',
        isActive && 'active'
      ]"
    />
  </div>
</template>

<script>
import SearchIcon from "../../icons/search-icon";

export default {
  name: "DesktopNavSearch",
  props: ["isActive", "selectInnerNav"],
  components: {
    SearchIcon
  },
  methods: {
    prevenClose(e) {
      e.stopPropagation();
    }
  }
};
</script>

<style lang="scss" scoped>
.search-overlay {
  top: 5rem;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 0.2s ease-in;
  /* transition: transform 0s; */

  &.active {
    opacity: 1;
    z-index: 0;
    transform: scaleX(1);
  }
}

.search-cont {
  z-index: -1;
  transform: scaleX(0);
  opacity: 0;

  &.active {
    opacity: 1;
    z-index: 5;
    transform: scaleX(1);
  }
}
</style>
