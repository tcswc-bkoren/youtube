let button = document.querySelector("button")

let onClick = () => {
  button.innerText="You liked and subscribed"
  button.classList.add("spin")
};

button.addEventListener("click", onClick)
