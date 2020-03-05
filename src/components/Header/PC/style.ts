import styled from '@emotion/styled';

const Container = styled.div`
  * {
    border: 0;
    margin: 0;
    padding: 0;
  }

  nav {
    position: sticky;/*固定する*/
    position: -webkit-sticky;/*Safari用ベンダープレフィックス*/
    top: 0;/*ブラウザの上からの距離はゼロ*/
    background-color: #aeb2e8;
    height: 80px;
  }

  .inner {
    max-width: 100%;
    margin: 0 auto;
    width: 760px;
  }

  nav>.flex {
    align-items: center;
    height: 50px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .flex li {
    margin-top: 20px;
    margin-left: 30px;
    list-style: none;
  }

  .logo {
    margin-top: 20px;
  }

  .logo a {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
  }

  li a {
    color: white;
    text-decoration: none;
  }
`;

export default Container;
