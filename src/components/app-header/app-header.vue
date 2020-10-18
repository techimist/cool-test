<template>
  <header
    class="font-display bg-gray-900 relative flex justify-between items-center h-17 lg:h-20 text-white"
  >
    <app-logo class="hidden lg:block" />
    <mobile-nav class="lg:hidden" />

    <div class="hidden lg:block">middle container</div>
    <app-logo class="lg:hidden block" />

    <div>
      <cart-icon />
    </div>
  </header>
</template>

<script>
import AppLogo from "../app-logo";
import CartIcon from "../icons/cart-icon";
import MobileNav from "./mobile-nav";

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    CartIcon,
    MobileNav,
  }
};
</script>

<style lang="scss" scoped></style>
