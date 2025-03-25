const button = document.querySelectorAll('.ripplr')

butto.foreach(button => {
  button.addEventListener('click', function (e){
    const x = e.pageX
    const y = e.pageY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonLeft

    const circile = document.createElement('span')
    circile.classList.add('circle')
    circile.style.top = yInside + 'px'
    circile.style.left = xInside + 'px'
  
    this.appenChild(circile)

    setTimeout(() => circile.remove(), 500)
  })
})