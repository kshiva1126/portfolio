import styled from '@emotion/styled';

const Container = styled.div`
  * {
    border: 0;
    margin: 0;
    padding: 0;
  }

  nav {
    background-color: #aeb2e8;
    height: 80px;
  }

  nav>.flex {
    align-items: center;
    height: 50px;
    display: flex;
  }

  div.flex {
    flex-direction: column;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
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
    margin: 0 20px 0 20px
  }
`;

export default Container;
