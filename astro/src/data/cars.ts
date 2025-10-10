export interface Car {
  title: string;
  condition: 'New' | 'Pre-Owned';
  price: string;
  color1: string;
  color2: string;
  details: string[];
  dealer: string;
  location: string;
  distance: string;
}

export const cars: Car[] = [
  {
    title: '1973 Porsche 911 Carrera RS 2.7',
    condition: 'Pre-Owned',
    price: '$749,900',
    color1: 'Grand Prix White',
    color2: 'Black',
    details: ['Gasoline', '65,954 mi', '210 hp / 154 kW', 'Rear-wheel-drive', 'Manual'],
    dealer: 'Manhattan Motorcars',
    location: 'New York, NY, 10019',
    distance: '3 miles away from New York',
  },
  {
    title: 'Another 911 Model',
    condition: 'New',
    price: '$150,000',
    color1: 'Racing Yellow',
    color2: 'Graphite Blue',
    details: ['Electric', '10 mi', '500 hp / 368 kW', 'All-wheel-drive', 'Automatic'],
    dealer: 'Atlanta Porsche Dealer',
    location: 'Atlanta, GA, 30303',
    distance: '10 miles away from Atlanta',
  },
  {
    title: 'Classic 911 Targa',
    condition: 'Pre-Owned',
    price: '$250,000',
    color1: 'Miami Blue',
    color2: 'Cognac',
    details: ['Gasoline', '45,000 mi', '180 hp / 132 kW', 'Rear-wheel-drive', 'Manual'],
    dealer: 'LA Classic Cars',
    location: 'Los Angeles, CA, 90001',
    distance: '5 miles away from LA',
  },
];
