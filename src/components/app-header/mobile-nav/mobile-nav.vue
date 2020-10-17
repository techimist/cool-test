<template>
  <div>
    <component :is="cn" />
  </div>
</template>

<script>
import MobileNavInnerList from './mobile-nav-inner-list';

export default {
  name: 'MobileNav',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MobileNavInnerList,
  },
  data() {
    return {
      cn: 'MobileNavInnerList',
    };
  },
}
</script>
