function resizeIframe(iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded!");
});