export interface CheckboxOption {
  label: string;
  count: string;
}

export const campaignOptions: CheckboxOption[] = [
  { label: 'Available To Reserve Online', count: '0' },
  { label: 'Demo cars & service loaners', count: '9' },
];

export const financingOptions: CheckboxOption[] = [
  { label: 'Lease', count: '25+' },
  { label: 'Retail Finance', count: '25+' },
];
