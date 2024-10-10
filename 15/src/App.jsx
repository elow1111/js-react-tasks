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
// BEGIN (write your solution here)
constructor(props) {
  super(props);
  this.state = {
    currentTheme: themes[0],
  };
  this.changeTheme = this.changeTheme.bind(this);
}

changeTheme(themeId) {
  const selectedTheme = themes.find(theme => theme.id === themeId);
  if (selectedTheme) {
    this.setState({ currentTheme: selectedTheme });
  }
}

render() {
  const contextValue = {
    themes,
    currentTheme: this.state.currentTheme,
    changeTheme: this.changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={this.state.currentTheme.className}>
        <ThemeSwitcher />
        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="login" title="Login">
            <Home />
          </Tab>
          <Tab eventKey="registration" title="Registration">
            <Profile />
          </Tab>
        </Tabs>
      </div>
    </ThemeContext.Provider>
  );
}
// END
}

export default App;
