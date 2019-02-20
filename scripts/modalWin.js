function showModalWin() {

    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    var modalWin = document.getElementById('popupWin'); // находим наше "окно"
    modalWin.style.display = 'block'; // "включаем" его

    function close() {
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        return false;
    }

    darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
        close();
    };

    var btnClose = document.getElementById("btnClose");
    btnClose.onclick = function () {
        close();
    };

    if (bSave.onclick === "true") {
        close();
    }

    console.log(bSave);
}

function showData (e) {
    var dateDocument = document.getElementById("dDoc");
    var dateCreated = document.getElementById("dDat");
    var dateSubmited = document.getElementById("dSub");
    var client = document.getElementById("client");

    dateDocument.value = e.DateDocument;
    dateCreated.value = e.DateCreated;
    dateSubmited.value = e.DateSubmited;
    client.value = e.Client;
}

function saveData (e, tr) {
    var bSave = document.getElementById("bSave");

    bSave.onclick = function () {
        var dateDocument = document.getElementById("dDoc");
        var dateCreated = document.getElementById("dDat");
        var dateSubmited = document.getElementById("dSub");
        var client = document.getElementById("client");

        e.DateDocument = dateDocument.value;
        e.DateCreated = dateCreated.value;
        e.DateSubmited = dateSubmited.value;
        e.Client = client.value;

        tr.cells[1].innerHTML = e.DateDocument;
        tr.cells[2].innerHTML = e.DateCreated;
        tr.cells[3].innerHTML = e.DateSubmited;
        tr.cells[4].innerHTML = e.Client;
    }
}