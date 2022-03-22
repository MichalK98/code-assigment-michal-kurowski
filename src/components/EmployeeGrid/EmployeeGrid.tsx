import { Employee } from '@Interfaces';
import React from 'react';
import { EmployeeSocials } from '..';

import { Box, Card, Flex, Grid, Image, Socials, Strong } from '../elements';

interface EmployeeGridProps {
  employees: Employee[] | undefined | null;
}

const EmployeeGrid: React.FC<EmployeeGridProps> = ({ employees }) => {
  return (
    <Grid>
      {employees?.map((employee: Employee, i: number) => (
        <Card key={i}>
          <Image
            src={employee.imagePortraitUrl || ''}
            alt={employee.name || ''}
          />
          <Flex>
            <Box mt={10} mb={10}>
              <Strong>{employee.name}</Strong>
              <p>Office: {employee.office}</p>
            </Box>
            <Socials mt={10} mb={10}>
              <EmployeeSocials employee={employee} />
            </Socials>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
};

export default EmployeeGrid;
