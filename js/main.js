//selecting elements  //selecting elements  //selecting elements 
const resultWrapper = document.querySelector(".resultWrapper")
const btnStartsWith = document.querySelector(".btnStartsWith")
const btnContains = document.querySelector(".btnContains")
const sort = document.querySelector(".fas")
//input 
const input = document.querySelector("input");



//function that generates random hexacolor
function randomhexaGenerator() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // same like i+=1; i=1+i;
        //color =color + (letters[Math.floor(Math.random() * 16)]);
    }
    return color;
  }
  



  //EVENT LISTENER  //EVENT LISTENER  //EVENT LISTENER  //EVENT LISTENER

  btnStartsWith.addEventListener("click", function(){
      btnContains.classList.remove("checked")
      btnStartsWith.classList.add("checked")
      input.addEventListener("keyup", searchCountryByInitial);
        searchCountryByInitial()       // why 2 times function here 
  })
  


//FUNCTION FOR ABOVE EVENT LISTENER 


  function searchCountryByInitial (){
    resultWrapper.innerHTML="";
    const result = countriesList.filter(country =>{
        return country.toUpperCase().startsWith(input.value.toUpperCase());
    } );

    console.log(result)  //this will print the search results in console from the input.value and filtered results

    //now the results are filtered append them to the divs

    result.forEach(e =>{
      //create new div
      const newdiv = document.createElement("div");
      newdiv.setAttribute("class","autogenCountryDiv" )
      newdiv.style.backgroundColor=randomhexaGenerator();

        //create span
      const newSpan = document.createElement("span")
      newSpan.innerHTML = e;



      // append created span and div 
      newdiv.appendChild(newSpan);
      resultWrapper.appendChild(newdiv)
    })
}







  //EVENT LISTENER  //EVENT LISTENER  //EVENT LISTENER  //EVENT LISTENER
  
  btnContains.addEventListener("click", function(){
    btnStartsWith.classList.remove("checked")
    btnContains.classList.add("checked")
    input.addEventListener("keyup", searchByAnyWord);
    searchByAnyWord()       // why 2 times function here 
})


function searchByAnyWord(){
  resultWrapper.innerHTML="";

  const regex = new RegExp(input.value, "gi");
  const result = countriesList.filter(country =>{
    return country.toUpperCase().match(regex);
  })
  console.log(result)  //this will print the search results in console from the input.value and filtered results


  //creating new divs to append 

  result.forEach(e  =>{
    const seconddiv = document.createElement("div");
    seconddiv.setAttribute("class","autogenCountryDiv" )
    seconddiv.style.backgroundColor=randomhexaGenerator();


    //create another span 

    let secondSpan = document.createElement("span")
    console.log(secondSpan)
    secondSpan.innerHTML = e;


    // append

    seconddiv.appendChild(secondSpan);
    resultWrapper.appendChild(seconddiv);
  })
}




//EVENT LISTENER  //EVENT LISTENER  //EVENT LISTENER  //EVENT LI


sort.addEventListener("click", function(){
  countriesList.reverse()

  sort.classList.toggle("fa-sort-alpha-up");


  if (btnStartsWith.classList.contains("checked")){
    searchCountryByInitial()
  }


  if (btnContains.classList.contains("checked")){
    searchByAnyWord()
  }   
})














// REGEX NOTES 

// Syntax
// new RegExp("regexp","gi")
// OR
// /regexp/gi