<template>
  <ul class="list-group">
    <VideoListItem v-for="video in videoList" :key="video.etag" :video="video" />
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { State } from "@/store/state";
import { VideoItem } from "@/models/VideoItem";
import VideoListItem from "@/components/VideoListItem.vue";

export default defineComponent({
  name: "VideoList",
  components: { VideoListItem },
  props: {},
  setup(props, context) {
    const store = useStore<State>();
    const videoList = computed<VideoItem[]>(() => store.getters.videoList);

    return {
      videoList
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
