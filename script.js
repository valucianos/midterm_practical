var i = 0;
function buttonClick() {
  document.body.querySelector(".wrapper").innerHTML = ++i;
}
var wrapperEle = document.body.querySelector(".wrapper");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for (var i = 0; i < list.length; i++) {
  var listEle = document.createElement("div");
  listEle.innerHTML = list[i].name;
  wrapperEle.appendChild(listEle);
  if (list[i].age >= 40) {
    wrapperEle.appendChild(listEle).style.color = "red";
  }
}

document.body.querySelector(".button").addEventListener("click", function () {
  buttonClick();
})