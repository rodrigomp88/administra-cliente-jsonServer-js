import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";

(function () {
  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", validarCliente);
  });

  function validarCliente(e) {
    e.preventDefault();

    // Leer todos los inputs
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    // Crear un objeto con la información
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    if (validar(cliente)) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }
    nuevoCliente(cliente);
  }

  function validar(obj) {
    return !Object.values(obj).every((input) => input !== "");
  }

  //   function crearNuevoCliente(cliente) {
  //     const transaction = DB.transaction(["crm"], "readwrite");

  //     const objectStore = transaction.objectStore("crm");

  //     objectStore.add(cliente);

  //     transaction.onerror = function () {
  //       imprimirAlerta("Hubo un error", "error");
  //     };

  //     transaction.oncomplete = function () {
  //       console.log("Cliente Agregado");

  //       imprimirAlerta("El Cliente se agregó Correctamente");

  //       setTimeout(() => {
  //         window.location.href = "index.html";
  //       }, 3000);
  //     };
  //   }

  //   function conectarDB() {
  //     const abrirConexion = window.indexedDB.open("crm", 1);

  //     abrirConexion.onerror = function () {
  //       console.log("Hubo un error");
  //     };

  //     abrirConexion.onsuccess = function () {
  //       DB = abrirConexion.result;
  //     };
  //   }
})();
