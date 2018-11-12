$(document).ready(function(){


    let dummy_data =
    [
        { "id": "2", "first_name": "Sam", "last_name": "Smith", "phone": "111-222-3333", "email": "ssmith@yahoo.com", "address": "33 Birch Rd", "city": "Miami", "state": "FL" },
        { "id": "3", "first_name": "Brad", "last_name": "Traversy", "phone": "211-322-4333", "email": "brad@test.com", "address": "222 South St", "city": "Portland", "state": "FL" }
    ];

    
    
    //console.log("Hello there");
    dd0 = dummy_data[0];
    dd1 = dummy_data[1];
    console.log(dd0);
    console.log(dummy_data[0]["id"]);
    
    first_name = dummy_data[0]["first_name"];

    last_name = dummy_data[0]["last_name"];
    

    dd1 = JSON.stringify(dd1);
    
    console.log(dd1);
    var para = document.createElement("div");
    var node = document.createTextNode("Item Description"+'\n'+first_name + last_name);
    para.appendChild(node);
    para.classList.add("test");
    console.log(para);
    
    var element = document.getElementById("div1");
    //element.innerHTML = para;
    console.log(element);
    
    if(element!=null){
        element.appendChild(para);
        
    }else{
        console.log("Mistake");
    }
    
});