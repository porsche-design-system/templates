interface Condition {
  label: string;
  count: string;
  info: boolean;
}

export const conditions: Condition[] = [
  {
    label: 'New',
    count: '25+',
    info: false,
  },
  {
    label: 'Pre-Owned',
    count: '25+',
    info: true,
  },
  {
    label: 'Certified Pre-Owned',
    count: '25+',
    info: true,
  },
  {
    label: 'Classic',
    count: '25+',
    info: true,
  },
];
