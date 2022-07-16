import React from 'react';

import { PerfilUser } from '../perfilUser'
import { PerfilEndereco } from '../perfilEndereco'
import { PerfilInfo } from '../perfilInfo'
import { PerfilStatistic } from '../perfilStatistic';
import { PerfilRedes } from '../perfilRedes'

import { PerfilSt, PerfilInfoSt, PerfilContenSt,  UserHistory} from './styles';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const Perfil: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <PerfilSt>
      <Box
        sx={{ flexGrow: 1, width: '100%' , display: 'flex', height: 'auto' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <PerfilUser />
          <Tab label="Perfil" {...a11yProps(0)} />
          <Tab label="Endereço" {...a11yProps(1)} />
          <Tab label="Redes" {...a11yProps(2)} />
          <Tab label="Carrinho" {...a11yProps(3)} />
          <Tab label="Contatos" {...a11yProps(4)} />
          <Tab label="Galeria" {...a11yProps(5)} />
          <Tab label="Acessibilidade" {...a11yProps(6)} />
          <Tab label="Aparencia" {...a11yProps(7)} />
        </Tabs>
        <TabPanel value={value} index={0}>

        </TabPanel>
        <TabPanel value={value} index={1}>
          <PerfilStatistic />
          <PerfilInfo />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PerfilEndereco />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PerfilRedes />
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
      <PerfilInfoSt>
      </PerfilInfoSt>
      <PerfilContenSt>
        <UserHistory>
          history
        </UserHistory>
      </PerfilContenSt>
    </PerfilSt>
  );
};