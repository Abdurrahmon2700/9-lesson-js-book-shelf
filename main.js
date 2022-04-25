// inputs
let elBooknameadd = document.querySelector("#addbook");
let elBoooksearching = document.querySelector("#searchingbook");

// buttons
let elAdd = document.querySelector("#done");
let elSearch = document.querySelector("#search");

//  ul lists
let elShelf = document.querySelector("#shelf");
let elSearchList = document.querySelector("#searchlist");

let books = []

elAdd.addEventListener("click", (e) => {
  e.preventDefault()
  let bookNameAdd = elBooknameadd.value;

  if(!books.includes(bookNameAdd) && bookNameAdd.length > 3 && isNaN(+bookNameAdd)){

    books.push(bookNameAdd);
    let newLi = document.createElement("li");
    newLi.textContent = bookNameAdd;
    elShelf.appendChild(newLi)

  }

  elBooknameadd.value = ""
  
})

elSearch.addEventListener("click", (e)=>{
    e.preventDefault()

    for(let i = 0 ; i < books.length; i++){

      if(books[i] == elBoooksearching.value){

        let newLi = document.createElement("li");
        newLi.textContent = books[i]
        elSearchList.appendChild(newLi)
        elBoooksearching.value = ""

      }

    }
})
