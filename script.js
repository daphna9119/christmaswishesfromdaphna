const names = {
  SIMAR: "Simar, you are so pretty inside and out, and I love you so much as my friend. CRAZYY how we got sooo close in less than a year. ilyy. You’ve made this year absolutely wonderful, and I’m so grateful to have you in my life! Merry Christmas once again! 🎄❤️",
  SHREYA: "HII, can you believe we’ve survived almost 3 years together? Through every laugh, tear, and crazy moment, you’ve been my constant, and I can’t imagine my life without you. You’re one of the most important people in my world, and I never, ever want to leave your side. Merry Christmas again, Shreya! 🎄❤️",
  ADITYA: "Aditya, you’ve been a big ass nigga for 3 years straight, always getting what you want and driving me insane. But somehow, I still fw you heavy and miss having you around, bro. hope we meet soon :) Merry Christmas again! 🎄🔥",
  NGAYOMI: "Ngayomi, how did we even get this close in less than a year? You’re literally so pretty and gorgeous—it’s unfair, honestly—and I love you fr. Just know I’ll always care for you, no matter what. Merry Christmas again! 🎄❤️",
  BHAVYA: "Bhavya, how did we get so close in less than a year? You’re literally the cutest, and I love you . Just know I’ll always care for you, no matter what. Merry Christmas again! 🎄❤️",
  KHUSHI: "Khushi, I can’t believe we just became friends this year—it feels like we’ve known each other forever! You’re so pretty, and Ilysm you lit so hot xx. Merry Christmas again! 🎄❤️",
  JION: "Jion, it’s crazy that we met just last year, but you’ve become like my own brother. No matter what, through thick and thin, I’ll always be there for you—you can trust me with anything. I got your back, always. Love you, dawg. Merry Christmas again! 🎄🤍",
  JOYNA: "Joyna, you’re absolutely gorgeous and hilarious—never a dull moment with you! I’m so lucky to have you in my life. Merry Christmas again! 🎄❤️",
  NIRUPUMA: "Nirupuma, you're extremely fine and so pretty! I love you, and even though we met last year, it feels like I’ve known you forever. I miss you so much since you go to a different school, but I’ll always be there for you. Hope we can meet again soon! Merry Christmas again! 🎄❤️",
  SAMARA: "Samara, you're absolutely stunning and such a vibe! I’m so grateful we met last year, and I’m lucky we’re in the same school. You mean a lot to me, and I’ll always have your back no matter what. Merry Christmas again! 🎄❤️",
  SANGEETA: "Mama, you’re the most beautiful, loving, and amazing person in my life. I’m so grateful for everything you do and the endless love you give. I love you more than words can say, and I’ll always be here for you. Merry Christmas again! 🎄❤️",
  NEWTON: "Papa, you’re my rock and my biggest supporter. I’m so grateful for everything you’ve done for me, and I love you more than words can express. I’ll always cherish and look up to you. Merry Christmas again! 🎄❤️",
  PHILBERT: "hiiiiii tuky! youre honestly the besttt brother anyone can ask for, andI wouldn’t have it any other way. Thanks for always being there, even when we’re driving each other crazy and have silly fights. i love playing games with you and always will do. Love you lots and always got your back. Merry Christmas again! 🎄❤️"
};

const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const nameBox = document.getElementById('nameBox');
const warningMessage = document.getElementById('warningMessage');
const messageBox = document.getElementById('messageBox');

// Page redirection logic
submitBtn.addEventListener('click', () => {
  const name = nameInput.value.toUpperCase();
  if (name && !/[^A-Z]/.test(name)) {
    const message = names[name];
    if (message) {
      showPersonalizedPage(name, message);
    } else {
      warningMessage.style.display = 'block';
    }
  } else {
    warningMessage.style.display = 'block';
  }
});

// Function to show personalized page
function showPersonalizedPage(name, message) {
  document.body.innerHTML = `
    <div class="popup">
      <div class="pastel-bg">
        <pre>* o +</pre>
        <h2>MERRY CHRISTMAS ${name}!</h2>
        <div class="notepad">
          <p>${message}</p>
        </div>
      </div>
    </div>
  `;
  // Custom pop-up effects
  setTimeout(() => {
    document.querySelector('.popup').style.display = 'block';
  }, 1000);
}
