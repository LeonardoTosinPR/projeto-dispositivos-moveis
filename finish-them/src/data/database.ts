export interface Movie {
  id: number;
  type: "movie";
  name: string;
  duration: string;
  genre: string;
  studio: string;
  rating: number;
  cover: any; // O tipo 'any' é usado aqui para simplificar o require da imagem
  description: string;
}

export interface Game {
  id: number;
  type: "game";
  name: string;
  platform: "PC" | "PS5" | "Xbox" | "Nintendo Switch";
  genre: string;
  status: "Finished" | "Platinated";
  rating: number;
  cover: any;
  description: string;
}

export type MediaItem = Movie | Game;

export const MOCK_DATA: MediaItem[] = [
  {
    id: 1,
    type: "game",
    name: "The Last of Us Part I",
    platform: "PS5",
    genre: "Ação-Aventura",
    status: "Finished",
    rating: 10,
    cover: require("../../assets/images/tlou_cover.png"),
    description:
      "Em uma civilização devastada, onde infectados e sobreviventes veteranos estão à solta, Joel, um protagonista abatido, é contratado para tirar uma garota de 14 anos, Ellie, de uma zona de quarentena militar.",
  },
  {
    id: 2,
    type: "game",
    name: "Cyberpunk 2077",
    platform: "PC",
    genre: "RPG",
    status: "Finished",
    rating: 8.8,
    cover: require("../../assets/images/Cyberpunk_2077_cover.png"),
    description:
      "Cyberpunk 2077 é uma história de ação e aventura de mundo aberto ambientada em Night City, uma megalópole obcecada por poder, glamour e modificação corporal.",
  },
  {
    id: 3,
    type: "movie",
    name: "Duna: Parte Dois",
    duration: "2h 46m",
    genre: "Ficção Científica",
    studio: "Legendary Pictures",
    rating: 9.5,
    cover: require("../../assets/images/dune2_cover.jpg"),
    description:
      "Paul Atreides se une a Chani e aos Fremen em uma guerra de vingança contra os conspiradores que destruíram sua família. Diante de uma escolha entre o amor de sua vida e o destino do universo, ele se esforça para evitar um futuro terrível que só ele pode prever.",
  },
  {
    id: 4,
    type: "movie",
    name: "Oppenheimer",
    duration: "3h 0m",
    genre: "Biografia/Drama",
    studio: "Universal Pictures",
    rating: 9.2,
    cover: require("../../assets/images/Oppenheimer_cover.jpg"),
    description:
      "A história do físico americano J. Robert Oppenheimer, seu papel no Projeto Manhattan e no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial, e suas consequências pessoais e políticas.",
  },
];
