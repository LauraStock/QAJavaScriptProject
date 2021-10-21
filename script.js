
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

// --------------------- Page Buttons ---------------------------------

// let editbtn = document.querySelector('#editbtn');
// editbtn.addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     if (current.length > 0) {
//         window.location.href = "./html/edit.html";
//     }
// });

// let delbtn = document.querySelector('#delbtn');
// delbtn.addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     if (current.length > 0) {
//         let index = current[0].id;
//         data.splice(index, 1);
//         displayData();
//         // want to put a check that they want to delete the currently selected employee;
//         // delete function
//     }
// });
    
// ------------- Main display functions -------------------
function displayData() {
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
        console.log([i]);
        console.log(headingString[i]);
        console.log(col);
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

function createAddForm(data) {
    console.log("We are in create form");
    console.log(data);
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

    // for (i = 0; i < inputNames.length; i++) {
    //     let label = document.createElement("div");
    //     label.innerText = inputLabels[i];
    //     let formField = document.createElement("input");
    //     formField.setAttribute("type", "text");
    //     inputNames.push(formField);
    //     label.appendChild(formField);
    //     form.appendChild(label);
    // }

    

    // let dep = document.createElement("input");
    // dep.setAttribute("type", "text");
    // form.appendChild(dep);

    // let nino = document.createElement("input");
    // nino.setAttribute("type", "text");
    // form.appendChild(nino);

    // let tel = document.createElement("input");
    // tel.setAttribute("type", "text");
    // form.appendChild(tel);

    // let addr = document.createElement("input");
    // addr.setAttribute("type", "text");
    // form.appendChild(addr);

    //submit button
    let button = document.createElement("button");
    button.value = "Submit";
    button.innerHTML = "Submit";
    form.appendChild(button);
    const rowName = ["ninumber", "fullname", "phone", "address", "department"];
    button.addEventListener("click", function () {
        dataToAdd = new Object();
        console.log(data);
        for (i = 0; i < inputNames.length; i++) {
            console.log(inputNames[i].value);
            dataToAdd[rowName[i]] = inputNames[i].value;
        }
        console.log(dataToAdd);
        data.push(dataToAdd);
        console.log(data.length);
        
        // let dataToAdd = {
        //         fullname: fullname.value,
        //         ninumber: nino.value,
        //         department: dep.value,
        //         phone: tel.value,
        //         address: addr.value
        //     const rowName = ["fullname", "department", "ninumber", "phone", "address"];
        // for (i = 0; i < inputNames.length; i++) {
        //     console.log(rowName[i]);
        //     console.log(inputNames[i].value);
        //         //dataToAdd[rowName[i]] = inputNames[i].value;
        //     }
        
        // //data.push(dataToAdd);
        // //form.remove();
        // console.log(data);
        // displayData();
        updateTable();
    });
    function viewData() {
        console.log(data);
        let table = document.getElementsByTagName("tr");
        console.log(table[0])
        
        for (i = 0; i < table.length; i++) {
            table[i].remove();
        }
        console.log(table);
        displayData();
    }

}


// ------------------- DELETE FUNCTIONS --------------------
function delData() {
    let row = document.getElementsByClassName("active");
    //console.log(row);
    let ind = row[0].id;
    //console.log(ind);
    //console.log(data.length);
    data.splice(ind, 1);
    //console.log(data.length);
    updateTable();
}

function updateTable() {
    let table = document.querySelector("#dataTable");
    table.remove();
    displayData();
}









