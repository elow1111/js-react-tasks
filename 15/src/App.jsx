import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTheme: themes[0].className,
    };
  }

  Switcher = (e) => {
    const themeId = parseInt(e.currentTarget.value, 10);
    const selectedTheme = themes.find((theme) => theme.id === themeId);
    this.setState({ activeTheme: selectedTheme.className });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          themes: themes,
          state: this.state,
          Switcher: this.Switcher,
        }}
      >
        <ThemeSwitcher />
        <Tabs>
          <Tab eventKey="login" title="Login">
            <Home />
          </Tab>
          <Tab eventKey="registration" title="Registration">
            <Profile />
          </Tab>
        </Tabs>
      </ThemeContext.Provider>
    );
  }
}

export default App;
