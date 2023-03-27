




function showHide() {
    let x = document.querySelector(".nav_link");
    let y = document.querySelector(".nav_ham");
    if (x.style.display === "block" ) {
        y.innerHTML = '<i class="fa-solid fa-bars"></i>';
        x.style.display = "none";
    } else {
        y.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
        x.style.display = "block";
    }
    
  }



let all_card = document.querySelectorAll(".img_text_card_box_text");


// console.log(all_card)


for(let i = 1; i < all_card.length; i+=2){
    all_card[i].style.order = "1";
    // all_card[i].style.right = "0";
    // all_card[i].style.position = "absolute";
    // all_card[i].style.justifyContent = "center";
    // all_card[i].style.flexDirection = "column";
}

