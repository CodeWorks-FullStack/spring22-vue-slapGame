import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
// NOTE think of this AppState as the proxystate of vues
export const AppState = reactive({
  user: {},
  account: {},
  activeTarget: null,
  targets: [
    {
      id: 1,
      name: "Joe Exotic",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png/800px-Joe_Exotic_%28Santa_Rose_County_Jail%29.png",
      health: 100,
    },
    {
      id: 2,
      name: "Master Chief",
      img: "https://cdn1.dotesports.com/wp-content/uploads/2021/08/09111246/MasterChief.jpg",
      health: 100,
    },
    {
      id: 3,
      name: "Carol Baskins",
      img: "https://www.thewrap.com/wp-content/uploads/2020/08/Carole-Baskin-1.jpg",
      health: 100,
    },
  ],
})
