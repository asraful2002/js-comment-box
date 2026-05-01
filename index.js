
// const btn = document.getElementById("addBtn");
// const input = document.getElementById("commentInput");
// const list = document.getElementById("commentList");



// btn.addEventListener("click", function () {
//  let text = input.value;

//  if(text === ""){
//   return;
//  }

//  if(Number(text)){
//   alert("Numbers are not allowed!")
//   return;
//  }

// let words = text.split(" ");
//  if (words.length > 10) { 
//   alert("Maximum 10 words allowed!"); return; }

//  const items = list.getElementsByTagName("li");
//  for(let i=0; i<items.length;i++){
//   if(items[i].innerText === text){
//     alert("This Comment Already Add")
//     return;
//   }
//  }

//  const li = document.createElement("li");
//  li.innerText = text;
//  list.appendChild(li);
//  input.value = "";
// });



const btn = document.getElementById("addBtn");
const input = document.getElementById("commentInput");
const list = document.getElementById("commentList");

let comments = [];

btn.addEventListener("click", function () {
  let text = input.value;

  if (text === "") {
    return;
  }

  if (!isNaN(text)) {
    alert("number not allow");
    return;
  }

  let words = text.split(" ");
  if (words.length > 10) {
    alert("Maximum 10 word");
    return;
  }

  const items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    if (items[i].innerText === text) {
      alert("This Comment Already Add");
      return;
    }
  }

  // ID generate
  const id = Math.random().toString(36).substring(2, 9);

  // object create
  const commentObj = {
    id: id,
    text: text
  };

  comments.push(commentObj);

  console.log(comments);

  // UI show (ID আগে, text পরে)
  const li = document.createElement("li");
 li.innerText = id + " (" + text + ")";
  list.appendChild(li);

  input.value = "";
});