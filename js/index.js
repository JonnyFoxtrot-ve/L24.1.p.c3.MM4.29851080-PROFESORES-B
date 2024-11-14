const arrayProfesores = [
  { categoria: 1, nombre: "Ana", sexo: "F" },
  { categoria: 3, nombre: "Pedro", sexo: "M" },
  { categoria: 3, nombre: "Maria", sexo: "F" },
  { categoria: 1, nombre: "Luis", sexo: "M" },
  { categoria: 4, nombre: "Andrea", sexo: "F" },
  { categoria: 2, nombre: "Luisa", sexo: "F" },
  { categoria: 2, nombre: "Daniel", sexo: "M" },
  { categoria: 5, nombre: "Ricardo", sexo: "F" },
  { categoria: 4, nombre: "David", sexo: "M" },
  { categoria: 1, nombre: "Luna", sexo: "F" },
];

let profesoresCategoria = (arrayProfesores, categoria) => {
  return arrayProfesores.filter((profesor) => profesor.categoria === categoria);
};

let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => {
  const profesoresFiltrados = profesoresCategoria(profesores, categoria);

  const totalProfesores = profesoresFiltrados.length;

  const totalSexo = profesoresFiltrados.filter(
    (profesor) => profesor.sexo === sexo
  ).length;

  if (totalProfesores === 0) {
    return 0; // Evitar división por cero
  }

  return (totalSexo / totalProfesores) * 100; // Retornar el porcentaje
};

let salida = document.getElementById("salida");
let profeCategoria = parseInt(prompt("Ingrese la categoría (1-5):"));
let profesorSexo = prompt("Ingrese el sexo (F o M):").toUpperCase();

// Validar entrada de categoría
if (profeCategoria < 1 || profeCategoria > 5) {
  alert("No existe un profesor con esa categoría");
} else if (profesorSexo !== "F" && profesorSexo !== "M") {
  alert("Sexo inválido. Ingrese 'F' o 'M'.");
} else {
  let porcentaje = porcProfesSexoEnCategoria(
    arrayProfesores,
    profeCategoria,
    profesorSexo
  );
  salida.innerHTML += `Profesores de la categoría ${profeCategoria} y sexo ${profesorSexo}:<br>`;
  salida.innerHTML += `Porcentaje de profesores de la categoría ${profeCategoria} y sexo ${profesorSexo}: ${porcentaje.toFixed(
    2
  )}%<br>`;
}
