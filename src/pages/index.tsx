import { GetStaticProps } from "next";
import { getEmployees } from "@Api/employees";

import { Employee } from "@Interfaces";
import EmployeeListContainer from "src/containers/EmployeeListContainer";

interface HomeProps {
  employees: Employee[];
}

const Home: React.FC<HomeProps> = ({ employees }) => {
  return <EmployeeListContainer employees={employees} />;
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
      employees,
    },
  };
};
