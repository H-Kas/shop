let id = location.hash.slice(1)
 if (!localStorage.getItem('anun')) {
     location.href = 'login.html'
 }
 
let idCategory = JSON.parse(localStorage.getItem('categoriesList'))

    idCategory.forEach(e => {
    if (e !==null) {
         cars.innerHTML +=  `
    <option>${e.catName}</option>

    `
    }
});


let productList = JSON.parse(localStorage.getItem('productList'))
let p =  productList.find(e => e.id==id)
console.log(p);
prod_Name.value = p.prodName
prod_Price.value = p.prodPrice


function editProd() {
   p.prodName  = prod_Name.value
   p.prodPrice =  prod_Price.value
if (img.files.length>0) {
    p.img = img.files[0].name
}
    localStorage.setItem('productList', JSON.stringify(productList))
    location.href = 'admin.html'
}