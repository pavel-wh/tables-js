// Vendors
const path = require('path')

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		[
			'module-resolver',
			{
				root: ['.'],
				alias: {
					'@': path.resolve(__dirname, 'src'),
					'@core': path.resolve(__dirname, 'src/core'),
				},
			},
		],
	],
}
