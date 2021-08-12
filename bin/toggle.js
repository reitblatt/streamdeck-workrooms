(target) => {
    // Regular expressions to idetify buttons. These must be kept in-sync
    // between toggle.js <=> query.js
    // ***** BEGIN *****
    let micButtonRegex = /^(mute|unmute) microphone$/i;
    let cameraButtonRegex = /^turn (off|on) (video|camera)$/i;
    let handButtonRegex = /^(raise|lower) hand$/i;
    // ***** END *****

    let re =
        (target === "mic") ? micButtonRegex :
        (target === "camera") ? cameraButtonRegex :
        (target === "hand") ? handButtonRegex :
        null;

    if (re === null) {
        return;
    }

    Array.from(document.querySelectorAll('button'))
        .filter((n) => { return n.textContent.match(re); })
        .forEach((b) => { b.click(); });
}