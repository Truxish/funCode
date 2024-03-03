document.querySelector("#andiNext").addEventListener('click', andiFunc)
document.querySelector("#claireNext").addEventListener('click', claireFunc)
document.querySelector("#sharleenNext").addEventListener('click', sharleenFunc)

const andi = document.querySelector("#andi")
const claire = document.querySelector("#claire")
const sharleen = document.querySelector("#sharleen")




function andiFunc(){
    claire.classList.add('hidden')
    sharleen.classList.add('hidden')
    andi.classList.toggle('hidden')
}

function claireFunc(){
    claire.classList.toggle('hidden')
    sharleen.classList.add('hidden')
    andi.classList.add('hidden')


}

function sharleenFunc(){
    claire.classList.add('hidden')
    andi.classList.add('hidden')
    sharleen.classList.toggle('hidden')

}


