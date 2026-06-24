const BASE_PATH =
    window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
        ? "/"
        : "/YOUR_REPOSITORY_NAME/";

const LOTTIE_PATH = `${BASE_PATH}assets/lottie/`;