import { Employee } from '@Interfaces';
import React from 'react';

import { Box, Card, Flex, Grid, Image, Socials, Strong } from '../elements';
import Button from '../Button';

interface EmployeeListProps {
  employees: Employee[] | undefined | null;
  onClick: () => void;
  loadMore: boolean;
}

const EmployeeList: React.FC<EmployeeListProps> = ({
  employees,
  onClick,
  loadMore
}) => {
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

      {loadMore && (
        <Flex mt={40} mb={80}>
          <Button onClick={onClick} label="More Emploee" />
        </Flex>
      )}
    </>
  );
};

export default EmployeeList;
