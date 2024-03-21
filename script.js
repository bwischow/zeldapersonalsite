const character = document.getElementById('character');
const coinCounter = document.getElementById('coin-counter');
const clickableAreas = document.querySelectorAll('.clickable-area');
let coins = parseInt(localStorage.getItem('coins')) || 0;
let characterLeft = 50;
let characterTop = 50;

coinCounter.textContent = coins;

// Set initial position of the character on the home page
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
  character.style.left = '50%';
  character.style.top = '50%';
  character.style.transform = 'translate(-50%, -50%)';
}

document.addEventListener('keydown', (event) => {
  const step = 10;
  let backgroundImage;

  // Determine the background image element based on the current page
  if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    backgroundImage = document.getElementById('background-image');
  } else if (window.location.pathname === '/page2.html') {
    backgroundImage = document.getElementById('background-image-2');
  } else if (window.location.pathname === '/page3.html') {
    backgroundImage = document.getElementById('background-image-3');
  } else if (window.location.pathname === '/page4.html') {
    backgroundImage = document.getElementById('background-image-4');
  }

  const backgroundRect = backgroundImage ? backgroundImage.getBoundingClientRect() : null;

  switch (event.key) {
    case 'ArrowLeft':
      if (characterLeft > 0) {
        characterLeft -= step;
        character.style.left = `${characterLeft}%`;
      }
      break;
    case 'ArrowRight':
      if (characterLeft < 100) {
        characterLeft += step;
        character.style.left = `${characterLeft}%`;
      }
      break;
    case 'ArrowUp':
      if (characterTop > 0) {
        characterTop -= step;
        character.style.top = `${characterTop}%`;
      }
      break;
    case 'ArrowDown':
      if (characterTop < 100) {
        characterTop += step;
        character.style.top = `${characterTop}%`;
      }
      break;
  }

  const characterRect = character ? character.getBoundingClientRect() : null;

  // Check character's proximity to clickable areas
  clickableAreas.forEach((area) => {
    const areaRect = area.getBoundingClientRect();
    const proximity = 5; // Adjust the proximity threshold as needed

    if (
      characterRect &&
      characterRect.left < areaRect.right + proximity &&
      characterRect.right > areaRect.left - proximity &&
      characterRect.top < areaRect.bottom + proximity &&
      characterRect.bottom > areaRect.top - proximity
    ) {
      area.classList.add('active');
      if (event.key === 'Enter') {
        if (area.id === 'home-button') {
          window.location.href = 'index.html';
        } else if (area.id === 'area-1') {
          window.location.href = 'page2.html';
        } else if (area.id === 'area-2') {
          window.location.href = 'page3.html';
        } else if (area.id === 'area-3') {
          window.location.href = 'page4.html';
        } else if (area.id === 'home-button') {
          window.location.href = 'index.html';
        } else {
          coins++;
          localStorage.setItem('coins', coins);
          console.log('Coins incremented:', coins);
          coinCounter.textContent = coins;

          let popupTitle = '';
          let popupContent = '';

          switch (area.id) {
            case 'area-4':
              popupTitle = 'Up and to the Right, Growth plans for tiny startups'
              popupContent = 'We always hear about the Ubers and Airbnbs of the world once they are inevitable. But what about when they are questionable? How did they grow into those beasts and what companies are primed to be next? In <a href = "https://upandtotheright.substack.com/" target="_blank">Up and to the Right </a>I craft growth strategies for early stage startups that you have yet to hear of.<br></br>Press the Space bar to close the window!';
              break;
            case 'area-5':
              popupTitle = 'Adium - Benchmarking that works'
              popupContent = 'How good are your ads actually? Adium is a free benchmarking tool for anyone running Facebook or Google ads. Try it for free <a href="https://https://adiumdata.carrd.co/" target="_blank">here</a><br></br>Press the Space bar to close the window!';
              break;
            case 'area-6':
              popupTitle = 'Links - a better way to network'
              popupContent = '<a href="https://linksgolf.carrd.co/" target="_blank">Links </a>is a modern day club for golf enthusiasts in tech. Dont pick someones brain, join them for 9 holes instead. <br></br>Press the Space bar to close the window!';
              break;
            case 'area-7':
              popupTitle = 'SF and a happy family'
              popupContent = 'In 2020, Brett moved to San Francisco from Washington, DC. He lives there with his partner, a dog and two cats. They enjoy hiking the beautiful hills, and enjoying the comparitively gorgeous winters (relative to the East Coast).<br></br>Press the Space bar to close the window!';
              break;
            case 'area-8':
              popupTitle = 'Hobbies'
              popupContent = 'Brett is a jack of all trades, but his current hobbies include golf, Crossfit, reading, and video games. And of course building corny websites using AI.<br></br>Press the Space bar to close the window!';
              break;
            case 'area-9':
              popupTitle = 'Wine'
              popupContent = 'Brett’s love affair with wine started when he worked in hospitality at the start of his career. He actually trained as a sommelier before dropping out of hospitality to work in tech. He loves doing tastings with friends, and a lot of his travel centers around wine tourism. Brett’s visited 9 wine regions so far.<br></br>Press the Space bar to close the window!';
              break;
            case 'area-10':
              popupTitle = 'Restaurants'
              popupContent = 'Fun fact! Brett got his start working in the restaurant industry. He managed restaurants at two of the most prestigious country clubs in the nation, The Bohemian Club, and the Chevy Chase Club. This is where Brett developed a passion for wine, food, and good service. But he didn’t exactly love the hours, and was frustrated by the lack of progression. Country Clubs in their nature, stay still. Members want what they want, and these businesses are run more like non-profits in their members interests so he decided to embark on a new journey in tech.<br></br>Press the Space bar to close the window!';
              break;
            case 'area-11':
              popupTitle = 'Cvent'
              popupContent = 'Starting out as a humble customer success manager, Brett learned the ins and outs of the software industry at <a href="https://cvent.com" target="_blank">Cvent</a> and quickly rised through the ranks. He eventually started his own team internally and built it to a $20 million per year business. This is where he started getting a taste for startups and marketing. In 2017, he won Cventer of the year, and had built the team to 40 employees across 3 different countries.<br></br>Press the Space bar to close the window!';
              break;
            case 'area-12':
              popupTitle = 'Starry'
              popupContent = 'Desperate for a "true" startup, Brett joined an up and coming internet startup, but not the kind you are thinking of. <a href="https://starry.com" target="_blank">Starry</a> literally brought internet to your house. As one of the first members of the Starry DC launch team, Brett had his hands in a bit of everything. Marketing, sales, pointing radios, laying fiber optic cable, installing internet at people’s houses - nothing was off limits. After 2 years, Brett had helped build the DC market to 20,000 subscribers across dozens of buildings and was managing the installer team, customer success team, and the in-market marketing team. <br></br>Press the Space bar to close the window!';
              break;
            case 'area-13':
              popupTitle = 'Hivemapper'
              popupContent = 'Eager to fully realize his tech aspirations, Brett moved to San Francisco in 2020 and joined Hivemapper. <a href="https://hivemapper.com" target="_blank">Hivemapper<a/> is a drone mapping platform attempting to replace Google Maps through decentralized drone footage. Brett was responsible for getting all of those drone pilots and making sure they were mapping in the right places where people would pay for the maps. Within a few months, Brett created a drone mapping community of hundreds of pilots in dozens of countries, and helped Hivemapper prep for their Series A fundraise.<br></br>Press the Space bar to close the window!';
              break;
            case 'area-14':
              popupTitle = 'Platform Venture Studio'
              popupContent = 'To complete the tech startup meme, Brett finally entered the venture capital world in Feb of 2021. At <a href="https://platformstud.io" target="_blank">Platform Venture Studio</a>, his job is to help each portfolio company that the studio incubated find their early growth. Building a startup is hard. It involves a lot of fits and starts. What you try to begin with is usually wrong. Brett partners with the potential founders of the studio’s portfolio to get them through this early chaos. That often means doing a lot of different roles (are you sensing a theme with his career here?). Marketing, sales, fundraising, operations, customer service are all fair game and all parts of the job that he adores.<br></br>Press the Space bar to close the window!';
              break;
            // Add more cases for each clickable area with its unique popup content
            default:
              popupContent = 'Nothing to see here...yet.';
          }
          showPopup(area.id, popupTitle, popupContent);
        }
      }
    } else {
      area.classList.remove('active');
    }
  });
});

