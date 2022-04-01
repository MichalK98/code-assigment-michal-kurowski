import { useState, useEffect } from 'react';

import { Employee } from '@Interfaces';
import { EmployeeList } from '@Components';

interface EmployeeListContainerProps {
  employees: Employee[];
}

interface StateProps {
  employees: Employee[] | null;
  limit: number;
  count: number;
  loadMore: boolean;
  grid: boolean;
  officeAscending: boolean;
  nameAscending: boolean;
}

const LIMIT = 16;

const defaultState: StateProps = {
  employees: null,
  limit: LIMIT,
  count: 0,
  loadMore: true,
  grid: true,
  officeAscending: true,
  nameAscending: true,
};

const EmployeeListContainer: React.FC<EmployeeListContainerProps> = ({
  employees
}) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    setState({
      ...state,
      count: employees.length,
      employees
    });
  }, []);

  const listedEmployees: Employee[] | undefined = state.employees?.slice(
    0,
    state.limit
  );

  const handleLoadMore = () => {
    setState({
      ...state,
      limit: state.limit + LIMIT
    });
  };

  const handleChangeLayout = (selected: boolean) => {
    setState({
      ...state,
      grid: selected
    });
  };

  const handleSortByOffice = (officeAscending: boolean) => {
    const sorted = employees.sort((a, b) => (a.office > b.office) ? 1 : -1)

    setState({
      ...state,
      officeAscending,
      employees: officeAscending ? sorted.reverse() : sorted
    });
  };

  const handleSortByName = (nameAscending: boolean) => {
    const sorted = employees.sort((a, b) => (a.name > b.name) ? 1 : -1)

    setState({
      ...state,
      nameAscending,
      employees: nameAscending ? sorted.reverse() : sorted
    });
  };

  return (
    <EmployeeList
      employees={listedEmployees}
      onClick={handleLoadMore}
      loadMore={state.loadMore}
      grid={state.grid}
      officeAscending={state.officeAscending}
      nameAscending={state.nameAscending}
      handleChangeLayout={handleChangeLayout}
      handleSortByOffice={handleSortByOffice}
      handleSortByName={handleSortByName}
    />
  );
};

export default EmployeeListContainer;
