function _base52ElementEncode(input) {
    if (input >= 0 && input < 26)
        return String.fromCharCode(input + 97);
    else if (input >= 26 && input < 52)
        return String.fromCharCode(input + 65 - 26)
}

function _base52ElementDecoder(input) {
    if (input.length > 1) {
        throw  "only one number must be send";
        return;
    }
    const x = input.charCodeAt(0)
    if (x >= 97 && x <= 122)
        return x - 97;
    else if (x >= 65 && x <= 90)
        return x - 65 + 26;

    return x;
}

function base52Encode(input) {
    const base = 52;
    const result = [];
    let value = input;
    while (value > 0) {
        result.push(_base52ElementEncode(value % base))
        value = Math.floor(value / base);
    }

    return result.join('');
}

function base52Decoder(input) {
    const base = 52;
    let result = 0;
    for (i = 0; i < input.length; i++) {
        result += _base52ElementDecoder(input[i]) * Math.pow(base, i);
    }

    return result;
}

console.log(base52Encode(98346998734));
console.log(base52Decoder('kzZOIYe'));
