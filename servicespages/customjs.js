// JavaScript for accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      // Close all other accordions
      accordions.forEach((item) => {
        if (item !== this) {
          item.classList.remove("active");
          item.nextElementSibling.style.display = "none";
        }
      });

      // Toggle the clicked accordion
      const panel = this.nextElementSibling;
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        panel.style.display = "none";
      } else {
        this.classList.add("active");
        panel.style.display = "block";
        panel.classList.add("show_item");
      }
    });
  });

  // Ensure only the default open accordion is visible on load
  const defaultOpenAccordion = document.querySelector(".accordion .active");
  const display = document.querySelector("panel");

  if (defaultOpenAccordion) {
    defaultOpenAccordion.nextElementSibling.style.display = "block";
    display.nextElementSibling.classList.add = "show_accordion_item";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  const menuButton = document.querySelector(".side-menu-open");
  const sideMenu = document.querySelector(".logo_menu_cont");

  // Toggle menu on button click
  menuButton?.addEventListener("click", () => {
    if (sideMenu.classList.contains("sidebar_active")) {
      sideMenu.classList.remove("sidebar_active");
    } else {
      sideMenu?.classList.add("sidebar_active");
    }
  });

  // Close the menu when a link inside the menu is clicked
  sideMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      sideMenu.classList.remove("sidebar_active");
      body.classList.remove("no-scroll");
    }
  });

  // Close the menu when a link any ware  the menu is clicked

  document.addEventListener("click", (event) => {
    if (
      !sideMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      sideMenu?.classList.remove("sidebar_active");
      body.classList.remove("no-scroll");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const subMenuButton = document.querySelector(".submenu-button");
  const subSideMenu = document.querySelector(".header_dropdown_items");

  subMenuButton?.addEventListener("click", () => {
    console.log("clicked");
    if (
      subSideMenu.classList.contains("close") &&
      subMenuButton.classList.contains("submenu-button")
    ) {
      subSideMenu.classList.remove("close");
      subSideMenu?.classList.add("open");
      subMenuButton.classList.remove("submenu-button");

      subMenuButton?.classList.add("submenu-buttonsubmenu-opened");
    }
  });
});

// JavaScript to track visited tabs in the navigation menu
document.addEventListener("DOMContentLoaded", () => {
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".nav a");

  // Highlight visited tabs and the current tab
  navLinks.forEach((link) => {
    // Highlight the current tab
    if (link.href === window.location.href) {
      link.classList.add("activeMenuTab");
    }
  });
});

// getting countries and states
var config = {
  cUrl: "https://api.countrystatecity.in/v1/countries",
  ckey: "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==",
};

var countrySelect = document.querySelector(".country"),
  stateSelect = document.querySelector(".state");

function loadCountries() {
  let apiEndPoint = config.cUrl;

  fetch(apiEndPoint, { headers: { "X-CSCAPI-KEY": config.ckey } })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.iso2;
        option.textContent = country.name;
        countrySelect.appendChild(option);
      });
    })
    .catch((error) => console.error("Error loading countries:", error));

  stateSelect.disabled = true;
  stateSelect.style.pointerEvents = "none";
}

function loadStates() {
  stateSelect.disabled = false;
  stateSelect.style.pointerEvents = "auto";

  const selectedCountryCode = countrySelect.value;
  stateSelect.innerHTML = '<option value="">Select State</option>';

  fetch(`${config.cUrl}/${selectedCountryCode}/states`, {
    headers: { "X-CSCAPI-KEY": config.ckey },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((state) => {
        const option = document.createElement("option");
        option.value = state.iso2;
        option.textContent = state.name;
        stateSelect.appendChild(option);
      });
    })
    .catch((error) => console.error("Error loading states:", error));
}

window.onload = loadCountries;
