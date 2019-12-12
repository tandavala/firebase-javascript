const list = document.querySelector("ul");
const form = document.querySelector("form");

const addRecipe = recipe => {
  let time = recipe.data.toDate();
  let html = `
        <li>
            <di>${recipe.title}</div>
            <di>${time}</div>
        </li>
    `;
  return (list.innerHTML += html);
};

// get documents
db.collection("recipes")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      addRecipe(doc.data());
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
