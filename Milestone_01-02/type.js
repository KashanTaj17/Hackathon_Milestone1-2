var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skill");
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "Block";
    }
    else {
        skills.style.display = "none";
    }
});
