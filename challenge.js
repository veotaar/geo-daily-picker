import { selectMap } from './lib/utils'

export function setupChallenge(element) {
  const button = element.querySelector('#counter');
  const copyButton = element.querySelector('#copy-name');
  const challengeInfo = element.querySelector('#challenge-info');
  const challengeName = element.querySelector('#challenge-name');
  const mapLink = element.querySelector('#map-link');

  const pickRandomChallenge = () => {
    const { mapName, map, mode, timeLimit } = selectMap();
    challengeName.innerText = `${mapName} • ${mode} • ${timeLimit}s`
    button.innerText = 'Challenge Seçildi'
    button.setAttribute('disabled', 'true');
    mapLink.setAttribute('href', `https://www.geoguessr.com/maps/${map}`);
    mapLink.innerText = mapName;
    challengeInfo.classList.remove('invisible');
  }

  const copyChallengeName = async () => {
    try {
      await navigator.clipboard.writeText(challengeName.innerText);
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
  }

  button.addEventListener('click', pickRandomChallenge)
  copyButton.addEventListener('click', copyChallengeName);
}
