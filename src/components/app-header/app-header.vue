<template>
  <header
    class="font-display bg-gray-900 relative z-10 flex justify-between items-center h-17 lg:h-20 text-white pr-3 pl-1 lg:pl-10 lg:pr-5 lg:font-bold uppercase"
  >
    <app-logo class="hidden lg:block" />
    <mobile-nav class="lg:hidden z-10" />

    <desktop-nav-middle
      class="hidden lg:block"
      :opened-inner-nav="openedInnerNav"
      :select-inner-nav="selectInnerNav"
    />
    <div
      class="lg:hidden block absolute w-full flex left-0 right-0 justify-center"
    >
      <app-logo />
    </div>

    <desktop-nav-icon-nav
      class="hidden lg:block z-10"
      :opened-inner-nav="openedInnerNav"
      :select-inner-nav="selectInnerNav"
    />
    <cart-icon class="lg:hidden block" />
    <!-- <div class="" /> -->
  </header>
</template>

<script>
import AppLogo from "../app-logo";
import CartIcon from "../icons/cart-icon";
import MobileNav from "./mobile-nav";
import DesktopNavMiddle from "./desktop-nav/desktop-nav-middle";
import DesktopNavIconNav from "./desktop-nav/desktop-nav-icon-nav.vue";

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    CartIcon,
    MobileNav,
    DesktopNavMiddle,
    DesktopNavIconNav
  },
  data() {
    return {
      openedInnerNav: ""
    };
  },
  created() {
    const unSetInner = e => {
      this.selectInnerNav(e, "");
    };

    document.addEventListener("click", unSetInner);

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("click", unSetInner);
    });
  },
  methods: {
    selectInnerNav(e, title) {
      e.stopPropagation();
      this.openedInnerNav = title === this.openedInnerNav ? "" : title;
    }
  }
};
</script>

<style lang="scss" scoped></style>
