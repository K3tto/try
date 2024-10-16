// The base URL for embedding Google Drive videos
var driveEmbedBase = "https://drive.google.com/file/d/";

// Function to embed Google Drive video
function embedDriveVideo(videoId) {
    var iframe = document.createElement("iframe");
    iframe.width = "1100";
    iframe.height = "620";
    iframe.src = driveEmbedBase + videoId + "/preview?autoplay"; // Add autoplay query parameter
    iframe.allow = "autoplay"; // Allow autoplay
    iframe.frameBorder = "0";

    // Remove any existing player and insert the new one
    var playerDiv = document.getElementById("drive_player");
    playerDiv.innerHTML = "";
    playerDiv.appendChild(iframe);
}

// Set up event listeners for the video thumbnails
var videoThumbs = document.getElementsByClassName("video-thumb");
for (var i = 0; i < videoThumbs.length; i++) {
    videoThumbs[i].addEventListener("click", function () {
        var videoId = this.getAttribute("data-drive-id");
        embedDriveVideo(videoId);
    });
}

// Auto-load and auto-play the first video on page load
window.onload = function () {
    var firstVideoId = document.querySelector(".video-thumb").getAttribute("data-drive-id");
    embedDriveVideo(firstVideoId); // Embed the first video on load
};
