let ajou =document.getElementsByClassName("up");
for (let plus of ajou){
    plus.addEventListener('click',function(){
        plus.previousElementSibling.innerHTML++;
        let prix = plus.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML;
        const currTot = parseFloat(document.getElementById('total').innerHTML);
        tot = currTot + parseFloat(prix);
        document.getElementById('total').innerHTML = tot;
        const productTotal = plus.previousElementSibling.innerHTML * parseFloat(prix);
        plus.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerHTML = productTotal;
    }); }

let minus=document.getElementsByClassName("down");
for (let min of minus){
    min.addEventListener('click',function(){
        const repeated = min.nextElementSibling;
        if(repeated.innerHTML> 0) {
        repeated.innerHTML--;
        let prix = min.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML;
        const currTot = parseFloat(document.getElementById('total').innerHTML);
        tot = currTot - parseFloat(prix);
        document.getElementById('total').innerHTML = tot;
        const productTotal = min.nextElementSibling.innerHTML * parseFloat(prix);
        min.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerHTML = productTotal;
    }
    });
}

let deletes = document.getElementsByClassName('bi-bag-x-fill');
for(let del of deletes) {
    del.addEventListener('click', function() {
      let parentToDelete = del.parentElement.parentElement;
      const prix = del.parentElement
        .nextElementSibling
        .nextElementSibling
        .nextElementSibling
        .nextElementSibling
        .nextElementSibling
        .firstElementChild
        .firstElementChild
        .innerHTML
    const currTot = parseFloat(document.getElementById('total').innerHTML);
    tot = currTot - parseFloat(prix);
    document.getElementById('total').innerHTML = tot;
      parentToDelete.remove();
    })
};

let hearts = document.querySelector('.bi-emoji-heart-eyes-fill');
for (heart of hearts) {
  heart.addEventListener('click', function() {
    console.log("ur stupid");
       if(heart.style.color="red") {
        heart.style.color="currentColor";
      } else if(heart.style.color !== 'red'){
        heart.style.color = 'red'
       }
  })
}
