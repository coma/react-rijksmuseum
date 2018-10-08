export function worksMapPartial (state, item) {
  if (state[item.objectNumber]) {
    return state;
  }

  const work = {
    isFull: false,
    id: item.objectNumber,
    title: item.title,
    author: item.principalOrFirstMaker,
    types: [],
    materials: [],
    techniques: [],
    inscriptions: [],
    authorRoles: [],
    image: !!item.webImage && {
      src: item.webImage.url,
      width: item.webImage.width,
      height: item.webImage.height,
    },
  };

  return { ...state, [work.id]: work };
}

export function workMapFull (state, { artObject: item }) {
  const work = {
    isFull: true,
    id: item.objectNumber,
    title: item.title,
    description: item.label.description,
    makerLine: item.label.makerLine,
    location: item.location,
    dating: item.dating.yearEarly !== item.dating.yearLate ? `${item.dating.yearEarly} - ${item.dating.yearLate}` : item.dating.yearLate,
    author: item.principalOrFirstMaker,
    year: item.dating.sortingDate,
    dimensions: item.subTitle,
    types: item.objectTypes,
    materials: item.materials,
    techniques: item.techniques,
    inscriptions: item.inscriptions,
    authorRoles: item.principalMakers[0].roles,
    mattech: [...item.materials, ...item.techniques].join(', '),
    image: !!item.webImage && {
      src: item.webImage.url,
      width: item.webImage.width,
      height: item.webImage.height,
    },
  };

  return { ...state, [work.id]: work };
}
