<template>
  <header
    class="font-display bg-gray-900 relative flex justify-between items-center h-17 lg:h-20 text-white pr-3 pl-1 lg:pl-10 lg:pr-5 lg:font-bold uppercase"
  >
    <app-logo class="hidden lg:block" />
    <mobile-nav class="lg:hidden" />

    <desktop-nav-middle class="hidden lg:block" />
    <div
      class="lg:hidden block absolute w-full flex left-0 right-0 justify-center"
    >
      <app-logo />
    </div>

    <desktop-nav-icon-nav class="hidden lg:block" />
    <cart-icon class="lg:hidden block" />
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
  }
};
</script>

<style lang="scss" scoped></style>
