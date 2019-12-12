const list = document.querySelector("ul");
const input = document.getElementById("#recipe");

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
