//Style thẻ div chứa thẻ input và 3 button: Add, Sort, Search.
let toDoInput = document.getElementById("toDoInput");
toDoInput.style.display = "flex";
toDoInput.style.alignItems = "center";
toDoInput.style.justifyContent = "center";
toDoInput.style.height = "80px";

//Style cho thẻ input.
let input = document.getElementById("input");
input.style.width = "70%";
input.style.height = "50%";
input.style.marginRight = "1%";
input.style.fontSize = "100%";
//Gán object input cho biến yourInput.
let yourInput = input;
let styleButton = document.getElementsByTagName("button");
//Style chung cho 3 thẻ button.
for(let i = 0; i < styleButton.length; i++) {
    styleButton[i].style.width = "10%";
    styleButton[i].style.height = "50%";
    styleButton[i].style.margin = "1%";
}
//Style riêng cho button add.
styleButton[0].style.backgroundColor = "green";
styleButton[0].style.fontFamily = "Arial";
styleButton[0].style.color = "white";
styleButton[0].style.fontSize = "80%";
styleButton[0].style.borderRadius = "8%";
//Style riêng cho button sort.
styleButton[1].style.backgroundColor = "orange";
styleButton[1].style.fontFamily = "Arial";
styleButton[1].style.color = "white";
styleButton[1].style.fontSize = "80%";
styleButton[1].style.borderRadius = "8%";
//Style riêng cho button search.
styleButton[2].style.backgroundColor = "purple";
styleButton[2].style.fontFamily = "Arial";
styleButton[2].style.color = "white";
styleButton[2].style.fontSize = "80%";
styleButton[2].style.borderRadius = "8%";

//Style cho thẻ div chứa name và action.
let hTable = document.getElementById("hTable");
hTable.style.weight = "100px";
hTable.style.height = "30px";
hTable.style.display = "flex";
hTable.style.alignItems = "center";
hTable.style.justifyContent = "center";
hTable.style.marginTop = "5%";

//Style cho thẻ name.
let Name = document.getElementById("name");
Name.style.width = "63.6%";
Name.style.height = "100%";
Name.style.fontSize = "20px";
Name.style.fontWeight = "bold";
Name.style.border = "2px solid rgba(128,128,128, .2)";
Name.style.borderBottom = "2px solid rgba(128,128,128)";

//Style cho thẻ action.
let Action = document.getElementById("action");
Action.style.width = "35.4%";
Action.style.height = "100%";
Action.style.fontSize = "20px";
Action.style.fontWeight = "bold";
Action.style.border = "2px solid rgb(128,128,128, .2)";
Action.style.borderLeft = "none";
Action.style.borderBottom = "2px solid rgba(128,128,128)";

//
let pToDo = document.getElementsByClassName("pName");

//Trỏ tới 3 thẻ button: add, sort và search.
let btn = document.getElementsByTagName("button");

//Lấy ra thẻ button add và gán sự kiện.
btn[0].addEventListener("click", () => {
    if(yourInput.value == "")
    {
        alert("Không được để input trống");
    }
    else
    {
        //Tạo ra một thẻ div và style cho nó.
        let newToDo = document.createElement("div");
        newToDo.style.weight = "100px";
        newToDo.style.height = "40px";
        newToDo.style.display = "flex";
        newToDo.style.alignItems = "center";
        newToDo.style.justifyContent = "center";
        //Đẩy thẻ div ở trên vào cuối thẻ container.
        let container = document.getElementsByClassName("container");
        container[0].appendChild(newToDo);
        //Tạo ra một thẻ name và style cho nó.
        let name = document.createElement("p");
        name.innerText = yourInput.value;
        name.style.width = "63.6%";
        name.style.height = "100%";
        name.style.fontSize = "25px";
        name.style.borderRight = "2px solid rgba(128, 128, 128, .2)";
        name.style.borderLeft = "2px solid rgba(128, 128, 128, .2)";
        name.style.borderBottom = "2px solid rgba(128, 128, 128, .2)";
        name.style.backgroundColor = "rgba(128, 128, 128, .2)";
        name.setAttribute("class", "pName");
        
        //Tạo ra một thẻ action và style cho nó.
        let action = document.createElement("p");
        action.style.width = "34.4%";
        action.style.height = "100%";
        action.style.fontSize = "30px";
        action.style.paddingLeft = "1%";
        action.style.display = "flex";
        action.style.alignItems = "center";
        action.style.borderRight = "2px solid rgba(128, 128, 128, .2)";
        action.style.borderBottom = "2px solid rgba(128, 128, 128, .2)";
        action.style.backgroundColor = "rgba(128, 128, 128, .2)";
        
        //Tạo ra hai thẻ button để thay đổi hoặc xóa nội dung và style cho chúng.
        let buttonChange = document.createElement("button");
        buttonChange.innerText = "Edit";
        buttonChange.style.backgroundColor = "blue";
        buttonChange.style.fontFamily = "Arial";
        buttonChange.style.color = "white";
        buttonChange.style.fontSize = "60%";
        buttonChange.style.borderRadius = "8%";
        //Gọi đến thẻ button và gán sự kiện để thay đổi nội dung.
        buttonChange.addEventListener("click", () => {
            let changeContent = prompt("Type change ToDo");
            if(changeContent === "" || changeContent === name.innerText)
            {
                alert("Không được phép thay đổi");    
            }
            else
            {
                name.innerText = changeContent;
            }
        });
        let buttonDelete = document.createElement("button");
        buttonDelete.innerText = "Delete";
        buttonDelete.style.backgroundColor = "red";
        buttonDelete.style.fontFamily = "Arial";
        buttonDelete.style.color = "white";
        buttonDelete.style.fontSize = "60%";
        buttonDelete.style.marginLeft = "5%";
        buttonDelete.style.borderRadius = "8%";
        //Gọi đến thẻ button và gán sự kiện để xóa nội dung.
        buttonDelete.addEventListener("click", () => {
            newToDo.remove();
        })
        //Đẩy hai thẻ button vào thẻ action.
        action.appendChild(buttonChange);
        action.appendChild(buttonDelete);

        //Đẩy hai thẻ name và action vào thẻ div.
        newToDo.appendChild(name);
        newToDo.appendChild(action);
    }
})

btn[0].addEventListener("click", () => {
    yourInput.value = "";
})

//Gọi đến thẻ button sort và gán sự kiện.
btn[1].addEventListener("click", () => {
    let array = [pToDo.length];
    for(let i = 0; i < pToDo.length; i++) {
        array[i] = pToDo[i].textContent;
    }
    array.sort((a,b) => a.localeCompare(b));
    for(let i = 0; i < pToDo.length; i++) {
        pToDo[i].textContent = array[i];
    }
})

//Gọi đến thẻ button sort và gán sự kiện.
btn[1].addEventListener("dblclick", () => {
    let array = [pToDo.length];
    for(let i = 0; i < pToDo.length; i++) {
        array[i] = pToDo[i].textContent;
    }
    array.sort((a,b) => b.localeCompare(a));
    for(let i = 0; i < pToDo.length; i++) {
        pToDo[i].textContent = array[i];
    }
})

//Gọi đến thẻ button search để tìm kiếm.
btn[2].addEventListener("click", () => {
    for(let i = 0; i < pToDo.length; i++) {
        if(!pToDo[i].textContent.includes(yourInput.value)) {
            pToDo[i].style.visibility = "hidden";
            pToDo[i].nextSibling.style.visibility = "hidden";
        }
    }
});