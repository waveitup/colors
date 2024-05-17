const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 24;

const generatePalette = () => {
    container.innerHTML = ""; // Clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {

        // Generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        // Creating a new 'li' element and inserting it to the container
        const color = document.createElement("li")
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>`;
        
        // Adding click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);

    }
}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");

    // Copying the hex value, updating the text to copied
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 2000);
    })
}

refreshBtn.addEventListener("click", generatePalette)