const btn = document.querySelector("button");
const inp = document.querySelector("#favchap");
const list = document.querySelector("#list");



btn.addEventListener("click", function() {
    if (inp.value.trim() !== "") {
        const book = document.createElement("li");
        const del = document.createElement("button");

        book.textContent = inp.value;
        del.textContent = "❌";
                
        book.append(del);
        list.append(book);

        del.addEventListener("click", function () {
            list.removeChild(book);
            inp.focus();
        })
    }
    inp.focus();
    inp.value = ""
});

