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

export function modelArrayToObject(modelArray) {
  const models = {};
  for (let i = 0; i < modelArray.length; i++) {
    models[modelArray[i].id] = modelArray[i];
  }
  return models;
}

export function range(start, stop, step) {
  if (typeof stop == 'undefined') {
    stop = start;
    start = 0;
  }
  if (typeof step == 'undefined') {
    step = 1;
  }
  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }
  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }
  return result;
};

export function formattedTime() {
  var date = new Date();
  var str = zeroFill(date.getHours(), 2) + ":" + zeroFill(date.getMinutes(), 2) + ":" + zeroFill(date.getSeconds(), 2);
  return str;
}

export function zeroFill(number, width)
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}
