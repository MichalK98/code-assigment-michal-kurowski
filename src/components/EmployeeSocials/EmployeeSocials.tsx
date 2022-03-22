import { Employee } from '@Interfaces';
import React from 'react';

interface EmployeeSocialsProps {
  employee: Employee | undefined | null;
}

const EmployeeSocials: React.FC<EmployeeSocialsProps> = ({ employee }) => {
  return (
    <>
      {employee?.linkedIn && (
        <a href={`https://linkedin.com/${employee.linkedIn}`} target="_blank">
          L
        </a>
      )}
      {employee?.gitHub && (
        <a href={`https://github.com/${employee.gitHub}`} target="_blank">
          G
        </a>
      )}
      {employee?.twitter && (
        <a href={`https://twitter.com//${employee.twitter}`} target="_blank">
          T
        </a>
      )}
    </>
  );
};

export default EmployeeSocials;
