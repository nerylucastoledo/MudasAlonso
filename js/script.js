function initTolTip() {
    const tooltip = document.querySelectorAll('[data-toltip]')

    tooltip.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })
    
    function onMouseOver() {
        const toltipDiv = criarToltopBox(this)
    
        this.addEventListener('mouseleave', onMouseLeave)
        this.addEventListener('mousemove', onMouseMove)
    
        function onMouseLeave() {
            toltipDiv.remove()
        }
    
        function onMouseMove(e) {
            toltipDiv.style.top = e.pageY + 20 +'px'
            toltipDiv.style.left = e.pageX + 20 + 'px'
        }
    
        function criarToltopBox(elemento) {
            const toltipDiv = document.createElement('div')
            const textElemento = elemento.getAttribute('aria-label')
            toltipDiv.classList.add('toltip')
            toltipDiv.innerText = textElemento
            document.body.appendChild(toltipDiv)
            return toltipDiv
        }
    }
}
initTolTip()


function initAccordion() {
    const accordion = document.querySelector('[data-anime="accordion"]')
    const botaoAbri = document.querySelector('.btn-Todasmudas')

    function activeAccordion() {
        accordion.classList.toggle('ativo')
        botaoAbri.classList.toggle('ativo')
    }

    botaoAbri.addEventListener('click', activeAccordion)
}
initAccordion()