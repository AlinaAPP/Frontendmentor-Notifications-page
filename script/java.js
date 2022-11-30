let buttons = document.querySelectorAll(".msg__btn");
let readButton = document.querySelector(".header__right");
let notification = document.getElementById("notification");

// the number of the notifications that contain the 'unread' class
notification.innerHTML = document.querySelectorAll(".unread").length;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btn_expanded = btn.getAttribute("aria-expanded");
    if (btn_expanded === "false") {
      btn.setAttribute("aria-expanded", true); //the clicked notification will show up the comment if there it is one.
      btn.classList.remove("unread"); //the clicked notification will become read instead of unread.
      notification.innerHTML = document.querySelectorAll(".unread").length;
    } else {
      btn.setAttribute("aria-expanded", false);
    }
  });
});

//Every time the button 'Mark all as read' is clicked, all the notifications that contain the 'unread' class become read.
readButton.addEventListener("click", () => {
  buttons.forEach((btn) => {
    if (btn.matches(".unread")) {
      btn.classList.toggle("unread");
      notification.innerHTML = document.querySelectorAll(".unread").length;
    }
  });
});
