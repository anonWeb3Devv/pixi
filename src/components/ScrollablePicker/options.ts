export const eyeOptions = [
  {
    name: 'None', 
    value: '/assets/pixiAssets/eyes/0.png',  
    image: '/assets/pixiAssets/eyes/0.png'   
  },
  ...Array.from({ length: 29 }, (_, index) => {
    const number = index + 1;  
    return {
      name: `Eyes ${number}`,
      value: `/assets/pixiAssets/eyes/${number}.png`,  
      image: `/assets/pixiAssets/eyes/${number}.png`,  
    };
  })
];


export const headOptions = [
  {
    name: 'None', 
    value: '/assets/pixiAssets/head/0.png',  
    image: '/assets/pixiAssets/head/0.png'   
  },
  ...Array.from({ length: 68 }, (_, index) => {
    const number = index + 1;
    return {
      name: `Head ${number}`,
      value: `/assets/pixiAssets/head/${number}.png`,
      image: `/assets/pixiAssets/head/${number}.png`,
    };
  })
];

export const clothesOptions = [
  {
    name: 'None', 
    value: '/assets/pixiAssets/clothes/0.png',  
    image: '/assets/pixiAssets/clothes/0.png'   
  },
  ...Array.from({ length: 78 }, (_, index) => {
    const number = index + 1;
    return {
      name: `Clothes ${number}`,
      value: `/assets/pixiAssets/clothes/${number}.png`,
      image: `/assets/pixiAssets/clothes/${number}.png`,
    };
  })
];


export const backgroundOptions = [
  {
    name: 'None', 
    value: '/assets/pixiAssets/background/0.png',  
    image: '/assets/pixiAssets/background/0.png'   
  },
  ...Array.from({ length: 5 }, (_, index) => {
    const number = index + 1;
    return {
      name: `Background ${number}`,
      value: `/assets/pixiAssets/background/${number}.png`,
      image: `/assets/pixiAssets/background/${number}.png`,
    };
  })
];

export const handOptions = [
  {
    name: 'None', 
    value: '/assets/pixiAssets/hand/0.png',  
    image: '/assets/pixiAssets/hand/0.png'   
  },
  ...Array.from({ length: 18 }, (_, index) => {
    const number = index + 1;
    return {
      name: `Hand ${number}`,
      value: `/assets/pixiAssets/hand/${number}.png`,
      image: `/assets/pixiAssets/hand/${number}.png`,
    };
  })
];

export const mouthOptions = [
  {
    name: 'None', 
    value: '/assets/pixiAssets/mouth/0.png',  
    image: '/assets/pixiAssets/mouth/0.png'   
  },
  ...Array.from({ length: 18 }, (_, index) => {
    const number = index + 1;
    return {
      name: `Mouth ${number}`,
      value: `/assets/pixiAssets/mouth/${number}.png`,
      image: `/assets/pixiAssets/mouth/${number}.png`,
    };
  })
];

export const skinOptions = [
  {
    name: 'None', 
    value: '/assets/pixiAssets/skin/0.png',  
    image: '/assets/pixiAssets/skin/0.png'   
  },
  ...Array.from({ length: 14 }, (_, index) => {
    const number = index + 1;
    return {
      name: `Skin ${number}`,
      value: `/assets/pixiAssets/skin/${number}.png`,
      image: `/assets/pixiAssets/skin/${number}.png`,
    };
  })
];


export const petOptions = [
  {
    name: 'None', 
    value: '/assets/pixiAssets/petsGifs/0.png',  
    image: '/assets/pixiAssets/petsGifs/0.png'   
  },
  ...Array.from({ length: 9 }, (_, index) => {
    const number = index + 1;
    return {
      name: `Skin ${number}`,
      value: `/assets/pixiAssets/petsGifs/${number}.gif`,
      image: `/assets/pixiAssets/petsGifs/${number}.gif`,
    };
  })
];


export const pets = {
  dogwifhat: [...Array(49)].map((_, i) => `/assets/pixiAssets/pets/dogwifhat/${i + 1}.png`),
  dragon: [...Array(57)].map((_, i) => `/assets/pixiAssets/pets/dragon/naga transparant${i + 1}.png`),
  frog: [...Array(97)].map((_, i) => `/assets/pixiAssets/pets/frog/froggy transparent${i + 1}.png`),
  gorilla: [...Array(15)].map((_, i) => `/assets/pixiAssets/pets/gorilla/arrow up${i + 1}.png`),
  hamster: [...Array(47)].map((_, i) => `/assets/pixiAssets/pets/hamster/hamster transparant${i + 1}.png`),
  nubcat: [...Array(35)].map((_, i) => `/assets/pixiAssets/pets/nubcat/${i + 1}.png`),
  penguin: [...Array(36)].map((_, i) => `/assets/pixiAssets/pets/penguin/${i + 1}.png`),
  standingcat: [...Array(100)].map((_, i) => `/assets/pixiAssets/pets/standing cat/standing cat transparant${i + 1}.png`),
};

