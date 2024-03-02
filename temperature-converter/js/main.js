//Write your pseudocode first!
// two text boxes one of Fahrenheit and one of Celsius temperature scale

// if user inputted in Fahrenheit vala box
//   >>convert it into Celsius

//or if user inputted in Celsius vala box
//   >>convert it into Fahrenheit


//use convert button in it
//less goo

document.querySelector("#convert").addEventListener('click',getConvert)

function getConvert(){
    let fehrenheit = document.querySelector("#fh").value

    fehrenheit = fehrenheit * 9/5 + 32

    document.querySelector("#placeToSee").innerText = fehrenheit

}