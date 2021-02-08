<template>
  <div class="card video-list-item" @click="selectVideo">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="float-left video-thumbnail" :src="thumbnailUrl" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ video.snippet.title }}</h5>
          <div>
            <small class="text-muted">{{ video.snippet.publishedAt }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { VideoItem } from "@/models/VideoItem";
import { useStore } from "vuex";
import { State } from "../store/state";
import { SELECT_VIDEO } from "../store/action-types";

export default defineComponent({
  name: "VideoListItem",
  props: {
    video: {
      type: Object as PropType<VideoItem>,
      required: true
    }
  },
  setup(props, context) {
    const store = useStore<State>();
    const thumbnailUrl = computed(
      () => props.video.snippet.thumbnails.default.url
    );
    const selectVideo = async () => {
      await store.dispatch(SELECT_VIDEO, { selectedVideo: props.video });
    };
    return {
      thumbnailUrl,
      selectVideo
    };
  }
});
</script>

<style lang="scss" scoped>
.video-thumbnail {
  width: 100%;
  height: auto;
}

.video-list-item {
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
}
</style>
