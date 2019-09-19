'use strict';

// async function with await and fetch
var getplaceholder = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var p, data, data2, arr, personId, name, ans, myObject;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            p = document.getElementById('userid').value;
            _context.next = 3;
            return fetch('https://jsonplaceholder.typicode.com/users');

          case 3:
            data = _context.sent;
            _context.next = 6;
            return data.json();

          case 6:
            data2 = _context.sent;

            document.getElementById('vel').innerHTML = '\n             <ul>\n            <li>id:' + data2[0].id + '</li>\n            <li>name:' + data2[0].name + '</li>\n            <li>email:' + data2[0].email + '</li>\n        </ul>\n            ';
            // object assignment destructuring
            arr = [data2[0].id, data2[0].name];
            personId = arr[0], name = arr[1];
            ans = " ID = " + personId + " Name = " + name;

            document.getElementById("desstruc").innerHTML = ans;
            //es6 method shorthand in objects
            myObject = {
              userFirstName: 'Pinki',
              userLastName: 'Thakor',
              output: function output() {
                var printy = document.getElementById('printShortObj');

                printy.innerHTML = this.userFirstName + ' ' + this.userLastName;
              }
            };


            myObject.output();

          case 14:
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