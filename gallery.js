document.addEventListener("DOMContentLoaded", function() {
    const featuredImage = document.querySelector("figure img");
    const figCaption = document.querySelector("figure figcaption");
    const thumbnails = document.querySelectorAll("ul li img");

    const images = [
        { src: "flowers-pink", title: "Pink Flowers" },
        { src: "flowers-purple", title: "Purple Flowers" },
        { src: "flowers-red", title: "Red Flowers" },
        { src: "flowers-white", title: "White Flowers" },
        { src: "flowers-yellow", title: "Yellow Flowers" }
    ];

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function() {
            // Update the featured image and caption
            featuredImage.src = `images/${images[index].src}-large.jpg`;
            featuredImage.alt = images[index].title;
            figCaption.textContent = images[index].title;
        });
    });
});
