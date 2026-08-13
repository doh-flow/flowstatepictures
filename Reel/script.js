const MEDIA = "https://pub-afc509d8cc7d4e5f870756f5f37512c1.r2.dev/";

document.getElementById('logo').src = MEDIA + "main/FlowstateLogo.png";

const StillDesc = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

const VidDesc = [
    "",
    "",
    "",
    ""
]

const videoid = [
    "OJ7pZCVOq5M",
    "Bunrt02t-fw",
    "La6SeC7Je88",
    "4"
];

// --- Stills Gallery ---
const stills = document.getElementById("stills");

const StillTotal = 12;

for (let i = 1; i <= StillTotal; i++) {
    const stillBox = document.createElement("div");
    stillBox.id = `stillbox${i}`;
    stillBox.classList.add("still-item");

    const img = document.createElement("img");
    img.id = `still${i}`;
    img.className = "still-img";
    img.src = `https://pub-afc509d8cc7d4e5f870756f5f37512c1.r2.dev/reel/${i}.jpg`;
    img.alt = `still${i}`;

    const desc = document.createElement("p");
    desc.id = `stilldesc${i}`;
    desc.className = "still-desc";
    desc.textContent = StillDesc[i - 1];

    stillBox.appendChild(img);
    stillBox.appendChild(desc);
    stills.appendChild(stillBox);

    function applyAR(box, image) {
        const ar = image.naturalWidth / image.naturalHeight;
        const targetHeight = 230; // match the max of your clamp
        box.style.flexBasis = `clamp(10px,calc(${ar} * 18vw),${ar * targetHeight}px)`;
        // Drive the flex-grow of this item by its true aspect ratio
        box.style.setProperty("--ar", ar);
    }

    if (img.complete && img.naturalWidth > 0) {
        applyAR(stillBox, img);
    } else {
        img.addEventListener("load", () => applyAR(stillBox, img));
        img.addEventListener("error", () => stillBox.style.setProperty("--ar", 1.5)); // fallback ratio
    }
}


// --- Video Screening ---
const videos = document.getElementById("videos");

for (let i = 1; i <= 4; i++) {
    const videoItem = document.createElement("div");
    videoItem.id = `video${i}`;
    videoItem.classList.add("video-item");

    videoItem.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoid[i - 1]}" allowfullscreen></iframe>
        <p class="video-desc">${VidDesc[i-1]}</p>
    `;

    videos.appendChild(videoItem);
}
