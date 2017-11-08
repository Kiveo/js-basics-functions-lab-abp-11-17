// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  blocks = distance - 42;
  if (distance <= 42) {
      blocks = 42 - distance;
  }
  return blocks;
}

function distanceFromHqInFeet(distance) {
  distanceFromHqInBlocks(distance);
  feet = distanceFromHqInBlocks * 264;
  return feet;
}
