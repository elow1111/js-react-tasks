import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext;

  handleChange = (e) => {
    const themeId = parseInt(e.currentTarget.value, 10);
    this.context.changeTheme(themeId);
  };

  render() {
    const { themes, currentTheme } = this.context;

    return (
      <ButtonGroup className="mb-2">
        {themes.map(theme => (
          <ToggleButton
            key={theme.id}
            id={`toggle-${theme.id}`}
            type="radio"
            variant="secondary"
            name="theme"
            value={theme.id}
            checked={currentTheme.id === theme.id}
            onChange={this.handleChange}
          >
            {theme.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }
  // END
}

export default ThemeSwitcher;
