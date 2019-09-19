'use strict';

var getplaceholder = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var p, data, data2;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        p = document.getElementById('userid').value;

                        console.log(p);

                        _context.next = 4;
                        return fetch('https://jsonplaceholder.typicode.com/users');

                    case 4:
                        data = _context.sent;
                        _context.next = 7;
                        return data.json();

                    case 7:
                        data2 = _context.sent;

                        document.getElementById('vel').innerHTML = '\n            <ul>\n            <li>id:' + data2[0].id + '</li>\n            <li>name:' + data2[0].name + '</li>\n            <li>email:' + data2[0].email + '</li>\n        </ul>\n            ';

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getplaceholder() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('btnuser').addEventListener('click', getplaceholder);
});