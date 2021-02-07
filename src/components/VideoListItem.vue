<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="video.snippet.thumbnails.default.url" :width="video.snippet.thumbnails.default.width" :height="video.snippet.thumbnails.default.height" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ video.snippet.title }}</h5>
          <p class="card-text"><small class="text-muted">{{ video.snippet.publishedAt }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { VideoItem } from "@/models/VideoItem";

export default defineComponent({
  name: "VideoListItem",
  props: {
    video: {
      type: Object as PropType<VideoItem>,
      required: true
    }
  },
  setup(props, context) {
    return {};
  }
});
</script>

<style lang="scss" scoped>
</style>
