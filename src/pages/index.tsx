import { GetStaticProps } from 'next';
import Head from 'next/head'
import { getEmployees } from '@Api/employees';

import { Employee } from '@Interfaces';
import EmployeeListContainer from 'src/containers/EmployeeListContainer';

interface HomeProps {
  employees: Employee[];
}

const Home: React.FC<HomeProps> = ({ employees }) => {
  return (
    <>
      <Head>
        <title>Tretton37 - Employees</title>
      </Head>
      <EmployeeListContainer employees={employees} />;
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const employees: Employee[] = await getEmployees()
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });

  return {
    props: {
      employees
    }
  };
};
