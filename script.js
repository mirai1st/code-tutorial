const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const toggleBtnOpen = document.getElementById('toggleBtnOpen');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

toggleBtnOpen.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// timer
function sidebarOpen() {
    setTimeout(() => {
        sidebar.classList.toggle('active');
    }, 200);
}

// darkmode
if (getCookie("darkmode") === "enabled") {
    document.body.classList.add("dark-mode");
    document.getElementById("toggleBtnOpen").classList.add("dark-mode");
    document.getElementById("settings-panel").classList.add("dark-mode");
    document.getElementById("darkmode").checked = true;
} else {
    document.getElementById("darkmode").checked = false;
}

document.getElementById("toggle-theme").addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.getElementById("toggleBtnOpen").classList.toggle("dark-mode");
    document.getElementById("settings-panel").classList.toggle("dark-mode");

    if (isDark) {
        setCookie("darkmode", "enabled", 30);
        document.getElementById("darkmode").checked = true;
    } else {
        setCookie("darkmode", "disabled", 30);
        document.getElementById("darkmode").checked = false;
    }
});

document.getElementById("toggle-settings").addEventListener("click", () => {
    document.getElementById("settings-panel").classList.toggle("active");
});

function closeSettings() {
    document.getElementById("settings-panel").classList.remove("active");
}

// cookies

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
        const [key, value] = c.split('=');
        if (key === name) return value;
    }
    return null;
}

// Scroll Spy

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".link-section");

const options = {
  threshold: 0.6, // 60% section mesti nampak baru dianggap active
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");

    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
