let hunger = 100;
let happiness = 100;

function feedPet() {
  hunger += 10;
  if (hunger > 100) hunger = 100;
  happiness += 5;
  updateStatus();
}

function playPet() {
  happiness += 10;
  if (happiness > 100) happiness = 100;
  hunger -= 5;
  updateStatus();
}

function updateStatus() {
  document.getElementById("hunger").innerText = hunger;
  document.getElementById("happiness").innerText = happiness;
}

function decreaseStats() {
  hunger -= 1;
  happiness -= 1;
  if (hunger < 0) hunger = 0;
  if (happiness < 0) happiness = 0;
  updateStatus();
}

setInterval(decreaseStats, 3000); // decrease every 3 seconds
updateStatus();