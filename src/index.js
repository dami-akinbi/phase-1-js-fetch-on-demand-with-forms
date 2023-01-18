const init = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInput = document.querySelector("#searchByID");

    fetch(`http://localhost:3000/movies/${userInput.value}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        const h4 = document.querySelector("#movieDetails h4");
        const p = document.querySelector("#movieDetails p");
        h4.innerText = `Title: ${data.title}`;
        p.innerText = `Summary: ${data.summary}`;
        // findById(data);
      });

    // function findById(arrayOfData) {
    //   for (member of arrayOfData)
    //     if (member.id === userInput) console.log(member);
    // }
  });
};

document.addEventListener("DOMContentLoaded", init);
