const config =
  process.env.NODE_ENV === "development"
    ? { API_ENDPOINT: "http://localhost:9000" }
    : { API_ENDPOINT: "https://siri-backend.vercel.app" };

export default config;
