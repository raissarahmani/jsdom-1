// Print judul dokumen
const title = document.querySelector("title")
console.log(title.textContent)

// Print ukuran browser
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
console.log(`Size: ${screenWidth} x ${screenHeight}`)

// Print ID
const word = document.getElementById("lorem")
console.log(`Print ID: ${word.textContent}`)

// Print Class
const kalimat = document.querySelector(".no4")
console.log(`Print Class: ${kalimat.textContent}`)

// Print beberapa elemen dengan kelas
const p = document.querySelectorAll(".p1")
console.log(`Print Element: ${p[0].textContent}`)