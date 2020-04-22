const slugify = require('slugify');

const text1 = "Fener ve galatasaray ilk maçında yenişemiyor.";
const text2 = "Fener ve galatasaray ilk maçında birbirlerine yenişemedi.";
console.log(slugify(text1)); // it deletes space characters and arange out of english char. 
console.log(slugify(text2,'*')); // it fulfiil spaces with * char.