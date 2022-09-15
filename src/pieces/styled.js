import styled from 'styled-components'

export const DivMain = styled.main`
  max-width: 58rem;
  width: 90%;
  margin: 3.2rem auto;
  gap: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    list-style: none;
  }

  section div {
    background-color: hsla(257, 16%, 18%, 1);
    padding: 2.4rem 0 3.2rem 3.2rem;
    border-radius: 8px;
    align-items: center;
    width: 58rem;
  }

  section {
    width: 100%;
    color: white;
    border-radius: 10px;
    padding-top: 4px;
    background-image: linear-gradient(
      90deg,
      #9572fc 0%,
      #43e7ad 50.52%,
      #e2d45c 100%
    );

    border-radius: 8px;
    align-items: center;

    animation: fromLeft 0.7s backwards;
  }
  section:nth-child(2) {
    animation-delay: 0s;
  }
  section:nth-child(3) {
    animation-delay: 0.4s;
  }
  section:nth-child(4) {
    animation-delay: 0.8s;
  }

  @keyframes fromLeft {
    from {
      opacity: 0;
      transform: translatex(-100px);
    }

    to {
      opacity: 1;
      transform: translatex(0);
    }
  }
  ul {
    margin-top: 2.4rem;
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
  }
  ul img {
    transition: transform 0.3s;
  }

  ul img:hover {
    transform: scale(1.1);
  }
  h2 {
    font-weight: 900;
    font-size: 2.4rem;
    letter-spacing: -0.047rem;
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    color: #a1a1aa;
    letter-spacing: -0.018rem;
  }
`
export const HeaderPic = styled.header`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin: auto;
  }

  div {
    display: flex;
    background-image: linear-gradient(
      90deg,
      #9572fc 0%,
      #43e7ad 50.52%,
      #e2d45c 100%
    );
    width: 12.8rem;
    height: 12.8rem;
    border-radius: 50%;

    transition: transform 0.3s;

    animation: fromTop 0.4s;
  }

  div:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }

  @keyframes fromTop {
    from {
      opacity: 0;
      transform: translatey(-30px);
    }
    to {
      opacity: 1;

      transform: translateY(0);
    }
  }
`

export const MyGames = styled.section`
  img {
    width: 9rem;
    height: 12rem;

    border-radius: 8px;
  }
`

export const Streamers = styled.section`
  img {
    width: 70px;
    height: 70px;

    border: 1px solid #443e54;
    border-radius: 100%;
  }
`

export const SocialLinks = styled.section`
  img {
    width: 3.2rem;
    height: 3.2rem;
  }
`
