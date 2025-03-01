document.addEventListener('DOMContentLoaded', function () {
    fetch('json/news.json')
        .then(response => response.json())
        .then(data => {
            const newsSection = document.getElementById('news');

            data.forEach(item => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                const title = document.createElement('h3');
                title.textContent = item.title;
                newsItem.appendChild(title);

                const date = document.createElement('p');
                date.classList.add('news-date');
                //Formatting date:
                const originalDate = new Date(item.date);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = originalDate.toLocaleDateString(undefined, options);
                date.textContent = formattedDate
                newsItem.appendChild(date);

                const summary = document.createElement('p');
                summary.textContent = item.summary;
                newsItem.appendChild(summary);

                const fullText = document.createElement('div');
                fullText.classList.add('full-text');
                fullText.innerHTML = `<p>${item.fullText}</p>`;
                fullText.style.display = 'none'; // Initially hide the full text
                newsItem.appendChild(fullText);

                const readMoreLink = document.createElement('a');
                readMoreLink.href = '#';
                readMoreLink.classList.add('read-more');
                readMoreLink.textContent = 'Read More';
                newsItem.appendChild(readMoreLink);

                readMoreLink.addEventListener('click', function (event) {
                    event.preventDefault();
                    if (fullText.style.display === 'none') {
                        fullText.style.display = 'block';
                        readMoreLink.textContent = 'Read Less';
                    } else {
                        fullText.style.display = 'none';
                        readMoreLink.textContent = 'Read More';
                    }
                });

                newsSection.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error loading news:', error));

    fetch('json/project.json')
        .then(response => response.json())
        .then(data => {
            const projectsSection = document.getElementById('projects');

            data.forEach(item => {
                const projectItem = document.createElement('div');
                projectItem.classList.add('project-item');

                const title = document.createElement('h3');
                title.textContent = item.title;
                projectItem.appendChild(title);

                const date = document.createElement('p');
                date.classList.add('project-date');
                //Formatting date:
                const originalDate = new Date(item.date);
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                };
                const formattedDate = originalDate.toLocaleDateString(undefined, options);
                date.textContent = formattedDate
                projectItem.appendChild(date);

                const summary = document.createElement('p');
                summary.textContent = item.summary;
                projectItem.appendChild(summary);

                if (item.imageUrl) {
                    const image = document.createElement('img');
                    image.src = item.imageUrl;
                    image.alt = item.title;
                    image.style.maxWidth = '100%'; // Responsive image
                    projectItem.appendChild(image);
                }

                const readMoreLink = document.createElement('a');
                readMoreLink.href = 'project_AAAI.html?title=' + encodeURIComponent(item.title) + '&summary=' + encodeURIComponent(item.summary) + '&fullText=' + encodeURIComponent(item.fullText);
                readMoreLink.classList.add('read-more');
                readMoreLink.textContent = 'Read More';
                readMoreLink.target = '_blank'; // Open in new tab
                projectItem.appendChild(readMoreLink);

                projectsSection.appendChild(projectItem);
            });
        })
        .catch(error => console.error('Error loading projects:', error));


    fetch('json/updates.json')
        .then(response => response.json())
        .then(data => {
            const timelineContent = document.getElementById('timeline-content');
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.classList.add('update-item');

                const date = new Date(item.date);
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                };
                const formattedDate = date.toLocaleDateString(undefined, options);

                let contentHTML = `<span class="update-date">${formattedDate}</span> - <span class="update-content">${item.content}</span>`;

                if (item.link) {
                    contentHTML += ` <a href="${item.link}" target="_blank" class="update-link">[Presentation]</a>`;
                }
                if (item.poster) {
                    contentHTML += ` <a href="${item.poster}" target="_blank" class="update-link">[Poster]</a>`;
                }

                listItem.innerHTML = contentHTML;
                timelineContent.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading updates:', error));
});
