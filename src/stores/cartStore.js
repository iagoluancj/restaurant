import { create } from 'zustand'

// matriz de pedidos, de funcionarios e do cardapio. 

// export const useCardapio = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

export const useStore = create((set) => ({
  logins: [],
  addLogin: (newLogin) => set((state) => ({ logins: [...state.logins, newLogin] })),
  increasePopulation: () => set((state) => ({ ...state, logins: state.logins})),
  removeAllBears: () => set({ logins: 0 }),
  updatedUsers: (newLogin) => set({ logins: newLogin }),

  revistClient: false,
  setRevistClient: (newSetRevistClient) => set({ revistClient: newSetRevistClient }),
}))