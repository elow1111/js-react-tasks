import React from 'react';
import ThemeContext from './contexts';

const content = 'Текст для вкладки Home';

class Home extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <article className={this.context.state.activeTheme}>
        {content}
      </article>
    );
  }
}

export default Home;
