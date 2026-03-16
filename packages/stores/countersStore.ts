import { create } from "zustand";

type CounterStore = {
  counter: number;
  increment: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () =>
    set((state) => ({
      counter: state.counter + 1,
    })),
}));
