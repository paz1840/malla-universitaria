const malla = [
  {
    semestre: "1º Semestre",
    ramos: [
      "Biología Celular e Histología",
      "Anatomía General",
      "Matemáticas",
      "Fundamentos de Enfermería",
      "Educación en Enfermería",
      "Electivo de Comunicación"
    ]
  },
  {
    semestre: "2º Semestre",
    ramos: [
      "Microbiología y Parasitología",
      "Química General y Orgánica",
      "Bioestadística",
      "Socioantropología e Interculturalidad para el Cuidado",
      "Enfermería Basada en la Evidencia",
      "Electivo de Desarrollo del Pensamiento"
    ]
  },
  {
    semestre: "3º Semestre",
    ramos: [
      "Fisiología General",
      "Psicología General y del Desarrollo",
      "Bioquímica",
      "Enfermería en Salud Pública y Determinantes Sociales",
      "Gestión del Cuidado en Enfermería",
      "Electivo de Comunicación"
    ]
  },
  {
    semestre: "4º Semestre",
    ramos: [
      "Fisiopatología",
      "Farmacología",
      "Gestión en Servicios de Salud",
      "Gestión del Cuidado en Enfermería",
      "Herramientas Informáticas para la Gestión",
      "Integrado Ciclo Inicial"
    ]
  },
  {
    semestre: "5º Semestre",
    ramos: [
      "Gestión del Cuidado de la Mujer",
      "Calidad en la Gestión del Cuidado",
      "Gestión del Cuidado en Adulto y Adulto Mayor",
      "Gestión del Cuidado en Comunidades I (A+S)",
      "Enfermería del Adulto Mayor",
      "Electivo de Ética"
    ]
  },
  {
    semestre: "6º Semestre",
    ramos: [
      "Bioética",
      "Metodología de la Investigación",
      "Gestión del Cuidado en Salud Mental",
      "Gestión del Cuidado en Adulto y Adulto Mayor",
      "Gestión del Cuidado en Comunidades II (A+S)",
      "Cuidados Paliativos y Proceso de Morir"
    ]
  },
  {
    semestre: "7º Semestre",
    ramos: [
      "Proyecto de Investigación I",
      "Gestión del Cuidado en Urgencia",
      "Gestión del Cuidado del Niño y Adolescente",
      "Gestión del Cuidado en Comunidades II",
      "Electivo de Desarrollo Personal"
    ]
  },
  {
    semestre: "8º Semestre",
    ramos: [
      "Proyecto de Investigación II",
      "Gestión del Cuidado en Urgencia",
      "Gestión del Cuidado del Niño y Adolescente",
      "Gestión del Cuidado en Comunidades II",
      "Integrado de Ciclo Intermedio",
      "Electivo de Responsabilidad Social"
    ]
  },
  {
    semestre: "9º Semestre",
    ramos: [
      "Práctica Profesional I",
      "Seminario de Integración en Enfermería"
    ]
  },
  {
    semestre: "10º Semestre",
    ramos: [
      "Práctica Profesional II"
    ]
  }
];

const grid = document.getElementById("grid");

malla.forEach((bloque) => {
  const container = document.createElement("div");
  container.classList.add("semestre");

  const title = document.createElement("h2");
  title.textContent = bloque.semestre;
  container.appendChild(title);

  const ramosGrid = document.createElement("div");
  ramosGrid.classList.add("ramos");

  bloque.ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo;
    div.onclick = () => alert(`Asignatura: ${ramo}`);
    ramosGrid.appendChild(div);
  });

  container.appendChild(ramosGrid);
  grid.appendChild(container);
});
