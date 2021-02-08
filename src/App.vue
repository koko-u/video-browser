<template>
  <div class="container">
    <SearchBar />
    <div class="row">
      <VideoDetail />
      <VideoList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import VideoList from "@/components/VideoList.vue";
import VideoDetail from "@/components/VideoDetail.vue";

export default defineComponent({
  name: "App",
  components: {
    VideoDetail,
    VideoList,
    SearchBar
  },
  props: {},
  setup(props, context) {
    return {};
  }
});
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
