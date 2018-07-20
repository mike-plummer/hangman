import * as React from 'react';
import AppActions from '../game/store/game.actions';
import { HM } from '../types';
import { includes } from 'lodash';
import { connect } from 'react-redux';
import { WordDisplay } from '../wordDisplay/wordDisplay';
import { Lives } from '../lives/lives';
import { UsedLetters } from '../usedLetters/usedLetters';
import { Timer } from '../timer/timer';
import { GameStatus } from '../gameStatus/gameStatus';
import { GameControl } from '../gameControl/gameControl';
import './board.css';

interface BoardOwnProps {
}

interface BoardDispatchProps {
  guess: (letter: HM.Letter) => void;
  startGame: () => void;
}

interface BoardStateProps {
  exposed: HM.Letter[];
  guesses: HM.Letter[];
  lives: number;
  status?: HM.GameStatus;
  timeRemaining: number;
}

type BoardProps = BoardOwnProps & BoardDispatchProps & BoardStateProps;

class Board extends React.Component<BoardProps> {
  componentDidMount(): void {
    document.addEventListener('keypress', this.onKeyPress);
  }

  private onKeyPress = (event: KeyboardEvent): void => {
    const { guesses, guess, status } = this.props;

    if (status !== HM.GameStatus.IN_PROGRESS) {
      return;
    }

    const pressedKey = event.key.toUpperCase();
    if (/^[A-Z]$/.test(pressedKey) && !includes(guesses, pressedKey)) {
      guess(pressedKey as HM.Letter);
    }
  };

  render(): React.ReactNode {
    const { guesses, exposed, lives, status, startGame, timeRemaining } = this.props;
    return (
      <div tabIndex={0} data-cy="board" className="Board">
        <span className="FlexRow">
          <GameStatus status={status}/>
        </span>
        <div className="Controls">
          <span className="FlexRow">
            <Timer timeRemaining={timeRemaining}/>
            <Lives lives={lives}/>
          </span>
          <GameControl onClick={startGame} status={status}/>
        </div>

        <span className="FlexRow">
          <WordDisplay exposed={exposed}/>
        </span>
        <span className="FlexRow">
          <UsedLetters letters={guesses}/>
        </span>
      </div>
    );
  }
}

const mapDispatchToProps: BoardDispatchProps = {
  guess: AppActions.CREATORS.guess,
  startGame: AppActions.CREATORS.startGame
};

const mapStateToProps = (state: HM.State.State): BoardStateProps => ({
  exposed: state.game.exposed,
  guesses: state.game.guesses,
  lives: state.game.lives,
  status: state.game.gameStatus,
  timeRemaining: state.game.timeRemaining
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);