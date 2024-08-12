module.exports = function toReadable(number) {
    const ONES = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const TENS = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let output = "";

    let checkThousands = Math.floor(number / 100);
    let checkTens = Math.floor((number % 100) / 10);
    let checkOnes = number % 10;

    if (number === 0) return "zero";

    if (checkThousands > 0) {
        output += ONES[checkThousands] + " " + "hundred";

        if (checkTens > 0 || checkOnes > 0) output += " ";
    }

    if (checkTens > 1) {
        output += TENS[checkTens] + " " + ONES[checkOnes];
    } else {
        output += ONES[checkTens * 10 + checkOnes];
    }
    return output.trim();
};
