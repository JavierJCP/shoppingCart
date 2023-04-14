import { useContext } from 'react';
import { FilterContext } from '../context/filters';

export function useFilters() {
  const filterContext = useContext(FilterContext);

  if (filterContext === undefined) {
    throw new Error('You need a provider to use filters context');
  }

  return filterContext;
}
