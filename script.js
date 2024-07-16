function resizeIframe(iframe) {
    iframe.style.height = (iframe.contentWindow.document.documentElement.scrollHeight + 20) + 'px'; // Add space for the buffer
}

document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById('productFrame');
    iframe.onload = function() {
        resizeIframe(iframe);
        iframe.contentWindow.addEventListener('scroll', function() {
            const scrollTop = iframe.contentWindow.document.documentElement.scrollTop;
            const scrollHeight = iframe.contentWindow.document.documentElement.scrollHeight;
            const clientHeight = iframe.contentWindow.document.documentElement.clientHeight;
            if (scrollTop + clientHeight >= scrollHeight - 10) { // Load more content if scrolled near bottom
                loadMoreContent();
            }
        });
    };
    window.addEventListener('resize', function() {
        resizeIframe(iframe);
    });
});

function loadMoreContent() {
    // Add logic to load more content if the external source supports it
    // This might involve triggering an event or calling a specific function on the external source
    console.log("Loading more content...");
}
