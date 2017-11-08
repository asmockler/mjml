'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _fp = require('lodash/fp');

var _lodash = require('lodash');

var _mjmlCore = require('mjml-core');

var _mjmlCore2 = _interopRequireDefault(_mjmlCore);

var _readFile = require('./commands/readFile');

var _readFile2 = _interopRequireDefault(_readFile);

var _watchFiles = require('./commands/watchFiles');

var _watchFiles2 = _interopRequireDefault(_watchFiles);

var _readStream = require('./commands/readStream');

var _readStream2 = _interopRequireDefault(_readStream);

var _outputToFile = require('./commands/outputToFile');

var _outputToFile2 = _interopRequireDefault(_outputToFile);

var _outputToConsole = require('./commands/outputToConsole');

var _outputToConsole2 = _interopRequireDefault(_outputToConsole);

var _package = require('mjml-core/package.json');

var _package2 = require('../package.json');

var _defaultOptions = require('./helpers/defaultOptions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line import/first


exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var EXIT_CODE, KEEP_OPEN, error, pickArgs, argv, config, inputArgs, outputArgs, inputOpt, outputOpt, inputFiles, inputs, convertedStream, failedStream;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          EXIT_CODE = 0;
          KEEP_OPEN = false;

          error = function error(msg) {
            console.error(msg); // eslint-disable-line no-console

            return process.exit(1);
          };

          pickArgs = function pickArgs(args) {
            return (0, _fp.flow)((0, _fp.pick)(args), (0, _fp.pickBy)(function (e) {
              return (0, _fp.negate)(_fp.isNil)(e) && !((0, _lodash.isArray)(e) && (0, _lodash.isEmpty)(e));
            }));
          };

          argv = _yargs2.default.options({
            r: {
              alias: 'read',
              describe: 'Compile MJML File(s)',
              type: 'array'
            },
            w: {
              alias: 'watch',
              type: 'array',
              describe: 'Watch and compile MJML File(s) when modified'
            },
            i: {
              alias: 'stdin',
              describe: 'Compiles MJML from input stream'
            },
            s: {
              alias: 'stdout',
              describe: 'Output HTML to stdout'
            },
            o: {
              alias: 'output',
              type: 'string',
              describe: 'Filename/Directory to output compiled files'
            },
            c: {
              alias: 'config',
              type: 'object',
              describe: 'Option to pass to mjml-core'
            },
            version: {
              alias: 'V'
            }
          }).help().version('mjml-core: ' + _package.version + '\nmjml-cli: ' + _package2.version).argv;
          config = Object.assign(_defaultOptions.DEFAULT_OPTIONS, argv.c);
          inputArgs = pickArgs(['r', 'w', 'i', '_'])(argv);
          outputArgs = pickArgs(['o', 's'])(argv);
          [[Object.keys(inputArgs).length > 1, 'No input arguments received'], [Object.keys(inputArgs).length === 0, 'Too much input arguments received'], [Object.keys(outputArgs).length > 1, 'Too much output arguments received'], [argv.w && argv.w.length > 1 && !argv.o, 'Need an output option when watching files'], [argv.w && argv.w.length > 1 && argv.o && !(0, _outputToFile.isDirectory)(argv.o) && argv.o !== '', 'Need an output option when watching files']].forEach(function (v) {
            return v[0] ? error(v[1]) : null;
          });

          inputOpt = Object.keys(inputArgs)[0];
          outputOpt = Object.keys(outputArgs)[0] || 's';
          inputFiles = (0, _lodash.isArray)(inputArgs[inputOpt]) ? inputArgs[inputOpt] : [inputArgs[inputOpt]];
          inputs = [];
          _context.t0 = inputOpt;
          _context.next = _context.t0 === 'r' ? 16 : _context.t0 === '_' ? 16 : _context.t0 === 'w' ? 18 : _context.t0 === 'i' ? 21 : 27;
          break;

        case 16:
          (0, _readFile.flatMapPaths)(inputFiles).forEach(function (file) {
            inputs.push((0, _readFile2.default)(file));
          });
          return _context.abrupt('break', 28);

        case 18:
          (0, _watchFiles2.default)(inputFiles, argv);
          KEEP_OPEN = true;
          return _context.abrupt('break', 28);

        case 21:
          _context.t1 = inputs;
          _context.next = 24;
          return (0, _readStream2.default)();

        case 24:
          _context.t2 = _context.sent;

          _context.t1.push.call(_context.t1, _context.t2);

          return _context.abrupt('break', 28);

        case 27:
          error('Cli error !');

        case 28:
          convertedStream = [];
          failedStream = [];


          inputs.forEach(function (i) {
            // eslint-disable-line array-callback-return
            try {
              convertedStream.push(Object.assign({}, i, {
                compiled: (0, _mjmlCore2.default)(i.mjml, _extends({}, config, { filePath: i.file }))
              }));
            } catch (e) {
              EXIT_CODE = 2;

              failedStream.push({ file: i.file, error: e });
            }
          });

          failedStream.forEach(function (_ref2) {
            var error = _ref2.error,
                file = _ref2.file;

            // eslint-disable-line array-callback-return
            console.error('' + (file ? 'File: ' + file + '\n' : null) + error); // eslint-disable-line no-console

            if (config.stack) {
              console.error(error.stack); // eslint-disable-line no-console
            }
          });

          if (!KEEP_OPEN && convertedStream.length === 0) {
            error('Input file(s) failed to render');
          }

          _context.t3 = outputOpt;
          _context.next = _context.t3 === 'o' ? 36 : _context.t3 === 's' ? 39 : 41;
          break;

        case 36:
          if (inputs.length > 1 && !(0, _outputToFile.isDirectory)(argv.o) && argv.o !== '') {
            error('Multiple input files, but output option should be either a directory or an empty string: ' + argv.o + ' given');
          }

          Promise.all(convertedStream.map((0, _outputToFile2.default)(argv.o))).then(function () {
            if (!KEEP_OPEN) {
              process.exit(EXIT_CODE);
            }
          }).catch(function () {
            if (!KEEP_OPEN) {
              process.exit(1);
            }
          });
          return _context.abrupt('break', 42);

        case 39:
          Promise.all(convertedStream.map(_outputToConsole2.default)).then(function () {
            return process.exit(EXIT_CODE);
          }).catch(function () {
            return process.exit(1);
          });
          return _context.abrupt('break', 42);

        case 41:
          error('Cli error ! (No output option available)');

        case 42:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));
module.exports = exports['default'];