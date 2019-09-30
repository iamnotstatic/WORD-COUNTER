document.addEventListener("DOMContentLoaded", function(event) {
	function reg(e){
      e.preventDefault();

      let textarea = document.getElementById('summernote').value;
      let wordMsg = document.getElementById('word');
      let charMsg = document.getElementById('character');
      let characterCount;
      let wordCount;

      characterCount = textarea.length;
      charMsg.innerHTML = characterCount;

      wordCount = textarea.split(' ');
      checkWord = wordCount.length;
      if (checkWord === 1) {
      	 word.innerHTML = 0;
      } else{
      	 word.innerHTML = checkWord;
      }
      
    }
    document.getElementById('regForm').addEventListener('submit', reg, false);
});