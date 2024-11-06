// Type assertion to specify that the elements exist and are not null
const toggleSkillsButton = document.getElementById("toggle-skills-btn") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

// Adding event listener for the button
toggleSkillsButton.addEventListener("click", () => {
    // Check if the skills section is hidden
    if (skillsSection.classList.contains("hidden")) {
        skillsSection.classList.remove("hidden");
        toggleSkillsButton.textContent = "Hide Skills"; // Change button text
    } else {
        skillsSection.classList.add("hidden");
        toggleSkillsButton.textContent = "Show Skills"; // Change button text
    }
});
