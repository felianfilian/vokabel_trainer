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
  
}

console.log(localStorage.getItem("dictionary"));
