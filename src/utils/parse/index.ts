import Parse from 'parse'

Parse.initialize('myAppId', 'myMasterKey')
Parse.serverURL = 'https://parse.bonfire.cool/parse'

export default Parse
