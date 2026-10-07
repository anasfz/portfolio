let menuBtn = document.querySelector(".menu-btn");
let navbar = document.querySelector("#navbar");

menuBtn.onclick = () =>{
    navbar.classList.toggle("active");
}
const projects = {
    "restaurant": {
    title: "Restaurant Website",
    description: `
        <p>The goal of this project was to design and build a modern, high-converting landing page for a restaurant to showcase their signature menu, highlight their culinary story, and drive online table reservations.</p>

        <h3>Key Challenges</h3>
        <ul>
            <li>Ensuring a mobile-first, seamless browsing experience, as the majority of restaurant customers visit via smartphones.</li>
            <li>Presenting an extensive food menu without cluttering the interface or slowing down page performance.</li>
            <li>Creating an intuitive booking/contact flow that encourages quick conversions.</li>
        </ul>

        <h3>Solution &amp; Implementation</h3>
        <ul>
            <li>Built the layout from scratch using clean, semantic HTML5 and modern CSS3 (Flexbox &amp; Grid) for a 100% responsive design across all screen sizes.</li>
            <li>Implemented interactive filtering using JavaScript to let users switch seamlessly between menu categories (starters, mains, desserts) without page reloads.</li>
            <li>Optimized high-resolution food images and assets to maintain ultra-fast loading times.</li>
            <li>Integrated clear Call-to-Action (CTA) buttons for reservations and location details, delivering an elegant and user-friendly experience.</li>
        </ul>
    `,
    images: [
        "images/screencapture-anasfz-github-io-restorent-web-2026-10-07-16_15_37.png",
        "images/mobileResto.jpg",
    ],
    live: "https://anasfz.github.io/restorent-web/",
    github: "https://github.com/anasfz/restorent-web"
},
        "lol-wiki": {
        title: "League of Legends Champions Wiki - Interactive Web",
        description: `
            <p>In this project, I developed a fully responsive and interactive web application that serves as a comprehensive wiki for League of Legends champions. The app allows users to explore detailed information, abilities, and stats for different characters in a seamless and visually appealing user interface.</p>

            <h3>Key Features</h3>
            <ul>
                <li><strong>Dynamic Data Fetching:</strong> Integrated with external APIs (like Riot's Data Dragon) to display up-to-date champion data.</li>
                <li><strong>Search &amp; Filtering:</strong> Implemented efficient search functionality allowing users to find specific champions instantly.</li>
                <li><strong>Responsive Design:</strong> Ensured a flawless user experience across all devices (Desktop, Tablet, and Mobile).</li>
                <li><strong>Modern UI/UX:</strong> Designed a clean, gaming-themed interface that is easy to navigate.</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>RESTful APIs integration</li>
                <li>Git &amp; GitHub for version control</li>
            </ul>
        `,
        images: [
            "images/lol-champions-wiki2.png",
            "images/Capture1LOL.PNG",
            "images/CaptureLOL2.PNG",
        ],
        live: "https://anasfz.github.io/lol-champions-wiki/",
        github: "https://github.com/anasfz/lol-champions-wiki"
    }
};
const modal = document.querySelector("#project-modal");
const modalBox = document.querySelector(".modal-box");
const modalTitle = document.querySelector("#modal-title");
const modalDesc = document.querySelector("#modal-desc");
const modalLive = document.querySelector("#modal-live");
const modalGithub = document.querySelector("#modal-github");
const modalImages = document.querySelector("#modal-images");
const modalClose = document.querySelector(".modal-close");
const projectCards = document.querySelectorAll(".project-card");

function openModal(id){
    const project = projects[id];
    if(!project)return;

    modalTitle.textContent = project.title;
    modalDesc.innerHTML = project.description;
    modalLive.href = project.live;
    modalGithub.href = project.github;

    modalImages.innerHTML = "";
    project.images.forEach((src) =>{
        const img = document.createElement("img");
        img.src = src;
        img.alt = project.title + " screenshot";
        modalImages.appendChild(img);
    });
    modalBox.scrollTop = 0;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

projectCards.forEach((card) => {
    card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        openModal(card.dataset.project);
    });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
