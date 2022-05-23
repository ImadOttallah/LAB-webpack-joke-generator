// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from '../api/jokeData';

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

const htmlBody = () => {
  let domString = '';
  domString = '<div id="joke-btn-container"></div><div id="joke-setup"></div><div id="punchLine"></div>';
  renderToDom('#app', domString);
};

const init = () => {
  document.querySelector('#joke-btn-container').innerHTML = `<button style="display:block" id="get-joke-btn" class="btn btn-lg">Get a Joke</button><button style="display:block" id="punchline-btn" class="btn btn-lg">Get Punchline</button>
  `;
  document.querySelector('#get-joke-btn').addEventListener('click', () => {
    jokeData().then((response) => {
      document.querySelector('#joke-setup').innerHTML = response.setup;
      document.querySelector('#punchline-btn').addEventListener('click', () => {
        document.querySelector('#punchLine').innerHTML = response.delivery;
      });
    });
    document.querySelector('#get-joke-btn').style.display = 'none';
  });
};

const startApp = () => {
  htmlBody();
  init();
};
startApp();
