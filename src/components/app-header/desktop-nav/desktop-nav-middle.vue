<template>
  <nav
    id="desktop-middle-nav"
    class="absolute w-full hidden lg:block right-0 left-0"
  >
    <ul class="flex justify-center">
      <li v-for="navObj in centerNav" :key="navObj.title" class="mx-7 relative">
        <a v-if="!navObj.showInner" href="">{{ navObj.title }}</a>
        <div v-else>
          <span @click="selectInnerNav($event, navObj.title)">{{
            navObj.title
          }}</span>
          <component
            :is-active="openedInnerNav === navObj.title"
            :is="navObj.component"
            v-bind="navObj.componentProps"
          />
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { DESKTOP_NAV_CONFIG } from "../config";
import DesktopNavInnerList from "./desktop-nav-inner-list";

export default {
  name: "DesktopNavMiddle",
  props: ["openedInnerNav", "selectInnerNav"],
  components: {
    DesktopNavInnerList
  },
  data() {
    return {
      centerNav: DESKTOP_NAV_CONFIG.centerNav
    };
  }
};
</script>
