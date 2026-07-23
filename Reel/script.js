const StillDesc = [
    "Description1",
    "Description2",
    "Description3",
    "Description4",
    "Description5",
    "Description6",
    "Description7",
    "Description8",
    "Description9",
    "Description10",
    "Description11",
    "Description12",
]

const VidDesc = [
    "Description1",
    "Description2",
    "Description3",
    "Description4",
]

const videoid = [
    "OJ7pZCVOq5M",
    "Bunrt02t-fw",
    "3",
    "4"
];

// --- Stills Gallery ---
const stills = document.getElementById("stills");

for (let i = 1; i <= 12; i++) {
    const stillBox = document.createElement("div");
    stillBox.id = `stillbox${i}`;
    stillBox.classList.add("still-item");

    stillBox.innerHTML = `
        <img id="still${i}" class="still-img" src="https://pub-afc509d8cc7d4e5f870756f5f37512c1.r2.dev/reel/${i}.jpg" alt="still${i}">
        <p id="stilldesc${i}" class="still-desc">${StillDesc[i-1]}</p>
    `;

    stills.appendChild(stillBox);
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
