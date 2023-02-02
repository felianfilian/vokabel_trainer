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

console.log(localStorage.getItem("dictionary"));
