// a modal popup window for first-time visitors
const popup = document.getElementById("discountPopup");
const closePopup = document.getElementById("closeIcon");

if (popup && closePopup) {
  setTimeout(() => {
    popup.classList.add("show");
  }, 5000);

  closePopup.onclick = () => {
    popup.classList.remove("show");
  };
}

const headerHTML = `
      <header class="header bg-white shadow-sm" id="header-template">
        <nav class="container navbar navbar-expand-lg p-0 align-items-center">
          <!-- Logo -->
          <a href="index.html" class="navbar-brand d-flex align-items-center p-0 me-3">
            <img src="images/logo.png" width="80" height="80" alt="Coffee Bean Logo" class="logo" />
          </a>

          <!-- Desktop Nav -->
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav nav-list">
              <li class="nav-item"><a class="nav-link text-uppercase fw-bold" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link text-uppercase fw-bold" href="coffee-selection.html">Coffee Selection</a></li>
              <li class="nav-item"><a class="nav-link text-uppercase fw-bold" href="brewing-equipment.html">Brewing Equipment</a></li>
              <li class="nav-item"><a class="nav-link text-uppercase fw-bold" href="events.html">Events and Workshops</a></li>
              <li class="nav-item"><a class="nav-link text-uppercase fw-bold" href="subscriptions.html">Special Offers and Subscriptions</a></li>

              <!-- Cart + Signup moved inside collapse for mobile -->
              <div class="mobile-only d-lg-none flex-column align-items-center">
                <a href="shopping-cart.html" class="position-relative text-decoration-none" style="color: #0b1d17">
                  <i class="fas fa-shopping-cart" style="font-size: 20px"></i>
                  <span class="count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">0</span>
                </a>
                <button class="signup-btn button">Sign Up <i class="fas fa-arrow-right"></i></button>
              </div>
            </ul>
          </div>

          <!-- Right side actions (desktop only) -->
          <div class="d-none d-lg-flex align-items-center ms-auto gap-3">
            <a href="shopping-cart.html" class="position-relative text-decoration-none" style="color: #0b1d17">
              <i class="fas fa-shopping-cart" style="font-size: 20px"></i>
              <span class="count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">0</span>
            </a>
            <div style="width: 1px; height: 24px; background: #0b1d17"></div>
            <button class="signup-btn button">Sign Up <i class="fas fa-arrow-right"></i></button>
          </div>

          <!-- Toggler button -->
          <button
            class="navbar-toggler border-0 d-lg-none ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle naviga tion"
            style="z-index: 1100"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </header>
    `;

const footerHtml = `
        <footer class="footer" id="footer-template">

      <div class="footer-container">
        <div class="footer-left">
               <img
            src="images/logo.png"
            width="80"
            height="80"
            alt="Coffee Bean Logo"
            class="logo"
          />
          <nav class="nav-links">
            <a href="index.html">Home</a>
            <a href="coffee-selection.html">Coffee Selection</a>
            <a href="brewing-equipment.html">Brewing Equipment</a>
            <a href="events.html">Events and Workshops</a>
            <a href="subscriptions.html">Special Offers and Subscriptions</a>
          </nav>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-google-plus-g"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-right">
          <h2>CONTACT US</h2>
          <div class="underline"></div>
          <p class="contact-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="contact-info">
            <div class="row">
              <span class="label">Phone:</span>
              <span>1.800.555.6789</span>
            </div>
            <div class="row">
              <span class="label">E-mail:</span>
              <a href="mailto:support@sitename.com">support@example.com</a>
            </div>
            <div class="row">
              <span class="label">Website:</span>
              <a href="#" target="_blank">www.example.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">© Copyright 2025. All Rights Reserved</div>
    </footer>
    `;

document.getElementById("header").innerHTML = headerHTML;
document.getElementById("footer").innerHTML = footerHtml;

