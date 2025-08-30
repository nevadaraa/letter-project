const message = `First of all, I'm really sorry for everything that happens between us.\nCause i know that, I hurt you without thinking. You know bub? i don't really want to break up, i think i just want some time to thinking but then, i think it's the best for us to end it up. I love you, but i have to let you go. the timing is not right and I am still full of ambition .\n\nWe are happy, we are love each other but.. I'm sorry that i can't even hold "us" more longer cause the universe just never gave us enough place.\n\nAnd now, i choose to go. for the best of us and for not hurting you more.\n\nAnyway, I hope you're doing okay, even though we’re not in each other’s lives anymore.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

