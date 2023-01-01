// NAVBAR

let navIcon = document.querySelector('#navIcon');

let confirm = true;

navIcon.addEventListener('click', () => {

    if(confirm == true){

        navIcon.style.transform = 'rotate(180deg)';

        confirm = false;
        
    } else{

        navIcon.style.transform = 'rotate(0deg)';

        confirm = true;
    }
});

// ANNUNCI


fetch('./annunci.json').then( (response)=> response.json()).then( (data)=>{

    let categoryWrapper = document.querySelector('#categoryWrapper');

    let cardsWrapper = document.querySelector('#cardWrapper');


    function setCategoryFilters(){

    let categories = data.map( (annuncio)=> annuncio.category );

    let uniqueCategories = [];

    categories.forEach( (category)=> {

        if( !uniqueCategories.includes(category)){

            uniqueCategories.push(category);
        }

    } )


    uniqueCategories.forEach( (category)=>{

        let div = document.createElement('div');

        div.classList.add('form-check');

        div.innerHTML = `
        
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
        <label class="form-check-label" for="${category}">
          ${category}
        </label>
        
        
        `

        categoryWrapper.appendChild(div);




    } )


}

  setCategoryFilters();



  function showCards(array){


    cardsWrapper.innerHTML = '';

    array.sort((a , b) => Number(a.price - b.price));

    array.forEach( (element , i)=>{


        let div = document.createElement('div');

        div.classList.add('announcement-card');

        div.innerHTML = `

        <div class="card-head">
            <img src="https://picsum.photos/${200 + i}" alt="immagine prodotto" class="img-card-custom">
        </div>
        
        <p class="h3 text-center"> ${element.name} </p>
        <p class="h4"> ${element.category} </p>
        <p class="h4"> ${element.price} €</p>
        
        `
        cardsWrapper.appendChild(div);

    } )

  }

  showCards(data);


  function filteredByCategory(array){


    // let categoria = Array.from(checkInputs).find( (button)=> button.checked).id;

    // console.log(categoria);

    let arrayFromNodeList = Array.from(checkInputs);

    let button = arrayFromNodeList.find((bottone) => bottone.checked);

    let categoria = button.id;


    if(categoria != 'All'){

    let filtered = array.filter( (annuncio)=> annuncio.category == categoria  );

        return filtered;
    
    } else {

        return data;
    }

  }





  let priceInput = document.querySelector('#priceInput');

  let incrementNumber = document.querySelector('#incrementNumber');

  function setPriceInput() {

    let prices = data.map( (annuncio) => Number(annuncio.price) );

    let maxPrice = (Math.max(...prices));

    priceInput.max = Math.ceil(maxPrice);

    priceInput.value = Math.ceil(maxPrice);

    incrementNumber.innerHTML = Math.ceil(maxPrice);
    
  }

  setPriceInput();


  function filterByPrice(array){

    let filtered = array.filter ((annuncio)=> Number(annuncio.price <= priceInput.value));

    console.log(filtered);

    return filtered;

  }



  let wordInput = document.querySelector('#wordInput');


  function filterByWord(array){

    let nome = wordInput.value;

    let filtered = array.filter( (annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase() ) );

    return filtered;

  }



  function globalFilter(){

    let filterByCategory = filteredByCategory(data);


    let filteredByPrice = filterByPrice(filterByCategory);

    let filteredByWord = filterByWord(filteredByPrice);

    showCards(filteredByWord);

  }

  


  let checkInputs = document.querySelectorAll('.form-check-input');

  checkInputs.forEach( (checkInput)=>{


    checkInput.addEventListener('click' , ()=>{


        globalFilter();

    } )


  })


  priceInput.addEventListener('input' , ()=>{


    incrementNumber.innerHTML = priceInput.value;

    globalFilter();

    

  })


  wordInput.addEventListener('input' , ()=>{


    globalFilter();

  })


} );
















