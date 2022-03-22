import { Employee } from '@Interfaces';
import React from 'react';

import { Flex } from '../elements';

import EmployeeTable from '../EmployeeTable';
import EmployeeGrid from '../EmployeeGrid';
import Button from '../Button';

// import { EmployeeTable, EmployeeGrid, Button } from '..';

interface EmployeeListProps {
  employees: Employee[] | undefined | null;
  onClick: () => void;
  handleChangeLayout: (selected: boolean) => void;
  loadMore: boolean;
  grid: boolean;
}

const EmployeeList: React.FC<EmployeeListProps> = ({
  employees,
  onClick,
  handleChangeLayout,
  loadMore,
  grid
}) => {
  return (
    <>
      <Button
        onClick={() => handleChangeLayout(!grid)}
        label={grid ? 'Table View' : 'Grid View'}
      />
      {grid ? (
        <EmployeeGrid employees={employees} />
      ) : (
        <EmployeeTable employees={employees} />
      )}

      {loadMore && (
        <Flex mt={40} mb={80}>
          <Button onClick={onClick} label="Load More" />
        </Flex>
      )}
    </>
  );
};

export default EmployeeList;
