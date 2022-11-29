import CssBaseline from '@mui/material/CssBaseline';
import LeftMenu from './components/LeftMenu';
import { menuItens } from './shared/data/datamenu';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;

}

export default function ResponsiveDrawer(props: Props) {

  return (
    <>
      <CssBaseline />
      <LeftMenu items={menuItens} />
    </>

  );
}