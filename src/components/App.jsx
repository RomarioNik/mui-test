import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';
import css from './App.module.css';
import Slider from '@mui/material/Slider';
import MenuAppBar from './AppBar/AppBar';

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={css.app}>
        <MenuAppBar />
        <Button variant="contained" className={css.buttonApp}>
          Hello world
        </Button>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className={css.slider} />
        <p>React homework template</p>
      </div>
    </StyledEngineProvider>
  );
};
