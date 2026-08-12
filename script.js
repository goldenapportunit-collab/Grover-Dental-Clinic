/* ================= MOBILE MENU ================= */

const menu = document.getElementById("menu");
const mobileNav = document.getElementById("mobileNav");

if (menu && mobileNav) {

  menu.addEventListener("click", () => {

    const isOpen =
      mobileNav.classList.toggle("open");

    menu.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menu.setAttribute(
      "aria-label",
      isOpen
        ? "Close menu"
        : "Open menu"
    );

    menu.textContent =
      isOpen ? "✕" : "☰";

  });


  mobileNav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        mobileNav.classList.remove("open");

        menu.setAttribute(
          "aria-expanded",
          "false"
        );

        menu.setAttribute(
          "aria-label",
          "Open menu"
        );

        menu.textContent = "☰";

      });

    });

}


/* ================= APPOINTMENT FORM ================= */

const form =
  document.getElementById(
    "appointmentForm"
  );

const status =
  document.getElementById(
    "formStatus"
  );

const dateInput =
  form?.querySelector(
    'input[name="date"]'
  );


/* ================= MIN DATE ================= */

function setMinimumDate() {

  if (!dateInput) {
    return;
  }

  const today = new Date();

  const year =
    today.getFullYear();

  const month =
    String(
      today.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      today.getDate()
    ).padStart(2, "0");

  dateInput.min =
    `${year}-${month}-${day}`;
}


setMinimumDate();


/* ================= FORM SUBMISSION ================= */

if (form && status) {

  form.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const name =
        form.elements.name.value.trim();


      const phone =
        form.elements.phone.value.trim();


      const treatment =
        form.elements.treatment.value;


      const date =
        form.elements.date.value;


      if (
        !name ||
        !phone ||
        !treatment ||
        !date
      ) {

        status.textContent =
          "Please complete all required fields.";

        return;
      }


      status.textContent =
        "Appointment request captured successfully. Connect this form to the clinic's approved secure email/backend before going live.";


      form.reset();

      setMinimumDate();

    }
  );

}