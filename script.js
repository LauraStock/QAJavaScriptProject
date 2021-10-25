var data = [
        { "ninumber": "ZS502747A", "fullname": "Chris P Bacon", "phone": "07659-831024", "address":
"123 Elliot Hill", "department": "IT" },
        { "ninumber": "XS130502B", "fullname": "Miles A Head", "phone": "07666-616680", "address":
"321 Haha Road", "department": "Sales" },
        { "ninumber": "MY034526D", "fullname": "Rick O'Shea", "phone": "07440-003065", "address":
"64 Zoo Lane", "department": "HR" },
        { "ninumber": "AK311470", "fullname": "Robyn Banks", "phone": "07342-472921", "address":
"324 Langton Ridgeway", "department": "HR" },
        { "ninumber": "LY682275B", "fullname": "Lorne Mowers", "phone": "07822-821023", "address":
"234 Julian Market", "department": "IT" },
        { "ninumber": "BK227215B", "fullname": "Frank N Stein", "phone": "07661-522545", "address":
"12 Springfield Grange", "department": "Sales" },
        { "ninumber": "XB363374C", "fullname": "Hedda Hare", "phone": "07563-758264", "address":
"54 Blackbird Crescent", "department": "IT" },
        { "ninumber": "MY501327A", "fullname": "Upton O Goode", "phone": "07401-414740", "address":
"2 St Margarets Drive", "department": "IT" },
        { "ninumber": "TT405395B", "fullname": "Marius Quick", "phone": "07870-297789", "address":
"98 Earl Path", "department": "IT" },
        { "ninumber": "AZ764036A", "fullname": "Max E Mumm", "phone": "07872-642897", "address":
"233 Lady Smith Avenue", "department": "IT" },
        { "ninumber": "ES73841C", "fullname": "Yul B Allwright", "phone": "07750-872412",
"address": "45 Fountains Broadway", "department": "Sales" },
        { "ninumber": "WX465470A", "fullname": "Lori Driver", "phone": "07773-782275", "address":
"65 Burlington Lodge", "department": "HR" },
        { "ninumber": "AK625470D", "fullname": "Shirley U Care", "phone": "07569-060117",
"address": "97 Holderness Drive", "department": "HR" },
        { "ninumber": "SW098272B", "fullname": "Felix Cited", "phone": "07394-529507", "address":
"32 Banningham Court", "department": "Sales" },
        { "ninumber": "OB043941D", "fullname": "Sandy Beech", "phone": "07958-301691", "address":
"3 Third Mount", "department": "Sales" }
];

console.log("we're at the start");
displayData();


// ------------- Main display functions -------------------
function displayData() {
             
    console.log("in display function");
    console.log(data.length);
    let display = document.querySelector("#display");
    let table = document.createElement("table");
    table.id = "dataTable";
    display.appendChild(table);
    let headers = document.createElement("tr");
    headingString = ["Name", "Department", "Phone", "Address", "NINO"];
    for (i = 0; i < headingString.length; i++) {
        let col = document.createElement("th");
        col.innerHTML = headingString[i];
        headers.appendChild(col);
        //console.log([i]);
        //console.log(headingString[i]);
        //console.log(col);
    }
    table.appendChild(headers);
    for (i = 0; i < data.length; i++) {
        // create row in the table
        let row = document.createElement("tr");
        row.id = (i);
        // fill row with data
        var c1 = row.insertCell();
        c1.innerHTML = data[i].fullname;
        var c2 = row.insertCell();
        c2.innerHTML = data[i].department;
        var c3 = row.insertCell();
        c3.innerHTML = data[i].phone;
        var c4 = row.insertCell();
        c4.innerHTML = data[i].address;
        var c5 = row.insertCell();
        c5.innerHTML = data[i].ninumber;
        // allowing select of data
        row.addEventListener("click",selectRow);
        table.appendChild(row); // put the row in the table
    }
}

