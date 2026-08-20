// Clickable class cards -> pre-filled inquiry dialog -> mailto to Henna
document.addEventListener("DOMContentLoaded", function () {
  var dialog = document.getElementById("inquire-dialog");
  if (!dialog) return;

  var classNameEl = document.getElementById("inquire-class-name");
  var classField = document.getElementById("iq-class");
  var messageField = document.getElementById("iq-message");
  var closeBtn = dialog.querySelector(".dialog-close");

  function openInquiry(className) {
    classNameEl.textContent = className;
    classField.value = className;
    messageField.value = "Hi Henna, I'd like to know more about the " + className + " class and find a time that works for me.";
    dialog.showModal();
  }

  document.querySelectorAll("[data-class]").forEach(function (card) {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.addEventListener("click", function () { openInquiry(card.dataset.class); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openInquiry(card.dataset.class);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });
});
