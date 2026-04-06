chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        console.log("Outgoing Request:", details.url);
    },
    { urls: ["<all_urls>"] }
);

chrome.webRequest.onCompleted.addListener(
    (details) => {
        console.log("Response received:", details.url);
    },
    { urls: ["<all_urls>"] }
);