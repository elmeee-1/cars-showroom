const cars = [
  {
    image_name: "white",
    color: "white",
    pins: ["Panorama Roof","AMG Night Pack","Luxury Interior","Silent Drive"]
  },
  {
    image_name: "red",
    color: "red",
    pins: ["Sport Exhaust","AMG Performance","Carbon Fiber Kit","Track Mode"]
  },
  {
    image_name: "green",
    color: "green",
    pins: ["Eco Hybrid","Smart Drive","Energy Save","Clean Interior"]
  },
  {
    image_name: "gold",
    color: "gold",
    pins: ["Sunroof Plus","Bright LED","Sport Wheels","Dynamic Look"]
  },
  {
    image_name: "blue",
    color: "blue",
    pins: ["Ocean Paint","Cool Ambient","Night Vision","Smooth Ride"]
  },
  {
    image_name: "black",
    color: "black",
    pins: ["Stealth Design","AMG Shadow Pack","Black Leather Interior","Night Performance"]
  }
];

// ========== Load inputs (radio) ==========
const colorDots = document.querySelector(".color-dots");
let html = "";
for (let i = 0; i < cars.length ; i++) {
    html += `<input oninput="colorRadio(this.id, ${i})" type="radio" name="car" id="${cars[i].color}" style="background-color: ${cars[i].color};">`;
}
colorDots.innerHTML = html;
// ========== /Load inputs (radio) ==========


// ========== Hundle change car color ==========
const inputs = document.querySelectorAll(".color-dots input");
const defaultCar = inputs[0]
defaultCar.checked = true;

function colorRadio(color, index) {
    const carimgWrapper = document.querySelector(".car-img-wrapper")
    
    console.log(index)

    carimgWrapper.innerHTML = `<img id="car-main-image"
    src="images/${color}.webp"
    alt="Mercedes-Benz AMG" />
            
    <div class="pin pin-1">${cars[index].pins[0]}</div>
    <div class="pin pin-2">${cars[index].pins[1]}</div>
    <div class="pin pin-3">${cars[index].pins[2]}</div>
    <div class="pin pin-4">${cars[index].pins[3]}</div>`
}
colorRadio(defaultCar.id, 0)
// ========== /Hundle change car color ==========