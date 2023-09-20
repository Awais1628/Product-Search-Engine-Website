const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".Product");
    
    for (var i = 0; i < product.length; i++) {
        let match = product[i].querySelector('h2');
        
        if (match) {
            let textValue = match.textContent || match.innerText;
            
            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "block";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}