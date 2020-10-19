<template>
  <div
    aria-hidden="true"
    :class="[value ? 'burger--active' : '', 'block lg:hidden burger']"
  >
    <button
      @click="toggleDrawer"
      class="burger-button relative block h-12 px-3 bg-transparent rounded-none cursor-pointer transition-color duration-200"
    >
      <span class="block w-full h-full transform">
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span
      ></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BurgerIcon",
  props: ["value"],
  methods: {
    toggleDrawer() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.burger-button {
  width: 2.625rem;
  border: none !important;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.transform {
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;

  transform: translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));

  .burger-bar {
    position: absolute;
    --bg-opacity: 1;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
    top: 50%;
    right: 0;
    left: 0;
    width: auto;
    height: 0.125rem;
    transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}

.burger-bar--1 {
  transform: translateY(-0.45rem);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
}

.burger-bar--3 {
  transform: translateY(0.45rem);
}

.burger--active .burger-bar--1 {
  transform: rotate(45deg);
}

.burger--active .burger-bar--2 {
  opacity: 0;
}

.burger--active .burger-bar--3 {
  transform: rotate(-45deg);
}

.burger--active .burger-button {
  transform: rotate(-180deg);
}
</style>
