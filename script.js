var modal = document.getElementById("nav-hamburger");
var currentPage = 1;

// Open the modal
function openModal() {
  modal.style.display = "block";
}

// Close the modal
document.querySelector('.close-btn').onclick = function() {
  modal.style.display = "none";
}

// Change pages in the modal
function changePage(direction) {
  var totalPages = 2; // Adjust this as you add more pages
  document.getElementById('page' + currentPage).style.display = 'none';
  currentPage += direction;
  if (currentPage < 1) currentPage = totalPages;
  if (currentPage > totalPages) currentPage = 1;
  document.getElementById('page' + currentPage).style.display = 'block';
}
