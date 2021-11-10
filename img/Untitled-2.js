let sentence = [`Hello `, ` my `, `name`, `is`, `Person`];
cat = "";

// How do you keep the spaces between the words if I remve them from the array?

for (let i = 0; i < sentence.length; i++) {
  cat += sentence[i] + "$";
}
console.log(cat);
