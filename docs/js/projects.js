const projects = [
    {
        title: 'Netflix',
        description: "A clone of the popular Netflix platform using HTML, CSS, and JavaScript.",
        image: 'images/projects/netflix.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects/',
        demo: 'https://dothp-harshu.github.io/web_projects/netflix/',
    },
    {
        title: 'Prime Video',
        description: "A replica of Amazon's Prime Video interface built with HTML, CSS, and JavaScript.",
        image: 'images/projects/prime_video.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects',
        demo: 'https://dothp-harshu.github.io/web_projects/prime_video/',
    },
    {
        title: 'Sunnyside',
        description: "A basic webpage that uses some basic javascript animations.",
        image: 'images/projects/sunnyside.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects',
        demo: 'https://dothp-harshu.github.io/web_projects/Sunnyside/',
    },
    {
        title: 'Eduwave',
        description: "An educational platform UI built using core web technologies.",
        image: 'images/projects/eduwave.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects/',
        demo: 'https://dothp-harshu.github.io/web_projects/Eduwave/',
    },
    {
        title: 'Room',
        description: "A modern UI design for a room booking application.",
        image: 'images/projects/room.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects/',
        demo: 'https://dothp-harshu.github.io/web_projects/room/',
    },
    {
        title: 'Bookmark',
        description: "A simple and clean bookmark management interface.",
        image: 'images/projects/bookmark.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects/',
        demo: 'https://dothp-harshu.github.io/web_projects/bookmark/',
    },
    {
        title: 'Loopstudio',
        description: "A sleek and minimalistic studio portfolio website.",
        image: 'images/projects/loopstudio.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects/',
        demo: 'https://dothp-harshu.github.io/web_projects/loopstudio/',
    },
    {
        title: 'Blog Card',
        description: "A blog card is made by Css .",
        image: 'images/projects/blog_card.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects/',
        demo: 'https://dothp-harshu.github.io/web_projects/blog_card/',
    },
    {
        title: 'Echoshop',
        description: "Frontend for a e-commerce website. This ",
        image: 'images/projects/ecoshop.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects/',
        demo: 'https://dothp-harshu.github.io/web_projects/Ecoshop/',
    },
    {
        title: 'Grid',
        description: "Grid of different cards. ",
        image: 'images/projects/grid_main.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects/',
        demo: 'https://dothp-harshu.github.io/web_projects/grid_main/',
    },
    {
        title: 'Car showcase',
        description: "A animated page that shows the detail of a car by animation.",
        image: 'images/projects/car_showing.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/web_projects/',
        demo: 'https://dothp-harshu.github.io/web_projects/car_showcase/',
    },

];


function createProjectCard(project) {
    return `
        <article class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        <span>Code</span>
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);