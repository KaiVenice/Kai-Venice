document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    const homeSection = document.getElementById("home");
    homeSection.style.display = "block";

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            sections.forEach(section => {
                section.style.display = "none";
            });

            targetSection.style.display = "block";
        });
    });
});


function navigateTo(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'block';

    targetSection.scrollIntoView({ behavior: 'smooth' });
}
