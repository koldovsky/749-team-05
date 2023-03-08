(function () {
  const name = document.querySelector(".author");
  const text = document.querySelector(".quote__text");

  name.addEventListener("mouseover", () => {
    name.innerHTML = "Benjamin Franklin";
  });

  name.addEventListener("mouseout", () => {
    name.innerHTML = "Lorry Morengo, CEO";
  });

  text.addEventListener("mouseover", () => {
    text.innerHTML =
      '"It is a grand mistake to think of being great without goodness and I pronounce it as certain that there was never a truly great man that was not at the same time truly virtuou"';
  });

  text.addEventListener("mouseout", () => {
    text.innerHTML =
      '"I think the people that end up doing well here are just generally passionate about being owners of their space and making the world a better place."';
  });
})();
