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
  handleSortByOffice: (officeAscending: boolean) => void;
  loadMore: boolean;
  grid: boolean;
  officeAscending: boolean;
}

const EmployeeList: React.FC<EmployeeListProps> = ({
  employees,
  onClick,
  handleChangeLayout,
  handleSortByOffice,
  loadMore,
  grid,
  officeAscending
}) => {
  return (
    <>
      <Button
        onClick={() => handleChangeLayout(!grid)}
        label={grid ? 'Table View' : 'Grid View'}
      />
      <Button
        onClick={() => handleSortByOffice(!officeAscending)}
        label={officeAscending ? 'Sort by Office A-Z' : 'Sort by Office Z-A'}
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
