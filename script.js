const projects = [
  "3-col-cards",
  "results-summary-component",
  "four-card-feature-section",
  "sunnyside-agency-landing-page",
  "testimonials-grid-section",
  "nft-preview-card-component",
  "fylo-landing-page",
  "huddle-landing-page-with-alternating-feature",
  "clipboard-landing-page",
  "social-proof-section",
];

const list = document.getElementById("list-projects");

projects.forEach((project, i) => {
  const projectCard = document.createElement("li");
  const projectLink = document.createElement("a");

  const img = document.createElement("img");
  img.src = `./${project}/design/desktop-design.jpg`;

  projectLink.href = `./${project}/index.html`;
  projectLink.innerText = `${i + 1}.${formatName(project)}`;
  projectLink.prepend(img);
  // projectCard.appendChild(img);
  projectCard.appendChild(projectLink);

  list.appendChild(projectCard);
});

function formatName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
