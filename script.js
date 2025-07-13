const ramos = [
  { id: 1, nombre: "Biología celular e histología", abre: [7] },
  { id: 2, nombre: "Anatomía general", abre: [13, 17] },
  { id: 3, nombre: "Matemáticas", abre: [9] },
  { id: 4, nombre: "Fundamentos de enfermería", abre: [] },
  { id: 5, nombre: "Educación en enfermería", abre: [17, 23] },
  { id: 6, nombre: "Electivo de comunicación", abre: [] },
  { id: 7, nombre: "Microbiología y parasitología", abre: [13, 17] },
  { id: 8, nombre: "Química general y orgánica", abre: [15, 17] },
  { id: 9, nombre: "Bioestadística", abre: [31] },
  { id: 10, nombre: "Socio antropología", abre: [23] },
  { id: 11, nombre: "Enfermería basada en la evidencia", abre: [17, 31] },
  { id: 12, nombre: "Electivo de desarrollo en pensamiento", abre: [] },
  { id: 13, nombre: "Fisiología general", abre: [19, 20, 23] },
  { id: 14, nombre: "Psicología general y del desarrollo", abre: [] },
  { id: 15, nombre: "Bioquímica", abre: [20, 23] },
  { id: 16, nombre: "Enfermería en salud pública y determinantes sociales", abre: [21, 22, 23] },
  { id: 17, nombre: "Gestión del cuidado en enfermería", abre: [26, 27] },
  { id: 18, nombre: "Electivo de comunicación", abre: [] },
  { id: 19, nombre: "Fisiopatología", abre: [26, 27] },
  { id: 20, nombre: "Farmacología", abre: [26, 27] },
  { id: 21, nombre: "Gestión en servicios de salud", abre: [25] },
  { id: 22, nombre: "Herramientas informáticas para la gestión en salud", abre: [31] },
  { id: 23, nombre: "Integrado de ciclo inicial", abre: [26, 27] },
  { id: 24, nombre: "Gestión del cuidado de la mujer", abre: [] },
  { id: 25, nombre: "Calidad en la gestión del cuidado", abre: [] },
  { id: 26, nombre: "Gestión del cuidado en adulto y adulto mayor", abre: [34] },
  { id: 27, nombre: "Gestión del cuidado en comunidades I (A+S)", abre: [35, 36, 37] },
  { id: 28, nombre: "Enfermería del adulto mayor", abre: [33] },
  { id: 29, nombre: "Electivo de ética", abre: [30] },
  { id: 30, nombre: "Bioética", abre: [] },
  { id: 31, nombre: "Metodología de la investigación", abre: [34] },
  { id: 32, nombre: "Gestión del cuidado en salud mental", abre: [] },
  { id: 33, nombre: "Cuidados paliativos y proceso de morir", abre: [] },
  { id: 34, nombre: "Proyecto de la investigación I", abre: [39] },
  { id: 35, nombre: "Gestión del cuidado de urgencia", abre: [] },
  { id: 36, nombre: "Gestión del cuidado del niño y adolescente", abre: [] },
  { id: 37, nombre: "Gestión del cuidado de comunidades II", abre: [] },
  { id: 38, nombre: "Electivo de desarrollo personal", abre: [40] },
  { id: 39, nombre: "Proyecto de investigación II", abre: [] },
  { id: 40, nombre: "Integrado de ciclo intermedio", abre: [42, 43, 44] },
  { id: 41, nombre: "Electivo de responsabilidad social", abre: [] },
  { id: 42, nombre: "Práctica profesional I", abre: [] },
  { id: 43, nombre: "Práctica profesional II", abre: [] },
  { id: 44, nombre: "Seminario de integrado en enfermería", abre: [] },
];

const aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.id = `ramo-${ramo.id}`;
    div.innerHTML = `<h3>${ramo.id}. ${ramo.nombre}</h3><small>ID: ${ramo.id}</small>`;

    if (!puedeAprobar(ramo)) {
      div.classList.add("bloqueado");
    }

    div.addEventListener("click", () => {
      if (!div.classList.contains("bloqueado")) {
        div.classList.toggle("aprobado");
        if (div.classList.contains("aprobado")) {
          aprobados.add(ramo.id);
        } else {
          aprobados.delete(ramo.id);
        }
        actualizarMalla();
      }
    });

    contenedor.appendChild(div);
  });
}

function puedeAprobar(ramo) {
  if (ramo.requisitos && ramo.requisitos.length > 0) {
    return ramo.requisitos.every(id => aprobados.has(id));
  }
  return true;
}

function actualizarMalla() {
  ramos.forEach(ramo => {
    const div = document.getElementById(`ramo-${ramo.id}`);
    if (!aprobados.has(ramo.id) && !puedeAprobar(ramo)) {
      div.classList.add("bloqueado");
    } else {
      div.classList.remove("bloqueado");
    }
  });
}

crearMalla();
