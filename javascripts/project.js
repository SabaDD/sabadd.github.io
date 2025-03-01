document.addEventListener('DOMContentLoaded', function () {
    // Function to extract query parameters from the URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get project details from query parameters
    const projectTitle = getQueryParam('title');
    const projectSummary = getQueryParam('summary');
    const projectFullText = getQueryParam('fullText');

    // Populate the project page with details
    document.getElementById('project-title').textContent = projectTitle;
    document.getElementById('project-summary').textContent = projectSummary;
    document.getElementById('project-full-text').textContent = projectFullText;
});

