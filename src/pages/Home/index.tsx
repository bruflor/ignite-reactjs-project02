import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountDownContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />
          <label htmlFor="minutesAmount">durante</label>
          <input id="minutesAmount" type="number" />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button>
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  );
};
