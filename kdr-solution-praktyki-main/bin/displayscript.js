tinymce.init({
    selector: '#my-editor'
  });
  document.getElementById('my-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    var content = tinymce.get('my-editor').getContent(); // Get the content from the editor
    var myDiv = document.getElementById("display");
    myDiv.innerHTML = "<plaintext>"+  content;
    var x = replaceWords(content,Map1)
    var myDiv2 = document.getElementById("display2");
    myDiv2.innerHTML = "<plaintext>"+  x;
  });

  document.getElementById('my-form2').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const myDiv = document.getElementById("display2");
    const textValue = display2.textContent;
    var content = textValue;
    var x = replaceWords2(content,Map2)
    var myDiv3 = document.getElementById("display3");
    myDiv3.innerHTML = "<plaintext>"+  x;
  });

