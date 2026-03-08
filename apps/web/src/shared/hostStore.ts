import { createStore } from "zustand/vanilla";

export type HostStore = {
  count: number;
  inc: () => void;
  setCount: (n: number) => void;
};

export const hostStore = createStore<HostStore>((set, get) => ({
  count: 0,
  inc: () => set({ count: get().count + 1 }),
  setCount: (n) => set({ count: n }),
}));

