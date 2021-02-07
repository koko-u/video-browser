import axios from "axios";
import { VideoItem } from "@/models/VideoItem";

export const searchYoutube = async (
  searchTerm: string
): Promise<VideoItem[]> => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        key: process.env.VUE_APP_API_KEY,
        part: "snippet",
        type: "video",
        q: searchTerm
      }
    }
  );
  return response.data.items as VideoItem[];
};
