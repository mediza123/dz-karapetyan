function countWords() {
    const text = prompt("Введите строку:").toLowerCase();
  
    const words = text.split(" ");
    const wordCount = {};
  
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
  
    for (const [word, count] of Object.entries(wordCount)) {
        console.log(`${word}: ${count}`);
    }
  }
  
  countWords();
  
