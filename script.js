const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");
const filterSelect = document.getElementById("filter-genre");
const sortBtn = document.getElementById("sort-alpha");
const clearAllBtn = document.getElementById("clear-all");
const summaryDiv = document.querySelector(".summary");

let books = JSON.parse(localStorage.getItem("books")) || [];

const saveBooks = () => {
    localStorage.setItem("books", JSON.stringify(books));
};

const renderBooks = () => {
    bookList.innerHTML = "";
    const genreFilter = filterSelect.value;
    const filtered = genreFilter
        ? books.filter((b) => b.genre === genreFilter)
        : books;

    filtered.forEach(({ id, bookTitle, author, genre, pages }) => {
        const div = document.createElement("div");
        div.className = "book-item";
        div.innerHTML = `
        <h3>${bookTitle}</h3>
        <p>Av: ${author}</p>
        <p>Sjanger: ${genre}</p>
        <p>Sider: ${pages}</p>
        <button onclick="deleteBook('${id}')">Slett</button>
    `;
        bookList.appendChild(div);
    });

    renderSummary();
    renderGenreOptions();
};

const renderSummary = () => {
    const totalPages = books.reduce((sum, b) => sum + Number(b.pages), 0);
    summaryDiv.textContent = `Totalt antall sider lest: ${totalPages}`;
};

const renderGenreOptions = () => {
    const genres = [...new Set(books.map((b) => b.genre))];
    filterSelect.innerHTML = '<option value="">Alle sjangre</option>';
    genres.forEach((genre) => {
        const opt = document.createElement("option");
        opt.value = genre;
        opt.textContent = genre;
        filterSelect.appendChild(opt);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const book = {
        id: crypto.randomUUID(),
        bookTitle: title.value,
        author: author.value,
        genre: genre.value,
        pages: Number(pages.value),
    };
    books.push(book);
    saveBooks();
    e.target.reset();
    renderBooks();
});

filterSelect.addEventListener("change", renderBooks);
sortBtn.addEventListener("click", () => {
    books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
    saveBooks();
    renderBooks();
});

clearAllBtn.addEventListener("click", () => {
    if (confirm("Er du sikker på at du vil slette alle bøker?")) {
        books = [];
        saveBooks();
        renderBooks();
    }
});

const deleteBook = (id) => {
    books = books.filter((b) => b.id !== id);
    saveBooks();
    renderBooks();
};

renderBooks();
