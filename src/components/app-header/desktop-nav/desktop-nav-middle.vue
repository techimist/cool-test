<template>
  <nav>
    <ul class="flex">
      <li v-for="navObj in centerNav" :key="navObj.title" class="mx-7">
        <a v-if="!navObj.showInner" href="">{{ navObj.title }}</a>
        <div v-else>
          <span @click="selectInnerNav($event, navObj.title)">{{ navObj.title }}</span>
          <component :class="openedInnerNav === navObj.title ? '' : 'hidden'" :is="navObj.component" v-bind="navObj.componentProps" />
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
  components: {
    DesktopNavInnerList
  },
  data() {
    return {
      centerNav: DESKTOP_NAV_CONFIG.centerNav,
      openedInnerNav: '',
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
