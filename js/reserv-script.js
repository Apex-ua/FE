var tables = {
  "tables": [
    {
        "type": "table",
        "id": "1",
        "places": "4",
        "location": {
            "x": "1",
            "y": "1"
        }
    },
    {
        "type": "space",
        "location": {
            "x": "1",
            "y": "2"
        }
    },
    {
        "type": "table",
        "id": "2",
        "places": "2",
        "location": {
            "x": "1",
            "y": "3"
        }
    },
    {
        "type": "space",
        "location": {
            "x": "1",
            "y": "4"
        }
    },
    {
        "type": "table",
        "id": "3",
        "places": "2",
        "location": {
            "x": "1",
            "y": "5"
        }
    },
    {
        "type": "space",
        "location": {
            "x": "2",
            "y": "1"
        }
    },
    {
        "type": "space",
        "location": {
            "x": "2",
            "y": "2"
        }
    },
    {
        "type": "space",
        "location": {
            "x": "2",
            "y": "3"
        }
    },
    {
        "type": "space",
        "location": {
            "x": "2",
            "y": "4"
        }
    },
    {
        "type": "space",
        "location": {
            "x": "2",
            "y": "5"
        }
    },
    {
        "type": "table",
        "id": "4",
        "places": "4",
        "location": {
            "x": "3",
            "y": "1"
        }
    },
    {
        "type": "space",
        "location": {
            "x": "3",
            "y": "2"
        }
    },
    {
        "type": "table",
        "id": "5",
        "places": "4",
        "location": {
            "x": "3",
            "y": "3"
        }
    },
    {
        "type": "space",
        "location": {
            "x": "3",
            "y": "4"
        }
    },
    {
        "type": "table",
        "id": "6",
        "places": "4",
        "location": {
            "x": "3",
            "y": "5"
        }
    }
  ]
};

var bookings = {
  "bookings": [
    {
        "tableId" : "1",
        "date" : "2019-05-01",
        "timeSlot" : "0",
        "customerName" : "Apex",
        "customerPhone" : "063..."
    },
    {
        "tableId" : "1",
        "date" : "2019-05-01",
        "timeSlot" : "1",
        "customerName" : "Ololo",
        "customerPhone" : "063..."
    }
  ]
};

var dateBookings = {
  "dateBookings": [
    {
        "date": "2019-05-01",
        "bookings": [
            {
                "timeSlot" : "0",
                "tableId" : "1",
                "customerName" : "Apex",
                "customerPhone" : "063..."
            },
            {
                "timeSlot" : "0",
                "tableId" : "5",
                "customerName" : "Test",
                "customerPhone" : "067..."
            },            {
                "timeSlot" : "0",
                "tableId" : "4",
                "customerName" : "Test",
                "customerPhone" : "067..."
            },
            {
                "timeSlot" : "0",
                "tableId" : "2",
                "customerName" : "Ololo",
                "customerPhone" : "063..."
            }
        ]
    }
  ]
};
var dateBookingsArray = dateBookings.dateBookings;

function lookAtBookings(dateBookingsArray, date){
    var returnObject;
    dateBookingsArray.forEach(function(element) {
        if(element.date == date) {
            console.log("Bookings found at input date");
            returnObject = element;
        } else {console.log("Bookings not found at input date")}
    });
    return returnObject;
}
var foundBookings = lookAtBookings(dateBookingsArray, "2019-05-01");

var slots = {
    "tablesStates": [
        {
            "tableId": 1,
            "date": "2019-05-01",
            "slots": [
                {
                    "index": 0,
                    "state": 0
                },
                {
                    "index": 1,
                    "state": 0
                },
                {
                    "index": 2,
                    "state": 0
                },
                {
                    "index": 3,
                    "state": 0
                },
                {
                    "index": 4,
                    "state": 0
                },
                {
                    "index": 5,
                    "state": 0
                },
                {
                    "index": 6,
                    "state": 0
                },
                {
                    "index": 7,
                    "state": 0
                },
                {
                    "index": 8,
                    "state": 0
                },
                {
                    "index": 9,
                    "state": 0
                },
                {
                    "index": 10,
                    "state": 0
                },
                {
                    "index": 11,
                    "state": 0
                },
                {
                    "index": 12,
                    "state": 0
                }
            ]
        }
    ]
};


