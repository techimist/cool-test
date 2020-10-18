<template>
  <ul>
    <li v-for="navObj in linkList" :key="navObj.title">{{navObj.title}}</li>
  </ul>
</template>

<script>
export default {
  name: 'DesktopNavInnerList',
  props: ['linkList']
}
</script>
