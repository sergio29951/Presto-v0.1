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

let opener = document.querySelector('.opener');

let movedDivs = document.querySelectorAll('.moved');

let wrapper = document.querySelector('#wrapper');


let players = [

    { name : 'Alessandro', position : 'Attaccante', Club : 'Juventus', url : './media/Del piero.webp'},

    { name : 'Paolo', position : 'Difensore', Club : 'Milan', url : './media/Paolo_Maldini.jpg'},

    { name : 'Javier', position : 'Difensore', Club : 'Inter', url :'./media/zanetti.jpg'},

    { name : 'Francesco', position : 'Attaccante', Club : 'Roma', url : './media/totti.jpg'},

]

movedDivs.forEach((moved, i)=>{

    moved.style.backgroundImage = `url('${players[i].url}')`;

    moved.addEventListener('click',()=>{

        let movdeAngle = moved.dataset.angle;

        let expAngle = 360 - movdeAngle;

        movedDivs.forEach((moved, i)=>{

            let angle = (360 * i) / movedDivs.length;

            // moved.setAttribute('data-angle', angle);
    
            moved.style.transform = `rotate(${angle + expAngle}deg) translate(150px) rotate(-${angle + expAngle}deg)`;

            
        })

        wrapper.innerHTML = '';

        let div = document.createElement('div');

        div.classList.add('playerCard')

        div.innerHTML = `
        
        <p class="h3">${players[i].name}</p>

        <p class="lead">${players[i].position}</p>

        <p class="lead">${players[i].Club}</p>
    
        `
        wrapper.appendChild(div);

        let card = document.querySelector('.playerCard');

        card.style.backgroundImage = `url('${players[i].url}')`;
    })
})

let conferma = false;

opener.addEventListener('click', ()=>{

    opener.style.transform = `rotate(360deg)`;


    if(conferma == false){

        movedDivs.forEach((moved, i)=>{

            let angle = (360 * i) / movedDivs.length;

            moved.setAttribute('data-angle', angle);
    
            moved.style.transform = `rotate(${angle}deg) translate(150px) scale(1.5) rotate(-${angle}deg)`;

            conferma = true;
        })
        

    } else{

        wrapper.innerHTML = '';

        opener.style.transform = `rotate(0deg)`,

        movedDivs.forEach((moved, i)=>{

            let angle = (360 * i) / movedDivs.length;
    
            moved.style.transform = `rotate(0deg) translate(0px)`;
            
            conferma = false;
        })
        
    }
});