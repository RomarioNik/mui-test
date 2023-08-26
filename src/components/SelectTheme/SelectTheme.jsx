import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import css from './SelectTheme.module.css';

const SelectTheme = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState('Light');

  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   const setActiveTheme = newTheme => {
  //     const activeTheme =
  //       theme === newTheme ? css.selectItemActive : css.selectItem;
  //   };

  const handleClickThemeItem = theme => {
    setTheme(theme);
    // setActiveTheme(theme);
    handleClose();
  };

  console.log(theme);

  return (
    <div className={css.wrapper}>
      <Button
        className={css.selectButton}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
      >
        Theme
        <ExpandMoreIcon />
      </Button>
      <Menu
        className={css.selectList}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          className={theme === 'Light' ? css.selectItemActive : css.selectItem}
          onClick={() => handleClickThemeItem('Light')}
        >
          Light
        </MenuItem>
        <MenuItem
          className={theme === 'Dark' ? css.selectItemActive : css.selectItem}
          onClick={() => handleClickThemeItem('Dark')}
        >
          Dark
        </MenuItem>
        <MenuItem
          className={theme === 'Violet' ? css.selectItemActive : css.selectItem}
          onClick={() => handleClickThemeItem('Violet')}
        >
          Violet
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SelectTheme;
