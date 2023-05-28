
 function redirect(url)
 { 
  
   document.location.replace(url);
  
 }
 
 if (!localStorage.getItem('anun')) {
     redirect('login.html')
 }
function addCategory(){

        let categoriesList = localStorage.getItem('categoriesList') ? JSON.parse(localStorage.getItem('categoriesList')) : []
        let catId = categoriesList.length + 1
    
        categoriesList.push({
            id: catId,
            catName: category_id.value
        })
    
        localStorage.setItem('categoriesList', JSON.stringify(categoriesList))
    
        redirect('admin.html')
}