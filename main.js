function changeLanguage(lang) {
  i18next.changeLanguage(lang, updateContent);
}

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}
