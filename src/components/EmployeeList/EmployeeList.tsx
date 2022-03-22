import { Employee } from "@Interfaces";
import React from "react";

interface EmployeeListProps {
  employees: Employee[] | undefined | null;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <>
      {employees?.map((employee: Employee, i: number) => (
        <p>{employee.name}</p>
      ))}
    </>
  );
};

export default EmployeeList;
