import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from "zod";

import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestion"
        placeholder="Dê um nome para o seu projeto"
        {...register("task")}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestion">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
};
