import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseData} from '../../utility/parseData';


const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

// console.log('API_KEY:', API_KEY);

const query = encodeURIComponent("drop x out");

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/homePageVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    const response = await axios.get(
      `/api/youtube/v3/search?maxResults=20&q=${query}&key=${API_KEY}&part=snippet&type=video`
    );

    console.log(response.data.items);

    const items = response.data.items;

    console.log(items); 
    
    const parseData = await parseData(items);
  },
  
);
