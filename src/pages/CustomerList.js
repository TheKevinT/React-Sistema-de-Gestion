import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from '../components/customer/CustomerListResults';
import CustomerListToolbar from '../components/customer/CustomerListToolbar';

import { firebaseBuscar } from 'src/utils/firebaseUtil';
import { useEffect, useState } from 'react';

const CustomerList = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    buscarClientes();
  }, []);

  const buscarClientes = async () => {
    const result = await firebaseBuscar('clientes');
    setClientes(result);
  };

  return (
    <>
      <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ pt: 3 }}>
            <CustomerListResults customers={clientes} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
