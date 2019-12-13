const list = document.querySelector("ul");
const form = document.querySelector("form");

const addRecipe = (recipe, id) => {
  let time = recipe.data.toDate();
  let html = `
        <li data-id="${id}">
            <di>${recipe.title}</div>
            <di>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;

  return (list.innerHTML += html);
};

// get documents
db.collection("recipes")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id);
      addRecipe(doc.data(), doc.id);
    });
  })
  .catch(err => {
    console.log(err);
  });

// add documents
form.addEventListener("submit", e => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    data: firebase.firestore.Timestamp.fromDate(now),
    author: "admin"
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch(err => {
      console.log(err);
    });
});

// deleting data
list.addEventListener("click", e => {
  //console.log(e);
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    console.log(e);
  } else {
    console.log("not a button");
  }
});
