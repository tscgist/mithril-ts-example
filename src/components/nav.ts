import * as m from 'mithril'

export default {
	view (vnode) {
		return m('div',
			m('a', {href: '/', oncreate: m.route.link}, "Home"),
			m('span', " | "),
			m('a', {href: '/about', oncreate: m.route.link}, "About"),
			m('span', " | "),
			m('a', {href: '/demo', oncreate: m.route.link}, "Demo")
		)
	}
} as m.Component<{},{}>