function addToTable(dataToAdd) {
    console.log("we're in the update function");
    console.log(data.length);
    console.log(dataToAdd);
    let table = document.querySelector("#dataTable");
        // create row in the table
        let row = document.createElement("tr");
        row.id = data.length -1;
        // fill row with data
        var c1 = row.insertCell();
        c1.innerHTML = dataToAdd.fullname;
        var c2 = row.insertCell();
        c2.innerHTML = dataToAdd.department;
        var c3 = row.insertCell();
        c3.innerHTML = dataToAdd.phone;
        var c4 = row.insertCell();
        c4.innerHTML = dataToAdd.address;
        var c5 = row.insertCell();
        c5.innerHTML = dataToAdd.ninumber;
        // allowing select of data
        row.addEventListener("click",selectRow);
        table.appendChild(row); // put the row in the table
    

    //table.remove();
    //displayData();
}

function selectRow(e) {
    var current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
    var rowSelected = this.id;
}

// ------------------ Add Functions ------------------------

function createAddForm() {
    console.log("We are in create form");
    
    // create form
    let div = document.getElementById("addStuff");
    let form = document.createElement("form");
    form.id = "addForm";
    div.appendChild(form);

    // add each input variable
    const inputLabels = ["National Insurance Number","Full Name",  "Phone", "Address", "Department"];
    var inputNames = [];

    for (i = 0; i < inputLabels.length; i++) {
        //create the label for each input
        let label= document.createElement("div");
        label.innerText = inputLabels[i];

        //create input box
        let inputBox = document.createElement("input");
        inputNames.push(inputBox);
        let br = document.createElement("br");

        // put everything in the right place
        label.appendChild(inputBox);
        form.appendChild(label);
        form.appendChild(br);
        }

    //submit button
    let button = document.createElement("button");
    //button.value = "Submit";
    button.innerHTML = "Submit";
    form.appendChild(button);
    const rowName = ["ninumber", "fullname", "phone", "address", "department"];
    button.addEventListener("click", function (event) {
        event.preventDefault();
        dataToAdd = new Object();
        console.log(data);
        for (i = 0; i < inputNames.length; i++) {
            console.log(inputNames[i].value);
            dataToAdd[rowName[i]] = inputNames[i].value;
        }
        console.log(dataToAdd);
        data.push(dataToAdd);
        console.log(data.length);
        console.log("we are in add function");
        console.log(data.length);
        
        addToTable(dataToAdd);
        form.remove();
    });
    
}


// ------------------- DELETE FUNCTIONS --------------------
function delData() {
    let row = document.getElementsByClassName("active");
    console.log(row);
    let ind = row[0].id;
    console.log(ind);
    //console.log(data.length);
    
    //console.log(data.length);
    let table = document.getElementById("dataTable");
    console.log(table);
    console.log(table.childNodes);
    table.removeChild(document.getElementById(ind));
    data.splice(ind, 1);
}


// -------------------- EDIT FUNCTIONS -----------------------
function editData(){
        // get the id of the selected row
        console.log("We are in editing");
        let row = document.getElementsByClassName("active");
        row = row[0];
        let ind = row.id;
        console.log(row);
        console.log(ind);
        console.log(row.cells[0].innerHTML);
        
        // create form
        let div = document.getElementById("editStuff");
        let form = document.createElement("form");
        form.id = "editForm";
        div.appendChild(form);
    
        // add each input variable
        const inputLabels = ["National Insurance Number","Full Name",  "Phone", "Address", "Department"];
        var inputNames = [];
    
        for (i = 0; i < inputLabels.length; i++) {
            //create the label for each input
            let label= document.createElement("div");
            label.innerText = inputLabels[i];
    
            //create input box
            let inputBox = document.createElement("input");
            inputBox.setAttribute("value",row.cells[i].innerHTML);
            inputNames.push(inputBox);
            let br = document.createElement("br");
    
            // put everything in the right place
            label.appendChild(inputBox);
            form.appendChild(label);
            form.appendChild(br);
            }
    
        //submit button
        let button = document.createElement("button");
        //button.value = "Submit";
        button.innerHTML = "Submit";
        form.appendChild(button);
        const rowName = ["ninumber", "fullname", "phone", "address", "department"];
        button.addEventListener("click", function (event) {
            event.preventDefault();
            dataToAdd = new Object();
            console.log(data);
            for (i = 0; i < inputNames.length; i++) {
                console.log(inputNames[i].value);
                dataToAdd[rowName[i]] = inputNames[i].value;
                row.cells[i].innerHTML = inputNames[i].value;
            }
            console.log(data.length);
            console.log(dataToAdd);
            data[ind] = dataToAdd;
            console.log(data.length);
            
            form.remove();
        });
    }






