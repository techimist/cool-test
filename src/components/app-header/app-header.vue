<template>
  <header
    class="bg-gray-900 relative flex justify-between items-center h-17 lg:h-20 text-white"
  >
    <app-logo class="hidden lg:block" />
    <div class="lg:hidden">
      <burger-icon />
      <MobileNav />
    </div>

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
import BurgerIcon from "../icons/burger-icon";
import MobileNav from "./mobile-nav";

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    CartIcon,
    BurgerIcon,
    MobileNav,
  }
};
</script>

<style lang="scss" scoped></style>
