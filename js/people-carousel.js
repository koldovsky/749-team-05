(function () {
  const cards = [
    {
      img: "media/peopleLorry.jpeg",
      alt: "Lorry",
      title: "Lorry, CEO",
      description:
        "By far the best part of my job is building relationships within the company. This is truly a career that is built on relationships and people. I love the enthusiasm and positivity that my team brings to the table every single day.",
    },
    {
      img: "media/peopleLorry1.jpeg",
      alt: "Lorry1",
      title: "Lorry, CEO",
      description:
        "I joined the organization as part of the acquisition of Springleaf Financial in 2015. It has been both the most challenging and rewarding roles in my career.",
    },
    {
      img: "media/peopleLinda.jpeg",
      alt: "Linda",
      title: "Linda, Branch Manager",
      description:
        "Cloudy Group treats me like more than an employee and cares about my development. My direct supervisor provides me with constructive feedback and puts me in situations that highlight my strengths and personal growth.",
    },
    {
      img: "media/peopleAnna.jpeg",
      alt: "Anna",
      title: "Anna, Loan Specialist",
      description:
        "Throughout my career at Cloudy Group, I have developed many skills needed to grow not only as a team member but as a person. The atmosphere is fun, outgoing, and competitive.",
    },
    {
      img: "media/peopleFulu.jpeg",
      alt: "Fulu",
      title: "Fulu, Branch Manager",
      description:
        "In 1995, Samsung became our main supplier of high-quality tech products. Our branch management department yet again proved its ability to strike highly impactful deals with the big league.",
    },
    {
      img: "media/peopleLucie.jpeg",
      alt: "Lucie",
      title: "Lucie, Strategy Director",
      description:
        "Just like in football, you need a strategy and vision to win. However, the dynamic nature of the game means that you must adapt and liaise. That's how Cloud Group's strategies can attain any goal.s ability to strike highly impactful deals with the big league.",
    },
  ];

  let currentCard = 0;

  function renderCards(cards) {
    const cardContainer = document.querySelector(".our-people-carousel__cards");
    const currentCardObject = cards[currentCard];
    const currentCardHtml = `
    <div>
      <img src="${currentCardObject.img}" alt="${currentCardObject.alt}">
      <h3>${currentCardObject.title}</h3>
      <p>${currentCardObject.description}</p>
    </div>
  `;
    cardContainer.innerHTML = currentCardHtml;
    if (window.innerWidth > 768) {
      const secondCardIndex =
        currentCard + 1 >= cards.length ? 0 : currentCard + 1;
      const secondCardObject = cards[secondCardIndex];
      const secondCardHtml = `
      <div>
        <img src="${secondCardObject.img}" alt="${secondCardObject.alt}">
        <h3>${secondCardObject.title}</h3>
        <p>${secondCardObject.description}</p>
      </div>
    `;
      cardContainer.innerHTML += secondCardHtml;
      if (window.innerWidth > 900) {
        const thirdCardIndex =
          secondCardIndex + 1 >= cards.length ? 0 : secondCardIndex + 1;
        const thirdCardObject = cards[thirdCardIndex];
        const thirdCardHtml = `
        <div>
          <img src="${thirdCardObject.img}" alt="${thirdCardObject.alt}">
          <h3>${thirdCardObject.title}</h3>
          <p>${thirdCardObject.description}</p>
        </div>
      `;
        cardContainer.innerHTML += thirdCardHtml;
      }
    }
  }

  function nextCard() {
    currentCard = currentCard + 1 >= cards.length ? 0 : currentCard + 1;
    renderCards(cards);
  }

  function prevCard() {
    currentCard = currentCard - 1 < 0 ? cards.length - 1 : currentCard - 1;
    renderCards(cards);
  }

  renderCards(cards);

  const nextButton = document.querySelector(".our-people-carousel-button-next");
  nextButton.addEventListener("click", nextCard);

  const prevButton = document.querySelector(".our-people-carousel-button-prev");
  prevButton.addEventListener("click", prevCard);

  window.addEventListener("resize", () => {
    renderCards(cards);
  });
})();
