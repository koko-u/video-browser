import { ActionContext, createStore } from "vuex";
import { VideoItem } from "@/models/VideoItem";
import { SEARCH_VIDEO } from "@/store/action-types";
import { State } from "@/store/state";
import { searchYoutube } from "@/api";

export default createStore({
  state: {
    videoList: []
  } as State,
  mutations: {
    setVideoList(state: State, videoList: VideoItem[]) {
      state.videoList = videoList;
    }
  },
  actions: {
    async [SEARCH_VIDEO](
      context: ActionContext<State, State>,
      payload: { searchTerm: string }
    ) {
      const videoList = await searchYoutube(payload.searchTerm);
      context.commit("setVideoList", videoList);
    }
  },
  getters: {
    videoList(state: State) {
      return state.videoList;
    }
  }
});
