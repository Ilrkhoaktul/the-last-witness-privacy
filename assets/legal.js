document.addEventListener("DOMContentLoaded", () => {
  const btnEn = document.getElementById("btn-en");
  const btnTr = document.getElementById("btn-tr");
  const langEn = document.getElementById("lang-en");
  const langTr = document.getElementById("lang-tr");

  if (!btnEn || !btnTr || !langEn || !langTr) return;

  btnEn.addEventListener("click", () => {
    langEn.classList.add("active");
    langTr.classList.remove("active");
    btnEn.classList.add("active");
    btnTr.classList.remove("active");
    document.documentElement.lang = "en";
  });

  btnTr.addEventListener("click", () => {
    langTr.classList.add("active");
    langEn.classList.remove("active");
    btnTr.classList.add("active");
    btnEn.classList.remove("active");
    document.documentElement.lang = "tr";
  });
});