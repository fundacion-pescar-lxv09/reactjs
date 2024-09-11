export const searchModel = {
    host: import.meta.env.VITE_HOST ?? "https://api.giphy.com/v1",
    resource: import.meta.env.VITE_RESOURCE ?? "gifs",
    endpoint: "search",
    api_key: import.meta.env.VITE_API_KEY,
    q:"",
    limit:10,
    offset:0,
    rating:"g",
    lang:"en",
    bundle:"low_bandwidth",
    response: {}
}