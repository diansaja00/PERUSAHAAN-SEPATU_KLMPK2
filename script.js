document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling untuk Navigasi Header
    const navLinks = document.querySelectorAll('nav ul li a, .btn-primary');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Cek jika link merujuk ke ID internal (dimulai dengan #)
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Perhitungan offset agar tidak tertutup navbar fixed
                    const navHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Ubah Tampilan Navbar saat Di-scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Modal Interaktif untuk Detail / Pemesanan Sepatu
    const modal = document.getElementById('shoeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const closeModal = document.querySelector('.close-modal');
    const btnOrder = document.querySelectorAll('.btn-order');

    // Buka Modal ketika tombol di kartu sepatu diklik
    btnOrder.forEach(button => {
        button.addEventListener('click', () => {
            const shoeName = button.getAttribute('data-shoe');
            const shoeCat = button.getAttribute('data-cat');

            modalTitle.textContent = shoeName;
            modalCategory.textContent = shoeCat;
            modal.style.display = 'flex';
        });
    });

    // Tutup Modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Tutup Modal jika area luar modal diklik
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});