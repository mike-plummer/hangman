import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';
import { HM } from '../types';
import Board from '../board/board';

interface GameProps {
  store: Store<HM.State.State>;
}

class Game extends React.Component<GameProps> {

  render(): React.ReactNode {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Board/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Game;