const config =
  process.env.NODE_ENV === "development"
    ? { API_ENDPOINT: "http://localhost:9000/api" }
    : { API_ENDPOINT: "https://yet-to-configure" };

export default config;
