<template>
  <div>
    <ul class="flex">
      <li v-for="navObj in iconNav" :key="navObj.title" class="mx-2">
        <a v-if="!navObj.showInner" href="">
          <component :is="navObj.iconComponent" />
        </a>
        <div v-else>
          <span @click="selectInnerNav($event, navObj.title)">
            <component :is="navObj.iconComponent" />
          </span>
          <component
            :class="openedInnerNav === navObj.title ? '' : 'hidden'"
            :is="navObj.component"
            v-bind="navObj.componentProps"
          />
        </div>
      </li>
      <!-- <li v-for="navObj in iconNav" :key="navObj.title" class="ml-5">
        <component :is="navObj.iconComponent" />
      </li> -->
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

export default {
  name: "DesktopNavIconNav",
  components: {
    EarthIcon,
    UserIcon,
    SearchIcon,
    CartIcon,
    DesktopNavInnerList
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
