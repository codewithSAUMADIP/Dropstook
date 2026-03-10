// ----------------------
// NAVBAR TOGGLE
// ----------------------
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ----------------------
// SMOOTH SCROLL
// ----------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ----------------------
// FAQ ACCORDION TOGGLE
// ----------------------
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// ----------------------
// SLIDER PAUSE/PLAY
// ----------------------
const sliderContainer = document.getElementById('sliderContainer');
const pauseBtn = document.getElementById('pauseBtn');
let isPaused = false;

if (sliderContainer && pauseBtn) {
  pauseBtn.addEventListener('click', function () {
    isPaused = !isPaused;
    sliderContainer.classList.toggle('paused', isPaused);
    pauseBtn.innerHTML = isPaused ? '▶️ Play' : '⏸️ Pause';
  });

  sliderContainer.addEventListener('mouseenter', function () {
    if (!isPaused) sliderContainer.classList.add('paused');
  });

  sliderContainer.addEventListener('mouseleave', function () {
    if (!isPaused) sliderContainer.classList.remove('paused');
  });
}

// ----------------------
// SERVICE CARD HOVER ANIMATION
// ----------------------
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ----------------------
// CHART BAR ANIMATION ON LOAD
// ----------------------
window.addEventListener('load', function () {
  const chartLine = document.querySelector('.chart-line');
  const bars = document.querySelectorAll('.bar');

  if (chartLine) {
    chartLine.style.transform = 'scaleX(0)';
    chartLine.style.transformOrigin = 'left';
    setTimeout(() => {
      chartLine.style.transition = 'transform 1.5s ease-out';
      chartLine.style.transform = 'scaleX(1)';
    }, 500);
  }

  bars.forEach((bar, index) => {
    bar.style.transform = 'scaleY(0)';
    bar.style.transformOrigin = 'bottom';
    setTimeout(() => {
      bar.style.transition = 'transform 0.8s ease-out';
      bar.style.transform = 'scaleY(1)';
    }, 800 + (index * 100));
  });
});

// ----------------------
// SCROLL REVEAL ANIMATION
// ----------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll('.all-project, .card-wrapper, .testimonials, .unique-section')
  .forEach(el => observer.observe(el));

// ----------------------
// SWIPER TESTIMONIAL SLIDER
// ----------------------
document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector('.swiper-container');
  if (swiperContainer) {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
    });
  } else {
    console.warn('Swiper container not found.');
  }
});


lucide.createIcons();


const brands = [
    { name: 'Bloomly AI',     logo: 'AP', img: "brands/bloomly.jpg" },
    { name: 'ANO Nutrition',    logo: 'GO', img: 'brands/ANO.png' },
    { name: 'BARGAD', logo: 'MS', img: 'brands/bargad.jpg' },
    { name: 'CM School',    logo: 'AM', img: 'brands/cm.jpg' },
    { name: 'Siddharth & Disha',      logo: 'ME', img: 'brands/disha.jfif' },
    { name: 'Euro Kids',     logo: 'TE', img: 'brands/euro kids.jpg' },
    { name: 'Grad Select',   logo: 'NF', img: 'brands/grad.jpg' },
    { name: 'Homeopathy Care',     logo: 'AD', img: 'brands/homeopathy care.png' }
];

// Create ticker items (duplicate for seamless loop)
const ticker = document.getElementById('ticker');
const duplicatedBrands = [...brands, ...brands];

duplicatedBrands.forEach(brand => {
    const item = document.createElement('div');
    item.className = 'ticker-item';
item.innerHTML = `
    <div class="brand-icon">
        <img 
            src="${brand.img}" 
            alt="${brand.name} logo"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
            style="width: 100%; height: 100%; object-fit: contain; padding: 0px;"
        />
        <span style="display:none; font-weight:900; font-size:14px; color:#7877C6;">${brand.logo}</span>
    </div>
    <div class="brand-name">${brand.name}</div>
`;
    ticker.appendChild(item);
});

// Animate counters
function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target + (el.parentElement.querySelector('.stat-label').textContent === 'Success Rate' ? '%' : '+');
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for scroll-triggered stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-value').forEach(el => {
                if (el.textContent === '0') {
                    animateCounter(el);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

// Start observing the stats container
window.addEventListener('load', () => {
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }
});



const brands2 = [
    { name: 'Jack Forest', logo: 'BA', img: 'brands/jack.png' },
    { name: 'Jump N Joy', logo: 'BB', img: 'brands/jump.jpg' },
    { name: 'K9 Badminton', logo: 'BC', img: 'brands/k9.jpg' },
    { name: 'Matcha Cafe', logo: 'BA', img: 'brands/matcha.jpg' },
    { name: 'Pragati Events', logo: 'BB', img: 'brands/pragati.jpg' },
    { name: 'PROT Official', logo: 'BC', img: 'brands/prot.jpg' },
    { name: 'TGT Gaming', logo: 'BA', img: 'brands/tgt.jpg' },
    { name: 'UKM', logo: 'BB', img: 'brands/ukm.png' }
    // ... add your brands here
];

// Second reverse ticker
const ticker2 = document.getElementById('ticker2');
const duplicatedBrands2 = [...brands2, ...brands2];

duplicatedBrands2.forEach(brand => {
    const item = document.createElement('div');
    item.className = 'ticker-item';
    item.innerHTML = `
        <div class="brand-icon">
            <img 
                src="${brand.img}" 
                alt="${brand.name} logo"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                style="width: 100%; height: 100%; object-fit: contain; padding: 0px;"
            />
            <span style="display:none; font-weight:900; font-size:14px; color:#7877C6;">${brand.logo}</span>
        </div>
        <div class="brand-name">${brand.name}</div>
    `;
    ticker2.appendChild(item);
});


    function switchTab(tab) {
        // Hide all tab contents
        document.getElementById('tab-website').style.display = 'none';
        document.getElementById('tab-social').style.display = 'none';

        // Remove active from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

        // Show selected tab + mark button active
        document.getElementById('tab-' + tab).style.display = 'grid';
        event.target.classList.add('active');

        // Re-trigger fade animation
        const el = document.getElementById('tab-' + tab);
        el.style.animation = 'none';
        el.offsetHeight; // reflow
        el.style.animation = 'fadeIn 0.4s ease';
    }