function showPopup(areaId, title, content) {
  console.log('showPopup called with areaId:', areaId);
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';
  popupContainer.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
    <button class="close-popup">Close</button>
  `;
  document.body.appendChild(popupContainer);

  // Make the popup container visible
  popupContainer.style.visibility = 'visible';

  const closeButton = popupContainer.querySelector('.close-popup');
  closeButton.addEventListener('click', closePopup);

  // Close popup when Space bar is pressed
  document.addEventListener('keydown', handleKeyDown);

  function closePopup() {
    popupContainer.remove();
    document.removeEventListener('keydown', handleKeyDown);
    if (coins === 5) {
      setTimeout(showCongratulationsPopup, 5000);
    }
  }

  function handleKeyDown(event) {
    if (event.key === ' ' || event.code === 'Space') {
      event.preventDefault(); // Prevent the default behavior of the Space bar
      closePopup();
    }
  }

  // Set focus on the popup container
  popupContainer.focus();
}

function showCongratulationsPopup() {
  const congratulationsPopup = document.createElement('div');
  congratulationsPopup.id = 'congratulations-popup';
  congratulationsPopup.innerHTML = `
    <h2>Thanks for getting to know me!</h2>
    <p>Hey there! Thanks for learning more about me. If you'd like to connect, you can email me at <a href="mailto:brettwischow@gmail.com">brettwischow@gmail.com </a>
    or set up some time with me <a href= "https://calendly.com/brett-platform/30min" target="_blank">here </a>. Enjoy the rest of your day!</p>
    <button id="close-congrats-popup">Close</button>
  `;
  document.body.appendChild(congratulationsPopup);

  const closeButton = document.getElementById('close-congrats-popup');
  closeButton.addEventListener('click', () => {
    congratulationsPopup.remove();
  });
}