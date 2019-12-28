import * as firebase from 'firebase';
// import 'firebase/auth'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
  // firebase.analytics();
}

export default firebase