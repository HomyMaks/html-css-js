let userPurpose = "";
let selectedSocket = "";
let totalPrice = 0;


document.querySelectorAll("[data-purpose]").forEach(btn => {
  btn.addEventListener("click", () => {
    userPurpose = btn.dataset.purpose;

    document.querySelector(".cpu").classList.remove("hidden");
    document.querySelectorAll(".cpu-group").forEach(group => {
      group.classList.toggle("hidden", !group.classList.contains(userPurpose));
    });

    hideSectionsFrom(".motherboard");
  });
});


document.querySelectorAll("[data-cpu]").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedSocket = btn.dataset.socket;
    addPrice(btn);

    document.querySelector(".motherboard").classList.remove("hidden");
    document.querySelectorAll(".board-group").forEach(group => {
      group.classList.toggle("hidden", !group.classList.contains(selectedSocket));
    });

    hideSectionsFrom(".gpu");
  });
});


document.querySelectorAll("[data-board]").forEach(btn => {
  btn.addEventListener("click", () => {
    addPrice(btn);

    document.querySelector(".gpu").classList.remove("hidden");
    showGroup(".gpu-group", userPurpose);
    hideSectionsFrom(".ram");
  });
});


document.querySelectorAll("[data-gpu]").forEach(btn => {
  btn.addEventListener("click", () => {
    addPrice(btn);

    document.querySelector(".ram").classList.remove("hidden");
    showGroup(".ram-group", userPurpose);
    hideSectionsFrom(".storage");
  });
});


document.querySelectorAll("[data-ram]").forEach(btn => {
  btn.addEventListener("click", () => {
    addPrice(btn);

    document.querySelector(".storage").classList.remove("hidden");
    showGroup(".storage-group", userPurpose);
    hideSectionsFrom(".cooling");
  });
});


document.querySelectorAll("[data-storage]").forEach(btn => {
  btn.addEventListener("click", () => {
    addPrice(btn);

    document.querySelector(".cooling").classList.remove("hidden");
    showGroup(".cooling-group", userPurpose);
    hideSectionsFrom(".psu");
  });
});


document.querySelectorAll("[data-cooler]").forEach(btn => {
  btn.addEventListener("click", () => {
    addPrice(btn);

    document.querySelector(".psu").classList.remove("hidden");
    showGroup(".psu-group", userPurpose);
    hideSectionsFrom(".case");
  });
});

document.querySelectorAll("[data-psu]").forEach(btn => {
  btn.addEventListener("click", () => {
    addPrice(btn);

    document.querySelector(".case").classList.remove("hidden");
    showGroup(".case-group", userPurpose);
  });
});


document.querySelectorAll("[data-case]").forEach(btn => {
  btn.addEventListener("click", () => {
    addPrice(btn);

    document.querySelector(".summary").classList.remove("hidden");
  });
});

function addPrice(btn) {
  const price = parseFloat(btn.dataset.price || "0");
  totalPrice += price;
  updatePriceDisplay();
  addToSummary(btn);
}

function updatePriceDisplay() {
  document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
}

function addToSummary(btn) {
  const label = getComponentLabel(btn);
  const name = btn.textContent;
  const price = parseFloat(btn.dataset.price || "0").toFixed(2);
  const item = document.createElement("p");
  item.innerHTML = `<h3>${label}:</h3> ${name}`;
  document.getElementById("summary-list").appendChild(item);
}

function getComponentLabel(btn) {
  if (btn.dataset.cpu) return "CPU";
  if (btn.dataset.board) return "Motherboard";
  if (btn.dataset.gpu) return "GPU";
  if (btn.dataset.ram) return "RAM";
  if (btn.dataset.storage) return "Storage";
  if (btn.dataset.cooler) return "Cooling";
  if (btn.dataset.psu) return "Power Supply";
  if (btn.dataset.case) return "Case";
  return "Component";
}


function showGroup(selector, purpose) {
  document.querySelectorAll(selector).forEach(group => {
    group.classList.toggle("hidden", !group.classList.contains(purpose));
  });
}

function hideSectionsFrom(selector) {
  const allSections = [
    ".motherboard", ".gpu", ".ram", ".storage",
    ".cooling", ".psu", ".case", ".summary"
  ];
  const index = allSections.indexOf(selector);
  if (index !== -1) {
    for (let i = index; i < allSections.length; i++) {
      document.querySelector(allSections[i]).classList.add("hidden");
    }
  }
}




