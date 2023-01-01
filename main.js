let navIcon = document.querySelector('#navIcon');



// navbar

let confirm = true;

navIcon.addEventListener('click', ()=>{

    if(confirm == true){

        navIcon.style.transform = 'rotate(180deg)';
        confirm = false
        
    } else{

        navIcon.style.transform = 'rotate(0deg)';
        confirm = true;
    }
})


// ANIMATE

function createInterval(finalNumber, element, speed){

    let counter = 0;

    let interval = setInterval( ()=>{


        if(counter < finalNumber){

            
        counter++

        element.innerHTML = counter;

        } else{

            clearInterval(interval);
        }
   

    }, speed );

}


let first_span = document.querySelector('#first-span');
let second_span = document.querySelector('#second-span');
let third_span = document.querySelector('#third-span');



// INTERSECTION OBSERVER

let h2Test = document.querySelector('#h2Test');

let intersectionInterval = true;


let observer = new IntersectionObserver(
    
    (entries) => {



        entries.forEach( (entry) =>{

            if( entry.isIntersecting && intersectionInterval){

                createInterval(500, first_span, 1);
                createInterval(700, second_span, 2);
                createInterval(850, third_span, 0.4);

                intersectionInterval = false;
                

            }

        } )


    }
    
    
    )

observer.observe(h2Test);


// MOUSE ENTER

// let icons = document.querySelectorAll('.fa-solid');

// let columns = document.querySelectorAll('.col-custom');

// columns.forEach((colonna, i)=>{

//     colonna.addEventListener('mouseenter', ()=>{

//         icons[i].classList.remove('text-violet');

//         icons[i].classList.add('text-orange');
//     })

// })

// ULTIMI ANNUNCI

let Wrapper = document.querySelector('#Wrapper');

let announcements = [

    { name : 'Cavoli' , category : 'Verdura' , price : 2 , description : 'si mangia'},

    { name : 'Cuffie' , category : 'Elettronica' , price : 25 , description : 'si ascolta'},

    { name : 'Joestick' , category : 'Game' , price : 70 , description : 'si gioca'},

    { name : 'Computer' , category : 'informatica' , price : 600 , description : 'pc'},

]

announcements.forEach((annuncio, i) =>{

    let div = document.createElement('div');

    div.classList.add('col-12',  'col-md-6' ,  'col-lg-3');

    div.innerHTML = `
    
    <div class="card" style="width: 18rem;">

    <img src="https://picsum.photos/${300 + i}" class="card-img-top" alt="...">

    <div class="card-body bg-orange">

      <h5 class="card-title fw-bold fs-custom">${annuncio.name}</h5>

      <p class="card-text">${annuncio.price} €</p>

      <div class="d-flex justify-content-end" data-bs-toggle="modal" data-bs-target="#${annuncio.category}">

        <a href="#" class=" btn btn-primary bg-dark card-anchor">Dettagli</a>
        
      </div>
      

    </div>

  </div>

  <!-- Modale -->
  <div class="modal fade" id="${annuncio.category}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-orange fw-bold" id="exampleModalLabel">${annuncio.name}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <img src="https://picsum.photos/${300 + i}" class="img-fluid d-block mx-auto" alt="">

          <p class="lead my-3 text-orange"> ${annuncio.description}</p>

          <p class="text-orange">${annuncio.price}€</p>

        </div>

      </div>
    </div>
  </div>
    
    `
  Wrapper.appendChild(div);

});




