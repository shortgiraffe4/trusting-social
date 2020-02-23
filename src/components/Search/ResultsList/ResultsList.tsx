import React from 'react';

import { StyledResultsList } from './ResultsList.styled';

interface IProps {
  results: string[];
}

export const ResultsList = (props: IProps) => {
  const { results } = props;
  const top3Results = results.slice(0, 3);
  return (
    <StyledResultsList>
      <ul>
        {top3Results.map(r => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </StyledResultsList>
  );
};
