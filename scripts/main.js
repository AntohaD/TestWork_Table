function buildTable(data) {
    var index, table = document.querySelector("table");
    var tbody = document.createElement("tbody");

    data.forEach(function (el) {
        var tr = document.createElement("tr");
        tr.className = "rw";
        var btnSub = document.createElement("button");
        var btnEdit = document.createElement("button");
        var btnDelete = document.createElement("button");
        var btnSave = document.createElement("button");

        btnSub.className = "btn btn-default btn-sm";
        btnEdit.className = "btn btn-default btn-sm";
        btnDelete.className = "btn btn-default btn-sm";
        btnSave.className = "btn btn-default btn-sm";
        
        btnSub.textContent = "Submit";
        btnEdit.textContent = "Edit";
        btnDelete.textContent = "Delete";
        btnSave.textContent = "Save";

        for (var o in el) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(el[o]));     
            tr.appendChild(td);
        }

        tr.appendChild(btnSub);
        tr.appendChild(btnEdit);
        tr.appendChild(btnSave);
        tr.appendChild(btnDelete);

        btnSave.style.display = "none";

        btnEdit.onclick = function () {
            btnEdit.style.display = "none";
            btnSave.style.display = "inline";

            showModalWin();
            showData(el); //in the file modalWin
            saveData(el, tr); //in the file modalWin
        }

        btnSave.onclick = function () {
            btnEdit.style.display = "inline";
            btnSave.style.display = "none";
        }
        
        if (el.Submited === "true") {
            btnEdit.disabled = true;
            btnSub.disabled = true;
        }

        tr.onclick = function() {
            console.log(el);
        }

        btnSub.onclick = function () {
            el.Submited = "true";
            btnEdit.disabled = true;
            btnSub.disabled = true;
            td.innerHTML = true;
        }

        btnDelete.onclick = function () {
            console.log('Delete');
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
        }

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table;
}

window.onload = function () {
    document.querySelector(".container").appendChild(buildTable(orders));
}

// function add_row() {
    
//     var new_name=document.getElementById("new_name").value;
//     var new_country=document.getElementById("new_country").value;
//     var new_age=document.getElementById("new_age").value;
        
//     var table=document.getElementById("data_table");
//     var table_len=(table.rows.length)-1;
//     var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//     document.getElementById("new_name").value="";
//     document.getElementById("new_country").value="";
//     document.getElementById("new_age").value="";
// }