import './style.css'
import { setupChallenge } from './challenge.js'
import openInNewIcon from './open-in-new.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <h3>Geoguessr Türkiye</h3>
    <h1>Günlük Challenge Seçici</h1>
    <div id="challenge">
      <div class="card">
        <button id="counter" type="button">Challenge Seç</button>
      </div>
      <div id="challenge-info" class="invisible">
        <p id="challenge-name">Challenge seç</p>
        <p>Harita linki: <a href="https://www.geoguessr.com/" id="map-link" target="_blank">Geo</a> <img src="${openInNewIcon}" class="open-new" alt="open in new logo" /> </p>
        <button id="copy-name" type="button">Challenge Bilgilerini Kopyala</button>
      </div>

    </div>
  </div>
`

setupChallenge(document.querySelector('#challenge'));
