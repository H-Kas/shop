if (!localStorage.getItem('anun')) {
    location.href = 'login.html'
}

let id = location.hash.slice(1)
let categoriesList = JSON.parse(localStorage.getItem('categoriesList'))
let c =  categoriesList.find(e => e.id==id)
console.log(c);

category_id.value = c.catName

function editCat() {
    c.catName = category_id.value
    localStorage.setItem('categoriesList', JSON.stringify(categoriesList))
    location.href = 'admin.html'
}