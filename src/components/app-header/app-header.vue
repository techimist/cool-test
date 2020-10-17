<template>
  <header
    class="bg-gray-900 relative flex justify-between items-center h-17 lg:h-20 left-0 right-0 text-white"
  >
    <app-logo class="hidden lg:block" />
    <div class="lg:hidden">Close</div>

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

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    CartIcon
  }
};
</script>

<style lang="scss" scoped></style>
