tinymce.init({
    selector: '#my-editor'
  });
  document.getElementById('my-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      var content = tinymce.get('my-editor').getContent(); // Get the content from the editor
      console.log(content); // Do something with the content, like sending it to the server
      var myDiv = document.getElementById("display");
      myDiv.innerHTML = "<plaintext>"+  content;

  });
  