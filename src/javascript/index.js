const inps = document.getElementsByClassName('inp')
const but =  document.getElementById('img')
const paragrafos = document.getElementsByClassName('paragrafo')
const infs = document.getElementsByClassName('inf')

const mes = new Date()

infs[0].innerHTML = '--'

const tudo = () =>{
    infs[0].innerHTML = ( mes.getFullYear() - inps[2].value )
    infs[1].innerHTML = ( (mes.getMonth() + 1) - inps[1].value)
    infs[2].innerHTML = ( Math.abs(mes.getDate() - inps[0].value))
}

/*    console.log(mes.getMonth() + 1)
    console.log(mes.getUTCDate())
    console.log(mes.getUTCDay())
    console.log(mes)*/


but.addEventListener('click' , () =>{
    tudo()
})
