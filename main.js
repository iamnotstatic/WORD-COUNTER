document.addEventListener("DOMContentLoaded", function(event) {
	function reg(e){
      e.preventDefault();

      let textarea = document.getElementById('summernote').value;
      let running;
      running = textarea.split(' ');
      let run = running.length;
      console.log(alert(run));
    }
    document.getElementById('regForm').addEventListener('submit', reg, false);
});