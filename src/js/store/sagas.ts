import { flatten } from 'lodash';
import App from '../app/store/app.sagas';

export default function* root() {
  yield flatten([
    App
  ]);
}