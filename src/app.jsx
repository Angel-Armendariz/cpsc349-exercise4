// Using ES modules (default)
import PocketBase from 'https://unpkg.com/pocketbase@0.8.1/dist/pocketbase.umd.js'
// OR if you are using CommonJS modules
//const PocketBase = require('pocketbase/cjs')
// npm install eventsource --save
global.EventSource = require('eventsource');
// npm install cross-fetch --save
require('cross-fetch/polyfill');
const USERNAME = 'ADMIN_EMAIL'
const PASSWORD = 'ADMIN_PASSWORD'

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App () {
  return (
    <div className='App'>
      <h1>Hello, {authData.admin.email}</h1>
    </div>
  )
}