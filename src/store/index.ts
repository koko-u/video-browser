import { ActionContext, createStore } from "vuex";
import { VideoItem } from "@/models/VideoItem";
import { SEARCH_VIDEO, SELECT_VIDEO } from "@/store/action-types";
import { State } from "@/store/state";
import { searchYoutube } from "@/api";

export default createStore({
  state: {
    videoList: []
  } as State,
  mutations: {
    setVideoList(state: State, videoList: VideoItem[]) {
      state.videoList = videoList;
    },
    setCurrentVideo(state: State, selectedVideo: VideoItem) {
      state.currentVideo = selectedVideo;
    }
  },
  actions: {
    async [SEARCH_VIDEO](
      context: ActionContext<State, State>,
      payload: { searchTerm: string }
    ) {
      const videoList = await searchYoutube(payload.searchTerm);
      context.commit("setVideoList", videoList);
    },
    [SELECT_VIDEO](context: ActionContext<State, State>, payload: { selectedVideo: VideoItem }) {
      context.commit("setCurrentVideo", payload.selectedVideo);
    }
  },
  getters: {
    videoList(state: State): VideoItem[] {
      return state.videoList;
    },
    currentVideo(state: State): VideoItem | undefined {
      return state.currentVideo;
    }
  }
});
