/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
// 
//khai báo các swal.fire


const listProduct = [{
        id: 1,
        name: "Sản phẩm 1",
        price: 50,
        title1:'Granola Siêu Hạt Ăn Kiêng Healthy Food, Ngũ Cốc Siêu Hạt Giảm Cân Dinh Dưỡng Không Đường, Óc Chó Đỏ, Dâu Tây, Thêm Mắc Ca 500gr',
        title2:'Giúp hỗ trợ giảm cân tự nhiên, đặc biệt đảm bảo an toàn cho sức khỏe với nguyên liệu đầu vào và quy trình sản xuất đã được kiểm nghiệm và cấp chứng chỉ An toàn VSTP ISO tiêu chuẩn Quốc Tế Được mix từ 12 loại Hạt & Quả nhập khẩu nguyên vị, nướng cùng yến mạch Úc & mật ong hoa nhãn, đem đến vị thơm ngon, giòn rụm, sử dụng thay thế đồ ăn vặt',
        img: './assets/img/products/sp6.jpg'
    },
    {
        id: 2,
        name: "Sản phẩm 2",
        price: 50,
        title1:'Ăn ngon - dáng vẫn eo thon cùng ngũ cốc giảm cân không đường Granola siêu hạt của nhà Nofa',
        title2:'Mix từ hạt - quả khô và yến mạch nướng mật ong 4 vị, giúp bạn vẫn khong những có ngay một món snack ăn vặt ngon miệng giòn rụm mà vẫn giúp kiểm soát cân nặng, hỗ trợ giảm cân cực kỳ hiệu quả ngay tại nhà 😊',
        img: './assets/img/products/sp9.webp'
    },
    {
        id: 3,
        name: "Sản phẩm 3",
        price: 50,
        title1:'1️⃣ DailyFood Việt Nam được freeship từ đơn hàng 50k,<br>2️⃣ Bảo hành 1 đổi 1 với bất kỳ lý do nào mà khách hàng không hài lòng',
        title2:'Sản phẩm: Ngũ Cốc Granola Siêu Macca ⚡️ Granola Ăn Kiêng Siêu Hạt Không Yến Mạch Nướng Mật Ong Cao Cấp DailyFood <br> Chính Hãng Thương hiệu: Healthy Food Việt Nam',
        img: './assets/img/products/sp3.webp'
    },
    {
        id: 4,
        name: "Sản phẩm 4",
        price: 50,
        title1:'Giảm cân đặc biệt: Không đường, Tốt cho sức khỏe, Không GMO, Không gluten, Không cholesterol',
        title2:'Hạt Chia hay còn gọi là Salvia Hispaniola là thực phẩm chứa nhiều chất dinh dưỡng hiếm có trong thế giới thực phẩm, đặc biệt là những chất mà chúng ta khó có thể bổ sung được bằng thuốc bổ như: Đạm cao nhưng không chứa #Cholesterol; Các loại khoáng chất (phốt pho, Canxi, Sắt,…); Chất xơ gấp 3,5 lần chất xơ so với yến mạch; Omeg-3-6-9 (gấp 8 lần cá hồi); Chất chống oxy hoá ngang bằng với quả Bluberries',
        img: './assets/img/products/sp4.webp'
    },
    {
        id: 5,
        name: "Sản phẩm 5",
        price: 50,
        title1:'500g Hạt Chia Úc Nhập khẩu Chính Hãng Absolute Organic Hữu Cơ NOFA',
        title2:'Giảm cân đặc biệt: Không Trans Fat, Không đường, Không lactose, Tốt cho sức khỏe, Không cholesterol',
        img: './assets/img/products/sp8.webp'
    },
    {
        id: 6,
        name: "Sản phẩm 6",
        price: 50,
        title1:'Hạt Dinh Dưỡng Mix Tổng Hợp 500gr',
        img: './assets/img/products/sp6.webp',
        title2:'Hạt dinh dưỡng mix các loại hạt tổng hợp sấy khô,Granola siêu hạt, granola ăn kiêng Óc chó, hạnh nhân, macca, bí xanh, điều được mix trộn từ các loại hạt dinh dưỡng  tốt nhất cho sức khỏe, được lựa chọn bởi những Hạt ngon nhất, nhân to, đã sấy chín, rất giòn, thơm, ngon …',
    }
]

