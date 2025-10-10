export interface Trim {
  name: string;
  trims: {
    label: string;
    count: number;
  }[];
}

export const trims: Trim[] = [
  {
    name: 'Carrera',
    trims: [
      { label: '911 Carrera', count: 18 },
      { label: '911 Carrera T', count: 9 },
      { label: '911 Carrera 4', count: 1 },
      { label: '911 Carrera S', count: 22 },
      { label: '911 Carrera 4S', count: 5 },
      { label: '911 Carrera GTS', count: 23 },
      { label: '911 Carrera 4 GTS', count: 10 },
    ],
  },
  {
    name: 'Carrera Cabriolet',
    trims: [
      { label: '911 Carrera Cabriolet', count: 16 },
      { label: '911 Carrera T Cabriolet', count: 3 },
      { label: '911 Carrera 4 Cabriolet', count: 0 },
      { label: '911 Carrera S Cabriolet', count: 10 },
      { label: '911 Carrera 4S Cabriolet', count: 4 },
      { label: '911 Carrera GTS Cabriolet', count: 13 },
      { label: '911 Carrera 4 GTS Cabriolet', count: 3 },
      { label: '911 SC Cabriolet', count: 0 },
    ],
  },
  {
    name: 'Targa',
    trims: [
      { label: '911 Targa', count: 0 },
      { label: '911 Targa 4', count: 4 },
      { label: '911 Targa 4S', count: 5 },
      { label: '911 Targa 4 GTS', count: 9 },
      { label: '911 SC Targa', count: 0 },
      { label: '911 Carrera Targa', count: 0 },
      { label: '911 Carrera 4 Targa', count: 0 },
    ],
  },
  {
    name: 'Turbo',
    trims: [
      { label: '911 Turbo', count: 4 },
      { label: '911 Turbo S', count: 13 },
    ],
  },
  {
    name: 'Turbo Cabriolet',
    trims: [
      { label: '911 Turbo Cabriolet', count: 3 },
      { label: '911 Turbo S Cabriolet', count: 14 },
    ],
  },
  {
    name: 'Turbo Targa',
    trims: [{ label: '911 Turbo Targa', count: 0 }],
  },
  {
    name: 'GT',
    trims: [
      { label: '911 GT3', count: 12 },
      { label: '911 GT3 Cup', count: 0 },
      { label: '911 GT3 Touring', count: 4 },
      { label: '911 GT3 RS', count: 12 },
      { label: '911 GT3 R', count: 0 },
      { label: '911 GT2', count: 0 },
      { label: '911 GT2 RS', count: 1 },
    ],
  },
  {
    name: 'Speedster',
    trims: [{ label: '911 Speedster', count: 0 }],
  },
  {
    name: 'Special Editions',
    trims: [
      { label: '911 Spirit 70', count: 2 },
      { label: '911 Dakar', count: 0 },
      { label: '911 S/T', count: 1 },
      { label: '911 R', count: 0 },
      { label: '911 Sport Classic', count: 0 },
    ],
  },
];
