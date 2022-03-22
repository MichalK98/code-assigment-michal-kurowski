import { useState, useEffect } from "react";

import { Employee } from '@Interfaces';
import { EmployeeList } from '@Components';

interface EmployeeListContainerProps {
  employees: Employee[];
}

interface StateProps {
  employees: Employee[] | null;
}

const defaultState: StateProps = {
  employees: null,
};

const EmployeeListContainer: React.FC<EmployeeListContainerProps> = ({
  employees,
}) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    setState({
      ...state,
      employees
    });
  }, []);

  console.log(state);
  
  return <EmployeeList employees={state.employees} />;
};

export default EmployeeListContainer;
