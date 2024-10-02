import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.styled';
import { ReactComponent as Logo } from "../../assets/Svgs/tic-tac-toe.svg";
import { useNavigate } from 'react-router-dom';
import { SfxContext } from '../../contexts/SfxContext';

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { hoverSfx, clickSfx } = useContext(SfxContext);

  // Function to handle logo click with sound effect
  const handleLogoClick = () => {
    clickSfx();
    navigate('/');
  };

  // Function to handle theme toggle with sound effect
  const handleThemeToggle = () => {
    clickSfx();
    toggleTheme();
  };

  return (
    <HeaderWrapper>
      <Logo 
        className='logo' 
        onClick={handleLogoClick} 
        onMouseEnter={hoverSfx} // Simplified function call
      />
      <span
        onClick={handleThemeToggle} // Call the function to handle theme toggle
        onMouseEnter={hoverSfx} // Play hover sound on mouse enter
      >
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;


// <span onClick={() => toggleTheme()} onMouseEnter={() => hoverSfx()}>
// {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
// </span>
