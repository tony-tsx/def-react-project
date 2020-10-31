let store
if ( process.env.NODE_ENV === 'production' ) store = require( './index.prod' )
else if ( process.env.NODE_ENV === 'test' ) store = require( './index.prod' )
else store = require( './index.dev' )

export default store
