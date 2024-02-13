function storeRecords(){
   
    const carDetails ={
        brand: brand.value,
        price: price.value,
        key  : key.value
    }


if(carDetails.brand=='' || carDetails.price =='' ||carDetails.key=='' ){
    alert('Please enter the data')
}else if (!/^[0-9]+$/.test(carDetails.price)){
    alert('Please enter a valid numeric value for price')
}else{
    if(carDetails.id in localStorage){
        alert('Key already exists')
    }else{
        localStorage.setItem(carDetails.key,JSON.stringify(carDetails) );
alert('Details Added Successfully')
document.getElementById('details').reset();
    }
}
}


function retrieveRecords() {
    let searchkey = document.getElementById('key2').value;

    if (searchkey in localStorage) {
        let data = JSON.parse(localStorage.getItem(searchkey));
        document.getElementById('result').innerHTML = `<div id="result" style=" border: none;
        box-shadow: 3px 3px 10px 1px;
        margin: 5px;
        padding: 5px; font-size: smaller">
        <div style="display:flex; flex-direction:row;">
            <h4 style="color:blue; margin-left:30px;">Car Details</h4>
            <button style="background-color:red; border:none; font-size:smaller; margin-left:50px; height:25px; width:25px"  onclick="closeDetails()">X</button></div>
            <p>Car Brand: ${data.brand}</p>
            <p>Car Price: ${data.price}</p>
         </div>`;
     } else {
        alert('Key does not exist');
        document.getElementById('input2').reset();
     }
}

function closeDetails() {
    document.getElementById('result').innerHTML = '';  
    document.getElementById('input2').reset();
}



function removeRecords() {
    let searchkey1 = document.getElementById('key3').value;

    if (searchkey1 in localStorage) {
        localStorage.removeItem(searchkey1);
        alert('Removed successfully');
        document.getElementById('input3').reset();
    } else {
        alert('Key does not exist');
        document.getElementById('input3').reset();
    }
}

function clearAll(){
    localStorage.clear();
    alert('All records has been cleared')
}



