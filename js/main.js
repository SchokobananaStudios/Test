const BASE_PATH =
    window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
        ? "/"
        : "/Test/";

const LOTTIE_PATH = `${BASE_PATH}assets/lottie/`;


console.log(`BASE_PATH: ${BASE_PATH}`);
console.log(`LOTTIE_PATH: ${LOTTIE_PATH}`);