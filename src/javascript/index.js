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
        return console.log('error')
    }else if( inps[0].value > 31 && inps[1].value > 12 && inps[2].value > mes.getFullYear()){
        for(let i =  0; i < inps.length ; i++){
            paragrafos[i].innerHTML = 'Must be a Valid bay'
            inps[i].classList.add('color')
            sections[i].classList.add('color')
        }
        return console.log('error')
    }
    else if(inps[0].value <= 0 || inps[0].value > 31){
        for(let i = 0 ; i < inps.length ; i++){
            inps[i].classList.add('color')
            sections[i].classList.add('color')
        }
        paragrafos[0].innerHTML = 'Must be a Valid bay'
        paragrafos[1].innerHTML = ''
        paragrafos[2].innerHTML = ''
        return console.log('eeror')
    }else if(inps[1].value > 12 || inps[1].value <= 0){
        for(let i = 0 ; i < inps.length ; i++){
            inps[i].classList.add('color')
            sections[i].classList.add('color')
        }
        paragrafos[0].innerHTML = ''
        paragrafos[1].innerHTML = 'Must be a Valid bay'
        paragrafos[2].innerHTML = ''
        return console.log('eeror')
    }else if(inps[2].value > mes.getFullYear() || inps[2].value <=0){
        for(let i = 0 ; i < inps.length ; i++){
            inps[i].classList.add('color')
            sections[i].classList.add('color')
        }
        paragrafos[0].innerHTML = ''
        paragrafos[1].innerHTML = ''
        paragrafos[2].innerHTML = 'Must be a Valid bay'
        return console.log('eeror')
    }
    for(let i = 0; i < paragrafos.length; i++){
        paragrafos[i].innerHTML = ''
        inps[i].classList.remove('color')
        sections[i].classList.remove('color')
    }
    infs[0].innerHTML = ( Math.abs(mes.getFullYear() - inps[2].value ))
    infs[1].innerHTML = ( Math.abs((mes.getMonth() + 1) - inps[1].value))
    infs[2].innerHTML = ( Math.abs(mes.getDate() - inps[0].value))
}

but.addEventListener('click' , () =>{
    tudo()
    console.log(inps)
})
