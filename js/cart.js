let products1 = JSON.parse(localStorage.getItem('productList'))

function show() {
    cartBox.classList.toggle('show')
}

function add(id){
    let issetProducts = JSON.parse(localStorage.getItem('productList'))
    let primaryProduct = issetProducts.find(e => e.id == id)

    let b = localStorage.getItem('cartProduct') ? JSON.parse(localStorage.getItem('cartProduct')):[]
    let product

    if(!b.some(e => e.id == id)){
        product = products1.find(e=>e.id==id)
        product.count = 1
        b.push(product)
    }else{
        product = b.find(e=>e.id==id)
        product.count++
        product.prodPrice = product.count * primaryProduct.prodPrice
    }
    localStorage.setItem('cartProduct',JSON.stringify(b))
    cartRefresh()
}

function cartRefresh(){
    cartItems.innerHTML = ''
    let total = 0
    totalBox.innerHTML = `Total ${total}` 
    let products = JSON.parse(localStorage.getItem(`cartProduct`))

    if(products){
        products.forEach(product => {

            total += +product.prodPrice
            totalBox.innerHTML = `Total ${total}`

            cartItems.innerHTML += `
                    <div class='cart-item'>
                        <img width='100px' src='./images/${product.prodImg}'>
                        <h3> ${product.prodPrice}</h3>
                        <i style="color:rgb(181, 218, 255)" class='fa fa-times' onclick='deleteCartItem(${product.id})'></i>
                        <span onclick='plusAndMinus(this,${product.id})' class='plus'>+</span>
                        <span>x${product.count}</span>
                        <span onclick='plusAndMinus(this,${product.id})' class='minus'>-</span>
                    </div>
                `
        })
    }
}

cartRefresh()

function deleteCartItem(id) {
    let products = JSON.parse(localStorage.getItem('cartProduct'))
    let z = products.find(e=>e.id==id)
    products.splice(z,1)
    localStorage.setItem('cartProduct',JSON.stringify(products))
    cartRefresh()
    countCart()
}

function plusAndMinus(a,id) {
    let cartProduct = JSON.parse(localStorage.getItem('cartProduct'))
    if (a.innerText=='+') {
       cartProduct.forEach(e=>{
            if (e.id==id) {
                e.count++
                e.prodPrice = e.count * products1[id-1].prodPrice
            }
        })
        localStorage.setItem('cartProduct',JSON.stringify(cartProduct))
    }
    else if(a.innerText=='-'){
        cartProduct.forEach(e=>{
            if (e.id==id && e.count!=0) {
                e.count--
                e.prodPrice = e.count * products1[id-1].prodPrice
            }
        })
        localStorage.setItem('cartProduct',JSON.stringify(cartProduct))
    }
    cartRefresh()
}

function totalsCart() {
    let cartProduct = JSON.parse(localStorage.getItem('cartProduct'))
    let s = 0
    cartProduct.forEach(e=>{
        s = s+ +e.prodPrice
    })
    p.innerText = `Totals ${s}`
}
