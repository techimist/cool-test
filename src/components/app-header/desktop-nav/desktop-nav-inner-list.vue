<template>
  <div class="flex">
    <chevron-solid-icon
      :class="[
        'chevron-down absolute left-half fill-current transition transition-all duration-100 ease-in-out',
        isActive && 'is-active'
      ]"
    />
    <ul
      :class="[
        'inner-list bg-gray-200 fixed font-thin text-black rounded-b-md py-3',
        isActive && 'is-active'
      ]"
    >
      <li
        :tabindex="isActive ? 0 : -1"
        v-for="navObj in linkList"
        :key="navObj.title"
        class="py-1 px-3 hover:bg-gray-300"
      >
        {{ navObj.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import ChevronSolidIcon from "../../icons/chevron-solid-icon";

export default {
  name: "DesktopNavInnerList",
  components: {
    ChevronSolidIcon
  },
  props: ["linkList", "isActive"]
};
</script>

<style lang="scss">
.chevron-down {
  opacity: 0;
  transform: translate(-50%, -0.25rem);

  &.is-active {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.inner-list {
  min-width: 150px;
  top: 5rem;
  opacity: 0;
  z-index: -1;
  transform: translateY(-5.25rem);
  transition: all 0.2s ease-in-out;

  &.is-active {
    opacity: 1;
    transform: translateY(0);
    /* z-index: 0; */
  }
}
</style>
