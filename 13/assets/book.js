    let addBookBtn = document.getElementById("addBookBtn");
    let searchbtn = document.getElementById("searchbtn");
    let mainbk = document.getElementById("mainbk");

    addBookBtn.addEventListener("click", function () {
        let name = document.getElementById("newBookName").value;
        let author = document.getElementById("newBookAuthor").value;
        let price = document.getElementById("newBookPrice").value;

        if(name&&author&&price)
        {
        let newBookHTML = `
            <section>
                <h2 class="nme">${name}</h2>
                <h3>${author}</h3>
                <h4>Rs. ${price}</h4>
            </section>
        `;

        mainbk.innerHTML += newBookHTML;

        document.getElementById("newBookName").value = "";
        document.getElementById("newBookAuthor").value = "";
        document.getElementById("newBookPrice").value = "";
    }
    else
    {
        alert('All fields are mandetory');
    }
    });

    searchbtn.addEventListener("click", function () {
        let searchBook = document.getElementById("searchBook").value.trim();

        if (searchBook === "") {
            mainbk.textContent = "Please enter a search term.";
            return;
        }

        let matches = [];

        let bookElements = document.querySelectorAll(".nme");

        bookElements.forEach(function (element) {
            if (element.textContent.toLowerCase().includes(searchBook.toLowerCase())) {
                matches.push(element.parentNode.outerHTML);
            }
        });

        if (matches.length > 0) {
            mainbk.innerHTML = ""; 
            matches.forEach(function (match) {
                mainbk.innerHTML += match;
            });
        } else {
            mainbk.innerHTML = "No matching books found.";
        }
    });

