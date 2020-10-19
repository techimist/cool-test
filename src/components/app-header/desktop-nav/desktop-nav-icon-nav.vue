<template>
  <div>
    <ul class="flex">
      <li v-for="navObj in iconNav" :key="navObj.title" class="">
        <a
          class="px-4 py-3 block"
          v-if="!navObj.showInner"
          :href="navObj.link"
          :aria-label="navObj.title"
        >
          <component :is="navObj.iconComponent" />
        </a>
        <div v-else class="relative">
          <button
            class="px-4 py-3"
            @click="selectInnerNav($event, navObj.iconComponent)"
            @focus="selectInnerNav($event, navObj.iconComponent)"
            :aria-label="navObj.title"
          >
            <component :is="navObj.iconComponent" />
          </button>
          <component
            :is-active="openedInnerNav === navObj.iconComponent"
            :is="navObj.component"
            v-bind="navObj.componentProps"
            :select-inner-nav="selectInnerNav"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { DESKTOP_NAV_CONFIG } from "../config";
import EarthIcon from "../../icons/earth-icon";
import UserIcon from "../../icons/user-icon";
import SearchIcon from "../../icons/search-icon";
import CartIcon from "../../icons/cart-icon";
import DesktopNavInnerList from "./desktop-nav-inner-list";
import DesktopNavSearch from "./desktop-nav-search";

export default {
  name: "DesktopNavIconNav",
  components: {
    EarthIcon,
    UserIcon,
    SearchIcon,
    CartIcon,
    DesktopNavInnerList,
    DesktopNavSearch
  },
  props: ["openedInnerNav", "selectInnerNav"],
  data() {
    return {
      iconNav: DESKTOP_NAV_CONFIG.iconNav
    };
  }
};
</script>
