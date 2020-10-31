import { IS_PROD, IS_JEST } from '../constants'

let store
if ( IS_PROD || IS_JEST ) store = require( './index.prod' )
else store = require( './index.dev' )

export default store
