const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function (e) {
  sidebar.classList.remove("show-sidebar");
  
});

const cancel = document.querySelector('.cancel')
const Btn = document.querySelector(".service-btn");
const modal = document.querySelector(".modal-overlay");
const close_modal = document.querySelector(".close");

Btn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

close_modal.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});