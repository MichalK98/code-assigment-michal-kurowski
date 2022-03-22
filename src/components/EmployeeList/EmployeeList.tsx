import { Employee } from '@Interfaces';
import React from 'react';

import { Box, Card, Flex, Grid, Image, Socials, Strong } from '../elements';

interface EmployeeListProps {
  employees: Employee[] | undefined | null;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <>
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
                {employee.linkedIn && (
                  <a
                    href={`https://linkedin.com/${employee.linkedIn}`}
                    target="_blank"
                  >
                    L
                  </a>
                )}
                {employee.gitHub && (
                  <a
                    href={`https://github.com/${employee.gitHub}`}
                    target="_blank"
                  >
                    G
                  </a>
                )}
                {employee.twitter && (
                  <a
                    href={`https://twitter.com//${employee.twitter}`}
                    target="_blank"
                  >
                    T
                  </a>
                )}
              </Socials>
            </Flex>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default EmployeeList;
