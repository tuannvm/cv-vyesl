/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	main: function (req, res) {
		var swig = require('swig');
	//fn('views/index/main.swig');
	var tmpl = swig.compileFile('views/index/main.swig'),
    renderedHtml = tmpl({
      people: [
        { name: 'Paul', age: 28 },
        { name: 'Jane', age: 26 },
        { name: 'Jimmy', age: 45 }
      ],
      title: "Vy's Resume",
			name: 'Đoàn Duy Thuỳ Vy',
			job: [
				{ class: 'a'}
			]
    });
		res.end(renderedHtml)
},


};
