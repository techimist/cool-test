<template>
  <header
    class="font-display bg-gray-900 relative flex justify-between items-center h-17 lg:h-20 text-white"
  >
    <app-logo class="hidden lg:block" />
    <mobile-nav class="lg:hidden" />

    <desktop-nav-middle class="hidden lg:block" />
    <app-logo class="lg:hidden block" />

    <desktop-nav-icon-nav class="hidden lg:block" />
    <cart-icon class="lg:hidden block" />
  </header>
</template>

<script>
import AppLogo from "../app-logo";
import CartIcon from "../icons/cart-icon";
import MobileNav from "./mobile-nav";
import DesktopNavMiddle from './desktop-nav/desktop-nav-middle';
import DesktopNavIconNav from './desktop-nav/desktop-nav-icon-nav.vue';

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    CartIcon,
    MobileNav,
    DesktopNavMiddle,
    DesktopNavIconNav
  }
};
</script>

<style lang="scss" scoped></style>
