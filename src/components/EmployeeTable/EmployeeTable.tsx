import { Employee } from '@Interfaces';
import React from 'react';
import { EmployeeSocials } from '..';

import { Table, THead, TBody, TH, TR, TD } from '../elements';

interface EmployeeTableProps {
  employees: Employee[] | undefined | null;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Name</TH>
          <TH>Office</TH>
          <TH>Socials</TH>
        </TR>
      </THead>
      {employees?.map((employee: Employee, i: number) => (
        <TBody key={i}>
          <TR>
            <TD>{employee.name}</TD>
            <TD>{employee.office}</TD>
            <TD>
              <EmployeeSocials employee={employee} />
            </TD>
          </TR>
        </TBody>
      ))}
    </Table>
  );
};

export default EmployeeTable;
