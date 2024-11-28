
// router.js

function navigateTo(url) {
    history.pushState(null, null, url);
    handleNavigation(url);
}

function handleNavigation(url) {
    // Perform actions based on the URL
    switch (url) {
        case '/':
            loadContent('index.html');
            break;
        case '/work':
            loadContent('work.html');
            break;
        case '/contact':
            loadContent('contact.html');
            break;
        default:
            loadContent('404.html');
    }
}

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// Initial page load or manual URL entry
handleNavigation(window.location.pathname);

// Listen for back/forward navigation
window.addEventListener('popstate', () => {
    handleNavigation(window.location.pathname);
});
