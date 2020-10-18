<template>
  <div>
    <ul class="flex">
      <li v-for="navObj in iconNav" :key="navObj.title" class="">
        <a class="px-4 py-3 block" v-if="!navObj.showInner" href="">
          <component :is="navObj.iconComponent" />
        </a>
        <div v-else>
          <div class="px-4 py-3" @click="selectInnerNav($event, navObj.iconComponent)">
            <component :is="navObj.iconComponent" />
          </div>
          <component
            :class="openedInnerNav === navObj.iconComponent ? '' : 'hidden'"
            :is="navObj.component"
            v-bind="navObj.componentProps"
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
  data() {
    return {
      iconNav: DESKTOP_NAV_CONFIG.iconNav,
      openedInnerNav: ""
    };
  },
  methods: {
    selectInnerNav(_, title) {
      console.log(title);
      this.openedInnerNav = title;
    }
  }
};
</script>
