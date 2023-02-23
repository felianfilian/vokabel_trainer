let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};

let randomGermanWord;

function addWord() {
  dictionary[germanText.value] = englishText.value;
  localStorage.setItem("dictionary", JSON.stringify(dictionary));
  germanText.value = "";
  englishText.value = "";
  showWords();
}

function resetDictionary() {
  localStorage.removeItem("dictionary");
}

function showWords() {
  vocabularyList.innerHTML = "";
  for (let key in dictionary) {
    vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
  }
}

function nextVocabulary() {
  // get random word
  //console.log("dic: " + Object.keys(dictionary));
  if (Object.keys(dictionary) != "") {
    let wordKeys = Object.keys(dictionary);
    randomGermanWord = wordKeys[Math.floor(Math.random() * wordKeys.length)];
    word.innerHTML = `${dictionary[randomGermanWord]}`;
  } else {
    word.innerHTML = `No Word in dictionary`;
  }
}

function compare() {
  if (germanText.value.toLowerCase() == randomGermanWord.toLowerCase()) {
    checkText.innerHTML = "That is RIGHT";
  } else {
    checkText.innerHTML = "OH NO is WRONG";
  }
  germanText.value = "";
  nextVocabulary();
}

console.log(localStorage.getItem("dictionary"));
