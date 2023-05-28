
 function redirect(url)
{ 
 
  document.location.replace(url);
 
}

if (!localStorage.getItem('anun')) {
    redirect('login.html')
}

function logOut(){ 
    localStorage.removeItem('anun')
    redirect('login.html')
   
}
function addProduct(){
    let a = JSON.parse(localStorage.getItem(`categoriesList`))

    let b =a.find(e => e !==null)
    
    if (b) { 
        location.href = 'addProduct.html'
        
    }
    else{
       location.href = 'addCategory.html'
    }
  
  
}
function cat() {
    let idCategory = JSON.parse(localStorage.getItem('categoriesList'))
idCategory.forEach(e => {
    if (e!==null) {
            tbodyC.innerHTML += `
    <tr>
    <td>${e.id}</td>
    <td>${e.catName}</td>
    <td> 
    <a href='editCategory.html#${e.id}'>
    <img id='o' class='icons' src = './images/pencil.png'>
</a>
    <img class='icons' onclick='deleteCategory(${e.id})'   class='' src = './images/delete.png'></td>
    </tr>
    `
    }

});
}
cat()
function prod() {
    let idProduct = JSON.parse(localStorage.getItem('productList'))
    if (idProduct) {
          idProduct.forEach(e => {
    if (e !==null) {
        tbodyP.innerHTML += `
    <tr>
    <td id ='id'>${e.id}</td>
    <td>${e.prodName}</td>
    <td>${e.prodCat}</td>
    <td>${e.prodPrice}</td>
    <td><img src="./images/${e.prodImg}" alt=""></td>
    <td>
    <a href='editProduct.html#${e.id}'>
        <img id='o' class='icons' src = './images/pencil.png'>
    </a>
    <img onclick='deleteProduct(${e.id})' class='icons' src = './images/delete.png'>
    </td>
    </tr>
    `
   
    }
   
});
    }
  
}
prod()



 
function addCategory() {
    location.href = 'addCategory.html'
}
function editProduct() {
    location.href = 'editProduct.html'
   
}
function editCategory() {
    location.href = 'editCategory.html'
    
    
}