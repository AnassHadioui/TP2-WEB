// JavaScript Code for the Frontend Exercises

// Carousel Functionality
const carouselImages = document.querySelectorAll('.carousel .images img');
let currentImageIndex = 0;
function updateCarousel() {
  carouselImages.forEach((img, index) => {
    img.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  });
}
document.getElementById('next').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  updateCarousel();
});
document.getElementById('prev').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel();
});
// Dropdown Menu
const menuTitle = document.getElementById('menu-title');
const menu = document.querySelector('.menu');
menuTitle.addEventListener('click', () => {
  if (menu.style.maxHeight) {
    menu.style.maxHeight = '';
  } else {
    menu.style.maxHeight = '200px';
  }
});
// To-Do List
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
document.getElementById('addTaskButton').addEventListener('click', () => {
  if (taskInput.value.trim() === '') return;
  const li = document.createElement('li');
  li.innerHTML = `${taskInput.value} <button class="delete-task">Supprimer</button>`;
  taskList.appendChild(li);
  taskInput.value = '';
  li.querySelector('.delete-task').addEventListener('click', () => {
    li.remove();
  });
});
// Modal
const modal = document.querySelector('.modal');
const modalOpen = document.getElementById('openModal');
const modalClose = document.getElementById('closeModal');
modalOpen.addEventListener('click', () => {
  modal.classList.remove('hidden');
});
modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});
// Filter Table
const filterInput = document.getElementById('filterInput');
const productList = document.getElementById('productList').children;
filterInput.addEventListener('input', () => {
  Array.from(productList).forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(filterInput.value.toLowerCase()) ? '' : 'none';
  });
});
// Responsive Layout
function adjustLayout() {
    const layoutDiv = document.getElementById('responsiveLayout');
    if (window.innerWidth < 600) {
      layoutDiv.textContent = 'Small screen layout';
    } else {
      layoutDiv.textContent = 'Large screen layout';
    }
  }
  
  // Event listener for window resize
  window.addEventListener('resize', adjustLayout);
  
  // Initial check to set layout
  adjustLayout();
  
// Progress Bar
const progressButton = document.getElementById('startProgress');
const progressFill = document.getElementById('progressFill');
progressButton.addEventListener('click', () => {
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      progressFill.style.width = `${width}%`;
    }
  }, 50);
});
// Drag and Drop
const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});
dropZones.forEach(zone => {
  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('highlight');
    const dragging = document.querySelector('.dragging');
    zone.appendChild(dragging);
  });
  zone.addEventListener('dragleave', () => {
    zone.classList.remove('highlight');
  });
  zone.addEventListener('drop', () => {
    zone.classList.remove('highlight');
  });
});
// Theme Switch
const themeButton = document.getElementById('toggleTheme');
const body = document.body;
themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}
  