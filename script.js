const whatsappForms = document.querySelectorAll("[data-whatsapp-form]");

const buildMessage = (form) => {
  const formData = new FormData(form);
  const lines = [];
  for (const [key, value] of formData.entries()) {
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    lines.push(`${label}: ${value}`);
  }
  return lines.join("\n");
};

whatsappForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = buildMessage(form);
    const encoded = encodeURIComponent(text);
    const whatsappNumber = "923043332828";
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  });
});