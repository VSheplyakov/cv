function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}

function addLanguageLinksListeners() {
  document.querySelectorAll(".language-option").forEach((langLink) => {
    langLink.addEventListener("click", (event) => {
      event.preventDefault();
      const selectedLang = langLink.dataset.lang;

      i18next.changeLanguage(selectedLang, () => {
        updateContent();
        document
          .querySelectorAll(".language-option")
          .forEach((l) => l.classList.remove("language-option--active"));

        langLink.classList.add("language-option--active");
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  addLanguageLinksListeners();
  updateContent(); 
});