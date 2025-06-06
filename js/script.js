let mainDiv = document.querySelector(".mainDiv");
let handleChange = () => {
  let newH1 = document.createElement("h1");
  mainDiv.appendChild(newH1);
  newH1.innerHTML = "robi";
  newH1.classList.add("secndClass");
  //   newH1.className = "h1Class";
};
