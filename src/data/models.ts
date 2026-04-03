export type TractorModel = {
  id: string
  name: string
  image: string
  officialUrl: string
}

/** Names and imagery from Mahindra Tractors India; links go to official family pages. */
export const tractorModels: TractorModel[] = [
  {
    id: 'jivo',
    name: 'Mahindra JIVO',
    image:
      'https://www.mahindratractor.com/sites/default/files/2023-11/jivo_new_brand_img_0.webp',
    officialUrl: 'https://www.mahindratractor.com/tractors/jivo-tractors',
  },
  {
    id: 'oja',
    name: 'Mahindra OJA',
    image:
      'https://www.mahindratractor.com/sites/default/files/styles/customwebp/public/2023-11/proja.webp',
    officialUrl: 'https://www.mahindratractor.com/tractors/oja-tractors',
  },
  {
    id: 'xp-plus',
    name: 'Mahindra XP PLUS',
    image:
      'https://www.mahindratractor.com/sites/default/files/2023-11/xp__new_brand_img_0.webp',
    officialUrl: 'https://www.mahindratractor.com/tractors/xp-tractors',
  },
  {
    id: 'arjun',
    name: 'Mahindra ARJUN',
    image:
      'https://www.mahindratractor.com/sites/default/files/2023-11/arjun_new_brand_img_0.webp',
    officialUrl: 'https://www.mahindratractor.com/tractors/arjun-tractors',
  },
  {
    id: 'novo',
    name: 'Mahindra NOVO',
    image:
      'https://www.mahindratractor.com/sites/default/files/2023-11/novo_new_brand_img_0.webp',
    officialUrl: 'https://www.mahindratractor.com/tractors/novo-tractors',
  },
]
