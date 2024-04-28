function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a img
  const img = document.querySelector("#profile img")

  //substituir a img

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar img light
    img.setAttribute("src", "./assents/avatar-light.png")
  } else {
    img.setAttribute("src", "./assents/avatar.png")
  }
}
