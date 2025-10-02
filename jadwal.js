// Match data converted from HTML
const matchesData = [
    // Tanggal 20 Okt 2025
  {
    id: 1,
    date: "20 Okt 2025",
    sport: "BULU TANGKIS",
    category: "GANDA",
    gender: "PUTRI",
    teams: ["MUSI BANYUASIN", "PALEMBANG"],
    teamLogos: ["img/Logo Kab Muba.jpg", ""],
    time: "15:00 WIB",
    venue: "Stabel Berkuda",
    venueLink: "https://maps.app.goo.gl/QzKgiFRnm7Gewx3L9",
    streamingLink: "https://www.youtube.com/@MusiBanyuasinTV",
    streamingText: "Tonton Sekarang",
    status: "Final"
  },
  {
    id: 2,
    date: "20 Okt 2025",
    sport: "BOLA VOLI",
    category:"-",
    gender: "PUTRI",
    teams: ["MUARA ENIM", "BANYUASIN"],
    teamLogos: ["", ""],
    time: "18:00 WIB",
    venue: "Stadion Serasan Sekate",
    venueLink: "https://maps.app.goo.gl/nLG4KSho8vxGc6sm6",
    streamingLink: "https://www.instagram.com/porprovsumselxv",
    streamingText: "Tonton Sekarang",
    status: "Semi Final"
  },
  {
    id: 3,
    date: "20 Okt 2025",
    sport: "RENANG",
    category: "200 M Gaya Kupu-Kupu",
    gender: "PUTRA",
    teams: ["MUSI BANYUASIN" , "LUBUK LINGGAU", "MUARA ENIM", "EMPAT LAWANG", "OKU UTARA", "OKU SELATAN", "PALI", "LAHAT"],
    teamLogos: ["img/Logo Kab Muba.jpg", "", "", "", "", "", "", ""],
    time: "10:30 WIB",
    venue: "Stadion Serasan Sekate",
    venueLink: "https://maps.app.goo.gl/nLG4KSho8vxGc6sm6",
    streamingLink: "done.html",
    streamingText: "Tonton Sekarang",
    status: "-",
    isGroupEvent: true
  },
  {
    id: 4,
    date: "20 Okt 2025",
    sport: "PENCAK SILAT",
    category:"KELAS A 40-45 KG",
    gender: "PUTRA",
    teams: ["MUARA ENIM", "BANYUASIN"],
    teamLogos: ["", ""],
    time: "18:00 WIB",
    venue: "Stadion Serasan Sekate",
    venueLink: "https://maps.app.goo.gl/nLG4KSho8vxGc6sm6",
    streamingLink: "https://www.instagram.com/porprovsumselxv",
    streamingText: "Tonton Sekarang",
    status: "Juara 3"
  },
  // Tanggal 19 Okt 2025
  {
    id: 1,
    date: "19 Okt 2025",
    sport: "BOLA BASKET",
    category: "3x3",
    gender: "PUTRA",
    teams: ["MUSI BANYUASIN", "PALEMBANG"],
    teamLogos: ["img/Logo Kab Muba.jpg", ""],
    time: "15:00 WIB",
    venue: "Stabel Berkuda",
    venueLink: "https://maps.app.goo.gl/QzKgiFRnm7Gewx3L9",
    streamingLink: "https://www.youtube.com/@MusiBanyuasinTV",
    streamingText: "Tonton Sekarang",
    status: "Final"
  },
  {
    id: 2,
    date: "19 Okt 2025",
    sport: "SEPAK BOLA",
    category:"-",
    gender: "PUTRA",
    teams: ["MUARA ENIM", "BANYUASIN"],
    teamLogos: ["", ""],
    time: "18:00 WIB",
    venue: "Stadion Serasan Sekate",
    venueLink: "https://maps.app.goo.gl/nLG4KSho8vxGc6sm6",
    streamingLink: "https://www.instagram.com/porprovsumselxv",
    streamingText: "Tonton Sekarang",
    status: "Semi Final"
  },
  {
    id: 3,
    date: "19 Okt 2025",
    sport: "ATLETIK",
    category: "200 M Gaya Kupu-Kupu",
    gender: "PUTRA",
    teams: ["MUSI BANYUASIN" , "LUBUK LINGGAU", "MUARA ENIM", "EMPAT LAWANG", "OKU UTARA", "OKU SELATAN", "PALI", "LAHAT"],
    teamLogos: ["img/Logo Kab Muba.jpg", "", "", "", "", "", "", ""],
    time: "10:30 WIB",
    venue: "Stadion Serasan Sekate",
    venueLink: "https://maps.app.goo.gl/nLG4KSho8vxGc6sm6",
    streamingLink: "done.html",
    streamingText: "Tonton Sekarang",
    status: "-",
    isGroupEvent: true
  },
  {
    id: 4,
    date: "19 Okt 2025",
    sport: "SEPAK BOLA",
    category:"-",
    gender: "PUTRA",
    teams: ["MUARA ENIM", "BANYUASIN"],
    teamLogos: ["", ""],
    time: "18:00 WIB",
    venue: "Stadion Serasan Sekate",
    venueLink: "https://maps.app.goo.gl/nLG4KSho8vxGc6sm6",
    streamingLink: "https://www.instagram.com/porprovsumselxv",
    streamingText: "Tonton Sekarang",
    status: "Juara 3"
  },
  // Tanggal 18 Okt 2025
  {
    id: 1,
    date: "18 Okt 2025",
    sport: "BOLA BASKET",
    category: "3x3",
    gender: "PUTRI",
    teams: ["MUSI BANYUASIN", "PALEMBANG"],
    teamLogos: ["img/Logo Kab Muba.jpg", ""],
    time: "15:00 WIB",
    venue: "Stabel Berkuda",
    venueLink: "https://maps.app.goo.gl/QzKgiFRnm7Gewx3L9",
    streamingLink: "https://www.youtube.com/@MusiBanyuasinTV",
    streamingText: "Tonton Sekarang",
    status: "Final"
  },
  {
    id: 2,
    date: "18 Okt 2025",
    sport: "SEPAK BOLA",
    category:"-",
    gender: "PUTRI",
    teams: ["MUARA ENIM", "BANYUASIN"],
    teamLogos: ["", ""],
    time: "18:00 WIB",
    venue: "Stadion Serasan Sekate",
    venueLink: "https://maps.app.goo.gl/nLG4KSho8vxGc6sm6",
    streamingLink: "https://www.instagram.com/porprovsumselxv",
    streamingText: "Tonton Sekarang",
    status: "Top 8"
  },
  {
    id: 3,
    date: "18 Okt 2025",
    sport: "ATLETIK",
    category: "200 M Gaya Bebas",
    gender: "PUTRI",
    teams: ["MUSI BANYUASIN" , "LUBUK LINGGAU", "MUARA ENIM", "EMPAT LAWANG", "OKU UTARA", "OKU SELATAN", "PALI", "LAHAT"],
    teamLogos: ["img/Logo Kab Muba.jpg", "", "", "", "", "", "", ""],
    time: "10:30 WIB",
    venue: "Stadion Serasan Sekate",
    venueLink: "https://maps.app.goo.gl/nLG4KSho8vxGc6sm6",
    streamingLink: "done.html",
    streamingText: "Tonton Sekarang",
    status: "-",
    isGroupEvent: true
  }
];

