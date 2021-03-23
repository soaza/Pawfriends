interface IDogImages {
  dog: string;
  id: number;
  src: string;
  description: string;
}

const images: IDogImages[] = [
  {
    dog: "Lucky",
    id: 0,
    src: process.env.PUBLIC_URL + "/Dogs/Lucky.jpg",
    description: "",
  },
  {
    dog: "Lucky",
    id: 1,
    src: process.env.PUBLIC_URL + "/Dogs/Lucky_2.jpg",
    description: "",
  },
  {
    dog: "Hugo",
    id: 0,
    src: process.env.PUBLIC_URL + "/Dogs/Hugo.jpg",
    description: "",
  },
  {
    dog: "Hugo",
    id: 1,
    src: process.env.PUBLIC_URL + "/Dogs/Hugo_2.jpg",
    description: "",
  },
  {
    dog: "Rambo",
    id: 0,
    src: process.env.PUBLIC_URL + "/Dogs/Rambo.jpg",
    description: "",
  },
  {
    dog: "Rambo",
    id: 1,
    src: process.env.PUBLIC_URL + "/Dogs/Rambo_2.jpg",
    description: "",
  },
];

export default images;
