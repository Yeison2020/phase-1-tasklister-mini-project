document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    builderText(e.target.newtaskdescription.value);
    form.reset();
  });
});

function builderText(data) {
  if (data !== "") {
    let p = document.createElement("p");
    let btn = document.createElement("buttom");
    btn.addEventListener("click", deleteButtom);
    btn.textContent = "  X";
    p.append(`${data}`);
    p.appendChild(btn);
    document.querySelector("#tasks").appendChild(p);
  } else {
    return;
  }
}

function deleteButtom(e) {
  e.target.parentNode.remove();
}
