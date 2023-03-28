const init = (event) => {
    const form = document.querySelector("form");
    console.log(form);
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = e.target.searchByID.value;
    fetch(`http://localhost:3000/movies/${value}`)
        .then(response => response.json())
        .then(data => {
            const h4 = document.querySelector('section#movieDetails h4');
            const p = document.querySelector('section#movieDetails p');
            console.log(h4)
            h4.textContent = data.title;
            p.textContent = data.summary
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
