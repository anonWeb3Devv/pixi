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