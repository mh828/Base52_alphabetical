let HashMap = [];
let HashMapR = [];
for (i = 65; i <= 90; i++) {
  const indx = HashMap.push(String.fromCharCode(i));
  HashMapR[String.fromCharCode(i)] = indx - 1;
}

function toBase26(input) {
  let value = input;
  let array = [];
  const base = 26;
  while (value > 0) {
    array.push(value % base);
    value = parseInt(value / base, 10);
  }

  return array
    .map(x => {
      return HashMap[x];
    })
    .join('');
}

function fromBase26(input) {
  const base = 26;
  value = 0;
  for (i = 0; i < input.length; i++) {
    value += HashMapR[input[i]] * Math.pow(base, i);
  }

  return value;
}


 value = 983482;
 base26 = toBase26(value);
 console.log(base26);
console.log(fromBase26(base26));
