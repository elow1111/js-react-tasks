import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { state, Switcher } = this.context;

    return (
      <ButtonGroup className="mb-2">
        {this.context.themes.map((theme) => (
          <ToggleButton
            key={theme.id}
            id={`toggle-check-${theme.id}`}
            type="radio" 
            variant="secondary"
            name="theme"
            value={theme.id}
            checked={state.activeTheme === theme.className}
            onChange={Switcher}
          >
            {theme.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }
}

export default ThemeSwitcher;
