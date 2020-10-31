let store
if ( process.env.NODE_ENV === 'production' ) store = require( './index.prod' ).default
else if ( process.env.NODE_ENV === 'test' ) store = require( './index.prod' ).default
else store = require( './index.dev' ).default

export default store
