(function() {

  const phrases = [
    'I believe in you!',
    'Keep slinkin\'. Just... keep... slinkin\'.',
    'GO FER RIT!',
    'Just dook it.',
    'You can do the thing.',
    'Never give up.',
    'In the sweetness of friendship let there by laughter, and the sharing of pleasure. For in the dew of little things, the heart finds it\'s morning and is refreshed.',
    'Wise is the man who looks at ferrets, for he knows there is no greater joy in life.',
    'I love you.',
    'Be yourself.',
    'I\'m a ferret!',
  ];

  const $dialogText = document.querySelector('#dialog-text');
  const $refresh = document.querySelector('.refresh');

  function pickPhrase() {
    let lastPhraseIndex = localStorage.getItem('lastphrase');
    lastPhraseIndex = typeof lastPhraseIndex === 'string' ? parseInt(lastPhraseIndex) : -1;
    let phraseIndex = lastPhraseIndex;

    //Pick a phrase that isn't the one the user just saw, to keep things fresh
    while (lastPhraseIndex === phraseIndex) {
      phraseIndex = Math.floor(Math.random() * phrases.length);
    }

    $dialogText.textContent = phrases[phraseIndex];
    localStorage.setItem('lastphrase', phraseIndex);
  }

  $refresh.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    pickPhrase();
  });

  pickPhrase();

  console.log('Get dookin\' son');

}());