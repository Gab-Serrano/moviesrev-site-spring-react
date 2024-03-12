import axios from "axios";

export default axios.create({

  baseURL: "https://d794-186-79-99-43.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
