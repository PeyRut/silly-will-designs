function resizeIframe(iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 300 + 'px'; // Add 300 pixels to the height
}

document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById('productFrame');
    iframe.onload = function() {
        resizeIframe(iframe);
    };
    window.addEventListener('resize', function() {
        resizeIframe(iframe);
    });
});
