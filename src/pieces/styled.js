import styled from 'styled-components'

export const DivMain = styled.main`
  max-width: 58rem;
  width: 90%;
  margin: auto;
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
  }
  ul {
    margin-top: 2.4rem;
    display: flexbox;
    gap: 1.6rem;
    flex-wrap: wrap;
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
export const HeaderPic = styled.header`
  margin-bottom: 1.2rem;
  img {
    width: 12rem;
    height: 12rem;
    border-radius: 100%;

    border: 4px solid;

    border-image-source: linear-gradient(
      90deg,
      #9572fc 0%,
      #43e7ad 50.52%,
      #e2d45c 100%
    );
  }
`
