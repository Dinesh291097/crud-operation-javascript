function allData() {
    table.innerHTML = ""
    const existingitem = JSON.parse(localStorage.getItem("itemData")) ?? []
    existingitem.forEach(function (value, i) {
        var table = document.getElementById("table")
        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.name}</td>
                <td>${value.quantity}</td>
                <td>${value.mrp}</td>
                <td>${value.sale}</td>
                <td>${value.time}</td>
                <td>
                <button class="btn btn-sm btn-warning" onclick="editBtn(this)"">
                    <i class="fa fa-edit">Edit</i> 
                </button>
                </td>
                <td>
                <button class="btn btn-sm btn-danger" onclick="removeData(${i})">
                    <i class="fa fa-edit">Delete</i>
                </button>
                </td>
                </tr>`


    });
}
allData()
//delete data
function removeData(index) {
    const existingitem = JSON.parse(localStorage.getItem('itemData')) ?? []
    existingitem.splice(index, 1);
    localStorage.setItem('itemData', JSON.stringify(existingitem));
    allData()
}
// function editBtn(){

// }

// let name=document.getElementById("name").value;
// let quantity=document.getElementById("quantity").value
// let mrp=document.getElementById("mrp").value
// let sale=document.getElementById("sale").value
const existingitem = [...JSON.parse(localStorage.getItem("itemData")) ?? []]
// console.log(existingitem);
function editBtn(element) {
    let name = document.getElementById("name");
    let quantity = document.getElementById("quantity")
    let mrp = document.getElementById("mrp")
    let sale = document.getElementById("sale")

    let getParent = element.parentElement.parentElement
    let getData = getParent.children[1];
    // console.log(getData.innerText);
    form.style.display = "block"
    let findVal = existingitem.find((item) => item.name === getData.innerText)
    // console.log(findVal);
    if (findVal) {
        name.value = findVal.name
        quantity.value= findVal.quantity
        mrp.value = findVal.mrp
        sale.value = findVal.sale
    }

    form.addEventListener('submit', () => {
        // e.preventDefault();
        let getParent = element.parentElement.parentElement
        let getData = getParent.children[1];
        let findIndex = existingitem.findIndex((item) => item.name === getData.innerText)
        existingitem[findIndex].name = name.value
        existingitem[findIndex].quantity = quantity.value
        existingitem[findIndex].mrp = mrp.value
        existingitem[findIndex].sale = sale.value
        localStorage.setItem('itemData', JSON.stringify(existingitem))
        form.style.display = 'none'
    })
}




