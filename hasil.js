
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });


        // data array. Anda bisa ganti dengan data asli dan dinamis
    const data = [
        { cabor:"BOLA BASKET", kategori:"5X5", gender:"PUTRA", kontingen:"MUSI BANYUASIN", medali:"EMAS", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"5X5", gender:"PUTRA", kontingen:"PALEMBANG", medali:"PERAK", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"5X5", gender:"PUTRA", kontingen:"BANYUASIN", medali:"PERUNGGU", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"5X5", gender:"PUTRI", kontingen:"MUSI BANYUASIN", medali:"EMAS", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"5X5", gender:"PUTRI", kontingen:"PALEMBANG", medali:"PERAK", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"5X5", gender:"PUTRI", kontingen:"BANYUASIN", medali:"PERUNGGU", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"3X3", gender:"PUTRA", kontingen:"MUSI BANYUASIN", medali:"EMAS", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"3X3", gender:"PUTRA", kontingen:"PALEMBANG", medali:"PERAK", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"3X3", gender:"PUTRA", kontingen:"BANYUASIN", medali:"PERUNGGU", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"3X3", gender:"PUTRI", kontingen:"MUSI BANYUASIN", medali:"EMAS", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"3X3", gender:"PUTRI", kontingen:"PALEMBANG", medali:"PERAK", update:"16/06/2025" },
        { cabor:"BOLA BASKET", kategori:"3X3", gender:"PUTRI", kontingen:"BANYUASIN", medali:"PERUNGGU", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"200 M", gender:"PUTRA", kontingen:"MUSI BANYUASIN", medali:"EMAS", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"200 M", gender:"PUTRA", kontingen:"PALEMBANG", medali:"PERAK", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"200 M", gender:"PUTRA", kontingen:"BANYUASIN", medali:"PERUNGGU", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"200 M", gender:"PUTRI", kontingen:"MUSI BANYUASIN", medali:"EMAS", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"200 M", gender:"PUTRI", kontingen:"PALEMBANG", medali:"PERAK", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"200 M", gender:"PUTRI", kontingen:"BANYUASIN", medali:"PERUNGGU", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"400 M", gender:"PUTRA", kontingen:"MUSI BANYUASIN", medali:"EMAS", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"400 M", gender:"PUTRA", kontingen:"PALEMBANG", medali:"PERAK", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"400 M", gender:"PUTRA", kontingen:"BANYUASIN", medali:"PERUNGGU", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"400 M", gender:"PUTRI", kontingen:"MUSI BANYUASIN", medali:"EMAS", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"400 M", gender:"PUTRI", kontingen:"PALEMBANG", medali:"PERAK", update:"16/06/2025" },
        { cabor:"ATLETIK", kategori:"400 M", gender:"PUTRI", kontingen:"BANYUASIN", medali:"PERUNGGU", update:"16/06/2025" },
    ];

    let currentPage = 1;
    let itemsPerPage = 15;

    function renderTable() {
        const tbody = document.getElementById('tableBody');
        tbody.innerHTML = "";

        let filteredData = applyAllFilters(data);

        const totalPages = Math.ceil(filteredData.length / itemsPerPage);

        // Pagination slice
        const startIndex = (currentPage - 1) * itemsPerPage;
        const pageData = filteredData.slice(startIndex, startIndex + itemsPerPage);

        pageData.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.cabor}</td>
                <td>${item.kategori}</td>
                <td>${item.gender}</td>
                <td>${item.kontingen}</td>
                <td>${item.medali}</td>
                <td>${item.update}</td>
            `;
            tbody.appendChild(tr);
        });

        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = "";

        if (totalPages <= 1) return;

        // Tombol Previous
        const btnPrev = document.createElement('button');
        btnPrev.textContent = "«";
        btnPrev.disabled = currentPage === 1;
        btnPrev.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable();
            }
        };
        pagination.appendChild(btnPrev);

        // Nomor halaman
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.className = i === currentPage ? 'active' : '';
            btn.onclick = () => {
                currentPage = i;
                renderTable();
            };
            pagination.appendChild(btn);
        }

        // Tombol Next
        const btnNext = document.createElement('button');
        btnNext.textContent = "»";
        btnNext.disabled = currentPage === totalPages;
        btnNext.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderTable();
            }
        };
        pagination.appendChild(btnNext);
    }

    function applyAllFilters(data) {
        const cabor = document.getElementById('filterCabor').value;
        const gender = document.getElementById('filterGender').value;
        const medali = document.getElementById('filterMedali').value;
        const kontingen = document.getElementById('filterKontingen').value;
        const kategori = document.getElementById('filterKategori').value;

        return data.filter(item => {
            return (!cabor || item.cabor === cabor)
                && (!medali || item.medali === medali)
                && (!gender || item.gender === gender)
                && (!kontingen || item.kontingen === kontingen)
                && (!kategori || item.kategori === kategori)
        });
    }

    function applyFilters() {
        currentPage = 1;
        renderTable();
    }


    function changeItemsPerPage() {
        itemsPerPage = parseInt(document.getElementById('itemsPerPage').value);
        currentPage = 1;
        renderTable();
    }

    // Initial render
    renderTable();