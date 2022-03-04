

function o() {
  alert("Coming soon");
}

const body = document.querySelector('body');
const button = document.querySelector('#darkbutton');
function toggleDark() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem("theme", "light");
    button.innerHTML = "Dark mode";
  } else {
    body.classList.add('dark');
    localStorage.setItem("theme", "dark");
    button.innerHTML = "Dark mode";
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add('dark');
  button.innerHTML = "Dark mode";
}

document.querySelector('#darkbutton').addEventListener('click', toggleDark);
