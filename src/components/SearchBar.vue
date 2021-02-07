<template>
  <div>
    <input class="form-control" type="text" v-model="searchTerm" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { State } from "@/store/state";
import { useStore } from "vuex";
import { SEARCH_VIDEO } from "@/store/action-types";

export default defineComponent({
  name: "SearchBar",
  props: {},
  setup(props, context) {
    const store = useStore<State>();
    const searchTerm = ref("");
    watch(searchTerm, async searchTerm => {
      await store.dispatch(SEARCH_VIDEO, { searchTerm });
    });

    return {
      searchTerm
    };
  }
});
</script>

<style lang="scss" scoped>
input {
  width: 75%;
}
div {
  text-align: center;
  margin: 20px;
}
</style>
