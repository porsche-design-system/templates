interface EngineAndTransmission {
  minPowerOptions: {
    hp: string;
    count: string;
    value: string;
  }[];
  checkboxGroups: {
    heading: string;
    options: {
      label: string;
      count: string;
    }[];
  }[];
}

export const engineAndTransmission: EngineAndTransmission = {
  minPowerOptions: [
    { value: 'a', hp: 'Any', count: '' },
    { value: 'b', hp: '200 hp', count: '25+' },
    { value: 'c', hp: '300 hp', count: '25+' },
    { value: 'd', hp: '400 hp', count: '25+' },
    { value: 'e', hp: '500 hp', count: '25+' },
  ],
  checkboxGroups: [
    {
      heading: 'Transmission',
      options: [
        { label: 'PDK (Automatic)', count: '25+' },
        { label: 'Automatic', count: '0' },
        { label: 'Manual', count: '25+' },
      ],
    },
    {
      heading: 'Drivetrain',
      options: [
        { label: 'All-wheel-drive', count: '25+' },
        { label: 'Rear-wheel-drive', count: '25+' },
      ],
    },
    {
      heading: 'Fuel Type',
      options: [
        { label: 'Gasoline', count: '25+' },
        { label: 'Electric', count: '0' },
        { label: 'Diesel', count: '0' },
        { label: 'Plug-in hybrid', count: '0' },
      ],
    },
  ],
};
