let products = JSON.parse(localStorage.getItem('productList'))
let categories = JSON.parse(localStorage.getItem('categoriesList'))
let section = document.querySelector('section')

categories.forEach(e => {
    if (e !==null) {
          select.innerHTML += `
        <option class='op'>${e.catName}</option>
    `
    }
   
})
    
function butCat(a){

    let z

    if(a != 'other'){
        z = products.filter(e=>e.prodCat.toLowerCase() == a.toLowerCase())
    }else{
        z = products
    }

   section.innerHTML =''

   z.forEach(e => {
       section.innerHTML += `
       <div class='item'>
           <div class='item-img'>
               <img src='./images/${e.prodImg}'>
           </div>
           <div class='item-info'>
               <h2>${e.prodName}</h2>
               <h3>${e.prodPrice}$</h3>
               <a href='#!' onclick='add(${e.id})'>Add to cart</a>
           </div>
       </div>
    `
   })

}

butCat('other')

function butCat1(a){

    let z

        z = products.filter(e=>e.prodCat.toLowerCase() == a.toLowerCase())
   console.log(z);

   section.innerHTML =''

   z.forEach(e => {
       section.innerHTML += `
       <div class='item'>
           <div class='item-img'>
               <img src='./images/${e.prodImg}'>
           </div>
           <div class='item-info'>
               <h2>${e.prodName}</h2>
               <h3>${e.prodPrice}$</h3>
               <a href='#!' onclick='add(${e.id})'>Add to cart</a>
           </div>
       </div>
    `
   })

}