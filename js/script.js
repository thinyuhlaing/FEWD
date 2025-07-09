// Load Header

// Load Header
fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // ✅ Setup nav-active highlighting
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-list a");
    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("nav-active");
      }
    });

    // ✅ Now run popup logic (after header is injected)
    const popup = document.getElementById("discountPopup");
    const closePopup = document.getElementById("closeIcon");
    const signUpBtn = document.querySelector(".signup-btn");

    if (popup && closePopup) {
      setTimeout(() => {
        popup.classList.add("show");
      }, 5000);

      closePopup.onclick = () => {
        popup.classList.remove("show");
      };
    }

    if (signUpBtn && popup) {
      signUpBtn.onclick = () => {
        popup.classList.add("show");
      };
    }
  });
// Load Footer
fetch("components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
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

// Cart data structure
const cartItems = [
  {
    id: 1,
    name: "Ethiopian Single-Origin Coffee Beans",
    price: 18.0,
    quantity: 1,
  },
  {
    id: 2,
    name: "Classic Stainless Steel French Press",
    price: 45.0,
    quantity: 1,
  },
  {
    id: 3,
    name: "Colombian Single-Origin Coffee Beans",
    price: 20.0,
    quantity: 2,
  },
  {
    id: 4,
    name: "Compact Espresso Machine",
    price: 250.0,
    quantity: 1,
  },
  {
    id: 5,
    name: "Glass Pour Over Coffee Set",
    price: 35.0,
    quantity: 1,
  },
];

// Update prices on quantity change
function updatePrices() {
  let subtotal = 0;
  cartItems.forEach((item) => {
    subtotal += item.price * item.quantity;
  });
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  document.getElementById("subtotal-price").textContent = `$${subtotal.toFixed(
    2
  )}`;
  document.getElementById("tax-price").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("total-price").textContent = `$${total.toFixed(2)}`;
}

// Attach event listeners to quantity inputs and remove buttons
function attachListeners() {
  cartItems.forEach((item) => {
    const qtyInput = document.getElementById(`qty-${item.id}`);
    const removeBtn = qtyInput.nextElementSibling;

    qtyInput.addEventListener("change", (e) => {
      let val = parseInt(e.target.value);
      if (isNaN(val) || val < 1) {
        val = 1;
        e.target.value = val;
      }
      item.quantity = val;
      updatePrices();
    });

    removeBtn.addEventListener("click", () => {
      // Remove item from cartItems array
      const index = cartItems.findIndex((i) => i.id === item.id);
      if (index > -1) {
        cartItems.splice(index, 1);
      }
      // Remove item from DOM
      const li = removeBtn.closest("li");
      li.remove();
      updatePrices();
    });
  });
}

attachListeners();
updatePrices();

// Checkout button click handler
document.getElementById("checkout-button").addEventListener("click", () => {
  alert("Checkout functionality coming soon!");
});

const coffeeItems = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEHq9CPM7UC75pp2OdN_PzYKtBGbEvrUeYA&s",
    title: "Morning Bliss",
    price: "$6.00 USD",
    desc: "A smooth medium roast with notes of caramel and hazelnut. Perfect to start your day.",
    recommend: "Pour-over, Espresso",
    notes: "Caramel, Nutty",
  },
  {
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80",
    title: "Ethiopian Floral",
    price: "$7.80 USD",
    desc: "Floral aroma and citrus brightness. Great with pour-over or Chemex.",
    recommend: "Pour-over, Chemex",
    notes: "Floral, Citrus",
  },
  {
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
    title: "House Blend",
    price: "$6.00 USD",
    desc: "Balanced flavor with caramel and nutty notes. Ideal for drip or cold brew.",
    recommend: "Drip, Cold Brew",
    notes: "Caramel, Nutty",
  },
  {
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
    title: "Kenyan Citrus",
    price: "$7.50 USD",
    desc: "Bright citrusy acidity, vibrant body.",
    recommend: "Chemex, V60",
    notes: "Citrus, Bright",
  },
  {
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
    title: "Colombian Classic",
    price: "$6.50 USD",
    desc: "Classic Colombian blend with chocolate and nut undertones.",
    recommend: "Drip, French Press",
    notes: "Chocolate, Nutty",
  },
  {
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
    title: "Sumatra Dark",
    price: "$7.90 USD",
    desc: "Dark roast with bold body and earthy flavors.",
    recommend: "Espresso, French Press",
    notes: "Earthy, Bold",
  },
];
