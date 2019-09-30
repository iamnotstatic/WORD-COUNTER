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
      word.innerHTML = wordCount.length;
      
    }
    document.getElementById('regForm').addEventListener('submit', reg, false);
});