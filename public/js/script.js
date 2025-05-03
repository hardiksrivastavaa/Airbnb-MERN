(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let taxToggle = document.getElementById("switchCheckDefault");
let tax = document.getElementsByClassName("tax-info");

taxToggle.addEventListener("change", () => {
  for (let info of tax) {
    if (taxToggle.checked) {
      info.classList.remove("d-none"); // show tax info
    } else {
      info.classList.add("d-none"); // hide tax info
    }
  }
});
