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
  for(let key in dictionary){
    vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
  }
}

function nextVocabulary() {
  // get random word
  let wordKeys = Object.keys(dictionary);
  randomGermanWord = wordKeys[Math.floor(Math.random() * wordKeys.length)];
  word.innerHTML = `${dictionary[randomGermanWord]}`;
}

function compare() {
  console.log(germanText.value);
  console.log(dictionary[germanText.value])
  if(dictionary[germanText.value] == randomGermanWord) {
    console.log("YES");
  }
  else{
    //wrong
  }
}

console.log(localStorage.getItem("dictionary"));
