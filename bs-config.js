/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
	"ui": {
		"port": 3001,
		"weinre": {
			"port": 8080
		}
	},
	"files": ["public/js/app.js","public/css/style.css","public/css/theme.css"],
	"watchEvents": [
		"change", "add", "unlink", "addDir", "unlinkDir"
	],
	"watchOptions": {
		"persistent": true,
		"ignoreInitial": false,
		"followSymlinks": true,
		"cwd": ".",
		"atomic": true,
		"depth": 10
	},
	"startPath": "public/",
	"index": "index.html",
	"directory": true,
	"server": {
		"baseDir": "/mnt/c/workspaces/ts/geo/mithril-ts-example-extended"
	},
	"proxy": false,
	"port": 3000,
	"middleware": false,
	"serveStatic": [],
	"ghostMode": {
		"clicks": true,
		"scroll": true,
		"location": true,
		"forms": {
			"submit": true,
			"inputs": true,
			"toggles": true
		}
	},
	"logLevel": "info",
	"logPrefix": "Browsersync",
	"logConnections": false,
	"logFileChanges": true,
	"logSnippet": true,
	"rewriteRules": [],
	"open": "local",
	"browser": "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"  ,
	"cors": false,
	"xip": false,
	"hostnameSuffix": false,
	"reloadOnRestart": false,
	"notify": true,
	"scrollProportionally": true,
	"scrollThrottle": 0,
	"scrollRestoreTechnique": "window.name",
	"scrollElements": [],
	"scrollElementMapping": [],
	"reloadDelay": 0,
	"reloadDebounce": 0,
	"reloadThrottle": 0,
	"plugins": [],
	"injectChanges": true,
	"minify": true,
	"host": "169.254.45.177",
	"localOnly": false,
	"codeSync": true,
	"timestamps": true,
	"clientEvents": [
		"scroll",
		"scroll:element",
		"input:text",
		"input:toggles",
		"form:submit",
		"form:reset",
		"click"
	],
	"socket": {
		"socketIoOptions": {
			"log": false
		},
		"socketIoClientConfig": {
			"reconnectionAttempts": 50
		},
		"path": "/browser-sync/socket.io",
		"clientPath": "/browser-sync",
		"namespace": "/browser-sync",
		"clients": {
			"heartbeatTimeout": 5000
		}
	},
	"tagNames": {
		"less": "link",
		"scss": "link",
		"css": "link",
		"jpg": "img",
		"jpeg": "img",
		"png": "img",
		"svg": "img",
		"gif": "img",
		"js": "script"
	}
};