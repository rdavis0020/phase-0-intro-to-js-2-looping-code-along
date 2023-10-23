for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(namesArray, eventName) {
  const thankYouMessages = [];

  for (let i = 0; i < namesArray.length; i++) {
    const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;

}
const startingNumber = 10;
countDown(startingNumber);
function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}
const names = ["Charlie", "Samip", "ali"];
const occation = "birthday"
const message = writeCards(names, occasion);

function writeThankYouCards(names) {
  const thankYouMessages = []
  for (let i= 0; i < names.length; i++){
    const message = "Thank you, ${names[i]}, for the wonderful ${occasion} gift!"
  return thankYouMessages;}
  }