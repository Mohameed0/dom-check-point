// var carts=document.querySelectorAll("#add-btn")
// console.log("haahha")

// for (var i=0 ; i<carts.length ; i++){
//     console.log('hahha')
// }
function like(heartbtn){
    if(heartbtn.classList.contains("far")){
        heartbtn.classList.remove("far");
        heartbtn.classList.add("fas");
    }else{
        heartbtn.classList.remove("fas");
        heartbtn.classList.add("far");
    }
}

function addToCart(item){
    
        item.classList.remove("hiden")
        if (item==document.getElementById('smart')){
            document.getElementById("in1").value="1"
        }
        else if (item==document.getElementById('bleu_chanel')){
            document.getElementById("in2").value="1"
        }
        else if (item==document.getElementById('sauvage')){
            document.getElementById("in3").value="1"
        }
        else if (item==document.getElementById('hugo_boss')){
            document.getElementById("in4").value="1"
        }
        else if (item==document.getElementById('dior_sport')){
            document.getElementById("in5").value="1"
        }
        else if (item==document.getElementById('Dolce_Gabbana')){
            document.getElementById("in6").value="1"
        }
        update(sum)
}
function removecart(item){
    
    item.classList.add("hiden")
    if (item==document.getElementById('smart')){
        document.getElementById("in1").value=0
    }
    update(sum)
}
var sum=0

function update(tatal){
    tatal+=(parseFloat(document.getElementById("in1").value)*55)+(parseFloat(document.getElementById("in2").value)*100)+(parseFloat(document.getElementById("in3").value)*250)+(parseFloat(document.getElementById("in4").value)*300)+(parseFloat(document.getElementById("in5").value)*200)+(parseFloat(document.getElementById("in6").value)*215)
    document.getElementById("Total").innerHTML=tatal
}
