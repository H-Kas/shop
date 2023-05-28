
 function redirect(url)
 { 
  
   document.location.replace(url);
  
 }
 
 if (!localStorage.getItem('anun')) {
     redirect('login.html')
 }
 
let idCategory = JSON.parse(localStorage.getItem('categoriesList'))

idCategory.forEach(e => {
    let option = document.createElement('option')
    if (e !==null) {
         cars.innerHTML +=  `
    <option>${e.catName}</option>

    `
    }
   
});
function addProduct(){

    let productList = localStorage.getItem('productList') ? JSON.parse(localStorage.getItem('productList')) : []
    let prodId = productList.length + 1
    localStorage.setItem('prodId',prodId)
    productList.push({
        id: prodId,
        prodCat: cars.value,
        prodName: prod_Name.value,
        prodPrice: prod_Price.value,
        prodImg: img.files[0].name

    })

    localStorage.setItem('productList', JSON.stringify(productList))

    location.href = 'admin.html'
}