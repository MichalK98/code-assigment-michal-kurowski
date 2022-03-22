import { defaultHeader, API_URL } from './utils';

export const getEmployees = () =>
  fetch(`${API_URL}employees`, { method: 'GET', ...defaultHeader });
