const inps = document.getElementsByClassName('inp')
const sections = document.getElementsByClassName('inps')
const but =  document.getElementById('img')
const paragrafos = document.getElementsByClassName('paragrafo')
const infs = document.getElementsByClassName('inf')

const mes = new Date()

infs[0].innerHTML = '--'

const tudo = () =>{

    if(inps[0].value == 0 && inps[1].value == 0 && inps[2].value == 0){
        for(let i = 0; i < paragrafos.length; i++){
            paragrafos[i].innerHTML = 'This Field id Required'
            inps[i].classList.add('color')
            sections[i].classList.add('color')
        }
    }
    else if(inps[0].value <= 0 || inps[0].value > 31){
        for(let i = 0 ; i < inps.length ; i++){
            inps[i].classList.add('color')
            sections[i].classList.add('color')
        }
        paragrafos[0].innerHTML = 'tu e corno'
        paragrafos[1].innerHTML = ''
        paragrafos[2].innerHTML = ''
        return console.log('eeror')
    }else if(inps[1].value > 12 || inps[1].value <= 0){
        for(let i = 0 ; i < inps.length ; i++){
            inps[i].classList.add('color')
            sections[i].classList.add('color')
            paragrafos[(i + 2)].innerHTML = ''
        }
        paragrafos[0].innerHTML = ''
        paragrafos[1].innerHTML = 'tu e corno'
        paragrafos[2].innerHTML = ''
        return console.log('eeror')
    }else if(inps[2].value > mes.getFullYear() || inps[2].value <=0){
        for(let i = 0 ; i < inps.length ; i++){
            inps[i].classList.add('color')
            sections[i].classList.add('color')
        }
        paragrafos[0].innerHTML = ''
        paragrafos[1].innerHTML = ''
        paragrafos[2].innerHTML = 'tu e corno'
        return console.log('eeror')
    }
    
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
    console.log(inps)
})
