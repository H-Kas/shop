function deleteProduct(id) {
    let productList = JSON.parse(localStorage.getItem('productList'))
    let i = productList.findIndex(e => e.id == id)
    productList.splice(i, 1)
    localStorage.setItem('productList',JSON.stringify(productList))
    location.reload()
    prod()
    
}

function deleteCategory(id) {
    let categoriesList = JSON.parse(localStorage.getItem('categoriesList'))
    let i = categoriesList.findIndex(e => e.id == id)
    categoriesList.splice(i, 1)
    localStorage.setItem('categoriesList',JSON.stringify(categoriesList))
    location.reload()
    cat()
}