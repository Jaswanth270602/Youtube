
// const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
// console.log(typeof(GOOGLE_API_KEY));
const GOOGLE_API_KEY="AIzaSyDoJVx7hD7BI_6MfXhIKw4XVkc3nh-KyK8";
export const YOUTUBE_VIDEOS_API=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;
console.log(YOUTUBE_VIDEOS_API);
export const YOUTUBE_SUGG_API=
"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const YOUTUBE_SUGG_API=
// "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const OFFSET_LIVE_CHAT = 25;

export const SEARCH_RESULT_API =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
    GOOGLE_API_KEY +
    "&q=";

export const FETCH_API=`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}`;    