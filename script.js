let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};

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
  for(let key in dictionary){
    vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
  }
}

function nextVocabulary() {
  // get random word
  let wordKeys = Object.keys(dictionary);
  let randomGermanWord = wordKeys[Math.floor(Math.random() * wordKeys.length)];
  word.innerHTML = `${dictionary[randomGermanWord]}`;
}

function compare() {
  if(dictionary[germanText.value] == randomGermanWord) {
    console.log("YES");
  }
}

console.log(localStorage.getItem("dictionary"));
