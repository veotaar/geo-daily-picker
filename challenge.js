import { selectMap } from './lib/utils';

export function setupChallenge(element) {
  const button = element.querySelector('#counter');
  const copyButton = element.querySelector('#copy-name');
  const challengeInfo = element.querySelector('#challenge-info');
  const challengeName = element.querySelector('#challenge-name');
  const mapLink = element.querySelector('#map-link');

  let challengeJsonText = '';

  const pickRandomChallenge = () => {
    const { mapName, map, mode, timeLimit } = selectMap();
    const challenge = {
      title: 'GeoTürkiye Günlük Challenge (X. Hafta) (X/7)',
      url: '******* CHALLENGE LINK BURAYA ********',
      mapName,
      gameMode: mode,
      timeLimit,
    };
    challengeJsonText = JSON.stringify(challenge, null, 2);
    challengeName.innerText = `${mapName} • ${mode} • ${timeLimit}s`;
    button.innerText = 'Challenge Seçildi';
    button.setAttribute('disabled', 'true');
    mapLink.setAttribute('href', `https://www.geoguessr.com/maps/${map}/play`);
    mapLink.innerText = mapName;
    challengeInfo.classList.remove('invisible');

    setTimeout(() => {
      button.removeAttribute('disabled')
      button.innerText = 'Challenge Seç';
    }, 500)
  };

  const copyChallengeName = async () => {
    try {
      await navigator.clipboard.writeText(challengeJsonText);
      copyButton.innerText = 'Kopyalandı';
      challengeName.classList.add('copied');
      setTimeout(() => {
        copyButton.innerText = 'Challenge Bilgilerini Kopyala';
        challengeName.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error(err);
      copyButton.innerText = 'Bir hata oluştu';
    }
  };

  button.addEventListener('click', pickRandomChallenge);
  copyButton.addEventListener('click', copyChallengeName);
}
