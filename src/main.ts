// App entry point

import * as m from 'mithril'
import home from './components/home'
import about from './components/about'
import demo from './components/demo'

m.route(document.body, '/', {
	'/': home,
	'/about': about,
	'/demo': demo
})
