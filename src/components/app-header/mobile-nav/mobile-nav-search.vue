<template>
  <div
    class="flex justify-between p-3 border-t border-gray-600 font-light text-black relative"
  >
    <label :id="_uid" class="hidden">Search</label>
    <input
      :aria-labelledBy="_uid"
      class="w-full h-14 rounded-full px-4"
      placeholder="Search"
      autofocus
    />
    <search-icon
      class="absolute text-gray-400 right-0 mr-8 top-half transform -translate-y-1/2"
    />
  </div>
</template>

<script>
import SearchIcon from "../../icons/search-icon";

export default {
  name: "MobileNavSearch",
  components: {
    SearchIcon
  }
};
</script>
