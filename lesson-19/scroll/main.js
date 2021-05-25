const scrollElement = document.querySelector('.scroll');

console.log({
  offsetWidth: scrollElement.offsetWidth,
  offsetHeight: scrollElement.offsetHeight, 
})

console.log({
  offsetLeft: scrollElement.offsetLeft,
  offsetTop: scrollElement.offsetTop,
})

console.log({
  clientLeft: scrollElement.clientLeft,
  clientTop: scrollElement.clientTop,
})

console.log({
  clientWidth: scrollElement.clientWidth,
  clientHeight: scrollElement.clientHeight,
})

console.log({
  scrollWidth: scrollElement.scrollWidth,
  scrollHeight: scrollElement.scrollHeight,
})

console.log({
  scrollLeft: scrollElement.scrollLeft,
  scrollTop: scrollElement.scrollTop,
})


document.querySelector('.next').onclick = () => {
  document.querySelector('.slider').scrollLeft += 800;
}

document.querySelector('.prev').onclick = () => {
  document.querySelector('.slider').scrollLeft -= 800;
}
