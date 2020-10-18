<template>
  <div>
    <burger-icon v-model="isOpen" />
    <nav v-if="isOpen" class="fixed left-0 right-0 mt-2">
      <div :class="['mobile-nav', showInner && 'inner-nav--active']">
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
        <div v-if="{ showInner }" class="bg-gray-700 inner-nav">
          <div
            @click="toggleInnerNav()"
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
      selectedInnerNav: {},
      showInner: false
    };
  },
  methods: {
    selectInnerNav(e, innerObj) {
      if (innerObj.showInner) {
        this.selectedInnerNav = innerObj;
        this.toggleInnerNav(true);
      }
    },
    toggleInnerNav(show) {
      this.showInner = show ? show : !this.showInner;
    }
  }
};
</script>

<style lang="scss" scoped>
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
