console.log("git2")

document.querySelector("h1").textContent="I am"


const headerA =document.createElement("headerA")
headerA.textContent = "bye"
headerA.style.color ="red"
document.querySelector(".container").prepend(headerA)


 const header = document.createElement("header")
header.textContent ="Hello"
header.style.color ="blue"
document.querySelector(".box").append(header)

// ====================================================================