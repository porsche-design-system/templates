export interface Owner {
  value: string;
  label: string;
  count: string;
}

export const owners: Owner[] = [
  { value: 'any', label: 'Any', count: '' },
  { value: '1', label: 'Max. 1', count: '25+' },
  { value: '2', label: 'Max. 2', count: '25+' },
  { value: '3', label: 'Max. 3', count: '25+' },
  { value: '4', label: 'Max. 4', count: '25+' },
];
