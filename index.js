//  //var va r roo
// //parent element
//  var container=document.querySelector("#root")
//  //child element
//  var card=document.createElement("div");
//  card.setAttribute("id","card");
// container.appendChild(card)


// var image=document.createElement("img");
//  image.src="image/family.jpg"
//  image.alt="Image"
// image.style.width="20%"
//  card.appendChild(image)
function loadJSON(file,callback){
    var ajax=new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET",file,true);
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4 && ajax.status===200 ){
            callback(ajax.responseText);         
        }
         
    }
    ajax.send();
}
loadJSON("json_data/data.json",function(text){
    var d=JSON.parse(text)
    console.log(d);
})
