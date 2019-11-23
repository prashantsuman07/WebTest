const btn = document.querySelector("button");
const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");

//button to run
btn.addEventListener("click", () => {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  });

//function to write all the text as html code in iframe when keyup 
first.addEventListener('keyup',()=>{
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  })
  //function to write all the text as html code in iframe when pasted from clipboard 
first.addEventListener("paste", function(e) {
          e.preventDefault();
          var text = e.clipboardData.getData("text/plain");
          document.execCommand("insertText", false, text);
  });
