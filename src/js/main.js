document.addEventListener("scroll", () => {
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.clientHeight;
  let value = window.pageYOffset;
  let progressBar = document.querySelector(".progressBar");

  /* Set the max scrollable area */
  let max = documentHeight - windowHeight;
  progressBar.setAttribute("max", max);
  progressBar.setAttribute("value", value);

  document.onscroll = () => {
    let value = window.pageYOffset;
    progressBar.setAttribute("value", value);
  };
});