const coffeeItems = [
  {
    type: "coffee",
    img: "images/coffee_images/ethiopian_yirgacheffe.jpg",
    title: "Ethiopian Yirgacheffe",
    price: "$7.50 USD",
    desc: "Bright and floral single-origin coffee with notes of citrus, jasmine, and berries.",
    recommend: "Pour-over, French Press, Espresso",
    notes: "Citrus, jasmine, berry",
  },
  {
    type: "coffee",
    img: "images/coffee_images/colombian_supremo.jpg",
    title: "Colombian Supremo",
    price: "$6.80 USD",
    desc: "Full-bodied and smooth coffee with rich caramel sweetness and nutty undertones.",
    recommend: "Drip Brew, French Press",
    notes: "Caramel, chocolate, nutty",
  },
  {
    type: "coffee",
    img: "images/coffee_images/sumatra_mandheling.jpg",
    title: "Sumatra Mandheling",
    price: "$8.00 USD",
    desc: "Deep, earthy, and bold with herbal complexity and low acidity.",
    recommend: "Espresso, Cold Brew",
    notes: "Earthy, spicy, herbal",
  },
  {
    type: "coffee",
    img: "images/coffee_images/tanzanian_peaberry.jpg",
    title: "Tanzanian Peaberry Blackcurrant",
    price: "$7.90 USD",
    desc: "Vibrant and juicy with blackcurrant and citrus notes, offering a wine-like finish.",
    recommend: "Pour-over, Chemex",
    notes: "Blackcurrant, citrus, winey",
  },
  {
    type: "coffee",
    img: "images/coffee_images/guatemala_antigua.jpg",
    title: "Guatemala Antigua",
    price: "$7.20 USD",
    desc: "Balanced coffee with chocolate and warm spice notes, finished with light smokiness.",
    recommend: "French Press, Espresso",
    notes: "Chocolate, spice, smoky",
  },
  {
    type: "coffee",
    img: "images/coffee_images/french_roast_blend.jpg",
    title: "Dark French Roast",
    price: "$6.50 USD",
    desc: "Bold and smoky dark roast with a chocolatey base and hints of toasted nuts.",
    recommend: "Drip Brew, Espresso",
    notes: "Smoky, dark chocolate, nutty",
  },
];
const equipmentItems = [
  {
    type: "equipment",
    img: "images/equipment_images/classic_stainless_steel_french_press.jpg",
    title: "Classic Stainless Steel French Press",
    price: "$45.00",
    desc: "Durable and easy to use. Perfect for rich, full-bodied coffee.",
    usage: "Use coarse ground coffee and steep for 4 minutes.",
  },
  {
    type: "equipment",
    img: "images/equipment_images/pourover_glass_coffee_dripper.jpg",
    title: "Pour-Over Glass Coffee Dripper",
    price: "$32.00",
    desc: "Elegant glass design for brewing clean and flavorful cups.",
    usage: "Use medium-fine ground coffee and pour in slow, circular motions.",
  },
  {
    type: "equipment",
    img: "images/equipment_images/stainless_steel_milk_frother.jpg",
    title: "Stainless Steel Milk Frother",
    price: "$20.00",
    desc: "Perfect for creating creamy foam for lattes and cappuccinos.",
    usage: "Use hot milk and froth until desired consistency is reached.",
  },
  {
    type: "equipment",
    img: "images/equipment_images/stovetop_espresso_maker.jpg",
    title: "Stovetop Espresso Maker (Moka Pot)",
    price: "$39.99",
    desc: "Classic Italian-style brewing for bold, strong coffee.",
    usage: "Fill bottom chamber with water and top with fine grounds.",
  },
  {
    type: "equipment",
    img: "images/equipment_images/electric_burr_coffee_grinder.jpg",
    title: "Electric Burr Coffee Grinder",
    price: "$59.00",
    desc: "Consistent grind size for better flavor extraction and control.",
    usage: "Adjust grind settings based on your brewing method.",
  },
  {
    type: "equipment",
    img: "images/equipment_images/manual_hand_coffee_grinder.jpg",
    title: "Manual Hand Coffee Grinder",
    price: "$25.00",
    desc: "Compact grinder with adjustable settings for fresh grounds anywhere.",
    usage: "Rotate handle to grind coffee beans to desired consistency.",
  },
];

