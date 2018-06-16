import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { hot } from 'react-hot-loader'

interface AppProps {
}

class AppComponent extends React.Component<AppProps> {

  render(): React.ReactNode {
    return (
      <Container>
        <p>TODO</p>
      </Container>
    );
  }
}

export const App = hot(module)(AppComponent);