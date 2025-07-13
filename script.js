// Aquí defines los ramos y nivel semestral según tu docto
const semestres = [
  { nivel: "Primer Semestre", ramos: ["Biología Celular e Histología","Anatomía General","Matemáticas","Fundamentos de Enfermería","Educación en Enfermería","Electivo Comunicación"] },
  { nivel: "Segundo Semestre", ramos: ["Microbiología y Parasitología","Química General y Orgánica","Bioestadística","Socioantropología e Interculturalidad para el Cuidado","Enfermería Basada en Evidencia","Electivo Desarrollo del Pensamiento"] },
  // Agrega más niveles según necesites...
];

const grid = document.getElementById("grid");

semestres.forEach((sem) => {
  const header = document.createElement("h2");
  header.textContent = sem.nivel;
  grid.appendChild(header);

  sem.ramos.forEach((ramo) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = ramo;
    // ejemplo de acción al hacer clic
    cell.addEventListener("click", () => {
      alert(`Asignatura: ${ramo}\n¡Hiciste clic en ella!`);
    });
    grid.appendChild(cell);
  });
});
