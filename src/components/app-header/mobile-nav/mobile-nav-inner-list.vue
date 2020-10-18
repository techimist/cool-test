<template>
  <ul>
    <li v-for="navObj in linkList" :key="navObj.title">
      <div class="flex justify-between p-3 border-t border-gray-600">
        <span>{{ navObj.title }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MobileNavInnerList',
  props: ['linkList']
}
</script>
