export default function initNumeros(){

  function animaNumeros(){

    const numeros = document.querySelectorAll("[data-numero]")
  
    numeros.forEach((numero)=>{
      const total = +numero.innerText
      const incremento = Math.floor(total / 100)
      let start = 0
      const timer = setInterval(()=>{
        start = start + incremento
        numero.innerText = start
        if(start > total){
          numero.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random())
      
    })
  }
  
  function handleMutation(mutation){
    if(mutation[0].target.classList.contains("ativo")){
      observador.disconnect()
      animaNumeros()
    }
  }
  
  const observador = new MutationObserver(handleMutation)
  const observadorAlvo = document.querySelector(".numeros")
  observador.observe(observadorAlvo, {attributes: true})
}

