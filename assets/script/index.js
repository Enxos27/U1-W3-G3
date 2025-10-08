const form = document.getElementById("main-form");

const deleteTask = function (e) {
  console.log("Elimino task", e);

  e.target.parentElement.remove();
};

const barraTask = function (e) {
  e.target.style.textDecoration = "line-through";
};

const gestioneForm = function (e) {
  e.preventDefault();
  const task = document.getElementById("task");

  const valoreTask = task.value;
  if (valoreTask === "" || valoreTask === " ") return;

  const riga = document.createElement("li");
  riga.innerHTML = `
    ${valoreTask} 
    <button onclick="deleteTask(event)">ELIMINA</button> 
    `;

  riga.onclick = barraTask; //per levare il pallino devo levare le <li> nella riga 22 perchè dichiarerei due <li> e con .remove ne cancellerei solo 1 dei due e quindi mi lascerebbe lo spazio vuoto

  riga.classList.add("elemento");
  const lista = document.getElementById("listaDafare");

  lista.appendChild(riga);
  form.reset();
};
form.addEventListener("submit", gestioneForm);
