  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 5; // Jumlah baris per halaman
    const table = document.getElementById('jadwalTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = tbody.getElementsByTagName('tr');
    const pagination = document.getElementById('pagination');
    const totalRows = rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    let currentPage = 1;

    function displayRows(page) {
        let start = (page - 1) * rowsPerPage;
        let end = start + rowsPerPage;

        // Sembunyikan semua baris
        for (let i = 0; i < totalRows; i++) {
            rows[i].style.display = 'none';
        }

        // Tampilkan baris sesuai halaman
        for (let i = start; i < end && i < totalRows; i++) {
            rows[i].style.display = '';
        }
    }

    function setupPagination() {
        pagination.innerHTML = '';

        // Tombol Prev
        let prevBtn = document.createElement('button');
        prevBtn.innerText = '«';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = function() {
            if (currentPage > 1) {
                currentPage--;
                updateTable();
            }
        };
        pagination.appendChild(prevBtn);

        // Tombol halaman
        for (let i = 1; i <= totalPages; i++) {
            let pageBtn = document.createElement('button');
            pageBtn.innerText = i;
            if (i === currentPage) pageBtn.disabled = true;
            pageBtn.onclick = function() {
                currentPage = i;
                updateTable();
            };
            pagination.appendChild(pageBtn);
        }

        // Tombol Next
        let nextBtn = document.createElement('button');
        nextBtn.innerText = '»';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = function() {
            if (currentPage < totalPages) {
                currentPage++;
                updateTable();
            }
        };
        pagination.appendChild(nextBtn);
    }

    function updateTable() {
        displayRows(currentPage);
        setupPagination();
    }

    updateTable(); // inisialisasi tampilan tabel dan pagination
});