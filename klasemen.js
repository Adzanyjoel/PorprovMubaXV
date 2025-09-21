
  
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
          function toggleCollapse(elementId, clickedRow) {
            const detailRow = document.getElementById(elementId);
            const icon = clickedRow.querySelector('.toggle-icon');

            if (detailRow.classList.contains('hidden-detail')) {
                // Tampilkan baris detail
                detailRow.classList.remove('hidden-detail');
                icon.classList.add('rotated');
            } else {
                // Sembunyikan baris detail
                detailRow.classList.add('hidden-detail');
                icon.classList.remove('rotated');
            }
        }