function getBookingsAtSlot (dateBookingsObject,inputTimeSLot){
    var returnObjectTimeSlot = [];
    dateBookingsObject.forEach(function(element) {
        if(element.timeSlot == inputTimeSLot) {
            console.log("Bookings at slot found");
            returnObjectTimeSlot.push(element);
        } else {console.log("Bookings at slot not found")}
    });
    return returnObjectTimeSlot;
}

var bookingsAtSlot = getBookingsAtSlot(foundBookings.bookings,"0");

function createTableStatusArray(bookingsAtSlot){
    var tableStatusArray = [
		{
			"tableId": "1",
			"open": true
		},
		{
			"tableId": "2",
			"open": true
		},
		{
			"tableId": "3",
			"open": true
		},
		{
			"tableId": "4",
			"open": true
		},
		{
			"tableId": "5",
			"open": true
		},
		{
			"tableId": "6",
			"open": true
		}
    ];
    bookingsAtSlot.forEach(function(element) {
        if(element.tableId) {
            console.log(element.tableId);
            tableStatusArray[(element.tableId - 1)].open = false;
        } else {console.log("false")}
    });
    return tableStatusArray;
}


const app = document.getElementById('root');
var data = tables.tables;

var bookingsData = bookings.bookings;

function addRow(rowNumber){
    const row = document.createElement('div');
    row.setAttribute("class", `row-tables`);
    row.setAttribute("id", `row-tables ${rowNumber}`);
    app.appendChild(row);
}

function addTable(container, positionX, positionY, id, places){
    const table = document.createElement('div');
    table.setAttribute("class", "table");
    table.setAttribute("id", `table-${id}`);
    table.textContent = `Table ${positionX}:${positionY} \n Pl: ${places}`;
    container.appendChild(table);
}

function addSpace(container, positionX, positionY){
    const space = document.createElement('div');
    space.setAttribute("class", "space");
    space.textContent = `Space: ${positionX}:${positionY}`;
    container.appendChild(space);
}

function fillRow(data){
    data.forEach(function(element) {
        if (!(document.getElementById(`row-tables ${element.location.x}`))){
            addRow(element.location.x)
            console.log(`row ${element.location.x} added`);
        }
        switch(element.type){
            case 'table':
                addTable(document.getElementById(`row-tables ${element.location.x}`),
                         element.location.x,
                         element.location.y,
                         element.id,
                         element.places
                        );
                break;
            case 'space':
                addSpace(document.getElementById(`row-tables ${element.location.x}`),
                         element.location.x,
                         element.location.y
                        );
                break;
            default:
                console.log('OTAKOI! Something went wrong');
        }
    });
}

fillRow(data);

function getDateTime(){
    getDate = document.getElementById("date").value;
//    getTime = document.getElementById("time").value;
    getTime = document.getElementById("selectTimeSlot").value;
    console.log(`${getDate} ${getTime}`);
    return `${getDate} ${getTime}`;
}

function checkAvl (inputDate,obg){
    if(obg.startTime == inputDate){
        console.log('win');
    }

}



function getTablesStates (date, timeSlot){
	//some code;
	return tablesStates;
}




var testSlots = {
    "date": "2019-05-01",
    "timeSlot": "1",
	"tablesStates": [
		{
			"tableId": "1",
			"open": true
		},
		{
			"tableId": "2",
			"open": true
		},
		{
			"tableId": "3",
			"open": true
		},
		{
			"tableId": "4",
			"open": true
		},
		{
			"tableId": "5",
			"open": true
		},
		{
			"tableId": "6",
			"open": true
		}
	]
};


var tableStatusArray = createTableStatusArray(bookingsAtSlot);
addStatusClassToTable(tableStatusArray);

function addStatusClassToTable(inputObject){
    inputObject.forEach(function(element) {
        const getTable = document.getElementById(`table-${element.tableId}`);
        switch(element.open){
            case true:
                getTable.setAttribute("class", "table free");
                break;
            case false:
                getTable.setAttribute("class", "table reserved");
                break;
            default:
                console.log('OTAKOI! Something went wrong with adding status class');
        }
    });
}

