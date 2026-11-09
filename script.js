const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


//  navigation and active link styling
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.style.color = "white";
        });

        link.style.color = "#61c0bf";
    });
});


// Welcome message in console
console.log("Welcome to my Personal Portfolio!");


// // Simple profile image error handling
// const profileImage = document.querySelector(".profile img");

// profileImage.addEventListener("error", function() {
//     profileImage.alt = "Profile image not available";
// })