import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/1fda5692-3ee9-4aa6-9e48-d3560131dfec/IT-en-20220523-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const RegisterForm = styled.form`
  display: flex;
  width: 40vw;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  align-items: center;
  border-radius: 5px;
`;

export const RegisterLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  margin-bottom: 1rem;
  @media (max-width: 460px) {
    position: static;
    align-self: center;
    margin-bottom: 0;
  }
`;

export const RegisterSubmit = styled.button`
  color: white;
  width: 50%;
  height: 5vh;
  background-color: red;
  font-weight: bold;
  border: none;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const RegisterText = styled.input`
  width: 20vw;
  height: 5vh;
  background-color: #333;
  border: none;
  border-radius: 5px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.5rem;
`;
