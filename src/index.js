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

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    textBuilder(e.target.newtaskdescription.value);
    form.reset();
  });
});

function textBuilder(data) {
  let p = document.createElement("p");
  let btn = document.createElement("buttom");
  btn.addEventListener("click", deleter);
  p.append(`${data}`);
  p.appendChild(btn);
  document.querySelector("#tasks").appendChild(p);
}

function deleter(e) {
  e.target.parentNode.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  let form = querySelector("form");
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
    btn.addEventListener("click", deleter);
    p.append(`${data}`);
    p.appendChild(btn);
    document.querySelector("#tasks").appendChild(p);
  } else {
    return;
  }
}

function deleter(e) {
  e.target.parentNode.remove();
}
