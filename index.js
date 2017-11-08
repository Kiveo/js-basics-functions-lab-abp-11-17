// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  blocks = distance - 42;
  if (distance <= 42) {
      blocks = 42 - distance;
  }
  return blocks;
}

function distanceFromHqInFeet(distance) {
  feet = distanceFromHqInBlocks(distance) * 264;
  return feet;
}
 function distanceTravelledInFeet(start, destination) {
   startft = start * 264;
   endft = destination * 264;
   if (startft < endft ){
     feet = endft - startft;
   }
   else {
     feet = startft - endft;
   }
   return feet;
 }

function calculatesFarePrice(start, destination) {
  cost = distanceTravelledInFeet(start, destination) * 0.02;
  switch (feet) {
    case (feet >= 400):
        return 0;
    case (feet > 400 && feet <2000):
      return feet * 0.02;
    case (feet > 2000 && feet < 2500):
      return 100;
    case (feet > 2500):
      return 'cannot travel that far';
  }
}