function showProduct(data) {
    const main_content = document.querySelector('#show-product');
    if (main_content) {
        main_content.innerHTML = '';

    }
    for (let item of data) {
        if (main_content) {
            main_content.innerHTML += `
            <div class="col-lg-4 col-sm-6 mb-4">
            <!-- Portfolio item 1-->
            <div class="portfolio-item">
                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${item.id}">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="${item.img}" height="300px" alt="..." />
                </a>
                <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">${item.name}</div>
                    <div class="portfolio-caption-subheading text-muted">${item.price}</div>
                </div>
            </div>
        </div>
        `
        }

    }
}
showProduct(listProduct);

function showModal(data) {
    var main_modal = document.querySelector('body');

    for (let item of data) {
        if (main_modal) {
            main_modal.innerHTML += `
            <div class="portfolio-modal modal fade" id="portfolioModal${item.id}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">${item.name}</h2>
                                    <p>${item.title1}</p>
                                    <img class="img-fluid d-block mx-auto" height="300px" src="${item.img}" alt="..." />
                                    <p>${item.title2}</p>
                                    <ul class="list-inline" style="font-size:30px">
                                        <li>
                                            <strong>Price:</strong>
                                            ${item.price}
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                    <button class="btn btn-primary btn-xl text-uppercase" onclick="addToCart(${item.id})"  type="submit">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        }

    }

}
showModal(listProduct);
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
if (localStorage.getItem('cart') === null) {
    var cart = [];
} else {
    var cart = JSON.parse(localStorage.getItem('cart'));
}
//tạo thư viện swal
const swal = window.swal;

function addToCart(id) {
    const product = listProduct.find(item => item.id === id);
    //kiểm tra xem sản phảm có trong giỏ hàng chưa
    const index = cart.findIndex(item => item.id === id);
    if (index === -1) {
        cart.push({
            ...product,
            quantity: 1
        });
    } else {
        cart[index].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(localStorage.getItem('cart'));
    // alert('Add to cart successfully');
    Swal.fire(
        'Add to cart successfully!',
        'You clicked the button!',
        'success'
    )
    setTimeout(function () {
        Swal.fire({
            title: 'Do you want check product in cart?',
            text: "You will go to the cart",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK!'
        }).then((result) => {
            if (result.value) {
                location.replace("./cart.html");
            }
        })
    }, 1000);
}
const myCartTmp = localStorage.getItem('cart');
//chuyển đổi từ chuỗi myCartTnp sang mảng myCart
const myCart = JSON.parse(myCartTmp);
console.log(myCart);

function showCart(data) {
    const main_cart = document.querySelector('tbody');
    for (let item of data) {
        if (main_cart) {
            main_cart.innerHTML += `
                        <tr>
                            <td><img width="50px" height="50px" src="${item.img}" /> </td>
                            <td>${item.name}</td>
                            <td><input class="form-control" readonly type="text" value="${item.quantity}" /></td>
                            <td class="text-right">${item.price} €</td>
                            <td class="text-right"><button onclick="remove(${item.id})" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                        </tr>
        `
        }

    }
}
var total = 0;

function showTotal(data) {
    const subTotal = document.querySelector('#subTotal');
    let totalSubMoney = 0;
    for (let item of data) {
        totalSubMoney += item.price * item.quantity;
    }
    if (subTotal) {
        subTotal.innerHTML = totalSubMoney + ' €';
    }
    total = totalSubMoney + 10;
}
showCart(myCart);
showTotal(myCart);

const totalInner = document.querySelector('#total');
if (totalInner) {
    totalInner.innerHTML = total + ' €';

}

function remove(id) {

    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want delete this item?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            const index = cart.findIndex(item => item.id === id);
            if (index !== -1) {
                cart.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(function () {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }, 2000);
            
            location.reload();

        }
    })




}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
}())

function showProductCheckout(data) {
    const main_checkout = document.querySelector('#productCheckout');
    for (let item of data) {
        main_checkout.innerHTML += `
        
        <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 class="my-0">${item.name}</h6>
            <small class="text-muted">${item.quantity}</small>
        </div>
        <span class="text-muted">${item.quantity*item.price} €</span>
    </li>        `
    }
}
showProductCheckout(myCart);
const yourCart = document.querySelector('#yourCart');
if (yourCart) {
    yourCart.innerHTML = myCart.length;
}