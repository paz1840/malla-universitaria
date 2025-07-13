const ramos = [
  { id: 1, nombre: "Biología celular e histología", requisitos: [] },
  { id: 2, nombre: "Anatomía general", requisitos: [] },
  { id: 3, nombre: "Matemáticas", requisitos: [] },
  { id: 4, nombre: "Fundamentos de enfermería", requisitos: [] },
  { id: 5, nombre: "Educación en enfermería", requisitos: [] },
  { id: 6, nombre: "Electivo de comunicación", requisitos: [] },
  { id: 7, nombre: "Microbiología y parasitología", requisitos: [1] },
  { id: 8, nombre: "Química general y orgánica", requisitos: [] },
  { id: 9, nombre: "Bioestadística", requisitos: [3] },
  { id: 10, nombre: "Socio antropología", requisitos: [] },
  { id: 11, nombre: "Enfermería basada en la evidencia", requisitos: [] },
  { id: 12, nombre: "Electivo de desarrollo en pensamiento", requisitos: [] },
  { id: 13, nombre: "Fisiología general", requisitos: [2, 7] },
  { id: 14, nombre: "Psicología general y del desarrollo", requisitos: [] },
  { id: 15, nombre: "Bioquímica", requisitos: [8] },
  { id: 16, nombre: "Enfermería en salud pública y determinantes sociales", requisitos: [] },
  { id: 17, nombre: "Gestión del cuidado en enfermería", requisitos: [2, 5, 7, 8, 11] },
  { id: 18, nombre: "Electivo de comunicación", requisitos: [] },
  { id: 19, nombre: "Fisiopatología", requisitos: [13] },
  { id: 20, nombre: "Farmacología", requisitos: [13, 15] },
  { id: 21, nombre: "Gestión en servicios de salud", requisitos: [16] },
  { id: 22, nombre: "Herramientas informáticas para la gestión en salud", requisitos: [16] },
  { id: 23, nombre: "Integrado de ciclo inicial", requisitos: [5, 10, 13, 15, 16] },
  { id: 24, nombre: "Gestión del cuidado de la mujer", requisitos: [] },
  { id: 25, nombre: "Calidad en la gestión del cuidado", requisitos: [21] },
  { id: 26, nombre: "Gestión del cuidado en adulto y adulto mayor", requisitos: [17, 19, 20, 23] },
  { id: 27, nombre: "Gestión del cuidado en comunidades I (A+S)", requisitos: [17, 19, 20, 23] },
  { id: 28, nombre: "Enfermería del adulto mayor", requisitos: [] },
  { id: 29, nombre: "Electivo de ética", requisitos: [] },
  { id: 30, nombre: "Bioética", requisitos: [29] },
  { id: 31, nombre: "Metodología de la investigación", requisitos: [9, 11, 22] },
  { id: 32, nombre: "Gestión del cuidado en salud mental", requisitos: [] },
  { id: 33, nombre: "Cuidados paliativos y proceso de morir", requisitos: [28] },
  { id: 34, nombre: "Proyecto de la investigación I", requisitos: [31] },
  { id: 35, nombre: "Gestión del cuidado de urgencia", requisitos: [26, 27] },
  { id: 36, nombre: "Gestión del cuidado del niño y adolescente", requisitos: [26, 27] },
  { id: 37, nombre: "Gestión del cuidado de comunidades II", requisitos: [27] },
  { id: 38, nombre: "Electivo de desarrollo personal", requisitos: [] },
  { id: 39, nombre: "Proyecto de investigación II", requisitos: [34] },
  { id: 40, nombre: "Integrado de ciclo intermedio", requisitos: Array.from({ length: 34 }, (_, i) => i + 1).concat([38]) },
  { id: 41, nombre: "Electivo de responsabilidad social", requisitos: [] },
  { id: 42, nombre: "Práctica profesional I", requisitos: Array.from({ length: 41 }, (_, i) => i + 1) },
  { id: 43, nombre: "Práctica profesional II", requisitos: Array.from({ length: 41 }, (_, i) => i + 1) },
  { id: 44, nombre: "Seminario de integrado en enfermería", requisitos: Array.from({ length: 41 }, (_, i) => i + 1) },
];

const mallaDiv = document.getElementById("malla");
let aprobados = new Set();

function renderMalla() {
  mallaDiv.innerHTML = "";
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";

    const tieneReq = ramo.requisitos.length > 0;
    const desbloqueado = ramo.requisitos.every(r => aprobados.has(r));

    if (aprobados.has(ramo.id)) {
      div.classList.add("aprobado");
    } else if (tieneReq && !desbloqueado) {
      div.classList.add("bloqueado");
    }

    div.innerHTML = `<strong>${ramo.id}. ${ramo.nombre}</strong>`;
    if (tieneReq) {
      div.innerHTML += `<small>Requisitos: ${ramo.requisitos.join(", ")}</small>`;
    }

    div.onclick = () => {
      if (div.classList.contains("bloqueado")) {
        alert("Debes aprobar los requisitos primero.");
        return;
      }
      if (!aprobados.has(ramo.id)) {
        aprobados.add(ramo.id);
        renderMalla();
      }
    };

    mallaDiv.appendChild(div);
  });
}

renderMalla();