const eventItems = [
  {
    title: "Coffee Tasting Session",
    img: "images/event_images/coffee_tasting_session.jpg",
    date: "July 15, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Downtown Cafe",
    desc: "Explore the rich flavors of our exclusive coffee blends with expert guidance.",
  },
  {
    title: "Latte Art Workshop",
    img: "images/event_images/latte_art_workshop.jpg",
    date: "July 20, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Bean Boutique Studio",
    desc: "Learn how to craft stunning latte art from our in-house barista experts.",
  },
  {
    title: "Brewing Methods Masterclass",
    img: "images/event_images/brewing_methods_masterclass.jpg",
    date: "August 5, 2025",
    time: "1:00 PM - 3:30 PM",
    location: "Uptown Workshop Hall",
    desc: "Discover the secrets to brewing perfection using various coffee brewing methods.",
  },
  {
    title: "Home Barista Essentials",
    img: "images/event_images/home_barista_essentials.jpg ",
    date: "August 12, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Bean Boutique Cafe Lounge",
    desc: "A beginner-friendly workshop covering espresso making and machine maintenance at home.",
  },
  {
    title: "Coffee and Dessert Pairing Night",
    img: "images/event_images/coffee_dessert_pairing_night.jpg",
    date: "August 25, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "The Artisan Room",
    desc: "A curated experience of coffee and dessert combinations that elevate flavor harmony.",
  },
  {
    title: "Sustainable Coffee Farming Talk",
    img: "images/event_images/sustainable_coffee_farming_talk.jpg",
    date: "September 1, 2025",
    time: "4:00 PM - 5:30 PM",
    location: "Community Workshop Space",
    desc: "Join coffee experts as they discuss eco-friendly farming practices and ethical sourcing.",
  },
];

function renderItemCard(item) {
  return `
    <div class="col-sm-6 col-lg-4 mb-4 card-wrapper mix" data-aos="fade-up" data-name="${item.title.toLowerCase()}">
      <div class="card h-100">
        <img src="${item.img}" alt="${item.title}" class="card-img-top" />
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">${item.title}</h5>
            <span class="card-price">${item.price}</span>
          </div>
          <div class="card-description">
            <p>${item.desc}</p>
            ${
              item.recommend
                ? `<p class="mb-0"><strong>Recommended Brewing:</strong> ${item.recommend}</p>`
                : ""
            }
            ${
              item.notes
                ? `<p class="mb-0"><strong>Tasting Notes:</strong> ${item.notes}</p>`
                : ""
            }
            ${
              item.usage
                ? `<p class="mb-0"><strong>Usage tip:</strong> ${item.usage}</p>`
                : ""
            }
            <div class="button add-to-card-btn">
              Add To Cart <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderEventCard(event) {
  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4 card-wrapper mix" data-aos="fade-up" data-name="${event.title.toLowerCase()}">
      <div class="card event-card h-100">
        <img
          src="${event.img}"
          class="card-img-top"
          alt="${event.title}"
          height="180"
          style="object-fit: cover"
        />
        <div class="card-body d-flex flex-column">
          <div class="d-flex flex-wrap gap-3 mb-2 event-meta">
            <div class="d-flex align-items-center gap-1">
              <i class="far fa-calendar-alt"></i>
              <span>${event.date}</span>
            </div>
            <div class="d-flex align-items-center gap-1">
              <i class="far fa-clock"></i>
              <span>${event.time}</span>
            </div>
            <div class="d-flex align-items-center gap-1">
              <i class="fas fa-map-marker-alt"></i>
              <span>${event.location}</span>
            </div>
          </div>
          <h3 class="event-title mb-2">${event.title}</h3>
          <p class="card-text flex-grow-1">
            ${event.desc}
          </p>
        </div>
      </div>
    </div>
  `;
}

// Function to create carousel slides (3 cards per slide)
function renderCarouselSlides(items, renderCardType, cardsPerSlide = 3) {
  let slidesHTML = "";
  for (let i = 0; i < items.length; i += cardsPerSlide) {
    const slideItems = items.slice(i, i + cardsPerSlide);
    const activeClass = i === 0 ? "active" : "";
    const cardsHTML = slideItems.map(renderCardType).join("");
    slidesHTML += `
          <div class="carousel-item ${activeClass}">
            <div class="row">
              ${cardsHTML}
            </div>
          </div>
        `;
  }
  return slidesHTML;
}

// Highlight current nav link
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-list a");
console.log("current", currentPage);
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("nav-active");
  }
});

// Init AOS
AOS.init();

// Text Search Filter
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card-wrapper");

  cards.forEach((card) => {
    const name = card.getAttribute("data-name");
    card.style.display = name.includes(query) ? "block" : "none";
  });
});

// Init MixItUp
const mixer = mixitup("#coffeeCatalogue", {
  selectors: {
    target: ".card-wrapper",
  },
  animation: {
    duration: 300,
  },
});
