// Tooltip simples
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.tooltip').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const tooltipText = el.getAttribute('data-tooltip');
      const tooltipBox = document.createElement('div');
      tooltipBox.className = 'custom-tooltip';
      tooltipBox.textContent = tooltipText;
      document.body.appendChild(tooltipBox);
      const rect = el.getBoundingClientRect();
      tooltipBox.style.left = `${rect.left + window.scrollX + 20}px`;
      tooltipBox.style.top = `${rect.top + window.scrollY - 10}px`;
    });

    el.addEventListener('mouseleave', () => {
      document.querySelectorAll('.custom-tooltip').forEach(t => t.remove());
    });
  });
});

// Modo Noturno (Tocha)
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Alternar visibilidade da sidebar
document.querySelectorAll('.toggle-sidebar').forEach(button => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
  });
});

// Ordenar lista de personagens
const ordenar = document.getElementById('ordenar');
if (ordenar) {
  ordenar.addEventListener('change', () => {
    const tipo = ordenar.value;
    const lista = document.getElementById('lista-personagens');
    const personagens = Array.from(lista.querySelectorAll('li'));

    personagens.sort((a, b) => {
      if (tipo === 'nome') {
        return a.dataset.nome.localeCompare(b.dataset.nome);
      } else if (tipo === 'gloria') {
        return b.dataset.gloria - a.dataset.gloria;
      }
    });

    personagens.forEach(p => lista.appendChild(p));
  });
}

