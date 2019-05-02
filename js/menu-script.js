const data1 = {
  "filters":[
    "spicy",
    "meat",
    "vegan"
  ],
  "burgers":[
    {
      "id":"burger1",
      "name":"burger spicy",
      "description":"spicy!spicy!spicy!",
      "image":"images/burger1.jpg",
      "price":"100 UAH",
      "filter": "spicy"
    },    {
      "id":"burger1-1",
      "name":"burger spicy spicy",
      "description":"spicy!spicy!spicy!spicy!",
      "image":"images/burger1.jpg",
      "price":"100 UAH",
      "filter": "spicy"
    },
    {
      "id":"burger2",
      "name":"burger meat",
      "description":"meat!meat!meat!",
      "image":"images/burger2.jpg",
      "price":"110 UAH",
      "filter": "meat"
    },
    {
      "id":"burger2-1",
      "name":"burger meatmeat",
      "description":"meat!meat!meat!meat!",
      "image":"images/burger2.jpg",
      "price":"110 UAH",
      "filter": "meat"
    },
    {
      "id":"burger3",
      "name":"burger vegan",
      "description":"vegan!vegan!vegan!",
      "image":"images/burger3.jpg",
      "price":"150 UAH",
      "filter": "vegan"
    }
  ]
};
var data;
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'files/burgers.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
 }

function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        data = JSON.parse(response);
        console.log(data);
        createFilters(data.filters, filtersContainer);
        getSelectedFilterCreateCards();
    });

}

init();



function createFilterItem(item, container){
    const radio = document.createElement('INPUT');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'item-filters');
    radio.setAttribute('id', `filter-${item}`);
    radio.setAttribute('class', 'item-filters');
    radio.setAttribute('value', item);
    const radioLabel = document.createElement('label');
    radioLabel.setAttribute('for', `filter-${item}`);
    radioLabel.textContent = item;
    container.appendChild(radio);
    container.appendChild(radioLabel);
}

function createFilters(inputArray, container){
    createFilterItem("all", container);
    let all = document.getElementById("filter-all");
    all.checked = true;

    if(inputArray.length != 0){
        inputArray.forEach(function(element) {
            createFilterItem(element, container);
        });
    }

}

var filtersContainer = document.getElementById("filtersContainer");
var cardsContainer = document.getElementById("cardsContainer");

//createFilters(data.filters, filtersContainer);

function createItemCard(inputObject, container) {
    const card = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('div');
    const description = document.createElement('div');
    const price = document.createElement('div');
    card.setAttribute('class', 'card');
    image.setAttribute('class', 'card-image');

    if(inputObject.name){
        image.setAttribute('alt', `image of ${inputObject.name}`);
        title.textContent = inputObject.name;
    }else{
        image.setAttribute('alt', 'alt not found');
        title.textContent = 'name not found';
    }
    if (inputObject.image) {
        image.src = inputObject.image;
    } else {
        image.src = '#';
    }
    title.setAttribute('class', 'card-name');
    if (inputObject.description) {
        description.textContent = inputObject.description;
    } else {
        description.textContent = 'description not found';
    }
    description.setAttribute('class', 'card-desc');
    if(inputObject.price){
        price.textContent = inputObject.price;
    }else{
        price.textContent = 'price not found';
    }
    description.setAttribute('class', 'card-price');
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    container.appendChild(card);
}

function createCards(inputArray,container){
   inputArray.forEach(function(element) {
        createItemCard(element, container);
    });
}

//createCards(data.burgers,testCardsContainer);


function createCardsFiltered(inputArray, container, selectedFilter) {
    if(selectedFilter == "all") {
       inputArray.forEach(function(element) {
            createItemCard(element, container);
        });
    } else {
       inputArray.forEach(function(element) {
           if (selectedFilter == element.filter) {
               createItemCard(element, container);
           }
        });
    }
    addListenerToFilters();
}

function removeAllCards(container){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getSelectedFilterCreateCards(){
    let selectedFilter = document.querySelector('input[name="item-filters"]:checked').value;
    removeAllCards(cardsContainer);
    createCardsFiltered(data.burgers,cardsContainer, selectedFilter);
}

//getSelectedFilterCreateCards();

function addListenerToFilters() {
    var filters = document.querySelectorAll('.item-filters');
    for (let i = 0; i < filters.length; i++) {
        filters[i].addEventListener('click', createEvent);
    }
}


function createEvent(e) {
    event.stopPropagation();
    getSelectedFilterCreateCards();
  }
