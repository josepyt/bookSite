let btn = document.getElementById('shopCard');
let btn2 = document.getElementById('shopCard2');
let btn3 = document.getElementById('shopCard3');

if (btn) {
    btn.addEventListener('click', () => {
        btn.textContent = 'Ürün sepetinize eklendi!';
        btn.style.backgroundColor = 'green';
    });
}

if (btn2) {
    btn2.addEventListener('click', () => {
        btn2.textContent = 'Ürün sepetinize eklendi!';
        btn2.style.backgroundColor = 'green';
    });
}

if (btn3) {
    btn3.addEventListener('click', () => {
        btn3.textContent = 'Ürün sepetinize eklendi!';
        btn3.style.backgroundColor = 'green';
    });
}


const resetButton = (button) => {
    setTimeout(() => {
        button.textContent = 'Ürünü Sepete Ekle';
        button.style.backgroundColor = '';
    }, 2000);
};

let removeBtn = document.getElementById('removeBtn');
let removeBtn2 = document.getElementById('removeBtn2');
let removeBtn3 = document.getElementById('removeBtn3');

if (removeBtn && btn) {
    removeBtn.addEventListener('click', () => {
        if (btn.textContent === 'Ürünü Sepete Ekle') {
            btn.textContent = 'Ürün sepetinizde değil!';
            btn.style.backgroundColor = 'gray';
            resetButton(btn);
        } else if (btn.textContent === 'Ürün sepetinize eklendi!') {
            btn.textContent = 'Ürün sepetinizden çıkarıldı!';
            btn.style.backgroundColor = 'red';
            resetButton(btn);
        }
    });
}

if (removeBtn2 && btn2) {
    removeBtn2.addEventListener('click', () => {
        if (btn2.textContent === 'Ürünü Sepete Ekle') {
            btn2.textContent = 'Ürün sepetinizde değil!';
            btn2.style.backgroundColor = 'gray';
            resetButton(btn2);
        } else if (btn2.textContent === 'Ürün sepetinize eklendi!') {
            btn2.textContent = 'Ürün sepetinizden çıkarıldı!';
            btn2.style.backgroundColor = 'red';
            resetButton(btn2);
        }
    });
}

if (removeBtn3 && btn3) {
    removeBtn3.addEventListener('click', () => {
        if (btn3.textContent === 'Ürünü Sepete Ekle') {
            btn3.textContent = 'Ürün sepetinizde değil!';
            btn3.style.backgroundColor = 'gray';
            resetButton(btn3);
        } else if (btn3.textContent === 'Ürün sepetinize eklendi!') {
            btn3.textContent = 'Ürün sepetinizden çıkarıldı!';
            btn3.style.backgroundColor = 'red';
            resetButton(btn3);
        }
    });
}

document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      window.scrollBy(0, 100); 
    } else {
      window.scrollBy(0, -100);
    } 
});


const categories = document.querySelectorAll('.category-list li');
const bookCards = document.querySelectorAll('.book-card');

categories.forEach(category => {
    category.addEventListener('click', function() {
        const selectedCategory = this.textContent.trim();

        bookCards.forEach(card => {
            const bookTitle = card.querySelector('h3').textContent;
            const bookCategory = getCategoryForBook(bookTitle);

            if (selectedCategory === bookCategory || selectedCategory === "All") {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Kitap başlıklarına göre kategori belirleme (bu işlev ihtiyaçlara göre uyarlanabilir)
function getCategoryForBook(bookTitle) {
    switch (bookTitle) {
        case "Mimar Sinan'ın Taş Köprü Çözümlemeleri":
            return "Anı";
        case "Yanık Kitap Kokusu":
            return "Aykırı Edebiyat";
        case "Dijital Pazarlama Teknikleri":
            return "İş Yönetim";
        default:
            return "Unknown";
    }
}

//İletişim Sayfası için
function phoneText() {
    let phoneText = document.getElementById('phone')
    phoneText.innerHTML = 'Serbun Behçet';
    setTimeout(() => {
        phoneText.innerHTML = '+90 544 440 3400';
    }, 1700);
}

//Form için oluşturduğum Mesaj gönderiminin doğrulunu teyit eden fonksiyon
function button(event) {
    event.preventDefault(); 
        let name = document.getElementById('name').value ;
        let email = document.getElementById('email').value ;
        let text = document.getElementById('message').value ;
        if (name!= "" && email!= "" && text!= "" ) {
            const successMessage = document.getElementById('success-message') ;
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        } else {
            const errorMessage = document.getElementById('error-message') ;
            errorMessage.textContent = "Lütfen ilgili alanları eksiksiz doldurunuz" ;
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
}

function errorButton() {
    let name = document.getElementById('name').value ;
    let email = document.getElementById('email').value ;
    let text = document.getElementById('message').value ;
        if (name == "" && email == "" && text == "" ) {
           const errorMessage = document.getElementById('error-message') ;
           errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        } else {
            name.textContent = "" ;
            email.textContent = "" ;
            text.textContent = "" ;
        }
}


//Duyuru Sayfası

let title = document.getElementById('announcement');
let description = document.getElementById('description');
let date = document.getElementById('date');

let news = {
    title: 'Kitapların Stokları Hakkında',
    description: 'Kitaplarımız sitemizdeki satışlarında stoklarla sınırlıdır. Kitaplarımızı alırken çeşitli siteleri tercih ettiğinizde basım yılını ve kitap arkasındaki hologramın talimatlara uygun olduğunu teyit ediniz. Korsan satışlara karşı duyarlılığınız için teşekkür ederiz.',
    date: '01.09.2024'
}

title.textContent = news.title;

description.textContent = news.description;

date.textContent = news.date;