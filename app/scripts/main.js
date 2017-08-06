(function() {

  const phrases = [
    'I believe in you!',
    'Keep slinkin\'. Just... keep... slinkin\'.',
    'GO FER RIT!',
    'Just dook it.',
    'You can do the thing.',
    'Never give up.'
  ];

  const $dialogText = document.querySelector('#dialog-text');

  function pickPhrase() {
    $dialogText.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  }

  pickPhrase();

  console.log('Get dookin\' son');

}());