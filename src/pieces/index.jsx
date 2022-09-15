import React from 'react'
import * as S from './styled'

function Sections() {
  return (
    <S.DivMain>
      <S.HeaderPic>
        <div>
          <img
            src="https://github.com/gabrielsupz.png"
            alt="Foto do Github do Gabriel"
          />
        </div>
      </S.HeaderPic>

      <S.MyGames>
        <div>
          {' '}
          <h2>Meus Jogos</h2>
          <p>Os games que eu mais curto jogar!</p>
          <ul>
            <li>
              <a
                href="https://www.twitch.tv/directory/game/Tale%20of%20Immortal"
                target="blank"
              >
                <img
                  src="https://static-cdn.jtvnw.net/ttv-boxart/731378006_IGDB-144x192.jpg"
                  alt="Imagem da Capa do Jogo Tale of Imortal"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitch.tv/directory/game/SMITE"
                target="blank"
              >
                <img
                  src="https://static-cdn.jtvnw.net/ttv-boxart/32507-285x380.jpg"
                  alt="Imagem da Capa do Jogo Smite"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitch.tv/directory/game/Kenshi"
                target="blank"
              >
                <img
                  src="https://static-cdn.jtvnw.net/ttv-boxart/34025_IGDB-285x380.jpg"
                  alt="Imagem da Capa do Jogo Kenshi"
                />
              </a>
            </li>
            <li>
              {' '}
              <a
                href="https://www.twitch.tv/directory/game/Yu-Gi-Oh!%20Master%20Duel"
                target="blank"
              >
                <img
                  src="https://static-cdn.jtvnw.net/ttv-boxart/1119642287_IGDB-285x380.jpg"
                  alt="Imagem da Capa do Jogo Yu gi oh Duel Master"
                />
              </a>
            </li>
          </ul>
        </div>
      </S.MyGames>
      <S.Streamers>
        <div>
          <h2>Canais de Streamers</h2>
          <p>Lista de canais de transmissão que não perco!</p>
          <ul>
            <li>
              <a href="https://www.twitch.tv/paulinholokobr" target="blank">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/d96bbd7a-26e5-4c5e-b6a5-149d708a973b-profile_image-150x150.png"
                  alt="Imagem do Paulo Plinio"
                />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/alanzoka" target="blank">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png"
                  alt="Imagem do Alanzoka"
                />
              </a>
            </li>
            <li>
              {' '}
              <a href="https://www.twitch.tv/arkantosjoga" target="blank">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/12cade37-ca33-40b5-94e2-fee9c3a5b3cd-profile_image-150x150.png"
                  alt="Imagem logo do canal ArkantosJoga"
                />
              </a>
            </li>
          </ul>
        </div>
      </S.Streamers>
      <S.SocialLinks>
        <div>
          <h2>Minhas redes</h2>
          <p>Se conecte comigo agora mesmo!</p>
          <ul>
            <li>
              <a href="https://github.com/gabrielsupz" target="blank">
                <img
                  src="../../../public/assets/github.svg"
                  alt="Ícon github"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gabriel-suptitz-51340124a/"
                target="blank"
              >
                <img
                  src="../../../public/assets/linkedin.svg"
                  alt="Ícon Linkedin"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gabriel_supz/" target="blank">
                <img
                  src="../../../public/assets/instagram.svg"
                  alt="Ícon instagram"
                />
              </a>
            </li>
            <li>
              <a href="mailto:gabrielsuptitz@gmail.com">
                <img src="../../../public/assets/mail.svg" alt="Ícon email" />
              </a>
            </li>
          </ul>
        </div>
      </S.SocialLinks>
      <a href=""></a>
      <p></p>
      <div className=""></div>
    </S.DivMain>
  )
}

export default Sections
