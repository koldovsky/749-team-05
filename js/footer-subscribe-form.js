(function () {
    const form = document.getElementById("footer__subscribe-form");
    const button = document.getElementById("footer__subscribe-button-id");
  
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("subscribe-form-status");
      fetch(event.target.action, {
        method: form.method,
        body: JSON.stringify({
            email: document.querySelector('.footer__subscribe-email').value
        }),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerHTML = "Thanks you for subscribing!";
            form.reset();
            button.style.backgroundColor = "forestGreen";
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                status.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                status.innerHTML =
                  "Oops! An error occurred!";
                button.style.backgroundColor = "firebrick";
              }
            });
          }
        })
        .catch((error) => {
          status.innerHTML = "Oops! An error occurred!";
          button.style.backgroundColor = "firebrick";
        });
    }
    form.addEventListener("submit", handleSubmit);
  })();