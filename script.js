let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};

function addWord() {
  dictionary[germanText.value] = englishText.value;
  localStorage.setItem("dictionary", JSON.stringify(dictionary));
  germanText.value = "";
  englishText.value = "";
}

function resetDictionary() {
  localStorage.removeItem("dictionary");
}

function showWords() {
  let word = "hello"
  for(let key in dictionary){
    vocabularyList.innerHTML += `<li>${key}</li>`;
  }
  vocabularyList.innerHTML += `<li>${word}</li>`;
}

showWords();

console.log(localStorage.getItem("dictionary"));
