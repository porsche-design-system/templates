export interface Generation {
  label: string;
  count: number;
  years: string;
}

export const generations: Generation[] = [
  { label: '992 II', count: 25, years: 'since 2025' },
  { label: '992 I', count: 25, years: 'since 2020' },
  { label: '991 II', count: 18, years: '2017-2019' },
  { label: '991 I', count: 9, years: '2012-2016' },
  { label: '997 II', count: 2, years: '2009-2013' },
  { label: '997 I', count: 2, years: '2005-2009' },
  { label: '996 II', count: 1, years: '2002-2007' },
  { label: '996 I', count: 0, years: '1998-2001' },
  { label: '993 II', count: 2, years: '1996-1998' },
  { label: '993 I', count: 1, years: '1994-1995' },
  { label: '964', count: 1, years: '1989-1994' },
  { label: 'G-Model II', count: 1, years: '1984-1989' },
  { label: 'G-Model I', count: 0, years: '1957-1983' },
  { label: 'F-Model', count: 2, years: '1965-1973' },
];
