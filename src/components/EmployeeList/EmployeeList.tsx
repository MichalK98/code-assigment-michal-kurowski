import { Employee } from '@Interfaces';
import React from 'react';

import {
  Box,
  Card,
  Flex,
  Grid,
  Image,
  Socials,
  Strong,
  Table,
  THead,
  TBody,
  TH,
  TR,
  TD
} from '../elements';
import Button from '../Button';

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
      ) : (
        <Table>
          <THead>
            <TR>
              <TH>Name</TH>
              <TH>Office</TH>
              <TH>Socials</TH>
            </TR>
          </THead>
          {employees?.map((employee: Employee, i: number) => (
            <TBody>
              <TR>
                <TD>{employee.name}</TD>
                <TD>{employee.office}</TD>
                <TD>
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
                </TD>
              </TR>
            </TBody>
          ))}
        </Table>
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
