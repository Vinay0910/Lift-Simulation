const floorInput=document.querySelector('.floor-input');
const liftInput=document.querySelector('.lift-input');
const createItem=document.querySelector('.create-item');

const noOfFloors=4;
const noOfLifts=0;

function floorGenerator(noOfFloors){
     let floors="";

    for(let i=1;i<noOfFloors;i++){
        floors+=`<div class="floor">
        <div class="floor-controller">
            <button class="btn-up"> </button>
            <button class="btn-down"> </button>
        </div>
        <div class="floor-name">Floor-${i}</div>
       </div>`
    }



    return floors;
}

createItem.innerHTML=floorGenerator(noOfFloors);