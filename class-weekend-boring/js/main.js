document.querySelector("#check").addEventListener("click", dayCheck)



function dayCheck(){
  const day = document.querySelector("#day").value.toLowerCase()

  if(day==="tuesday" || day==="wednesday"){
    document.querySelector("#placeToSee").innerHTML="Class"
  }

  else if(day==="saturday" || day==="sunday"){
    document.querySelector("#placeToSee").innerText="Weekend"
  }

  else{
    document.querySelector("#placeToSee").innerText="BORING!!"
  }

}