// Global variables
let filteredMatches = [...matchesData];
let currentPage = 1;
const rowsPerPage = 10;

// DOM elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const dateFilter = document.getElementById('dateFilter');
const sportFilter = document.getElementById('sportFilter');
const categoryFilter = document.getElementById('categoryFilter');
const genderFilter = document.getElementById('genderFilter');
const statusFilter = document.getElementById('statusFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const resultsCounter = document.getElementById('resultsCounter');
const tableBody = document.getElementById('tableBody');
const pagination = document.getElementById('pagination');
const noResults = document.getElementById('noResults');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
  populateFilters();
  updateDisplay();
});

// Mobile menu functionality
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Setup event listeners
function setupEventListeners() {
  dateFilter.addEventListener('change', applyFilters);
  sportFilter.addEventListener('change', applyFilters);
  categoryFilter.addEventListener('change', applyFilters);
  genderFilter.addEventListener('change', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
  clearFiltersBtn.addEventListener('click', clearAllFilters);
}

// Populate filter dropdowns
function populateFilters() {
  // Populate date filter
  const dates = [...new Set(matchesData.map(match => match.date))].sort();
  dates.forEach(date => {
    const option = document.createElement('option');
    option.value = date;
    option.textContent = date;
    dateFilter.appendChild(option);
  });


  // Populate sport filter
  const sports = [...new Set(matchesData.map(match => match.sport))].sort();
  sports.forEach(sport => {
    const option = document.createElement('option');
    option.value = sport;
    option.textContent = sport;
    sportFilter.appendChild(option);
  });

    // Populate category filter
  const categories = [...new Set(matchesData.map(match => match.category).filter(category => category && category !== '-'))].sort();
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

    // Populate gender filter
  const genders = [...new Set(matchesData.map(match => match.gender).filter(gender => gender && gender !== '-'))].sort();
  genders.forEach(gender => {
    const option = document.createElement('option');
    option.value = gender;
    option.textContent = gender;
    genderFilter.appendChild(option);
  });


  // Populate status filter
  const statuses = [...new Set(matchesData.map(match => match.status).filter(status => status && status !== '-'))].sort();
  statuses.forEach(status => {
    const option = document.createElement('option');
    option.value = status;
    option.textContent = status;
    statusFilter.appendChild(option);
  });
}

// Apply all filters
function applyFilters() {
  filteredMatches = matchesData.filter(match => {
    const dateMatch = !dateFilter.value || match.date === dateFilter.value;
    const sportMatch = !sportFilter.value || match.sport === sportFilter.value;
    const categoryMatch = !categoryFilter.value || match.category === categoryFilter.value;
    const genderMatch = !genderFilter.value || match.gender === genderFilter.value;
    const statusMatch = !statusFilter.value || match.status === statusFilter.value;

    return dateMatch && sportMatch && categoryMatch && genderMatch && statusMatch;
  });

  currentPage = 1; // Reset to first page when filtering
  updateDisplay();
}

// Clear all filters
function clearAllFilters() {
  dateFilter.value = '';
  sportFilter.value = '';
  categoryFilter.value = '';
  genderFilter.value = '';
  statusFilter.value = '';
  
  filteredMatches = [...matchesData];
  currentPage = 1;
  updateDisplay();
}

// Update the display
function updateDisplay() {
  displayMatches();
  updateResultsCounter();
  setupPagination();
  
  // Show/hide no results message
  if (filteredMatches.length === 0) {
    document.getElementById('jadwalTable').style.display = 'none';
    noResults.classList.remove('hidden');
    pagination.style.display = 'none';
  } else {
    document.getElementById('jadwalTable').style.display = 'table';
    noResults.classList.add('hidden');
    pagination.style.display = 'block';
  }
}

// Display matches for current page
function displayMatches() {
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageMatches = filteredMatches.slice(start, end);

  tableBody.innerHTML = '';

  pageMatches.forEach(match => {
    const row = createMatchRow(match);
    tableBody.appendChild(row);
  });
}

// Create category badge with color coding
function createGenderBadge(gender) {
  let badgeClass = '';
  let badgeText = gender;
  
  switch(gender) {
    case 'PUTRA':
      badgeClass = 'bg-blue-100 text-blue-800 border border-blue-300';
      break;
    case 'PUTRI':
      badgeClass = 'bg-pink-100 text-pink-800 border border-pink-300';
      break;
    default:
      badgeClass = 'bg-gray-100 text-gray-800 border border-gray-300';
  }
  
  return `<span class=\"${badgeClass} px-2 py-1 rounded-full text-xs font-semibold\">${badgeText}</span>`;
}

// Create a match row
function createMatchRow(match) {
  const row = document.createElement('tr');
  row.className = 'border-b hover:bg-gray-50 transition duration-200';

    // Create category badge with color coding
  const genderBadge = createGenderBadge(match.gender);

  
  row.innerHTML = `
    <td class="text-center font-semibold">${match.date}</td>
    <td class="text-center">${match.sport}</td>
    <td class="text-center">${match.category}</td>
    <td class="text-center">${genderBadge}</td>
    <td class="px-4 py-4 ${match.isGroupEvent ? 'text-center' : 'flex items-center justify-center space-x-6'}">
      ${createTeamsDisplay(match)}
    </td>
    <td class="text-center">${match.time}</td>
    <td class="px-4 py-4 text-center">
      <a href="${match.venueLink}" title="Klik untuk Map Venue" target="_blank" class="hover:underline">${match.venue}</a>
    </td>
    <td class="px-4 py-4 text-center">
      <a href="${match.streamingLink}" target="_blank" rel="noopener noreferrer"
         class="inline-block bg-[#ff0000] hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-xs">
        ${match.streamingText}
      </a>
    </td>
    <td class="px-4 py-4 text-center">
      <span class="text-black-800 rounded text-xs font-semibold">${match.status}</span>
    </td>
  `;

  return row;
}

// Create teams display (different for group events vs. regular matches)
function createTeamsDisplay(match) {
  if (match.isGroupEvent) {
    // For group events (like athletics with multiple participants)
    let teamsHtml = '<div class="flex flex-wrap justify-center gap-2">';
    match.teams.forEach((team, index) => {
      const logo = match.teamLogos[index] || '';
      teamsHtml += `
        <div class="flex flex-col items-center">
          ${logo ? `<img src="${logo}" alt="Logo ${team}" class="w-5 h-5 rounded-full border border-cyan-500" />` : '<div class="w-5 h-5 rounded-full border border-cyan-500 bg-gray-200"></div>'}
          <span class="text-xs font-semibold ">${team}</span>
        </div>
      `;
    });
    teamsHtml += '</div>';
    return teamsHtml;
  } else {
    // For regular head-to-head matches
    const team1 = match.teams[0];
    const team2 = match.teams[1];
    const logo1 = match.teamLogos[0] || '';
    const logo2 = match.teamLogos[1] || '';

    return `
      <div class="flex flex-col items-center">
        ${logo1 ? `<img src="${logo1}" title="${team1}" alt="Logo ${team1}" class="w-8 h-8 rounded-full border border-blue-500" />` : '<div class="w-8 h-8 rounded-full border border-blue-500 bg-gray-200"></div>'}
        <span class="text-xs font-semibold mt-1">${team1}</span>
      </div>
      <span class="font-bold text-lg">vs</span>
      <div class="flex flex-col items-center">
        ${logo2 ? `<img src="${logo2}" title="${team2}" alt="Logo ${team2}" class="w-8 h-8 rounded-full border border-red-500" />` : '<div class="w-8 h-8 rounded-full border border-red-500 bg-gray-200"></div>'}
        <span class="text-xs font-semibold mt-1">${team2}</span>
      </div>
    `;
  }
}

// Update results counter
function updateResultsCounter() {
  const total = matchesData.length;
  const filtered = filteredMatches.length;
  
  if (filtered === total) {
    resultsCounter.textContent = `Menampilkan semua ${total} pertandingan`;
  } else {
    resultsCounter.textContent = `Menampilkan ${filtered} dari ${total} pertandingan`;
  }
}

// Setup pagination
function setupPagination() {
  const totalPages = Math.ceil(filteredMatches.length / rowsPerPage);
  pagination.innerHTML = '';

  if (totalPages <= 1) {
    return; // Don't show pagination if only one page
  }

  // Previous button
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '&laquo;';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      updateDisplay();
    }
  };
  pagination.appendChild(prevBtn);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    
    if (i === currentPage) {
      pageBtn.classList.add('active');
      pageBtn.disabled = true;
    }
    
    pageBtn.onclick = () => {
      currentPage = i;
      updateDisplay();
    };
    
    pagination.appendChild(pageBtn);
  }

  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '&raquo;';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateDisplay();
    }
  };
  pagination.appendChild(nextBtn);
}