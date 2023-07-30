for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; 
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; 
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