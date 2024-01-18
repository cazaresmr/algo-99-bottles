function bottleSong() {
  for (var i = 99; i > 0; i--) {
    // Use ternary operator to handle singular and plural forms
    var bottlesText = i === 1 ? " bottle" : " bottles";

    console.log(
      i + bottlesText + " of beer on the wall, " + i + bottlesText + " of beer."
    );

    if (i > 1) {
      console.log(
        `Take one down and pass it around, ${i - 1}${
          i - 1 === 1 ? " bottle" : " bottles"
        } of beer on the wall.`
      );
    } else {
      console.log(
        "Take one down and pass it around, no more bottles of beer on the wall."
      );
    }
  }
}

bottleSong();
