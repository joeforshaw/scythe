export function shuffleArray(unshuffled) {
  var shuffled = unshuffled.slice(0);
  var j, x, i;
  for (i = shuffled.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = shuffled[i - 1];
      shuffled[i - 1] = shuffled[j];
      shuffled[j] = x;
  }
  return shuffled;
};
