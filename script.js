let dictionary = {
  "Hallo": "hello",
  "Freund": "friend",
};

function addWord() {
  dictionary[germanText.value] = englishText.value;
  localStorage.setItem("dictionary", JSON.stringify(dictionary));
  germanText.value = "";
  englishText.value = "";
}
