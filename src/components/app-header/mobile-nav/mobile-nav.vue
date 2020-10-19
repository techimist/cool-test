<template>
  <div>
    <burger-icon v-model="isOpen" />
    <nav
      :class="[
        'mobile-nav-cont transition transition-all duration-100 .ease-in-out fixed left-0 right-0 mt-2',
        isOpen && 'open'
      ]"
    >
      <div
        :class="[
          'relative z-10 mobile-nav',
          selectedInnerNav.title && 'inner-nav--active'
        ]"
      >
        <ul class="bg-gray-700">
          <li
            v-for="navObj in mobileNavConfig"
            :key="navObj.title"
            @click="selectInnerNav($event, navObj)"
          >
            <div class="flex justify-between p-3 border-t border-gray-600">
              <span>{{ navObj.title }}</span>
              <span v-if="navObj.iconComponent">
                <component :is="navObj.iconComponent" />
              </span>
            </div>
          </li>
        </ul>
        <div v-show="selectedInnerNav.title" class="bg-gray-700 inner-nav">
          <div
            @click="selectInnerNav($event, {})"
            class="flex p-3 border-t border-gray-600"
          >
            <chevron-icon class="transform rotate-180" />
            <span class="ml-4">{{ selectedInnerNav.title }}</span>
          </div>
          <component
            :is="selectedInnerNav.component"
            v-bind="selectedInnerNav.componentProps"
          />
        </div>
      </div>
    </nav>
    <div
      @click="closeNav"
      :class="[
        'fixed top-0 left-0 right-0 h-full nav-overlay transition transition-all duration-100 .ease-in-out',
        isOpen && 'open'
      ]"
    />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { MOBILE_NAV_CONFIG } from "../config";
import MobileNavInnerList from "./mobile-nav-inner-list";
import MobileNavSearch from "./mobile-nav-search";
import BurgerIcon from "../../icons/burger-icon";
import SearchIcon from "../../icons/search-icon";
import EarthIcon from "../../icons/earth-icon";
import UserIcon from "../../icons/user-icon";
import ChevronIcon from "../../icons/chevron-icon";

export default {
  name: "MobileNav",
  components: {
    MobileNavInnerList,
    MobileNavSearch,
    BurgerIcon,
    SearchIcon,
    EarthIcon,
    UserIcon,
    ChevronIcon
  },
  data() {
    return {
      isOpen: false,
      mobileNavConfig: MOBILE_NAV_CONFIG,
      selectedInnerNav: {}
    };
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(newVal) {
        if (newVal === true) {
          this.selectedInnerNav = {};
        }
      }
    }
  },
  methods: {
    closeNav() {
      this.isOpen = false;
    },
    selectInnerNav(e, innerObj) {
      this.selectedInnerNav = innerObj;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-overlay {
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.8);
  top: 4.25rem;
  opacity: 0;

  &.open {
    opacity: 1;
  }
}

.mobile-nav-cont {
  transform: translateX(-100%);
  opacity: 0;

  &.open {
    transform: translateX(0);
    opacity: 1;
  }
}
.inner-nav {
  @apply bg-gray-700 absolute top-0 w-full;
  left: 100%;
}

.mobile-nav {
  transition: all 0.2s;
}

.inner-nav--active {
  transform: translateX(-100%);
}
</style>
