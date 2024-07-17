// Fuctions for shop page

// Function to show categories starts
let isShowCategories = true;

function showCategories() {
    if (isShowCategories) {
        isShowCategories = false;
        document.querySelectorAll(".categories span").forEach((span) => {
            span.style.display = 'inline-block'
        });
        document.querySelector(".apply-btn").style.display = 'inline-block';
    } else {
        isShowCategories = true;
        document.querySelectorAll(".categories span").forEach((span) => {
            span.style.display = 'inline-block'
        });
        document.querySelector(".apply-btn").style.display = 'none';
    }
}
// Function to show categories ends

// Function to search

function searching() {
    let searchValue = document.getElementById('search').value.toUpperCase();
    let productItems = document.querySelectorAll('.product-items');
    for (let i = 0; i < productItems.length; i++) {
        let name = productItems[i].querySelector('.item-detail p');
        if (name) {
            nameValue = name.textContent || name.innerHTML;
            if (nameValue.toUpperCase().indexOf(searchValue) > -1) {
                productItems[i].style.display = "";
            } else {
                productItems[i].style.display = "none";
            }
        }
    }
}

// Function ends ---------------------------------------------------------- 
// Function to show categories product
function showCategoriesProduct() {
    // Collect all checked category IDs
    let categories = document.getElementsByClassName('category');
    let keywords = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].checked) {
            keywords.push(categories[i].getAttribute("id").toLowerCase());
        }
    }

    // Join keywords with a separator for better readability and control
    let keywordString = keywords.join(' ');

    // Get all product items
    let productItems = document.querySelectorAll('.product-items');
    for (let j = 0; j < productItems.length; j++) {
        let productKeyword = productItems[j].querySelector(".tags p");
        if (productKeyword) {
            let productKeywordValue = (productKeyword.innerHTML || productKeyword.textContent).toLowerCase();

            // Check if any of the keywords are present in the product keyword value
            let matchFound = keywords.some(keyword => productKeywordValue.includes(keyword));
            productItems[j].style.display = matchFound ? "" : "none";
        } else {
            // If no keyword found in product, hide it
            productItems[j].style.display = 'none';
        }
    }
}