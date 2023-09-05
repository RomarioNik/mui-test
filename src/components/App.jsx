import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';
import css from './App.module.css';
// import Slider from '@mui/material/Slider';
import MenuAppBar from './AppBar/AppBar';
import SelectTheme from './SelectTheme/SelectTheme';
import { ReactComponent as RadioChecked } from '../img/radio-button.svg';
import RadioGroup from './RadioGroup/RadioGroup';
import InputFile from './InputFile/InputFile';
// import MenuPopupState from './PopupState/PopupSate';
// import RadioTheme from './RadioTheme/RadioTheme';

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={css.app}>
        <MenuAppBar />
        <SelectTheme />
        {/* <RadioTheme /> */}
        <Button variant="contained" className={css.buttonApp}>
          Hello world
        </Button>
        <RadioChecked className={css.radio} />
        {/* <Slider defaultValue={30} />
        <Slider defaultValue={30} className={css.slider} /> */}
        {/* <MenuPopupState /> */}
        <p>React homework template</p>
        <InputFile />
        <p>React homework template</p>
        <RadioGroup />
      </div>
    </StyledEngineProvider>
  );
};
