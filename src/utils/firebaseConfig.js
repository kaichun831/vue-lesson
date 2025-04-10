import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCMGJMgooCltNwlm1TigPrWO5ihnKvmsJk',
  authDomain: 'vue-project-demo-6dce8.firebaseapp.com',
  projectId: 'vue-project-demo-6dce8',
  storageBucket: 'vue-project-demo-6dce8.firebasestorage.app',
  messagingSenderId: '456510325267',
  appId: '1:456510325267:web:7e6317986cd463e6bc35e6',
  measurementId: 'G-PWVXSFV16E',
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

console.log('Firebase app initialized')
export default app
// export { app, analytics }

export const db = getFirestore(app)