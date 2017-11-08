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
  feet = distanceTravelledInFeet() * 1;
    if (feet < 450) {
      return 0;
    } else if (feet > 400 && feet < 2000) {
      return feet * 0.02;
    } else if (feet > 2000 && feet < 2500) {
      return 25;
    } else if (feet => 2500) {
      return 'cannot travel that far';
    }
}
