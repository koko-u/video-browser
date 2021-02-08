<template>
  <div v-if="currentVideo" class="col-md-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        id="ytplayer"
        class="embed-responsive-item"
        type="text/html"
        :src="videoUrl"
        frameborder="0"
      ></iframe>
    </div>
    <div class="details">
      <h4>{{ currentVideo?.snippet.title }}</h4>
      <p>
        {{ currentVideo?.snippet.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { State } from "@/store/state";
import { useStore } from "vuex";
import { VideoItem } from "@/models/VideoItem";

export default defineComponent({
  name: "VideoDetail",
  props: {},
  setup(props, context) {
    const store = useStore<State>();
    const currentVideo = computed<VideoItem | undefined>(() => {
      return store.getters.currentVideo
    });
    const videoUrl = computed<string | undefined>(() => {
      const currentVideo = store.getters.currentVideo;
      if (currentVideo) {
        return `https://www.youtube.com/embed/${currentVideo.id.videoId}`;
      } else {
        return undefined;
      }
    });
    return {
      currentVideo,
      videoUrl
    };
  }
});
</script>

<style lang="scss" scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
