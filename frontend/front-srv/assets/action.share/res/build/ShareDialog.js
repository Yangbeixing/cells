(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ShareDialog = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

exports['default'] = function (PydioComponent) {
    var ShareContextConsumer = (function (_React$Component) {
        _inherits(ShareContextConsumer, _React$Component);

        function ShareContextConsumer() {
            _classCallCheck(this, ShareContextConsumer);

            _get(Object.getPrototypeOf(ShareContextConsumer.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(ShareContextConsumer, [{
            key: 'render',
            value: function render() {
                var _context = this.context;
                var messages = _context.messages;
                var getMessage = _context.getMessage;
                var isReadonly = _context.isReadonly;

                var contextProps = { messages: messages, getMessage: getMessage, isReadonly: isReadonly };
                return React.createElement(PydioComponent, _extends({}, this.props, contextProps));
            }
        }]);

        return ShareContextConsumer;
    })(React.Component);

    ShareContextConsumer.contextTypes = {
        messages: React.PropTypes.object,
        getMessage: React.PropTypes.func,
        isReadonly: React.PropTypes.func
    };

    return ShareContextConsumer;
};

module.exports = exports['default'];

},{"react":"react"}],2:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _EditCellDialog = require('./EditCellDialog');

var _EditCellDialog2 = _interopRequireDefault(_EditCellDialog);

var _pydioModelCell = require('pydio/model/cell');

var _pydioModelCell2 = _interopRequireDefault(_pydioModelCell);

var _pydioHttpResourcesManager = require('pydio/http/resources-manager');

var _pydioHttpResourcesManager2 = _interopRequireDefault(_pydioHttpResourcesManager);

var _materialUi = require('material-ui');

var _mainShareHelper = require("../main/ShareHelper");

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _Pydio$requireLib = _pydio2['default'].requireLib("components");

var GenericCard = _Pydio$requireLib.GenericCard;
var GenericLine = _Pydio$requireLib.GenericLine;

var CellCard = (function (_React$Component) {
    _inherits(CellCard, _React$Component);

    function CellCard(props) {
        var _this = this;

        _classCallCheck(this, CellCard);

        _get(Object.getPrototypeOf(CellCard.prototype), 'constructor', this).call(this, props);
        this.state = { edit: false, model: new _pydioModelCell2['default'](), loading: true };
        this._observer = function () {
            _this.forceUpdate();
        };
        _pydioHttpResourcesManager2['default'].loadClassesAndApply(["PydioActivityStreams", "PydioCoreActions"], function () {
            _this.setState({ extLibs: true });
        });
        var rootNode = this.props.rootNode;

        if (rootNode) {
            if (rootNode.getMetadata().has('virtual_root')) {
                // Use node children instead
                if (rootNode.isLoaded()) {
                    this.state.rootNodes = [];
                    rootNode.getChildren().forEach(function (n) {
                        return _this.state.rootNodes.push(n);
                    });
                } else {
                    // Trigger children load
                    rootNode.observe('loaded', function () {
                        var rootNodes = [];
                        rootNode.getChildren().forEach(function (n) {
                            return rootNodes.push(n);
                        });
                        _this.setState({ rootNodes: rootNodes });
                    });
                    rootNode.load();
                }
            } else {
                this.state.rootNodes = [rootNode];
            }
        }
    }

    //CellCard = PaletteModifier({primary1Color:'#009688'})(CellCard);

    _createClass(CellCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props;
            var pydio = _props.pydio;
            var cellId = _props.cellId;

            if (pydio.user.activeRepository === cellId) {
                pydio.user.getActiveRepositoryAsCell().then(function (cell) {
                    _this2.setState({ model: cell, loading: false });
                    cell.observe('update', _this2._observer);
                });
            } else {
                this.state.model.observe('update', function () {
                    _this2.setState({ loading: false });
                    _this2.forceUpdate();
                });
                this.state.model.load(this.props.cellId);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.state.model.stopObserving('update', this._observer);
        }
    }, {
        key: 'usersInvitations',
        value: function usersInvitations(userObjects) {
            _mainShareHelper2['default'].sendCellInvitation(this.props.node, this.state.model, userObjects);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props;
            var mode = _props2.mode;
            var pydio = _props2.pydio;
            var editorOneColumn = _props2.editorOneColumn;
            var _state = this.state;
            var edit = _state.edit;
            var model = _state.model;
            var extLibs = _state.extLibs;
            var rootNodes = _state.rootNodes;
            var loading = _state.loading;

            var m = function m(id) {
                return pydio.MessageHash['share_center.' + id];
            };

            var rootStyle = { width: 350, minHeight: 270 };
            var content = undefined;

            if (edit) {
                if (editorOneColumn) {
                    rootStyle = { width: 350, height: 500 };
                } else {
                    rootStyle = { width: 700, height: 500 };
                }
                content = _react2['default'].createElement(_EditCellDialog2['default'], _extends({}, this.props, { model: model, sendInvitations: this.usersInvitations.bind(this), editorOneColumn: editorOneColumn }));
            } else if (model) {
                var nodes = model.getRootNodes().map(function (node) {
                    return model.getNodeLabelInContext(node);
                }).join(', ');
                if (!nodes) {
                    nodes = model.getRootNodes().length + ' item(s)';
                }
                var deleteAction = undefined,
                    editAction = undefined,
                    moreMenuItems = undefined;
                if (mode !== 'infoPanel') {
                    moreMenuItems = [];
                    if (model.getUuid() !== pydio.user.activeRepository) {
                        moreMenuItems.push(_react2['default'].createElement(_materialUi.MenuItem, { primaryText: m(246), onTouchTap: function () {
                                pydio.triggerRepositoryChange(model.getUuid());
                                _this3.props.onDismiss();
                            } }));
                    }
                    if (model.isEditable()) {
                        deleteAction = function () {
                            model.deleteCell().then(function (res) {
                                _this3.props.onDismiss();
                            });
                        };
                        editAction = function () {
                            _this3.setState({ edit: true });
                            if (_this3.props.onHeightChange) {
                                _this3.props.onHeightChange(500);
                            }
                        };
                        moreMenuItems.push(_react2['default'].createElement(_materialUi.MenuItem, { primaryText: m(247), onTouchTap: function () {
                                return _this3.setState({ edit: true });
                            } }));
                        moreMenuItems.push(_react2['default'].createElement(_materialUi.MenuItem, { primaryText: m(248), onTouchTap: deleteAction }));
                    }
                }
                var watchLine = undefined,
                    bmButton = undefined;
                if (extLibs && rootNodes && !loading) {
                    var selector = _react2['default'].createElement(PydioActivityStreams.WatchSelector, { pydio: pydio, nodes: rootNodes });
                    watchLine = _react2['default'].createElement(GenericLine, { iconClassName: "mdi mdi-bell-outline", legend: pydio.MessageHash['meta.watch.selector.legend'], data: selector, iconStyle: { marginTop: 32 } });
                    bmButton = _react2['default'].createElement(PydioCoreActions.BookmarkButton, { pydio: pydio, nodes: rootNodes, styles: { iconStyle: { color: 'white' } } });
                }

                content = _react2['default'].createElement(
                    GenericCard,
                    {
                        pydio: pydio,
                        title: model.getLabel(),
                        onDismissAction: this.props.onDismiss,
                        otherActions: bmButton,
                        onDeleteAction: deleteAction,
                        onEditAction: editAction,
                        headerSmall: mode === 'infoPanel',
                        moreMenuItems: moreMenuItems
                    },
                    !loading && model.getDescription() && _react2['default'].createElement(GenericLine, { iconClassName: 'mdi mdi-information', legend: m(145), data: model.getDescription() }),
                    !loading && _react2['default'].createElement(GenericLine, { iconClassName: 'mdi mdi-account-multiple', legend: m(54), data: model.getAclsSubjects() }),
                    !loading && _react2['default'].createElement(GenericLine, { iconClassName: 'mdi mdi-folder', legend: m(249), data: nodes }),
                    watchLine,
                    loading && _react2['default'].createElement(
                        'div',
                        { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: 120, fontWeight: 500, color: '#aaa' } },
                        _pydio2['default'].getMessages()[466]
                    )
                );
                if (mode === 'infoPanel') {
                    return content;
                }
            }

            return _react2['default'].createElement(
                _materialUi.Paper,
                { zDepth: 0, style: rootStyle },
                content
            );
        }
    }]);

    return CellCard;
})(_react2['default'].Component);

exports['default'] = CellCard;
module.exports = exports['default'];

},{"../main/ShareHelper":29,"./EditCellDialog":4,"material-ui":"material-ui","pydio":"pydio","pydio/http/resources-manager":"pydio/http/resources-manager","pydio/model/cell":"pydio/model/cell","react":"react"}],3:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _materialUi = require('material-ui');

var _materialUiStyles = require('material-ui/styles');

var _SharedUsers = require('./SharedUsers');

var _SharedUsers2 = _interopRequireDefault(_SharedUsers);

var _NodesPicker = require('./NodesPicker');

var _NodesPicker2 = _interopRequireDefault(_NodesPicker);

var _pydioModelCell = require('pydio/model/cell');

var _pydioModelCell2 = _interopRequireDefault(_pydioModelCell);

var _Pydio$requireLib = _pydio2['default'].requireLib('hoc');

var ModernTextField = _Pydio$requireLib.ModernTextField;

/**
 * Dialog for letting users create a workspace
 */
var CreateCellDialog = _react2['default'].createClass({
    displayName: 'CreateCellDialog',

    childContextTypes: {
        messages: _react2['default'].PropTypes.object,
        getMessage: _react2['default'].PropTypes.func,
        isReadonly: _react2['default'].PropTypes.func
    },

    getChildContext: function getChildContext() {
        var messages = this.props.pydio.MessageHash;
        return {
            messages: messages,
            getMessage: function getMessage(messageId) {
                var namespace = arguments.length <= 1 || arguments[1] === undefined ? 'share_center' : arguments[1];

                try {
                    return messages[namespace + (namespace ? "." : "") + messageId] || messageId;
                } catch (e) {
                    return messageId;
                }
            },
            isReadonly: (function () {
                return false;
            }).bind(this)
        };
    },

    getInitialState: function getInitialState() {
        return { step: 'users', model: new _pydioModelCell2['default'](), saving: false };
    },

    componentDidMount: function componentDidMount() {
        var _this = this;

        this.refs.title.focus();
        this.state.model.observe('update', function () {
            _this.forceUpdate();
        });
    },

    componentWillUnmount: function componentWillUnmount() {
        this.state.model.stopObserving('update');
    },

    submit: function submit() {
        var _this2 = this;

        var model = this.state.model;

        this.setState({ saving: true });
        model.save().then(function (result) {
            _this2.props.onDismiss();
            _this2.setState({ saving: false });
        })['catch'](function (reason) {
            pydio.UI.displayMessage('ERROR', reason.message);
            _this2.setState({ saving: false });
        });
    },

    m: function m(id) {
        return this.props.pydio.MessageHash['share_center.' + id];
    },

    computeSummaryString: function computeSummaryString() {
        var model = this.state.model;

        var users = 0;
        var groups = 0;
        var teams = 0;
        var userString = [];
        var objs = model.getAcls();
        Object.keys(objs).map(function (k) {
            var acl = objs[k];
            if (acl.Group) groups++;else if (acl.Role) teams++;else users++;
        });
        if (users) userString.push(users + ' ' + this.m(270));
        if (groups) userString.push(groups + ' ' + this.m(271));
        if (teams) userString.push(teams + ' ' + this.m(272));
        var finalString = undefined;
        if (userString.length === 3) {
            finalString = userString[0] + ', ' + userString[1] + this.m(274) + userString[3];
        } else if (userString.length === 0) {
            finalString = this.m(273);
        } else {
            finalString = userString.join(this.m(274));
        }
        return this.m(269).replace('%USERS', finalString);
    },

    render: function render() {
        var _this3 = this;

        var buttons = [];
        var content = undefined;
        var pydio = this.props.pydio;
        var _state = this.state;
        var step = _state.step;
        var model = _state.model;
        var saving = _state.saving;

        var dialogLabel = pydio.MessageHash['418'];
        if (step !== 'users') {
            dialogLabel = model.getLabel();
        }

        if (step === 'users') {

            content = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    null,
                    this.m(275)
                ),
                _react2['default'].createElement(ModernTextField, { ref: "title", floatingLabelText: this.m(276), value: model.getLabel(), onChange: function (e, v) {
                        model.setLabel(v);
                    }, fullWidth: true }),
                _react2['default'].createElement(ModernTextField, { floatingLabelText: this.m(277), value: model.getDescription(), onChange: function (e, v) {
                        model.setDescription(v);
                    }, fullWidth: true })
            );

            if (model.getLabel()) {
                buttons.push(_react2['default'].createElement(_materialUi.FlatButton, {
                    key: 'quick',
                    primary: true,
                    disabled: !model.getLabel() || saving,
                    label: this.m('cells.create.advanced'), // Advanced
                    onTouchTap: function () {
                        _this3.setState({ step: 'data' });
                    } }));
                buttons.push(_react2['default'].createElement(
                    'span',
                    { style: { display: 'inline-block', margin: '0  10px', fontSize: 14, fontWeight: 500, color: '#9E9E9E' } },
                    this.m('cells.create.buttons.separator')
                ));
            }

            buttons.push(_react2['default'].createElement(_materialUi.RaisedButton, {
                key: 'next1',
                disabled: !model.getLabel() || saving,
                primary: true,
                label: this.m(279), // Create Cell
                onTouchTap: function () {
                    _this3.submit();
                } }));
        } else if (step === 'data') {

            content = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'h5',
                    { style: { marginTop: -10 } },
                    this.m(278)
                ),
                _react2['default'].createElement(_SharedUsers2['default'], {
                    pydio: pydio,
                    cellAcls: model.getAcls(),

                    excludes: [pydio.user.id],
                    onUserObjectAdd: model.addUser.bind(model),
                    onUserObjectRemove: model.removeUser.bind(model),
                    onUserObjectUpdateRight: model.updateUserRight.bind(model)
                })
            );

            buttons.push(_react2['default'].createElement(_materialUi.FlatButton, { key: 'prev1', primary: false, label: pydio.MessageHash['304'], onTouchTap: function () {
                    _this3.setState({ step: 'users' });
                } }));
            buttons.push(_react2['default'].createElement(_materialUi.FlatButton, { key: 'next2', primary: true, label: pydio.MessageHash['179'], onTouchTap: function () {
                    return _this3.setState({ step: 'label' });
                } }));
        } else {

            content = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'h5',
                    { style: { marginTop: -10 } },
                    this.m('cells.create.title.fill.folders')
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { color: '#9e9e9e' } },
                    this.computeSummaryString()
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { paddingTop: 16 } },
                    _react2['default'].createElement(_NodesPicker2['default'], { pydio: pydio, model: model })
                )
            );

            buttons.push(_react2['default'].createElement(_materialUi.FlatButton, { key: 'prev2', primary: false, label: pydio.MessageHash['304'], onTouchTap: function () {
                    _this3.setState({ step: 'data' });
                } }));
            buttons.push(_react2['default'].createElement(_materialUi.RaisedButton, { key: 'submit', disabled: saving, primary: true, label: this.m(279), onTouchTap: this.submit.bind(this) }));
        }

        return _react2['default'].createElement(
            'div',
            { style: { width: 380, fontSize: 13, color: 'rgba(0,0,0,.87)', display: 'flex', flexDirection: 'column', minHeight: 300 } },
            _react2['default'].createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', paddingLeft: 20 } },
                _react2['default'].createElement(_materialUi.FontIcon, { className: "icomoon-cells-full-plus" }),
                _react2['default'].createElement(
                    'div',
                    { style: { padding: 20, fontSize: 22 } },
                    dialogLabel
                )
            ),
            _react2['default'].createElement(
                'div',
                { style: { padding: '20px 20px 10px', flex: 1 } },
                content
            ),
            _react2['default'].createElement(
                'div',
                { style: { padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } },
                buttons
            )
        );
    }

});

exports['default'] = CreateCellDialog = (0, _materialUiStyles.muiThemeable)()(CreateCellDialog);
exports['default'] = CreateCellDialog;
module.exports = exports['default'];

},{"./NodesPicker":5,"./SharedUsers":7,"material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","pydio/model/cell":"pydio/model/cell","react":"react"}],4:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _SharedUsers = require('./SharedUsers');

var _SharedUsers2 = _interopRequireDefault(_SharedUsers);

var _NodesPicker = require('./NodesPicker');

var _NodesPicker2 = _interopRequireDefault(_NodesPicker);

var _mainGenericEditor = require('../main/GenericEditor');

var _mainGenericEditor2 = _interopRequireDefault(_mainGenericEditor);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var React = require('react');

var _Pydio$requireLib = _pydio2['default'].requireLib('components');

var ResourcePoliciesPanel = _Pydio$requireLib.ResourcePoliciesPanel;

var _Pydio$requireLib2 = _pydio2['default'].requireLib('hoc');

var ModernTextField = _Pydio$requireLib2.ModernTextField;

/**
 * Dialog for letting users create a workspace
 */
exports['default'] = React.createClass({
    displayName: 'EditCellDialog',

    childContextTypes: {
        messages: React.PropTypes.object,
        getMessage: React.PropTypes.func,
        isReadonly: React.PropTypes.func
    },

    getChildContext: function getChildContext() {
        var messages = this.props.pydio.MessageHash;
        return {
            messages: messages,
            getMessage: function getMessage(messageId) {
                var namespace = arguments.length <= 1 || arguments[1] === undefined ? 'share_center' : arguments[1];

                try {
                    return messages[namespace + (namespace ? "." : "") + messageId] || messageId;
                } catch (e) {
                    return messageId;
                }
            },
            isReadonly: function isReadonly() {
                return false;
            }
        };
    },

    submit: function submit() {
        var _this = this;

        var _props = this.props;
        var model = _props.model;
        var pydio = _props.pydio;

        var dirtyRoots = model.hasDirtyRootNodes();
        model.save().then(function (result) {
            _this.forceUpdate();
            if (dirtyRoots && model.getUuid() === pydio.user.getActiveRepository()) {
                pydio.goTo('/');
                pydio.fireContextRefresh();
            }
        })['catch'](function (reason) {
            pydio.UI.displayMessage('ERROR', reason.message);
        });
    },

    render: function render() {
        var _props2 = this.props;
        var pydio = _props2.pydio;
        var model = _props2.model;
        var sendInvitations = _props2.sendInvitations;

        var m = function m(id) {
            return pydio.MessageHash['share_center.' + id];
        };

        var header = React.createElement(
            'div',
            null,
            React.createElement(ModernTextField, { floatingLabelText: m(267), value: model.getLabel(), onChange: function (e, v) {
                    model.setLabel(v);
                }, fullWidth: true }),
            React.createElement(ModernTextField, { floatingLabelText: m(268), value: model.getDescription(), onChange: function (e, v) {
                    model.setDescription(v);
                }, fullWidth: true })
        );
        var tabs = {
            left: [{
                Label: m(54),
                Value: 'users',
                Component: React.createElement(_SharedUsers2['default'], {
                    pydio: pydio,
                    cellAcls: model.getAcls(),
                    excludes: [pydio.user.id],
                    sendInvitations: sendInvitations,
                    onUserObjectAdd: model.addUser.bind(model),
                    onUserObjectRemove: model.removeUser.bind(model),
                    onUserObjectUpdateRight: model.updateUserRight.bind(model)
                })
            }, {
                Label: m(253),
                Value: 'permissions',
                AlwaysLast: true,
                Component: React.createElement(ResourcePoliciesPanel, {
                    pydio: pydio,
                    resourceType: 'cell',
                    description: m('cell.visibility.advanced'),
                    resourceId: model.getUuid(),
                    style: { margin: -10 },
                    skipTitle: true,
                    onSavePolicies: function () {},
                    readonly: false,
                    cellAcls: model.getAcls()
                })
            }],
            right: [{
                Label: m(249),
                Value: 'content',
                Component: React.createElement(_NodesPicker2['default'], { pydio: pydio, model: model, mode: 'edit' })
            }]
        };

        return React.createElement(_mainGenericEditor2['default'], {
            pydio: pydio,
            tabs: tabs,
            header: header,
            editorOneColumn: this.props.editorOneColumn,
            saveEnabled: model.isDirty(),
            onSaveAction: this.submit.bind(this),
            onCloseAction: this.props.onDismiss,
            onRevertAction: function () {
                model.revertChanges();
            }
        });
    }

});
module.exports = exports['default'];

},{"../main/GenericEditor":27,"./NodesPicker":5,"./SharedUsers":7,"pydio":"pydio","react":"react"}],5:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUiStyles = require('material-ui/styles');

var _pydioModelDataModel = require('pydio/model/data-model');

var _pydioModelDataModel2 = _interopRequireDefault(_pydioModelDataModel);

var _require$requireLib = require('pydio').requireLib('components');

var FoldersTree = _require$requireLib.FoldersTree;

var NodesPicker = (function (_React$Component) {
    _inherits(NodesPicker, _React$Component);

    function NodesPicker(props) {
        _classCallCheck(this, NodesPicker);

        _get(Object.getPrototypeOf(NodesPicker.prototype), 'constructor', this).call(this, props);
        var crtWs = undefined;

        var user = props.pydio.user;
        var avail = [];
        user.getRepositoriesList().forEach(function (repo) {
            if (repo.getAccessType() === 'gateway') {
                if (repo.getId() === user.activeRepository) {
                    if (repo.getOwner() === 'shared') {
                        return; // do not push to the list
                    }
                    crtWs = repo;
                }
                avail.push(repo);
            }
        });
        var availableWs = [];
        var notOwned = avail.filter(function (repo) {
            return !repo.getOwner();
        });
        var owned = avail.filter(function (repo) {
            return repo.getOwner();
        });
        if (notOwned.length && owned.length) {
            availableWs = [].concat(_toConsumableArray(notOwned), ['DIVIDER'], _toConsumableArray(owned));
        } else {
            availableWs = [].concat(_toConsumableArray(notOwned), _toConsumableArray(owned));
        }

        var dm = undefined;
        if (availableWs.length) {
            if (!crtWs) {
                crtWs = availableWs[0];
            }
            dm = _pydioModelDataModel2['default'].RemoteDataModelFactory({ tmp_repository_id: crtWs.getId() });
            var root = dm.getRootNode();
            root.getMetadata().set('repository_id', crtWs.getId());
            root.load(dm.getAjxpNodeProvider());
        }

        this.state = {
            dataModel: dm,
            open: false,
            availableWs: availableWs,
            crtWs: crtWs
        };
    }

    _createClass(NodesPicker, [{
        key: 'switchWorkspace',
        value: function switchWorkspace(ws) {
            var dm = _pydioModelDataModel2['default'].RemoteDataModelFactory({ tmp_repository_id: ws.getId() });
            var root = dm.getRootNode();
            root.getMetadata().set('repository_id', ws.getId());
            root.load(dm.getAjxpNodeProvider());
            this.setState({ crtWs: ws, dataModel: dm });
        }
    }, {
        key: 'handleTouchTap',
        value: function handleTouchTap(event) {
            // This prevents ghost click.
            event.preventDefault();

            this.setState({
                open: true,
                anchorEl: event.currentTarget
            });
        }
    }, {
        key: 'handleRequestClose',
        value: function handleRequestClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'onValidateNode',
        value: function onValidateNode() {
            var _state = this.state;
            var node = _state.node;
            var crtWs = _state.crtWs;

            this.props.model.addRootNode(node, crtWs.getId());
            this.handleRequestClose();
        }
    }, {
        key: 'onNodeSelected',
        value: function onNodeSelected(node) {
            var dataModel = this.state.dataModel;

            node.load(dataModel.getAjxpNodeProvider());
            this.setState({ node: node });
        }

        /**
         *
         * @param node TreeNode
         * @return {XML}
         */
    }, {
        key: 'renderNodeLine',
        value: function renderNodeLine(node) {
            var model = this.props.model;

            return _react2['default'].createElement(_materialUi.ListItem, {
                disabled: true,
                leftIcon: _react2['default'].createElement(_materialUi.FontIcon, { className: "mdi mdi-" + (node.Type === 'LEAF' ? 'file' : 'folder') }),
                primaryText: model.getNodeLabelInContext(node),
                rightIconButton: _react2['default'].createElement(_materialUi.IconButton, { onTouchTap: function () {
                        model.removeRootNode(node.Uuid);
                    }, iconClassName: 'mdi mdi-delete', tooltip: 'Remove', iconStyle: { color: 'rgba(0,0,0,.43)' } })
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var _props = this.props;
            var model = _props.model;
            var muiTheme = _props.muiTheme;
            var mode = _props.mode;
            var pydio = _props.pydio;

            var m = function m(id) {
                return pydio.MessageHash['share_center.' + id];
            };
            var nodes = model.getRootNodes() || [];
            var nodeLines = [],
                emptyStateString = undefined;
            nodes.map(function (node) {
                nodeLines.push(_this.renderNodeLine(node));
                nodeLines.push(_react2['default'].createElement(_materialUi.Divider, { inset: true }));
            });
            nodeLines.pop();
            if (!nodes.length) {
                if (mode === 'edit') {
                    emptyStateString = _react2['default'].createElement(
                        'span',
                        { style: { color: 'rgba(0,0,0,.54)', fontStyle: 'italic' } },
                        m(280)
                    );
                } else {
                    //emptyStateString = <span style={{color:'rgba(0,0,0,.54)', fontStyle:'italic'}}>{m(281)}</span>;
                }
            }
            var pickButton = undefined;
            if (mode === 'edit') {
                pickButton = _react2['default'].createElement(_materialUi.FlatButton, {
                    label: m(282),
                    onTouchTap: this.handleTouchTap.bind(this),
                    primary: true,
                    style: { marginBottom: 10 },
                    icon: _react2['default'].createElement(_materialUi.FontIcon, { className: "mdi mdi-folder-plus" })
                });
            } else {
                pickButton = _react2['default'].createElement(_materialUi.RaisedButton, {
                    label: m(282),
                    onTouchTap: this.handleTouchTap.bind(this),
                    primary: false,
                    style: { marginBottom: 10 },
                    icon: _react2['default'].createElement(_materialUi.FontIcon, { className: "mdi mdi-folder-plus", style: { fontSize: 20, marginTop: -4 } })
                });
            }
            var _state2 = this.state;
            var node = _state2.node;
            var availableWs = _state2.availableWs;
            var crtWs = _state2.crtWs;

            return _react2['default'].createElement(
                'div',
                null,
                pickButton,
                _react2['default'].createElement(
                    _materialUi.List,
                    null,
                    nodeLines
                ),
                emptyStateString,
                _react2['default'].createElement(
                    _materialUi.Popover,
                    {
                        open: this.state.open,
                        anchorEl: this.state.anchorEl,
                        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                        targetOrigin: { horizontal: 'left', vertical: 'top' },
                        onRequestClose: this.handleRequestClose.bind(this)
                    },
                    _react2['default'].createElement(
                        'div',
                        { style: { width: 372, height: 300, display: 'flex', flexDirection: 'column' } },
                        _react2['default'].createElement(
                            _materialUi.DropDownMenu,
                            { style: { height: 54 }, value: crtWs, onChange: function (e, i, v) {
                                    _this.switchWorkspace(v);
                                } },
                            availableWs.map(function (ws) {
                                if (ws === 'DIVIDER') {
                                    return _react2['default'].createElement(_materialUi.Divider, null);
                                } else {
                                    return _react2['default'].createElement(_materialUi.MenuItem, { value: ws, primaryText: ws.getLabel() });
                                }
                            })
                        ),
                        _react2['default'].createElement(_materialUi.Divider, null),
                        _react2['default'].createElement(
                            'div',
                            { style: { marginLeft: -26, flex: '1', overflowY: 'auto', fontSize: 15, color: 'rgba(0,0,0,.73)' } },
                            _react2['default'].createElement(FoldersTree, {
                                pydio: this.props.pydio,
                                dataModel: this.state.dataModel,
                                onNodeSelected: this.onNodeSelected.bind(this),
                                showRoot: false,
                                draggable: false
                            })
                        ),
                        _react2['default'].createElement(_materialUi.Divider, null),
                        _react2['default'].createElement(
                            'div',
                            { style: { display: 'flex', padding: '4px 16px', alignItems: 'center', fontSize: 15 } },
                            node && _react2['default'].createElement(
                                'div',
                                { style: { flex: 1, color: 'rgba(0,0,0,.87)' } },
                                node && node.getPath()
                            ),
                            !node && _react2['default'].createElement(
                                'div',
                                { style: { flex: 1, color: 'rgba(0,0,0,.54)', fontWeight: 500 } },
                                m(283)
                            ),
                            _react2['default'].createElement(_materialUi.IconButton, { iconStyle: { color: muiTheme.palette.primary1Color }, disabled: !node, iconClassName: "mdi mdi-plus-circle-outline", onTouchTap: this.onValidateNode.bind(this) })
                        )
                    )
                )
            );
        }
    }]);

    return NodesPicker;
})(_react2['default'].Component);

exports['default'] = NodesPicker = (0, _materialUiStyles.muiThemeable)()(NodesPicker);
exports['default'] = NodesPicker;
module.exports = exports['default'];

},{"material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","pydio/model/data-model":"pydio/model/data-model","react":"react"}],6:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _materialUi = require('material-ui');

var _UserBadge = require('./UserBadge');

var _UserBadge2 = _interopRequireDefault(_UserBadge);

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var React = require('react');

var SharedUserEntry = React.createClass({
    displayName: 'SharedUserEntry',

    propTypes: {
        cellAcl: React.PropTypes.object.isRequired,
        sendInvitations: React.PropTypes.func,
        onUserObjectRemove: React.PropTypes.func.isRequired,
        onUserObjectUpdateRight: React.PropTypes.func.isRequired
    },
    onRemove: function onRemove() {
        this.props.onUserObjectRemove(this.props.cellAcl.RoleId);
    },
    onInvite: function onInvite() {
        var targets = {};
        var userObject = PydioUsers.User.fromIdmUser(this.props.cellAcl.User);
        targets[userObject.getId()] = userObject;
        this.props.sendInvitations(targets);
    },
    onUpdateRight: function onUpdateRight(name, checked) {
        this.props.onUserObjectUpdateRight(this.props.cellAcl.RoleId, name, checked);
    },
    render: function render() {
        var _this = this;

        var _props = this.props;
        var cellAcl = _props.cellAcl;
        var pydio = _props.pydio;

        var menuItems = [];
        var type = cellAcl.User ? 'user' : cellAcl.Group ? 'group' : 'team';

        // Do not render current user
        if (cellAcl.User && cellAcl.User.Login === pydio.user.id) {
            return null;
        }

        if (type !== 'group') {
            if (this.props.sendInvitations) {
                // Send invitation
                menuItems.push({
                    text: this.props.getMessage('45'),
                    callback: this.onInvite
                });
            }
        }
        if (!this.props.isReadonly() && !this.props.readonly) {
            // Remove Entry
            menuItems.push({
                text: this.props.getMessage('257', ''),
                callback: this.onRemove
            });
        }

        var label = undefined,
            avatar = undefined;
        switch (type) {
            case "user":
                label = cellAcl.User.Attributes["displayName"] || cellAcl.User.Login;
                avatar = cellAcl.User.Attributes["avatar"];
                break;
            case "group":
                if (cellAcl.Group.Attributes) {
                    label = cellAcl.Group.Attributes["displayName"] || cellAcl.Group.GroupLabel;
                } else {
                    label = cellAcl.Group.Uuid;
                }
                break;
            case "team":
                if (cellAcl.Role) {
                    label = cellAcl.Role.Label;
                } else {
                    label = "No role found";
                }
                break;
            default:
                label = cellAcl.RoleId;
                break;
        }
        var read = false,
            write = false;
        cellAcl.Actions.map(function (action) {
            if (action.Name === 'read') {
                read = true;
            }
            if (action.Name === 'write') {
                write = true;
            }
        });
        var disabled = this.props.isReadonly() || this.props.readonly;
        var style = {
            display: 'flex',
            width: 70
        };
        if (!menuItems.length) {
            style = _extends({}, style, { marginRight: 48 });
        }

        return React.createElement(
            _UserBadge2['default'],
            {
                label: label,
                avatar: avatar,
                type: type,
                menus: menuItems
            },
            React.createElement(
                'span',
                { style: style },
                React.createElement(_materialUi.Checkbox, { disabled: disabled, checked: read, onCheck: function (e, v) {
                        _this.onUpdateRight('read', v);
                    } }),
                React.createElement(_materialUi.Checkbox, { disabled: disabled, checked: write, onCheck: function (e, v) {
                        _this.onUpdateRight('write', v);
                    } })
            )
        );
    }
});

exports['default'] = SharedUserEntry = (0, _ShareContextConsumer2['default'])(SharedUserEntry);
exports['default'] = SharedUserEntry;
module.exports = exports['default'];

},{"../ShareContextConsumer":1,"./UserBadge":8,"material-ui":"material-ui","react":"react"}],7:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var _SharedUserEntry = require('./SharedUserEntry');

var _SharedUserEntry2 = _interopRequireDefault(_SharedUserEntry);

var _mainActionButton = require('../main/ActionButton');

var _mainActionButton2 = _interopRequireDefault(_mainActionButton);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _Pydio$requireLib = _pydio2['default'].requireLib('components');

var UsersCompleter = _Pydio$requireLib.UsersCompleter;

var SharedUsers = _react2['default'].createClass({
    displayName: 'SharedUsers',

    propTypes: {
        pydio: _react2['default'].PropTypes.instanceOf(_pydio2['default']),

        cellAcls: _react2['default'].PropTypes.object,

        saveSelectionAsTeam: _react2['default'].PropTypes.func,
        sendInvitations: _react2['default'].PropTypes.func,
        showTitle: _react2['default'].PropTypes.bool,

        onUserObjectAdd: _react2['default'].PropTypes.func.isRequired,
        onUserObjectRemove: _react2['default'].PropTypes.func.isRequired,
        onUserObjectUpdateRight: _react2['default'].PropTypes.func.isRequired

    },
    sendInvitationToAllUsers: function sendInvitationToAllUsers() {
        var _props = this.props;
        var cellAcls = _props.cellAcls;
        var pydio = _props.pydio;

        var userObjects = [];
        Object.keys(cellAcls).map(function (k) {
            var acl = cellAcls[k];
            if (acl.User && acl.User.Login === pydio.user.id) {
                return;
            }
            if (acl.User) {
                var userObject = PydioUsers.User.fromIdmUser(acl.User);
                userObjects[userObject.getId()] = userObject;
            }
        });
        this.props.sendInvitations(userObjects);
    },
    clearAllUsers: function clearAllUsers() {
        var _this = this;

        Object.keys(this.props.cellAcls).map(function (k) {
            _this.props.onUserObjectRemove(k);
        });
    },
    valueSelected: function valueSelected(userObject) {
        if (userObject.IdmUser) {
            this.props.onUserObjectAdd(userObject.IdmUser);
        } else {
            this.props.onUserObjectAdd(userObject.IdmRole);
        }
    },
    render: function render() {
        var _this2 = this;

        var _props2 = this.props;
        var cellAcls = _props2.cellAcls;
        var pydio = _props2.pydio;

        var authConfigs = pydio.getPluginConfigs('core.auth');
        var index = 0;
        var userEntries = [];
        Object.keys(cellAcls).map(function (k) {
            var acl = cellAcls[k];
            if (acl.User && acl.User.Login === pydio.user.id) {
                return;
            }
            index++;
            userEntries.push(_react2['default'].createElement(_SharedUserEntry2['default'], {
                cellAcl: acl,
                key: index,
                pydio: _this2.props.pydio,
                readonly: _this2.props.readonly,
                sendInvitations: _this2.props.sendInvitations,
                onUserObjectRemove: _this2.props.onUserObjectRemove,
                onUserObjectUpdateRight: _this2.props.onUserObjectUpdateRight
            }));
        });

        var actionLinks = [];
        var aclsLength = Object.keys(this.props.cellAcls).length;
        if (aclsLength && !this.props.isReadonly() && !this.props.readonly) {
            actionLinks.push(_react2['default'].createElement(_mainActionButton2['default'], { key: 'clear', callback: this.clearAllUsers, tooltipPosition: "top-center", mdiIcon: 'delete', messageId: '180' }));
        }
        if (aclsLength && this.props.sendInvitations) {
            actionLinks.push(_react2['default'].createElement(_mainActionButton2['default'], { key: 'invite', callback: this.sendInvitationToAllUsers, tooltipPosition: "top-center", mdiIcon: 'email-outline', messageId: '45' }));
        }
        if (this.props.saveSelectionAsTeam && aclsLength > 1 && !this.props.isReadonly() && !this.props.readonly) {
            actionLinks.push(_react2['default'].createElement(_mainActionButton2['default'], { key: 'team', callback: this.props.saveSelectionAsTeam, mdiIcon: 'account-multiple-plus', tooltipPosition: "top-center", messageId: '509', messageCoreNamespace: true }));
        }
        var rwHeader = undefined,
            usersInput = undefined;
        if (userEntries.length) {
            rwHeader = _react2['default'].createElement(
                'div',
                { style: { display: 'flex', marginBottom: -8, marginTop: -8, color: 'rgba(0,0,0,.33)', fontSize: 12 } },
                _react2['default'].createElement('div', { style: { flex: 1 } }),
                _react2['default'].createElement(
                    'div',
                    { style: { width: 43, textAlign: 'center' } },
                    _react2['default'].createElement(
                        'span',
                        { style: { borderBottom: '2px solid rgba(0,0,0,0.13)' } },
                        this.props.getMessage('361', '')
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { width: 43, textAlign: 'center' } },
                    _react2['default'].createElement(
                        'span',
                        { style: { borderBottom: '2px solid rgba(0,0,0,0.13)' } },
                        this.props.getMessage('181')
                    )
                ),
                _react2['default'].createElement('div', { style: { width: 52 } })
            );
        }
        if (!this.props.isReadonly() && !this.props.readonly) {
            var excludes = Object.values(cellAcls).map(function (a) {
                if (a.User) {
                    return a.User.Login;
                } else if (a.Group) {
                    return a.Group.Uuid;
                } else if (a.Role) {
                    return a.Role.Uuid;
                } else {
                    return null;
                }
            }).filter(function (k) {
                return !!k;
            });
            usersInput = _react2['default'].createElement(UsersCompleter, {
                className: 'share-form-users',
                fieldLabel: this.props.getMessage('34'),
                onValueSelected: this.valueSelected,
                pydio: this.props.pydio,
                showAddressBook: true,
                usersFrom: 'local',
                excludes: excludes,
                existingOnly: !authConfigs.get('USER_CREATE_USERS')
            });
        }

        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'div',
                { style: userEntries.length ? { margin: '-20px 8px 16px' } : { marginTop: -20 } },
                usersInput
            ),
            rwHeader,
            _react2['default'].createElement(
                'div',
                null,
                userEntries
            ),
            !userEntries.length && _react2['default'].createElement(
                'div',
                { style: { color: 'rgba(0,0,0,0.43)' } },
                this.props.getMessage('182')
            ),
            userEntries.length > 0 && _react2['default'].createElement(
                'div',
                { style: { textAlign: 'center' } },
                actionLinks
            )
        );
    }
});

exports['default'] = SharedUsers = (0, _ShareContextConsumer2['default'])(SharedUsers);
exports['default'] = SharedUsers;
module.exports = exports['default'];

},{"../ShareContextConsumer":1,"../main/ActionButton":26,"./SharedUserEntry":6,"pydio":"pydio","react":"react"}],8:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('react');

var Component = _require.Component;
var PropTypes = _require.PropTypes;

var _require2 = require('material-ui');

var MenuItem = _require2.MenuItem;
var IconMenu = _require2.IconMenu;
var IconButton = _require2.IconButton;

var _require3 = require('material-ui/styles');

var muiThemeable = _require3.muiThemeable;

var Color = require('color');

var UserBadge = (function (_Component) {
    _inherits(UserBadge, _Component);

    function UserBadge() {
        _classCallCheck(this, UserBadge);

        _get(Object.getPrototypeOf(UserBadge.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(UserBadge, [{
        key: 'renderMenu',
        value: function renderMenu() {
            if (!this.props.menus || !this.props.menus.length) {
                return null;
            }
            var menuItems = this.props.menus.map(function (m) {
                var rightIcon = undefined;
                if (m.checked) {
                    rightIcon = React.createElement('span', { className: 'mdi mdi-check' });
                }
                return React.createElement(MenuItem, {
                    primaryText: m.text,
                    onTouchTap: m.callback,
                    rightIcon: rightIcon });
            });
            var iconStyle = { fontSize: 18 };
            return React.createElement(
                IconMenu,
                {
                    iconButtonElement: React.createElement(IconButton, { style: { padding: 16 }, iconStyle: iconStyle, iconClassName: 'mdi mdi-dots-vertical' }),
                    anchorOrigin: { horizontal: 'right', vertical: 'top' },
                    targetOrigin: { horizontal: 'right', vertical: 'top' }
                },
                menuItems
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var avatar = undefined;
            var avatarColor = this.props.muiTheme.palette.avatarsColor;
            if (this.props.type === 'group') {
                avatarColor = Color(avatarColor).darken(.2).toString();
                avatar = React.createElement('span', { className: 'avatar mdi mdi-account-multiple', style: { backgroundColor: avatarColor } });
            } else if (this.props.type === 'team') {
                avatarColor = Color(avatarColor).darken(.2).toString();
                avatar = React.createElement('span', { className: 'avatar mdi mdi-account-multiple-outline', style: { backgroundColor: avatarColor } });
            } else if (this.props.type === 'temporary') {
                avatarColor = Color(avatarColor).lighten(.2).toString();
                avatar = React.createElement('span', { className: 'avatar mdi mdi-account-plus', style: { backgroundColor: avatarColor } });
            } else if (this.props.type === 'remote_user') {
                avatar = React.createElement('span', { className: 'avatar mdi mdi-account-network', style: { backgroundColor: avatarColor } });
            } else {
                avatar = React.createElement('span', { className: 'avatar mdi mdi-account', style: { backgroundColor: avatarColor } });
            }
            var menu = this.renderMenu();
            return React.createElement(
                'div',
                { className: "share-dialog user-badge user-type-" + this.props.type },
                avatar,
                React.createElement(
                    'span',
                    { className: 'user-badge-label' },
                    this.props.label
                ),
                this.props.children,
                menu
            );
        }
    }]);

    return UserBadge;
})(Component);

UserBadge.propTypes = {
    label: PropTypes.string,
    avatar: PropTypes.string,
    type: PropTypes.string,
    menus: PropTypes.object,
    muiTheme: PropTypes.object
};

exports['default'] = UserBadge = muiThemeable()(UserBadge);

exports['default'] = UserBadge;
module.exports = exports['default'];

},{"color":"color","material-ui":"material-ui","material-ui/styles":"material-ui/styles","react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _CompositeModel = require('./CompositeModel');

var _CompositeModel2 = _interopRequireDefault(_CompositeModel);

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _cellsSharedUsers = require('../cells/SharedUsers');

var _cellsSharedUsers2 = _interopRequireDefault(_cellsSharedUsers);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _materialUiStyles = require('material-ui/styles');

var _materialUi = require('material-ui');

var CellsList = (function (_React$Component) {
    _inherits(CellsList, _React$Component);

    function CellsList(props) {
        _classCallCheck(this, CellsList);

        _get(Object.getPrototypeOf(CellsList.prototype), 'constructor', this).call(this, props);
        this.state = { edit: null };
    }

    _createClass(CellsList, [{
        key: 'addToCellsMenuItems',
        value: function addToCellsMenuItems() {
            var _this = this;

            var items = [];
            // List user available cells - Exclude cells where this node is already shared
            var _props = this.props;
            var pydio = _props.pydio;
            var compositeModel = _props.compositeModel;

            var currentCells = compositeModel.getCells().map(function (cellModel) {
                return cellModel.getUuid();
            });
            pydio.user.getRepositoriesList().forEach(function (repository) {
                if (repository.getOwner() === 'shared' && currentCells.indexOf(repository.getId()) === -1) {
                    var touchTap = function touchTap() {
                        _this.setState({ addMenuOpen: false });
                        compositeModel.addToExistingCell(repository.getId());
                    };
                    items.push(_react2['default'].createElement(_materialUi.MenuItem, { primaryText: repository.getLabel(), onTouchTap: touchTap, leftIcon: _react2['default'].createElement(_materialUi.FontIcon, { className: "icomoon-cells" }) }));
                }
            });
            return items;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props;
            var compositeModel = _props2.compositeModel;
            var pydio = _props2.pydio;
            var usersInvitations = _props2.usersInvitations;
            var muiTheme = _props2.muiTheme;

            var m = function m(id) {
                return pydio.MessageHash['share_center.' + id];
            };
            var edit = this.state.edit;

            var cells = [];
            compositeModel.getCells().map(function (cellModel) {
                var label = cellModel.getLabel();
                var isEdit = !cellModel.getUuid() && edit === 'NEWCELL' || edit === cellModel.getUuid();
                var toggleState = function toggleState() {
                    if (isEdit && edit === 'NEWCELL') {
                        // Remove new cell if it was created empty
                        var acls = cellModel.getAcls();
                        if (!Object.keys(acls).length) {
                            compositeModel.removeNewCell(cellModel);
                        }
                    }
                    _this2.setState({ edit: isEdit ? null : cellModel.getUuid() });
                };

                var removeNode = function removeNode() {
                    cellModel.removeRootNode(compositeModel.getNode().getMetadata().get('uuid'));
                };
                var rightIcon = undefined;
                if (isEdit) {
                    rightIcon = _react2['default'].createElement(_materialUi.IconButton, { iconClassName: "mdi mdi-close", tooltip: pydio.MessageHash['86'], onTouchTap: toggleState });
                } else if (cellModel.isEditable()) {
                    rightIcon = _react2['default'].createElement(
                        _materialUi.IconMenu,
                        {
                            iconButtonElement: _react2['default'].createElement(_materialUi.IconButton, { iconClassName: "mdi mdi-dots-vertical" }),
                            anchorOrigin: { horizontal: 'right', vertical: 'top' },
                            targetOrigin: { horizontal: 'right', vertical: 'top' }
                        },
                        _react2['default'].createElement(_materialUi.MenuItem, { primaryText: m(258), onTouchTap: toggleState }),
                        _react2['default'].createElement(_materialUi.MenuItem, { primaryText: m(259), onTouchTap: removeNode })
                    );
                }
                cells.push(_react2['default'].createElement(_materialUi.ListItem, {
                    primaryText: label,
                    secondaryText: cellModel.getAclsSubjects(),
                    rightIconButton: rightIcon,
                    onTouchTap: toggleState,
                    style: isEdit ? { backgroundColor: 'rgb(245, 245, 245)' } : {},
                    disabled: edit === 'NEWCELL' && !isEdit
                }));
                if (isEdit) {
                    cells.push(_react2['default'].createElement(
                        _materialUi.Paper,
                        { zDepth: 0, style: { backgroundColor: 'rgb(245, 245, 245)', margin: '0 0 16px', padding: '0 10px 10px' } },
                        _react2['default'].createElement(_cellsSharedUsers2['default'], {
                            pydio: pydio,
                            cellAcls: cellModel.getAcls(),
                            excludes: [pydio.user.id],
                            onUserObjectAdd: cellModel.addUser.bind(cellModel),
                            onUserObjectRemove: cellModel.removeUser.bind(cellModel),
                            onUserObjectUpdateRight: cellModel.updateUserRight.bind(cellModel),
                            sendInvitations: function (targetUsers) {
                                return usersInvitations(targetUsers, cellModel);
                            },
                            saveSelectionAsTeam: false,
                            readonly: !cellModel.isEditable()
                        })
                    ));
                }
                cells.push(_react2['default'].createElement(_materialUi.Divider, null));
            });
            cells.pop();

            var legend = undefined;
            if (cells.length && edit !== 'NEWCELL') {
                legend = _react2['default'].createElement(
                    'div',
                    null,
                    m(260)
                );
            } else if (cells.length && edit === 'NEWCELL') {
                legend = _react2['default'].createElement(
                    'div',
                    null,
                    m(261)
                );
            } else {
                legend = _react2['default'].createElement(
                    'div',
                    { style: { padding: '21px 16px 21px 0px', cursor: 'pointer', display: 'flex', alignItems: 'center' }, onTouchTap: function () {
                            compositeModel.createEmptyCell();_this2.setState({ edit: 'NEWCELL' });
                        } },
                    _react2['default'].createElement(_materialUi.IconButton, { iconClassName: "icomoon-cells-clear-plus", iconStyle: { color: muiTheme.palette.primary1Color } }),
                    _react2['default'].createElement(
                        'span',
                        { style: { flex: 1, marginLeft: 8 } },
                        m(262)
                    )
                );
            }

            var addCellItems = this.addToCellsMenuItems();
            var addToCellMenu = undefined;
            if (addCellItems.length) {
                addToCellMenu = _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(_materialUi.RaisedButton, {
                        ref: "addCellButton",
                        style: { marginLeft: 10 },
                        primary: true,
                        label: m(263),
                        onTouchTap: function (event) {
                            _this2.setState({ addMenuOpen: true, addMenuAnchor: _reactDom2['default'].findDOMNode(_this2.refs['addCellButton']) });
                        }
                    }),
                    _react2['default'].createElement(
                        _materialUi.Popover,
                        {
                            open: this.state.addMenuOpen,
                            anchorEl: this.state.addMenuAnchor,
                            onRequestClose: function () {
                                _this2.setState({ addMenuOpen: false });
                            },
                            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                            targetOrigin: { horizontal: 'left', vertical: 'top' }
                        },
                        _react2['default'].createElement(
                            _materialUi.Menu,
                            null,
                            addCellItems
                        )
                    )
                );
            }

            var auth = _mainShareHelper2['default'].getAuthorizations(pydio);
            if (compositeModel.getNode()) {
                var nodeLeaf = compositeModel.getNode().isLeaf();
                var canShare = nodeLeaf && auth.file_workspaces || !nodeLeaf && auth.folder_workspaces;
                if (!canShare) {
                    return _react2['default'].createElement(
                        'div',
                        { style: { fontSize: 13, fontWeight: 500, color: 'rgba(0, 0, 0, 0.43)', padding: 8 } },
                        m(nodeLeaf ? '227' : '228')
                    );
                }
            }

            return _react2['default'].createElement(
                'div',
                { style: this.props.style },
                _react2['default'].createElement(
                    'div',
                    { style: { paddingBottom: 20 } },
                    _react2['default'].createElement(_materialUi.RaisedButton, { label: m(264), primary: true, onTouchTap: function () {
                            compositeModel.createEmptyCell();_this2.setState({ edit: 'NEWCELL' });
                        } }),
                    addToCellMenu
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { fontSize: 13, fontWeight: 500, color: 'rgba(0, 0, 0, 0.43)' } },
                    legend
                ),
                _react2['default'].createElement(
                    _materialUi.List,
                    null,
                    cells
                )
            );
        }
    }]);

    return CellsList;
})(_react2['default'].Component);

CellsList.PropTypes = {
    pydio: _react2['default'].PropTypes.instanceOf(_pydio2['default']),
    compositeModel: _react2['default'].PropTypes.instanceOf(_CompositeModel2['default']).isRequired,
    usersInvitations: _react2['default'].PropTypes.func
};

exports['default'] = CellsList = (0, _materialUiStyles.muiThemeable)()(CellsList);

exports['default'] = CellsList;
module.exports = exports['default'];

},{"../cells/SharedUsers":7,"../main/ShareHelper":29,"./CompositeModel":12,"material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","react":"react","react-dom":"react-dom"}],10:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2020 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compositeCompositeModel = require('../composite/CompositeModel');

var _compositeCompositeModel2 = _interopRequireDefault(_compositeCompositeModel);

var _mainGenericEditor = require('../main/GenericEditor');

var _mainGenericEditor2 = _interopRequireDefault(_mainGenericEditor);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _linksPanel = require('../links/Panel');

var _linksPanel2 = _interopRequireDefault(_linksPanel);

var _linksSecureOptions = require('../links/SecureOptions');

var _linksSecureOptions2 = _interopRequireDefault(_linksSecureOptions);

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _Mailer = require('./Mailer');

var _Mailer2 = _interopRequireDefault(_Mailer);

var _CellsList = require('./CellsList');

var _CellsList2 = _interopRequireDefault(_CellsList);

var _clipboard = require('clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

var _linksPublicLinkTemplate = require('../links/PublicLinkTemplate');

var _linksPublicLinkTemplate2 = _interopRequireDefault(_linksPublicLinkTemplate);

var _linksVisibilityPanel = require('../links/VisibilityPanel');

var _linksVisibilityPanel2 = _interopRequireDefault(_linksVisibilityPanel);

var _linksLabelPanel = require('../links/LabelPanel');

var _linksLabelPanel2 = _interopRequireDefault(_linksLabelPanel);

var _materialUi = require('material-ui');

var _Pydio$requireLib = _pydio2['default'].requireLib('hoc');

var PaletteModifier = _Pydio$requireLib.PaletteModifier;

var _Pydio$requireLib2 = _pydio2['default'].requireLib("boot");

var Tooltip = _Pydio$requireLib2.Tooltip;

var _Pydio$requireLib3 = _pydio2['default'].requireLib('components');

var GenericCard = _Pydio$requireLib3.GenericCard;
var GenericLine = _Pydio$requireLib3.GenericLine;

var CompositeCard = (function (_React$Component) {
    _inherits(CompositeCard, _React$Component);

    function CompositeCard(props) {
        _classCallCheck(this, CompositeCard);

        _get(Object.getPrototypeOf(CompositeCard.prototype), 'constructor', this).call(this, props);
        this.state = {
            mode: this.props.mode || 'view',
            model: new _compositeCompositeModel2['default'](this.props.mode === 'edit')
        };
    }

    _createClass(CompositeCard, [{
        key: 'attachClipboard',
        value: function attachClipboard() {
            var pydio = this.props.pydio;

            var m = function m(id) {
                return pydio.MessageHash['share_center.' + id];
            };
            var model = this.state.model;

            this.detachClipboard();
            if (!model.getLinks().length) {
                return;
            }
            var linkModel = model.getLinks()[0];
            if (!linkModel.getLink()) {
                return;
            }
            if (this.refs['copy-button']) {
                this._clip = new _clipboard2['default'](this.refs['copy-button'], {
                    text: (function (trigger) {
                        return _mainShareHelper2['default'].buildPublicUrl(pydio, linkModel.getLink().LinkHash);
                    }).bind(this)
                });
                this._clip.on('success', (function () {
                    var _this = this;

                    this.setState({ copyMessage: m('192') }, function () {
                        setTimeout(function () {
                            _this.setState({ copyMessage: null });
                        }, 2500);
                    });
                }).bind(this));
                this._clip.on('error', (function () {
                    var _this2 = this;

                    var copyMessage = undefined;
                    if (global.navigator.platform.indexOf("Mac") === 0) {
                        copyMessage = m(144);
                    } else {
                        copyMessage = m(143);
                    }
                    this.setState({ copyMessage: copyMessage }, function () {
                        setTimeout(function () {
                            _this2.setState({ copyMessage: null });
                        }, 2500);
                    });
                }).bind(this));
            }
        }
    }, {
        key: 'detachClipboard',
        value: function detachClipboard() {
            if (this._clip) {
                this._clip.destroy();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            var _props = this.props;
            var node = _props.node;
            var mode = _props.mode;

            this.state.model.observe("update", function () {
                _this3.forceUpdate();
            });
            this.state.model.load(node, mode === 'infoPanel');
            this.attachClipboard();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.state.model.stopObserving("update");
            this.detachClipboard();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.attachClipboard();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.node && (props.node !== this.props.node || props.node.getMetadata('pydio_shares') !== this.props.node.getMetadata('pydio_shares'))) {
                this.state.model.load(props.node, props.mode === 'infoPanel');
            }
        }
    }, {
        key: 'usersInvitations',
        value: function usersInvitations(userObjects, cellModel) {
            _mainShareHelper2['default'].sendCellInvitation(this.props.node, cellModel, userObjects);
        }
    }, {
        key: 'linkInvitation',
        value: function linkInvitation(linkModel) {
            try {
                var mailData = _mainShareHelper2['default'].prepareEmail(this.props.node, linkModel);
                this.setState({ mailerData: _extends({}, mailData, { users: [], linkModel: linkModel }) });
            } catch (e) {
                alert(e.message);
            }
        }
    }, {
        key: 'dismissMailer',
        value: function dismissMailer() {
            this.setState({ mailerData: null });
        }
    }, {
        key: 'submit',
        value: function submit() {
            try {
                this.state.model.save();
            } catch (e) {
                this.props.pydio.UI.displayMessage('ERROR', e.message);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props2 = this.props;
            var node = _props2.node;
            var mode = _props2.mode;
            var pydio = _props2.pydio;
            var editorOneColumn = _props2.editorOneColumn;
            var _state = this.state;
            var model = _state.model;
            var mailerData = _state.mailerData;
            var linkTooltip = _state.linkTooltip;
            var copyMessage = _state.copyMessage;

            var m = function m(id) {
                return pydio.MessageHash['share_center.' + id];
            };

            if (mode === 'edit') {

                var publicLinkModel = undefined;
                if (model.getLinks().length) {
                    publicLinkModel = model.getLinks()[0];
                }
                var header = undefined;
                if (publicLinkModel && publicLinkModel.getLinkUuid() && publicLinkModel.isEditable()) {
                    header = _react2['default'].createElement(
                        'div',
                        null,
                        _react2['default'].createElement(_Mailer2['default'], _extends({}, mailerData, { pydio: pydio, onDismiss: this.dismissMailer.bind(this) })),
                        _react2['default'].createElement(_linksLabelPanel2['default'], { pydio: pydio, linkModel: publicLinkModel })
                    );
                } else {
                    header = _react2['default'].createElement(
                        'div',
                        { style: { fontSize: 24, padding: '26px 10px 0 ', lineHeight: '26px' } },
                        _react2['default'].createElement(_Mailer2['default'], _extends({}, mailerData, { pydio: pydio, onDismiss: this.dismissMailer.bind(this) })),
                        m(256).replace('%s', node.getLabel())
                    );
                }
                var tabs = { left: [], right: [], leftStyle: { padding: 0 } };
                tabs.right.push({
                    Label: m(250),
                    Value: "cells",
                    Component: _react2['default'].createElement(_CellsList2['default'], { pydio: pydio, compositeModel: model, usersInvitations: this.usersInvitations.bind(this), style: editorOneColumn ? { padding: 10 } : {} })
                });
                var links = model.getLinks();
                if (publicLinkModel) {
                    tabs.left.push({
                        Label: m(251),
                        Value: 'public-link',
                        Component: _react2['default'].createElement(_linksPanel2['default'], {
                            pydio: pydio,
                            compositeModel: model,
                            linkModel: links[0],
                            showMailer: _mainShareHelper2['default'].mailerSupported(pydio) ? this.linkInvitation.bind(this) : null
                        })
                    });
                    if (publicLinkModel.getLinkUuid()) {

                        var layoutData = _mainShareHelper2['default'].compileLayoutData(pydio, model);
                        var templatePane = undefined;
                        if (layoutData.length > 1) {
                            templatePane = _react2['default'].createElement(_linksPublicLinkTemplate2['default'], {
                                linkModel: publicLinkModel,
                                pydio: pydio,
                                layoutData: layoutData,
                                style: { padding: '10px 16px' },
                                readonly: model.getNode().isLeaf()
                            });
                        }
                        tabs.left.push({
                            Label: m(252),
                            Value: 'link-secure',
                            Component: _react2['default'].createElement(
                                'div',
                                null,
                                _react2['default'].createElement(_linksSecureOptions2['default'], { pydio: pydio, linkModel: links[0] }),
                                templatePane && _react2['default'].createElement(_materialUi.Divider, null),
                                templatePane
                            )
                        });
                        if (links[0].isEditable()) {
                            tabs.left.push({
                                Label: m(253),
                                Value: 'link-visibility',
                                Component: _react2['default'].createElement(_linksVisibilityPanel2['default'], { pydio: pydio, linkModel: links[0] }),
                                AlwaysLast: true
                            });
                        }
                    }
                }

                return _react2['default'].createElement(_mainGenericEditor2['default'], {
                    tabs: tabs,
                    pydio: pydio,
                    header: header,
                    saveEnabled: model.isDirty(),
                    onSaveAction: this.submit.bind(this),
                    onCloseAction: this.props.onDismiss,
                    onRevertAction: function () {
                        model.revertChanges();
                    },
                    editorOneColumn: editorOneColumn,
                    style: { width: '100%', height: null, flex: 1, minHeight: 550, color: 'rgba(0,0,0,.83)', fontSize: 13 }
                });
            } else {
                var _ret = (function () {

                    var lines = [];
                    var cells = [];
                    model.getCells().map(function (cell) {
                        cells.push(cell.getLabel());
                    });
                    if (cells.length) {
                        lines.push(_react2['default'].createElement(GenericLine, { iconClassName: 'mdi mdi-account-multiple', legend: m(254), data: cells.join(', ') }));
                    }
                    var links = model.getLinks();
                    if (links.length) {
                        var ln = links[0];
                        if (ln.hasError()) {
                            var err = ln.hasError();
                            lines.push(_react2['default'].createElement(GenericLine, { iconClassName: "mdi mdi-alert-outline", legend: "Error", data: err.Detail || err.Msg || err }));
                        } else if (ln.getLink()) {
                            var publicLink = _mainShareHelper2['default'].buildPublicUrl(pydio, ln.getLink().LinkHash, mode === 'infoPanel');
                            lines.push(_react2['default'].createElement(GenericLine, { iconClassName: 'mdi mdi-link', legend: m(121), style: { overflow: 'visible' }, dataStyle: { overflow: 'visible' }, data: _react2['default'].createElement(
                                    'div',
                                    {
                                        ref: 'copy-button',
                                        style: { cursor: 'pointer', position: 'relative' },
                                        onMouseOver: function () {
                                            _this4.setState({ linkTooltip: true });
                                        },
                                        onMouseOut: function () {
                                            _this4.setState({ linkTooltip: false });
                                        }
                                    },
                                    _react2['default'].createElement(Tooltip, {
                                        label: copyMessage ? copyMessage : m(191),
                                        horizontalPosition: "left",
                                        verticalPosition: "top",
                                        show: linkTooltip
                                    }),
                                    publicLink
                                ) }));
                        }
                    }
                    var deleteAction = function deleteAction() {
                        if (confirm(m(255))) {
                            model.stopObserving('update');
                            model.deleteAll().then(function (res) {
                                model.updateUnderlyingNode();
                            });
                        }
                    };
                    return {
                        v: _react2['default'].createElement(
                            GenericCard,
                            {
                                pydio: pydio,
                                title: pydio.MessageHash['share_center.50'],
                                onDismissAction: _this4.props.onDismiss,
                                onDeleteAction: deleteAction,
                                onEditAction: function () {
                                    pydio.Controller.fireAction('share-edit-shared');
                                },
                                headerSmall: mode === 'infoPanel'
                            },
                            lines
                        )
                    };
                })();

                if (typeof _ret === 'object') return _ret.v;
            }
        }
    }]);

    return CompositeCard;
})(_react2['default'].Component);

exports['default'] = CompositeCard = PaletteModifier({ primary1Color: '#009688' })(CompositeCard);
exports['default'] = CompositeCard;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../composite/CompositeModel":12,"../links/LabelPanel":17,"../links/Panel":19,"../links/PublicLinkTemplate":21,"../links/SecureOptions":22,"../links/VisibilityPanel":24,"../main/GenericEditor":27,"../main/ShareHelper":29,"./CellsList":9,"./Mailer":13,"clipboard":"clipboard","material-ui":"material-ui","pydio":"pydio","react":"react"}],11:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _CompositeCard = require('./CompositeCard');

var _CompositeCard2 = _interopRequireDefault(_CompositeCard);

var _pydioModelDataModel = require('pydio/model/data-model');

var _pydioModelDataModel2 = _interopRequireDefault(_pydioModelDataModel);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var React = require('react');

var _require$requireLib = require('pydio').requireLib('boot');

var ActionDialogMixin = _require$requireLib.ActionDialogMixin;

var CompositeDialog = React.createClass({
    displayName: 'CompositeDialog',

    mixins: [ActionDialogMixin],

    getDefaultProps: function getDefaultProps() {
        return {
            dialogTitle: '',
            dialogIsModal: false,
            dialogPadding: false,
            dialogSize: 'lg'
        };
    },

    propTypes: {
        pydio: React.PropTypes.instanceOf(_pydio2['default']).isRequired,
        selection: React.PropTypes.instanceOf(_pydioModelDataModel2['default']),
        readonly: React.PropTypes.bool
    },

    childContextTypes: {
        messages: React.PropTypes.object,
        getMessage: React.PropTypes.func,
        isReadonly: React.PropTypes.func
    },

    getChildContext: function getChildContext() {
        var _this = this;

        var messages = this.props.pydio.MessageHash;
        return {
            messages: messages,
            getMessage: function getMessage(messageId) {
                var namespace = arguments.length <= 1 || arguments[1] === undefined ? 'share_center' : arguments[1];

                try {
                    return messages[namespace + (namespace ? "." : "") + messageId] || messageId;
                } catch (e) {
                    return messageId;
                }
            },
            isReadonly: function isReadonly() {
                return _this.props.readonly;
            }
        };
    },

    render: function render() {
        var _props = this.props;
        var pydio = _props.pydio;
        var selection = _props.selection;

        var node = undefined;
        if (selection.getUniqueNode()) {
            node = selection.getUniqueNode();
        }

        return React.createElement(_CompositeCard2['default'], {
            editorOneColumn: this.props.editorOneColumn,
            pydio: pydio,
            mode: 'edit',
            node: node,
            onDismiss: this.props.onDismiss
        });
    }
});

exports['default'] = CompositeDialog;
module.exports = exports['default'];

},{"./CompositeCard":10,"pydio":"pydio","pydio/model/data-model":"pydio/model/data-model","react":"react"}],12:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _pydioLangObservable = require('pydio/lang/observable');

var _pydioLangObservable2 = _interopRequireDefault(_pydioLangObservable);

var _linksLinkModel = require('../links/LinkModel');

var _linksLinkModel2 = _interopRequireDefault(_linksLinkModel);

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _pydioModelCell = require('pydio/model/cell');

var _pydioModelCell2 = _interopRequireDefault(_pydioModelCell);

var _pydioHttpRestApi = require('pydio/http/rest-api');

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _Pydio$requireLib = _pydio2['default'].requireLib('boot');

var moment = _Pydio$requireLib.moment;

var CompositeModel = (function (_Observable) {
    _inherits(CompositeModel, _Observable);

    function CompositeModel() {
        var edit = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

        _classCallCheck(this, CompositeModel);

        _get(Object.getPrototypeOf(CompositeModel.prototype), 'constructor', this).call(this);
        this.cells = [];
        this.links = [];
        this.edit = edit;
    }

    _createClass(CompositeModel, [{
        key: 'emptyLink',
        value: function emptyLink(node) {
            var _this = this;

            var link = new _linksLinkModel2['default']();
            var treeNode = new _pydioHttpRestApi.TreeNode();
            var auth = _mainShareHelper2['default'].getAuthorizations(_pydio2['default'].getInstance());
            treeNode.Uuid = node.getMetadata().get('uuid');
            link.getLink().Label = node.getLabel();
            link.getLink().Description = pydio.MessageHash['share_center.257'].replace('%s', moment(new Date()).format("YYYY/MM/DD"));
            link.getLink().RootNodes.push(treeNode);
            // Template / Permissions from node
            var defaultTemplate = undefined;
            var defaultPermissions = [_pydioHttpRestApi.RestShareLinkAccessType.constructFromObject('Download')];
            if (node.isLeaf()) {
                defaultTemplate = "pydio_unique_dl";

                var _ShareHelper$nodeHasEditor = _mainShareHelper2['default'].nodeHasEditor(pydio, node);

                var preview = _ShareHelper$nodeHasEditor.preview;

                if (preview && !auth.max_downloads) {
                    defaultTemplate = "pydio_unique_strip";
                    defaultPermissions.push(_pydioHttpRestApi.RestShareLinkAccessType.constructFromObject('Preview'));
                } else if (auth.max_downloads > 0) {
                    // If DL only and auth has default max download, set it
                    link.getLink().MaxDownloads = auth.max_downloads;
                }
            } else {
                defaultTemplate = "pydio_shared_folder";
                defaultPermissions.push(_pydioHttpRestApi.RestShareLinkAccessType.constructFromObject('Preview'));
            }
            link.getLink().ViewTemplateName = defaultTemplate;
            link.getLink().Permissions = defaultPermissions;
            if (auth.max_expiration) {
                link.getLink().AccessEnd = "" + (Math.round(new Date() / 1000) + parseInt(auth.max_expiration) * 60 * 60 * 24);
            }

            link.observe("update", function () {
                _this.notify("update");
            });
            link.observe("save", function () {
                _this.updateUnderlyingNode();
            });
            return link;
        }
    }, {
        key: 'createEmptyCell',
        value: function createEmptyCell() {
            var _this2 = this;

            var cell = new _pydioModelCell2['default'](true);
            cell.setLabel(this.node.getLabel());
            cell.addRootNode(this.node);
            cell.observe("update", function () {
                _this2.notify("update");
            });
            cell.dirty = false;
            this.cells.push(cell);
            this.notify("update");
        }
    }, {
        key: 'addToExistingCell',
        value: function addToExistingCell(cellId) {
            var _this3 = this;

            var cell = new _pydioModelCell2['default'](true);
            cell.observe("update", function () {
                _this3.notify("update");
            });
            cell.load(cellId).then(function () {
                cell.addRootNode(_this3.node);
            });
            this.cells.push(cell);
        }
    }, {
        key: 'updateUnderlyingNode',
        value: function updateUnderlyingNode() {
            if (this.skipUpdateUnderlyingNode) {
                return;
            }
            pydio.getContextHolder().requireNodeReload(this.node);
        }
    }, {
        key: 'deleteLink',
        value: function deleteLink(linkModel) {
            var _this4 = this;

            linkModel.deleteLink(this.emptyLink(this.node).getLink()).then(function (res) {
                _this4.updateUnderlyingNode();
            });
        }
    }, {
        key: 'getNode',
        value: function getNode() {
            return this.node;
        }

        /**
         * @param node {TreeNode}
         * @param observeReplace bool
         */
    }, {
        key: 'load',
        value: function load(node) {
            var _this5 = this;

            var observeReplace = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            this.node = node;
            this.cells = [];
            this.links = [];
            if (node.getMetadata().get('pydio_shares')) {
                var shareMeta = JSON.parse(node.getMetadata().get('pydio_shares'));
                shareMeta.map(function (sharedWorkspace) {
                    if (sharedWorkspace.Scope === 3) {
                        // Link
                        var linkModel = new _linksLinkModel2['default']();
                        linkModel.observe("update", function () {
                            _this5.notify("update");
                        });
                        linkModel.observe("save", function () {
                            _this5.updateUnderlyingNode();
                        });
                        linkModel.load(sharedWorkspace.UUID);
                        _this5.links.push(linkModel);
                    } else if (sharedWorkspace.Scope === 2) {
                        var cell = new _pydioModelCell2['default']();
                        cell.observe("update", function () {
                            _this5.notify("update");
                        });
                        cell.load(sharedWorkspace.UUID);
                        _this5.cells.push(cell);
                    }
                });
            }
            if (this.edit && !this.links.length) {
                this.links.push(this.emptyLink(node));
            }
            if (observeReplace) {
                this.node.observe('node_replaced', function () {
                    _this5.load(_this5.node, false);
                });
            }
        }
    }, {
        key: 'loadUniqueLink',
        value: function loadUniqueLink(linkUuid, node) {
            var _this6 = this;

            this.node = node;
            var linkModel = new _linksLinkModel2['default']();
            linkModel.observe("update", function () {
                _this6.notify("update");
            });
            linkModel.load(linkUuid);
            this.links.push(linkModel);
            return linkModel;
        }
    }, {
        key: 'save',
        value: function save() {
            var _this7 = this;

            var proms = [];
            this.cells.map(function (r) {
                if (r.isDirty()) {
                    proms.push(r.save());
                }
            });
            this.links.map(function (l) {
                if (l.isDirty()) {
                    proms.push(l.save());
                }
            });
            // Wait that all save are finished
            Promise.all(proms).then(function () {
                // Remove cells that don't have this node anymore
                var nodeId = _this7.node.getMetadata().get('uuid');
                _this7.cells = _this7.cells.filter(function (r) {
                    return r.hasRootNode(nodeId);
                });
                _this7.updateUnderlyingNode();
            })['catch'](function (e) {
                _this7.updateUnderlyingNode();
            });
        }
    }, {
        key: 'deleteAll',
        value: function deleteAll() {
            var nodeUuid = this.node.getMetadata().get('uuid');
            var p = [];
            this.cells.map(function (r) {
                r.removeRootNode(nodeUuid);
                p.push(r.save());
            });
            this.links.map(function (l) {
                p.push(l.deleteLink());
            });
            return Promise.all(p);
        }
    }, {
        key: 'removeNewCell',
        value: function removeNewCell(cell) {
            this.cells = this.cells.filter(function (r) {
                return r !== cell;
            });
            this.notify("update");
        }
    }, {
        key: 'revertChanges',
        value: function revertChanges() {
            // Remove empty cells
            this.cells = this.cells.filter(function (r) {
                return r.getUuid();
            });
            this.cells.map(function (r) {
                if (r.isDirty()) {
                    r.revertChanges();
                }
            });
            this.links.map(function (l) {
                if (l.isDirty()) {
                    l.revertChanges();
                }
            });
            this.notify('update');
        }
    }, {
        key: 'isDirty',
        value: function isDirty() {
            return this.cells.filter(function (r) {
                return r.isDirty();
            }).length || this.links.filter(function (l) {
                return l.isDirty();
            }).length;
        }
    }, {
        key: 'stopObserving',
        value: function stopObserving(event) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            this.cells.map(function (cell) {
                cell.stopObserving("update");
            });
            this.links.map(function (link) {
                link.stopObserving("update");
            });
            _get(Object.getPrototypeOf(CompositeModel.prototype), 'stopObserving', this).call(this, event, callback);
        }
    }, {
        key: 'getCells',
        value: function getCells() {
            var _this8 = this;

            if (this.node) {
                var _ret = (function () {
                    var nodeId = _this8.node.getMetadata().get('uuid');
                    return {
                        v: _this8.cells.filter(function (r) {
                            return r.hasRootNode(nodeId);
                        })
                    };
                })();

                if (typeof _ret === 'object') return _ret.v;
            } else {
                return this.cells;
            }
        }
    }, {
        key: 'getLinks',
        value: function getLinks() {
            return this.links;
        }
    }]);

    return CompositeModel;
})(_pydioLangObservable2['default']);

exports['default'] = CompositeModel;
module.exports = exports['default'];

},{"../links/LinkModel":18,"../main/ShareHelper":29,"pydio":"pydio","pydio/http/rest-api":"pydio/http/rest-api","pydio/lang/observable":"pydio/lang/observable","pydio/model/cell":"pydio/model/cell"}],13:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydioHttpResourcesManager = require('pydio/http/resources-manager');

var _pydioHttpResourcesManager2 = _interopRequireDefault(_pydioHttpResourcesManager);

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _materialUi = require('material-ui');

var _pydioHttpRestApi = require('pydio/http/rest-api');

var Mailer = (function (_React$Component) {
    _inherits(Mailer, _React$Component);

    function Mailer(props) {
        _classCallCheck(this, Mailer);

        _get(Object.getPrototypeOf(Mailer.prototype), 'constructor', this).call(this, props);
        this.state = { mailerData: null };
    }

    _createClass(Mailer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this = this;

            var subject = newProps.subject;
            var message = newProps.message;
            var users = newProps.users;
            var linkModel = newProps.linkModel;
            var templateId = newProps.templateId;
            var templateData = newProps.templateData;

            if (subject || templateId) {
                if (_mainShareHelper2['default'].forceMailerOldSchool()) {
                    var encSubject = encodeURIComponent(subject);
                    location.href = "mailto:custom-email@domain.com?Subject=" + encSubject + "&Body=" + message;
                    return;
                }
                //const linkData = hash ? this.state.model.getLinkData(hash) : undefined;
                _pydioHttpResourcesManager2['default'].loadClassesAndApply(['PydioMailer'], function () {
                    _this.setState({
                        mailerData: _extends({}, newProps, {
                            enableIdentification: linkModel && linkModel.getLink().TargetUsers,
                            identifiedOnly: linkModel && linkModel.getLink().RestrictToTargetUsers,
                            crippleIdentificationKeys: true
                        })
                    });
                });
            } else {
                this.setState({ mailerData: null });
            }
        }
    }, {
        key: 'toggleMailerData',
        value: function toggleMailerData(data) {
            this.setState({ mailerData: _extends({}, this.state.mailerData, data) });
        }
    }, {
        key: 'dismissMailer',
        value: function dismissMailer() {
            this.props.onDismiss();
        }
    }, {
        key: 'mailerProcessPost',
        value: function mailerProcessPost(Email, users, subject, message, link, callback) {
            var mailerData = this.state.mailerData;
            var crippleIdentificationKeys = mailerData.crippleIdentificationKeys;
            var identifiedOnly = mailerData.identifiedOnly;
            var linkModel = mailerData.linkModel;

            var linkObject = linkModel.getLink();
            if (!linkObject.TargetUsers) {
                linkObject.TargetUsers = {};
            }
            linkObject.RestrictToTargetUsers = identifiedOnly;

            var shareMails = {};
            Object.keys(users).forEach(function (u) {
                var k = crippleIdentificationKeys ? Math.random().toString(36).substring(7) : u;
                linkObject.TargetUsers[k] = _pydioHttpRestApi.RestShareLinkTargetUser.constructFromObject({ Display: users[u].getLabel(), DownloadCount: 0 });
                shareMails[k] = u;
            });
            linkModel.updateLink(linkObject);
            linkModel.save().then(function () {
                var email = new Email();
                var originalLink = linkModel.getPublicUrl();
                var regexp = new RegExp(originalLink, 'g');
                Object.keys(shareMails).forEach(function (u) {
                    var newLink = originalLink + '?u=' + u;
                    var newMessage = message.replace(regexp, newLink);
                    email.addTarget(shareMails[u], subject, newMessage);
                });
                email.post(function (res) {
                    callback(res);
                });
            });
        }
    }, {
        key: 'getMessage',
        value: function getMessage(key) {
            var namespace = arguments.length <= 1 || arguments[1] === undefined ? 'share_center' : arguments[1];

            return this.props.pydio.MessageHash[namespace + (namespace ? '.' : '') + key];
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.state.mailerData) {
                var mailerData = this.state.mailerData;

                var customizeMessagePane = undefined;
                if (false && mailerData.linkModel) {
                    var style = mailerData.enableIdentification ? { padding: '10px 20px', backgroundColor: '#ECEFF1', fontSize: 14 } : { padding: '10px 20px 0', fontSize: 14 };
                    var letUserChooseCripple = this.props.pydio.getPluginConfigs('action.share').get('EMAIL_PERSONAL_LINK_SEND_CLEAR');
                    customizeMessagePane = _react2['default'].createElement(
                        'div',
                        { style: style },
                        _react2['default'].createElement(_materialUi.Toggle, { label: this.getMessage(235), toggled: mailerData.enableIdentification, onToggle: function (e, c) {
                                _this2.toggleMailerData({ enableIdentification: c });
                            } }),
                        mailerData.enableIdentification && _react2['default'].createElement(_materialUi.Toggle, { label: "-- " + this.getMessage(236), toggled: mailerData.identifiedOnly, onToggle: function (e, c) {
                                _this2.toggleMailerData({ identifiedOnly: c });
                            } }),
                        mailerData.enableIdentification && letUserChooseCripple && _react2['default'].createElement(_materialUi.Toggle, { label: "-- " + this.getMessage(237), toggled: mailerData.crippleIdentificationKeys, onToggle: function (e, c) {
                                _this2.toggleMailerData({ crippleIdentificationKeys: c });
                            } })
                    );
                }
                return _react2['default'].createElement(PydioMailer.Pane, _extends({}, mailerData, {
                    onDismiss: this.dismissMailer.bind(this),
                    overlay: true,
                    className: 'share-center-mailer',
                    panelTitle: this.props.pydio.MessageHash["share_center.45"],
                    additionalPaneTop: customizeMessagePane,
                    processPost: mailerData.enableIdentification ? this.mailerProcessPost.bind(this) : null,
                    style: { width: 420, margin: '0 auto' }
                }));
            } else {
                return null;
            }
        }
    }]);

    return Mailer;
})(_react2['default'].Component);

exports['default'] = Mailer;
module.exports = exports['default'];

},{"../main/ShareHelper":29,"material-ui":"material-ui","pydio/http/resources-manager":"pydio/http/resources-manager","pydio/http/rest-api":"pydio/http/rest-api","react":"react"}],14:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compositeCompositeModel = require('../composite/CompositeModel');

var _compositeCompositeModel2 = _interopRequireDefault(_compositeCompositeModel);

var _mainGenericEditor = require('../main/GenericEditor');

var _mainGenericEditor2 = _interopRequireDefault(_mainGenericEditor);

var _linksPanel = require('../links/Panel');

var _linksPanel2 = _interopRequireDefault(_linksPanel);

var _linksSecureOptions = require('../links/SecureOptions');

var _linksSecureOptions2 = _interopRequireDefault(_linksSecureOptions);

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _Mailer = require('./Mailer');

var _Mailer2 = _interopRequireDefault(_Mailer);

var _linksPublicLinkTemplate = require('../links/PublicLinkTemplate');

var _linksPublicLinkTemplate2 = _interopRequireDefault(_linksPublicLinkTemplate);

var _linksVisibilityPanel = require('../links/VisibilityPanel');

var _linksVisibilityPanel2 = _interopRequireDefault(_linksVisibilityPanel);

var _linksLabelPanel = require('../links/LabelPanel');

var _linksLabelPanel2 = _interopRequireDefault(_linksLabelPanel);

var _materialUi = require('material-ui');

var _require$requireLib = require('pydio').requireLib('hoc');

var PaletteModifier = _require$requireLib.PaletteModifier;

var SimpleLinkCard = (function (_React$Component) {
    _inherits(SimpleLinkCard, _React$Component);

    function SimpleLinkCard(props) {
        _classCallCheck(this, SimpleLinkCard);

        props.editorOneColumn = true;
        _get(Object.getPrototypeOf(SimpleLinkCard.prototype), 'constructor', this).call(this, props);
        var model = new _compositeCompositeModel2['default'](true);
        model.skipUpdateUnderlyingNode = true;
        this.state = {
            mode: this.props.mode || 'view',
            model: model
        };
    }

    _createClass(SimpleLinkCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            var _props = this.props;
            var node = _props.node;
            var linkUuid = _props.linkUuid;
            var onRemoveLink = _props.onRemoveLink;
            var model = this.state.model;

            model.observe("update", function () {
                _this.forceUpdate();
            });
            var linkModel = model.loadUniqueLink(linkUuid, node);
            linkModel.observeOnce("delete", function () {
                if (onRemoveLink) onRemoveLink();
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.state.model.stopObserving("update");
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.LinkUuid && props.LinkUuid !== this.props.LinkUuid) {
                this.state.model.loadUniqueLink(props.LinkUuid, props.node);
            }
        }
    }, {
        key: 'linkInvitation',
        value: function linkInvitation(linkModel) {
            try {
                var mailData = _mainShareHelper2['default'].prepareEmail(this.props.node, linkModel);
                this.setState({ mailerData: _extends({}, mailData, { users: [], linkModel: linkModel }) });
            } catch (e) {
                alert(e.message);
            }
        }
    }, {
        key: 'dismissMailer',
        value: function dismissMailer() {
            this.setState({ mailerData: null });
        }
    }, {
        key: 'submit',
        value: function submit() {
            var model = this.state.model;

            try {
                var publicLinkModel = undefined;
                if (model.getLinks().length) {
                    publicLinkModel = model.getLinks()[0];
                    publicLinkModel.save();
                }
            } catch (e) {
                this.props.pydio.UI.displayMessage('ERROR', e.message);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var node = _props2.node;
            var pydio = _props2.pydio;
            var editorOneColumn = _props2.editorOneColumn;
            var _state = this.state;
            var model = _state.model;
            var mailerData = _state.mailerData;

            var m = function m(id) {
                return pydio.MessageHash['share_center.' + id];
            };

            var publicLinkModel = undefined;
            if (model.getLinks().length) {
                publicLinkModel = model.getLinks()[0];
            }
            var header = undefined;
            if (publicLinkModel && publicLinkModel.getLinkUuid() && publicLinkModel.isEditable()) {
                header = _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_Mailer2['default'], _extends({}, mailerData, { pydio: pydio, onDismiss: this.dismissMailer.bind(this) })),
                    _react2['default'].createElement(_linksLabelPanel2['default'], { pydio: pydio, linkModel: publicLinkModel })
                );
            } else {
                header = _react2['default'].createElement(
                    'div',
                    { style: { fontSize: 24, padding: '26px 10px 0 ', lineHeight: '26px' } },
                    _react2['default'].createElement(_Mailer2['default'], _extends({}, mailerData, { pydio: pydio, onDismiss: this.dismissMailer.bind(this) })),
                    m(256).replace('%s', node.getLabel())
                );
            }
            var tabs = { left: [], right: [], leftStyle: { padding: 0 } };
            var links = model.getLinks();
            if (publicLinkModel) {
                tabs.left.push({
                    Label: m(251),
                    Value: 'public-link',
                    Component: _react2['default'].createElement(_linksPanel2['default'], {
                        pydio: pydio,
                        compositeModel: model,
                        linkModel: links[0],
                        showMailer: _mainShareHelper2['default'].mailerSupported(pydio) ? this.linkInvitation.bind(this) : null
                    })
                });
                if (publicLinkModel.getLinkUuid()) {

                    var layoutData = _mainShareHelper2['default'].compileLayoutData(pydio, model);
                    var templatePane = undefined;
                    if (layoutData.length > 1) {
                        templatePane = _react2['default'].createElement(_linksPublicLinkTemplate2['default'], {
                            linkModel: publicLinkModel,
                            pydio: pydio,
                            layoutData: layoutData,
                            style: { padding: '10px 16px' },
                            readonly: model.getNode().isLeaf()
                        });
                    }
                    tabs.left.push({
                        Label: m(252),
                        Value: 'link-secure',
                        Component: _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(_linksSecureOptions2['default'], { pydio: pydio, linkModel: links[0] }),
                            templatePane && _react2['default'].createElement(_materialUi.Divider, null),
                            templatePane
                        )
                    });
                    tabs.left.push({
                        Label: m(253),
                        Value: 'link-visibility',
                        Component: _react2['default'].createElement(_linksVisibilityPanel2['default'], { pydio: pydio, linkModel: links[0] }),
                        AlwaysLast: true
                    });
                }
            }

            return _react2['default'].createElement(_mainGenericEditor2['default'], {
                tabs: tabs,
                pydio: pydio,
                header: header,
                saveEnabled: model.isDirty(),
                onSaveAction: this.submit.bind(this),
                onCloseAction: this.props.onDismiss,
                onRevertAction: function () {
                    model.revertChanges();
                },
                editorOneColumn: editorOneColumn,
                style: { width: '100%', height: null, flex: 1, minHeight: 550, color: 'rgba(0,0,0,.83)', fontSize: 13 }
            });
        }
    }]);

    return SimpleLinkCard;
})(_react2['default'].Component);

exports['default'] = SimpleLinkCard = PaletteModifier({ primary1Color: '#009688' })(SimpleLinkCard);
exports['default'] = SimpleLinkCard;
module.exports = exports['default'];

},{"../composite/CompositeModel":12,"../links/LabelPanel":17,"../links/Panel":19,"../links/PublicLinkTemplate":21,"../links/SecureOptions":22,"../links/VisibilityPanel":24,"../main/GenericEditor":27,"../main/ShareHelper":29,"./Mailer":13,"material-ui":"material-ui","pydio":"pydio","react":"react"}],15:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cellsCreateCellDialog = require('./cells/CreateCellDialog');

var _cellsCreateCellDialog2 = _interopRequireDefault(_cellsCreateCellDialog);

var _cellsEditCellDialog = require('./cells/EditCellDialog');

var _cellsEditCellDialog2 = _interopRequireDefault(_cellsEditCellDialog);

var _cellsCellCard = require('./cells/CellCard');

var _cellsCellCard2 = _interopRequireDefault(_cellsCellCard);

var _compositeSimpleLinkCard = require('./composite/SimpleLinkCard');

var _compositeSimpleLinkCard2 = _interopRequireDefault(_compositeSimpleLinkCard);

var _mainInfoPanel = require('./main/InfoPanel');

var _mainInfoPanel2 = _interopRequireDefault(_mainInfoPanel);

var _compositeCompositeDialog = require('./composite/CompositeDialog');

var _compositeCompositeDialog2 = _interopRequireDefault(_compositeCompositeDialog);

var _linksLinkModel = require('./links/LinkModel');

var _linksLinkModel2 = _interopRequireDefault(_linksLinkModel);

var _mainShareHelper = require('./main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _listsShareView = require("./lists/ShareView");

exports.CreateCellDialog = _cellsCreateCellDialog2['default'];
exports.EditCellDialog = _cellsEditCellDialog2['default'];
exports.CellCard = _cellsCellCard2['default'];
exports.InfoPanel = _mainInfoPanel2['default'];
exports.CompositeDialog = _compositeCompositeDialog2['default'];
exports.LinkModel = _linksLinkModel2['default'];
exports.ShareHelper = _mainShareHelper2['default'];
exports.ShareViewModal = _listsShareView.ShareViewModal;
exports.ShareView = _listsShareView.ShareView;
exports.SimpleLinkCard = _compositeSimpleLinkCard2['default'];

},{"./cells/CellCard":2,"./cells/CreateCellDialog":3,"./cells/EditCellDialog":4,"./composite/CompositeDialog":11,"./composite/SimpleLinkCard":14,"./links/LinkModel":18,"./lists/ShareView":25,"./main/InfoPanel":28,"./main/ShareHelper":29}],16:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var _TargetedUsers = require('./TargetedUsers');

var _TargetedUsers2 = _interopRequireDefault(_TargetedUsers);

var _materialUi = require('material-ui');

var _qrcodeReact = require('qrcode.react');

var _qrcodeReact2 = _interopRequireDefault(_qrcodeReact);

var _clipboard = require('clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

var _mainActionButton = require('../main/ActionButton');

var _mainActionButton2 = _interopRequireDefault(_mainActionButton);

var _pydioUtilPath = require('pydio/util/path');

var _pydioUtilPath2 = _interopRequireDefault(_pydioUtilPath);

var _pydioUtilLang = require('pydio/util/lang');

var _pydioUtilLang2 = _interopRequireDefault(_pydioUtilLang);

var _materialUiStyles = require('material-ui/styles');

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _LinkModel = require('./LinkModel');

var _LinkModel2 = _interopRequireDefault(_LinkModel);

var _Pydio$requireLib = _pydio2['default'].requireLib("boot");

var Tooltip = _Pydio$requireLib.Tooltip;

var PublicLinkField = _react2['default'].createClass({
    displayName: 'PublicLinkField',

    propTypes: {
        linkModel: _react2['default'].PropTypes.instanceOf(_LinkModel2['default']),
        editAllowed: _react2['default'].PropTypes.bool,
        onChange: _react2['default'].PropTypes.func,
        showMailer: _react2['default'].PropTypes.func
    },
    getInitialState: function getInitialState() {
        return { editLink: false, copyMessage: '', showQRCode: false };
    },
    toggleEditMode: function toggleEditMode() {
        var _props = this.props;
        var linkModel = _props.linkModel;
        var pydio = _props.pydio;

        if (this.state.editLink && this.state.customLink) {
            var auth = _mainShareHelper2['default'].getAuthorizations(pydio);
            if (auth.hash_min_length && this.state.customLink.length < auth.hash_min_length) {
                pydio.UI.displayMessage('ERROR', this.props.getMessage('223').replace('%s', auth.hash_min_length));
                return;
            }
            linkModel.setCustomLink(this.state.customLink);
            linkModel.save();
        }
        this.setState({ editLink: !this.state.editLink, customLink: undefined });
    },
    changeLink: function changeLink(event) {
        var value = event.target.value;
        value = _pydioUtilLang2['default'].computeStringSlug(value);
        this.setState({ customLink: value });
    },
    clearCopyMessage: function clearCopyMessage() {
        global.setTimeout((function () {
            this.setState({ copyMessage: '' });
        }).bind(this), 5000);
    },

    attachClipboard: function attachClipboard() {
        var _props2 = this.props;
        var linkModel = _props2.linkModel;
        var pydio = _props2.pydio;

        this.detachClipboard();
        if (this.refs['copy-button']) {
            this._clip = new _clipboard2['default'](this.refs['copy-button'], {
                text: (function (trigger) {
                    return _mainShareHelper2['default'].buildPublicUrl(pydio, linkModel.getLink().LinkHash);
                }).bind(this)
            });
            this._clip.on('success', (function () {
                this.setState({ copyMessage: this.props.getMessage('192') }, this.clearCopyMessage);
            }).bind(this));
            this._clip.on('error', (function () {
                var copyMessage = undefined;
                if (global.navigator.platform.indexOf("Mac") === 0) {
                    copyMessage = this.props.getMessage('144');
                } else {
                    copyMessage = this.props.getMessage('143');
                }
                this.refs['public-link-field'].focus();
                this.setState({ copyMessage: copyMessage }, this.clearCopyMessage);
            }).bind(this));
        }
    },
    detachClipboard: function detachClipboard() {
        if (this._clip) {
            this._clip.destroy();
        }
    },

    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        this.attachClipboard();
    },

    componentDidMount: function componentDidMount() {
        this.attachClipboard();
    },

    componentWillUnmount: function componentWillUnmount() {
        this.detachClipboard();
    },

    openMailer: function openMailer() {
        this.props.showMailer(this.props.linkModel);
    },

    toggleQRCode: function toggleQRCode() {
        this.setState({ showQRCode: !this.state.showQRCode });
    },

    render: function render() {
        var _this = this;

        var _props3 = this.props;
        var linkModel = _props3.linkModel;
        var pydio = _props3.pydio;

        var publicLink = _mainShareHelper2['default'].buildPublicUrl(pydio, linkModel.getLink().LinkHash);
        var auth = _mainShareHelper2['default'].getAuthorizations(pydio);
        var editAllowed = this.props.editAllowed && auth.editable_hash && !this.props.isReadonly() && linkModel.isEditable();
        if (this.state.editLink && editAllowed) {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { style: { display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '0 6px', margin: '0 -6px', borderRadius: 2 } },
                    _react2['default'].createElement(
                        'span',
                        { style: { fontSize: 16, color: 'rgba(0,0,0,0.4)', display: 'inline-block', maxWidth: 160, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
                        _pydioUtilPath2['default'].getDirname(publicLink) + '/ '
                    ),
                    _react2['default'].createElement(_materialUi.TextField, { style: { flex: 1, marginRight: 10, marginLeft: 10 }, onChange: this.changeLink, value: this.state.customLink !== undefined ? this.state.customLink : linkModel.getLink().LinkHash }),
                    _react2['default'].createElement(_mainActionButton2['default'], { mdiIcon: 'check', callback: this.toggleEditMode })
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { textAlign: 'center', fontSize: 13, color: 'rgba(0,0,0,0.43)', paddingTop: 16 } },
                    this.props.getMessage('194')
                )
            );
        } else {
            var _state = this.state;
            var copyMessage = _state.copyMessage;
            var linkTooltip = _state.linkTooltip;

            var setHtml = (function () {
                return { __html: this.state.copyMessage };
            }).bind(this);
            var actionLinks = [],
                qrCode = undefined;
            var muiTheme = this.props.muiTheme;

            actionLinks.push(_react2['default'].createElement(
                'div',
                {
                    key: "copy",
                    ref: 'copy-button',
                    style: { position: 'relative', display: 'inline-block', width: 36, height: 36, padding: '8px 10px', margin: '0 6px', cursor: 'pointer', borderRadius: '50%', border: '1px solid ' + muiTheme.palette.primary1Color },
                    onMouseOver: function () {
                        _this.setState({ linkTooltip: true });
                    },
                    onMouseOut: function () {
                        _this.setState({ linkTooltip: false });
                    }
                },
                _react2['default'].createElement(Tooltip, {
                    label: copyMessage ? copyMessage : this.props.getMessage('191'),
                    horizontalPosition: "center",
                    verticalPosition: "bottom",
                    show: linkTooltip
                }),
                _react2['default'].createElement('span', { className: 'copy-link-button mdi mdi-content-copy', style: { color: muiTheme.palette.primary1Color } })
            ));

            if (this.props.showMailer) {
                actionLinks.push(_react2['default'].createElement(_mainActionButton2['default'], { key: 'outline', callback: this.openMailer, mdiIcon: 'email-outline', messageId: '45' }));
            }
            if (editAllowed) {
                actionLinks.push(_react2['default'].createElement(_mainActionButton2['default'], { key: 'pencil', callback: this.toggleEditMode, mdiIcon: 'pencil', messageId: "193" }));
            }
            if (_mainShareHelper2['default'].qrcodeEnabled()) {
                actionLinks.push(_react2['default'].createElement(_mainActionButton2['default'], { key: 'qrcode', callback: this.toggleQRCode, mdiIcon: 'qrcode', messageId: '94' }));
            }
            if (actionLinks.length) {
                actionLinks = _react2['default'].createElement(
                    'div',
                    { style: { display: 'flex', margin: '20px 0 10px' } },
                    _react2['default'].createElement('span', { style: { flex: 1 } }),
                    actionLinks,
                    _react2['default'].createElement('span', { style: { flex: 1 } })
                );
            } else {
                actionLinks = null;
            }
            if (this.state.showQRCode) {
                qrCode = _react2['default'].createElement(
                    _materialUi.Paper,
                    { zDepth: 1, style: { width: 120, paddingTop: 10, overflow: 'hidden', margin: '0 auto', height: 120, textAlign: 'center' } },
                    _react2['default'].createElement(_qrcodeReact2['default'], { size: 100, value: publicLink, level: 'Q' })
                );
            } else {
                qrCode = _react2['default'].createElement(_materialUi.Paper, { zDepth: 0, style: { width: 120, overflow: 'hidden', margin: '0 auto', height: 0, textAlign: 'center' } });
            }
            return _react2['default'].createElement(
                _materialUi.Paper,
                { zDepth: 0, rounded: false, className: 'public-link-container' },
                _react2['default'].createElement(
                    'div',
                    { style: { display: 'flex', alignItems: 'center' } },
                    _react2['default'].createElement(_materialUi.TextField, {
                        type: 'text',
                        name: 'Link',
                        ref: 'public-link-field',
                        value: publicLink,
                        onFocus: function (e) {
                            e.target.select();
                        },
                        fullWidth: true,
                        style: { height: 40 },
                        inputStyle: { textAlign: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, padding: '0 5px' },
                        underlineStyle: { borderColor: '#f5f5f5', textDecoration: linkModel.isExpired() ? 'line-through' : null },
                        underlineFocusStyle: { bottom: 0 }
                    })
                ),
                false && this.props.linkData.target_users && _react2['default'].createElement(_TargetedUsers2['default'], this.props),
                actionLinks,
                qrCode
            );
        }
    }
});

exports['default'] = PublicLinkField = (0, _materialUiStyles.muiThemeable)()(PublicLinkField);
exports['default'] = PublicLinkField = (0, _ShareContextConsumer2['default'])(PublicLinkField);
exports['default'] = PublicLinkField;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../ShareContextConsumer":1,"../main/ActionButton":26,"../main/ShareHelper":29,"./LinkModel":18,"./TargetedUsers":23,"clipboard":"clipboard","material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","pydio/util/lang":"pydio/util/lang","pydio/util/path":"pydio/util/path","qrcode.react":"qrcode.react","react":"react"}],17:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _LinkModel = require('./LinkModel');

var _LinkModel2 = _interopRequireDefault(_LinkModel);

var _Pydio$requireLib = _pydio2['default'].requireLib('hoc');

var ModernTextField = _Pydio$requireLib.ModernTextField;

var LabelPanel = (function (_React$Component) {
    _inherits(LabelPanel, _React$Component);

    function LabelPanel() {
        _classCallCheck(this, LabelPanel);

        _get(Object.getPrototypeOf(LabelPanel.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(LabelPanel, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var pydio = _props.pydio;
            var linkModel = _props.linkModel;

            var m = function m(id) {
                return pydio.MessageHash['share_center.' + id];
            };
            var link = linkModel.getLink();
            var updateLabel = function updateLabel(e, v) {
                link.Label = v;
                linkModel.updateLink(link);
            };

            var updateDescription = function updateDescription(e, v) {
                link.Description = v;
                linkModel.updateLink(link);
            };

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(ModernTextField, { floatingLabelText: m(265), value: link.Label, onChange: updateLabel, fullWidth: true }),
                _react2['default'].createElement(ModernTextField, { floatingLabelText: m(266), value: link.Description, onChange: updateDescription, fullWidth: true })
            );
        }
    }]);

    return LabelPanel;
})(_react2['default'].Component);

LabelPanel.PropTypes = {

    pydio: _react2['default'].PropTypes.instanceOf(_pydio2['default']),
    linkModel: _react2['default'].PropTypes.instanceOf(_LinkModel2['default'])

};

exports['default'] = LabelPanel;
module.exports = exports['default'];

},{"./LinkModel":18,"pydio":"pydio","react":"react"}],18:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var _pydioLangObservable = require('pydio/lang/observable');

var _pydioLangObservable2 = _interopRequireDefault(_pydioLangObservable);

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _pydioHttpRestApi = require('pydio/http/rest-api');

var _pydioUtilPass = require('pydio/util/pass');

var _pydioUtilPass2 = _interopRequireDefault(_pydioUtilPass);

var LinkModel = (function (_Observable) {
    _inherits(LinkModel, _Observable);

    function LinkModel() {
        _classCallCheck(this, LinkModel);

        _get(Object.getPrototypeOf(LinkModel.prototype), 'constructor', this).call(this);
        this.link = new _pydioHttpRestApi.RestShareLink();
        this.link.Permissions = [_pydioHttpRestApi.RestShareLinkAccessType.constructFromObject("Preview"), _pydioHttpRestApi.RestShareLinkAccessType.constructFromObject("Download")];
        this.link.Policies = [];
        this.link.PoliciesContextEditable = true;
        this.link.RootNodes = [];
        this.ValidPassword = true;
        this.loadError = null;
    }

    _createClass(LinkModel, [{
        key: 'hasError',
        value: function hasError() {
            return this.loadError;
        }
    }, {
        key: 'isEditable',
        value: function isEditable() {
            return this.link.PoliciesContextEditable;
        }
    }, {
        key: 'isDirty',
        value: function isDirty() {
            return this.dirty;
        }
    }, {
        key: 'getLinkUuid',
        value: function getLinkUuid() {
            return this.link.Uuid;
        }

        /**
         * @return {RestShareLink}
         */
    }, {
        key: 'getLink',
        value: function getLink() {
            return this.link;
        }

        /**
         * @return {String}
         */
    }, {
        key: 'getPublicUrl',
        value: function getPublicUrl() {
            return _mainShareHelper2['default'].buildPublicUrl(pydio, this.link.LinkHash);
        }

        /**
         * @param link {RestShareLink}
         */
    }, {
        key: 'updateLink',
        value: function updateLink(link) {
            this.link = link;
            this.notifyDirty();
        }
    }, {
        key: 'notifyDirty',
        value: function notifyDirty() {
            this.dirty = true;
            this.notify('update');
        }
    }, {
        key: 'revertChanges',
        value: function revertChanges() {
            if (this.originalLink) {
                this.link = this.clone(this.originalLink);
                this.dirty = false;
                this.updatePassword = this.createPassword = null;
                this.ValidPassword = true;
                this.notify('update');
            }
        }
    }, {
        key: 'hasPermission',
        value: function hasPermission(permissionValue) {
            return this.link.Permissions.filter(function (perm) {
                return perm === permissionValue;
            }).length > 0;
        }
    }, {
        key: 'isExpired',
        value: function isExpired() {
            if (this.link.MaxDownloads && parseInt(this.link.CurrentDownloads) >= parseInt(this.link.MaxDownloads)) {
                return true;
            }
            if (this.link.AccessEnd) {
                // TODO
            }
            return false;
        }

        /**
         *
         * @param uuid string
         * @return {Promise.<RestShareLink>}
         */
    }, {
        key: 'load',
        value: function load(uuid) {
            var _this = this;

            var api = new _pydioHttpRestApi.ShareServiceApi(_pydioHttpApi2['default'].getRestClient());
            return api.getShareLink(uuid).then(function (result) {
                _this.link = result;
                if (!_this.link.Permissions) {
                    _this.link.Permissions = [];
                }
                if (!_this.link.Policies) {
                    _this.link.Policies = [];
                }
                if (!_this.link.RootNodes) {
                    _this.link.RootNodes = [];
                }
                _this.originalLink = _this.clone(_this.link);
                _this.notify("update");
            })['catch'](function (err) {
                _this.loadError = err;
                _this.notify("update");
            });
        }
    }, {
        key: 'setCreatePassword',
        value: function setCreatePassword(password) {
            var _this2 = this;

            if (password) {
                _pydioUtilPass2['default'].checkPasswordStrength(password, function (ok, msg) {
                    _this2.ValidPassword = ok;
                    _this2.ValidPasswordMessage = msg;
                });
            } else {
                this.ValidPassword = true;
            }
            this.createPassword = password;
            this.link.PasswordRequired = true;
            this.notifyDirty();
        }
    }, {
        key: 'setUpdatePassword',
        value: function setUpdatePassword(password) {
            var _this3 = this;

            if (password) {
                _pydioUtilPass2['default'].checkPasswordStrength(password, function (ok, msg) {
                    _this3.ValidPassword = ok;
                    _this3.ValidPasswordMessage = msg;
                });
            } else {
                this.ValidPassword = true;
            }
            this.updatePassword = password;
            this.notifyDirty();
        }
    }, {
        key: 'setCustomLink',
        value: function setCustomLink(newLink) {
            this.customLink = newLink;
        }

        /**
         *
         * @return {*|Promise.<RestShareLink>}
         */
    }, {
        key: 'save',
        value: function save() {
            var _this4 = this;

            if (!this.ValidPassword) {
                throw new Error(this.ValidPasswordMessage);
            }
            var api = new _pydioHttpRestApi.ShareServiceApi(_pydioHttpApi2['default'].getRestClient());
            var request = new _pydioHttpRestApi.RestPutShareLinkRequest();
            if (this.createPassword) {
                request.PasswordEnabled = true;
                request.CreatePassword = this.createPassword;
            } else if (this.updatePassword) {
                request.PasswordEnabled = true;
                if (!this.link.PasswordRequired) {
                    request.CreatePassword = this.updatePassword;
                } else {
                    request.UpdatePassword = this.updatePassword;
                }
            } else {
                request.PasswordEnabled = this.link.PasswordRequired;
            }
            if (_mainShareHelper2['default'].getAuthorizations(pydio).password_mandatory && !request.PasswordEnabled) {
                throw new Error('You cannot disable passowrd on this link');
            }
            if (this.customLink && this.customLink !== this.link.LinkHash) {
                request.UpdateCustomHash = this.customLink;
            }
            request.ShareLink = this.link;
            return api.putShareLink(request).then(function (result) {
                _this4.link = result;
                _this4.dirty = false;
                _this4.originalLink = _this4.clone(_this4.link);
                _this4.updatePassword = _this4.createPassword = _this4.customLink = null;
                _this4.ValidPassword = true;
                _this4.notify('update');
                _this4.notify('save');
            })['catch'](function (err) {
                var msg = err.Detail || err.message || err;
                Pydio.getInstance().UI.displayMessage('ERROR', msg);
            });
        }

        /**
         *
         * @return {*|Promise.<RestShareLink>}
         */
    }, {
        key: 'deleteLink',
        value: function deleteLink(emptyLink) {
            var _this5 = this;

            var api = new _pydioHttpRestApi.ShareServiceApi(_pydioHttpApi2['default'].getRestClient());
            return api.deleteShareLink(this.link.Uuid).then(function (result) {
                _this5.link = emptyLink;
                _this5.dirty = false;
                _this5.updatePassword = _this5.createPassword = _this5.customLink = null;
                _this5.notify('update');
                _this5.notify('delete');
            })['catch'](function (err) {
                var msg = err.Detail || err.message || err;
                pydio.UI.displayMessage('ERROR', msg);
            });
        }

        /**
         * @param link {RestShareLink}
         */
    }, {
        key: 'clone',
        value: function clone(link) {
            return _pydioHttpRestApi.RestShareLink.constructFromObject(JSON.parse(JSON.stringify(link)));
        }
    }]);

    return LinkModel;
})(_pydioLangObservable2['default']);

exports['default'] = LinkModel;
module.exports = exports['default'];

},{"../main/ShareHelper":29,"pydio/http/api":"pydio/http/api","pydio/http/rest-api":"pydio/http/rest-api","pydio/lang/observable":"pydio/lang/observable","pydio/util/pass":"pydio/util/pass"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _Permissions = require('./Permissions');

var _Permissions2 = _interopRequireDefault(_Permissions);

var _TargetedUsers = require('./TargetedUsers');

var _TargetedUsers2 = _interopRequireDefault(_TargetedUsers);

var _materialUi = require('material-ui');

var _LinkModel = require('./LinkModel');

var _LinkModel2 = _interopRequireDefault(_LinkModel);

var _compositeCompositeModel = require('../composite/CompositeModel');

var _compositeCompositeModel2 = _interopRequireDefault(_compositeCompositeModel);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _Pydio$requireLib = _pydio2['default'].requireLib('form');

var ValidPassword = _Pydio$requireLib.ValidPassword;

var PublicLinkPanel = _react2['default'].createClass({
    displayName: 'PublicLinkPanel',

    propTypes: {
        linkModel: _react2['default'].PropTypes.instanceOf(_LinkModel2['default']),
        compositeModel: _react2['default'].PropTypes.instanceOf(_compositeCompositeModel2['default']),
        pydio: _react2['default'].PropTypes.instanceOf(_pydio2['default']),
        authorizations: _react2['default'].PropTypes.object,
        showMailer: _react2['default'].PropTypes.func
    },

    toggleLink: function toggleLink() {
        var _props = this.props;
        var linkModel = _props.linkModel;
        var pydio = _props.pydio;
        var showTemporaryPassword = this.state.showTemporaryPassword;

        if (showTemporaryPassword) {
            this.setState({ showTemporaryPassword: false, temporaryPassword: null });
        } else if (!linkModel.getLinkUuid() && _mainShareHelper2['default'].getAuthorizations(pydio).password_mandatory) {
            this.setState({ showTemporaryPassword: true, temporaryPassword: '' });
        } else {
            if (linkModel.getLinkUuid()) {
                this.props.compositeModel.deleteLink(linkModel);
            } else {
                linkModel.save();
            }
        }
    },

    getInitialState: function getInitialState() {
        return { showTemporaryPassword: false, temporaryPassword: null, disabled: false };
    },

    updateTemporaryPassword: function updateTemporaryPassword(value, event) {
        if (value === undefined) {
            value = event.currentTarget.getValue();
        }
        this.setState({ temporaryPassword: value });
    },

    enableLinkWithPassword: function enableLinkWithPassword() {
        var linkModel = this.props.linkModel;

        if (!this.refs['valid-pass'].isValid()) {
            this.props.pydio.UI.displayMessage('ERROR', 'Invalid Password');
            return;
        }
        linkModel.setCreatePassword(this.state.temporaryPassword);
        try {
            linkModel.save();
        } catch (e) {
            this.props.pydio.UI.displayMessage('ERROR', e.message);
        }
        this.setState({ showTemporaryPassword: false, temporaryPassword: null });
    },

    render: function render() {
        var _props2 = this.props;
        var linkModel = _props2.linkModel;
        var pydio = _props2.pydio;
        var compositeModel = _props2.compositeModel;

        var authorizations = _mainShareHelper2['default'].getAuthorizations(pydio);
        var nodeLeaf = compositeModel.getNode().isLeaf();
        var canEnable = nodeLeaf && authorizations.file_public_link || !nodeLeaf && authorizations.folder_public_link;

        var publicLinkPanes = undefined,
            publicLinkField = undefined;
        if (linkModel.getLinkUuid()) {
            publicLinkField = _react2['default'].createElement(_Field2['default'], {
                pydio: pydio,
                linkModel: linkModel,
                showMailer: this.props.showMailer,
                editAllowed: authorizations.editable_hash && linkModel.isEditable(),
                key: 'public-link'
            });
            publicLinkPanes = [_react2['default'].createElement(_materialUi.Divider, null), _react2['default'].createElement(_Permissions2['default'], {
                compositeModel: compositeModel,
                linkModel: linkModel,
                pydio: pydio,
                key: 'public-perm'
            })];
            if (linkModel.getLink().TargetUsers) {
                publicLinkPanes.push(_react2['default'].createElement(_materialUi.Divider, null));
                publicLinkPanes.push(_react2['default'].createElement(_TargetedUsers2['default'], { linkModel: linkModel, pydio: pydio }));
            }
        } else if (this.state.showTemporaryPassword) {
            publicLinkField = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'section-legend', style: { marginTop: 20 } },
                    this.props.getMessage('215')
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { width: '100%' } },
                    _react2['default'].createElement(ValidPassword, {
                        attributes: { label: this.props.getMessage('23') },
                        value: this.state.temporaryPassword,
                        onChange: this.updateTemporaryPassword,
                        ref: "valid-pass"
                    })
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { textAlign: 'center', marginTop: 20 } },
                    _react2['default'].createElement(_materialUi.RaisedButton, { label: this.props.getMessage('92'), secondary: true,
                        onClick: this.enableLinkWithPassword })
                )
            );
        } else if (!canEnable) {
            publicLinkField = _react2['default'].createElement(
                'div',
                { style: { fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.43)', paddingBottom: 16, paddingTop: 16 } },
                this.props.getMessage(nodeLeaf ? '225' : '226')
            );
        } else {
            publicLinkField = _react2['default'].createElement(
                'div',
                { style: { fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.43)', paddingBottom: 16, paddingTop: 16 } },
                this.props.getMessage('190')
            );
        }
        return _react2['default'].createElement(
            'div',
            { style: this.props.style },
            _react2['default'].createElement(
                'div',
                { style: { padding: '15px 10px 11px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0', fontSize: 15 } },
                _react2['default'].createElement(_materialUi.Toggle, {
                    disabled: this.props.isReadonly() || this.state.disabled || !linkModel.isEditable() || !linkModel.getLinkUuid() && !canEnable,
                    onToggle: this.toggleLink,
                    toggled: linkModel.getLinkUuid() || this.state.showTemporaryPassword,
                    label: this.props.getMessage('189')
                })
            ),
            _react2['default'].createElement(
                'div',
                { style: { padding: 20 } },
                publicLinkField
            ),
            publicLinkPanes
        );
    }
});

exports['default'] = PublicLinkPanel = (0, _ShareContextConsumer2['default'])(PublicLinkPanel);
exports['default'] = PublicLinkPanel;
module.exports = exports['default'];

},{"../ShareContextConsumer":1,"../composite/CompositeModel":12,"../main/ShareHelper":29,"./Field":16,"./LinkModel":18,"./Permissions":20,"./TargetedUsers":23,"material-ui":"material-ui","pydio":"pydio","react":"react"}],20:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var _materialUi = require('material-ui');

var _LinkModel = require('./LinkModel');

var _LinkModel2 = _interopRequireDefault(_LinkModel);

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _pydioHttpRestApi = require('pydio/http/rest-api');

var PublicLinkPermissions = _react2['default'].createClass({
    displayName: 'PublicLinkPermissions',

    propTypes: {
        linkModel: _react2['default'].PropTypes.instanceOf(_LinkModel2['default']),
        style: _react2['default'].PropTypes.object
    },

    changePermission: function changePermission(event) {
        var name = event.target.name;
        var checked = event.target.checked;
        var _props = this.props;
        var compositeModel = _props.compositeModel;
        var linkModel = _props.linkModel;

        var link = linkModel.getLink();
        if (checked) {
            link.Permissions.push(_pydioHttpRestApi.RestShareLinkAccessType.constructFromObject(name));
        } else {
            link.Permissions = link.Permissions.filter(function (perm) {
                return perm !== name;
            });
        }
        if (compositeModel.getNode().isLeaf()) {
            var auth = _mainShareHelper2['default'].getAuthorizations(_pydio2['default'].getInstance());
            var max = auth.max_downloads;
            // Readapt template depending on permissions
            if (linkModel.hasPermission('Preview')) {
                link.ViewTemplateName = "pydio_unique_strip";
                link.MaxDownloads = 0; // Clear Max Downloads if Preview enabled
            } else {
                    link.ViewTemplateName = "pydio_unique_dl";
                    if (max && !link.MaxDownloads) {
                        link.MaxDownloads = max;
                    }
                }
        }
        this.props.linkModel.updateLink(link);
    },

    render: function render() {
        var _props2 = this.props;
        var linkModel = _props2.linkModel;
        var compositeModel = _props2.compositeModel;
        var pydio = _props2.pydio;

        var node = compositeModel.getNode();
        var perms = [],
            previewWarning = undefined;
        var auth = _mainShareHelper2['default'].getAuthorizations(_pydio2['default'].getInstance());

        if (node.isLeaf()) {
            var _ShareHelper$nodeHasEditor = _mainShareHelper2['default'].nodeHasEditor(pydio, node);

            var preview = _ShareHelper$nodeHasEditor.preview;
            var writeable = _ShareHelper$nodeHasEditor.writeable;

            perms.push({
                NAME: 'Download',
                LABEL: this.props.getMessage('73'),
                DISABLED: !preview || !linkModel.hasPermission('Preview') // Download Only, cannot edit this
            });
            if (preview && !auth.max_downloads) {
                perms.push({
                    NAME: 'Preview',
                    LABEL: this.props.getMessage('72'),
                    DISABLED: !linkModel.hasPermission('Download')
                });
                if (linkModel.hasPermission('Preview')) {
                    if (writeable) {
                        perms.push({
                            NAME: 'Upload',
                            LABEL: this.props.getMessage('74b')
                        });
                    }
                }
            }
        } else {
            perms.push({
                NAME: 'Preview',
                LABEL: this.props.getMessage('72'),
                DISABLED: !linkModel.hasPermission('Upload')
            });
            perms.push({
                NAME: 'Download',
                LABEL: this.props.getMessage('73')
            });
            perms.push({
                NAME: 'Upload',
                LABEL: this.props.getMessage('74')
            });
        }

        /*
        if(this.props.shareModel.isPublicLinkPreviewDisabled() && this.props.shareModel.getPublicLinkPermission(linkId, 'read')){
            previewWarning = <div>{this.props.getMessage('195')}</div>;
        }
        */
        return _react2['default'].createElement(
            'div',
            { style: _extends({ padding: '10px 16px' }, this.props.style) },
            _react2['default'].createElement(
                'div',
                { style: { fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.43)' } },
                this.props.getMessage('70r')
            ),
            _react2['default'].createElement(
                'div',
                { style: { margin: '10px 0 20px' } },
                perms.map((function (p) {
                    return _react2['default'].createElement(_materialUi.Checkbox, {
                        key: p.NAME,
                        disabled: p.DISABLED || this.props.isReadonly() || !linkModel.isEditable(),
                        type: 'checkbox',
                        name: p.NAME,
                        label: p.LABEL,
                        onCheck: this.changePermission,
                        checked: linkModel.hasPermission(p.NAME),
                        labelStyle: { whiteSpace: 'nowrap' },
                        style: { margin: '10px 0' }
                    });
                }).bind(this)),
                previewWarning
            )
        );
    }
});

exports['default'] = PublicLinkPermissions = (0, _ShareContextConsumer2['default'])(PublicLinkPermissions);
exports['default'] = PublicLinkPermissions;
module.exports = exports['default'];

},{"../ShareContextConsumer":1,"../main/ShareHelper":29,"./LinkModel":18,"material-ui":"material-ui","pydio":"pydio","pydio/http/rest-api":"pydio/http/rest-api","react":"react"}],21:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var _materialUi = require('material-ui');

var _LinkModel = require('./LinkModel');

var _LinkModel2 = _interopRequireDefault(_LinkModel);

var _Pydio$requireLib = _pydio2['default'].requireLib('hoc');

var ModernSelectField = _Pydio$requireLib.ModernSelectField;

var PublicLinkTemplate = (function (_React$Component) {
    _inherits(PublicLinkTemplate, _React$Component);

    function PublicLinkTemplate() {
        _classCallCheck(this, PublicLinkTemplate);

        _get(Object.getPrototypeOf(PublicLinkTemplate.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PublicLinkTemplate, [{
        key: 'onDropDownChange',
        value: function onDropDownChange(event, index, value) {
            var linkModel = this.props.linkModel;

            linkModel.getLink().ViewTemplateName = value;
            linkModel.notifyDirty();
        }
    }, {
        key: 'render',
        value: function render() {
            var crtLabel = undefined;
            var linkModel = this.props.linkModel;

            var selected = linkModel.getLink().ViewTemplateName;
            var menuItems = this.props.layoutData.map(function (l) {
                if (selected && l.LAYOUT_ELEMENT === selected) {
                    crtLabel = l.LAYOUT_LABEL;
                }
                if (!selected && !crtLabel) {
                    selected = l.LAYOUT_ELEMENT;
                    crtLabel = l.LAYOUT_LABEL;
                }
                return _react2['default'].createElement(_materialUi.MenuItem, { key: l.LAYOUT_ELEMENT, value: l.LAYOUT_ELEMENT, primaryText: l.LAYOUT_LABEL });
            });
            return _react2['default'].createElement(
                'div',
                { style: this.props.style },
                _react2['default'].createElement(
                    'div',
                    { style: { fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.43)' } },
                    this.props.getMessage('151')
                ),
                _react2['default'].createElement(
                    ModernSelectField,
                    {
                        fullWidth: true,
                        value: selected,
                        onChange: this.onDropDownChange.bind(this),
                        disabled: this.props.isReadonly() || this.props.readonly || !linkModel.isEditable(),
                        floatingLabelText: this.props.getMessage('151')
                    },
                    menuItems
                )
            );
        }
    }]);

    return PublicLinkTemplate;
})(_react2['default'].Component);

PublicLinkTemplate.PropTypes = {
    linkModel: _react2['default'].PropTypes.instanceOf(_LinkModel2['default'])
};
PublicLinkTemplate = (0, _ShareContextConsumer2['default'])(PublicLinkTemplate);
exports['default'] = PublicLinkTemplate;
module.exports = exports['default'];

},{"../ShareContextConsumer":1,"./LinkModel":18,"material-ui":"material-ui","pydio":"pydio","react":"react"}],22:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _pydioUtilPass = require('pydio/util/pass');

var _pydioUtilPass2 = _interopRequireDefault(_pydioUtilPass);

var _materialUi = require('material-ui');

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var _LinkModel = require('./LinkModel');

var _LinkModel2 = _interopRequireDefault(_LinkModel);

var _mainShareHelper = require('../main/ShareHelper');

var _mainShareHelper2 = _interopRequireDefault(_mainShareHelper);

var _Pydio$requireLib = _pydio2['default'].requireLib('form');

var ValidPassword = _Pydio$requireLib.ValidPassword;

var _Pydio$requireLib2 = _pydio2['default'].requireLib('hoc');

var ModernTextField = _Pydio$requireLib2.ModernTextField;
var ModernStyles = _Pydio$requireLib2.ModernStyles;

var globStyles = {
    leftIcon: {
        margin: '0 16px 0 4px',
        color: '#757575'
    }
};

var PublicLinkSecureOptions = _react2['default'].createClass({
    displayName: 'PublicLinkSecureOptions',

    propTypes: {
        linkModel: _react2['default'].PropTypes.instanceOf(_LinkModel2['default']).isRequired,
        style: _react2['default'].PropTypes.object
    },

    getInitialState: function getInitialState() {
        return {};
    },

    updateDLExpirationField: function updateDLExpirationField(event) {
        var newValue = event.currentTarget.value;
        if (parseInt(newValue) < 0) {
            newValue = -parseInt(newValue);
        }
        var linkModel = this.props.linkModel;

        var link = linkModel.getLink();
        link.MaxDownloads = newValue;
        linkModel.updateLink(link);
    },

    updateDaysExpirationField: function updateDaysExpirationField(event, newValue) {
        if (!newValue) {
            newValue = event.currentTarget.getValue();
        }
        var linkModel = this.props.linkModel;

        var link = linkModel.getLink();
        link.AccessEnd = newValue;
        linkModel.updateLink(link);
    },

    onDateChange: function onDateChange(event, value) {
        var date2 = Date.UTC(value.getFullYear(), value.getMonth(), value.getDate());
        this.updateDaysExpirationField(event, Math.floor(date2 / 1000) + "");
    },

    resetPassword: function resetPassword() {
        var linkModel = this.props.linkModel;

        linkModel.setUpdatePassword('');
        linkModel.getLink().PasswordRequired = false;
        linkModel.notifyDirty();
    },

    setUpdatingPassword: function setUpdatingPassword(newValue) {
        var _this = this;

        _pydioUtilPass2['default'].checkPasswordStrength(newValue, function (ok, msg) {
            _this.setState({ updatingPassword: newValue, updatingPasswordValid: ok });
        });
    },

    changePassword: function changePassword() {
        var linkModel = this.props.linkModel;
        var updatingPassword = this.state.updatingPassword;

        linkModel.setUpdatePassword(updatingPassword);
        this.setState({ pwPop: false, updatingPassword: "", updatingPasswordValid: false });
        linkModel.notifyDirty();
    },

    updatePassword: function updatePassword(newValue, oldValue) {
        var linkModel = this.props.linkModel;

        var valid = this.refs.pwd.isValid();
        if (valid) {
            this.setState({ invalidPassword: null, invalid: false }, function () {
                linkModel.setUpdatePassword(newValue);
            });
        } else {
            this.setState({ invalidPassword: newValue, invalid: true });
        }
    },

    resetDownloads: function resetDownloads() {
        if (window.confirm(this.props.getMessage('106'))) {
            var linkModel = this.props.linkModel;

            linkModel.getLink().CurrentDownloads = "0";
            linkModel.notifyDirty();
        }
    },

    resetExpiration: function resetExpiration() {
        var linkModel = this.props.linkModel;

        linkModel.getLink().AccessEnd = "0";
        linkModel.notifyDirty();
    },

    renderPasswordContainer: function renderPasswordContainer() {
        var _this2 = this;

        var linkModel = this.props.linkModel;

        var link = linkModel.getLink();
        var passwordField = undefined,
            resetPassword = undefined,
            updatePassword = undefined;
        if (link.PasswordRequired) {
            resetPassword = _react2['default'].createElement(_materialUi.FlatButton, {
                disabled: this.props.isReadonly() || !linkModel.isEditable(),
                secondary: true,
                onTouchTap: this.resetPassword,
                label: this.props.getMessage('174')
            });
            updatePassword = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_materialUi.FlatButton, {
                    disabled: this.props.isReadonly() || !linkModel.isEditable(),
                    secondary: true,
                    onTouchTap: function (e) {
                        _this2.setState({ pwPop: true, pwAnchor: e.currentTarget });
                    },
                    label: this.props.getMessage('181')
                }),
                _react2['default'].createElement(
                    _materialUi.Popover,
                    {
                        open: this.state.pwPop,
                        anchorEl: this.state.pwAnchor,
                        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
                        targetOrigin: { horizontal: 'right', vertical: 'top' },
                        onRequestClose: function () {
                            _this2.setState({ pwPop: false });
                        }
                    },
                    _react2['default'].createElement(
                        'div',
                        { style: { width: 280, padding: 8 } },
                        _react2['default'].createElement(ValidPassword, {
                            name: "update",
                            ref: "pwdUpdate",
                            attributes: { label: this.props.getMessage('23') },
                            value: this.state.updatingPassword ? this.state.updatingPassword : "",
                            onChange: function (v) {
                                _this2.setUpdatingPassword(v);
                            }
                        }),
                        _react2['default'].createElement(
                            'div',
                            { style: { paddingTop: 20, textAlign: 'right' } },
                            _react2['default'].createElement(_materialUi.FlatButton, { label: "OK", onTouchTap: function () {
                                    _this2.changePassword();
                                }, disabled: !this.state.updatingPassword || !this.state.updatingPasswordValid }),
                            _react2['default'].createElement(_materialUi.FlatButton, { label: "Cancel", onTouchTap: function () {
                                    _this2.setState({ pwPop: false, updatingPassword: '' });
                                } })
                        )
                    )
                )
            );
            passwordField = _react2['default'].createElement(ModernTextField, {
                floatingLabelText: this.props.getMessage('23'),
                disabled: true,
                value: '********',
                fullWidth: true
            });
        } else if (!this.props.isReadonly() && linkModel.isEditable()) {
            passwordField = _react2['default'].createElement(ValidPassword, {
                name: 'share-password',
                ref: "pwd",
                attributes: { label: this.props.getMessage('23') },
                value: this.state.invalidPassword ? this.state.invalidPassword : linkModel.updatePassword,
                onChange: this.updatePassword
            });
        }
        if (passwordField) {
            return _react2['default'].createElement(
                'div',
                { className: 'password-container', style: { display: 'flex', alignItems: 'center' } },
                _react2['default'].createElement(_materialUi.FontIcon, { className: 'mdi mdi-file-lock', style: globStyles.leftIcon }),
                _react2['default'].createElement(
                    'div',
                    { style: { width: resetPassword ? '40%' : '100%', display: 'inline-block' } },
                    passwordField
                ),
                resetPassword && _react2['default'].createElement(
                    'div',
                    { style: { width: '60%', display: 'flex' } },
                    resetPassword,
                    ' ',
                    updatePassword
                )
            );
        } else {
            return null;
        }
    },

    formatDate: function formatDate(dateObject) {
        var dateFormatDay = this.props.getMessage('date_format', '').split(' ').shift();
        return dateFormatDay.replace('Y', dateObject.getFullYear()).replace('m', dateObject.getMonth() + 1).replace('d', dateObject.getDate());
    },

    render: function render() {
        var linkModel = this.props.linkModel;

        var link = linkModel.getLink();

        var passContainer = this.renderPasswordContainer();
        var crtLinkDLAllowed = linkModel.hasPermission('Download') && !linkModel.hasPermission('Preview') && !linkModel.hasPermission('Upload');
        var dlLimitValue = parseInt(link.MaxDownloads);
        var expirationDateValue = parseInt(link.AccessEnd);

        var calIcon = _react2['default'].createElement(_materialUi.FontIcon, { className: 'mdi mdi-calendar-clock', style: globStyles.leftIcon });
        var expDate = undefined,
            maxDate = undefined,
            dlCounterString = undefined,
            dateExpired = false,
            dlExpired = false;
        var today = new Date();

        var auth = _mainShareHelper2['default'].getAuthorizations(this.props.pydio);
        if (parseInt(auth.max_expiration) > 0) {
            maxDate = new Date();
            maxDate.setDate(today.getDate() + parseInt(auth.max_expiration));
        }
        if (parseInt(auth.max_downloads) > 0) {
            dlLimitValue = Math.min(dlLimitValue, parseInt(auth.max_downloads));
        }

        if (expirationDateValue) {
            if (expirationDateValue < 0) {
                dateExpired = true;
            }
            expDate = new Date(expirationDateValue * 1000);
            //expDate.setDate(today.getDate() + parseInt(expirationDateValue));
            calIcon = _react2['default'].createElement(_materialUi.IconButton, { iconStyle: { color: globStyles.leftIcon.color }, style: { marginLeft: -8, marginRight: 8 }, iconClassName: 'mdi mdi-close-circle', onTouchTap: this.resetExpiration.bind(this) });
        }
        if (dlLimitValue) {
            var dlCounter = parseInt(link.CurrentDownloads) || 0;
            var resetLink = undefined;
            if (dlCounter) {
                resetLink = _react2['default'].createElement(
                    'a',
                    { style: { cursor: 'pointer' }, onClick: this.resetDownloads.bind(this), title: this.props.getMessage('17') },
                    '(',
                    this.props.getMessage('16'),
                    ')'
                );
                if (dlCounter >= dlLimitValue) {
                    dlExpired = true;
                }
            }
            dlCounterString = _react2['default'].createElement(
                'span',
                { className: 'dlCounterString' },
                dlCounter + '/' + dlLimitValue,
                ' ',
                resetLink
            );
        }
        return _react2['default'].createElement(
            'div',
            { style: _extends({ padding: 10 }, this.props.style) },
            _react2['default'].createElement(
                'div',
                { style: { fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.43)' } },
                this.props.getMessage('24')
            ),
            _react2['default'].createElement(
                'div',
                { style: { paddingRight: 10 } },
                passContainer,
                _react2['default'].createElement(
                    'div',
                    { style: { flex: 1, display: 'flex', alignItems: 'baseline', position: 'relative' }, className: dateExpired ? 'limit-block-expired' : null },
                    calIcon,
                    _react2['default'].createElement(_materialUi.DatePicker, _extends({
                        ref: 'expirationDate',
                        key: 'start',
                        value: expDate,
                        minDate: new Date(),
                        maxDate: maxDate,
                        autoOk: true,
                        disabled: this.props.isReadonly() || !linkModel.isEditable(),
                        onChange: this.onDateChange,
                        showYearSelector: true,
                        hintText: this.props.getMessage(dateExpired ? '21b' : '21'),
                        mode: 'landscape',
                        formatDate: this.formatDate,
                        style: { flex: 1 },
                        fullWidth: true
                    }, ModernStyles.textField))
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { flex: 1, alignItems: 'baseline', display: crtLinkDLAllowed ? 'flex' : 'none', position: 'relative' }, className: dlExpired ? 'limit-block-expired' : null },
                    _react2['default'].createElement(_materialUi.FontIcon, { className: 'mdi mdi-download', style: globStyles.leftIcon }),
                    _react2['default'].createElement(ModernTextField, {
                        type: 'number',
                        disabled: this.props.isReadonly() || !linkModel.isEditable(),
                        floatingLabelText: this.props.getMessage(dlExpired ? '22b' : '22'),
                        value: dlLimitValue > 0 ? dlLimitValue : '',
                        onChange: this.updateDLExpirationField,
                        fullWidth: true,
                        style: { flex: 1 }
                    }),
                    _react2['default'].createElement(
                        'span',
                        { style: { position: 'absolute', right: 10, top: 14, fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.43)' } },
                        dlCounterString
                    )
                )
            )
        );
    }
});

exports['default'] = PublicLinkSecureOptions = (0, _ShareContextConsumer2['default'])(PublicLinkSecureOptions);
exports['default'] = PublicLinkSecureOptions;
module.exports = exports['default'];

},{"../ShareContextConsumer":1,"../main/ShareHelper":29,"./LinkModel":18,"material-ui":"material-ui","pydio":"pydio","pydio/util/pass":"pydio/util/pass","react":"react"}],23:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var _materialUi = require('material-ui');

var _clipboard = require('clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

var _linksLinkModel = require('../links/LinkModel');

var _linksLinkModel2 = _interopRequireDefault(_linksLinkModel);

var TargetedUserLink = (function (_React$Component) {
    _inherits(TargetedUserLink, _React$Component);

    function TargetedUserLink(props) {
        _classCallCheck(this, TargetedUserLink);

        _get(Object.getPrototypeOf(TargetedUserLink.prototype), 'constructor', this).call(this, props);
        this.state = { copyMessage: '' };
    }

    _createClass(TargetedUserLink, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this._clip) {
                this._clip.destroy();
            }
            if (this._button) {
                this._clip = new _clipboard2['default'](this._button, {
                    text: (function (trigger) {
                        return this.props.link;
                    }).bind(this)
                });
                this._clip.on('success', (function () {
                    this.setState({ copyMessage: this.props.getMessage('192') }, this.clearCopyMessage);
                }).bind(this));
                this._clip.on('error', (function () {
                    var copyMessage = undefined;
                    if (global.navigator.platform.indexOf("Mac") === 0) {
                        copyMessage = this.props.getMessage('144');
                    } else {
                        copyMessage = this.props.getMessage('share_center.143');
                    }
                    this.setState({ copyMessage: copyMessage }, this.clearCopyMessage);
                }).bind(this));
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this._clip) {
                this._clip.destroy();
            }
        }
    }, {
        key: 'clearCopyMessage',
        value: function clearCopyMessage() {
            setTimeout((function () {
                this.setState({ copyMessage: '' });
            }).bind(this), 5000);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var _props = this.props;
            var targetUser = _props.targetUser;
            var link = _props.link;

            return _react2['default'].createElement(
                'div',
                { style: { display: 'flex' } },
                _react2['default'].createElement(
                    'div',
                    { style: { flex: 1 } },
                    targetUser.Display,
                    _react2['default'].createElement(_materialUi.IconButton, {
                        pydio: this.props.pydio,
                        ref: function (ref) {
                            _this._button = _reactDom2['default'].findDOMNode(ref);
                        },
                        iconClassName: 'mdi mdi-link',
                        tooltip: this.state.copyMessage || link,
                        iconStyle: { fontSize: 13, lineHeight: '17px' }, style: { width: 34, height: 34, padding: 6 }
                    })
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { width: 40, textAlign: 'center' } },
                    targetUser.DownloadCount
                )
            );
        }
    }]);

    return TargetedUserLink;
})(_react2['default'].Component);

var TargetedUsers = (function (_React$Component2) {
    _inherits(TargetedUsers, _React$Component2);

    function TargetedUsers(props, context) {
        _classCallCheck(this, TargetedUsers);

        _get(Object.getPrototypeOf(TargetedUsers.prototype), 'constructor', this).call(this, props, context);
        this.state = { open: false };
    }

    _createClass(TargetedUsers, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var linkModel = this.props.linkModel;

            var link = linkModel.getLink();
            var targetUsers = undefined;
            if (link.TargetUsers) {
                targetUsers = link.TargetUsers;
            }
            var items = Object.keys(targetUsers).map(function (k) {
                var title = linkModel.getPublicUrl() + '?u=' + k;
                return _react2['default'].createElement(TargetedUserLink, { targetUser: targetUsers[k], link: title });
            });
            if (!items.length) {
                return null;
            }

            var rootStyle = {
                lineHeight: '34px',
                padding: '4px 10px 4px',
                fontSize: 14,
                backgroundColor: '#fafafa',
                borderRadius: 2
            };
            var headerStyle = {
                borderBottom: this.state.open ? '1px solid #757575' : '',
                color: 'rgba(0, 0, 0, 0.36)'
            };

            return _react2['default'].createElement(
                'div',
                { style: rootStyle },
                _react2['default'].createElement(
                    'div',
                    { style: _extends({ display: 'flex' }, headerStyle) },
                    _react2['default'].createElement(
                        'div',
                        { style: { flex: 1 } },
                        this.props.getMessage('245').replace('%s', items.length),
                        ' ',
                        _react2['default'].createElement('span', { className: 'mdi mdi-chevron-' + (this.state.open ? 'up' : 'down'), style: { cursor: 'pointer' }, onClick: function () {
                                _this2.setState({ open: !_this2.state.open });
                            } })
                    ),
                    this.state.open && _react2['default'].createElement(
                        'div',
                        { style: { width: 40, textAlign: 'center' } },
                        '#DL'
                    )
                ),
                this.state.open && _react2['default'].createElement(
                    'div',
                    null,
                    items
                )
            );
        }
    }]);

    return TargetedUsers;
})(_react2['default'].Component);

TargetedUsers.propTypes = {
    linkModel: _react2['default'].PropTypes.instanceOf(_linksLinkModel2['default'])
};

exports['default'] = TargetedUsers = (0, _ShareContextConsumer2['default'])(TargetedUsers);
TargetedUserLink = (0, _ShareContextConsumer2['default'])(TargetedUserLink);

exports['default'] = TargetedUsers;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../ShareContextConsumer":1,"../links/LinkModel":18,"clipboard":"clipboard","material-ui":"material-ui","react":"react","react-dom":"react-dom"}],24:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _pydioHttpPolicies = require('pydio/http/policies');

var _pydioHttpPolicies2 = _interopRequireDefault(_pydioHttpPolicies);

var _pydioHttpRestApi = require('pydio/http/rest-api');

var _LinkModel = require('./LinkModel');

var _LinkModel2 = _interopRequireDefault(_LinkModel);

var _Pydio$requireLib = _pydio2['default'].requireLib('components');

var ResourcePoliciesPanel = _Pydio$requireLib.ResourcePoliciesPanel;

var VisibilityPanel = _react2['default'].createClass({
    displayName: 'VisibilityPanel',

    /**
     * Update associated hidden users policies, otherwise
     * the public link visibility cannot be changed
     * @param diffPolicies
     */
    onSavePolicies: function onSavePolicies(diffPolicies) {
        var _this = this;

        var _props = this.props;
        var linkModel = _props.linkModel;
        var pydio = _props.pydio;

        var internalUser = linkModel.getLink().UserLogin;
        _pydioHttpPolicies2['default'].loadPolicies('user', internalUser).then(function (policies) {
            if (policies.length) {
                var resourceId = policies[0].Resource;
                var newPolicies = _this.diffPolicies(policies, diffPolicies, resourceId);
                _pydioHttpPolicies2['default'].savePolicies('user', internalUser, newPolicies);
            }
        });
    },

    diffPolicies: function diffPolicies(policies, _diffPolicies, resourceId) {
        var newPols = [];
        policies.map(function (p) {
            var key = p.Action + '///' + p.Subject;
            if (!_diffPolicies.remove[key]) {
                newPols.push(p);
            }
        });
        Object.keys(_diffPolicies.add).map(function (k) {
            var newPol = new _pydioHttpRestApi.ServiceResourcePolicy();

            var _k$split = k.split('///');

            var _k$split2 = _slicedToArray(_k$split, 2);

            var action = _k$split2[0];
            var subject = _k$split2[1];

            newPol.Resource = resourceId;
            newPol.Effect = _pydioHttpRestApi.ServiceResourcePolicyPolicyEffect.constructFromObject('allow');
            newPol.Subject = subject;
            newPol.Action = action;
            newPols.push(newPol);
        });
        return newPols;
    },

    render: function render() {
        var _props2 = this.props;
        var linkModel = _props2.linkModel;
        var pydio = _props2.pydio;

        var subjectsHidden = [];
        subjectsHidden["user:" + linkModel.getLink().UserLogin] = true;
        var subjectDisables = { READ: subjectsHidden, WRITE: subjectsHidden };
        return _react2['default'].createElement(
            'div',
            { style: this.props.style },
            linkModel.getLink().Uuid && _react2['default'].createElement(ResourcePoliciesPanel, {
                pydio: pydio,
                resourceType: 'link',
                description: this.props.getMessage('link.visibility.advanced'),
                resourceId: linkModel.getLink().Uuid,
                skipTitle: true,
                onSavePolicies: this.onSavePolicies.bind(this),
                subjectsDisabled: subjectDisables,
                subjectsHidden: subjectsHidden,
                readonly: this.props.isReadonly() || !linkModel.isEditable(),
                ref: 'policies'
            })
        );
    }
});

VisibilityPanel.PropTypes = {
    pydio: _react2['default'].PropTypes.instanceOf(_pydio2['default']).isRequired,
    linkModel: _react2['default'].PropTypes.instanceOf(_LinkModel2['default']).isRequired
};

VisibilityPanel = (0, _ShareContextConsumer2['default'])(VisibilityPanel);
exports['default'] = VisibilityPanel;
module.exports = exports['default'];

},{"../ShareContextConsumer":1,"./LinkModel":18,"pydio":"pydio","pydio/http/policies":"pydio/http/policies","pydio/http/rest-api":"pydio/http/rest-api","react":"react"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var _pydioModelNode = require('pydio/model/node');

var _pydioModelNode2 = _interopRequireDefault(_pydioModelNode);

var _pydioUtilPath = require('pydio/util/path');

var _pydioUtilPath2 = _interopRequireDefault(_pydioUtilPath);

var _pydioHttpRestApi = require('pydio/http/rest-api');

var _materialUi = require('material-ui');

var _Pydio$requireLib = _pydio2['default'].requireLib('boot');

var ActionDialogMixin = _Pydio$requireLib.ActionDialogMixin;
var Loader = _Pydio$requireLib.Loader;

var _Pydio$requireLib2 = _pydio2['default'].requireLib('components');

var ModalAppBar = _Pydio$requireLib2.ModalAppBar;
var EmptyStateView = _Pydio$requireLib2.EmptyStateView;

var ShareView = (function (_React$Component) {
    _inherits(ShareView, _React$Component);

    _createClass(ShareView, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var messages = this.props.pydio.MessageHash;
            return {
                messages: messages,
                getMessage: function getMessage(messageId) {
                    var namespace = arguments.length <= 1 || arguments[1] === undefined ? 'share_center' : arguments[1];

                    try {
                        return messages[namespace + (namespace ? "." : "") + messageId] || messageId;
                    } catch (e) {
                        return messageId;
                    }
                },
                isReadonly: (function () {
                    return false;
                }).bind(this)
            };
        }
    }]);

    function ShareView(props) {
        _classCallCheck(this, ShareView);

        _get(Object.getPrototypeOf(ShareView.prototype), 'constructor', this).call(this, props);
        this.state = {
            resources: [],
            loading: false,
            selectedModel: null,
            shareType: props.defaultShareType || 'LINKS'
        };
    }

    _createClass(ShareView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.load();
        }
    }, {
        key: 'load',
        value: function load() {
            var _this = this;

            var api = new _pydioHttpRestApi.ShareServiceApi(_pydioHttpApi2['default'].getRestClient());
            var request = new _pydioHttpRestApi.RestListSharedResourcesRequest();
            request.ShareType = _pydioHttpRestApi.ListSharedResourcesRequestListShareType.constructFromObject(this.state.shareType);
            if (this.props.subject) {
                request.Subject = this.props.subject;
            } else {
                request.OwnedBySubject = true;
            }
            this.setState({ loading: true });
            api.listSharedResources(request).then(function (res) {
                _this.setState({ resources: res.Resources || [], loading: false });
            })['catch'](function () {
                _this.setState({ loading: false });
            });
        }
    }, {
        key: 'getLongestPath',
        value: function getLongestPath(node) {
            if (!node.AppearsIn) {
                return { path: node.Path, basename: node.Path };
            }
            var paths = {};
            node.AppearsIn.map(function (a) {
                paths[a.Path] = a;
            });
            var keys = Object.keys(paths);
            keys.sort();
            var longest = keys[keys.length - 1];
            var label = _pydioUtilPath2['default'].getBasename(longest);
            if (!label) {
                label = paths[longest].WsLabel;
            }
            return { path: longest, appearsIn: paths[longest], basename: label };
        }
    }, {
        key: 'goTo',
        value: function goTo(appearsIn) {
            var Path = appearsIn.Path;
            var WsLabel = appearsIn.WsLabel;
            var WsUuid = appearsIn.WsUuid;

            // Remove first segment (ws slug)
            var pathes = Path.split('/');
            pathes.shift();
            var pydioNode = new _pydioModelNode2['default'](pathes.join('/'));
            pydioNode.getMetadata().set('repository_id', WsUuid);
            pydioNode.getMetadata().set('repository_label', WsLabel);
            this.props.pydio.goTo(pydioNode);
            this.props.onRequestClose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state;
            var loading = _state.loading;
            var resources = _state.resources;
            var _props = this.props;
            var pydio = _props.pydio;
            var style = _props.style;

            var m = function m(id) {
                return pydio.MessageHash['share_center.' + id];
            };
            resources.sort(function (a, b) {
                var kA = a.Node.Path;
                var kB = b.Node.Path;
                return kA === kB ? 0 : kA > kB ? 1 : -1;
            });
            var extensions = pydio.Registry.getFilesExtensions();
            return _react2['default'].createElement(
                'div',
                { style: _extends({}, style, { display: 'flex', flexDirection: 'column' }) },
                _react2['default'].createElement(
                    'div',
                    { style: { backgroundColor: '#F5F5F5', borderBottom: '1px solid #EEEEEE', padding: '3px 20px', height: 50 } },
                    _react2['default'].createElement(
                        _materialUi.SelectField,
                        {
                            value: this.state.shareType,
                            onChange: function (e, i, v) {
                                _this2.setState({ shareType: v }, function () {
                                    _this2.load();
                                });
                            },
                            underlineStyle: { display: 'none' },
                            style: { width: 160 }
                        },
                        _react2['default'].createElement(_materialUi.MenuItem, { value: "LINKS", primaryText: m(243) }),
                        _react2['default'].createElement(_materialUi.MenuItem, { value: "CELLS", primaryText: m(250) })
                    )
                ),
                loading && _react2['default'].createElement(Loader, { style: { height: 300, flex: 1 } }),
                !loading && resources.length === 0 && _react2['default'].createElement(EmptyStateView, {
                    pydio: pydio,
                    iconClassName: "mdi mdi-share-variant",
                    primaryTextId: m(131),
                    style: { flex: 1, height: 200, padding: '100px 0', backgroundColor: 'transparent' }
                }),
                !loading && resources.length > 0 && _react2['default'].createElement(
                    _materialUi.List,
                    { style: { flex: 1, minHeight: 300, overflowY: 'auto', paddingTop: 0 } },
                    resources.map(function (res) {
                        var _getLongestPath = _this2.getLongestPath(res.Node);

                        var appearsIn = _getLongestPath.appearsIn;
                        var basename = _getLongestPath.basename;

                        var icon = undefined;
                        if (basename.indexOf('.') === -1) {
                            icon = 'mdi mdi-folder';
                        } else {
                            var ext = _pydioUtilPath2['default'].getFileExtension(basename);
                            if (extensions.has(ext)) {
                                var _extensions$get = extensions.get(ext);

                                var fontIcon = _extensions$get.fontIcon;

                                icon = 'mdi mdi-' + fontIcon;
                            } else {
                                icon = 'mdi mdi-file';
                            }
                        }
                        if (res.Link && res.Link.Label) {
                            basename = res.Link.Label + ' (' + basename + ')';
                        }
                        return _react2['default'].createElement(_materialUi.ListItem, {
                            primaryText: basename,
                            secondaryText: res.Link ? m(251) + ': ' + res.Link.Description : m(284).replace('%s', res.Cells.length),
                            onTouchTap: function () {
                                appearsIn ? _this2.goTo(appearsIn) : null;
                            },
                            disabled: !appearsIn,
                            leftIcon: _react2['default'].createElement(_materialUi.FontIcon, { className: icon })
                        });
                    })
                )
            );
        }
    }]);

    return ShareView;
})(_react2['default'].Component);

ShareView.childContextTypes = {
    messages: _react2['default'].PropTypes.object,
    getMessage: _react2['default'].PropTypes.func,
    isReadonly: _react2['default'].PropTypes.func
};

var ShareViewModal = _react2['default'].createClass({
    displayName: 'ShareViewModal',

    mixins: [ActionDialogMixin],

    getDefaultProps: function getDefaultProps() {
        return {
            dialogTitle: '',
            dialogSize: 'lg',
            dialogPadding: false,
            dialogIsModal: false,
            dialogScrollBody: false
        };
    },

    submit: function submit() {
        this.dismiss();
    },

    render: function render() {
        var _this3 = this;

        return _react2['default'].createElement(
            'div',
            { style: { width: '100%', display: 'flex', flexDirection: 'column' } },
            _react2['default'].createElement(ModalAppBar, {
                title: this.props.pydio.MessageHash['share_center.98'],
                showMenuIconButton: false,
                iconClassNameRight: 'mdi mdi-close',
                onRightIconButtonTouchTap: function () {
                    _this3.dismiss();
                }
            }),
            _react2['default'].createElement(ShareView, _extends({}, this.props, { style: { width: '100%', flex: 1 }, onRequestClose: function () {
                    _this3.dismiss();
                } }))
        );
    }

});

exports.ShareView = ShareView;
exports.ShareViewModal = ShareViewModal;

},{"material-ui":"material-ui","pydio":"pydio","pydio/http/api":"pydio/http/api","pydio/http/rest-api":"pydio/http/rest-api","pydio/model/node":"pydio/model/node","pydio/util/path":"pydio/util/path","react":"react"}],26:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ShareContextConsumer = require('../ShareContextConsumer');

var _ShareContextConsumer2 = _interopRequireDefault(_ShareContextConsumer);

var _require = require('react');

var Component = _require.Component;
var PropTypes = _require.PropTypes;

var _require2 = require('material-ui');

var IconButton = _require2.IconButton;

var _require3 = require('material-ui/styles');

var muiThemeable = _require3.muiThemeable;

var ActionButton = (function (_Component) {
    _inherits(ActionButton, _Component);

    function ActionButton() {
        _classCallCheck(this, ActionButton);

        _get(Object.getPrototypeOf(ActionButton.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ActionButton, [{
        key: 'render',
        value: function render() {
            var palette = this.props.muiTheme.palette;

            var style = {
                root: {
                    borderRadius: '50%',
                    border: '1px solid ' + palette.primary1Color,
                    backgroundColor: 'transparent',
                    width: 36, height: 36,
                    padding: 8,
                    margin: '0 6px',
                    zIndex: 0
                },
                icon: {
                    color: palette.primary1Color,
                    fontSize: 20,
                    lineHeight: '20px'
                }
            };

            return React.createElement(IconButton, {
                style: style.root,
                iconStyle: style.icon,
                onTouchTap: this.props.callback || this.props.onTouchTap,
                iconClassName: "mdi mdi-" + this.props.mdiIcon,
                tooltip: this.props.getMessage(this.props.messageId, this.props.messageCoreNamespace ? '' : undefined),
                tooltipPosition: this.props.tooltipPosition
            });
        }
    }]);

    return ActionButton;
})(Component);

ActionButton.propTypes = {
    callback: PropTypes.func,
    onTouchTap: PropTypes.func,
    mdiIcon: PropTypes.string,
    messageId: PropTypes.string
};

ActionButton = (0, _ShareContextConsumer2['default'])(ActionButton);
ActionButton = muiThemeable()(ActionButton);

exports['default'] = ActionButton;
module.exports = exports['default'];

},{"../ShareContextConsumer":1,"material-ui":"material-ui","material-ui/styles":"material-ui/styles","react":"react"}],27:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUiStyles = require('material-ui/styles');

var EditorTab = (function (_React$Component) {
    _inherits(EditorTab, _React$Component);

    function EditorTab() {
        _classCallCheck(this, EditorTab);

        _get(Object.getPrototypeOf(EditorTab.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(EditorTab, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var tabs = _props.tabs;
            var active = _props.active;
            var onChange = _props.onChange;
            var style = _props.style;
            var muiTheme = _props.muiTheme;
            var primary1Color = muiTheme.palette.primary1Color;

            return _react2['default'].createElement(
                'div',
                { style: _extends({ display: 'flex' }, style) },
                tabs.map(function (t) {
                    var isActive = t.Value === active;
                    return _react2['default'].createElement(_materialUi.FlatButton, { label: t.Label, onTouchTap: function () {
                            onChange(t.Value);
                        }, primary: isActive, style: isActive ? { borderBottom: '2px solid ' + primary1Color } : { borderBottom: 0 } });
                }),
                _react2['default'].createElement('span', { style: { flex: 1 } })
            );
        }
    }]);

    return EditorTab;
})(_react2['default'].Component);

EditorTab = (0, _materialUiStyles.muiThemeable)()(EditorTab);

var EditorTabContent = (function (_React$Component2) {
    _inherits(EditorTabContent, _React$Component2);

    function EditorTabContent() {
        _classCallCheck(this, EditorTabContent);

        _get(Object.getPrototypeOf(EditorTabContent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(EditorTabContent, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var tabs = _props2.tabs;
            var active = _props2.active;

            var activeContent = null;
            tabs.map(function (t) {
                if (t.Value === active) {
                    activeContent = t.Component;
                }
            });
            return activeContent;
        }
    }]);

    return EditorTabContent;
})(_react2['default'].Component);

var GenericEditor = (function (_React$Component3) {
    _inherits(GenericEditor, _React$Component3);

    function GenericEditor(props) {
        _classCallCheck(this, GenericEditor);

        _get(Object.getPrototypeOf(GenericEditor.prototype), 'constructor', this).call(this, props);
        this.state = {
            left: props.tabs.left.length ? props.tabs.left[0].Value : '',
            right: props.tabs.right.length ? props.tabs.right[0].Value : ''
        };
    }

    _createClass(GenericEditor, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (!this.state.left && props.tabs.left.length) {
                this.setState({ left: props.tabs.left[0].Value });
            }
            if (!this.state.right && props.tabs.right.length) {
                this.setState({ right: props.tabs.right[0].Value });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var _props3 = this.props;
            var tabs = _props3.tabs;
            var header = _props3.header;
            var onSaveAction = _props3.onSaveAction;
            var onCloseAction = _props3.onCloseAction;
            var onRevertAction = _props3.onRevertAction;
            var saveEnabled = _props3.saveEnabled;
            var style = _props3.style;
            var pydio = _props3.pydio;
            var editorOneColumn = _props3.editorOneColumn;
            var _state = this.state;
            var left = _state.left;
            var right = _state.right;

            if (editorOneColumn) {

                var merged = [].concat(_toConsumableArray(tabs.left), _toConsumableArray(tabs.right));
                var hasLast = merged.filter(function (tab) {
                    return tab.AlwaysLast;
                });
                if (hasLast.length) {
                    merged = [].concat(_toConsumableArray(merged.filter(function (tab) {
                        return !tab.AlwaysLast;
                    })), [hasLast[0]]);
                }

                return _react2['default'].createElement(
                    'div',
                    { style: _extends({ display: 'flex', flexDirection: 'column', height: '100%' }, style) },
                    _react2['default'].createElement(
                        'div',
                        { style: { display: 'flex', flexDirection: 'column' } },
                        _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#EEEEEE', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } },
                            _react2['default'].createElement(_materialUi.RaisedButton, { disabled: !saveEnabled, primary: true, label: pydio.MessageHash['53'], onTouchTap: onSaveAction }),
                            _react2['default'].createElement(_materialUi.FlatButton, { disabled: !saveEnabled, label: pydio.MessageHash['628'], onTouchTap: onRevertAction, style: { marginLeft: 10 } }),
                            _react2['default'].createElement(_materialUi.IconButton, { iconClassName: "mdi mdi-close", tooltip: pydio.MessageHash['86'], onTouchTap: onCloseAction, style: { marginLeft: 10 } })
                        ),
                        _react2['default'].createElement(
                            'div',
                            { style: { flex: 1, padding: '10px 20px' } },
                            header
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { style: { display: 'flex' } },
                        _react2['default'].createElement(EditorTab, { tabs: merged, active: left, style: { flex: 1 }, onChange: function (value) {
                                _this.setState({ left: value });
                            } })
                    ),
                    _react2['default'].createElement(_materialUi.Divider, null),
                    _react2['default'].createElement(
                        'div',
                        { style: { display: 'flex', flex: 1 } },
                        _react2['default'].createElement(
                            'div',
                            { style: _extends({ overflowY: 'auto', width: '100%', height: '100%', padding: 10 }, tabs.leftStyle) },
                            _react2['default'].createElement(EditorTabContent, { tabs: merged, active: left })
                        )
                    )
                );
            } else {

                return _react2['default'].createElement(
                    'div',
                    { style: _extends({ display: 'flex', flexDirection: 'column', height: '100%' }, style) },
                    _react2['default'].createElement(
                        'div',
                        { style: { display: 'flex', padding: '10px 20px 20px' } },
                        _react2['default'].createElement(
                            'div',
                            { style: { flex: 1, paddingRight: 20 } },
                            header
                        ),
                        _react2['default'].createElement(
                            'div',
                            { style: { paddingTop: 18 } },
                            _react2['default'].createElement(_materialUi.RaisedButton, { disabled: !saveEnabled, primary: true, label: pydio.MessageHash['53'], onTouchTap: onSaveAction }),
                            _react2['default'].createElement(_materialUi.FlatButton, { disabled: !saveEnabled, label: pydio.MessageHash['628'], onTouchTap: onRevertAction, style: { marginLeft: 10 } }),
                            _react2['default'].createElement(_materialUi.IconButton, { iconClassName: "mdi mdi-close", tooltip: pydio.MessageHash['86'], onTouchTap: onCloseAction, style: { marginLeft: 10 } })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { style: { display: 'flex' } },
                        _react2['default'].createElement(EditorTab, { tabs: tabs.left, active: left, style: { flex: 1 }, onChange: function (value) {
                                _this.setState({ left: value });
                            } }),
                        _react2['default'].createElement(EditorTab, { tabs: tabs.right, active: right, style: { flex: 1 }, onChange: function (value) {
                                _this.setState({ right: value });
                            } })
                    ),
                    _react2['default'].createElement(_materialUi.Divider, null),
                    _react2['default'].createElement(
                        'div',
                        { style: { display: 'flex', flex: 1 } },
                        _react2['default'].createElement(
                            'div',
                            { style: _extends({ overflowY: 'auto', width: '50%', borderRight: '1px solid #e0e0e0', padding: 10 }, tabs.leftStyle) },
                            _react2['default'].createElement(EditorTabContent, { tabs: tabs.left, active: left })
                        ),
                        _react2['default'].createElement(
                            'div',
                            { style: _extends({ overflowY: 'auto', width: '50%', padding: 10 }, tabs.rightStyle) },
                            _react2['default'].createElement(EditorTabContent, { tabs: tabs.right, active: right })
                        )
                    )
                );
            }
        }
    }]);

    return GenericEditor;
})(_react2['default'].Component);

exports['default'] = GenericEditor;
module.exports = exports['default'];

},{"material-ui":"material-ui","material-ui/styles":"material-ui/styles","react":"react"}],28:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _compositeCompositeCard = require('../composite/CompositeCard');

var _compositeCompositeCard2 = _interopRequireDefault(_compositeCompositeCard);

var _cellsCellCard = require('../cells/CellCard');

var _cellsCellCard2 = _interopRequireDefault(_cellsCellCard);

var InfoPanel = (function (_React$Component) {
    _inherits(InfoPanel, _React$Component);

    function InfoPanel(props) {
        _classCallCheck(this, InfoPanel);

        _get(Object.getPrototypeOf(InfoPanel.prototype), 'constructor', this).call(this, props);
        this.state = { popoverOpen: false };
    }

    _createClass(InfoPanel, [{
        key: 'openPopover',
        value: function openPopover(event) {
            this.setState({ popoverOpen: true, popoverAnchor: event.target });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var pydio = _props.pydio;
            var node = _props.node;

            if (node.isRoot()) {
                return _react2['default'].createElement(
                    PydioWorkspaces.InfoPanelCard,
                    null,
                    _react2['default'].createElement(
                        'div',
                        { style: { padding: 0 } },
                        _react2['default'].createElement(_cellsCellCard2['default'], { cellId: pydio.user.activeRepository, pydio: pydio, mode: 'infoPanel' })
                    )
                );
            } else {
                return _react2['default'].createElement(
                    PydioWorkspaces.InfoPanelCard,
                    null,
                    _react2['default'].createElement(
                        'div',
                        { style: { padding: 0 } },
                        _react2['default'].createElement(_compositeCompositeCard2['default'], { node: node, pydio: pydio, mode: 'infoPanel' })
                    )
                );
            }
        }
    }]);

    return InfoPanel;
})(_react2['default'].Component);

exports['default'] = InfoPanel;
module.exports = exports['default'];

},{"../cells/CellCard":2,"../composite/CompositeCard":10,"material-ui":"material-ui","react":"react"}],29:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _pydioUtilXml = require('pydio/util/xml');

var _pydioUtilXml2 = _interopRequireDefault(_pydioUtilXml);

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _pydioHttpRestApi = require('pydio/http/rest-api');

var _Pydio$requireLib = _pydio2['default'].requireLib('boot');

var moment = _Pydio$requireLib.moment;

var ShareHelper = (function () {
    function ShareHelper() {
        _classCallCheck(this, ShareHelper);
    }

    _createClass(ShareHelper, null, [{
        key: 'mailerSupported',
        value: function mailerSupported(pydio) {
            return pydio.Parameters.get('validMailer');
        }
    }, {
        key: 'getAuthorizations',
        value: function getAuthorizations(pydio) {

            var pluginConfigs = pydio.getPluginConfigs("action.share");
            var authorizations = {
                folder_public_link: pluginConfigs.get("ENABLE_FOLDER_PUBLIC_LINK"),
                folder_workspaces: pluginConfigs.get("ENABLE_FOLDER_INTERNAL_SHARING"),
                file_public_link: pluginConfigs.get("ENABLE_FILE_PUBLIC_LINK"),
                file_workspaces: pluginConfigs.get("ENABLE_FILE_INTERNAL_SHARING"),
                editable_hash: pluginConfigs.get("HASH_USER_EDITABLE"),
                hash_min_length: pluginConfigs.get("HASH_MIN_LENGTH") || 6,
                password_mandatory: false,
                max_expiration: pluginConfigs.get("FILE_MAX_EXPIRATION"),
                max_downloads: pluginConfigs.get("FILE_MAX_DOWNLOAD")
            };
            var passMandatory = pluginConfigs.get("SHARE_FORCE_PASSWORD");
            if (passMandatory) {
                authorizations.password_mandatory = true;
            }
            authorizations.password_placeholder = passMandatory ? pydio.MessageHash['share_center.176'] : pydio.MessageHash['share_center.148'];
            return authorizations;
        }
    }, {
        key: 'buildPublicUrl',
        value: function buildPublicUrl(pydio, linkHash) {
            var shortForm = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

            var params = pydio.Parameters;
            if (shortForm) {
                return '...' + params.get('PUBLIC_BASEURI') + '/' + linkHash;
            } else {
                var url = pydio.getFrontendUrl();
                return url.protocol + '//' + url.host + params.get('PUBLIC_BASEURI') + '/' + linkHash;
            }
        }

        /**
         * @param pydio {Pydio}
         * @param node {AjxpNode}
         * @return {{preview: boolean, writeable: boolean}}
         */
    }, {
        key: 'nodeHasEditor',
        value: function nodeHasEditor(pydio, node) {
            if (!node.getMetadata().has('mime_has_preview_editor')) {
                var editors = pydio.Registry.findEditorsForMime(node.getAjxpMime());
                editors = editors.filter(function (e) {
                    return e.id !== 'editor.browser' && e.id !== 'editor.other';
                });
                var writeable = editors.filter(function (e) {
                    return e.canWrite;
                });
                node.getMetadata().set("mime_has_preview_editor", editors.length > 0);
                node.getMetadata().set("mime_has_writeable_editor", writeable.length > 0);
            }
            return {
                preview: node.getMetadata().get("mime_has_preview_editor"),
                writeable: node.getMetadata().get("mime_has_writeable_editor")
            };
        }

        /**
         *
         * @param pydio {Pydio}
         * @param linkModel {CompositeModel}
         * @return {*}
         */
    }, {
        key: 'compileLayoutData',
        value: function compileLayoutData(pydio, linkModel) {

            // Search registry for template nodes starting with minisite_
            var tmpl = undefined,
                currentExt = undefined;
            var node = linkModel.getNode();
            if (node.isLeaf()) {
                currentExt = node.getAjxpMime();
                tmpl = _pydioUtilXml2['default'].XPathSelectNodes(pydio.getXmlRegistry(), "//template[contains(@name, 'unique_preview_')]");
            } else {
                tmpl = _pydioUtilXml2['default'].XPathSelectNodes(pydio.getXmlRegistry(), "//template[contains(@name, 'minisite_')]");
            }

            if (!tmpl.length) {
                return [];
            }
            if (tmpl.length === 1) {
                return [{ LAYOUT_NAME: tmpl[0].getAttribute('element'), LAYOUT_LABEL: '' }];
            }
            var crtTheme = pydio.Parameters.get('theme');
            var values = [];
            tmpl.map(function (xmlNode) {
                var theme = xmlNode.getAttribute('theme');
                if (theme && theme !== crtTheme) {
                    return;
                }
                var element = xmlNode.getAttribute('element');
                var name = xmlNode.getAttribute('name');
                var label = xmlNode.getAttribute('label');
                if (currentExt && name === "unique_preview_file" && !ShareHelper.nodeHasEditor(pydio, node).preview) {
                    // Ignore this template
                    return;
                }
                if (label) {
                    if (MessageHash[label]) {
                        label = MessageHash[label];
                    }
                } else {
                    label = xmlNode.getAttribute('name');
                }
                values[name] = element;
                values.push({ LAYOUT_NAME: name, LAYOUT_ELEMENT: element, LAYOUT_LABEL: label });
            });
            return values;
        }
    }, {
        key: 'forceMailerOldSchool',
        value: function forceMailerOldSchool() {
            return global.pydio.getPluginConfigs("action.share").get("EMAIL_INVITE_EXTERNAL");
        }
    }, {
        key: 'qrcodeEnabled',
        value: function qrcodeEnabled() {
            return global.pydio.getPluginConfigs("action.share").get("CREATE_QRCODE");
        }

        /**
         *
         * @param node
         * @param cellModel
         * @param targetUsers
         * @param callback
         */
    }, {
        key: 'sendCellInvitation',
        value: function sendCellInvitation(node, cellModel, targetUsers) {
            var callback = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];

            var _ShareHelper$prepareEmail = ShareHelper.prepareEmail(node, null, cellModel);

            var templateId = _ShareHelper$prepareEmail.templateId;
            var templateData = _ShareHelper$prepareEmail.templateData;

            var mail = new _pydioHttpRestApi.MailerMail();
            var api = new _pydioHttpRestApi.MailerServiceApi(_pydioHttpApi2['default'].getRestClient());
            mail.To = [];
            var ignored = 0;
            Object.keys(targetUsers).map(function (k) {
                var u = targetUsers[k];
                var to = new _pydioHttpRestApi.MailerUser();
                if (u.IdmUser && u.IdmUser.Login && u.IdmUser.Attributes && (u.IdmUser.Attributes['hasEmail'] || u.IdmUser.Attributes['email'])) {
                    to.Uuid = u.IdmUser.Login;
                    mail.To.push(to);
                } else {
                    ignored++;
                }
                return to;
            });
            var messages = _pydio2['default'].getInstance().MessageHash;
            if (mail.To.length) {
                mail.TemplateId = templateId;
                mail.TemplateData = templateData;
                api.send(mail).then(function () {
                    callback();
                });
                var msg = messages['core.mailer.1'].replace('%s', mail.To.length);
                if (ignored > 0) {
                    msg += ' ' + messages['core.mailer.entries.ignored'];
                }
                _pydio2['default'].getInstance().UI.displayMessage('SUCCESS', msg);
            } else {
                _pydio2['default'].getInstance().UI.displayMessage('ERROR', messages['core.mailer.entries.ignored']);
            }
        }

        /**
         *
         * @param node {Node}
         * @param linkModel {LinkModel}
         * @param cellModel {CellModel}
         * @return {{templateId: string, templateData: {}, message: string, linkModel: *}}
         */
    }, {
        key: 'prepareEmail',
        value: function prepareEmail(node) {
            var linkModel = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
            var cellModel = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            var templateData = {};
            var templateId = "";
            var message = "";
            var user = pydio.user;
            if (user.getPreference("displayName")) {
                templateData["Inviter"] = user.getPreference("displayName");
            } else {
                templateData["Inviter"] = user.id;
            }
            if (linkModel) {
                var linkObject = linkModel.getLink();
                if (node.isLeaf()) {
                    templateId = "PublicFile";
                    templateData["FileName"] = linkObject.Label || node.getLabel();
                } else {
                    templateId = "PublicFolder";
                    templateData["FolderName"] = linkObject.Label || node.getLabel();
                }
                templateData["LinkPath"] = "/public/" + linkObject.LinkHash;
                if (linkObject.MaxDownloads) {
                    templateData["MaxDownloads"] = linkObject.MaxDownloads + "";
                }
                if (linkObject.AccessEnd) {
                    var m = moment(new Date(linkObject.AccessEnd * 1000));
                    templateData["Expire"] = m.format('LL');
                }
            } else {
                templateId = "Cell";
                templateData["Cell"] = cellModel.getLabel();
            }

            return {
                templateId: templateId, templateData: templateData, message: message, linkModel: linkModel
            };
        }
    }]);

    return ShareHelper;
})();

exports['default'] = ShareHelper;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"pydio":"pydio","pydio/http/api":"pydio/http/api","pydio/http/rest-api":"pydio/http/rest-api","pydio/util/xml":"pydio/util/xml"}]},{},[15])(15)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZXMvYnVpbGQvZGlhbG9nL1NoYXJlQ29udGV4dENvbnN1bWVyLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9jZWxscy9DZWxsQ2FyZC5qcyIsInJlcy9idWlsZC9kaWFsb2cvY2VsbHMvQ3JlYXRlQ2VsbERpYWxvZy5qcyIsInJlcy9idWlsZC9kaWFsb2cvY2VsbHMvRWRpdENlbGxEaWFsb2cuanMiLCJyZXMvYnVpbGQvZGlhbG9nL2NlbGxzL05vZGVzUGlja2VyLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9jZWxscy9TaGFyZWRVc2VyRW50cnkuanMiLCJyZXMvYnVpbGQvZGlhbG9nL2NlbGxzL1NoYXJlZFVzZXJzLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9jZWxscy9Vc2VyQmFkZ2UuanMiLCJyZXMvYnVpbGQvZGlhbG9nL2NvbXBvc2l0ZS9DZWxsc0xpc3QuanMiLCJyZXMvYnVpbGQvZGlhbG9nL2NvbXBvc2l0ZS9Db21wb3NpdGVDYXJkLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9jb21wb3NpdGUvQ29tcG9zaXRlRGlhbG9nLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9jb21wb3NpdGUvQ29tcG9zaXRlTW9kZWwuanMiLCJyZXMvYnVpbGQvZGlhbG9nL2NvbXBvc2l0ZS9NYWlsZXIuanMiLCJyZXMvYnVpbGQvZGlhbG9nL2NvbXBvc2l0ZS9TaW1wbGVMaW5rQ2FyZC5qcyIsInJlcy9idWlsZC9kaWFsb2cvaW5kZXguanMiLCJyZXMvYnVpbGQvZGlhbG9nL2xpbmtzL0ZpZWxkLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9saW5rcy9MYWJlbFBhbmVsLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9saW5rcy9MaW5rTW9kZWwuanMiLCJyZXMvYnVpbGQvZGlhbG9nL2xpbmtzL1BhbmVsLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9saW5rcy9QZXJtaXNzaW9ucy5qcyIsInJlcy9idWlsZC9kaWFsb2cvbGlua3MvUHVibGljTGlua1RlbXBsYXRlLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9saW5rcy9TZWN1cmVPcHRpb25zLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9saW5rcy9UYXJnZXRlZFVzZXJzLmpzIiwicmVzL2J1aWxkL2RpYWxvZy9saW5rcy9WaXNpYmlsaXR5UGFuZWwuanMiLCJyZXMvYnVpbGQvZGlhbG9nL2xpc3RzL1NoYXJlVmlldy5qcyIsInJlcy9idWlsZC9kaWFsb2cvbWFpbi9BY3Rpb25CdXR0b24uanMiLCJyZXMvYnVpbGQvZGlhbG9nL21haW4vR2VuZXJpY0VkaXRvci5qcyIsInJlcy9idWlsZC9kaWFsb2cvbWFpbi9JbmZvUGFuZWwuanMiLCJyZXMvYnVpbGQvZGlhbG9nL21haW4vU2hhcmVIZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9TQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDalJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdmFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25UQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChQeWRpb0NvbXBvbmVudCkge1xuICAgIHZhciBTaGFyZUNvbnRleHRDb25zdW1lciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoU2hhcmVDb250ZXh0Q29uc3VtZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNoYXJlQ29udGV4dENvbnN1bWVyKCkge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNoYXJlQ29udGV4dENvbnN1bWVyKTtcblxuICAgICAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2hhcmVDb250ZXh0Q29uc3VtZXIucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhTaGFyZUNvbnRleHRDb25zdW1lciwgW3tcbiAgICAgICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgIHZhciBfY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBfY29udGV4dC5tZXNzYWdlcztcbiAgICAgICAgICAgICAgICB2YXIgZ2V0TWVzc2FnZSA9IF9jb250ZXh0LmdldE1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgdmFyIGlzUmVhZG9ubHkgPSBfY29udGV4dC5pc1JlYWRvbmx5O1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHRQcm9wcyA9IHsgbWVzc2FnZXM6IG1lc3NhZ2VzLCBnZXRNZXNzYWdlOiBnZXRNZXNzYWdlLCBpc1JlYWRvbmx5OiBpc1JlYWRvbmx5IH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHlkaW9Db21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBjb250ZXh0UHJvcHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBTaGFyZUNvbnRleHRDb25zdW1lcjtcbiAgICB9KShSZWFjdC5Db21wb25lbnQpO1xuXG4gICAgU2hhcmVDb250ZXh0Q29uc3VtZXIuY29udGV4dFR5cGVzID0ge1xuICAgICAgICBtZXNzYWdlczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZ2V0TWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGlzUmVhZG9ubHk6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gICAgfTtcblxuICAgIHJldHVybiBTaGFyZUNvbnRleHRDb25zdW1lcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgQ2hhcmxlcyBkdSBKZXUgLSBBYnN0cml1bSBTQVMgPHRlYW0gKGF0KSBweWQuaW8+XG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBQeWRpby5cbiAqXG4gKiBQeWRpbyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFB5ZGlvIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFB5ZGlvLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIFRoZSBsYXRlc3QgY29kZSBjYW4gYmUgZm91bmQgYXQgPGh0dHBzOi8vcHlkaW8uY29tPi5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9weWRpbyA9IHJlcXVpcmUoJ3B5ZGlvJyk7XG5cbnZhciBfcHlkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW8pO1xuXG52YXIgX0VkaXRDZWxsRGlhbG9nID0gcmVxdWlyZSgnLi9FZGl0Q2VsbERpYWxvZycpO1xuXG52YXIgX0VkaXRDZWxsRGlhbG9nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VkaXRDZWxsRGlhbG9nKTtcblxudmFyIF9weWRpb01vZGVsQ2VsbCA9IHJlcXVpcmUoJ3B5ZGlvL21vZGVsL2NlbGwnKTtcblxudmFyIF9weWRpb01vZGVsQ2VsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weWRpb01vZGVsQ2VsbCk7XG5cbnZhciBfcHlkaW9IdHRwUmVzb3VyY2VzTWFuYWdlciA9IHJlcXVpcmUoJ3B5ZGlvL2h0dHAvcmVzb3VyY2VzLW1hbmFnZXInKTtcblxudmFyIF9weWRpb0h0dHBSZXNvdXJjZXNNYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvSHR0cFJlc291cmNlc01hbmFnZXIpO1xuXG52YXIgX21hdGVyaWFsVWkgPSByZXF1aXJlKCdtYXRlcmlhbC11aScpO1xuXG52YXIgX21haW5TaGFyZUhlbHBlciA9IHJlcXVpcmUoXCIuLi9tYWluL1NoYXJlSGVscGVyXCIpO1xuXG52YXIgX21haW5TaGFyZUhlbHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWluU2hhcmVIZWxwZXIpO1xuXG52YXIgX1B5ZGlvJHJlcXVpcmVMaWIgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYihcImNvbXBvbmVudHNcIik7XG5cbnZhciBHZW5lcmljQ2FyZCA9IF9QeWRpbyRyZXF1aXJlTGliLkdlbmVyaWNDYXJkO1xudmFyIEdlbmVyaWNMaW5lID0gX1B5ZGlvJHJlcXVpcmVMaWIuR2VuZXJpY0xpbmU7XG5cbnZhciBDZWxsQ2FyZCA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDZWxsQ2FyZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDZWxsQ2FyZChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDZWxsQ2FyZCk7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2VsbENhcmQucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVkaXQ6IGZhbHNlLCBtb2RlbDogbmV3IF9weWRpb01vZGVsQ2VsbDJbJ2RlZmF1bHQnXSgpLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3B5ZGlvSHR0cFJlc291cmNlc01hbmFnZXIyWydkZWZhdWx0J10ubG9hZENsYXNzZXNBbmRBcHBseShbXCJQeWRpb0FjdGl2aXR5U3RyZWFtc1wiLCBcIlB5ZGlvQ29yZUFjdGlvbnNcIl0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXh0TGliczogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByb290Tm9kZSA9IHRoaXMucHJvcHMucm9vdE5vZGU7XG5cbiAgICAgICAgaWYgKHJvb3ROb2RlKSB7XG4gICAgICAgICAgICBpZiAocm9vdE5vZGUuZ2V0TWV0YWRhdGEoKS5oYXMoJ3ZpcnR1YWxfcm9vdCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlIG5vZGUgY2hpbGRyZW4gaW5zdGVhZFxuICAgICAgICAgICAgICAgIGlmIChyb290Tm9kZS5pc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm9vdE5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnN0YXRlLnJvb3ROb2Rlcy5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIGNoaWxkcmVuIGxvYWRcbiAgICAgICAgICAgICAgICAgICAgcm9vdE5vZGUub2JzZXJ2ZSgnbG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3ROb2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdE5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3ROb2Rlcy5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHJvb3ROb2Rlczogcm9vdE5vZGVzIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcm9vdE5vZGUubG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb290Tm9kZXMgPSBbcm9vdE5vZGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9DZWxsQ2FyZCA9IFBhbGV0dGVNb2RpZmllcih7cHJpbWFyeTFDb2xvcjonIzAwOTY4OCd9KShDZWxsQ2FyZCk7XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2VsbENhcmQsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHB5ZGlvID0gX3Byb3BzLnB5ZGlvO1xuICAgICAgICAgICAgdmFyIGNlbGxJZCA9IF9wcm9wcy5jZWxsSWQ7XG5cbiAgICAgICAgICAgIGlmIChweWRpby51c2VyLmFjdGl2ZVJlcG9zaXRvcnkgPT09IGNlbGxJZCkge1xuICAgICAgICAgICAgICAgIHB5ZGlvLnVzZXIuZ2V0QWN0aXZlUmVwb3NpdG9yeUFzQ2VsbCgpLnRoZW4oZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgbW9kZWw6IGNlbGwsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLm9ic2VydmUoJ3VwZGF0ZScsIF90aGlzMi5fb2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLm9ic2VydmUoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW9kZWwubG9hZCh0aGlzLnByb3BzLmNlbGxJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb2RlbC5zdG9wT2JzZXJ2aW5nKCd1cGRhdGUnLCB0aGlzLl9vYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VzZXJzSW52aXRhdGlvbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXNlcnNJbnZpdGF0aW9ucyh1c2VyT2JqZWN0cykge1xuICAgICAgICAgICAgX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5zZW5kQ2VsbEludml0YXRpb24odGhpcy5wcm9wcy5ub2RlLCB0aGlzLnN0YXRlLm1vZGVsLCB1c2VyT2JqZWN0cyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIG1vZGUgPSBfcHJvcHMyLm1vZGU7XG4gICAgICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMyLnB5ZGlvO1xuICAgICAgICAgICAgdmFyIGVkaXRvck9uZUNvbHVtbiA9IF9wcm9wczIuZWRpdG9yT25lQ29sdW1uO1xuICAgICAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICB2YXIgZWRpdCA9IF9zdGF0ZS5lZGl0O1xuICAgICAgICAgICAgdmFyIG1vZGVsID0gX3N0YXRlLm1vZGVsO1xuICAgICAgICAgICAgdmFyIGV4dExpYnMgPSBfc3RhdGUuZXh0TGlicztcbiAgICAgICAgICAgIHZhciByb290Tm9kZXMgPSBfc3RhdGUucm9vdE5vZGVzO1xuICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBfc3RhdGUubG9hZGluZztcblxuICAgICAgICAgICAgdmFyIG0gPSBmdW5jdGlvbiBtKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB5ZGlvLk1lc3NhZ2VIYXNoWydzaGFyZV9jZW50ZXIuJyArIGlkXTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciByb290U3R5bGUgPSB7IHdpZHRoOiAzNTAsIG1pbkhlaWdodDogMjcwIH07XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKGVkaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yT25lQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RTdHlsZSA9IHsgd2lkdGg6IDM1MCwgaGVpZ2h0OiA1MDAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290U3R5bGUgPSB7IHdpZHRoOiA3MDAsIGhlaWdodDogNTAwIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfRWRpdENlbGxEaWFsb2cyWydkZWZhdWx0J10sIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IG1vZGVsOiBtb2RlbCwgc2VuZEludml0YXRpb25zOiB0aGlzLnVzZXJzSW52aXRhdGlvbnMuYmluZCh0aGlzKSwgZWRpdG9yT25lQ29sdW1uOiBlZGl0b3JPbmVDb2x1bW4gfSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbCkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IG1vZGVsLmdldFJvb3ROb2RlcygpLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwuZ2V0Tm9kZUxhYmVsSW5Db250ZXh0KG5vZGUpO1xuICAgICAgICAgICAgICAgIH0pLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFub2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IG1vZGVsLmdldFJvb3ROb2RlcygpLmxlbmd0aCArICcgaXRlbShzKSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkZWxldGVBY3Rpb24gPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIGVkaXRBY3Rpb24gPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIG1vcmVNZW51SXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgIT09ICdpbmZvUGFuZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vcmVNZW51SXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmdldFV1aWQoKSAhPT0gcHlkaW8udXNlci5hY3RpdmVSZXBvc2l0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JlTWVudUl0ZW1zLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuTWVudUl0ZW0sIHsgcHJpbWFyeVRleHQ6IG0oMjQ2KSwgb25Ub3VjaFRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweWRpby50cmlnZ2VyUmVwb3NpdG9yeUNoYW5nZShtb2RlbC5nZXRVdWlkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMucHJvcHMub25EaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmlzRWRpdGFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRlbGV0ZUNlbGwoKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnByb3BzLm9uRGlzbWlzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgZWRpdDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLnByb3BzLm9uSGVpZ2h0Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkhlaWdodENoYW5nZSg1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JlTWVudUl0ZW1zLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuTWVudUl0ZW0sIHsgcHJpbWFyeVRleHQ6IG0oMjQ3KSwgb25Ub3VjaFRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgZWRpdDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVNZW51SXRlbXMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5NZW51SXRlbSwgeyBwcmltYXJ5VGV4dDogbSgyNDgpLCBvblRvdWNoVGFwOiBkZWxldGVBY3Rpb24gfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB3YXRjaExpbmUgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIGJtQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmIChleHRMaWJzICYmIHJvb3ROb2RlcyAmJiAhbG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChQeWRpb0FjdGl2aXR5U3RyZWFtcy5XYXRjaFNlbGVjdG9yLCB7IHB5ZGlvOiBweWRpbywgbm9kZXM6IHJvb3ROb2RlcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hMaW5lID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoR2VuZXJpY0xpbmUsIHsgaWNvbkNsYXNzTmFtZTogXCJtZGkgbWRpLWJlbGwtb3V0bGluZVwiLCBsZWdlbmQ6IHB5ZGlvLk1lc3NhZ2VIYXNoWydtZXRhLndhdGNoLnNlbGVjdG9yLmxlZ2VuZCddLCBkYXRhOiBzZWxlY3RvciwgaWNvblN0eWxlOiB7IG1hcmdpblRvcDogMzIgfSB9KTtcbiAgICAgICAgICAgICAgICAgICAgYm1CdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChQeWRpb0NvcmVBY3Rpb25zLkJvb2ttYXJrQnV0dG9uLCB7IHB5ZGlvOiBweWRpbywgbm9kZXM6IHJvb3ROb2Rlcywgc3R5bGVzOiB7IGljb25TdHlsZTogeyBjb2xvcjogJ3doaXRlJyB9IH0gfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGVudCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBHZW5lcmljQ2FyZCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHlkaW86IHB5ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1vZGVsLmdldExhYmVsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3NBY3Rpb246IHRoaXMucHJvcHMub25EaXNtaXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJBY3Rpb25zOiBibUJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlQWN0aW9uOiBkZWxldGVBY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVkaXRBY3Rpb246IGVkaXRBY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJTbWFsbDogbW9kZSA9PT0gJ2luZm9QYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JlTWVudUl0ZW1zOiBtb3JlTWVudUl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIG1vZGVsLmdldERlc2NyaXB0aW9uKCkgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoR2VuZXJpY0xpbmUsIHsgaWNvbkNsYXNzTmFtZTogJ21kaSBtZGktaW5mb3JtYXRpb24nLCBsZWdlbmQ6IG0oMTQ1KSwgZGF0YTogbW9kZWwuZ2V0RGVzY3JpcHRpb24oKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoR2VuZXJpY0xpbmUsIHsgaWNvbkNsYXNzTmFtZTogJ21kaSBtZGktYWNjb3VudC1tdWx0aXBsZScsIGxlZ2VuZDogbSg1NCksIGRhdGE6IG1vZGVsLmdldEFjbHNTdWJqZWN0cygpIH0pLFxuICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyAmJiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChHZW5lcmljTGluZSwgeyBpY29uQ2xhc3NOYW1lOiAnbWRpIG1kaS1mb2xkZXInLCBsZWdlbmQ6IG0oMjQ5KSwgZGF0YTogbm9kZXMgfSksXG4gICAgICAgICAgICAgICAgICAgIHdhdGNoTGluZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyAmJiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGhlaWdodDogMTIwLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiAnI2FhYScgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3B5ZGlvMlsnZGVmYXVsdCddLmdldE1lc3NhZ2VzKClbNDY2XVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ2luZm9QYW5lbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgX21hdGVyaWFsVWkuUGFwZXIsXG4gICAgICAgICAgICAgICAgeyB6RGVwdGg6IDAsIHN0eWxlOiByb290U3R5bGUgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENlbGxDYXJkO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENlbGxDYXJkO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDctMjAxNyBDaGFybGVzIGR1IEpldSAtIEFic3RyaXVtIFNBUyA8dGVhbSAoYXQpIHB5ZC5pbz5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFB5ZGlvLlxuICpcbiAqIFB5ZGlvIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogUHlkaW8gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggUHlkaW8uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVGhlIGxhdGVzdCBjb2RlIGNhbiBiZSBmb3VuZCBhdCA8aHR0cHM6Ly9weWRpby5jb20+LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHlkaW8gPSByZXF1aXJlKCdweWRpbycpO1xuXG52YXIgX3B5ZGlvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvKTtcblxudmFyIF9tYXRlcmlhbFVpID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWknKTtcblxudmFyIF9tYXRlcmlhbFVpU3R5bGVzID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWkvc3R5bGVzJyk7XG5cbnZhciBfU2hhcmVkVXNlcnMgPSByZXF1aXJlKCcuL1NoYXJlZFVzZXJzJyk7XG5cbnZhciBfU2hhcmVkVXNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2hhcmVkVXNlcnMpO1xuXG52YXIgX05vZGVzUGlja2VyID0gcmVxdWlyZSgnLi9Ob2Rlc1BpY2tlcicpO1xuXG52YXIgX05vZGVzUGlja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVzUGlja2VyKTtcblxudmFyIF9weWRpb01vZGVsQ2VsbCA9IHJlcXVpcmUoJ3B5ZGlvL21vZGVsL2NlbGwnKTtcblxudmFyIF9weWRpb01vZGVsQ2VsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weWRpb01vZGVsQ2VsbCk7XG5cbnZhciBfUHlkaW8kcmVxdWlyZUxpYiA9IF9weWRpbzJbJ2RlZmF1bHQnXS5yZXF1aXJlTGliKCdob2MnKTtcblxudmFyIE1vZGVyblRleHRGaWVsZCA9IF9QeWRpbyRyZXF1aXJlTGliLk1vZGVyblRleHRGaWVsZDtcblxuLyoqXG4gKiBEaWFsb2cgZm9yIGxldHRpbmcgdXNlcnMgY3JlYXRlIGEgd29ya3NwYWNlXG4gKi9cbnZhciBDcmVhdGVDZWxsRGlhbG9nID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0NyZWF0ZUNlbGxEaWFsb2cnLFxuXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICAgICAgbWVzc2FnZXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBnZXRNZXNzYWdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGlzUmVhZG9ubHk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICAgIH0sXG5cbiAgICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gdGhpcy5wcm9wcy5weWRpby5NZXNzYWdlSGFzaDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgICAgIGdldE1lc3NhZ2U6IGZ1bmN0aW9uIGdldE1lc3NhZ2UobWVzc2FnZUlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/ICdzaGFyZV9jZW50ZXInIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzW25hbWVzcGFjZSArIChuYW1lc3BhY2UgPyBcIi5cIiA6IFwiXCIpICsgbWVzc2FnZUlkXSB8fCBtZXNzYWdlSWQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZUlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1JlYWRvbmx5OiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pLmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7IHN0ZXA6ICd1c2VycycsIG1vZGVsOiBuZXcgX3B5ZGlvTW9kZWxDZWxsMlsnZGVmYXVsdCddKCksIHNhdmluZzogZmFsc2UgfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVmcy50aXRsZS5mb2N1cygpO1xuICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLm9ic2VydmUoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUubW9kZWwuc3RvcE9ic2VydmluZygndXBkYXRlJyk7XG4gICAgfSxcblxuICAgIHN1Ym1pdDogZnVuY3Rpb24gc3VibWl0KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLnN0YXRlLm1vZGVsO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZpbmc6IHRydWUgfSk7XG4gICAgICAgIG1vZGVsLnNhdmUoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHNhdmluZzogZmFsc2UgfSk7XG4gICAgICAgIH0pWydjYXRjaCddKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgIHB5ZGlvLlVJLmRpc3BsYXlNZXNzYWdlKCdFUlJPUicsIHJlYXNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHNhdmluZzogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBtOiBmdW5jdGlvbiBtKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnB5ZGlvLk1lc3NhZ2VIYXNoWydzaGFyZV9jZW50ZXIuJyArIGlkXTtcbiAgICB9LFxuXG4gICAgY29tcHV0ZVN1bW1hcnlTdHJpbmc6IGZ1bmN0aW9uIGNvbXB1dGVTdW1tYXJ5U3RyaW5nKCkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLnN0YXRlLm1vZGVsO1xuXG4gICAgICAgIHZhciB1c2VycyA9IDA7XG4gICAgICAgIHZhciBncm91cHMgPSAwO1xuICAgICAgICB2YXIgdGVhbXMgPSAwO1xuICAgICAgICB2YXIgdXNlclN0cmluZyA9IFtdO1xuICAgICAgICB2YXIgb2JqcyA9IG1vZGVsLmdldEFjbHMoKTtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqcykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICB2YXIgYWNsID0gb2Jqc1trXTtcbiAgICAgICAgICAgIGlmIChhY2wuR3JvdXApIGdyb3VwcysrO2Vsc2UgaWYgKGFjbC5Sb2xlKSB0ZWFtcysrO2Vsc2UgdXNlcnMrKztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1c2VycykgdXNlclN0cmluZy5wdXNoKHVzZXJzICsgJyAnICsgdGhpcy5tKDI3MCkpO1xuICAgICAgICBpZiAoZ3JvdXBzKSB1c2VyU3RyaW5nLnB1c2goZ3JvdXBzICsgJyAnICsgdGhpcy5tKDI3MSkpO1xuICAgICAgICBpZiAodGVhbXMpIHVzZXJTdHJpbmcucHVzaCh0ZWFtcyArICcgJyArIHRoaXMubSgyNzIpKTtcbiAgICAgICAgdmFyIGZpbmFsU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodXNlclN0cmluZy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGZpbmFsU3RyaW5nID0gdXNlclN0cmluZ1swXSArICcsICcgKyB1c2VyU3RyaW5nWzFdICsgdGhpcy5tKDI3NCkgKyB1c2VyU3RyaW5nWzNdO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJTdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBmaW5hbFN0cmluZyA9IHRoaXMubSgyNzMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmluYWxTdHJpbmcgPSB1c2VyU3RyaW5nLmpvaW4odGhpcy5tKDI3NCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm0oMjY5KS5yZXBsYWNlKCclVVNFUlMnLCBmaW5hbFN0cmluZyk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgYnV0dG9ucyA9IFtdO1xuICAgICAgICB2YXIgY29udGVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHB5ZGlvID0gdGhpcy5wcm9wcy5weWRpbztcbiAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHZhciBzdGVwID0gX3N0YXRlLnN0ZXA7XG4gICAgICAgIHZhciBtb2RlbCA9IF9zdGF0ZS5tb2RlbDtcbiAgICAgICAgdmFyIHNhdmluZyA9IF9zdGF0ZS5zYXZpbmc7XG5cbiAgICAgICAgdmFyIGRpYWxvZ0xhYmVsID0gcHlkaW8uTWVzc2FnZUhhc2hbJzQxOCddO1xuICAgICAgICBpZiAoc3RlcCAhPT0gJ3VzZXJzJykge1xuICAgICAgICAgICAgZGlhbG9nTGFiZWwgPSBtb2RlbC5nZXRMYWJlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ZXAgPT09ICd1c2VycycpIHtcblxuICAgICAgICAgICAgY29udGVudCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm0oMjc1KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoTW9kZXJuVGV4dEZpZWxkLCB7IHJlZjogXCJ0aXRsZVwiLCBmbG9hdGluZ0xhYmVsVGV4dDogdGhpcy5tKDI3NiksIHZhbHVlOiBtb2RlbC5nZXRMYWJlbCgpLCBvbkNoYW5nZTogZnVuY3Rpb24gKGUsIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnNldExhYmVsKHYpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdWxsV2lkdGg6IHRydWUgfSksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoTW9kZXJuVGV4dEZpZWxkLCB7IGZsb2F0aW5nTGFiZWxUZXh0OiB0aGlzLm0oMjc3KSwgdmFsdWU6IG1vZGVsLmdldERlc2NyaXB0aW9uKCksIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSwgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuc2V0RGVzY3JpcHRpb24odik7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bGxXaWR0aDogdHJ1ZSB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG1vZGVsLmdldExhYmVsKCkpIHtcbiAgICAgICAgICAgICAgICBidXR0b25zLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRmxhdEJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdxdWljaycsXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhbW9kZWwuZ2V0TGFiZWwoKSB8fCBzYXZpbmcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLm0oJ2NlbGxzLmNyZWF0ZS5hZHZhbmNlZCcpLCAvLyBBZHZhbmNlZFxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBzdGVwOiAnZGF0YScgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBtYXJnaW46ICcwICAxMHB4JywgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiAnIzlFOUU5RScgfSB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm0oJ2NlbGxzLmNyZWF0ZS5idXR0b25zLnNlcGFyYXRvcicpXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5SYWlzZWRCdXR0b24sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICduZXh0MScsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFtb2RlbC5nZXRMYWJlbCgpIHx8IHNhdmluZyxcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLm0oMjc5KSwgLy8gQ3JlYXRlIENlbGxcbiAgICAgICAgICAgICAgICBvblRvdWNoVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSAnZGF0YScpIHtcblxuICAgICAgICAgICAgY29udGVudCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdoNScsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAtMTAgfSB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm0oMjc4KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX1NoYXJlZFVzZXJzMlsnZGVmYXVsdCddLCB7XG4gICAgICAgICAgICAgICAgICAgIHB5ZGlvOiBweWRpbyxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEFjbHM6IG1vZGVsLmdldEFjbHMoKSxcblxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlczogW3B5ZGlvLnVzZXIuaWRdLFxuICAgICAgICAgICAgICAgICAgICBvblVzZXJPYmplY3RBZGQ6IG1vZGVsLmFkZFVzZXIuYmluZChtb2RlbCksXG4gICAgICAgICAgICAgICAgICAgIG9uVXNlck9iamVjdFJlbW92ZTogbW9kZWwucmVtb3ZlVXNlci5iaW5kKG1vZGVsKSxcbiAgICAgICAgICAgICAgICAgICAgb25Vc2VyT2JqZWN0VXBkYXRlUmlnaHQ6IG1vZGVsLnVwZGF0ZVVzZXJSaWdodC5iaW5kKG1vZGVsKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBidXR0b25zLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRmxhdEJ1dHRvbiwgeyBrZXk6ICdwcmV2MScsIHByaW1hcnk6IGZhbHNlLCBsYWJlbDogcHlkaW8uTWVzc2FnZUhhc2hbJzMwNCddLCBvblRvdWNoVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IHN0ZXA6ICd1c2VycycgfSk7XG4gICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgICAgICBidXR0b25zLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRmxhdEJ1dHRvbiwgeyBrZXk6ICduZXh0MicsIHByaW1hcnk6IHRydWUsIGxhYmVsOiBweWRpby5NZXNzYWdlSGFzaFsnMTc5J10sIG9uVG91Y2hUYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5zZXRTdGF0ZSh7IHN0ZXA6ICdsYWJlbCcgfSk7XG4gICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnaDUnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IG1hcmdpblRvcDogLTEwIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tKCdjZWxscy5jcmVhdGUudGl0bGUuZmlsbC5mb2xkZXJzJylcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBjb2xvcjogJyM5ZTllOWUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlU3VtbWFyeVN0cmluZygpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgcGFkZGluZ1RvcDogMTYgfSB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfTm9kZXNQaWNrZXIyWydkZWZhdWx0J10sIHsgcHlkaW86IHB5ZGlvLCBtb2RlbDogbW9kZWwgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBidXR0b25zLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRmxhdEJ1dHRvbiwgeyBrZXk6ICdwcmV2MicsIHByaW1hcnk6IGZhbHNlLCBsYWJlbDogcHlkaW8uTWVzc2FnZUhhc2hbJzMwNCddLCBvblRvdWNoVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IHN0ZXA6ICdkYXRhJyB9KTtcbiAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5SYWlzZWRCdXR0b24sIHsga2V5OiAnc3VibWl0JywgZGlzYWJsZWQ6IHNhdmluZywgcHJpbWFyeTogdHJ1ZSwgbGFiZWw6IHRoaXMubSgyNzkpLCBvblRvdWNoVGFwOiB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogeyB3aWR0aDogMzgwLCBmb250U2l6ZTogMTMsIGNvbG9yOiAncmdiYSgwLDAsMCwuODcpJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWluSGVpZ2h0OiAzMDAgfSB9LFxuICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nTGVmdDogMjAgfSB9LFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkZvbnRJY29uLCB7IGNsYXNzTmFtZTogXCJpY29tb29uLWNlbGxzLWZ1bGwtcGx1c1wiIH0pLFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBwYWRkaW5nOiAyMCwgZm9udFNpemU6IDIyIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nTGFiZWxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBwYWRkaW5nOiAnMjBweCAyMHB4IDEwcHgnLCBmbGV4OiAxIH0gfSxcbiAgICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBwYWRkaW5nOiAnMTJweCAxNnB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfSB9LFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDcmVhdGVDZWxsRGlhbG9nID0gKDAsIF9tYXRlcmlhbFVpU3R5bGVzLm11aVRoZW1lYWJsZSkoKShDcmVhdGVDZWxsRGlhbG9nKTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENyZWF0ZUNlbGxEaWFsb2c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDE3IENoYXJsZXMgZHUgSmV1IC0gQWJzdHJpdW0gU0FTIDx0ZWFtIChhdCkgcHlkLmlvPlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUHlkaW8uXG4gKlxuICogUHlkaW8gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBQeWRpbyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBQeWRpby4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBUaGUgbGF0ZXN0IGNvZGUgY2FuIGJlIGZvdW5kIGF0IDxodHRwczovL3B5ZGlvLmNvbT4uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfU2hhcmVkVXNlcnMgPSByZXF1aXJlKCcuL1NoYXJlZFVzZXJzJyk7XG5cbnZhciBfU2hhcmVkVXNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2hhcmVkVXNlcnMpO1xuXG52YXIgX05vZGVzUGlja2VyID0gcmVxdWlyZSgnLi9Ob2Rlc1BpY2tlcicpO1xuXG52YXIgX05vZGVzUGlja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVzUGlja2VyKTtcblxudmFyIF9tYWluR2VuZXJpY0VkaXRvciA9IHJlcXVpcmUoJy4uL21haW4vR2VuZXJpY0VkaXRvcicpO1xuXG52YXIgX21haW5HZW5lcmljRWRpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21haW5HZW5lcmljRWRpdG9yKTtcblxudmFyIF9weWRpbyA9IHJlcXVpcmUoJ3B5ZGlvJyk7XG5cbnZhciBfcHlkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW8pO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX1B5ZGlvJHJlcXVpcmVMaWIgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYignY29tcG9uZW50cycpO1xuXG52YXIgUmVzb3VyY2VQb2xpY2llc1BhbmVsID0gX1B5ZGlvJHJlcXVpcmVMaWIuUmVzb3VyY2VQb2xpY2llc1BhbmVsO1xuXG52YXIgX1B5ZGlvJHJlcXVpcmVMaWIyID0gX3B5ZGlvMlsnZGVmYXVsdCddLnJlcXVpcmVMaWIoJ2hvYycpO1xuXG52YXIgTW9kZXJuVGV4dEZpZWxkID0gX1B5ZGlvJHJlcXVpcmVMaWIyLk1vZGVyblRleHRGaWVsZDtcblxuLyoqXG4gKiBEaWFsb2cgZm9yIGxldHRpbmcgdXNlcnMgY3JlYXRlIGEgd29ya3NwYWNlXG4gKi9cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0VkaXRDZWxsRGlhbG9nJyxcblxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgICAgIG1lc3NhZ2VzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBnZXRNZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgaXNSZWFkb25seTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgICB9LFxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMucHJvcHMucHlkaW8uTWVzc2FnZUhhc2g7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgICAgICBnZXRNZXNzYWdlOiBmdW5jdGlvbiBnZXRNZXNzYWdlKG1lc3NhZ2VJZCkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAnc2hhcmVfY2VudGVyJyA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlc1tuYW1lc3BhY2UgKyAobmFtZXNwYWNlID8gXCIuXCIgOiBcIlwiKSArIG1lc3NhZ2VJZF0gfHwgbWVzc2FnZUlkO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VJZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNSZWFkb25seTogZnVuY3Rpb24gaXNSZWFkb25seSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHN1Ym1pdDogZnVuY3Rpb24gc3VibWl0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgbW9kZWwgPSBfcHJvcHMubW9kZWw7XG4gICAgICAgIHZhciBweWRpbyA9IF9wcm9wcy5weWRpbztcblxuICAgICAgICB2YXIgZGlydHlSb290cyA9IG1vZGVsLmhhc0RpcnR5Um9vdE5vZGVzKCk7XG4gICAgICAgIG1vZGVsLnNhdmUoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICBpZiAoZGlydHlSb290cyAmJiBtb2RlbC5nZXRVdWlkKCkgPT09IHB5ZGlvLnVzZXIuZ2V0QWN0aXZlUmVwb3NpdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgcHlkaW8uZ29UbygnLycpO1xuICAgICAgICAgICAgICAgIHB5ZGlvLmZpcmVDb250ZXh0UmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBweWRpby5VSS5kaXNwbGF5TWVzc2FnZSgnRVJST1InLCByZWFzb24ubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMyLnB5ZGlvO1xuICAgICAgICB2YXIgbW9kZWwgPSBfcHJvcHMyLm1vZGVsO1xuICAgICAgICB2YXIgc2VuZEludml0YXRpb25zID0gX3Byb3BzMi5zZW5kSW52aXRhdGlvbnM7XG5cbiAgICAgICAgdmFyIG0gPSBmdW5jdGlvbiBtKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gcHlkaW8uTWVzc2FnZUhhc2hbJ3NoYXJlX2NlbnRlci4nICsgaWRdO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBoZWFkZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2Rlcm5UZXh0RmllbGQsIHsgZmxvYXRpbmdMYWJlbFRleHQ6IG0oMjY3KSwgdmFsdWU6IG1vZGVsLmdldExhYmVsKCksIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSwgdikge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zZXRMYWJlbCh2KTtcbiAgICAgICAgICAgICAgICB9LCBmdWxsV2lkdGg6IHRydWUgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGVyblRleHRGaWVsZCwgeyBmbG9hdGluZ0xhYmVsVGV4dDogbSgyNjgpLCB2YWx1ZTogbW9kZWwuZ2V0RGVzY3JpcHRpb24oKSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnNldERlc2NyaXB0aW9uKHYpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bGxXaWR0aDogdHJ1ZSB9KVxuICAgICAgICApO1xuICAgICAgICB2YXIgdGFicyA9IHtcbiAgICAgICAgICAgIGxlZnQ6IFt7XG4gICAgICAgICAgICAgICAgTGFiZWw6IG0oNTQpLFxuICAgICAgICAgICAgICAgIFZhbHVlOiAndXNlcnMnLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogUmVhY3QuY3JlYXRlRWxlbWVudChfU2hhcmVkVXNlcnMyWydkZWZhdWx0J10sIHtcbiAgICAgICAgICAgICAgICAgICAgcHlkaW86IHB5ZGlvLFxuICAgICAgICAgICAgICAgICAgICBjZWxsQWNsczogbW9kZWwuZ2V0QWNscygpLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlczogW3B5ZGlvLnVzZXIuaWRdLFxuICAgICAgICAgICAgICAgICAgICBzZW5kSW52aXRhdGlvbnM6IHNlbmRJbnZpdGF0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgb25Vc2VyT2JqZWN0QWRkOiBtb2RlbC5hZGRVc2VyLmJpbmQobW9kZWwpLFxuICAgICAgICAgICAgICAgICAgICBvblVzZXJPYmplY3RSZW1vdmU6IG1vZGVsLnJlbW92ZVVzZXIuYmluZChtb2RlbCksXG4gICAgICAgICAgICAgICAgICAgIG9uVXNlck9iamVjdFVwZGF0ZVJpZ2h0OiBtb2RlbC51cGRhdGVVc2VyUmlnaHQuYmluZChtb2RlbClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIExhYmVsOiBtKDI1MyksXG4gICAgICAgICAgICAgICAgVmFsdWU6ICdwZXJtaXNzaW9ucycsXG4gICAgICAgICAgICAgICAgQWx3YXlzTGFzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVzb3VyY2VQb2xpY2llc1BhbmVsLCB7XG4gICAgICAgICAgICAgICAgICAgIHB5ZGlvOiBweWRpbyxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiAnY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtKCdjZWxsLnZpc2liaWxpdHkuYWR2YW5jZWQnKSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VJZDogbW9kZWwuZ2V0VXVpZCgpLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBtYXJnaW46IC0xMCB9LFxuICAgICAgICAgICAgICAgICAgICBza2lwVGl0bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZVBvbGljaWVzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjZWxsQWNsczogbW9kZWwuZ2V0QWNscygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgcmlnaHQ6IFt7XG4gICAgICAgICAgICAgICAgTGFiZWw6IG0oMjQ5KSxcbiAgICAgICAgICAgICAgICBWYWx1ZTogJ2NvbnRlbnQnLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogUmVhY3QuY3JlYXRlRWxlbWVudChfTm9kZXNQaWNrZXIyWydkZWZhdWx0J10sIHsgcHlkaW86IHB5ZGlvLCBtb2RlbDogbW9kZWwsIG1vZGU6ICdlZGl0JyB9KVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfbWFpbkdlbmVyaWNFZGl0b3IyWydkZWZhdWx0J10sIHtcbiAgICAgICAgICAgIHB5ZGlvOiBweWRpbyxcbiAgICAgICAgICAgIHRhYnM6IHRhYnMsXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlcixcbiAgICAgICAgICAgIGVkaXRvck9uZUNvbHVtbjogdGhpcy5wcm9wcy5lZGl0b3JPbmVDb2x1bW4sXG4gICAgICAgICAgICBzYXZlRW5hYmxlZDogbW9kZWwuaXNEaXJ0eSgpLFxuICAgICAgICAgICAgb25TYXZlQWN0aW9uOiB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25DbG9zZUFjdGlvbjogdGhpcy5wcm9wcy5vbkRpc21pc3MsXG4gICAgICAgICAgICBvblJldmVydEFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1vZGVsLnJldmVydENoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgQ2hhcmxlcyBkdSBKZXUgLSBBYnN0cml1bSBTQVMgPHRlYW0gKGF0KSBweWQuaW8+XG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBQeWRpby5cbiAqXG4gKiBQeWRpbyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFB5ZGlvIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFB5ZGlvLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIFRoZSBsYXRlc3QgY29kZSBjYW4gYmUgZm91bmQgYXQgPGh0dHBzOi8vcHlkaW8uY29tPi5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9tYXRlcmlhbFVpID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWknKTtcblxudmFyIF9tYXRlcmlhbFVpU3R5bGVzID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWkvc3R5bGVzJyk7XG5cbnZhciBfcHlkaW9Nb2RlbERhdGFNb2RlbCA9IHJlcXVpcmUoJ3B5ZGlvL21vZGVsL2RhdGEtbW9kZWwnKTtcblxudmFyIF9weWRpb01vZGVsRGF0YU1vZGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvTW9kZWxEYXRhTW9kZWwpO1xuXG52YXIgX3JlcXVpcmUkcmVxdWlyZUxpYiA9IHJlcXVpcmUoJ3B5ZGlvJykucmVxdWlyZUxpYignY29tcG9uZW50cycpO1xuXG52YXIgRm9sZGVyc1RyZWUgPSBfcmVxdWlyZSRyZXF1aXJlTGliLkZvbGRlcnNUcmVlO1xuXG52YXIgTm9kZXNQaWNrZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTm9kZXNQaWNrZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTm9kZXNQaWNrZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGVzUGlja2VyKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihOb2Rlc1BpY2tlci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgICAgdmFyIGNydFdzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHZhciB1c2VyID0gcHJvcHMucHlkaW8udXNlcjtcbiAgICAgICAgdmFyIGF2YWlsID0gW107XG4gICAgICAgIHVzZXIuZ2V0UmVwb3NpdG9yaWVzTGlzdCgpLmZvckVhY2goZnVuY3Rpb24gKHJlcG8pIHtcbiAgICAgICAgICAgIGlmIChyZXBvLmdldEFjY2Vzc1R5cGUoKSA9PT0gJ2dhdGV3YXknKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG8uZ2V0SWQoKSA9PT0gdXNlci5hY3RpdmVSZXBvc2l0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBvLmdldE93bmVyKCkgPT09ICdzaGFyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGRvIG5vdCBwdXNoIHRvIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3J0V3MgPSByZXBvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdmFpbC5wdXNoKHJlcG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVdzID0gW107XG4gICAgICAgIHZhciBub3RPd25lZCA9IGF2YWlsLmZpbHRlcihmdW5jdGlvbiAocmVwbykge1xuICAgICAgICAgICAgcmV0dXJuICFyZXBvLmdldE93bmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgb3duZWQgPSBhdmFpbC5maWx0ZXIoZnVuY3Rpb24gKHJlcG8pIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvLmdldE93bmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobm90T3duZWQubGVuZ3RoICYmIG93bmVkLmxlbmd0aCkge1xuICAgICAgICAgICAgYXZhaWxhYmxlV3MgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5vdE93bmVkKSwgWydESVZJREVSJ10sIF90b0NvbnN1bWFibGVBcnJheShvd25lZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXZhaWxhYmxlV3MgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5vdE93bmVkKSwgX3RvQ29uc3VtYWJsZUFycmF5KG93bmVkKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZG0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChhdmFpbGFibGVXcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghY3J0V3MpIHtcbiAgICAgICAgICAgICAgICBjcnRXcyA9IGF2YWlsYWJsZVdzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG0gPSBfcHlkaW9Nb2RlbERhdGFNb2RlbDJbJ2RlZmF1bHQnXS5SZW1vdGVEYXRhTW9kZWxGYWN0b3J5KHsgdG1wX3JlcG9zaXRvcnlfaWQ6IGNydFdzLmdldElkKCkgfSk7XG4gICAgICAgICAgICB2YXIgcm9vdCA9IGRtLmdldFJvb3ROb2RlKCk7XG4gICAgICAgICAgICByb290LmdldE1ldGFkYXRhKCkuc2V0KCdyZXBvc2l0b3J5X2lkJywgY3J0V3MuZ2V0SWQoKSk7XG4gICAgICAgICAgICByb290LmxvYWQoZG0uZ2V0QWp4cE5vZGVQcm92aWRlcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhTW9kZWw6IGRtLFxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhdmFpbGFibGVXczogYXZhaWxhYmxlV3MsXG4gICAgICAgICAgICBjcnRXczogY3J0V3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTm9kZXNQaWNrZXIsIFt7XG4gICAgICAgIGtleTogJ3N3aXRjaFdvcmtzcGFjZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzd2l0Y2hXb3Jrc3BhY2Uod3MpIHtcbiAgICAgICAgICAgIHZhciBkbSA9IF9weWRpb01vZGVsRGF0YU1vZGVsMlsnZGVmYXVsdCddLlJlbW90ZURhdGFNb2RlbEZhY3RvcnkoeyB0bXBfcmVwb3NpdG9yeV9pZDogd3MuZ2V0SWQoKSB9KTtcbiAgICAgICAgICAgIHZhciByb290ID0gZG0uZ2V0Um9vdE5vZGUoKTtcbiAgICAgICAgICAgIHJvb3QuZ2V0TWV0YWRhdGEoKS5zZXQoJ3JlcG9zaXRvcnlfaWQnLCB3cy5nZXRJZCgpKTtcbiAgICAgICAgICAgIHJvb3QubG9hZChkbS5nZXRBanhwTm9kZVByb3ZpZGVyKCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNydFdzOiB3cywgZGF0YU1vZGVsOiBkbSB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG91Y2hUYXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hUYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgcHJldmVudHMgZ2hvc3QgY2xpY2suXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlUmVxdWVzdENsb3NlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3RDbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25WYWxpZGF0ZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25WYWxpZGF0ZU5vZGUoKSB7XG4gICAgICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBub2RlID0gX3N0YXRlLm5vZGU7XG4gICAgICAgICAgICB2YXIgY3J0V3MgPSBfc3RhdGUuY3J0V3M7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMubW9kZWwuYWRkUm9vdE5vZGUobm9kZSwgY3J0V3MuZ2V0SWQoKSk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk5vZGVTZWxlY3RlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk5vZGVTZWxlY3RlZChub2RlKSB7XG4gICAgICAgICAgICB2YXIgZGF0YU1vZGVsID0gdGhpcy5zdGF0ZS5kYXRhTW9kZWw7XG5cbiAgICAgICAgICAgIG5vZGUubG9hZChkYXRhTW9kZWwuZ2V0QWp4cE5vZGVQcm92aWRlcigpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBub2RlIFRyZWVOb2RlXG4gICAgICAgICAqIEByZXR1cm4ge1hNTH1cbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlTGluZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOb2RlTGluZShub2RlKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLnByb3BzLm1vZGVsO1xuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuTGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsZWZ0SWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRm9udEljb24sIHsgY2xhc3NOYW1lOiBcIm1kaSBtZGktXCIgKyAobm9kZS5UeXBlID09PSAnTEVBRicgPyAnZmlsZScgOiAnZm9sZGVyJykgfSksXG4gICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ6IG1vZGVsLmdldE5vZGVMYWJlbEluQ29udGV4dChub2RlKSxcbiAgICAgICAgICAgICAgICByaWdodEljb25CdXR0b246IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkljb25CdXR0b24sIHsgb25Ub3VjaFRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwucmVtb3ZlUm9vdE5vZGUobm9kZS5VdWlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgaWNvbkNsYXNzTmFtZTogJ21kaSBtZGktZGVsZXRlJywgdG9vbHRpcDogJ1JlbW92ZScsIGljb25TdHlsZTogeyBjb2xvcjogJ3JnYmEoMCwwLDAsLjQzKScgfSB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBtb2RlbCA9IF9wcm9wcy5tb2RlbDtcbiAgICAgICAgICAgIHZhciBtdWlUaGVtZSA9IF9wcm9wcy5tdWlUaGVtZTtcbiAgICAgICAgICAgIHZhciBtb2RlID0gX3Byb3BzLm1vZGU7XG4gICAgICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMucHlkaW87XG5cbiAgICAgICAgICAgIHZhciBtID0gZnVuY3Rpb24gbShpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBweWRpby5NZXNzYWdlSGFzaFsnc2hhcmVfY2VudGVyLicgKyBpZF07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gbW9kZWwuZ2V0Um9vdE5vZGVzKCkgfHwgW107XG4gICAgICAgICAgICB2YXIgbm9kZUxpbmVzID0gW10sXG4gICAgICAgICAgICAgICAgZW1wdHlTdGF0ZVN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG5vZGVzLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGVMaW5lcy5wdXNoKF90aGlzLnJlbmRlck5vZGVMaW5lKG5vZGUpKTtcbiAgICAgICAgICAgICAgICBub2RlTGluZXMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5EaXZpZGVyLCB7IGluc2V0OiB0cnVlIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZUxpbmVzLnBvcCgpO1xuICAgICAgICAgICAgaWYgKCFub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5U3RhdGVTdHJpbmcgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgY29sb3I6ICdyZ2JhKDAsMCwwLC41NCknLCBmb250U3R5bGU6ICdpdGFsaWMnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG0oMjgwKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZW1wdHlTdGF0ZVN0cmluZyA9IDxzcGFuIHN0eWxlPXt7Y29sb3I6J3JnYmEoMCwwLDAsLjU0KScsIGZvbnRTdHlsZTonaXRhbGljJ319PnttKDI4MSl9PC9zcGFuPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGlja0J1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICBwaWNrQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRmxhdEJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogbSgyODIpLFxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoVGFwOiB0aGlzLmhhbmRsZVRvdWNoVGFwLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRm9udEljb24sIHsgY2xhc3NOYW1lOiBcIm1kaSBtZGktZm9sZGVyLXBsdXNcIiB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaWNrQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuUmFpc2VkQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBtKDI4MiksXG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMuaGFuZGxlVG91Y2hUYXAuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRm9udEljb24sIHsgY2xhc3NOYW1lOiBcIm1kaSBtZGktZm9sZGVyLXBsdXNcIiwgc3R5bGU6IHsgZm9udFNpemU6IDIwLCBtYXJnaW5Ub3A6IC00IH0gfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfc3RhdGUyID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBub2RlID0gX3N0YXRlMi5ub2RlO1xuICAgICAgICAgICAgdmFyIGF2YWlsYWJsZVdzID0gX3N0YXRlMi5hdmFpbGFibGVXcztcbiAgICAgICAgICAgIHZhciBjcnRXcyA9IF9zdGF0ZTIuY3J0V3M7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHBpY2tCdXR0b24sXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIF9tYXRlcmlhbFVpLkxpc3QsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaW5lc1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZW1wdHlTdGF0ZVN0cmluZyxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgX21hdGVyaWFsVWkuUG9wb3ZlcixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw6IHRoaXMuc3RhdGUuYW5jaG9yRWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW46IHsgaG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ2JvdHRvbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE9yaWdpbjogeyBob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAndG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgd2lkdGg6IDM3MiwgaGVpZ2h0OiAzMDAsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX21hdGVyaWFsVWkuRHJvcERvd25NZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgaGVpZ2h0OiA1NCB9LCB2YWx1ZTogY3J0V3MsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSwgaSwgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3dpdGNoV29ya3NwYWNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlV3MubWFwKGZ1bmN0aW9uICh3cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod3MgPT09ICdESVZJREVSJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkRpdmlkZXIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLk1lbnVJdGVtLCB7IHZhbHVlOiB3cywgcHJpbWFyeVRleHQ6IHdzLmdldExhYmVsKCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkRpdmlkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBtYXJnaW5MZWZ0OiAtMjYsIGZsZXg6ICcxJywgb3ZlcmZsb3dZOiAnYXV0bycsIGZvbnRTaXplOiAxNSwgY29sb3I6ICdyZ2JhKDAsMCwwLC43MyknIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChGb2xkZXJzVHJlZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweWRpbzogdGhpcy5wcm9wcy5weWRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZGVsOiB0aGlzLnN0YXRlLmRhdGFNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ob2RlU2VsZWN0ZWQ6IHRoaXMub25Ob2RlU2VsZWN0ZWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Jvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5EaXZpZGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nOiAnNHB4IDE2cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZm9udFNpemU6IDE1IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBmbGV4OiAxLCBjb2xvcjogJ3JnYmEoMCwwLDAsLjg3KScgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlICYmIG5vZGUuZ2V0UGF0aCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbm9kZSAmJiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZmxleDogMSwgY29sb3I6ICdyZ2JhKDAsMCwwLC41NCknLCBmb250V2VpZ2h0OiA1MDAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtKDI4MylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkljb25CdXR0b24sIHsgaWNvblN0eWxlOiB7IGNvbG9yOiBtdWlUaGVtZS5wYWxldHRlLnByaW1hcnkxQ29sb3IgfSwgZGlzYWJsZWQ6ICFub2RlLCBpY29uQ2xhc3NOYW1lOiBcIm1kaSBtZGktcGx1cy1jaXJjbGUtb3V0bGluZVwiLCBvblRvdWNoVGFwOiB0aGlzLm9uVmFsaWRhdGVOb2RlLmJpbmQodGhpcykgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTm9kZXNQaWNrZXI7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTm9kZXNQaWNrZXIgPSAoMCwgX21hdGVyaWFsVWlTdHlsZXMubXVpVGhlbWVhYmxlKSgpKE5vZGVzUGlja2VyKTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE5vZGVzUGlja2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDctMjAxNyBDaGFybGVzIGR1IEpldSAtIEFic3RyaXVtIFNBUyA8dGVhbSAoYXQpIHB5ZC5pbz5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFB5ZGlvLlxuICpcbiAqIFB5ZGlvIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogUHlkaW8gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggUHlkaW8uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVGhlIGxhdGVzdCBjb2RlIGNhbiBiZSBmb3VuZCBhdCA8aHR0cHM6Ly9weWRpby5jb20+LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9tYXRlcmlhbFVpID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWknKTtcblxudmFyIF9Vc2VyQmFkZ2UgPSByZXF1aXJlKCcuL1VzZXJCYWRnZScpO1xuXG52YXIgX1VzZXJCYWRnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2VyQmFkZ2UpO1xuXG52YXIgX1NoYXJlQ29udGV4dENvbnN1bWVyID0gcmVxdWlyZSgnLi4vU2hhcmVDb250ZXh0Q29uc3VtZXInKTtcblxudmFyIF9TaGFyZUNvbnRleHRDb25zdW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaGFyZUNvbnRleHRDb25zdW1lcik7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBTaGFyZWRVc2VyRW50cnkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTaGFyZWRVc2VyRW50cnknLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNlbGxBY2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgc2VuZEludml0YXRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25Vc2VyT2JqZWN0UmVtb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBvblVzZXJPYmplY3RVcGRhdGVSaWdodDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG4gICAgb25SZW1vdmU6IGZ1bmN0aW9uIG9uUmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVXNlck9iamVjdFJlbW92ZSh0aGlzLnByb3BzLmNlbGxBY2wuUm9sZUlkKTtcbiAgICB9LFxuICAgIG9uSW52aXRlOiBmdW5jdGlvbiBvbkludml0ZSgpIHtcbiAgICAgICAgdmFyIHRhcmdldHMgPSB7fTtcbiAgICAgICAgdmFyIHVzZXJPYmplY3QgPSBQeWRpb1VzZXJzLlVzZXIuZnJvbUlkbVVzZXIodGhpcy5wcm9wcy5jZWxsQWNsLlVzZXIpO1xuICAgICAgICB0YXJnZXRzW3VzZXJPYmplY3QuZ2V0SWQoKV0gPSB1c2VyT2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BzLnNlbmRJbnZpdGF0aW9ucyh0YXJnZXRzKTtcbiAgICB9LFxuICAgIG9uVXBkYXRlUmlnaHQ6IGZ1bmN0aW9uIG9uVXBkYXRlUmlnaHQobmFtZSwgY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVXNlck9iamVjdFVwZGF0ZVJpZ2h0KHRoaXMucHJvcHMuY2VsbEFjbC5Sb2xlSWQsIG5hbWUsIGNoZWNrZWQpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBjZWxsQWNsID0gX3Byb3BzLmNlbGxBY2w7XG4gICAgICAgIHZhciBweWRpbyA9IF9wcm9wcy5weWRpbztcblxuICAgICAgICB2YXIgbWVudUl0ZW1zID0gW107XG4gICAgICAgIHZhciB0eXBlID0gY2VsbEFjbC5Vc2VyID8gJ3VzZXInIDogY2VsbEFjbC5Hcm91cCA/ICdncm91cCcgOiAndGVhbSc7XG5cbiAgICAgICAgLy8gRG8gbm90IHJlbmRlciBjdXJyZW50IHVzZXJcbiAgICAgICAgaWYgKGNlbGxBY2wuVXNlciAmJiBjZWxsQWNsLlVzZXIuTG9naW4gPT09IHB5ZGlvLnVzZXIuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgIT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbmRJbnZpdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFNlbmQgaW52aXRhdGlvblxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCc0NScpLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5vbkludml0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc1JlYWRvbmx5KCkgJiYgIXRoaXMucHJvcHMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBFbnRyeVxuICAgICAgICAgICAgbWVudUl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucHJvcHMuZ2V0TWVzc2FnZSgnMjU3JywgJycpLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLm9uUmVtb3ZlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsYWJlbCA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGF2YXRhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwidXNlclwiOlxuICAgICAgICAgICAgICAgIGxhYmVsID0gY2VsbEFjbC5Vc2VyLkF0dHJpYnV0ZXNbXCJkaXNwbGF5TmFtZVwiXSB8fCBjZWxsQWNsLlVzZXIuTG9naW47XG4gICAgICAgICAgICAgICAgYXZhdGFyID0gY2VsbEFjbC5Vc2VyLkF0dHJpYnV0ZXNbXCJhdmF0YXJcIl07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ3JvdXBcIjpcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEFjbC5Hcm91cC5BdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gY2VsbEFjbC5Hcm91cC5BdHRyaWJ1dGVzW1wiZGlzcGxheU5hbWVcIl0gfHwgY2VsbEFjbC5Hcm91cC5Hcm91cExhYmVsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gY2VsbEFjbC5Hcm91cC5VdWlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZWFtXCI6XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxBY2wuUm9sZSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IGNlbGxBY2wuUm9sZS5MYWJlbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiTm8gcm9sZSBmb3VuZFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBjZWxsQWNsLlJvbGVJZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVhZCA9IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGUgPSBmYWxzZTtcbiAgICAgICAgY2VsbEFjbC5BY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLk5hbWUgPT09ICdyZWFkJykge1xuICAgICAgICAgICAgICAgIHJlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjdGlvbi5OYW1lID09PSAnd3JpdGUnKSB7XG4gICAgICAgICAgICAgICAgd3JpdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRpc2FibGVkID0gdGhpcy5wcm9wcy5pc1JlYWRvbmx5KCkgfHwgdGhpcy5wcm9wcy5yZWFkb25seTtcbiAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgd2lkdGg6IDcwXG4gICAgICAgIH07XG4gICAgICAgIGlmICghbWVudUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHsgbWFyZ2luUmlnaHQ6IDQ4IH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfVXNlckJhZGdlMlsnZGVmYXVsdCddLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICBhdmF0YXI6IGF2YXRhcixcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIG1lbnVzOiBtZW51SXRlbXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuQ2hlY2tib3gsIHsgZGlzYWJsZWQ6IGRpc2FibGVkLCBjaGVja2VkOiByZWFkLCBvbkNoZWNrOiBmdW5jdGlvbiAoZSwgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25VcGRhdGVSaWdodCgncmVhZCcsIHYpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuQ2hlY2tib3gsIHsgZGlzYWJsZWQ6IGRpc2FibGVkLCBjaGVja2VkOiB3cml0ZSwgb25DaGVjazogZnVuY3Rpb24gKGUsIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uVXBkYXRlUmlnaHQoJ3dyaXRlJywgdik7XG4gICAgICAgICAgICAgICAgICAgIH0gfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2hhcmVkVXNlckVudHJ5ID0gKDAsIF9TaGFyZUNvbnRleHRDb25zdW1lcjJbJ2RlZmF1bHQnXSkoU2hhcmVkVXNlckVudHJ5KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNoYXJlZFVzZXJFbnRyeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgQ2hhcmxlcyBkdSBKZXUgLSBBYnN0cml1bSBTQVMgPHRlYW0gKGF0KSBweWQuaW8+XG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBQeWRpby5cbiAqXG4gKiBQeWRpbyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFB5ZGlvIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFB5ZGlvLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIFRoZSBsYXRlc3QgY29kZSBjYW4gYmUgZm91bmQgYXQgPGh0dHBzOi8vcHlkaW8uY29tPi5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9TaGFyZUNvbnRleHRDb25zdW1lciA9IHJlcXVpcmUoJy4uL1NoYXJlQ29udGV4dENvbnN1bWVyJyk7XG5cbnZhciBfU2hhcmVDb250ZXh0Q29uc3VtZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2hhcmVDb250ZXh0Q29uc3VtZXIpO1xuXG52YXIgX1NoYXJlZFVzZXJFbnRyeSA9IHJlcXVpcmUoJy4vU2hhcmVkVXNlckVudHJ5Jyk7XG5cbnZhciBfU2hhcmVkVXNlckVudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NoYXJlZFVzZXJFbnRyeSk7XG5cbnZhciBfbWFpbkFjdGlvbkJ1dHRvbiA9IHJlcXVpcmUoJy4uL21haW4vQWN0aW9uQnV0dG9uJyk7XG5cbnZhciBfbWFpbkFjdGlvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWluQWN0aW9uQnV0dG9uKTtcblxudmFyIF9weWRpbyA9IHJlcXVpcmUoJ3B5ZGlvJyk7XG5cbnZhciBfcHlkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW8pO1xuXG52YXIgX1B5ZGlvJHJlcXVpcmVMaWIgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYignY29tcG9uZW50cycpO1xuXG52YXIgVXNlcnNDb21wbGV0ZXIgPSBfUHlkaW8kcmVxdWlyZUxpYi5Vc2Vyc0NvbXBsZXRlcjtcblxudmFyIFNoYXJlZFVzZXJzID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1NoYXJlZFVzZXJzJyxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBweWRpbzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKF9weWRpbzJbJ2RlZmF1bHQnXSksXG5cbiAgICAgICAgY2VsbEFjbHM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgICAgIHNhdmVTZWxlY3Rpb25Bc1RlYW06IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2VuZEludml0YXRpb25zOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNob3dUaXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuXG4gICAgICAgIG9uVXNlck9iamVjdEFkZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uVXNlck9iamVjdFJlbW92ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uVXNlck9iamVjdFVwZGF0ZVJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuXG4gICAgfSxcbiAgICBzZW5kSW52aXRhdGlvblRvQWxsVXNlcnM6IGZ1bmN0aW9uIHNlbmRJbnZpdGF0aW9uVG9BbGxVc2VycygpIHtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBjZWxsQWNscyA9IF9wcm9wcy5jZWxsQWNscztcbiAgICAgICAgdmFyIHB5ZGlvID0gX3Byb3BzLnB5ZGlvO1xuXG4gICAgICAgIHZhciB1c2VyT2JqZWN0cyA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhjZWxsQWNscykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICB2YXIgYWNsID0gY2VsbEFjbHNba107XG4gICAgICAgICAgICBpZiAoYWNsLlVzZXIgJiYgYWNsLlVzZXIuTG9naW4gPT09IHB5ZGlvLnVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWNsLlVzZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXNlck9iamVjdCA9IFB5ZGlvVXNlcnMuVXNlci5mcm9tSWRtVXNlcihhY2wuVXNlcik7XG4gICAgICAgICAgICAgICAgdXNlck9iamVjdHNbdXNlck9iamVjdC5nZXRJZCgpXSA9IHVzZXJPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLnNlbmRJbnZpdGF0aW9ucyh1c2VyT2JqZWN0cyk7XG4gICAgfSxcbiAgICBjbGVhckFsbFVzZXJzOiBmdW5jdGlvbiBjbGVhckFsbFVzZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuY2VsbEFjbHMpLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25Vc2VyT2JqZWN0UmVtb3ZlKGspO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHZhbHVlU2VsZWN0ZWQ6IGZ1bmN0aW9uIHZhbHVlU2VsZWN0ZWQodXNlck9iamVjdCkge1xuICAgICAgICBpZiAodXNlck9iamVjdC5JZG1Vc2VyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVXNlck9iamVjdEFkZCh1c2VyT2JqZWN0LklkbVVzZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVzZXJPYmplY3RBZGQodXNlck9iamVjdC5JZG1Sb2xlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGNlbGxBY2xzID0gX3Byb3BzMi5jZWxsQWNscztcbiAgICAgICAgdmFyIHB5ZGlvID0gX3Byb3BzMi5weWRpbztcblxuICAgICAgICB2YXIgYXV0aENvbmZpZ3MgPSBweWRpby5nZXRQbHVnaW5Db25maWdzKCdjb3JlLmF1dGgnKTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIHVzZXJFbnRyaWVzID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKGNlbGxBY2xzKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIHZhciBhY2wgPSBjZWxsQWNsc1trXTtcbiAgICAgICAgICAgIGlmIChhY2wuVXNlciAmJiBhY2wuVXNlci5Mb2dpbiA9PT0gcHlkaW8udXNlci5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB1c2VyRW50cmllcy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9TaGFyZWRVc2VyRW50cnkyWydkZWZhdWx0J10sIHtcbiAgICAgICAgICAgICAgICBjZWxsQWNsOiBhY2wsXG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICBweWRpbzogX3RoaXMyLnByb3BzLnB5ZGlvLFxuICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdGhpczIucHJvcHMucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgc2VuZEludml0YXRpb25zOiBfdGhpczIucHJvcHMuc2VuZEludml0YXRpb25zLFxuICAgICAgICAgICAgICAgIG9uVXNlck9iamVjdFJlbW92ZTogX3RoaXMyLnByb3BzLm9uVXNlck9iamVjdFJlbW92ZSxcbiAgICAgICAgICAgICAgICBvblVzZXJPYmplY3RVcGRhdGVSaWdodDogX3RoaXMyLnByb3BzLm9uVXNlck9iamVjdFVwZGF0ZVJpZ2h0XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBhY3Rpb25MaW5rcyA9IFtdO1xuICAgICAgICB2YXIgYWNsc0xlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuY2VsbEFjbHMpLmxlbmd0aDtcbiAgICAgICAgaWYgKGFjbHNMZW5ndGggJiYgIXRoaXMucHJvcHMuaXNSZWFkb25seSgpICYmICF0aGlzLnByb3BzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICBhY3Rpb25MaW5rcy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYWluQWN0aW9uQnV0dG9uMlsnZGVmYXVsdCddLCB7IGtleTogJ2NsZWFyJywgY2FsbGJhY2s6IHRoaXMuY2xlYXJBbGxVc2VycywgdG9vbHRpcFBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIiwgbWRpSWNvbjogJ2RlbGV0ZScsIG1lc3NhZ2VJZDogJzE4MCcgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY2xzTGVuZ3RoICYmIHRoaXMucHJvcHMuc2VuZEludml0YXRpb25zKSB7XG4gICAgICAgICAgICBhY3Rpb25MaW5rcy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYWluQWN0aW9uQnV0dG9uMlsnZGVmYXVsdCddLCB7IGtleTogJ2ludml0ZScsIGNhbGxiYWNrOiB0aGlzLnNlbmRJbnZpdGF0aW9uVG9BbGxVc2VycywgdG9vbHRpcFBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIiwgbWRpSWNvbjogJ2VtYWlsLW91dGxpbmUnLCBtZXNzYWdlSWQ6ICc0NScgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNhdmVTZWxlY3Rpb25Bc1RlYW0gJiYgYWNsc0xlbmd0aCA+IDEgJiYgIXRoaXMucHJvcHMuaXNSZWFkb25seSgpICYmICF0aGlzLnByb3BzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICBhY3Rpb25MaW5rcy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYWluQWN0aW9uQnV0dG9uMlsnZGVmYXVsdCddLCB7IGtleTogJ3RlYW0nLCBjYWxsYmFjazogdGhpcy5wcm9wcy5zYXZlU2VsZWN0aW9uQXNUZWFtLCBtZGlJY29uOiAnYWNjb3VudC1tdWx0aXBsZS1wbHVzJywgdG9vbHRpcFBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIiwgbWVzc2FnZUlkOiAnNTA5JywgbWVzc2FnZUNvcmVOYW1lc3BhY2U6IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByd0hlYWRlciA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVzZXJzSW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh1c2VyRW50cmllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJ3SGVhZGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkJvdHRvbTogLTgsIG1hcmdpblRvcDogLTgsIGNvbG9yOiAncmdiYSgwLDAsMCwuMzMpJywgZm9udFNpemU6IDEyIH0gfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogeyBmbGV4OiAxIH0gfSksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHdpZHRoOiA0MywgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBib3JkZXJCb3R0b206ICcycHggc29saWQgcmdiYSgwLDAsMCwwLjEzKScgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCczNjEnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHdpZHRoOiA0MywgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBib3JkZXJCb3R0b206ICcycHggc29saWQgcmdiYSgwLDAsMCwwLjEzKScgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcxODEnKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogeyB3aWR0aDogNTIgfSB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNSZWFkb25seSgpICYmICF0aGlzLnByb3BzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICB2YXIgZXhjbHVkZXMgPSBPYmplY3QudmFsdWVzKGNlbGxBY2xzKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoYS5Vc2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLlVzZXIuTG9naW47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLkdyb3VwLlV1aWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLlJvbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuUm9sZS5VdWlkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWs7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVzZXJzSW5wdXQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChVc2Vyc0NvbXBsZXRlciwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NoYXJlLWZvcm0tdXNlcnMnLFxuICAgICAgICAgICAgICAgIGZpZWxkTGFiZWw6IHRoaXMucHJvcHMuZ2V0TWVzc2FnZSgnMzQnKSxcbiAgICAgICAgICAgICAgICBvblZhbHVlU2VsZWN0ZWQ6IHRoaXMudmFsdWVTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBweWRpbzogdGhpcy5wcm9wcy5weWRpbyxcbiAgICAgICAgICAgICAgICBzaG93QWRkcmVzc0Jvb2s6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlcnNGcm9tOiAnbG9jYWwnLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVzOiBleGNsdWRlcyxcbiAgICAgICAgICAgICAgICBleGlzdGluZ09ubHk6ICFhdXRoQ29uZmlncy5nZXQoJ1VTRVJfQ1JFQVRFX1VTRVJTJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogdXNlckVudHJpZXMubGVuZ3RoID8geyBtYXJnaW46ICctMjBweCA4cHggMTZweCcgfSA6IHsgbWFyZ2luVG9wOiAtMjAgfSB9LFxuICAgICAgICAgICAgICAgIHVzZXJzSW5wdXRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICByd0hlYWRlcixcbiAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgdXNlckVudHJpZXNcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAhdXNlckVudHJpZXMubGVuZ3RoICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgY29sb3I6ICdyZ2JhKDAsMCwwLDAuNDMpJyB9IH0sXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcxODInKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHVzZXJFbnRyaWVzLmxlbmd0aCA+IDAgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0gfSxcbiAgICAgICAgICAgICAgICBhY3Rpb25MaW5rc1xuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTaGFyZWRVc2VycyA9ICgwLCBfU2hhcmVDb250ZXh0Q29uc3VtZXIyWydkZWZhdWx0J10pKFNoYXJlZFVzZXJzKTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNoYXJlZFVzZXJzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDctMjAxNyBDaGFybGVzIGR1IEpldSAtIEFic3RyaXVtIFNBUyA8dGVhbSAoYXQpIHB5ZC5pbz5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFB5ZGlvLlxuICpcbiAqIFB5ZGlvIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogUHlkaW8gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggUHlkaW8uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVGhlIGxhdGVzdCBjb2RlIGNhbiBiZSBmb3VuZCBhdCA8aHR0cHM6Ly9weWRpby5jb20+LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDb21wb25lbnQgPSBfcmVxdWlyZS5Db21wb25lbnQ7XG52YXIgUHJvcFR5cGVzID0gX3JlcXVpcmUuUHJvcFR5cGVzO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWknKTtcblxudmFyIE1lbnVJdGVtID0gX3JlcXVpcmUyLk1lbnVJdGVtO1xudmFyIEljb25NZW51ID0gX3JlcXVpcmUyLkljb25NZW51O1xudmFyIEljb25CdXR0b24gPSBfcmVxdWlyZTIuSWNvbkJ1dHRvbjtcblxudmFyIF9yZXF1aXJlMyA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpL3N0eWxlcycpO1xuXG52YXIgbXVpVGhlbWVhYmxlID0gX3JlcXVpcmUzLm11aVRoZW1lYWJsZTtcblxudmFyIENvbG9yID0gcmVxdWlyZSgnY29sb3InKTtcblxudmFyIFVzZXJCYWRnZSA9IChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhVc2VyQmFkZ2UsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVXNlckJhZGdlKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXNlckJhZGdlKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihVc2VyQmFkZ2UucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVXNlckJhZGdlLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXJNZW51JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMubWVudXMgfHwgIXRoaXMucHJvcHMubWVudXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWVudUl0ZW1zID0gdGhpcy5wcm9wcy5tZW51cy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRJY29uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmIChtLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRJY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnbWRpIG1kaS1jaGVjaycgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0OiBtLnRleHQsXG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA6IG0uY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0SWNvbjogcmlnaHRJY29uIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgaWNvblN0eWxlID0geyBmb250U2l6ZTogMTggfTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEljb25NZW51LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkJ1dHRvbkVsZW1lbnQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgeyBzdHlsZTogeyBwYWRkaW5nOiAxNiB9LCBpY29uU3R5bGU6IGljb25TdHlsZSwgaWNvbkNsYXNzTmFtZTogJ21kaSBtZGktZG90cy12ZXJ0aWNhbCcgfSksXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbjogeyBob3Jpem9udGFsOiAncmlnaHQnLCB2ZXJ0aWNhbDogJ3RvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T3JpZ2luOiB7IGhvcml6b250YWw6ICdyaWdodCcsIHZlcnRpY2FsOiAndG9wJyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZW51SXRlbXNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgYXZhdGFyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIGF2YXRhckNvbG9yID0gdGhpcy5wcm9wcy5tdWlUaGVtZS5wYWxldHRlLmF2YXRhcnNDb2xvcjtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgICAgICBhdmF0YXJDb2xvciA9IENvbG9yKGF2YXRhckNvbG9yKS5kYXJrZW4oLjIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYXZhdGFyID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnYXZhdGFyIG1kaSBtZGktYWNjb3VudC1tdWx0aXBsZScsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogYXZhdGFyQ29sb3IgfSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSAndGVhbScpIHtcbiAgICAgICAgICAgICAgICBhdmF0YXJDb2xvciA9IENvbG9yKGF2YXRhckNvbG9yKS5kYXJrZW4oLjIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYXZhdGFyID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnYXZhdGFyIG1kaSBtZGktYWNjb3VudC1tdWx0aXBsZS1vdXRsaW5lJywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBhdmF0YXJDb2xvciB9IH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICd0ZW1wb3JhcnknKSB7XG4gICAgICAgICAgICAgICAgYXZhdGFyQ29sb3IgPSBDb2xvcihhdmF0YXJDb2xvcikubGlnaHRlbiguMikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBhdmF0YXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdhdmF0YXIgbWRpIG1kaS1hY2NvdW50LXBsdXMnLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IGF2YXRhckNvbG9yIH0gfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3JlbW90ZV91c2VyJykge1xuICAgICAgICAgICAgICAgIGF2YXRhciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2F2YXRhciBtZGkgbWRpLWFjY291bnQtbmV0d29yaycsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogYXZhdGFyQ29sb3IgfSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXZhdGFyID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnYXZhdGFyIG1kaSBtZGktYWNjb3VudCcsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogYXZhdGFyQ29sb3IgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtZW51ID0gdGhpcy5yZW5kZXJNZW51KCk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJzaGFyZS1kaWFsb2cgdXNlci1iYWRnZSB1c2VyLXR5cGUtXCIgKyB0aGlzLnByb3BzLnR5cGUgfSxcbiAgICAgICAgICAgICAgICBhdmF0YXIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3VzZXItYmFkZ2UtbGFiZWwnIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGFiZWxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgbWVudVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBVc2VyQmFkZ2U7XG59KShDb21wb25lbnQpO1xuXG5Vc2VyQmFkZ2UucHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1lbnVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG11aVRoZW1lOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBVc2VyQmFkZ2UgPSBtdWlUaGVtZWFibGUoKShVc2VyQmFkZ2UpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBVc2VyQmFkZ2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9Db21wb3NpdGVNb2RlbCA9IHJlcXVpcmUoJy4vQ29tcG9zaXRlTW9kZWwnKTtcblxudmFyIF9Db21wb3NpdGVNb2RlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb3NpdGVNb2RlbCk7XG5cbnZhciBfbWFpblNoYXJlSGVscGVyID0gcmVxdWlyZSgnLi4vbWFpbi9TaGFyZUhlbHBlcicpO1xuXG52YXIgX21haW5TaGFyZUhlbHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWluU2hhcmVIZWxwZXIpO1xuXG52YXIgX2NlbGxzU2hhcmVkVXNlcnMgPSByZXF1aXJlKCcuLi9jZWxscy9TaGFyZWRVc2VycycpO1xuXG52YXIgX2NlbGxzU2hhcmVkVXNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VsbHNTaGFyZWRVc2Vycyk7XG5cbnZhciBfcHlkaW8gPSByZXF1aXJlKCdweWRpbycpO1xuXG52YXIgX3B5ZGlvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvKTtcblxudmFyIF9tYXRlcmlhbFVpU3R5bGVzID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWkvc3R5bGVzJyk7XG5cbnZhciBfbWF0ZXJpYWxVaSA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpJyk7XG5cbnZhciBDZWxsc0xpc3QgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ2VsbHNMaXN0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENlbGxzTGlzdChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2VsbHNMaXN0KTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihDZWxsc0xpc3QucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVkaXQ6IG51bGwgfTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2VsbHNMaXN0LCBbe1xuICAgICAgICBrZXk6ICdhZGRUb0NlbGxzTWVudUl0ZW1zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRvQ2VsbHNNZW51SXRlbXMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIC8vIExpc3QgdXNlciBhdmFpbGFibGUgY2VsbHMgLSBFeGNsdWRlIGNlbGxzIHdoZXJlIHRoaXMgbm9kZSBpcyBhbHJlYWR5IHNoYXJlZFxuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMucHlkaW87XG4gICAgICAgICAgICB2YXIgY29tcG9zaXRlTW9kZWwgPSBfcHJvcHMuY29tcG9zaXRlTW9kZWw7XG5cbiAgICAgICAgICAgIHZhciBjdXJyZW50Q2VsbHMgPSBjb21wb3NpdGVNb2RlbC5nZXRDZWxscygpLm1hcChmdW5jdGlvbiAoY2VsbE1vZGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNlbGxNb2RlbC5nZXRVdWlkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHB5ZGlvLnVzZXIuZ2V0UmVwb3NpdG9yaWVzTGlzdCgpLmZvckVhY2goZnVuY3Rpb24gKHJlcG9zaXRvcnkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVwb3NpdG9yeS5nZXRPd25lcigpID09PSAnc2hhcmVkJyAmJiBjdXJyZW50Q2VsbHMuaW5kZXhPZihyZXBvc2l0b3J5LmdldElkKCkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG91Y2hUYXAgPSBmdW5jdGlvbiB0b3VjaFRhcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgYWRkTWVudU9wZW46IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRlTW9kZWwuYWRkVG9FeGlzdGluZ0NlbGwocmVwb3NpdG9yeS5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5NZW51SXRlbSwgeyBwcmltYXJ5VGV4dDogcmVwb3NpdG9yeS5nZXRMYWJlbCgpLCBvblRvdWNoVGFwOiB0b3VjaFRhcCwgbGVmdEljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkZvbnRJY29uLCB7IGNsYXNzTmFtZTogXCJpY29tb29uLWNlbGxzXCIgfSkgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBjb21wb3NpdGVNb2RlbCA9IF9wcm9wczIuY29tcG9zaXRlTW9kZWw7XG4gICAgICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMyLnB5ZGlvO1xuICAgICAgICAgICAgdmFyIHVzZXJzSW52aXRhdGlvbnMgPSBfcHJvcHMyLnVzZXJzSW52aXRhdGlvbnM7XG4gICAgICAgICAgICB2YXIgbXVpVGhlbWUgPSBfcHJvcHMyLm11aVRoZW1lO1xuXG4gICAgICAgICAgICB2YXIgbSA9IGZ1bmN0aW9uIG0oaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHlkaW8uTWVzc2FnZUhhc2hbJ3NoYXJlX2NlbnRlci4nICsgaWRdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBlZGl0ID0gdGhpcy5zdGF0ZS5lZGl0O1xuXG4gICAgICAgICAgICB2YXIgY2VsbHMgPSBbXTtcbiAgICAgICAgICAgIGNvbXBvc2l0ZU1vZGVsLmdldENlbGxzKCkubWFwKGZ1bmN0aW9uIChjZWxsTW9kZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBjZWxsTW9kZWwuZ2V0TGFiZWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNFZGl0ID0gIWNlbGxNb2RlbC5nZXRVdWlkKCkgJiYgZWRpdCA9PT0gJ05FV0NFTEwnIHx8IGVkaXQgPT09IGNlbGxNb2RlbC5nZXRVdWlkKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVN0YXRlID0gZnVuY3Rpb24gdG9nZ2xlU3RhdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VkaXQgJiYgZWRpdCA9PT0gJ05FV0NFTEwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbmV3IGNlbGwgaWYgaXQgd2FzIGNyZWF0ZWQgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY2xzID0gY2VsbE1vZGVsLmdldEFjbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoYWNscykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRlTW9kZWwucmVtb3ZlTmV3Q2VsbChjZWxsTW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGVkaXQ6IGlzRWRpdCA/IG51bGwgOiBjZWxsTW9kZWwuZ2V0VXVpZCgpIH0pO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlTm9kZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxNb2RlbC5yZW1vdmVSb290Tm9kZShjb21wb3NpdGVNb2RlbC5nZXROb2RlKCkuZ2V0TWV0YWRhdGEoKS5nZXQoJ3V1aWQnKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRJY29uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmIChpc0VkaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRJY29uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuSWNvbkJ1dHRvbiwgeyBpY29uQ2xhc3NOYW1lOiBcIm1kaSBtZGktY2xvc2VcIiwgdG9vbHRpcDogcHlkaW8uTWVzc2FnZUhhc2hbJzg2J10sIG9uVG91Y2hUYXA6IHRvZ2dsZVN0YXRlIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbE1vZGVsLmlzRWRpdGFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICByaWdodEljb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIF9tYXRlcmlhbFVpLkljb25NZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25CdXR0b25FbGVtZW50OiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5JY29uQnV0dG9uLCB7IGljb25DbGFzc05hbWU6IFwibWRpIG1kaS1kb3RzLXZlcnRpY2FsXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luOiB7IGhvcml6b250YWw6ICdyaWdodCcsIHZlcnRpY2FsOiAndG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE9yaWdpbjogeyBob3Jpem9udGFsOiAncmlnaHQnLCB2ZXJ0aWNhbDogJ3RvcCcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLk1lbnVJdGVtLCB7IHByaW1hcnlUZXh0OiBtKDI1OCksIG9uVG91Y2hUYXA6IHRvZ2dsZVN0YXRlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuTWVudUl0ZW0sIHsgcHJpbWFyeVRleHQ6IG0oMjU5KSwgb25Ub3VjaFRhcDogcmVtb3ZlTm9kZSB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkxpc3RJdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0OiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGV4dDogY2VsbE1vZGVsLmdldEFjbHNTdWJqZWN0cygpLFxuICAgICAgICAgICAgICAgICAgICByaWdodEljb25CdXR0b246IHJpZ2h0SWNvbixcbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFRhcDogdG9nZ2xlU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBpc0VkaXQgPyB7IGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDUsIDI0NSwgMjQ1KScgfSA6IHt9LFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZWRpdCA9PT0gJ05FV0NFTEwnICYmICFpc0VkaXRcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRWRpdCkge1xuICAgICAgICAgICAgICAgICAgICBjZWxscy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgX21hdGVyaWFsVWkuUGFwZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHpEZXB0aDogMCwgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0NSwgMjQ1LCAyNDUpJywgbWFyZ2luOiAnMCAwIDE2cHgnLCBwYWRkaW5nOiAnMCAxMHB4IDEwcHgnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9jZWxsc1NoYXJlZFVzZXJzMlsnZGVmYXVsdCddLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHlkaW86IHB5ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxBY2xzOiBjZWxsTW9kZWwuZ2V0QWNscygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVzOiBbcHlkaW8udXNlci5pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Vc2VyT2JqZWN0QWRkOiBjZWxsTW9kZWwuYWRkVXNlci5iaW5kKGNlbGxNb2RlbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Vc2VyT2JqZWN0UmVtb3ZlOiBjZWxsTW9kZWwucmVtb3ZlVXNlci5iaW5kKGNlbGxNb2RlbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Vc2VyT2JqZWN0VXBkYXRlUmlnaHQ6IGNlbGxNb2RlbC51cGRhdGVVc2VyUmlnaHQuYmluZChjZWxsTW9kZWwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRJbnZpdGF0aW9uczogZnVuY3Rpb24gKHRhcmdldFVzZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2Vyc0ludml0YXRpb25zKHRhcmdldFVzZXJzLCBjZWxsTW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVNlbGVjdGlvbkFzVGVhbTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6ICFjZWxsTW9kZWwuaXNFZGl0YWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbHMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5EaXZpZGVyLCBudWxsKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNlbGxzLnBvcCgpO1xuXG4gICAgICAgICAgICB2YXIgbGVnZW5kID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGNlbGxzLmxlbmd0aCAmJiBlZGl0ICE9PSAnTkVXQ0VMTCcpIHtcbiAgICAgICAgICAgICAgICBsZWdlbmQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG0oMjYwKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGxzLmxlbmd0aCAmJiBlZGl0ID09PSAnTkVXQ0VMTCcpIHtcbiAgICAgICAgICAgICAgICBsZWdlbmQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG0oMjYxKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlZ2VuZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBwYWRkaW5nOiAnMjFweCAxNnB4IDIxcHggMHB4JywgY3Vyc29yOiAncG9pbnRlcicsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfSwgb25Ub3VjaFRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2l0ZU1vZGVsLmNyZWF0ZUVtcHR5Q2VsbCgpO190aGlzMi5zZXRTdGF0ZSh7IGVkaXQ6ICdORVdDRUxMJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuSWNvbkJ1dHRvbiwgeyBpY29uQ2xhc3NOYW1lOiBcImljb21vb24tY2VsbHMtY2xlYXItcGx1c1wiLCBpY29uU3R5bGU6IHsgY29sb3I6IG11aVRoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvciB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZmxleDogMSwgbWFyZ2luTGVmdDogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtKDI2MilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhZGRDZWxsSXRlbXMgPSB0aGlzLmFkZFRvQ2VsbHNNZW51SXRlbXMoKTtcbiAgICAgICAgICAgIHZhciBhZGRUb0NlbGxNZW51ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGFkZENlbGxJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhZGRUb0NlbGxNZW51ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuUmFpc2VkQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiYWRkQ2VsbEJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgbWFyZ2luTGVmdDogMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbSgyNjMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFRhcDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgYWRkTWVudU9wZW46IHRydWUsIGFkZE1lbnVBbmNob3I6IF9yZWFjdERvbTJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShfdGhpczIucmVmc1snYWRkQ2VsbEJ1dHRvbiddKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgX21hdGVyaWFsVWkuUG9wb3ZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiB0aGlzLnN0YXRlLmFkZE1lbnVPcGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsOiB0aGlzLnN0YXRlLmFkZE1lbnVBbmNob3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgYWRkTWVudU9wZW46IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luOiB7IGhvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICdib3R0b20nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T3JpZ2luOiB7IGhvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbWF0ZXJpYWxVaS5NZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2VsbEl0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXV0aCA9IF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10uZ2V0QXV0aG9yaXphdGlvbnMocHlkaW8pO1xuICAgICAgICAgICAgaWYgKGNvbXBvc2l0ZU1vZGVsLmdldE5vZGUoKSkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlTGVhZiA9IGNvbXBvc2l0ZU1vZGVsLmdldE5vZGUoKS5pc0xlYWYoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2FuU2hhcmUgPSBub2RlTGVhZiAmJiBhdXRoLmZpbGVfd29ya3NwYWNlcyB8fCAhbm9kZUxlYWYgJiYgYXV0aC5mb2xkZXJfd29ya3NwYWNlcztcbiAgICAgICAgICAgICAgICBpZiAoIWNhblNoYXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJywgcGFkZGluZzogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtKG5vZGVMZWFmID8gJzIyNycgOiAnMjI4JylcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHBhZGRpbmdCb3R0b206IDIwIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuUmFpc2VkQnV0dG9uLCB7IGxhYmVsOiBtKDI2NCksIHByaW1hcnk6IHRydWUsIG9uVG91Y2hUYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NpdGVNb2RlbC5jcmVhdGVFbXB0eUNlbGwoKTtfdGhpczIuc2V0U3RhdGUoeyBlZGl0OiAnTkVXQ0VMTCcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBhZGRUb0NlbGxNZW51XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjQzKScgfSB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBfbWF0ZXJpYWxVaS5MaXN0LFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjZWxsc1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2VsbHNMaXN0O1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbkNlbGxzTGlzdC5Qcm9wVHlwZXMgPSB7XG4gICAgcHlkaW86IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfcHlkaW8yWydkZWZhdWx0J10pLFxuICAgIGNvbXBvc2l0ZU1vZGVsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoX0NvbXBvc2l0ZU1vZGVsMlsnZGVmYXVsdCddKS5pc1JlcXVpcmVkLFxuICAgIHVzZXJzSW52aXRhdGlvbnM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ2VsbHNMaXN0ID0gKDAsIF9tYXRlcmlhbFVpU3R5bGVzLm11aVRoZW1lYWJsZSkoKShDZWxsc0xpc3QpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDZWxsc0xpc3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDIwIENoYXJsZXMgZHUgSmV1IC0gQWJzdHJpdW0gU0FTIDx0ZWFtIChhdCkgcHlkLmlvPlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUHlkaW8uXG4gKlxuICogUHlkaW8gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBQeWRpbyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBQeWRpby4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBUaGUgbGF0ZXN0IGNvZGUgY2FuIGJlIGZvdW5kIGF0IDxodHRwczovL3B5ZGlvLmNvbT4uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jb21wb3NpdGVDb21wb3NpdGVNb2RlbCA9IHJlcXVpcmUoJy4uL2NvbXBvc2l0ZS9Db21wb3NpdGVNb2RlbCcpO1xuXG52YXIgX2NvbXBvc2l0ZUNvbXBvc2l0ZU1vZGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZUNvbXBvc2l0ZU1vZGVsKTtcblxudmFyIF9tYWluR2VuZXJpY0VkaXRvciA9IHJlcXVpcmUoJy4uL21haW4vR2VuZXJpY0VkaXRvcicpO1xuXG52YXIgX21haW5HZW5lcmljRWRpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21haW5HZW5lcmljRWRpdG9yKTtcblxudmFyIF9weWRpbyA9IHJlcXVpcmUoJ3B5ZGlvJyk7XG5cbnZhciBfcHlkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW8pO1xuXG52YXIgX2xpbmtzUGFuZWwgPSByZXF1aXJlKCcuLi9saW5rcy9QYW5lbCcpO1xuXG52YXIgX2xpbmtzUGFuZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlua3NQYW5lbCk7XG5cbnZhciBfbGlua3NTZWN1cmVPcHRpb25zID0gcmVxdWlyZSgnLi4vbGlua3MvU2VjdXJlT3B0aW9ucycpO1xuXG52YXIgX2xpbmtzU2VjdXJlT3B0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5rc1NlY3VyZU9wdGlvbnMpO1xuXG52YXIgX21haW5TaGFyZUhlbHBlciA9IHJlcXVpcmUoJy4uL21haW4vU2hhcmVIZWxwZXInKTtcblxudmFyIF9tYWluU2hhcmVIZWxwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpblNoYXJlSGVscGVyKTtcblxudmFyIF9NYWlsZXIgPSByZXF1aXJlKCcuL01haWxlcicpO1xuXG52YXIgX01haWxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NYWlsZXIpO1xuXG52YXIgX0NlbGxzTGlzdCA9IHJlcXVpcmUoJy4vQ2VsbHNMaXN0Jyk7XG5cbnZhciBfQ2VsbHNMaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NlbGxzTGlzdCk7XG5cbnZhciBfY2xpcGJvYXJkID0gcmVxdWlyZSgnY2xpcGJvYXJkJyk7XG5cbnZhciBfY2xpcGJvYXJkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsaXBib2FyZCk7XG5cbnZhciBfbGlua3NQdWJsaWNMaW5rVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saW5rcy9QdWJsaWNMaW5rVGVtcGxhdGUnKTtcblxudmFyIF9saW5rc1B1YmxpY0xpbmtUZW1wbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5rc1B1YmxpY0xpbmtUZW1wbGF0ZSk7XG5cbnZhciBfbGlua3NWaXNpYmlsaXR5UGFuZWwgPSByZXF1aXJlKCcuLi9saW5rcy9WaXNpYmlsaXR5UGFuZWwnKTtcblxudmFyIF9saW5rc1Zpc2liaWxpdHlQYW5lbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5rc1Zpc2liaWxpdHlQYW5lbCk7XG5cbnZhciBfbGlua3NMYWJlbFBhbmVsID0gcmVxdWlyZSgnLi4vbGlua3MvTGFiZWxQYW5lbCcpO1xuXG52YXIgX2xpbmtzTGFiZWxQYW5lbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5rc0xhYmVsUGFuZWwpO1xuXG52YXIgX21hdGVyaWFsVWkgPSByZXF1aXJlKCdtYXRlcmlhbC11aScpO1xuXG52YXIgX1B5ZGlvJHJlcXVpcmVMaWIgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYignaG9jJyk7XG5cbnZhciBQYWxldHRlTW9kaWZpZXIgPSBfUHlkaW8kcmVxdWlyZUxpYi5QYWxldHRlTW9kaWZpZXI7XG5cbnZhciBfUHlkaW8kcmVxdWlyZUxpYjIgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYihcImJvb3RcIik7XG5cbnZhciBUb29sdGlwID0gX1B5ZGlvJHJlcXVpcmVMaWIyLlRvb2x0aXA7XG5cbnZhciBfUHlkaW8kcmVxdWlyZUxpYjMgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYignY29tcG9uZW50cycpO1xuXG52YXIgR2VuZXJpY0NhcmQgPSBfUHlkaW8kcmVxdWlyZUxpYjMuR2VuZXJpY0NhcmQ7XG52YXIgR2VuZXJpY0xpbmUgPSBfUHlkaW8kcmVxdWlyZUxpYjMuR2VuZXJpY0xpbmU7XG5cbnZhciBDb21wb3NpdGVDYXJkID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENvbXBvc2l0ZUNhcmQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29tcG9zaXRlQ2FyZChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zaXRlQ2FyZCk7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29tcG9zaXRlQ2FyZC5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vZGU6IHRoaXMucHJvcHMubW9kZSB8fCAndmlldycsXG4gICAgICAgICAgICBtb2RlbDogbmV3IF9jb21wb3NpdGVDb21wb3NpdGVNb2RlbDJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLm1vZGUgPT09ICdlZGl0JylcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29tcG9zaXRlQ2FyZCwgW3tcbiAgICAgICAga2V5OiAnYXR0YWNoQ2xpcGJvYXJkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaENsaXBib2FyZCgpIHtcbiAgICAgICAgICAgIHZhciBweWRpbyA9IHRoaXMucHJvcHMucHlkaW87XG5cbiAgICAgICAgICAgIHZhciBtID0gZnVuY3Rpb24gbShpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBweWRpby5NZXNzYWdlSGFzaFsnc2hhcmVfY2VudGVyLicgKyBpZF07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5zdGF0ZS5tb2RlbDtcblxuICAgICAgICAgICAgdGhpcy5kZXRhY2hDbGlwYm9hcmQoKTtcbiAgICAgICAgICAgIGlmICghbW9kZWwuZ2V0TGlua3MoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGlua01vZGVsID0gbW9kZWwuZ2V0TGlua3MoKVswXTtcbiAgICAgICAgICAgIGlmICghbGlua01vZGVsLmdldExpbmsoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnNbJ2NvcHktYnV0dG9uJ10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGlwID0gbmV3IF9jbGlwYm9hcmQyWydkZWZhdWx0J10odGhpcy5yZWZzWydjb3B5LWJ1dHRvbiddLCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10uYnVpbGRQdWJsaWNVcmwocHlkaW8sIGxpbmtNb2RlbC5nZXRMaW5rKCkuTGlua0hhc2gpO1xuICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcC5vbignc3VjY2VzcycsIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlNZXNzYWdlOiBtKCcxOTInKSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGNvcHlNZXNzYWdlOiBudWxsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjUwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsaXAub24oJ2Vycm9yJywgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvcHlNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsLm5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKFwiTWFjXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5TWVzc2FnZSA9IG0oMTQ0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlNZXNzYWdlID0gbSgxNDMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5TWVzc2FnZTogY29weU1lc3NhZ2UgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgY29weU1lc3NhZ2U6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RldGFjaENsaXBib2FyZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2hDbGlwYm9hcmQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xpcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsaXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBub2RlID0gX3Byb3BzLm5vZGU7XG4gICAgICAgICAgICB2YXIgbW9kZSA9IF9wcm9wcy5tb2RlO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLm9ic2VydmUoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzMy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLmxvYWQobm9kZSwgbW9kZSA9PT0gJ2luZm9QYW5lbCcpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hDbGlwYm9hcmQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLnN0b3BPYnNlcnZpbmcoXCJ1cGRhdGVcIik7XG4gICAgICAgICAgICB0aGlzLmRldGFjaENsaXBib2FyZCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hDbGlwYm9hcmQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMubm9kZSAmJiAocHJvcHMubm9kZSAhPT0gdGhpcy5wcm9wcy5ub2RlIHx8IHByb3BzLm5vZGUuZ2V0TWV0YWRhdGEoJ3B5ZGlvX3NoYXJlcycpICE9PSB0aGlzLnByb3BzLm5vZGUuZ2V0TWV0YWRhdGEoJ3B5ZGlvX3NoYXJlcycpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW9kZWwubG9hZChwcm9wcy5ub2RlLCBwcm9wcy5tb2RlID09PSAnaW5mb1BhbmVsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VzZXJzSW52aXRhdGlvbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXNlcnNJbnZpdGF0aW9ucyh1c2VyT2JqZWN0cywgY2VsbE1vZGVsKSB7XG4gICAgICAgICAgICBfbWFpblNoYXJlSGVscGVyMlsnZGVmYXVsdCddLnNlbmRDZWxsSW52aXRhdGlvbih0aGlzLnByb3BzLm5vZGUsIGNlbGxNb2RlbCwgdXNlck9iamVjdHMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaW5rSW52aXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rSW52aXRhdGlvbihsaW5rTW9kZWwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG1haWxEYXRhID0gX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5wcmVwYXJlRW1haWwodGhpcy5wcm9wcy5ub2RlLCBsaW5rTW9kZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWlsZXJEYXRhOiBfZXh0ZW5kcyh7fSwgbWFpbERhdGEsIHsgdXNlcnM6IFtdLCBsaW5rTW9kZWw6IGxpbmtNb2RlbCB9KSB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNtaXNzTWFpbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc21pc3NNYWlsZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFpbGVyRGF0YTogbnVsbCB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3VibWl0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb2RlbC5zYXZlKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5weWRpby5VSS5kaXNwbGF5TWVzc2FnZSgnRVJST1InLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBub2RlID0gX3Byb3BzMi5ub2RlO1xuICAgICAgICAgICAgdmFyIG1vZGUgPSBfcHJvcHMyLm1vZGU7XG4gICAgICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMyLnB5ZGlvO1xuICAgICAgICAgICAgdmFyIGVkaXRvck9uZUNvbHVtbiA9IF9wcm9wczIuZWRpdG9yT25lQ29sdW1uO1xuICAgICAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSBfc3RhdGUubW9kZWw7XG4gICAgICAgICAgICB2YXIgbWFpbGVyRGF0YSA9IF9zdGF0ZS5tYWlsZXJEYXRhO1xuICAgICAgICAgICAgdmFyIGxpbmtUb29sdGlwID0gX3N0YXRlLmxpbmtUb29sdGlwO1xuICAgICAgICAgICAgdmFyIGNvcHlNZXNzYWdlID0gX3N0YXRlLmNvcHlNZXNzYWdlO1xuXG4gICAgICAgICAgICB2YXIgbSA9IGZ1bmN0aW9uIG0oaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHlkaW8uTWVzc2FnZUhhc2hbJ3NoYXJlX2NlbnRlci4nICsgaWRdO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdlZGl0Jykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHB1YmxpY0xpbmtNb2RlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAobW9kZWwuZ2V0TGlua3MoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVibGljTGlua01vZGVsID0gbW9kZWwuZ2V0TGlua3MoKVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAocHVibGljTGlua01vZGVsICYmIHB1YmxpY0xpbmtNb2RlbC5nZXRMaW5rVXVpZCgpICYmIHB1YmxpY0xpbmtNb2RlbC5pc0VkaXRhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfTWFpbGVyMlsnZGVmYXVsdCddLCBfZXh0ZW5kcyh7fSwgbWFpbGVyRGF0YSwgeyBweWRpbzogcHlkaW8sIG9uRGlzbWlzczogdGhpcy5kaXNtaXNzTWFpbGVyLmJpbmQodGhpcykgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX2xpbmtzTGFiZWxQYW5lbDJbJ2RlZmF1bHQnXSwgeyBweWRpbzogcHlkaW8sIGxpbmtNb2RlbDogcHVibGljTGlua01vZGVsIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZm9udFNpemU6IDI0LCBwYWRkaW5nOiAnMjZweCAxMHB4IDAgJywgbGluZUhlaWdodDogJzI2cHgnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9NYWlsZXIyWydkZWZhdWx0J10sIF9leHRlbmRzKHt9LCBtYWlsZXJEYXRhLCB7IHB5ZGlvOiBweWRpbywgb25EaXNtaXNzOiB0aGlzLmRpc21pc3NNYWlsZXIuYmluZCh0aGlzKSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtKDI1NikucmVwbGFjZSgnJXMnLCBub2RlLmdldExhYmVsKCkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YWJzID0geyBsZWZ0OiBbXSwgcmlnaHQ6IFtdLCBsZWZ0U3R5bGU6IHsgcGFkZGluZzogMCB9IH07XG4gICAgICAgICAgICAgICAgdGFicy5yaWdodC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgTGFiZWw6IG0oMjUwKSxcbiAgICAgICAgICAgICAgICAgICAgVmFsdWU6IFwiY2VsbHNcIixcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfQ2VsbHNMaXN0MlsnZGVmYXVsdCddLCB7IHB5ZGlvOiBweWRpbywgY29tcG9zaXRlTW9kZWw6IG1vZGVsLCB1c2Vyc0ludml0YXRpb25zOiB0aGlzLnVzZXJzSW52aXRhdGlvbnMuYmluZCh0aGlzKSwgc3R5bGU6IGVkaXRvck9uZUNvbHVtbiA/IHsgcGFkZGluZzogMTAgfSA6IHt9IH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmtzID0gbW9kZWwuZ2V0TGlua3MoKTtcbiAgICAgICAgICAgICAgICBpZiAocHVibGljTGlua01vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYnMubGVmdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExhYmVsOiBtKDI1MSksXG4gICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTogJ3B1YmxpYy1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX2xpbmtzUGFuZWwyWydkZWZhdWx0J10sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweWRpbzogcHlkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRlTW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtNb2RlbDogbGlua3NbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01haWxlcjogX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5tYWlsZXJTdXBwb3J0ZWQocHlkaW8pID8gdGhpcy5saW5rSW52aXRhdGlvbi5iaW5kKHRoaXMpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwdWJsaWNMaW5rTW9kZWwuZ2V0TGlua1V1aWQoKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF5b3V0RGF0YSA9IF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10uY29tcGlsZUxheW91dERhdGEocHlkaW8sIG1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZVBhbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0RGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVQYW5lID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX2xpbmtzUHVibGljTGlua1RlbXBsYXRlMlsnZGVmYXVsdCddLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtNb2RlbDogcHVibGljTGlua01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweWRpbzogcHlkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dERhdGE6IGxheW91dERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHBhZGRpbmc6ICcxMHB4IDE2cHgnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBtb2RlbC5nZXROb2RlKCkuaXNMZWFmKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYnMubGVmdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYWJlbDogbSgyNTIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlOiAnbGluay1zZWN1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbGlua3NTZWN1cmVPcHRpb25zMlsnZGVmYXVsdCddLCB7IHB5ZGlvOiBweWRpbywgbGlua01vZGVsOiBsaW5rc1swXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVQYW5lICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkRpdmlkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5rc1swXS5pc0VkaXRhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzLmxlZnQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhYmVsOiBtKDI1MyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlOiAnbGluay12aXNpYmlsaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbGlua3NWaXNpYmlsaXR5UGFuZWwyWydkZWZhdWx0J10sIHsgcHlkaW86IHB5ZGlvLCBsaW5rTW9kZWw6IGxpbmtzWzBdIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbHdheXNMYXN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21haW5HZW5lcmljRWRpdG9yMlsnZGVmYXVsdCddLCB7XG4gICAgICAgICAgICAgICAgICAgIHRhYnM6IHRhYnMsXG4gICAgICAgICAgICAgICAgICAgIHB5ZGlvOiBweWRpbyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgIHNhdmVFbmFibGVkOiBtb2RlbC5pc0RpcnR5KCksXG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZUFjdGlvbjogdGhpcy5zdWJtaXQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZUFjdGlvbjogdGhpcy5wcm9wcy5vbkRpc21pc3MsXG4gICAgICAgICAgICAgICAgICAgIG9uUmV2ZXJ0QWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5yZXZlcnRDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvck9uZUNvbHVtbjogZWRpdG9yT25lQ29sdW1uLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IG51bGwsIGZsZXg6IDEsIG1pbkhlaWdodDogNTUwLCBjb2xvcjogJ3JnYmEoMCwwLDAsLjgzKScsIGZvbnRTaXplOiAxMyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBfcmV0ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbGluZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmdldENlbGxzKCkubWFwKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxscy5wdXNoKGNlbGwuZ2V0TGFiZWwoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEdlbmVyaWNMaW5lLCB7IGljb25DbGFzc05hbWU6ICdtZGkgbWRpLWFjY291bnQtbXVsdGlwbGUnLCBsZWdlbmQ6IG0oMjU0KSwgZGF0YTogY2VsbHMuam9pbignLCAnKSB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmtzID0gbW9kZWwuZ2V0TGlua3MoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxuID0gbGlua3NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG4uaGFzRXJyb3IoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBsbi5oYXNFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoR2VuZXJpY0xpbmUsIHsgaWNvbkNsYXNzTmFtZTogXCJtZGkgbWRpLWFsZXJ0LW91dGxpbmVcIiwgbGVnZW5kOiBcIkVycm9yXCIsIGRhdGE6IGVyci5EZXRhaWwgfHwgZXJyLk1zZyB8fCBlcnIgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsbi5nZXRMaW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHVibGljTGluayA9IF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10uYnVpbGRQdWJsaWNVcmwocHlkaW8sIGxuLmdldExpbmsoKS5MaW5rSGFzaCwgbW9kZSA9PT0gJ2luZm9QYW5lbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoR2VuZXJpY0xpbmUsIHsgaWNvbkNsYXNzTmFtZTogJ21kaSBtZGktbGluaycsIGxlZ2VuZDogbSgxMjEpLCBzdHlsZTogeyBvdmVyZmxvdzogJ3Zpc2libGUnIH0sIGRhdGFTdHlsZTogeyBvdmVyZmxvdzogJ3Zpc2libGUnIH0sIGRhdGE6IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiAnY29weS1idXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGN1cnNvcjogJ3BvaW50ZXInLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5zZXRTdGF0ZSh7IGxpbmtUb29sdGlwOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuc2V0U3RhdGUoeyBsaW5rVG9vbHRpcDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogY29weU1lc3NhZ2UgPyBjb3B5TWVzc2FnZSA6IG0oMTkxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb246IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogbGlua1Rvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZXRlQWN0aW9uID0gZnVuY3Rpb24gZGVsZXRlQWN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0obSgyNTUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0b3BPYnNlcnZpbmcoJ3VwZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRlbGV0ZUFsbCgpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51cGRhdGVVbmRlcmx5aW5nTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdjogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJpY0NhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweWRpbzogcHlkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBweWRpby5NZXNzYWdlSGFzaFsnc2hhcmVfY2VudGVyLjUwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlzbWlzc0FjdGlvbjogX3RoaXM0LnByb3BzLm9uRGlzbWlzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVBY3Rpb246IGRlbGV0ZUFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FZGl0QWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweWRpby5Db250cm9sbGVyLmZpcmVBY3Rpb24oJ3NoYXJlLWVkaXQtc2hhcmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlclNtYWxsOiBtb2RlID09PSAnaW5mb1BhbmVsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfcmV0ID09PSAnb2JqZWN0JykgcmV0dXJuIF9yZXQudjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb21wb3NpdGVDYXJkO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbXBvc2l0ZUNhcmQgPSBQYWxldHRlTW9kaWZpZXIoeyBwcmltYXJ5MUNvbG9yOiAnIzAwOTY4OCcgfSkoQ29tcG9zaXRlQ2FyZCk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBDb21wb3NpdGVDYXJkO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDctMjAxNyBDaGFybGVzIGR1IEpldSAtIEFic3RyaXVtIFNBUyA8dGVhbSAoYXQpIHB5ZC5pbz5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFB5ZGlvLlxuICpcbiAqIFB5ZGlvIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogUHlkaW8gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggUHlkaW8uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVGhlIGxhdGVzdCBjb2RlIGNhbiBiZSBmb3VuZCBhdCA8aHR0cHM6Ly9weWRpby5jb20+LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9Db21wb3NpdGVDYXJkID0gcmVxdWlyZSgnLi9Db21wb3NpdGVDYXJkJyk7XG5cbnZhciBfQ29tcG9zaXRlQ2FyZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db21wb3NpdGVDYXJkKTtcblxudmFyIF9weWRpb01vZGVsRGF0YU1vZGVsID0gcmVxdWlyZSgncHlkaW8vbW9kZWwvZGF0YS1tb2RlbCcpO1xuXG52YXIgX3B5ZGlvTW9kZWxEYXRhTW9kZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW9Nb2RlbERhdGFNb2RlbCk7XG5cbnZhciBfcHlkaW8gPSByZXF1aXJlKCdweWRpbycpO1xuXG52YXIgX3B5ZGlvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZXF1aXJlJHJlcXVpcmVMaWIgPSByZXF1aXJlKCdweWRpbycpLnJlcXVpcmVMaWIoJ2Jvb3QnKTtcblxudmFyIEFjdGlvbkRpYWxvZ01peGluID0gX3JlcXVpcmUkcmVxdWlyZUxpYi5BY3Rpb25EaWFsb2dNaXhpbjtcblxudmFyIENvbXBvc2l0ZURpYWxvZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0NvbXBvc2l0ZURpYWxvZycsXG5cbiAgICBtaXhpbnM6IFtBY3Rpb25EaWFsb2dNaXhpbl0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpYWxvZ1RpdGxlOiAnJyxcbiAgICAgICAgICAgIGRpYWxvZ0lzTW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgZGlhbG9nUGFkZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkaWFsb2dTaXplOiAnbGcnXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBweWRpbzogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoX3B5ZGlvMlsnZGVmYXVsdCddKS5pc1JlcXVpcmVkLFxuICAgICAgICBzZWxlY3Rpb246IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKF9weWRpb01vZGVsRGF0YU1vZGVsMlsnZGVmYXVsdCddKSxcbiAgICAgICAgcmVhZG9ubHk6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gICAgfSxcblxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgICAgIG1lc3NhZ2VzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBnZXRNZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgaXNSZWFkb25seTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgICB9LFxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gdGhpcy5wcm9wcy5weWRpby5NZXNzYWdlSGFzaDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgICAgIGdldE1lc3NhZ2U6IGZ1bmN0aW9uIGdldE1lc3NhZ2UobWVzc2FnZUlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/ICdzaGFyZV9jZW50ZXInIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzW25hbWVzcGFjZSArIChuYW1lc3BhY2UgPyBcIi5cIiA6IFwiXCIpICsgbWVzc2FnZUlkXSB8fCBtZXNzYWdlSWQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZUlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1JlYWRvbmx5OiBmdW5jdGlvbiBpc1JlYWRvbmx5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5yZWFkb25seTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMucHlkaW87XG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSBfcHJvcHMuc2VsZWN0aW9uO1xuXG4gICAgICAgIHZhciBub2RlID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLmdldFVuaXF1ZU5vZGUoKSkge1xuICAgICAgICAgICAgbm9kZSA9IHNlbGVjdGlvbi5nZXRVbmlxdWVOb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfQ29tcG9zaXRlQ2FyZDJbJ2RlZmF1bHQnXSwge1xuICAgICAgICAgICAgZWRpdG9yT25lQ29sdW1uOiB0aGlzLnByb3BzLmVkaXRvck9uZUNvbHVtbixcbiAgICAgICAgICAgIHB5ZGlvOiBweWRpbyxcbiAgICAgICAgICAgIG1vZGU6ICdlZGl0JyxcbiAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICBvbkRpc21pc3M6IHRoaXMucHJvcHMub25EaXNtaXNzXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb21wb3NpdGVEaWFsb2c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDE3IENoYXJsZXMgZHUgSmV1IC0gQWJzdHJpdW0gU0FTIDx0ZWFtIChhdCkgcHlkLmlvPlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUHlkaW8uXG4gKlxuICogUHlkaW8gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBQeWRpbyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBQeWRpby4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBUaGUgbGF0ZXN0IGNvZGUgY2FuIGJlIGZvdW5kIGF0IDxodHRwczovL3B5ZGlvLmNvbT4uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeDQsIF94NSwgX3g2KSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94NCwgcHJvcGVydHkgPSBfeDUsIHJlY2VpdmVyID0gX3g2OyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94NCA9IHBhcmVudDsgX3g1ID0gcHJvcGVydHk7IF94NiA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcHlkaW9MYW5nT2JzZXJ2YWJsZSA9IHJlcXVpcmUoJ3B5ZGlvL2xhbmcvb2JzZXJ2YWJsZScpO1xuXG52YXIgX3B5ZGlvTGFuZ09ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW9MYW5nT2JzZXJ2YWJsZSk7XG5cbnZhciBfbGlua3NMaW5rTW9kZWwgPSByZXF1aXJlKCcuLi9saW5rcy9MaW5rTW9kZWwnKTtcblxudmFyIF9saW5rc0xpbmtNb2RlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5rc0xpbmtNb2RlbCk7XG5cbnZhciBfbWFpblNoYXJlSGVscGVyID0gcmVxdWlyZSgnLi4vbWFpbi9TaGFyZUhlbHBlcicpO1xuXG52YXIgX21haW5TaGFyZUhlbHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWluU2hhcmVIZWxwZXIpO1xuXG52YXIgX3B5ZGlvTW9kZWxDZWxsID0gcmVxdWlyZSgncHlkaW8vbW9kZWwvY2VsbCcpO1xuXG52YXIgX3B5ZGlvTW9kZWxDZWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvTW9kZWxDZWxsKTtcblxudmFyIF9weWRpb0h0dHBSZXN0QXBpID0gcmVxdWlyZSgncHlkaW8vaHR0cC9yZXN0LWFwaScpO1xuXG52YXIgX3B5ZGlvID0gcmVxdWlyZSgncHlkaW8nKTtcblxudmFyIF9weWRpbzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weWRpbyk7XG5cbnZhciBfUHlkaW8kcmVxdWlyZUxpYiA9IF9weWRpbzJbJ2RlZmF1bHQnXS5yZXF1aXJlTGliKCdib290Jyk7XG5cbnZhciBtb21lbnQgPSBfUHlkaW8kcmVxdWlyZUxpYi5tb21lbnQ7XG5cbnZhciBDb21wb3NpdGVNb2RlbCA9IChmdW5jdGlvbiAoX09ic2VydmFibGUpIHtcbiAgICBfaW5oZXJpdHMoQ29tcG9zaXRlTW9kZWwsIF9PYnNlcnZhYmxlKTtcblxuICAgIGZ1bmN0aW9uIENvbXBvc2l0ZU1vZGVsKCkge1xuICAgICAgICB2YXIgZWRpdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NpdGVNb2RlbCk7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29tcG9zaXRlTW9kZWwucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdO1xuICAgICAgICB0aGlzLmxpbmtzID0gW107XG4gICAgICAgIHRoaXMuZWRpdCA9IGVkaXQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbXBvc2l0ZU1vZGVsLCBbe1xuICAgICAgICBrZXk6ICdlbXB0eUxpbmsnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW1wdHlMaW5rKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBsaW5rID0gbmV3IF9saW5rc0xpbmtNb2RlbDJbJ2RlZmF1bHQnXSgpO1xuICAgICAgICAgICAgdmFyIHRyZWVOb2RlID0gbmV3IF9weWRpb0h0dHBSZXN0QXBpLlRyZWVOb2RlKCk7XG4gICAgICAgICAgICB2YXIgYXV0aCA9IF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10uZ2V0QXV0aG9yaXphdGlvbnMoX3B5ZGlvMlsnZGVmYXVsdCddLmdldEluc3RhbmNlKCkpO1xuICAgICAgICAgICAgdHJlZU5vZGUuVXVpZCA9IG5vZGUuZ2V0TWV0YWRhdGEoKS5nZXQoJ3V1aWQnKTtcbiAgICAgICAgICAgIGxpbmsuZ2V0TGluaygpLkxhYmVsID0gbm9kZS5nZXRMYWJlbCgpO1xuICAgICAgICAgICAgbGluay5nZXRMaW5rKCkuRGVzY3JpcHRpb24gPSBweWRpby5NZXNzYWdlSGFzaFsnc2hhcmVfY2VudGVyLjI1NyddLnJlcGxhY2UoJyVzJywgbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdChcIllZWVkvTU0vRERcIikpO1xuICAgICAgICAgICAgbGluay5nZXRMaW5rKCkuUm9vdE5vZGVzLnB1c2godHJlZU5vZGUpO1xuICAgICAgICAgICAgLy8gVGVtcGxhdGUgLyBQZXJtaXNzaW9ucyBmcm9tIG5vZGVcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VGVtcGxhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFBlcm1pc3Npb25zID0gW19weWRpb0h0dHBSZXN0QXBpLlJlc3RTaGFyZUxpbmtBY2Nlc3NUeXBlLmNvbnN0cnVjdEZyb21PYmplY3QoJ0Rvd25sb2FkJyldO1xuICAgICAgICAgICAgaWYgKG5vZGUuaXNMZWFmKCkpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGVtcGxhdGUgPSBcInB5ZGlvX3VuaXF1ZV9kbFwiO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9TaGFyZUhlbHBlciRub2RlSGFzRWRpdG9yID0gX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5ub2RlSGFzRWRpdG9yKHB5ZGlvLCBub2RlKTtcblxuICAgICAgICAgICAgICAgIHZhciBwcmV2aWV3ID0gX1NoYXJlSGVscGVyJG5vZGVIYXNFZGl0b3IucHJldmlldztcblxuICAgICAgICAgICAgICAgIGlmIChwcmV2aWV3ICYmICFhdXRoLm1heF9kb3dubG9hZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRlbXBsYXRlID0gXCJweWRpb191bmlxdWVfc3RyaXBcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBlcm1pc3Npb25zLnB1c2goX3B5ZGlvSHR0cFJlc3RBcGkuUmVzdFNoYXJlTGlua0FjY2Vzc1R5cGUuY29uc3RydWN0RnJvbU9iamVjdCgnUHJldmlldycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF1dGgubWF4X2Rvd25sb2FkcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgREwgb25seSBhbmQgYXV0aCBoYXMgZGVmYXVsdCBtYXggZG93bmxvYWQsIHNldCBpdFxuICAgICAgICAgICAgICAgICAgICBsaW5rLmdldExpbmsoKS5NYXhEb3dubG9hZHMgPSBhdXRoLm1heF9kb3dubG9hZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGVtcGxhdGUgPSBcInB5ZGlvX3NoYXJlZF9mb2xkZXJcIjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0UGVybWlzc2lvbnMucHVzaChfcHlkaW9IdHRwUmVzdEFwaS5SZXN0U2hhcmVMaW5rQWNjZXNzVHlwZS5jb25zdHJ1Y3RGcm9tT2JqZWN0KCdQcmV2aWV3JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluay5nZXRMaW5rKCkuVmlld1RlbXBsYXRlTmFtZSA9IGRlZmF1bHRUZW1wbGF0ZTtcbiAgICAgICAgICAgIGxpbmsuZ2V0TGluaygpLlBlcm1pc3Npb25zID0gZGVmYXVsdFBlcm1pc3Npb25zO1xuICAgICAgICAgICAgaWYgKGF1dGgubWF4X2V4cGlyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBsaW5rLmdldExpbmsoKS5BY2Nlc3NFbmQgPSBcIlwiICsgKE1hdGgucm91bmQobmV3IERhdGUoKSAvIDEwMDApICsgcGFyc2VJbnQoYXV0aC5tYXhfZXhwaXJhdGlvbikgKiA2MCAqIDYwICogMjQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaW5rLm9ic2VydmUoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm5vdGlmeShcInVwZGF0ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGluay5vYnNlcnZlKFwic2F2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVW5kZXJseWluZ05vZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZUVtcHR5Q2VsbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbXB0eUNlbGwoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNlbGwgPSBuZXcgX3B5ZGlvTW9kZWxDZWxsMlsnZGVmYXVsdCddKHRydWUpO1xuICAgICAgICAgICAgY2VsbC5zZXRMYWJlbCh0aGlzLm5vZGUuZ2V0TGFiZWwoKSk7XG4gICAgICAgICAgICBjZWxsLmFkZFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgICAgICBjZWxsLm9ic2VydmUoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5ub3RpZnkoXCJ1cGRhdGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNlbGwuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KFwidXBkYXRlXCIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRUb0V4aXN0aW5nQ2VsbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUb0V4aXN0aW5nQ2VsbChjZWxsSWQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2VsbCA9IG5ldyBfcHlkaW9Nb2RlbENlbGwyWydkZWZhdWx0J10odHJ1ZSk7XG4gICAgICAgICAgICBjZWxsLm9ic2VydmUoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzMy5ub3RpZnkoXCJ1cGRhdGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNlbGwubG9hZChjZWxsSWQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkUm9vdE5vZGUoX3RoaXMzLm5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNlbGxzLnB1c2goY2VsbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VwZGF0ZVVuZGVybHlpbmdOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVVuZGVybHlpbmdOb2RlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2tpcFVwZGF0ZVVuZGVybHlpbmdOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHlkaW8uZ2V0Q29udGV4dEhvbGRlcigpLnJlcXVpcmVOb2RlUmVsb2FkKHRoaXMubm9kZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlbGV0ZUxpbmsnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlTGluayhsaW5rTW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBsaW5rTW9kZWwuZGVsZXRlTGluayh0aGlzLmVtcHR5TGluayh0aGlzLm5vZGUpLmdldExpbmsoKSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LnVwZGF0ZVVuZGVybHlpbmdOb2RlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROb2RlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gbm9kZSB7VHJlZU5vZGV9XG4gICAgICAgICAqIEBwYXJhbSBvYnNlcnZlUmVwbGFjZSBib29sXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9hZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZVJlcGxhY2UgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubGlua3MgPSBbXTtcbiAgICAgICAgICAgIGlmIChub2RlLmdldE1ldGFkYXRhKCkuZ2V0KCdweWRpb19zaGFyZXMnKSkge1xuICAgICAgICAgICAgICAgIHZhciBzaGFyZU1ldGEgPSBKU09OLnBhcnNlKG5vZGUuZ2V0TWV0YWRhdGEoKS5nZXQoJ3B5ZGlvX3NoYXJlcycpKTtcbiAgICAgICAgICAgICAgICBzaGFyZU1ldGEubWFwKGZ1bmN0aW9uIChzaGFyZWRXb3Jrc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXJlZFdvcmtzcGFjZS5TY29wZSA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmtNb2RlbCA9IG5ldyBfbGlua3NMaW5rTW9kZWwyWydkZWZhdWx0J10oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtNb2RlbC5vYnNlcnZlKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUubm90aWZ5KFwidXBkYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rTW9kZWwub2JzZXJ2ZShcInNhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNS51cGRhdGVVbmRlcmx5aW5nTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rTW9kZWwubG9hZChzaGFyZWRXb3Jrc3BhY2UuVVVJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUubGlua3MucHVzaChsaW5rTW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXJlZFdvcmtzcGFjZS5TY29wZSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBuZXcgX3B5ZGlvTW9kZWxDZWxsMlsnZGVmYXVsdCddKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm9ic2VydmUoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNS5ub3RpZnkoXCJ1cGRhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubG9hZChzaGFyZWRXb3Jrc3BhY2UuVVVJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUuY2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdCAmJiAhdGhpcy5saW5rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2godGhpcy5lbXB0eUxpbmsobm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9ic2VydmVSZXBsYWNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9ic2VydmUoJ25vZGVfcmVwbGFjZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5sb2FkKF90aGlzNS5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWRVbmlxdWVMaW5rJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRVbmlxdWVMaW5rKGxpbmtVdWlkLCBub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgICAgIHZhciBsaW5rTW9kZWwgPSBuZXcgX2xpbmtzTGlua01vZGVsMlsnZGVmYXVsdCddKCk7XG4gICAgICAgICAgICBsaW5rTW9kZWwub2JzZXJ2ZShcInVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM2Lm5vdGlmeShcInVwZGF0ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlua01vZGVsLmxvYWQobGlua1V1aWQpO1xuICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKGxpbmtNb2RlbCk7XG4gICAgICAgICAgICByZXR1cm4gbGlua01vZGVsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHByb21zID0gW107XG4gICAgICAgICAgICB0aGlzLmNlbGxzLm1hcChmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIGlmIChyLmlzRGlydHkoKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9tcy5wdXNoKHIuc2F2ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGlua3MubWFwKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGwuaXNEaXJ0eSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21zLnB1c2gobC5zYXZlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gV2FpdCB0aGF0IGFsbCBzYXZlIGFyZSBmaW5pc2hlZFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjZWxscyB0aGF0IGRvbid0IGhhdmUgdGhpcyBub2RlIGFueW1vcmVcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUlkID0gX3RoaXM3Lm5vZGUuZ2V0TWV0YWRhdGEoKS5nZXQoJ3V1aWQnKTtcbiAgICAgICAgICAgICAgICBfdGhpczcuY2VsbHMgPSBfdGhpczcuY2VsbHMuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByLmhhc1Jvb3ROb2RlKG5vZGVJZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXM3LnVwZGF0ZVVuZGVybHlpbmdOb2RlKCk7XG4gICAgICAgICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIF90aGlzNy51cGRhdGVVbmRlcmx5aW5nTm9kZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlbGV0ZUFsbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVBbGwoKSB7XG4gICAgICAgICAgICB2YXIgbm9kZVV1aWQgPSB0aGlzLm5vZGUuZ2V0TWV0YWRhdGEoKS5nZXQoJ3V1aWQnKTtcbiAgICAgICAgICAgIHZhciBwID0gW107XG4gICAgICAgICAgICB0aGlzLmNlbGxzLm1hcChmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHIucmVtb3ZlUm9vdE5vZGUobm9kZVV1aWQpO1xuICAgICAgICAgICAgICAgIHAucHVzaChyLnNhdmUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGlua3MubWFwKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICAgICAgcC5wdXNoKGwuZGVsZXRlTGluaygpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVOZXdDZWxsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZU5ld0NlbGwoY2VsbCkge1xuICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIgIT09IGNlbGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KFwidXBkYXRlXCIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXZlcnRDaGFuZ2VzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldmVydENoYW5nZXMoKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZW1wdHkgY2VsbHNcbiAgICAgICAgICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNlbGxzLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHJldHVybiByLmdldFV1aWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jZWxscy5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBpZiAoci5pc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgci5yZXZlcnRDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxpbmtzLm1hcChmdW5jdGlvbiAobCkge1xuICAgICAgICAgICAgICAgIGlmIChsLmlzRGlydHkoKSkge1xuICAgICAgICAgICAgICAgICAgICBsLnJldmVydENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCd1cGRhdGUnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNEaXJ0eScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RpcnR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHMuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIuaXNEaXJ0eSgpO1xuICAgICAgICAgICAgfSkubGVuZ3RoIHx8IHRoaXMubGlua3MuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGwuaXNEaXJ0eSgpO1xuICAgICAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wT2JzZXJ2aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BPYnNlcnZpbmcoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2VsbHMubWFwKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zdG9wT2JzZXJ2aW5nKFwidXBkYXRlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxpbmtzLm1hcChmdW5jdGlvbiAobGluaykge1xuICAgICAgICAgICAgICAgIGxpbmsuc3RvcE9ic2VydmluZyhcInVwZGF0ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29tcG9zaXRlTW9kZWwucHJvdG90eXBlKSwgJ3N0b3BPYnNlcnZpbmcnLCB0aGlzKS5jYWxsKHRoaXMsIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldENlbGxzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENlbGxzKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlSWQgPSBfdGhpczgubm9kZS5nZXRNZXRhZGF0YSgpLmdldCgndXVpZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdjogX3RoaXM4LmNlbGxzLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByLmhhc1Jvb3ROb2RlKG5vZGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9yZXQgPT09ICdvYmplY3QnKSByZXR1cm4gX3JldC52O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jZWxscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TGlua3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGlua3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rcztcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb21wb3NpdGVNb2RlbDtcbn0pKF9weWRpb0xhbmdPYnNlcnZhYmxlMlsnZGVmYXVsdCddKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ29tcG9zaXRlTW9kZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDE3IENoYXJsZXMgZHUgSmV1IC0gQWJzdHJpdW0gU0FTIDx0ZWFtIChhdCkgcHlkLmlvPlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUHlkaW8uXG4gKlxuICogUHlkaW8gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBQeWRpbyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBQeWRpby4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBUaGUgbGF0ZXN0IGNvZGUgY2FuIGJlIGZvdW5kIGF0IDxodHRwczovL3B5ZGlvLmNvbT4uXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gyLCBfeDMsIF94NCkgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeDIsIHByb3BlcnR5ID0gX3gzLCByZWNlaXZlciA9IF94NDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeDIgPSBwYXJlbnQ7IF94MyA9IHByb3BlcnR5OyBfeDQgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHlkaW9IdHRwUmVzb3VyY2VzTWFuYWdlciA9IHJlcXVpcmUoJ3B5ZGlvL2h0dHAvcmVzb3VyY2VzLW1hbmFnZXInKTtcblxudmFyIF9weWRpb0h0dHBSZXNvdXJjZXNNYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvSHR0cFJlc291cmNlc01hbmFnZXIpO1xuXG52YXIgX21haW5TaGFyZUhlbHBlciA9IHJlcXVpcmUoJy4uL21haW4vU2hhcmVIZWxwZXInKTtcblxudmFyIF9tYWluU2hhcmVIZWxwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpblNoYXJlSGVscGVyKTtcblxudmFyIF9tYXRlcmlhbFVpID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWknKTtcblxudmFyIF9weWRpb0h0dHBSZXN0QXBpID0gcmVxdWlyZSgncHlkaW8vaHR0cC9yZXN0LWFwaScpO1xuXG52YXIgTWFpbGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1haWxlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBNYWlsZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1haWxlcik7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWFpbGVyLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBtYWlsZXJEYXRhOiBudWxsIH07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1haWxlciwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgc3ViamVjdCA9IG5ld1Byb3BzLnN1YmplY3Q7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IG5ld1Byb3BzLm1lc3NhZ2U7XG4gICAgICAgICAgICB2YXIgdXNlcnMgPSBuZXdQcm9wcy51c2VycztcbiAgICAgICAgICAgIHZhciBsaW5rTW9kZWwgPSBuZXdQcm9wcy5saW5rTW9kZWw7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVJZCA9IG5ld1Byb3BzLnRlbXBsYXRlSWQ7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVEYXRhID0gbmV3UHJvcHMudGVtcGxhdGVEYXRhO1xuXG4gICAgICAgICAgICBpZiAoc3ViamVjdCB8fCB0ZW1wbGF0ZUlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10uZm9yY2VNYWlsZXJPbGRTY2hvb2woKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW5jU3ViamVjdCA9IGVuY29kZVVSSUNvbXBvbmVudChzdWJqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwibWFpbHRvOmN1c3RvbS1lbWFpbEBkb21haW4uY29tP1N1YmplY3Q9XCIgKyBlbmNTdWJqZWN0ICsgXCImQm9keT1cIiArIG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jb25zdCBsaW5rRGF0YSA9IGhhc2ggPyB0aGlzLnN0YXRlLm1vZGVsLmdldExpbmtEYXRhKGhhc2gpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIF9weWRpb0h0dHBSZXNvdXJjZXNNYW5hZ2VyMlsnZGVmYXVsdCddLmxvYWRDbGFzc2VzQW5kQXBwbHkoWydQeWRpb01haWxlciddLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haWxlckRhdGE6IF9leHRlbmRzKHt9LCBuZXdQcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUlkZW50aWZpY2F0aW9uOiBsaW5rTW9kZWwgJiYgbGlua01vZGVsLmdldExpbmsoKS5UYXJnZXRVc2VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVkT25seTogbGlua01vZGVsICYmIGxpbmtNb2RlbC5nZXRMaW5rKCkuUmVzdHJpY3RUb1RhcmdldFVzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyaXBwbGVJZGVudGlmaWNhdGlvbktleXM6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFpbGVyRGF0YTogbnVsbCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndG9nZ2xlTWFpbGVyRGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVNYWlsZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWlsZXJEYXRhOiBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZS5tYWlsZXJEYXRhLCBkYXRhKSB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzbWlzc01haWxlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNtaXNzTWFpbGVyKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFpbGVyUHJvY2Vzc1Bvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbWFpbGVyUHJvY2Vzc1Bvc3QoRW1haWwsIHVzZXJzLCBzdWJqZWN0LCBtZXNzYWdlLCBsaW5rLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIG1haWxlckRhdGEgPSB0aGlzLnN0YXRlLm1haWxlckRhdGE7XG4gICAgICAgICAgICB2YXIgY3JpcHBsZUlkZW50aWZpY2F0aW9uS2V5cyA9IG1haWxlckRhdGEuY3JpcHBsZUlkZW50aWZpY2F0aW9uS2V5cztcbiAgICAgICAgICAgIHZhciBpZGVudGlmaWVkT25seSA9IG1haWxlckRhdGEuaWRlbnRpZmllZE9ubHk7XG4gICAgICAgICAgICB2YXIgbGlua01vZGVsID0gbWFpbGVyRGF0YS5saW5rTW9kZWw7XG5cbiAgICAgICAgICAgIHZhciBsaW5rT2JqZWN0ID0gbGlua01vZGVsLmdldExpbmsoKTtcbiAgICAgICAgICAgIGlmICghbGlua09iamVjdC5UYXJnZXRVc2Vycykge1xuICAgICAgICAgICAgICAgIGxpbmtPYmplY3QuVGFyZ2V0VXNlcnMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmtPYmplY3QuUmVzdHJpY3RUb1RhcmdldFVzZXJzID0gaWRlbnRpZmllZE9ubHk7XG5cbiAgICAgICAgICAgIHZhciBzaGFyZU1haWxzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1c2VycykuZm9yRWFjaChmdW5jdGlvbiAodSkge1xuICAgICAgICAgICAgICAgIHZhciBrID0gY3JpcHBsZUlkZW50aWZpY2F0aW9uS2V5cyA/IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KSA6IHU7XG4gICAgICAgICAgICAgICAgbGlua09iamVjdC5UYXJnZXRVc2Vyc1trXSA9IF9weWRpb0h0dHBSZXN0QXBpLlJlc3RTaGFyZUxpbmtUYXJnZXRVc2VyLmNvbnN0cnVjdEZyb21PYmplY3QoeyBEaXNwbGF5OiB1c2Vyc1t1XS5nZXRMYWJlbCgpLCBEb3dubG9hZENvdW50OiAwIH0pO1xuICAgICAgICAgICAgICAgIHNoYXJlTWFpbHNba10gPSB1O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaW5rTW9kZWwudXBkYXRlTGluayhsaW5rT2JqZWN0KTtcbiAgICAgICAgICAgIGxpbmtNb2RlbC5zYXZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVtYWlsID0gbmV3IEVtYWlsKCk7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsTGluayA9IGxpbmtNb2RlbC5nZXRQdWJsaWNVcmwoKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cChvcmlnaW5hbExpbmssICdnJyk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2hhcmVNYWlscykuZm9yRWFjaChmdW5jdGlvbiAodSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TGluayA9IG9yaWdpbmFsTGluayArICc/dT0nICsgdTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld01lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UocmVnZXhwLCBuZXdMaW5rKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWwuYWRkVGFyZ2V0KHNoYXJlTWFpbHNbdV0sIHN1YmplY3QsIG5ld01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVtYWlsLnBvc3QoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldE1lc3NhZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWVzc2FnZShrZXkpIHtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAnc2hhcmVfY2VudGVyJyA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucHlkaW8uTWVzc2FnZUhhc2hbbmFtZXNwYWNlICsgKG5hbWVzcGFjZSA/ICcuJyA6ICcnKSArIGtleV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubWFpbGVyRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBtYWlsZXJEYXRhID0gdGhpcy5zdGF0ZS5tYWlsZXJEYXRhO1xuXG4gICAgICAgICAgICAgICAgdmFyIGN1c3RvbWl6ZU1lc3NhZ2VQYW5lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmIChmYWxzZSAmJiBtYWlsZXJEYXRhLmxpbmtNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBtYWlsZXJEYXRhLmVuYWJsZUlkZW50aWZpY2F0aW9uID8geyBwYWRkaW5nOiAnMTBweCAyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnI0VDRUZGMScsIGZvbnRTaXplOiAxNCB9IDogeyBwYWRkaW5nOiAnMTBweCAyMHB4IDAnLCBmb250U2l6ZTogMTQgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxldFVzZXJDaG9vc2VDcmlwcGxlID0gdGhpcy5wcm9wcy5weWRpby5nZXRQbHVnaW5Db25maWdzKCdhY3Rpb24uc2hhcmUnKS5nZXQoJ0VNQUlMX1BFUlNPTkFMX0xJTktfU0VORF9DTEVBUicpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21pemVNZXNzYWdlUGFuZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuVG9nZ2xlLCB7IGxhYmVsOiB0aGlzLmdldE1lc3NhZ2UoMjM1KSwgdG9nZ2xlZDogbWFpbGVyRGF0YS5lbmFibGVJZGVudGlmaWNhdGlvbiwgb25Ub2dnbGU6IGZ1bmN0aW9uIChlLCBjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi50b2dnbGVNYWlsZXJEYXRhKHsgZW5hYmxlSWRlbnRpZmljYXRpb246IGMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haWxlckRhdGEuZW5hYmxlSWRlbnRpZmljYXRpb24gJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuVG9nZ2xlLCB7IGxhYmVsOiBcIi0tIFwiICsgdGhpcy5nZXRNZXNzYWdlKDIzNiksIHRvZ2dsZWQ6IG1haWxlckRhdGEuaWRlbnRpZmllZE9ubHksIG9uVG9nZ2xlOiBmdW5jdGlvbiAoZSwgYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudG9nZ2xlTWFpbGVyRGF0YSh7IGlkZW50aWZpZWRPbmx5OiBjIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWlsZXJEYXRhLmVuYWJsZUlkZW50aWZpY2F0aW9uICYmIGxldFVzZXJDaG9vc2VDcmlwcGxlICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLlRvZ2dsZSwgeyBsYWJlbDogXCItLSBcIiArIHRoaXMuZ2V0TWVzc2FnZSgyMzcpLCB0b2dnbGVkOiBtYWlsZXJEYXRhLmNyaXBwbGVJZGVudGlmaWNhdGlvbktleXMsIG9uVG9nZ2xlOiBmdW5jdGlvbiAoZSwgYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudG9nZ2xlTWFpbGVyRGF0YSh7IGNyaXBwbGVJZGVudGlmaWNhdGlvbktleXM6IGMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoUHlkaW9NYWlsZXIuUGFuZSwgX2V4dGVuZHMoe30sIG1haWxlckRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzOiB0aGlzLmRpc21pc3NNYWlsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2hhcmUtY2VudGVyLW1haWxlcicsXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsVGl0bGU6IHRoaXMucHJvcHMucHlkaW8uTWVzc2FnZUhhc2hbXCJzaGFyZV9jZW50ZXIuNDVcIl0sXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxQYW5lVG9wOiBjdXN0b21pemVNZXNzYWdlUGFuZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Bvc3Q6IG1haWxlckRhdGEuZW5hYmxlSWRlbnRpZmljYXRpb24gPyB0aGlzLm1haWxlclByb2Nlc3NQb3N0LmJpbmQodGhpcykgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogNDIwLCBtYXJnaW46ICcwIGF1dG8nIH1cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1haWxlcjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNYWlsZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDE3IENoYXJsZXMgZHUgSmV1IC0gQWJzdHJpdW0gU0FTIDx0ZWFtIChhdCkgcHlkLmlvPlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUHlkaW8uXG4gKlxuICogUHlkaW8gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBQeWRpbyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBQeWRpby4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBUaGUgbGF0ZXN0IGNvZGUgY2FuIGJlIGZvdW5kIGF0IDxodHRwczovL3B5ZGlvLmNvbT4uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jb21wb3NpdGVDb21wb3NpdGVNb2RlbCA9IHJlcXVpcmUoJy4uL2NvbXBvc2l0ZS9Db21wb3NpdGVNb2RlbCcpO1xuXG52YXIgX2NvbXBvc2l0ZUNvbXBvc2l0ZU1vZGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZUNvbXBvc2l0ZU1vZGVsKTtcblxudmFyIF9tYWluR2VuZXJpY0VkaXRvciA9IHJlcXVpcmUoJy4uL21haW4vR2VuZXJpY0VkaXRvcicpO1xuXG52YXIgX21haW5HZW5lcmljRWRpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21haW5HZW5lcmljRWRpdG9yKTtcblxudmFyIF9saW5rc1BhbmVsID0gcmVxdWlyZSgnLi4vbGlua3MvUGFuZWwnKTtcblxudmFyIF9saW5rc1BhbmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmtzUGFuZWwpO1xuXG52YXIgX2xpbmtzU2VjdXJlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2xpbmtzL1NlY3VyZU9wdGlvbnMnKTtcblxudmFyIF9saW5rc1NlY3VyZU9wdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlua3NTZWN1cmVPcHRpb25zKTtcblxudmFyIF9tYWluU2hhcmVIZWxwZXIgPSByZXF1aXJlKCcuLi9tYWluL1NoYXJlSGVscGVyJyk7XG5cbnZhciBfbWFpblNoYXJlSGVscGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21haW5TaGFyZUhlbHBlcik7XG5cbnZhciBfTWFpbGVyID0gcmVxdWlyZSgnLi9NYWlsZXInKTtcblxudmFyIF9NYWlsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFpbGVyKTtcblxudmFyIF9saW5rc1B1YmxpY0xpbmtUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2xpbmtzL1B1YmxpY0xpbmtUZW1wbGF0ZScpO1xuXG52YXIgX2xpbmtzUHVibGljTGlua1RlbXBsYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmtzUHVibGljTGlua1RlbXBsYXRlKTtcblxudmFyIF9saW5rc1Zpc2liaWxpdHlQYW5lbCA9IHJlcXVpcmUoJy4uL2xpbmtzL1Zpc2liaWxpdHlQYW5lbCcpO1xuXG52YXIgX2xpbmtzVmlzaWJpbGl0eVBhbmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmtzVmlzaWJpbGl0eVBhbmVsKTtcblxudmFyIF9saW5rc0xhYmVsUGFuZWwgPSByZXF1aXJlKCcuLi9saW5rcy9MYWJlbFBhbmVsJyk7XG5cbnZhciBfbGlua3NMYWJlbFBhbmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmtzTGFiZWxQYW5lbCk7XG5cbnZhciBfbWF0ZXJpYWxVaSA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpJyk7XG5cbnZhciBfcmVxdWlyZSRyZXF1aXJlTGliID0gcmVxdWlyZSgncHlkaW8nKS5yZXF1aXJlTGliKCdob2MnKTtcblxudmFyIFBhbGV0dGVNb2RpZmllciA9IF9yZXF1aXJlJHJlcXVpcmVMaWIuUGFsZXR0ZU1vZGlmaWVyO1xuXG52YXIgU2ltcGxlTGlua0NhcmQgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU2ltcGxlTGlua0NhcmQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU2ltcGxlTGlua0NhcmQocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNpbXBsZUxpbmtDYXJkKTtcblxuICAgICAgICBwcm9wcy5lZGl0b3JPbmVDb2x1bW4gPSB0cnVlO1xuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihTaW1wbGVMaW5rQ2FyZC5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IF9jb21wb3NpdGVDb21wb3NpdGVNb2RlbDJbJ2RlZmF1bHQnXSh0cnVlKTtcbiAgICAgICAgbW9kZWwuc2tpcFVwZGF0ZVVuZGVybHlpbmdOb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vZGU6IHRoaXMucHJvcHMubW9kZSB8fCAndmlldycsXG4gICAgICAgICAgICBtb2RlbDogbW9kZWxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2ltcGxlTGlua0NhcmQsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IF9wcm9wcy5ub2RlO1xuICAgICAgICAgICAgdmFyIGxpbmtVdWlkID0gX3Byb3BzLmxpbmtVdWlkO1xuICAgICAgICAgICAgdmFyIG9uUmVtb3ZlTGluayA9IF9wcm9wcy5vblJlbW92ZUxpbms7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLnN0YXRlLm1vZGVsO1xuXG4gICAgICAgICAgICBtb2RlbC5vYnNlcnZlKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbGlua01vZGVsID0gbW9kZWwubG9hZFVuaXF1ZUxpbmsobGlua1V1aWQsIG5vZGUpO1xuICAgICAgICAgICAgbGlua01vZGVsLm9ic2VydmVPbmNlKFwiZGVsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAob25SZW1vdmVMaW5rKSBvblJlbW92ZUxpbmsoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubW9kZWwuc3RvcE9ic2VydmluZyhcInVwZGF0ZVwiKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuTGlua1V1aWQgJiYgcHJvcHMuTGlua1V1aWQgIT09IHRoaXMucHJvcHMuTGlua1V1aWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLmxvYWRVbmlxdWVMaW5rKHByb3BzLkxpbmtVdWlkLCBwcm9wcy5ub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlua0ludml0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlua0ludml0YXRpb24obGlua01vZGVsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBtYWlsRGF0YSA9IF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10ucHJlcGFyZUVtYWlsKHRoaXMucHJvcHMubm9kZSwgbGlua01vZGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFpbGVyRGF0YTogX2V4dGVuZHMoe30sIG1haWxEYXRhLCB7IHVzZXJzOiBbXSwgbGlua01vZGVsOiBsaW5rTW9kZWwgfSkgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzbWlzc01haWxlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNtaXNzTWFpbGVyKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1haWxlckRhdGE6IG51bGwgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N1Ym1pdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJtaXQoKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLnN0YXRlLm1vZGVsO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBwdWJsaWNMaW5rTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsLmdldExpbmtzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY0xpbmtNb2RlbCA9IG1vZGVsLmdldExpbmtzKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY0xpbmtNb2RlbC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHlkaW8uVUkuZGlzcGxheU1lc3NhZ2UoJ0VSUk9SJywgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBub2RlID0gX3Byb3BzMi5ub2RlO1xuICAgICAgICAgICAgdmFyIHB5ZGlvID0gX3Byb3BzMi5weWRpbztcbiAgICAgICAgICAgIHZhciBlZGl0b3JPbmVDb2x1bW4gPSBfcHJvcHMyLmVkaXRvck9uZUNvbHVtbjtcbiAgICAgICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgdmFyIG1vZGVsID0gX3N0YXRlLm1vZGVsO1xuICAgICAgICAgICAgdmFyIG1haWxlckRhdGEgPSBfc3RhdGUubWFpbGVyRGF0YTtcblxuICAgICAgICAgICAgdmFyIG0gPSBmdW5jdGlvbiBtKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB5ZGlvLk1lc3NhZ2VIYXNoWydzaGFyZV9jZW50ZXIuJyArIGlkXTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBwdWJsaWNMaW5rTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAobW9kZWwuZ2V0TGlua3MoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwdWJsaWNMaW5rTW9kZWwgPSBtb2RlbC5nZXRMaW5rcygpWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChwdWJsaWNMaW5rTW9kZWwgJiYgcHVibGljTGlua01vZGVsLmdldExpbmtVdWlkKCkgJiYgcHVibGljTGlua01vZGVsLmlzRWRpdGFibGUoKSkge1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX01haWxlcjJbJ2RlZmF1bHQnXSwgX2V4dGVuZHMoe30sIG1haWxlckRhdGEsIHsgcHlkaW86IHB5ZGlvLCBvbkRpc21pc3M6IHRoaXMuZGlzbWlzc01haWxlci5iaW5kKHRoaXMpIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX2xpbmtzTGFiZWxQYW5lbDJbJ2RlZmF1bHQnXSwgeyBweWRpbzogcHlkaW8sIGxpbmtNb2RlbDogcHVibGljTGlua01vZGVsIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGZvbnRTaXplOiAyNCwgcGFkZGluZzogJzI2cHggMTBweCAwICcsIGxpbmVIZWlnaHQ6ICcyNnB4JyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9NYWlsZXIyWydkZWZhdWx0J10sIF9leHRlbmRzKHt9LCBtYWlsZXJEYXRhLCB7IHB5ZGlvOiBweWRpbywgb25EaXNtaXNzOiB0aGlzLmRpc21pc3NNYWlsZXIuYmluZCh0aGlzKSB9KSksXG4gICAgICAgICAgICAgICAgICAgIG0oMjU2KS5yZXBsYWNlKCclcycsIG5vZGUuZ2V0TGFiZWwoKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRhYnMgPSB7IGxlZnQ6IFtdLCByaWdodDogW10sIGxlZnRTdHlsZTogeyBwYWRkaW5nOiAwIH0gfTtcbiAgICAgICAgICAgIHZhciBsaW5rcyA9IG1vZGVsLmdldExpbmtzKCk7XG4gICAgICAgICAgICBpZiAocHVibGljTGlua01vZGVsKSB7XG4gICAgICAgICAgICAgICAgdGFicy5sZWZ0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBMYWJlbDogbSgyNTEpLFxuICAgICAgICAgICAgICAgICAgICBWYWx1ZTogJ3B1YmxpYy1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbGlua3NQYW5lbDJbJ2RlZmF1bHQnXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHlkaW86IHB5ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRlTW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua01vZGVsOiBsaW5rc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNYWlsZXI6IF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10ubWFpbGVyU3VwcG9ydGVkKHB5ZGlvKSA/IHRoaXMubGlua0ludml0YXRpb24uYmluZCh0aGlzKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHVibGljTGlua01vZGVsLmdldExpbmtVdWlkKCkpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbGF5b3V0RGF0YSA9IF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10uY29tcGlsZUxheW91dERhdGEocHlkaW8sIG1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlUGFuZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dERhdGEubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVQYW5lID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX2xpbmtzUHVibGljTGlua1RlbXBsYXRlMlsnZGVmYXVsdCddLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua01vZGVsOiBwdWJsaWNMaW5rTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHlkaW86IHB5ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dERhdGE6IGxheW91dERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgcGFkZGluZzogJzEwcHggMTZweCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogbW9kZWwuZ2V0Tm9kZSgpLmlzTGVhZigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJzLmxlZnQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBMYWJlbDogbSgyNTIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWU6ICdsaW5rLXNlY3VyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX2xpbmtzU2VjdXJlT3B0aW9uczJbJ2RlZmF1bHQnXSwgeyBweWRpbzogcHlkaW8sIGxpbmtNb2RlbDogbGlua3NbMF0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVQYW5lICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkRpdmlkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGFicy5sZWZ0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgTGFiZWw6IG0oMjUzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlOiAnbGluay12aXNpYmlsaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX2xpbmtzVmlzaWJpbGl0eVBhbmVsMlsnZGVmYXVsdCddLCB7IHB5ZGlvOiBweWRpbywgbGlua01vZGVsOiBsaW5rc1swXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFsd2F5c0xhc3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21haW5HZW5lcmljRWRpdG9yMlsnZGVmYXVsdCddLCB7XG4gICAgICAgICAgICAgICAgdGFiczogdGFicyxcbiAgICAgICAgICAgICAgICBweWRpbzogcHlkaW8sXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgICAgICAgICAgc2F2ZUVuYWJsZWQ6IG1vZGVsLmlzRGlydHkoKSxcbiAgICAgICAgICAgICAgICBvblNhdmVBY3Rpb246IHRoaXMuc3VibWl0LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgb25DbG9zZUFjdGlvbjogdGhpcy5wcm9wcy5vbkRpc21pc3MsXG4gICAgICAgICAgICAgICAgb25SZXZlcnRBY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwucmV2ZXJ0Q2hhbmdlcygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yT25lQ29sdW1uOiBlZGl0b3JPbmVDb2x1bW4sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBudWxsLCBmbGV4OiAxLCBtaW5IZWlnaHQ6IDU1MCwgY29sb3I6ICdyZ2JhKDAsMCwwLC44MyknLCBmb250U2l6ZTogMTMgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2ltcGxlTGlua0NhcmQ7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2ltcGxlTGlua0NhcmQgPSBQYWxldHRlTW9kaWZpZXIoeyBwcmltYXJ5MUNvbG9yOiAnIzAwOTY4OCcgfSkoU2ltcGxlTGlua0NhcmQpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gU2ltcGxlTGlua0NhcmQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDE3IENoYXJsZXMgZHUgSmV1IC0gQWJzdHJpdW0gU0FTIDx0ZWFtIChhdCkgcHlkLmlvPlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUHlkaW8uXG4gKlxuICogUHlkaW8gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBQeWRpbyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBQeWRpby4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBUaGUgbGF0ZXN0IGNvZGUgY2FuIGJlIGZvdW5kIGF0IDxodHRwczovL3B5ZGlvLmNvbT4uXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9jZWxsc0NyZWF0ZUNlbGxEaWFsb2cgPSByZXF1aXJlKCcuL2NlbGxzL0NyZWF0ZUNlbGxEaWFsb2cnKTtcblxudmFyIF9jZWxsc0NyZWF0ZUNlbGxEaWFsb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VsbHNDcmVhdGVDZWxsRGlhbG9nKTtcblxudmFyIF9jZWxsc0VkaXRDZWxsRGlhbG9nID0gcmVxdWlyZSgnLi9jZWxscy9FZGl0Q2VsbERpYWxvZycpO1xuXG52YXIgX2NlbGxzRWRpdENlbGxEaWFsb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VsbHNFZGl0Q2VsbERpYWxvZyk7XG5cbnZhciBfY2VsbHNDZWxsQ2FyZCA9IHJlcXVpcmUoJy4vY2VsbHMvQ2VsbENhcmQnKTtcblxudmFyIF9jZWxsc0NlbGxDYXJkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NlbGxzQ2VsbENhcmQpO1xuXG52YXIgX2NvbXBvc2l0ZVNpbXBsZUxpbmtDYXJkID0gcmVxdWlyZSgnLi9jb21wb3NpdGUvU2ltcGxlTGlua0NhcmQnKTtcblxudmFyIF9jb21wb3NpdGVTaW1wbGVMaW5rQ2FyZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGVTaW1wbGVMaW5rQ2FyZCk7XG5cbnZhciBfbWFpbkluZm9QYW5lbCA9IHJlcXVpcmUoJy4vbWFpbi9JbmZvUGFuZWwnKTtcblxudmFyIF9tYWluSW5mb1BhbmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21haW5JbmZvUGFuZWwpO1xuXG52YXIgX2NvbXBvc2l0ZUNvbXBvc2l0ZURpYWxvZyA9IHJlcXVpcmUoJy4vY29tcG9zaXRlL0NvbXBvc2l0ZURpYWxvZycpO1xuXG52YXIgX2NvbXBvc2l0ZUNvbXBvc2l0ZURpYWxvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGVDb21wb3NpdGVEaWFsb2cpO1xuXG52YXIgX2xpbmtzTGlua01vZGVsID0gcmVxdWlyZSgnLi9saW5rcy9MaW5rTW9kZWwnKTtcblxudmFyIF9saW5rc0xpbmtNb2RlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5rc0xpbmtNb2RlbCk7XG5cbnZhciBfbWFpblNoYXJlSGVscGVyID0gcmVxdWlyZSgnLi9tYWluL1NoYXJlSGVscGVyJyk7XG5cbnZhciBfbWFpblNoYXJlSGVscGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21haW5TaGFyZUhlbHBlcik7XG5cbnZhciBfbGlzdHNTaGFyZVZpZXcgPSByZXF1aXJlKFwiLi9saXN0cy9TaGFyZVZpZXdcIik7XG5cbmV4cG9ydHMuQ3JlYXRlQ2VsbERpYWxvZyA9IF9jZWxsc0NyZWF0ZUNlbGxEaWFsb2cyWydkZWZhdWx0J107XG5leHBvcnRzLkVkaXRDZWxsRGlhbG9nID0gX2NlbGxzRWRpdENlbGxEaWFsb2cyWydkZWZhdWx0J107XG5leHBvcnRzLkNlbGxDYXJkID0gX2NlbGxzQ2VsbENhcmQyWydkZWZhdWx0J107XG5leHBvcnRzLkluZm9QYW5lbCA9IF9tYWluSW5mb1BhbmVsMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5Db21wb3NpdGVEaWFsb2cgPSBfY29tcG9zaXRlQ29tcG9zaXRlRGlhbG9nMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5MaW5rTW9kZWwgPSBfbGlua3NMaW5rTW9kZWwyWydkZWZhdWx0J107XG5leHBvcnRzLlNoYXJlSGVscGVyID0gX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXTtcbmV4cG9ydHMuU2hhcmVWaWV3TW9kYWwgPSBfbGlzdHNTaGFyZVZpZXcuU2hhcmVWaWV3TW9kYWw7XG5leHBvcnRzLlNoYXJlVmlldyA9IF9saXN0c1NoYXJlVmlldy5TaGFyZVZpZXc7XG5leHBvcnRzLlNpbXBsZUxpbmtDYXJkID0gX2NvbXBvc2l0ZVNpbXBsZUxpbmtDYXJkMlsnZGVmYXVsdCddO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgQ2hhcmxlcyBkdSBKZXUgLSBBYnN0cml1bSBTQVMgPHRlYW0gKGF0KSBweWQuaW8+XG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBQeWRpby5cbiAqXG4gKiBQeWRpbyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFB5ZGlvIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFB5ZGlvLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIFRoZSBsYXRlc3QgY29kZSBjYW4gYmUgZm91bmQgYXQgPGh0dHBzOi8vcHlkaW8uY29tPi5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9TaGFyZUNvbnRleHRDb25zdW1lciA9IHJlcXVpcmUoJy4uL1NoYXJlQ29udGV4dENvbnN1bWVyJyk7XG5cbnZhciBfU2hhcmVDb250ZXh0Q29uc3VtZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2hhcmVDb250ZXh0Q29uc3VtZXIpO1xuXG52YXIgX1RhcmdldGVkVXNlcnMgPSByZXF1aXJlKCcuL1RhcmdldGVkVXNlcnMnKTtcblxudmFyIF9UYXJnZXRlZFVzZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhcmdldGVkVXNlcnMpO1xuXG52YXIgX21hdGVyaWFsVWkgPSByZXF1aXJlKCdtYXRlcmlhbC11aScpO1xuXG52YXIgX3FyY29kZVJlYWN0ID0gcmVxdWlyZSgncXJjb2RlLnJlYWN0Jyk7XG5cbnZhciBfcXJjb2RlUmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcXJjb2RlUmVhY3QpO1xuXG52YXIgX2NsaXBib2FyZCA9IHJlcXVpcmUoJ2NsaXBib2FyZCcpO1xuXG52YXIgX2NsaXBib2FyZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGlwYm9hcmQpO1xuXG52YXIgX21haW5BY3Rpb25CdXR0b24gPSByZXF1aXJlKCcuLi9tYWluL0FjdGlvbkJ1dHRvbicpO1xuXG52YXIgX21haW5BY3Rpb25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpbkFjdGlvbkJ1dHRvbik7XG5cbnZhciBfcHlkaW9VdGlsUGF0aCA9IHJlcXVpcmUoJ3B5ZGlvL3V0aWwvcGF0aCcpO1xuXG52YXIgX3B5ZGlvVXRpbFBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW9VdGlsUGF0aCk7XG5cbnZhciBfcHlkaW9VdGlsTGFuZyA9IHJlcXVpcmUoJ3B5ZGlvL3V0aWwvbGFuZycpO1xuXG52YXIgX3B5ZGlvVXRpbExhbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW9VdGlsTGFuZyk7XG5cbnZhciBfbWF0ZXJpYWxVaVN0eWxlcyA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpL3N0eWxlcycpO1xuXG52YXIgX21haW5TaGFyZUhlbHBlciA9IHJlcXVpcmUoJy4uL21haW4vU2hhcmVIZWxwZXInKTtcblxudmFyIF9tYWluU2hhcmVIZWxwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpblNoYXJlSGVscGVyKTtcblxudmFyIF9weWRpbyA9IHJlcXVpcmUoJ3B5ZGlvJyk7XG5cbnZhciBfcHlkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW8pO1xuXG52YXIgX0xpbmtNb2RlbCA9IHJlcXVpcmUoJy4vTGlua01vZGVsJyk7XG5cbnZhciBfTGlua01vZGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmtNb2RlbCk7XG5cbnZhciBfUHlkaW8kcmVxdWlyZUxpYiA9IF9weWRpbzJbJ2RlZmF1bHQnXS5yZXF1aXJlTGliKFwiYm9vdFwiKTtcblxudmFyIFRvb2x0aXAgPSBfUHlkaW8kcmVxdWlyZUxpYi5Ub29sdGlwO1xuXG52YXIgUHVibGljTGlua0ZpZWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1B1YmxpY0xpbmtGaWVsZCcsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbGlua01vZGVsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoX0xpbmtNb2RlbDJbJ2RlZmF1bHQnXSksXG4gICAgICAgIGVkaXRBbGxvd2VkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9uQ2hhbmdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNob3dNYWlsZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7IGVkaXRMaW5rOiBmYWxzZSwgY29weU1lc3NhZ2U6ICcnLCBzaG93UVJDb2RlOiBmYWxzZSB9O1xuICAgIH0sXG4gICAgdG9nZ2xlRWRpdE1vZGU6IGZ1bmN0aW9uIHRvZ2dsZUVkaXRNb2RlKCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGxpbmtNb2RlbCA9IF9wcm9wcy5saW5rTW9kZWw7XG4gICAgICAgIHZhciBweWRpbyA9IF9wcm9wcy5weWRpbztcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lZGl0TGluayAmJiB0aGlzLnN0YXRlLmN1c3RvbUxpbmspIHtcbiAgICAgICAgICAgIHZhciBhdXRoID0gX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5nZXRBdXRob3JpemF0aW9ucyhweWRpbyk7XG4gICAgICAgICAgICBpZiAoYXV0aC5oYXNoX21pbl9sZW5ndGggJiYgdGhpcy5zdGF0ZS5jdXN0b21MaW5rLmxlbmd0aCA8IGF1dGguaGFzaF9taW5fbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcHlkaW8uVUkuZGlzcGxheU1lc3NhZ2UoJ0VSUk9SJywgdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcyMjMnKS5yZXBsYWNlKCclcycsIGF1dGguaGFzaF9taW5fbGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlua01vZGVsLnNldEN1c3RvbUxpbmsodGhpcy5zdGF0ZS5jdXN0b21MaW5rKTtcbiAgICAgICAgICAgIGxpbmtNb2RlbC5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRMaW5rOiAhdGhpcy5zdGF0ZS5lZGl0TGluaywgY3VzdG9tTGluazogdW5kZWZpbmVkIH0pO1xuICAgIH0sXG4gICAgY2hhbmdlTGluazogZnVuY3Rpb24gY2hhbmdlTGluayhldmVudCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHZhbHVlID0gX3B5ZGlvVXRpbExhbmcyWydkZWZhdWx0J10uY29tcHV0ZVN0cmluZ1NsdWcodmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tTGluazogdmFsdWUgfSk7XG4gICAgfSxcbiAgICBjbGVhckNvcHlNZXNzYWdlOiBmdW5jdGlvbiBjbGVhckNvcHlNZXNzYWdlKCkge1xuICAgICAgICBnbG9iYWwuc2V0VGltZW91dCgoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlNZXNzYWdlOiAnJyB9KTtcbiAgICAgICAgfSkuYmluZCh0aGlzKSwgNTAwMCk7XG4gICAgfSxcblxuICAgIGF0dGFjaENsaXBib2FyZDogZnVuY3Rpb24gYXR0YWNoQ2xpcGJvYXJkKCkge1xuICAgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBsaW5rTW9kZWwgPSBfcHJvcHMyLmxpbmtNb2RlbDtcbiAgICAgICAgdmFyIHB5ZGlvID0gX3Byb3BzMi5weWRpbztcblxuICAgICAgICB0aGlzLmRldGFjaENsaXBib2FyZCgpO1xuICAgICAgICBpZiAodGhpcy5yZWZzWydjb3B5LWJ1dHRvbiddKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGlwID0gbmV3IF9jbGlwYm9hcmQyWydkZWZhdWx0J10odGhpcy5yZWZzWydjb3B5LWJ1dHRvbiddLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfbWFpblNoYXJlSGVscGVyMlsnZGVmYXVsdCddLmJ1aWxkUHVibGljVXJsKHB5ZGlvLCBsaW5rTW9kZWwuZ2V0TGluaygpLkxpbmtIYXNoKTtcbiAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NsaXAub24oJ3N1Y2Nlc3MnLCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5TWVzc2FnZTogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcxOTInKSB9LCB0aGlzLmNsZWFyQ29weU1lc3NhZ2UpO1xuICAgICAgICAgICAgfSkuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLl9jbGlwLm9uKCdlcnJvcicsIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcHlNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWwubmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoXCJNYWNcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29weU1lc3NhZ2UgPSB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzE0NCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvcHlNZXNzYWdlID0gdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcxNDMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzWydwdWJsaWMtbGluay1maWVsZCddLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlNZXNzYWdlOiBjb3B5TWVzc2FnZSB9LCB0aGlzLmNsZWFyQ29weU1lc3NhZ2UpO1xuICAgICAgICAgICAgfSkuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRldGFjaENsaXBib2FyZDogZnVuY3Rpb24gZGV0YWNoQ2xpcGJvYXJkKCkge1xuICAgICAgICBpZiAodGhpcy5fY2xpcCkge1xuICAgICAgICAgICAgdGhpcy5fY2xpcC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgdGhpcy5hdHRhY2hDbGlwYm9hcmQoKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmF0dGFjaENsaXBib2FyZCgpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZGV0YWNoQ2xpcGJvYXJkKCk7XG4gICAgfSxcblxuICAgIG9wZW5NYWlsZXI6IGZ1bmN0aW9uIG9wZW5NYWlsZXIoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2hvd01haWxlcih0aGlzLnByb3BzLmxpbmtNb2RlbCk7XG4gICAgfSxcblxuICAgIHRvZ2dsZVFSQ29kZTogZnVuY3Rpb24gdG9nZ2xlUVJDb2RlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1FSQ29kZTogIXRoaXMuc3RhdGUuc2hvd1FSQ29kZSB9KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgbGlua01vZGVsID0gX3Byb3BzMy5saW5rTW9kZWw7XG4gICAgICAgIHZhciBweWRpbyA9IF9wcm9wczMucHlkaW87XG5cbiAgICAgICAgdmFyIHB1YmxpY0xpbmsgPSBfbWFpblNoYXJlSGVscGVyMlsnZGVmYXVsdCddLmJ1aWxkUHVibGljVXJsKHB5ZGlvLCBsaW5rTW9kZWwuZ2V0TGluaygpLkxpbmtIYXNoKTtcbiAgICAgICAgdmFyIGF1dGggPSBfbWFpblNoYXJlSGVscGVyMlsnZGVmYXVsdCddLmdldEF1dGhvcml6YXRpb25zKHB5ZGlvKTtcbiAgICAgICAgdmFyIGVkaXRBbGxvd2VkID0gdGhpcy5wcm9wcy5lZGl0QWxsb3dlZCAmJiBhdXRoLmVkaXRhYmxlX2hhc2ggJiYgIXRoaXMucHJvcHMuaXNSZWFkb25seSgpICYmIGxpbmtNb2RlbC5pc0VkaXRhYmxlKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRMaW5rICYmIGVkaXRBbGxvd2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScsIHBhZGRpbmc6ICcwIDZweCcsIG1hcmdpbjogJzAgLTZweCcsIGJvcmRlclJhZGl1czogMiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBmb250U2l6ZTogMTYsIGNvbG9yOiAncmdiYSgwLDAsMCwwLjQpJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1heFdpZHRoOiAxNjAsIHdoaXRlU3BhY2U6ICdub3dyYXAnLCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHlkaW9VdGlsUGF0aDJbJ2RlZmF1bHQnXS5nZXREaXJuYW1lKHB1YmxpY0xpbmspICsgJy8gJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5UZXh0RmllbGQsIHsgc3R5bGU6IHsgZmxleDogMSwgbWFyZ2luUmlnaHQ6IDEwLCBtYXJnaW5MZWZ0OiAxMCB9LCBvbkNoYW5nZTogdGhpcy5jaGFuZ2VMaW5rLCB2YWx1ZTogdGhpcy5zdGF0ZS5jdXN0b21MaW5rICE9PSB1bmRlZmluZWQgPyB0aGlzLnN0YXRlLmN1c3RvbUxpbmsgOiBsaW5rTW9kZWwuZ2V0TGluaygpLkxpbmtIYXNoIH0pLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWFpbkFjdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSwgeyBtZGlJY29uOiAnY2hlY2snLCBjYWxsYmFjazogdGhpcy50b2dnbGVFZGl0TW9kZSB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAxMywgY29sb3I6ICdyZ2JhKDAsMCwwLDAuNDMpJywgcGFkZGluZ1RvcDogMTYgfSB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzE5NCcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgdmFyIGNvcHlNZXNzYWdlID0gX3N0YXRlLmNvcHlNZXNzYWdlO1xuICAgICAgICAgICAgdmFyIGxpbmtUb29sdGlwID0gX3N0YXRlLmxpbmtUb29sdGlwO1xuXG4gICAgICAgICAgICB2YXIgc2V0SHRtbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgX19odG1sOiB0aGlzLnN0YXRlLmNvcHlNZXNzYWdlIH07XG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGFjdGlvbkxpbmtzID0gW10sXG4gICAgICAgICAgICAgICAgcXJDb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG11aVRoZW1lID0gdGhpcy5wcm9wcy5tdWlUaGVtZTtcblxuICAgICAgICAgICAgYWN0aW9uTGlua3MucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjb3B5XCIsXG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ2NvcHktYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgcG9zaXRpb246ICdyZWxhdGl2ZScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogMzYsIGhlaWdodDogMzYsIHBhZGRpbmc6ICc4cHggMTBweCcsIG1hcmdpbjogJzAgNnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGJvcmRlclJhZGl1czogJzUwJScsIGJvcmRlcjogJzFweCBzb2xpZCAnICsgbXVpVGhlbWUucGFsZXR0ZS5wcmltYXJ5MUNvbG9yIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxpbmtUb29sdGlwOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxpbmtUb29sdGlwOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogY29weU1lc3NhZ2UgPyBjb3B5TWVzc2FnZSA6IHRoaXMucHJvcHMuZ2V0TWVzc2FnZSgnMTkxJyksXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxQb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogbGlua1Rvb2x0aXBcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnY29weS1saW5rLWJ1dHRvbiBtZGkgbWRpLWNvbnRlbnQtY29weScsIHN0eWxlOiB7IGNvbG9yOiBtdWlUaGVtZS5wYWxldHRlLnByaW1hcnkxQ29sb3IgfSB9KVxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNob3dNYWlsZXIpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25MaW5rcy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYWluQWN0aW9uQnV0dG9uMlsnZGVmYXVsdCddLCB7IGtleTogJ291dGxpbmUnLCBjYWxsYmFjazogdGhpcy5vcGVuTWFpbGVyLCBtZGlJY29uOiAnZW1haWwtb3V0bGluZScsIG1lc3NhZ2VJZDogJzQ1JyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWRpdEFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25MaW5rcy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYWluQWN0aW9uQnV0dG9uMlsnZGVmYXVsdCddLCB7IGtleTogJ3BlbmNpbCcsIGNhbGxiYWNrOiB0aGlzLnRvZ2dsZUVkaXRNb2RlLCBtZGlJY29uOiAncGVuY2lsJywgbWVzc2FnZUlkOiBcIjE5M1wiIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfbWFpblNoYXJlSGVscGVyMlsnZGVmYXVsdCddLnFyY29kZUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbkxpbmtzLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21haW5BY3Rpb25CdXR0b24yWydkZWZhdWx0J10sIHsga2V5OiAncXJjb2RlJywgY2FsbGJhY2s6IHRoaXMudG9nZ2xlUVJDb2RlLCBtZGlJY29uOiAncXJjb2RlJywgbWVzc2FnZUlkOiAnOTQnIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25MaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25MaW5rcyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbjogJzIwcHggMCAxMHB4JyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBzdHlsZTogeyBmbGV4OiAxIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkxpbmtzLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgc3R5bGU6IHsgZmxleDogMSB9IH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uTGlua3MgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd1FSQ29kZSkge1xuICAgICAgICAgICAgICAgIHFyQ29kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBfbWF0ZXJpYWxVaS5QYXBlcixcbiAgICAgICAgICAgICAgICAgICAgeyB6RGVwdGg6IDEsIHN0eWxlOiB7IHdpZHRoOiAxMjAsIHBhZGRpbmdUb3A6IDEwLCBvdmVyZmxvdzogJ2hpZGRlbicsIG1hcmdpbjogJzAgYXV0bycsIGhlaWdodDogMTIwLCB0ZXh0QWxpZ246ICdjZW50ZXInIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX3FyY29kZVJlYWN0MlsnZGVmYXVsdCddLCB7IHNpemU6IDEwMCwgdmFsdWU6IHB1YmxpY0xpbmssIGxldmVsOiAnUScgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxckNvZGUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5QYXBlciwgeyB6RGVwdGg6IDAsIHN0eWxlOiB7IHdpZHRoOiAxMjAsIG92ZXJmbG93OiAnaGlkZGVuJywgbWFyZ2luOiAnMCBhdXRvJywgaGVpZ2h0OiAwLCB0ZXh0QWxpZ246ICdjZW50ZXInIH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgX21hdGVyaWFsVWkuUGFwZXIsXG4gICAgICAgICAgICAgICAgeyB6RGVwdGg6IDAsIHJvdW5kZWQ6IGZhbHNlLCBjbGFzc05hbWU6ICdwdWJsaWMtbGluay1jb250YWluZXInIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfSB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5UZXh0RmllbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdMaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ3B1YmxpYy1saW5rLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwdWJsaWNMaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1czogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IDQwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLCBib3JkZXJSYWRpdXM6IDIsIHBhZGRpbmc6ICcwIDVweCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVN0eWxlOiB7IGJvcmRlckNvbG9yOiAnI2Y1ZjVmNScsIHRleHREZWNvcmF0aW9uOiBsaW5rTW9kZWwuaXNFeHBpcmVkKCkgPyAnbGluZS10aHJvdWdoJyA6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZUZvY3VzU3R5bGU6IHsgYm90dG9tOiAwIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGZhbHNlICYmIHRoaXMucHJvcHMubGlua0RhdGEudGFyZ2V0X3VzZXJzICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9UYXJnZXRlZFVzZXJzMlsnZGVmYXVsdCddLCB0aGlzLnByb3BzKSxcbiAgICAgICAgICAgICAgICBhY3Rpb25MaW5rcyxcbiAgICAgICAgICAgICAgICBxckNvZGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUHVibGljTGlua0ZpZWxkID0gKDAsIF9tYXRlcmlhbFVpU3R5bGVzLm11aVRoZW1lYWJsZSkoKShQdWJsaWNMaW5rRmllbGQpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gUHVibGljTGlua0ZpZWxkID0gKDAsIF9TaGFyZUNvbnRleHRDb25zdW1lcjJbJ2RlZmF1bHQnXSkoUHVibGljTGlua0ZpZWxkKTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFB1YmxpY0xpbmtGaWVsZDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgQ2hhcmxlcyBkdSBKZXUgLSBBYnN0cml1bSBTQVMgPHRlYW0gKGF0KSBweWQuaW8+XG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBQeWRpby5cbiAqXG4gKiBQeWRpbyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFB5ZGlvIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFB5ZGlvLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIFRoZSBsYXRlc3QgY29kZSBjYW4gYmUgZm91bmQgYXQgPGh0dHBzOi8vcHlkaW8uY29tPi5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9weWRpbyA9IHJlcXVpcmUoJ3B5ZGlvJyk7XG5cbnZhciBfcHlkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW8pO1xuXG52YXIgX0xpbmtNb2RlbCA9IHJlcXVpcmUoJy4vTGlua01vZGVsJyk7XG5cbnZhciBfTGlua01vZGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmtNb2RlbCk7XG5cbnZhciBfUHlkaW8kcmVxdWlyZUxpYiA9IF9weWRpbzJbJ2RlZmF1bHQnXS5yZXF1aXJlTGliKCdob2MnKTtcblxudmFyIE1vZGVyblRleHRGaWVsZCA9IF9QeWRpbyRyZXF1aXJlTGliLk1vZGVyblRleHRGaWVsZDtcblxudmFyIExhYmVsUGFuZWwgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTGFiZWxQYW5lbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBMYWJlbFBhbmVsKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGFiZWxQYW5lbCk7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGFiZWxQYW5lbC5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMYWJlbFBhbmVsLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMucHlkaW87XG4gICAgICAgICAgICB2YXIgbGlua01vZGVsID0gX3Byb3BzLmxpbmtNb2RlbDtcblxuICAgICAgICAgICAgdmFyIG0gPSBmdW5jdGlvbiBtKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB5ZGlvLk1lc3NhZ2VIYXNoWydzaGFyZV9jZW50ZXIuJyArIGlkXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbGluayA9IGxpbmtNb2RlbC5nZXRMaW5rKCk7XG4gICAgICAgICAgICB2YXIgdXBkYXRlTGFiZWwgPSBmdW5jdGlvbiB1cGRhdGVMYWJlbChlLCB2KSB7XG4gICAgICAgICAgICAgICAgbGluay5MYWJlbCA9IHY7XG4gICAgICAgICAgICAgICAgbGlua01vZGVsLnVwZGF0ZUxpbmsobGluayk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgdXBkYXRlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiB1cGRhdGVEZXNjcmlwdGlvbihlLCB2KSB7XG4gICAgICAgICAgICAgICAgbGluay5EZXNjcmlwdGlvbiA9IHY7XG4gICAgICAgICAgICAgICAgbGlua01vZGVsLnVwZGF0ZUxpbmsobGluayk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChNb2Rlcm5UZXh0RmllbGQsIHsgZmxvYXRpbmdMYWJlbFRleHQ6IG0oMjY1KSwgdmFsdWU6IGxpbmsuTGFiZWwsIG9uQ2hhbmdlOiB1cGRhdGVMYWJlbCwgZnVsbFdpZHRoOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KE1vZGVyblRleHRGaWVsZCwgeyBmbG9hdGluZ0xhYmVsVGV4dDogbSgyNjYpLCB2YWx1ZTogbGluay5EZXNjcmlwdGlvbiwgb25DaGFuZ2U6IHVwZGF0ZURlc2NyaXB0aW9uLCBmdWxsV2lkdGg6IHRydWUgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTGFiZWxQYW5lbDtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5MYWJlbFBhbmVsLlByb3BUeXBlcyA9IHtcblxuICAgIHB5ZGlvOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoX3B5ZGlvMlsnZGVmYXVsdCddKSxcbiAgICBsaW5rTW9kZWw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfTGlua01vZGVsMlsnZGVmYXVsdCddKVxuXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMYWJlbFBhbmVsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDctMjAxNyBDaGFybGVzIGR1IEpldSAtIEFic3RyaXVtIFNBUyA8dGVhbSAoYXQpIHB5ZC5pbz5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFB5ZGlvLlxuICpcbiAqIFB5ZGlvIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogUHlkaW8gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggUHlkaW8uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVGhlIGxhdGVzdCBjb2RlIGNhbiBiZSBmb3VuZCBhdCA8aHR0cHM6Ly9weWRpby5jb20+LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3B5ZGlvSHR0cEFwaSA9IHJlcXVpcmUoJ3B5ZGlvL2h0dHAvYXBpJyk7XG5cbnZhciBfcHlkaW9IdHRwQXBpMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvSHR0cEFwaSk7XG5cbnZhciBfcHlkaW9MYW5nT2JzZXJ2YWJsZSA9IHJlcXVpcmUoJ3B5ZGlvL2xhbmcvb2JzZXJ2YWJsZScpO1xuXG52YXIgX3B5ZGlvTGFuZ09ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW9MYW5nT2JzZXJ2YWJsZSk7XG5cbnZhciBfbWFpblNoYXJlSGVscGVyID0gcmVxdWlyZSgnLi4vbWFpbi9TaGFyZUhlbHBlcicpO1xuXG52YXIgX21haW5TaGFyZUhlbHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWluU2hhcmVIZWxwZXIpO1xuXG52YXIgX3B5ZGlvSHR0cFJlc3RBcGkgPSByZXF1aXJlKCdweWRpby9odHRwL3Jlc3QtYXBpJyk7XG5cbnZhciBfcHlkaW9VdGlsUGFzcyA9IHJlcXVpcmUoJ3B5ZGlvL3V0aWwvcGFzcycpO1xuXG52YXIgX3B5ZGlvVXRpbFBhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW9VdGlsUGFzcyk7XG5cbnZhciBMaW5rTW9kZWwgPSAoZnVuY3Rpb24gKF9PYnNlcnZhYmxlKSB7XG4gICAgX2luaGVyaXRzKExpbmtNb2RlbCwgX09ic2VydmFibGUpO1xuXG4gICAgZnVuY3Rpb24gTGlua01vZGVsKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlua01vZGVsKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihMaW5rTW9kZWwucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5saW5rID0gbmV3IF9weWRpb0h0dHBSZXN0QXBpLlJlc3RTaGFyZUxpbmsoKTtcbiAgICAgICAgdGhpcy5saW5rLlBlcm1pc3Npb25zID0gW19weWRpb0h0dHBSZXN0QXBpLlJlc3RTaGFyZUxpbmtBY2Nlc3NUeXBlLmNvbnN0cnVjdEZyb21PYmplY3QoXCJQcmV2aWV3XCIpLCBfcHlkaW9IdHRwUmVzdEFwaS5SZXN0U2hhcmVMaW5rQWNjZXNzVHlwZS5jb25zdHJ1Y3RGcm9tT2JqZWN0KFwiRG93bmxvYWRcIildO1xuICAgICAgICB0aGlzLmxpbmsuUG9saWNpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5saW5rLlBvbGljaWVzQ29udGV4dEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saW5rLlJvb3ROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLlZhbGlkUGFzc3dvcmQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRFcnJvciA9IG51bGw7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExpbmtNb2RlbCwgW3tcbiAgICAgICAga2V5OiAnaGFzRXJyb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzRXJyb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkRXJyb3I7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzRWRpdGFibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNFZGl0YWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmsuUG9saWNpZXNDb250ZXh0RWRpdGFibGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzRGlydHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNEaXJ0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcnR5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRMaW5rVXVpZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMaW5rVXVpZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmsuVXVpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtSZXN0U2hhcmVMaW5rfVxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldExpbmsnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGluaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbms7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFB1YmxpY1VybCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQdWJsaWNVcmwoKSB7XG4gICAgICAgICAgICByZXR1cm4gX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5idWlsZFB1YmxpY1VybChweWRpbywgdGhpcy5saW5rLkxpbmtIYXNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gbGluayB7UmVzdFNoYXJlTGlua31cbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1cGRhdGVMaW5rJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICAgICAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RGlydHkoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm90aWZ5RGlydHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbm90aWZ5RGlydHkoKSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCd1cGRhdGUnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmV2ZXJ0Q2hhbmdlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXZlcnRDaGFuZ2VzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxMaW5rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5rID0gdGhpcy5jbG9uZSh0aGlzLm9yaWdpbmFsTGluayk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFzc3dvcmQgPSB0aGlzLmNyZWF0ZVBhc3N3b3JkID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLlZhbGlkUGFzc3dvcmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5KCd1cGRhdGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzUGVybWlzc2lvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25WYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGluay5QZXJtaXNzaW9ucy5maWx0ZXIoZnVuY3Rpb24gKHBlcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVybSA9PT0gcGVybWlzc2lvblZhbHVlO1xuICAgICAgICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNFeHBpcmVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbmsuTWF4RG93bmxvYWRzICYmIHBhcnNlSW50KHRoaXMubGluay5DdXJyZW50RG93bmxvYWRzKSA+PSBwYXJzZUludCh0aGlzLmxpbmsuTWF4RG93bmxvYWRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGluay5BY2Nlc3NFbmQpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHV1aWQgc3RyaW5nXG4gICAgICAgICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3RTaGFyZUxpbms+fVxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1dWlkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgYXBpID0gbmV3IF9weWRpb0h0dHBSZXN0QXBpLlNoYXJlU2VydmljZUFwaShfcHlkaW9IdHRwQXBpMlsnZGVmYXVsdCddLmdldFJlc3RDbGllbnQoKSk7XG4gICAgICAgICAgICByZXR1cm4gYXBpLmdldFNoYXJlTGluayh1dWlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5saW5rID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMubGluay5QZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5saW5rLlBlcm1pc3Npb25zID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMubGluay5Qb2xpY2llcykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5saW5rLlBvbGljaWVzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMubGluay5Sb290Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGluay5Sb290Tm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMub3JpZ2luYWxMaW5rID0gX3RoaXMuY2xvbmUoX3RoaXMubGluayk7XG4gICAgICAgICAgICAgICAgX3RoaXMubm90aWZ5KFwidXBkYXRlXCIpO1xuICAgICAgICAgICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWRFcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICBfdGhpcy5ub3RpZnkoXCJ1cGRhdGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0Q3JlYXRlUGFzc3dvcmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q3JlYXRlUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBfcHlkaW9VdGlsUGFzczJbJ2RlZmF1bHQnXS5jaGVja1Bhc3N3b3JkU3RyZW5ndGgocGFzc3dvcmQsIGZ1bmN0aW9uIChvaywgbXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5WYWxpZFBhc3N3b3JkID0gb2s7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5WYWxpZFBhc3N3b3JkTWVzc2FnZSA9IG1zZztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5WYWxpZFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgICAgICAgIHRoaXMubGluay5QYXNzd29yZFJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RGlydHkoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0VXBkYXRlUGFzc3dvcmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VXBkYXRlUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBfcHlkaW9VdGlsUGFzczJbJ2RlZmF1bHQnXS5jaGVja1Bhc3N3b3JkU3RyZW5ndGgocGFzc3dvcmQsIGZ1bmN0aW9uIChvaywgbXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5WYWxpZFBhc3N3b3JkID0gb2s7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5WYWxpZFBhc3N3b3JkTWVzc2FnZSA9IG1zZztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5WYWxpZFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RGlydHkoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0Q3VzdG9tTGluaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDdXN0b21MaW5rKG5ld0xpbmspIHtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTGluayA9IG5ld0xpbms7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7KnxQcm9taXNlLjxSZXN0U2hhcmVMaW5rPn1cbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCF0aGlzLlZhbGlkUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5WYWxpZFBhc3N3b3JkTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYXBpID0gbmV3IF9weWRpb0h0dHBSZXN0QXBpLlNoYXJlU2VydmljZUFwaShfcHlkaW9IdHRwQXBpMlsnZGVmYXVsdCddLmdldFJlc3RDbGllbnQoKSk7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBfcHlkaW9IdHRwUmVzdEFwaS5SZXN0UHV0U2hhcmVMaW5rUmVxdWVzdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3JlYXRlUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlBhc3N3b3JkRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5DcmVhdGVQYXNzd29yZCA9IHRoaXMuY3JlYXRlUGFzc3dvcmQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXBkYXRlUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlBhc3N3b3JkRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxpbmsuUGFzc3dvcmRSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LkNyZWF0ZVBhc3N3b3JkID0gdGhpcy51cGRhdGVQYXNzd29yZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LlVwZGF0ZVBhc3N3b3JkID0gdGhpcy51cGRhdGVQYXNzd29yZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QuUGFzc3dvcmRFbmFibGVkID0gdGhpcy5saW5rLlBhc3N3b3JkUmVxdWlyZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5nZXRBdXRob3JpemF0aW9ucyhweWRpbykucGFzc3dvcmRfbWFuZGF0b3J5ICYmICFyZXF1ZXN0LlBhc3N3b3JkRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBkaXNhYmxlIHBhc3Nvd3JkIG9uIHRoaXMgbGluaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tTGluayAmJiB0aGlzLmN1c3RvbUxpbmsgIT09IHRoaXMubGluay5MaW5rSGFzaCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QuVXBkYXRlQ3VzdG9tSGFzaCA9IHRoaXMuY3VzdG9tTGluaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3QuU2hhcmVMaW5rID0gdGhpcy5saW5rO1xuICAgICAgICAgICAgcmV0dXJuIGFwaS5wdXRTaGFyZUxpbmsocmVxdWVzdCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmxpbmsgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXM0Lm9yaWdpbmFsTGluayA9IF90aGlzNC5jbG9uZShfdGhpczQubGluayk7XG4gICAgICAgICAgICAgICAgX3RoaXM0LnVwZGF0ZVBhc3N3b3JkID0gX3RoaXM0LmNyZWF0ZVBhc3N3b3JkID0gX3RoaXM0LmN1c3RvbUxpbmsgPSBudWxsO1xuICAgICAgICAgICAgICAgIF90aGlzNC5WYWxpZFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpczQubm90aWZ5KCd1cGRhdGUnKTtcbiAgICAgICAgICAgICAgICBfdGhpczQubm90aWZ5KCdzYXZlJyk7XG4gICAgICAgICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IGVyci5EZXRhaWwgfHwgZXJyLm1lc3NhZ2UgfHwgZXJyO1xuICAgICAgICAgICAgICAgIFB5ZGlvLmdldEluc3RhbmNlKCkuVUkuZGlzcGxheU1lc3NhZ2UoJ0VSUk9SJywgbXNnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4geyp8UHJvbWlzZS48UmVzdFNoYXJlTGluaz59XG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVsZXRlTGluaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVMaW5rKGVtcHR5TGluaykge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBhcGkgPSBuZXcgX3B5ZGlvSHR0cFJlc3RBcGkuU2hhcmVTZXJ2aWNlQXBpKF9weWRpb0h0dHBBcGkyWydkZWZhdWx0J10uZ2V0UmVzdENsaWVudCgpKTtcbiAgICAgICAgICAgIHJldHVybiBhcGkuZGVsZXRlU2hhcmVMaW5rKHRoaXMubGluay5VdWlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczUubGluayA9IGVtcHR5TGluaztcbiAgICAgICAgICAgICAgICBfdGhpczUuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpczUudXBkYXRlUGFzc3dvcmQgPSBfdGhpczUuY3JlYXRlUGFzc3dvcmQgPSBfdGhpczUuY3VzdG9tTGluayA9IG51bGw7XG4gICAgICAgICAgICAgICAgX3RoaXM1Lm5vdGlmeSgndXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgX3RoaXM1Lm5vdGlmeSgnZGVsZXRlJyk7XG4gICAgICAgICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IGVyci5EZXRhaWwgfHwgZXJyLm1lc3NhZ2UgfHwgZXJyO1xuICAgICAgICAgICAgICAgIHB5ZGlvLlVJLmRpc3BsYXlNZXNzYWdlKCdFUlJPUicsIG1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gbGluayB7UmVzdFNoYXJlTGlua31cbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbG9uZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZShsaW5rKSB7XG4gICAgICAgICAgICByZXR1cm4gX3B5ZGlvSHR0cFJlc3RBcGkuUmVzdFNoYXJlTGluay5jb25zdHJ1Y3RGcm9tT2JqZWN0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobGluaykpKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMaW5rTW9kZWw7XG59KShfcHlkaW9MYW5nT2JzZXJ2YWJsZTJbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpbmtNb2RlbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9TaGFyZUNvbnRleHRDb25zdW1lciA9IHJlcXVpcmUoJy4uL1NoYXJlQ29udGV4dENvbnN1bWVyJyk7XG5cbnZhciBfU2hhcmVDb250ZXh0Q29uc3VtZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2hhcmVDb250ZXh0Q29uc3VtZXIpO1xuXG52YXIgX0ZpZWxkID0gcmVxdWlyZSgnLi9GaWVsZCcpO1xuXG52YXIgX0ZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZpZWxkKTtcblxudmFyIF9QZXJtaXNzaW9ucyA9IHJlcXVpcmUoJy4vUGVybWlzc2lvbnMnKTtcblxudmFyIF9QZXJtaXNzaW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QZXJtaXNzaW9ucyk7XG5cbnZhciBfVGFyZ2V0ZWRVc2VycyA9IHJlcXVpcmUoJy4vVGFyZ2V0ZWRVc2VycycpO1xuXG52YXIgX1RhcmdldGVkVXNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFyZ2V0ZWRVc2Vycyk7XG5cbnZhciBfbWF0ZXJpYWxVaSA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpJyk7XG5cbnZhciBfTGlua01vZGVsID0gcmVxdWlyZSgnLi9MaW5rTW9kZWwnKTtcblxudmFyIF9MaW5rTW9kZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlua01vZGVsKTtcblxudmFyIF9jb21wb3NpdGVDb21wb3NpdGVNb2RlbCA9IHJlcXVpcmUoJy4uL2NvbXBvc2l0ZS9Db21wb3NpdGVNb2RlbCcpO1xuXG52YXIgX2NvbXBvc2l0ZUNvbXBvc2l0ZU1vZGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZUNvbXBvc2l0ZU1vZGVsKTtcblxudmFyIF9weWRpbyA9IHJlcXVpcmUoJ3B5ZGlvJyk7XG5cbnZhciBfcHlkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW8pO1xuXG52YXIgX21haW5TaGFyZUhlbHBlciA9IHJlcXVpcmUoJy4uL21haW4vU2hhcmVIZWxwZXInKTtcblxudmFyIF9tYWluU2hhcmVIZWxwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpblNoYXJlSGVscGVyKTtcblxudmFyIF9QeWRpbyRyZXF1aXJlTGliID0gX3B5ZGlvMlsnZGVmYXVsdCddLnJlcXVpcmVMaWIoJ2Zvcm0nKTtcblxudmFyIFZhbGlkUGFzc3dvcmQgPSBfUHlkaW8kcmVxdWlyZUxpYi5WYWxpZFBhc3N3b3JkO1xuXG52YXIgUHVibGljTGlua1BhbmVsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1B1YmxpY0xpbmtQYW5lbCcsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbGlua01vZGVsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoX0xpbmtNb2RlbDJbJ2RlZmF1bHQnXSksXG4gICAgICAgIGNvbXBvc2l0ZU1vZGVsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoX2NvbXBvc2l0ZUNvbXBvc2l0ZU1vZGVsMlsnZGVmYXVsdCddKSxcbiAgICAgICAgcHlkaW86IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfcHlkaW8yWydkZWZhdWx0J10pLFxuICAgICAgICBhdXRob3JpemF0aW9uczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHNob3dNYWlsZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICAgIH0sXG5cbiAgICB0b2dnbGVMaW5rOiBmdW5jdGlvbiB0b2dnbGVMaW5rKCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGxpbmtNb2RlbCA9IF9wcm9wcy5saW5rTW9kZWw7XG4gICAgICAgIHZhciBweWRpbyA9IF9wcm9wcy5weWRpbztcbiAgICAgICAgdmFyIHNob3dUZW1wb3JhcnlQYXNzd29yZCA9IHRoaXMuc3RhdGUuc2hvd1RlbXBvcmFyeVBhc3N3b3JkO1xuXG4gICAgICAgIGlmIChzaG93VGVtcG9yYXJ5UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VGVtcG9yYXJ5UGFzc3dvcmQ6IGZhbHNlLCB0ZW1wb3JhcnlQYXNzd29yZDogbnVsbCB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghbGlua01vZGVsLmdldExpbmtVdWlkKCkgJiYgX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5nZXRBdXRob3JpemF0aW9ucyhweWRpbykucGFzc3dvcmRfbWFuZGF0b3J5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1RlbXBvcmFyeVBhc3N3b3JkOiB0cnVlLCB0ZW1wb3JhcnlQYXNzd29yZDogJycgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobGlua01vZGVsLmdldExpbmtVdWlkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbXBvc2l0ZU1vZGVsLmRlbGV0ZUxpbmsobGlua01vZGVsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlua01vZGVsLnNhdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHsgc2hvd1RlbXBvcmFyeVBhc3N3b3JkOiBmYWxzZSwgdGVtcG9yYXJ5UGFzc3dvcmQ6IG51bGwsIGRpc2FibGVkOiBmYWxzZSB9O1xuICAgIH0sXG5cbiAgICB1cGRhdGVUZW1wb3JhcnlQYXNzd29yZDogZnVuY3Rpb24gdXBkYXRlVGVtcG9yYXJ5UGFzc3dvcmQodmFsdWUsIGV2ZW50KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGVtcG9yYXJ5UGFzc3dvcmQ6IHZhbHVlIH0pO1xuICAgIH0sXG5cbiAgICBlbmFibGVMaW5rV2l0aFBhc3N3b3JkOiBmdW5jdGlvbiBlbmFibGVMaW5rV2l0aFBhc3N3b3JkKCkge1xuICAgICAgICB2YXIgbGlua01vZGVsID0gdGhpcy5wcm9wcy5saW5rTW9kZWw7XG5cbiAgICAgICAgaWYgKCF0aGlzLnJlZnNbJ3ZhbGlkLXBhc3MnXS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHlkaW8uVUkuZGlzcGxheU1lc3NhZ2UoJ0VSUk9SJywgJ0ludmFsaWQgUGFzc3dvcmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsaW5rTW9kZWwuc2V0Q3JlYXRlUGFzc3dvcmQodGhpcy5zdGF0ZS50ZW1wb3JhcnlQYXNzd29yZCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsaW5rTW9kZWwuc2F2ZSgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnB5ZGlvLlVJLmRpc3BsYXlNZXNzYWdlKCdFUlJPUicsIGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUZW1wb3JhcnlQYXNzd29yZDogZmFsc2UsIHRlbXBvcmFyeVBhc3N3b3JkOiBudWxsIH0pO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgbGlua01vZGVsID0gX3Byb3BzMi5saW5rTW9kZWw7XG4gICAgICAgIHZhciBweWRpbyA9IF9wcm9wczIucHlkaW87XG4gICAgICAgIHZhciBjb21wb3NpdGVNb2RlbCA9IF9wcm9wczIuY29tcG9zaXRlTW9kZWw7XG5cbiAgICAgICAgdmFyIGF1dGhvcml6YXRpb25zID0gX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5nZXRBdXRob3JpemF0aW9ucyhweWRpbyk7XG4gICAgICAgIHZhciBub2RlTGVhZiA9IGNvbXBvc2l0ZU1vZGVsLmdldE5vZGUoKS5pc0xlYWYoKTtcbiAgICAgICAgdmFyIGNhbkVuYWJsZSA9IG5vZGVMZWFmICYmIGF1dGhvcml6YXRpb25zLmZpbGVfcHVibGljX2xpbmsgfHwgIW5vZGVMZWFmICYmIGF1dGhvcml6YXRpb25zLmZvbGRlcl9wdWJsaWNfbGluaztcblxuICAgICAgICB2YXIgcHVibGljTGlua1BhbmVzID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgcHVibGljTGlua0ZpZWxkID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAobGlua01vZGVsLmdldExpbmtVdWlkKCkpIHtcbiAgICAgICAgICAgIHB1YmxpY0xpbmtGaWVsZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9GaWVsZDJbJ2RlZmF1bHQnXSwge1xuICAgICAgICAgICAgICAgIHB5ZGlvOiBweWRpbyxcbiAgICAgICAgICAgICAgICBsaW5rTW9kZWw6IGxpbmtNb2RlbCxcbiAgICAgICAgICAgICAgICBzaG93TWFpbGVyOiB0aGlzLnByb3BzLnNob3dNYWlsZXIsXG4gICAgICAgICAgICAgICAgZWRpdEFsbG93ZWQ6IGF1dGhvcml6YXRpb25zLmVkaXRhYmxlX2hhc2ggJiYgbGlua01vZGVsLmlzRWRpdGFibGUoKSxcbiAgICAgICAgICAgICAgICBrZXk6ICdwdWJsaWMtbGluaydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHVibGljTGlua1BhbmVzID0gW19yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkRpdmlkZXIsIG51bGwpLCBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfUGVybWlzc2lvbnMyWydkZWZhdWx0J10sIHtcbiAgICAgICAgICAgICAgICBjb21wb3NpdGVNb2RlbDogY29tcG9zaXRlTW9kZWwsXG4gICAgICAgICAgICAgICAgbGlua01vZGVsOiBsaW5rTW9kZWwsXG4gICAgICAgICAgICAgICAgcHlkaW86IHB5ZGlvLFxuICAgICAgICAgICAgICAgIGtleTogJ3B1YmxpYy1wZXJtJ1xuICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgaWYgKGxpbmtNb2RlbC5nZXRMaW5rKCkuVGFyZ2V0VXNlcnMpIHtcbiAgICAgICAgICAgICAgICBwdWJsaWNMaW5rUGFuZXMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5EaXZpZGVyLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgcHVibGljTGlua1BhbmVzLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX1RhcmdldGVkVXNlcnMyWydkZWZhdWx0J10sIHsgbGlua01vZGVsOiBsaW5rTW9kZWwsIHB5ZGlvOiBweWRpbyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zaG93VGVtcG9yYXJ5UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHB1YmxpY0xpbmtGaWVsZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3NlY3Rpb24tbGVnZW5kJywgc3R5bGU6IHsgbWFyZ2luVG9wOiAyMCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TWVzc2FnZSgnMjE1JylcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyB3aWR0aDogJzEwMCUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoVmFsaWRQYXNzd29yZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyBsYWJlbDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcyMycpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS50ZW1wb3JhcnlQYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnVwZGF0ZVRlbXBvcmFyeVBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInZhbGlkLXBhc3NcIlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogMjAgfSB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5SYWlzZWRCdXR0b24sIHsgbGFiZWw6IHRoaXMucHJvcHMuZ2V0TWVzc2FnZSgnOTInKSwgc2Vjb25kYXJ5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5lbmFibGVMaW5rV2l0aFBhc3N3b3JkIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICghY2FuRW5hYmxlKSB7XG4gICAgICAgICAgICBwdWJsaWNMaW5rRmllbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogJ3JnYmEoMCwwLDAsMC40MyknLCBwYWRkaW5nQm90dG9tOiAxNiwgcGFkZGluZ1RvcDogMTYgfSB9LFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TWVzc2FnZShub2RlTGVhZiA/ICcyMjUnIDogJzIyNicpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVibGljTGlua0ZpZWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6ICdyZ2JhKDAsMCwwLDAuNDMpJywgcGFkZGluZ0JvdHRvbTogMTYsIHBhZGRpbmdUb3A6IDE2IH0gfSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzE5MCcpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSB9LFxuICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBwYWRkaW5nOiAnMTVweCAxMHB4IDExcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlMGUwZTAnLCBmb250U2l6ZTogMTUgfSB9LFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLlRvZ2dsZSwge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5pc1JlYWRvbmx5KCkgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlZCB8fCAhbGlua01vZGVsLmlzRWRpdGFibGUoKSB8fCAhbGlua01vZGVsLmdldExpbmtVdWlkKCkgJiYgIWNhbkVuYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU6IHRoaXMudG9nZ2xlTGluayxcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlZDogbGlua01vZGVsLmdldExpbmtVdWlkKCkgfHwgdGhpcy5zdGF0ZS5zaG93VGVtcG9yYXJ5UGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzE4OScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHBhZGRpbmc6IDIwIH0gfSxcbiAgICAgICAgICAgICAgICBwdWJsaWNMaW5rRmllbGRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBwdWJsaWNMaW5rUGFuZXNcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUHVibGljTGlua1BhbmVsID0gKDAsIF9TaGFyZUNvbnRleHRDb25zdW1lcjJbJ2RlZmF1bHQnXSkoUHVibGljTGlua1BhbmVsKTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFB1YmxpY0xpbmtQYW5lbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgQ2hhcmxlcyBkdSBKZXUgLSBBYnN0cml1bSBTQVMgPHRlYW0gKGF0KSBweWQuaW8+XG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBQeWRpby5cbiAqXG4gKiBQeWRpbyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFB5ZGlvIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFB5ZGlvLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIFRoZSBsYXRlc3QgY29kZSBjYW4gYmUgZm91bmQgYXQgPGh0dHBzOi8vcHlkaW8uY29tPi5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9weWRpbyA9IHJlcXVpcmUoJ3B5ZGlvJyk7XG5cbnZhciBfcHlkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW8pO1xuXG52YXIgX1NoYXJlQ29udGV4dENvbnN1bWVyID0gcmVxdWlyZSgnLi4vU2hhcmVDb250ZXh0Q29uc3VtZXInKTtcblxudmFyIF9TaGFyZUNvbnRleHRDb25zdW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaGFyZUNvbnRleHRDb25zdW1lcik7XG5cbnZhciBfbWF0ZXJpYWxVaSA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpJyk7XG5cbnZhciBfTGlua01vZGVsID0gcmVxdWlyZSgnLi9MaW5rTW9kZWwnKTtcblxudmFyIF9MaW5rTW9kZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlua01vZGVsKTtcblxudmFyIF9tYWluU2hhcmVIZWxwZXIgPSByZXF1aXJlKCcuLi9tYWluL1NoYXJlSGVscGVyJyk7XG5cbnZhciBfbWFpblNoYXJlSGVscGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21haW5TaGFyZUhlbHBlcik7XG5cbnZhciBfcHlkaW9IdHRwUmVzdEFwaSA9IHJlcXVpcmUoJ3B5ZGlvL2h0dHAvcmVzdC1hcGknKTtcblxudmFyIFB1YmxpY0xpbmtQZXJtaXNzaW9ucyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdQdWJsaWNMaW5rUGVybWlzc2lvbnMnLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGxpbmtNb2RlbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKF9MaW5rTW9kZWwyWydkZWZhdWx0J10pLFxuICAgICAgICBzdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3RcbiAgICB9LFxuXG4gICAgY2hhbmdlUGVybWlzc2lvbjogZnVuY3Rpb24gY2hhbmdlUGVybWlzc2lvbihldmVudCkge1xuICAgICAgICB2YXIgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICB2YXIgY2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGNvbXBvc2l0ZU1vZGVsID0gX3Byb3BzLmNvbXBvc2l0ZU1vZGVsO1xuICAgICAgICB2YXIgbGlua01vZGVsID0gX3Byb3BzLmxpbmtNb2RlbDtcblxuICAgICAgICB2YXIgbGluayA9IGxpbmtNb2RlbC5nZXRMaW5rKCk7XG4gICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICBsaW5rLlBlcm1pc3Npb25zLnB1c2goX3B5ZGlvSHR0cFJlc3RBcGkuUmVzdFNoYXJlTGlua0FjY2Vzc1R5cGUuY29uc3RydWN0RnJvbU9iamVjdChuYW1lKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5rLlBlcm1pc3Npb25zID0gbGluay5QZXJtaXNzaW9ucy5maWx0ZXIoZnVuY3Rpb24gKHBlcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVybSAhPT0gbmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wb3NpdGVNb2RlbC5nZXROb2RlKCkuaXNMZWFmKCkpIHtcbiAgICAgICAgICAgIHZhciBhdXRoID0gX21haW5TaGFyZUhlbHBlcjJbJ2RlZmF1bHQnXS5nZXRBdXRob3JpemF0aW9ucyhfcHlkaW8yWydkZWZhdWx0J10uZ2V0SW5zdGFuY2UoKSk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gYXV0aC5tYXhfZG93bmxvYWRzO1xuICAgICAgICAgICAgLy8gUmVhZGFwdCB0ZW1wbGF0ZSBkZXBlbmRpbmcgb24gcGVybWlzc2lvbnNcbiAgICAgICAgICAgIGlmIChsaW5rTW9kZWwuaGFzUGVybWlzc2lvbignUHJldmlldycpKSB7XG4gICAgICAgICAgICAgICAgbGluay5WaWV3VGVtcGxhdGVOYW1lID0gXCJweWRpb191bmlxdWVfc3RyaXBcIjtcbiAgICAgICAgICAgICAgICBsaW5rLk1heERvd25sb2FkcyA9IDA7IC8vIENsZWFyIE1heCBEb3dubG9hZHMgaWYgUHJldmlldyBlbmFibGVkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLlZpZXdUZW1wbGF0ZU5hbWUgPSBcInB5ZGlvX3VuaXF1ZV9kbFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF4ICYmICFsaW5rLk1heERvd25sb2Fkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5NYXhEb3dubG9hZHMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5saW5rTW9kZWwudXBkYXRlTGluayhsaW5rKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGxpbmtNb2RlbCA9IF9wcm9wczIubGlua01vZGVsO1xuICAgICAgICB2YXIgY29tcG9zaXRlTW9kZWwgPSBfcHJvcHMyLmNvbXBvc2l0ZU1vZGVsO1xuICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMyLnB5ZGlvO1xuXG4gICAgICAgIHZhciBub2RlID0gY29tcG9zaXRlTW9kZWwuZ2V0Tm9kZSgpO1xuICAgICAgICB2YXIgcGVybXMgPSBbXSxcbiAgICAgICAgICAgIHByZXZpZXdXYXJuaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgYXV0aCA9IF9tYWluU2hhcmVIZWxwZXIyWydkZWZhdWx0J10uZ2V0QXV0aG9yaXphdGlvbnMoX3B5ZGlvMlsnZGVmYXVsdCddLmdldEluc3RhbmNlKCkpO1xuXG4gICAgICAgIGlmIChub2RlLmlzTGVhZigpKSB7XG4gICAgICAgICAgICB2YXIgX1NoYXJlSGVscGVyJG5vZGVIYXNFZGl0b3IgPSBfbWFpblNoYXJlSGVscGVyMlsnZGVmYXVsdCddLm5vZGVIYXNFZGl0b3IocHlkaW8sIG5vZGUpO1xuXG4gICAgICAgICAgICB2YXIgcHJldmlldyA9IF9TaGFyZUhlbHBlciRub2RlSGFzRWRpdG9yLnByZXZpZXc7XG4gICAgICAgICAgICB2YXIgd3JpdGVhYmxlID0gX1NoYXJlSGVscGVyJG5vZGVIYXNFZGl0b3Iud3JpdGVhYmxlO1xuXG4gICAgICAgICAgICBwZXJtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBOQU1FOiAnRG93bmxvYWQnLFxuICAgICAgICAgICAgICAgIExBQkVMOiB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzczJyksXG4gICAgICAgICAgICAgICAgRElTQUJMRUQ6ICFwcmV2aWV3IHx8ICFsaW5rTW9kZWwuaGFzUGVybWlzc2lvbignUHJldmlldycpIC8vIERvd25sb2FkIE9ubHksIGNhbm5vdCBlZGl0IHRoaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHByZXZpZXcgJiYgIWF1dGgubWF4X2Rvd25sb2Fkcykge1xuICAgICAgICAgICAgICAgIHBlcm1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBOQU1FOiAnUHJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIExBQkVMOiB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzcyJyksXG4gICAgICAgICAgICAgICAgICAgIERJU0FCTEVEOiAhbGlua01vZGVsLmhhc1Blcm1pc3Npb24oJ0Rvd25sb2FkJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAobGlua01vZGVsLmhhc1Blcm1pc3Npb24oJ1ByZXZpZXcnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod3JpdGVhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOQU1FOiAnVXBsb2FkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMQUJFTDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCc3NGInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZXJtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBOQU1FOiAnUHJldmlldycsXG4gICAgICAgICAgICAgICAgTEFCRUw6IHRoaXMucHJvcHMuZ2V0TWVzc2FnZSgnNzInKSxcbiAgICAgICAgICAgICAgICBESVNBQkxFRDogIWxpbmtNb2RlbC5oYXNQZXJtaXNzaW9uKCdVcGxvYWQnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwZXJtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBOQU1FOiAnRG93bmxvYWQnLFxuICAgICAgICAgICAgICAgIExBQkVMOiB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzczJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGVybXMucHVzaCh7XG4gICAgICAgICAgICAgICAgTkFNRTogJ1VwbG9hZCcsXG4gICAgICAgICAgICAgICAgTEFCRUw6IHRoaXMucHJvcHMuZ2V0TWVzc2FnZSgnNzQnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICBpZih0aGlzLnByb3BzLnNoYXJlTW9kZWwuaXNQdWJsaWNMaW5rUHJldmlld0Rpc2FibGVkKCkgJiYgdGhpcy5wcm9wcy5zaGFyZU1vZGVsLmdldFB1YmxpY0xpbmtQZXJtaXNzaW9uKGxpbmtJZCwgJ3JlYWQnKSl7XG4gICAgICAgICAgICBwcmV2aWV3V2FybmluZyA9IDxkaXY+e3RoaXMucHJvcHMuZ2V0TWVzc2FnZSgnMTk1Jyl9PC9kaXY+O1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogX2V4dGVuZHMoeyBwYWRkaW5nOiAnMTBweCAxNnB4JyB9LCB0aGlzLnByb3BzLnN0eWxlKSB9LFxuICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6ICdyZ2JhKDAsMCwwLDAuNDMpJyB9IH0sXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCc3MHInKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgbWFyZ2luOiAnMTBweCAwIDIwcHgnIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJtcy5tYXAoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5DaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwLk5BTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogcC5ESVNBQkxFRCB8fCB0aGlzLnByb3BzLmlzUmVhZG9ubHkoKSB8fCAhbGlua01vZGVsLmlzRWRpdGFibGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwLk5BTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogcC5MQUJFTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2s6IHRoaXMuY2hhbmdlUGVybWlzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGxpbmtNb2RlbC5oYXNQZXJtaXNzaW9uKHAuTkFNRSksXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0eWxlOiB7IHdoaXRlU3BhY2U6ICdub3dyYXAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBtYXJnaW46ICcxMHB4IDAnIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSksXG4gICAgICAgICAgICAgICAgcHJldmlld1dhcm5pbmdcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUHVibGljTGlua1Blcm1pc3Npb25zID0gKDAsIF9TaGFyZUNvbnRleHRDb25zdW1lcjJbJ2RlZmF1bHQnXSkoUHVibGljTGlua1Blcm1pc3Npb25zKTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFB1YmxpY0xpbmtQZXJtaXNzaW9ucztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgQ2hhcmxlcyBkdSBKZXUgLSBBYnN0cml1bSBTQVMgPHRlYW0gKGF0KSBweWQuaW8+XG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBQeWRpby5cbiAqXG4gKiBQeWRpbyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFB5ZGlvIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFB5ZGlvLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIFRoZSBsYXRlc3QgY29kZSBjYW4gYmUgZm91bmQgYXQgPGh0dHBzOi8vcHlkaW8uY29tPi5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9weWRpbyA9IHJlcXVpcmUoJ3B5ZGlvJyk7XG5cbnZhciBfcHlkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW8pO1xuXG52YXIgX1NoYXJlQ29udGV4dENvbnN1bWVyID0gcmVxdWlyZSgnLi4vU2hhcmVDb250ZXh0Q29uc3VtZXInKTtcblxudmFyIF9TaGFyZUNvbnRleHRDb25zdW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaGFyZUNvbnRleHRDb25zdW1lcik7XG5cbnZhciBfbWF0ZXJpYWxVaSA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpJyk7XG5cbnZhciBfTGlua01vZGVsID0gcmVxdWlyZSgnLi9MaW5rTW9kZWwnKTtcblxudmFyIF9MaW5rTW9kZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlua01vZGVsKTtcblxudmFyIF9QeWRpbyRyZXF1aXJlTGliID0gX3B5ZGlvMlsnZGVmYXVsdCddLnJlcXVpcmVMaWIoJ2hvYycpO1xuXG52YXIgTW9kZXJuU2VsZWN0RmllbGQgPSBfUHlkaW8kcmVxdWlyZUxpYi5Nb2Rlcm5TZWxlY3RGaWVsZDtcblxudmFyIFB1YmxpY0xpbmtUZW1wbGF0ZSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQdWJsaWNMaW5rVGVtcGxhdGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUHVibGljTGlua1RlbXBsYXRlKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVibGljTGlua1RlbXBsYXRlKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihQdWJsaWNMaW5rVGVtcGxhdGUucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUHVibGljTGlua1RlbXBsYXRlLCBbe1xuICAgICAgICBrZXk6ICdvbkRyb3BEb3duQ2hhbmdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJvcERvd25DaGFuZ2UoZXZlbnQsIGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGxpbmtNb2RlbCA9IHRoaXMucHJvcHMubGlua01vZGVsO1xuXG4gICAgICAgICAgICBsaW5rTW9kZWwuZ2V0TGluaygpLlZpZXdUZW1wbGF0ZU5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGxpbmtNb2RlbC5ub3RpZnlEaXJ0eSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIGNydExhYmVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIGxpbmtNb2RlbCA9IHRoaXMucHJvcHMubGlua01vZGVsO1xuXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBsaW5rTW9kZWwuZ2V0TGluaygpLlZpZXdUZW1wbGF0ZU5hbWU7XG4gICAgICAgICAgICB2YXIgbWVudUl0ZW1zID0gdGhpcy5wcm9wcy5sYXlvdXREYXRhLm1hcChmdW5jdGlvbiAobCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBsLkxBWU9VVF9FTEVNRU5UID09PSBzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjcnRMYWJlbCA9IGwuTEFZT1VUX0xBQkVMO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkICYmICFjcnRMYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IGwuTEFZT1VUX0VMRU1FTlQ7XG4gICAgICAgICAgICAgICAgICAgIGNydExhYmVsID0gbC5MQVlPVVRfTEFCRUw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5NZW51SXRlbSwgeyBrZXk6IGwuTEFZT1VUX0VMRU1FTlQsIHZhbHVlOiBsLkxBWU9VVF9FTEVNRU5ULCBwcmltYXJ5VGV4dDogbC5MQVlPVVRfTEFCRUwgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogJ3JnYmEoMCwwLDAsMC40MyknIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcxNTEnKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIE1vZGVyblNlbGVjdEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkRyb3BEb3duQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5pc1JlYWRvbmx5KCkgfHwgdGhpcy5wcm9wcy5yZWFkb25seSB8fCAhbGlua01vZGVsLmlzRWRpdGFibGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0OiB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzE1MScpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtc1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUHVibGljTGlua1RlbXBsYXRlO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cblB1YmxpY0xpbmtUZW1wbGF0ZS5Qcm9wVHlwZXMgPSB7XG4gICAgbGlua01vZGVsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoX0xpbmtNb2RlbDJbJ2RlZmF1bHQnXSlcbn07XG5QdWJsaWNMaW5rVGVtcGxhdGUgPSAoMCwgX1NoYXJlQ29udGV4dENvbnN1bWVyMlsnZGVmYXVsdCddKShQdWJsaWNMaW5rVGVtcGxhdGUpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gUHVibGljTGlua1RlbXBsYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDctMjAxNyBDaGFybGVzIGR1IEpldSAtIEFic3RyaXVtIFNBUyA8dGVhbSAoYXQpIHB5ZC5pbz5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFB5ZGlvLlxuICpcbiAqIFB5ZGlvIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogUHlkaW8gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggUHlkaW8uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVGhlIGxhdGVzdCBjb2RlIGNhbiBiZSBmb3VuZCBhdCA8aHR0cHM6Ly9weWRpby5jb20+LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B5ZGlvID0gcmVxdWlyZSgncHlkaW8nKTtcblxudmFyIF9weWRpbzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weWRpbyk7XG5cbnZhciBfcHlkaW9VdGlsUGFzcyA9IHJlcXVpcmUoJ3B5ZGlvL3V0aWwvcGFzcycpO1xuXG52YXIgX3B5ZGlvVXRpbFBhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHlkaW9VdGlsUGFzcyk7XG5cbnZhciBfbWF0ZXJpYWxVaSA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpJyk7XG5cbnZhciBfU2hhcmVDb250ZXh0Q29uc3VtZXIgPSByZXF1aXJlKCcuLi9TaGFyZUNvbnRleHRDb25zdW1lcicpO1xuXG52YXIgX1NoYXJlQ29udGV4dENvbnN1bWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NoYXJlQ29udGV4dENvbnN1bWVyKTtcblxudmFyIF9MaW5rTW9kZWwgPSByZXF1aXJlKCcuL0xpbmtNb2RlbCcpO1xuXG52YXIgX0xpbmtNb2RlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rTW9kZWwpO1xuXG52YXIgX21haW5TaGFyZUhlbHBlciA9IHJlcXVpcmUoJy4uL21haW4vU2hhcmVIZWxwZXInKTtcblxudmFyIF9tYWluU2hhcmVIZWxwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpblNoYXJlSGVscGVyKTtcblxudmFyIF9QeWRpbyRyZXF1aXJlTGliID0gX3B5ZGlvMlsnZGVmYXVsdCddLnJlcXVpcmVMaWIoJ2Zvcm0nKTtcblxudmFyIFZhbGlkUGFzc3dvcmQgPSBfUHlkaW8kcmVxdWlyZUxpYi5WYWxpZFBhc3N3b3JkO1xuXG52YXIgX1B5ZGlvJHJlcXVpcmVMaWIyID0gX3B5ZGlvMlsnZGVmYXVsdCddLnJlcXVpcmVMaWIoJ2hvYycpO1xuXG52YXIgTW9kZXJuVGV4dEZpZWxkID0gX1B5ZGlvJHJlcXVpcmVMaWIyLk1vZGVyblRleHRGaWVsZDtcbnZhciBNb2Rlcm5TdHlsZXMgPSBfUHlkaW8kcmVxdWlyZUxpYjIuTW9kZXJuU3R5bGVzO1xuXG52YXIgZ2xvYlN0eWxlcyA9IHtcbiAgICBsZWZ0SWNvbjoge1xuICAgICAgICBtYXJnaW46ICcwIDE2cHggMCA0cHgnLFxuICAgICAgICBjb2xvcjogJyM3NTc1NzUnXG4gICAgfVxufTtcblxudmFyIFB1YmxpY0xpbmtTZWN1cmVPcHRpb25zID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1B1YmxpY0xpbmtTZWN1cmVPcHRpb25zJyxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBsaW5rTW9kZWw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfTGlua01vZGVsMlsnZGVmYXVsdCddKS5pc1JlcXVpcmVkLFxuICAgICAgICBzdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3RcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuXG4gICAgdXBkYXRlRExFeHBpcmF0aW9uRmllbGQ6IGZ1bmN0aW9uIHVwZGF0ZURMRXhwaXJhdGlvbkZpZWxkKGV2ZW50KSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGlmIChwYXJzZUludChuZXdWYWx1ZSkgPCAwKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IC1wYXJzZUludChuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxpbmtNb2RlbCA9IHRoaXMucHJvcHMubGlua01vZGVsO1xuXG4gICAgICAgIHZhciBsaW5rID0gbGlua01vZGVsLmdldExpbmsoKTtcbiAgICAgICAgbGluay5NYXhEb3dubG9hZHMgPSBuZXdWYWx1ZTtcbiAgICAgICAgbGlua01vZGVsLnVwZGF0ZUxpbmsobGluayk7XG4gICAgfSxcblxuICAgIHVwZGF0ZURheXNFeHBpcmF0aW9uRmllbGQ6IGZ1bmN0aW9uIHVwZGF0ZURheXNFeHBpcmF0aW9uRmllbGQoZXZlbnQsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICghbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaW5rTW9kZWwgPSB0aGlzLnByb3BzLmxpbmtNb2RlbDtcblxuICAgICAgICB2YXIgbGluayA9IGxpbmtNb2RlbC5nZXRMaW5rKCk7XG4gICAgICAgIGxpbmsuQWNjZXNzRW5kID0gbmV3VmFsdWU7XG4gICAgICAgIGxpbmtNb2RlbC51cGRhdGVMaW5rKGxpbmspO1xuICAgIH0sXG5cbiAgICBvbkRhdGVDaGFuZ2U6IGZ1bmN0aW9uIG9uRGF0ZUNoYW5nZShldmVudCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGRhdGUyID0gRGF0ZS5VVEModmFsdWUuZ2V0RnVsbFllYXIoKSwgdmFsdWUuZ2V0TW9udGgoKSwgdmFsdWUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXlzRXhwaXJhdGlvbkZpZWxkKGV2ZW50LCBNYXRoLmZsb29yKGRhdGUyIC8gMTAwMCkgKyBcIlwiKTtcbiAgICB9LFxuXG4gICAgcmVzZXRQYXNzd29yZDogZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcbiAgICAgICAgdmFyIGxpbmtNb2RlbCA9IHRoaXMucHJvcHMubGlua01vZGVsO1xuXG4gICAgICAgIGxpbmtNb2RlbC5zZXRVcGRhdGVQYXNzd29yZCgnJyk7XG4gICAgICAgIGxpbmtNb2RlbC5nZXRMaW5rKCkuUGFzc3dvcmRSZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICBsaW5rTW9kZWwubm90aWZ5RGlydHkoKTtcbiAgICB9LFxuXG4gICAgc2V0VXBkYXRpbmdQYXNzd29yZDogZnVuY3Rpb24gc2V0VXBkYXRpbmdQYXNzd29yZChuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9weWRpb1V0aWxQYXNzMlsnZGVmYXVsdCddLmNoZWNrUGFzc3dvcmRTdHJlbmd0aChuZXdWYWx1ZSwgZnVuY3Rpb24gKG9rLCBtc2cpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdXBkYXRpbmdQYXNzd29yZDogbmV3VmFsdWUsIHVwZGF0aW5nUGFzc3dvcmRWYWxpZDogb2sgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjaGFuZ2VQYXNzd29yZDogZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgICAgIHZhciBsaW5rTW9kZWwgPSB0aGlzLnByb3BzLmxpbmtNb2RlbDtcbiAgICAgICAgdmFyIHVwZGF0aW5nUGFzc3dvcmQgPSB0aGlzLnN0YXRlLnVwZGF0aW5nUGFzc3dvcmQ7XG5cbiAgICAgICAgbGlua01vZGVsLnNldFVwZGF0ZVBhc3N3b3JkKHVwZGF0aW5nUGFzc3dvcmQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHdQb3A6IGZhbHNlLCB1cGRhdGluZ1Bhc3N3b3JkOiBcIlwiLCB1cGRhdGluZ1Bhc3N3b3JkVmFsaWQ6IGZhbHNlIH0pO1xuICAgICAgICBsaW5rTW9kZWwubm90aWZ5RGlydHkoKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlUGFzc3dvcmQ6IGZ1bmN0aW9uIHVwZGF0ZVBhc3N3b3JkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB2YXIgbGlua01vZGVsID0gdGhpcy5wcm9wcy5saW5rTW9kZWw7XG5cbiAgICAgICAgdmFyIHZhbGlkID0gdGhpcy5yZWZzLnB3ZC5pc1ZhbGlkKCk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGludmFsaWRQYXNzd29yZDogbnVsbCwgaW52YWxpZDogZmFsc2UgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxpbmtNb2RlbC5zZXRVcGRhdGVQYXNzd29yZChuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnZhbGlkUGFzc3dvcmQ6IG5ld1ZhbHVlLCBpbnZhbGlkOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlc2V0RG93bmxvYWRzOiBmdW5jdGlvbiByZXNldERvd25sb2FkcygpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKHRoaXMucHJvcHMuZ2V0TWVzc2FnZSgnMTA2JykpKSB7XG4gICAgICAgICAgICB2YXIgbGlua01vZGVsID0gdGhpcy5wcm9wcy5saW5rTW9kZWw7XG5cbiAgICAgICAgICAgIGxpbmtNb2RlbC5nZXRMaW5rKCkuQ3VycmVudERvd25sb2FkcyA9IFwiMFwiO1xuICAgICAgICAgICAgbGlua01vZGVsLm5vdGlmeURpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzZXRFeHBpcmF0aW9uOiBmdW5jdGlvbiByZXNldEV4cGlyYXRpb24oKSB7XG4gICAgICAgIHZhciBsaW5rTW9kZWwgPSB0aGlzLnByb3BzLmxpbmtNb2RlbDtcblxuICAgICAgICBsaW5rTW9kZWwuZ2V0TGluaygpLkFjY2Vzc0VuZCA9IFwiMFwiO1xuICAgICAgICBsaW5rTW9kZWwubm90aWZ5RGlydHkoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyUGFzc3dvcmRDb250YWluZXI6IGZ1bmN0aW9uIHJlbmRlclBhc3N3b3JkQ29udGFpbmVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgbGlua01vZGVsID0gdGhpcy5wcm9wcy5saW5rTW9kZWw7XG5cbiAgICAgICAgdmFyIGxpbmsgPSBsaW5rTW9kZWwuZ2V0TGluaygpO1xuICAgICAgICB2YXIgcGFzc3dvcmRGaWVsZCA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlc2V0UGFzc3dvcmQgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICB1cGRhdGVQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGxpbmsuUGFzc3dvcmRSZXF1aXJlZCkge1xuICAgICAgICAgICAgcmVzZXRQYXNzd29yZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkZsYXRCdXR0b24sIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5pc1JlYWRvbmx5KCkgfHwgIWxpbmtNb2RlbC5pc0VkaXRhYmxlKCksXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMucmVzZXRQYXNzd29yZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcxNzQnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1cGRhdGVQYXNzd29yZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRmxhdEJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5pc1JlYWRvbmx5KCkgfHwgIWxpbmtNb2RlbC5pc0VkaXRhYmxlKCksXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFRhcDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHB3UG9wOiB0cnVlLCBwd0FuY2hvcjogZS5jdXJyZW50VGFyZ2V0IH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcxODEnKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBfbWF0ZXJpYWxVaS5Qb3BvdmVyLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiB0aGlzLnN0YXRlLnB3UG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw6IHRoaXMuc3RhdGUucHdBbmNob3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW46IHsgaG9yaXpvbnRhbDogJ3JpZ2h0JywgdmVydGljYWw6ICdib3R0b20nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRPcmlnaW46IHsgaG9yaXpvbnRhbDogJ3JpZ2h0JywgdmVydGljYWw6ICd0b3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHB3UG9wOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgd2lkdGg6IDI4MCwgcGFkZGluZzogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChWYWxpZFBhc3N3b3JkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicHdkVXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyBsYWJlbDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcyMycpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudXBkYXRpbmdQYXNzd29yZCA/IHRoaXMuc3RhdGUudXBkYXRpbmdQYXNzd29yZCA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRVcGRhdGluZ1Bhc3N3b3JkKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBwYWRkaW5nVG9wOiAyMCwgdGV4dEFsaWduOiAncmlnaHQnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5GbGF0QnV0dG9uLCB7IGxhYmVsOiBcIk9LXCIsIG9uVG91Y2hUYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5jaGFuZ2VQYXNzd29yZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkaXNhYmxlZDogIXRoaXMuc3RhdGUudXBkYXRpbmdQYXNzd29yZCB8fCAhdGhpcy5zdGF0ZS51cGRhdGluZ1Bhc3N3b3JkVmFsaWQgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRmxhdEJ1dHRvbiwgeyBsYWJlbDogXCJDYW5jZWxcIiwgb25Ub3VjaFRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgcHdQb3A6IGZhbHNlLCB1cGRhdGluZ1Bhc3N3b3JkOiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBhc3N3b3JkRmllbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChNb2Rlcm5UZXh0RmllbGQsIHtcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcyMycpLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnKioqKioqKionLFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNSZWFkb25seSgpICYmIGxpbmtNb2RlbC5pc0VkaXRhYmxlKCkpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkRmllbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChWYWxpZFBhc3N3b3JkLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3NoYXJlLXBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICByZWY6IFwicHdkXCIsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyBsYWJlbDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcyMycpIH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuaW52YWxpZFBhc3N3b3JkID8gdGhpcy5zdGF0ZS5pbnZhbGlkUGFzc3dvcmQgOiBsaW5rTW9kZWwudXBkYXRlUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMudXBkYXRlUGFzc3dvcmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXNzd29yZEZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYXNzd29yZC1jb250YWluZXInLCBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0gfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5Gb250SWNvbiwgeyBjbGFzc05hbWU6ICdtZGkgbWRpLWZpbGUtbG9jaycsIHN0eWxlOiBnbG9iU3R5bGVzLmxlZnRJY29uIH0pLFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyB3aWR0aDogcmVzZXRQYXNzd29yZCA/ICc0MCUnIDogJzEwMCUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHJlc2V0UGFzc3dvcmQgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHdpZHRoOiAnNjAlJywgZGlzcGxheTogJ2ZsZXgnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRQYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgJyAnLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXNzd29yZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlOiBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGVPYmplY3QpIHtcbiAgICAgICAgdmFyIGRhdGVGb3JtYXREYXkgPSB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJ2RhdGVfZm9ybWF0JywgJycpLnNwbGl0KCcgJykuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIGRhdGVGb3JtYXREYXkucmVwbGFjZSgnWScsIGRhdGVPYmplY3QuZ2V0RnVsbFllYXIoKSkucmVwbGFjZSgnbScsIGRhdGVPYmplY3QuZ2V0TW9udGgoKSArIDEpLnJlcGxhY2UoJ2QnLCBkYXRlT2JqZWN0LmdldERhdGUoKSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgbGlua01vZGVsID0gdGhpcy5wcm9wcy5saW5rTW9kZWw7XG5cbiAgICAgICAgdmFyIGxpbmsgPSBsaW5rTW9kZWwuZ2V0TGluaygpO1xuXG4gICAgICAgIHZhciBwYXNzQ29udGFpbmVyID0gdGhpcy5yZW5kZXJQYXNzd29yZENvbnRhaW5lcigpO1xuICAgICAgICB2YXIgY3J0TGlua0RMQWxsb3dlZCA9IGxpbmtNb2RlbC5oYXNQZXJtaXNzaW9uKCdEb3dubG9hZCcpICYmICFsaW5rTW9kZWwuaGFzUGVybWlzc2lvbignUHJldmlldycpICYmICFsaW5rTW9kZWwuaGFzUGVybWlzc2lvbignVXBsb2FkJyk7XG4gICAgICAgIHZhciBkbExpbWl0VmFsdWUgPSBwYXJzZUludChsaW5rLk1heERvd25sb2Fkcyk7XG4gICAgICAgIHZhciBleHBpcmF0aW9uRGF0ZVZhbHVlID0gcGFyc2VJbnQobGluay5BY2Nlc3NFbmQpO1xuXG4gICAgICAgIHZhciBjYWxJY29uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRm9udEljb24sIHsgY2xhc3NOYW1lOiAnbWRpIG1kaS1jYWxlbmRhci1jbG9jaycsIHN0eWxlOiBnbG9iU3R5bGVzLmxlZnRJY29uIH0pO1xuICAgICAgICB2YXIgZXhwRGF0ZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heERhdGUgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBkbENvdW50ZXJTdHJpbmcgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBkYXRlRXhwaXJlZCA9IGZhbHNlLFxuICAgICAgICAgICAgZGxFeHBpcmVkID0gZmFsc2U7XG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgdmFyIGF1dGggPSBfbWFpblNoYXJlSGVscGVyMlsnZGVmYXVsdCddLmdldEF1dGhvcml6YXRpb25zKHRoaXMucHJvcHMucHlkaW8pO1xuICAgICAgICBpZiAocGFyc2VJbnQoYXV0aC5tYXhfZXhwaXJhdGlvbikgPiAwKSB7XG4gICAgICAgICAgICBtYXhEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIG1heERhdGUuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyBwYXJzZUludChhdXRoLm1heF9leHBpcmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KGF1dGgubWF4X2Rvd25sb2FkcykgPiAwKSB7XG4gICAgICAgICAgICBkbExpbWl0VmFsdWUgPSBNYXRoLm1pbihkbExpbWl0VmFsdWUsIHBhcnNlSW50KGF1dGgubWF4X2Rvd25sb2FkcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4cGlyYXRpb25EYXRlVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChleHBpcmF0aW9uRGF0ZVZhbHVlIDwgMCkge1xuICAgICAgICAgICAgICAgIGRhdGVFeHBpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cERhdGUgPSBuZXcgRGF0ZShleHBpcmF0aW9uRGF0ZVZhbHVlICogMTAwMCk7XG4gICAgICAgICAgICAvL2V4cERhdGUuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyBwYXJzZUludChleHBpcmF0aW9uRGF0ZVZhbHVlKSk7XG4gICAgICAgICAgICBjYWxJY29uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuSWNvbkJ1dHRvbiwgeyBpY29uU3R5bGU6IHsgY29sb3I6IGdsb2JTdHlsZXMubGVmdEljb24uY29sb3IgfSwgc3R5bGU6IHsgbWFyZ2luTGVmdDogLTgsIG1hcmdpblJpZ2h0OiA4IH0sIGljb25DbGFzc05hbWU6ICdtZGkgbWRpLWNsb3NlLWNpcmNsZScsIG9uVG91Y2hUYXA6IHRoaXMucmVzZXRFeHBpcmF0aW9uLmJpbmQodGhpcykgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRsTGltaXRWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRsQ291bnRlciA9IHBhcnNlSW50KGxpbmsuQ3VycmVudERvd25sb2FkcykgfHwgMDtcbiAgICAgICAgICAgIHZhciByZXNldExpbmsgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoZGxDb3VudGVyKSB7XG4gICAgICAgICAgICAgICAgcmVzZXRMaW5rID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBjdXJzb3I6ICdwb2ludGVyJyB9LCBvbkNsaWNrOiB0aGlzLnJlc2V0RG93bmxvYWRzLmJpbmQodGhpcyksIHRpdGxlOiB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzE3JykgfSxcbiAgICAgICAgICAgICAgICAgICAgJygnLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzE2JyksXG4gICAgICAgICAgICAgICAgICAgICcpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGRsQ291bnRlciA+PSBkbExpbWl0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGxFeHBpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkbENvdW50ZXJTdHJpbmcgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdkbENvdW50ZXJTdHJpbmcnIH0sXG4gICAgICAgICAgICAgICAgZGxDb3VudGVyICsgJy8nICsgZGxMaW1pdFZhbHVlLFxuICAgICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgICByZXNldExpbmtcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IHN0eWxlOiBfZXh0ZW5kcyh7IHBhZGRpbmc6IDEwIH0sIHRoaXMucHJvcHMuc3R5bGUpIH0sXG4gICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogJ3JnYmEoMCwwLDAsMC40MyknIH0gfSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzI0JylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHBhZGRpbmdSaWdodDogMTAgfSB9LFxuICAgICAgICAgICAgICAgIHBhc3NDb250YWluZXIsXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGZsZXg6IDEsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfSwgY2xhc3NOYW1lOiBkYXRlRXhwaXJlZCA/ICdsaW1pdC1ibG9jay1leHBpcmVkJyA6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FsSWNvbixcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRGF0ZVBpY2tlciwgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiAnZXhwaXJhdGlvbkRhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4cERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9PazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmlzUmVhZG9ubHkoKSB8fCAhbGlua01vZGVsLmlzRWRpdGFibGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uRGF0ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dZZWFyU2VsZWN0b3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50VGV4dDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKGRhdGVFeHBpcmVkID8gJzIxYicgOiAnMjEnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdsYW5kc2NhcGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0RGF0ZTogdGhpcy5mb3JtYXREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgZmxleDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sIE1vZGVyblN0eWxlcy50ZXh0RmllbGQpKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGZsZXg6IDEsIGFsaWduSXRlbXM6ICdiYXNlbGluZScsIGRpc3BsYXk6IGNydExpbmtETEFsbG93ZWQgPyAnZmxleCcgOiAnbm9uZScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH0sIGNsYXNzTmFtZTogZGxFeHBpcmVkID8gJ2xpbWl0LWJsb2NrLWV4cGlyZWQnIDogbnVsbCB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5Gb250SWNvbiwgeyBjbGFzc05hbWU6ICdtZGkgbWRpLWRvd25sb2FkJywgc3R5bGU6IGdsb2JTdHlsZXMubGVmdEljb24gfSksXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KE1vZGVyblRleHRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5pc1JlYWRvbmx5KCkgfHwgIWxpbmtNb2RlbC5pc0VkaXRhYmxlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dDogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKGRsRXhwaXJlZCA/ICcyMmInIDogJzIyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGxMaW1pdFZhbHVlID4gMCA/IGRsTGltaXRWYWx1ZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMudXBkYXRlRExFeHBpcmF0aW9uRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBmbGV4OiAxIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDEwLCB0b3A6IDE0LCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6ICdyZ2JhKDAsMCwwLDAuNDMpJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkbENvdW50ZXJTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUHVibGljTGlua1NlY3VyZU9wdGlvbnMgPSAoMCwgX1NoYXJlQ29udGV4dENvbnN1bWVyMlsnZGVmYXVsdCddKShQdWJsaWNMaW5rU2VjdXJlT3B0aW9ucyk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBQdWJsaWNMaW5rU2VjdXJlT3B0aW9ucztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgQ2hhcmxlcyBkdSBKZXUgLSBBYnN0cml1bSBTQVMgPHRlYW0gKGF0KSBweWQuaW8+XG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBQeWRpby5cbiAqXG4gKiBQeWRpbyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFB5ZGlvIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIFB5ZGlvLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIFRoZSBsYXRlc3QgY29kZSBjYW4gYmUgZm91bmQgYXQgPGh0dHBzOi8vcHlkaW8uY29tPi5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9TaGFyZUNvbnRleHRDb25zdW1lciA9IHJlcXVpcmUoJy4uL1NoYXJlQ29udGV4dENvbnN1bWVyJyk7XG5cbnZhciBfU2hhcmVDb250ZXh0Q29uc3VtZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2hhcmVDb250ZXh0Q29uc3VtZXIpO1xuXG52YXIgX21hdGVyaWFsVWkgPSByZXF1aXJlKCdtYXRlcmlhbC11aScpO1xuXG52YXIgX2NsaXBib2FyZCA9IHJlcXVpcmUoJ2NsaXBib2FyZCcpO1xuXG52YXIgX2NsaXBib2FyZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGlwYm9hcmQpO1xuXG52YXIgX2xpbmtzTGlua01vZGVsID0gcmVxdWlyZSgnLi4vbGlua3MvTGlua01vZGVsJyk7XG5cbnZhciBfbGlua3NMaW5rTW9kZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlua3NMaW5rTW9kZWwpO1xuXG52YXIgVGFyZ2V0ZWRVc2VyTGluayA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUYXJnZXRlZFVzZXJMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFRhcmdldGVkVXNlckxpbmsocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhcmdldGVkVXNlckxpbmspO1xuXG4gICAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFRhcmdldGVkVXNlckxpbmsucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGNvcHlNZXNzYWdlOiAnJyB9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUYXJnZXRlZFVzZXJMaW5rLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbGlwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcCA9IG5ldyBfY2xpcGJvYXJkMlsnZGVmYXVsdCddKHRoaXMuX2J1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAoZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmxpbms7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGlwLm9uKCdzdWNjZXNzJywgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlNZXNzYWdlOiB0aGlzLnByb3BzLmdldE1lc3NhZ2UoJzE5MicpIH0sIHRoaXMuY2xlYXJDb3B5TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcC5vbignZXJyb3InLCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29weU1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWwubmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoXCJNYWNcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlNZXNzYWdlID0gdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcxNDQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlNZXNzYWdlID0gdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCdzaGFyZV9jZW50ZXIuMTQzJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlNZXNzYWdlOiBjb3B5TWVzc2FnZSB9LCB0aGlzLmNsZWFyQ29weU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbGlwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsZWFyQ29weU1lc3NhZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJDb3B5TWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29weU1lc3NhZ2U6ICcnIH0pO1xuICAgICAgICAgICAgfSkuYmluZCh0aGlzKSwgNTAwMCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciB0YXJnZXRVc2VyID0gX3Byb3BzLnRhcmdldFVzZXI7XG4gICAgICAgICAgICB2YXIgbGluayA9IF9wcm9wcy5saW5rO1xuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcgfSB9LFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBmbGV4OiAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VXNlci5EaXNwbGF5LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5JY29uQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBweWRpbzogdGhpcy5wcm9wcy5weWRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9idXR0b24gPSBfcmVhY3REb20yWydkZWZhdWx0J10uZmluZERPTU5vZGUocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3NOYW1lOiAnbWRpIG1kaS1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHRoaXMuc3RhdGUuY29weU1lc3NhZ2UgfHwgbGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25TdHlsZTogeyBmb250U2l6ZTogMTMsIGxpbmVIZWlnaHQ6ICcxN3B4JyB9LCBzdHlsZTogeyB3aWR0aDogMzQsIGhlaWdodDogMzQsIHBhZGRpbmc6IDYgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHdpZHRoOiA0MCwgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFVzZXIuRG93bmxvYWRDb3VudFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGFyZ2V0ZWRVc2VyTGluaztcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG52YXIgVGFyZ2V0ZWRVc2VycyA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgICBfaW5oZXJpdHMoVGFyZ2V0ZWRVc2VycywgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gICAgZnVuY3Rpb24gVGFyZ2V0ZWRVc2Vycyhwcm9wcywgY29udGV4dCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFyZ2V0ZWRVc2Vycyk7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGFyZ2V0ZWRVc2Vycy5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGFyZ2V0ZWRVc2VycywgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbGlua01vZGVsID0gdGhpcy5wcm9wcy5saW5rTW9kZWw7XG5cbiAgICAgICAgICAgIHZhciBsaW5rID0gbGlua01vZGVsLmdldExpbmsoKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRVc2VycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChsaW5rLlRhcmdldFVzZXJzKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VXNlcnMgPSBsaW5rLlRhcmdldFVzZXJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0LmtleXModGFyZ2V0VXNlcnMpLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IGxpbmtNb2RlbC5nZXRQdWJsaWNVcmwoKSArICc/dT0nICsgaztcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoVGFyZ2V0ZWRVc2VyTGluaywgeyB0YXJnZXRVc2VyOiB0YXJnZXRVc2Vyc1trXSwgbGluazogdGl0bGUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByb290U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzM0cHgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc0cHggMTBweCA0cHgnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmFmYWZhJyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgaGVhZGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiB0aGlzLnN0YXRlLm9wZW4gPyAnMXB4IHNvbGlkICM3NTc1NzUnIDogJycsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMzYpJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgc3R5bGU6IHJvb3RTdHlsZSB9LFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogX2V4dGVuZHMoeyBkaXNwbGF5OiAnZmxleCcgfSwgaGVhZGVyU3R5bGUpIH0sXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGZsZXg6IDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCcyNDUnKS5yZXBsYWNlKCclcycsIGl0ZW1zLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnbWRpIG1kaS1jaGV2cm9uLScgKyAodGhpcy5zdGF0ZS5vcGVuID8gJ3VwJyA6ICdkb3duJyksIHN0eWxlOiB7IGN1cnNvcjogJ3BvaW50ZXInIH0sIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgb3BlbjogIV90aGlzMi5zdGF0ZS5vcGVuIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHdpZHRoOiA0MCwgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnI0RMJ1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW4gJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpdGVtc1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGFyZ2V0ZWRVc2Vycztcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5UYXJnZXRlZFVzZXJzLnByb3BUeXBlcyA9IHtcbiAgICBsaW5rTW9kZWw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfbGlua3NMaW5rTW9kZWwyWydkZWZhdWx0J10pXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUYXJnZXRlZFVzZXJzID0gKDAsIF9TaGFyZUNvbnRleHRDb25zdW1lcjJbJ2RlZmF1bHQnXSkoVGFyZ2V0ZWRVc2Vycyk7XG5UYXJnZXRlZFVzZXJMaW5rID0gKDAsIF9TaGFyZUNvbnRleHRDb25zdW1lcjJbJ2RlZmF1bHQnXSkoVGFyZ2V0ZWRVc2VyTGluayk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRhcmdldGVkVXNlcnM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDE3IENoYXJsZXMgZHUgSmV1IC0gQWJzdHJpdW0gU0FTIDx0ZWFtIChhdCkgcHlkLmlvPlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUHlkaW8uXG4gKlxuICogUHlkaW8gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBQeWRpbyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBQeWRpby4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBUaGUgbGF0ZXN0IGNvZGUgY2FuIGJlIGZvdW5kIGF0IDxodHRwczovL3B5ZGlvLmNvbT4uXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbJ3JldHVybiddKSBfaVsncmV0dXJuJ10oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZScpOyB9IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1NoYXJlQ29udGV4dENvbnN1bWVyID0gcmVxdWlyZSgnLi4vU2hhcmVDb250ZXh0Q29uc3VtZXInKTtcblxudmFyIF9TaGFyZUNvbnRleHRDb25zdW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaGFyZUNvbnRleHRDb25zdW1lcik7XG5cbnZhciBfcHlkaW8gPSByZXF1aXJlKCdweWRpbycpO1xuXG52YXIgX3B5ZGlvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvKTtcblxudmFyIF9weWRpb0h0dHBQb2xpY2llcyA9IHJlcXVpcmUoJ3B5ZGlvL2h0dHAvcG9saWNpZXMnKTtcblxudmFyIF9weWRpb0h0dHBQb2xpY2llczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weWRpb0h0dHBQb2xpY2llcyk7XG5cbnZhciBfcHlkaW9IdHRwUmVzdEFwaSA9IHJlcXVpcmUoJ3B5ZGlvL2h0dHAvcmVzdC1hcGknKTtcblxudmFyIF9MaW5rTW9kZWwgPSByZXF1aXJlKCcuL0xpbmtNb2RlbCcpO1xuXG52YXIgX0xpbmtNb2RlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rTW9kZWwpO1xuXG52YXIgX1B5ZGlvJHJlcXVpcmVMaWIgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYignY29tcG9uZW50cycpO1xuXG52YXIgUmVzb3VyY2VQb2xpY2llc1BhbmVsID0gX1B5ZGlvJHJlcXVpcmVMaWIuUmVzb3VyY2VQb2xpY2llc1BhbmVsO1xuXG52YXIgVmlzaWJpbGl0eVBhbmVsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1Zpc2liaWxpdHlQYW5lbCcsXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYXNzb2NpYXRlZCBoaWRkZW4gdXNlcnMgcG9saWNpZXMsIG90aGVyd2lzZVxuICAgICAqIHRoZSBwdWJsaWMgbGluayB2aXNpYmlsaXR5IGNhbm5vdCBiZSBjaGFuZ2VkXG4gICAgICogQHBhcmFtIGRpZmZQb2xpY2llc1xuICAgICAqL1xuICAgIG9uU2F2ZVBvbGljaWVzOiBmdW5jdGlvbiBvblNhdmVQb2xpY2llcyhkaWZmUG9saWNpZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGxpbmtNb2RlbCA9IF9wcm9wcy5saW5rTW9kZWw7XG4gICAgICAgIHZhciBweWRpbyA9IF9wcm9wcy5weWRpbztcblxuICAgICAgICB2YXIgaW50ZXJuYWxVc2VyID0gbGlua01vZGVsLmdldExpbmsoKS5Vc2VyTG9naW47XG4gICAgICAgIF9weWRpb0h0dHBQb2xpY2llczJbJ2RlZmF1bHQnXS5sb2FkUG9saWNpZXMoJ3VzZXInLCBpbnRlcm5hbFVzZXIpLnRoZW4oZnVuY3Rpb24gKHBvbGljaWVzKSB7XG4gICAgICAgICAgICBpZiAocG9saWNpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc291cmNlSWQgPSBwb2xpY2llc1swXS5SZXNvdXJjZTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UG9saWNpZXMgPSBfdGhpcy5kaWZmUG9saWNpZXMocG9saWNpZXMsIGRpZmZQb2xpY2llcywgcmVzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgX3B5ZGlvSHR0cFBvbGljaWVzMlsnZGVmYXVsdCddLnNhdmVQb2xpY2llcygndXNlcicsIGludGVybmFsVXNlciwgbmV3UG9saWNpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZGlmZlBvbGljaWVzOiBmdW5jdGlvbiBkaWZmUG9saWNpZXMocG9saWNpZXMsIF9kaWZmUG9saWNpZXMsIHJlc291cmNlSWQpIHtcbiAgICAgICAgdmFyIG5ld1BvbHMgPSBbXTtcbiAgICAgICAgcG9saWNpZXMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gcC5BY3Rpb24gKyAnLy8vJyArIHAuU3ViamVjdDtcbiAgICAgICAgICAgIGlmICghX2RpZmZQb2xpY2llcy5yZW1vdmVba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1BvbHMucHVzaChwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5rZXlzKF9kaWZmUG9saWNpZXMuYWRkKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIHZhciBuZXdQb2wgPSBuZXcgX3B5ZGlvSHR0cFJlc3RBcGkuU2VydmljZVJlc291cmNlUG9saWN5KCk7XG5cbiAgICAgICAgICAgIHZhciBfayRzcGxpdCA9IGsuc3BsaXQoJy8vLycpO1xuXG4gICAgICAgICAgICB2YXIgX2skc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX2skc3BsaXQsIDIpO1xuXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gX2skc3BsaXQyWzBdO1xuICAgICAgICAgICAgdmFyIHN1YmplY3QgPSBfayRzcGxpdDJbMV07XG5cbiAgICAgICAgICAgIG5ld1BvbC5SZXNvdXJjZSA9IHJlc291cmNlSWQ7XG4gICAgICAgICAgICBuZXdQb2wuRWZmZWN0ID0gX3B5ZGlvSHR0cFJlc3RBcGkuU2VydmljZVJlc291cmNlUG9saWN5UG9saWN5RWZmZWN0LmNvbnN0cnVjdEZyb21PYmplY3QoJ2FsbG93Jyk7XG4gICAgICAgICAgICBuZXdQb2wuU3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgICAgICBuZXdQb2wuQWN0aW9uID0gYWN0aW9uO1xuICAgICAgICAgICAgbmV3UG9scy5wdXNoKG5ld1BvbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3UG9scztcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGxpbmtNb2RlbCA9IF9wcm9wczIubGlua01vZGVsO1xuICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMyLnB5ZGlvO1xuXG4gICAgICAgIHZhciBzdWJqZWN0c0hpZGRlbiA9IFtdO1xuICAgICAgICBzdWJqZWN0c0hpZGRlbltcInVzZXI6XCIgKyBsaW5rTW9kZWwuZ2V0TGluaygpLlVzZXJMb2dpbl0gPSB0cnVlO1xuICAgICAgICB2YXIgc3ViamVjdERpc2FibGVzID0geyBSRUFEOiBzdWJqZWN0c0hpZGRlbiwgV1JJVEU6IHN1YmplY3RzSGlkZGVuIH07XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSB9LFxuICAgICAgICAgICAgbGlua01vZGVsLmdldExpbmsoKS5VdWlkICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFJlc291cmNlUG9saWNpZXNQYW5lbCwge1xuICAgICAgICAgICAgICAgIHB5ZGlvOiBweWRpbyxcbiAgICAgICAgICAgICAgICByZXNvdXJjZVR5cGU6ICdsaW5rJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5nZXRNZXNzYWdlKCdsaW5rLnZpc2liaWxpdHkuYWR2YW5jZWQnKSxcbiAgICAgICAgICAgICAgICByZXNvdXJjZUlkOiBsaW5rTW9kZWwuZ2V0TGluaygpLlV1aWQsXG4gICAgICAgICAgICAgICAgc2tpcFRpdGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uU2F2ZVBvbGljaWVzOiB0aGlzLm9uU2F2ZVBvbGljaWVzLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgc3ViamVjdHNEaXNhYmxlZDogc3ViamVjdERpc2FibGVzLFxuICAgICAgICAgICAgICAgIHN1YmplY3RzSGlkZGVuOiBzdWJqZWN0c0hpZGRlbixcbiAgICAgICAgICAgICAgICByZWFkb25seTogdGhpcy5wcm9wcy5pc1JlYWRvbmx5KCkgfHwgIWxpbmtNb2RlbC5pc0VkaXRhYmxlKCksXG4gICAgICAgICAgICAgICAgcmVmOiAncG9saWNpZXMnXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5WaXNpYmlsaXR5UGFuZWwuUHJvcFR5cGVzID0ge1xuICAgIHB5ZGlvOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoX3B5ZGlvMlsnZGVmYXVsdCddKS5pc1JlcXVpcmVkLFxuICAgIGxpbmtNb2RlbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKF9MaW5rTW9kZWwyWydkZWZhdWx0J10pLmlzUmVxdWlyZWRcbn07XG5cblZpc2liaWxpdHlQYW5lbCA9ICgwLCBfU2hhcmVDb250ZXh0Q29uc3VtZXIyWydkZWZhdWx0J10pKFZpc2liaWxpdHlQYW5lbCk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBWaXNpYmlsaXR5UGFuZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gyLCBfeDMsIF94NCkgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeDIsIHByb3BlcnR5ID0gX3gzLCByZWNlaXZlciA9IF94NDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeDIgPSBwYXJlbnQ7IF94MyA9IHByb3BlcnR5OyBfeDQgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHlkaW8gPSByZXF1aXJlKCdweWRpbycpO1xuXG52YXIgX3B5ZGlvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvKTtcblxudmFyIF9weWRpb0h0dHBBcGkgPSByZXF1aXJlKCdweWRpby9odHRwL2FwaScpO1xuXG52YXIgX3B5ZGlvSHR0cEFwaTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weWRpb0h0dHBBcGkpO1xuXG52YXIgX3B5ZGlvTW9kZWxOb2RlID0gcmVxdWlyZSgncHlkaW8vbW9kZWwvbm9kZScpO1xuXG52YXIgX3B5ZGlvTW9kZWxOb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvTW9kZWxOb2RlKTtcblxudmFyIF9weWRpb1V0aWxQYXRoID0gcmVxdWlyZSgncHlkaW8vdXRpbC9wYXRoJyk7XG5cbnZhciBfcHlkaW9VdGlsUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weWRpb1V0aWxQYXRoKTtcblxudmFyIF9weWRpb0h0dHBSZXN0QXBpID0gcmVxdWlyZSgncHlkaW8vaHR0cC9yZXN0LWFwaScpO1xuXG52YXIgX21hdGVyaWFsVWkgPSByZXF1aXJlKCdtYXRlcmlhbC11aScpO1xuXG52YXIgX1B5ZGlvJHJlcXVpcmVMaWIgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYignYm9vdCcpO1xuXG52YXIgQWN0aW9uRGlhbG9nTWl4aW4gPSBfUHlkaW8kcmVxdWlyZUxpYi5BY3Rpb25EaWFsb2dNaXhpbjtcbnZhciBMb2FkZXIgPSBfUHlkaW8kcmVxdWlyZUxpYi5Mb2FkZXI7XG5cbnZhciBfUHlkaW8kcmVxdWlyZUxpYjIgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYignY29tcG9uZW50cycpO1xuXG52YXIgTW9kYWxBcHBCYXIgPSBfUHlkaW8kcmVxdWlyZUxpYjIuTW9kYWxBcHBCYXI7XG52YXIgRW1wdHlTdGF0ZVZpZXcgPSBfUHlkaW8kcmVxdWlyZUxpYjIuRW1wdHlTdGF0ZVZpZXc7XG5cbnZhciBTaGFyZVZpZXcgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU2hhcmVWaWV3LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIF9jcmVhdGVDbGFzcyhTaGFyZVZpZXcsIFt7XG4gICAgICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLnByb3BzLnB5ZGlvLk1lc3NhZ2VIYXNoO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgZ2V0TWVzc2FnZTogZnVuY3Rpb24gZ2V0TWVzc2FnZShtZXNzYWdlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/ICdzaGFyZV9jZW50ZXInIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZXNbbmFtZXNwYWNlICsgKG5hbWVzcGFjZSA/IFwiLlwiIDogXCJcIikgKyBtZXNzYWdlSWRdIHx8IG1lc3NhZ2VJZDtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VJZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXNSZWFkb25seTogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICBmdW5jdGlvbiBTaGFyZVZpZXcocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNoYXJlVmlldyk7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2hhcmVWaWV3LnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVzb3VyY2VzOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRNb2RlbDogbnVsbCxcbiAgICAgICAgICAgIHNoYXJlVHlwZTogcHJvcHMuZGVmYXVsdFNoYXJlVHlwZSB8fCAnTElOS1MnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNoYXJlVmlldywgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9hZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGFwaSA9IG5ldyBfcHlkaW9IdHRwUmVzdEFwaS5TaGFyZVNlcnZpY2VBcGkoX3B5ZGlvSHR0cEFwaTJbJ2RlZmF1bHQnXS5nZXRSZXN0Q2xpZW50KCkpO1xuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgX3B5ZGlvSHR0cFJlc3RBcGkuUmVzdExpc3RTaGFyZWRSZXNvdXJjZXNSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXF1ZXN0LlNoYXJlVHlwZSA9IF9weWRpb0h0dHBSZXN0QXBpLkxpc3RTaGFyZWRSZXNvdXJjZXNSZXF1ZXN0TGlzdFNoYXJlVHlwZS5jb25zdHJ1Y3RGcm9tT2JqZWN0KHRoaXMuc3RhdGUuc2hhcmVUeXBlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlN1YmplY3QgPSB0aGlzLnByb3BzLnN1YmplY3Q7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QuT3duZWRCeVN1YmplY3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICBhcGkubGlzdFNoYXJlZFJlc291cmNlcyhyZXF1ZXN0KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHJlc291cmNlczogcmVzLlJlc291cmNlcyB8fCBbXSwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRMb25nZXN0UGF0aCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb25nZXN0UGF0aChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUuQXBwZWFyc0luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcGF0aDogbm9kZS5QYXRoLCBiYXNlbmFtZTogbm9kZS5QYXRoIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGF0aHMgPSB7fTtcbiAgICAgICAgICAgIG5vZGUuQXBwZWFyc0luLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIHBhdGhzW2EuUGF0aF0gPSBhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHBhdGhzKTtcbiAgICAgICAgICAgIGtleXMuc29ydCgpO1xuICAgICAgICAgICAgdmFyIGxvbmdlc3QgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBfcHlkaW9VdGlsUGF0aDJbJ2RlZmF1bHQnXS5nZXRCYXNlbmFtZShsb25nZXN0KTtcbiAgICAgICAgICAgIGlmICghbGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHBhdGhzW2xvbmdlc3RdLldzTGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBwYXRoOiBsb25nZXN0LCBhcHBlYXJzSW46IHBhdGhzW2xvbmdlc3RdLCBiYXNlbmFtZTogbGFiZWwgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ29UbycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnb1RvKGFwcGVhcnNJbikge1xuICAgICAgICAgICAgdmFyIFBhdGggPSBhcHBlYXJzSW4uUGF0aDtcbiAgICAgICAgICAgIHZhciBXc0xhYmVsID0gYXBwZWFyc0luLldzTGFiZWw7XG4gICAgICAgICAgICB2YXIgV3NVdWlkID0gYXBwZWFyc0luLldzVXVpZDtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZpcnN0IHNlZ21lbnQgKHdzIHNsdWcpXG4gICAgICAgICAgICB2YXIgcGF0aGVzID0gUGF0aC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgcGF0aGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgcHlkaW9Ob2RlID0gbmV3IF9weWRpb01vZGVsTm9kZTJbJ2RlZmF1bHQnXShwYXRoZXMuam9pbignLycpKTtcbiAgICAgICAgICAgIHB5ZGlvTm9kZS5nZXRNZXRhZGF0YSgpLnNldCgncmVwb3NpdG9yeV9pZCcsIFdzVXVpZCk7XG4gICAgICAgICAgICBweWRpb05vZGUuZ2V0TWV0YWRhdGEoKS5zZXQoJ3JlcG9zaXRvcnlfbGFiZWwnLCBXc0xhYmVsKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHlkaW8uZ29UbyhweWRpb05vZGUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBfc3RhdGUubG9hZGluZztcbiAgICAgICAgICAgIHZhciByZXNvdXJjZXMgPSBfc3RhdGUucmVzb3VyY2VzO1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMucHlkaW87XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG5cbiAgICAgICAgICAgIHZhciBtID0gZnVuY3Rpb24gbShpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBweWRpby5NZXNzYWdlSGFzaFsnc2hhcmVfY2VudGVyLicgKyBpZF07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb3VyY2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIga0EgPSBhLk5vZGUuUGF0aDtcbiAgICAgICAgICAgICAgICB2YXIga0IgPSBiLk5vZGUuUGF0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4ga0EgPT09IGtCID8gMCA6IGtBID4ga0IgPyAxIDogLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBleHRlbnNpb25zID0gcHlkaW8uUmVnaXN0cnkuZ2V0RmlsZXNFeHRlbnNpb25zKCk7XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlLCB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfSkgfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVGNScsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjRUVFRUVFJywgcGFkZGluZzogJzNweCAyMHB4JywgaGVpZ2h0OiA1MCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgX21hdGVyaWFsVWkuU2VsZWN0RmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2hhcmVUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSwgaSwgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBzaGFyZVR5cGU6IHYgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVTdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogMTYwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5NZW51SXRlbSwgeyB2YWx1ZTogXCJMSU5LU1wiLCBwcmltYXJ5VGV4dDogbSgyNDMpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuTWVudUl0ZW0sIHsgdmFsdWU6IFwiQ0VMTFNcIiwgcHJpbWFyeVRleHQ6IG0oMjUwKSB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KExvYWRlciwgeyBzdHlsZTogeyBoZWlnaHQ6IDMwMCwgZmxleDogMSB9IH0pLFxuICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIHJlc291cmNlcy5sZW5ndGggPT09IDAgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoRW1wdHlTdGF0ZVZpZXcsIHtcbiAgICAgICAgICAgICAgICAgICAgcHlkaW86IHB5ZGlvLFxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3NOYW1lOiBcIm1kaSBtZGktc2hhcmUtdmFyaWFudFwiLFxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5VGV4dElkOiBtKDEzMSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGZsZXg6IDEsIGhlaWdodDogMjAwLCBwYWRkaW5nOiAnMTAwcHggMCcsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgcmVzb3VyY2VzLmxlbmd0aCA+IDAgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIF9tYXRlcmlhbFVpLkxpc3QsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZmxleDogMSwgbWluSGVpZ2h0OiAzMDAsIG92ZXJmbG93WTogJ2F1dG8nLCBwYWRkaW5nVG9wOiAwIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzLm1hcChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2dldExvbmdlc3RQYXRoID0gX3RoaXMyLmdldExvbmdlc3RQYXRoKHJlcy5Ob2RlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFwcGVhcnNJbiA9IF9nZXRMb25nZXN0UGF0aC5hcHBlYXJzSW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZW5hbWUgPSBfZ2V0TG9uZ2VzdFBhdGguYmFzZW5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VuYW1lLmluZGV4T2YoJy4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uID0gJ21kaSBtZGktZm9sZGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dCA9IF9weWRpb1V0aWxQYXRoMlsnZGVmYXVsdCddLmdldEZpbGVFeHRlbnNpb24oYmFzZW5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb25zLmhhcyhleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZXh0ZW5zaW9ucyRnZXQgPSBleHRlbnNpb25zLmdldChleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb250SWNvbiA9IF9leHRlbnNpb25zJGdldC5mb250SWNvbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uID0gJ21kaSBtZGktJyArIGZvbnRJY29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSAnbWRpIG1kaS1maWxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLkxpbmsgJiYgcmVzLkxpbmsuTGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlbmFtZSA9IHJlcy5MaW5rLkxhYmVsICsgJyAoJyArIGJhc2VuYW1lICsgJyknO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkxpc3RJdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ6IGJhc2VuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRleHQ6IHJlcy5MaW5rID8gbSgyNTEpICsgJzogJyArIHJlcy5MaW5rLkRlc2NyaXB0aW9uIDogbSgyODQpLnJlcGxhY2UoJyVzJywgcmVzLkNlbGxzLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlYXJzSW4gPyBfdGhpczIuZ29UbyhhcHBlYXJzSW4pIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhYXBwZWFyc0luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRJY29uOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5Gb250SWNvbiwgeyBjbGFzc05hbWU6IGljb24gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2hhcmVWaWV3O1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cblNoYXJlVmlldy5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBtZXNzYWdlczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3QsXG4gICAgZ2V0TWVzc2FnZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGlzUmVhZG9ubHk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIFNoYXJlVmlld01vZGFsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1NoYXJlVmlld01vZGFsJyxcblxuICAgIG1peGluczogW0FjdGlvbkRpYWxvZ01peGluXSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlhbG9nVGl0bGU6ICcnLFxuICAgICAgICAgICAgZGlhbG9nU2l6ZTogJ2xnJyxcbiAgICAgICAgICAgIGRpYWxvZ1BhZGRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlhbG9nSXNNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBkaWFsb2dTY3JvbGxCb2R5OiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBzdWJtaXQ6IGZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9IH0sXG4gICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChNb2RhbEFwcEJhciwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnB5ZGlvLk1lc3NhZ2VIYXNoWydzaGFyZV9jZW50ZXIuOTgnXSxcbiAgICAgICAgICAgICAgICBzaG93TWVudUljb25CdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICAgIGljb25DbGFzc05hbWVSaWdodDogJ21kaSBtZGktY2xvc2UnLFxuICAgICAgICAgICAgICAgIG9uUmlnaHRJY29uQnV0dG9uVG91Y2hUYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFNoYXJlVmlldywgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgZmxleDogMSB9LCBvblJlcXVlc3RDbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczMuZGlzbWlzcygpO1xuICAgICAgICAgICAgICAgIH0gfSkpXG4gICAgICAgICk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0cy5TaGFyZVZpZXcgPSBTaGFyZVZpZXc7XG5leHBvcnRzLlNoYXJlVmlld01vZGFsID0gU2hhcmVWaWV3TW9kYWw7XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDctMjAxNyBDaGFybGVzIGR1IEpldSAtIEFic3RyaXVtIFNBUyA8dGVhbSAoYXQpIHB5ZC5pbz5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFB5ZGlvLlxuICpcbiAqIFB5ZGlvIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogUHlkaW8gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggUHlkaW8uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVGhlIGxhdGVzdCBjb2RlIGNhbiBiZSBmb3VuZCBhdCA8aHR0cHM6Ly9weWRpby5jb20+LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX1NoYXJlQ29udGV4dENvbnN1bWVyID0gcmVxdWlyZSgnLi4vU2hhcmVDb250ZXh0Q29uc3VtZXInKTtcblxudmFyIF9TaGFyZUNvbnRleHRDb25zdW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaGFyZUNvbnRleHRDb25zdW1lcik7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDb21wb25lbnQgPSBfcmVxdWlyZS5Db21wb25lbnQ7XG52YXIgUHJvcFR5cGVzID0gX3JlcXVpcmUuUHJvcFR5cGVzO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWknKTtcblxudmFyIEljb25CdXR0b24gPSBfcmVxdWlyZTIuSWNvbkJ1dHRvbjtcblxudmFyIF9yZXF1aXJlMyA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpL3N0eWxlcycpO1xuXG52YXIgbXVpVGhlbWVhYmxlID0gX3JlcXVpcmUzLm11aVRoZW1lYWJsZTtcblxudmFyIEFjdGlvbkJ1dHRvbiA9IChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhBY3Rpb25CdXR0b24sIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uQnV0dG9uKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uQnV0dG9uKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihBY3Rpb25CdXR0b24ucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQWN0aW9uQnV0dG9uLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIHBhbGV0dGUgPSB0aGlzLnByb3BzLm11aVRoZW1lLnBhbGV0dGU7XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAnICsgcGFsZXR0ZS5wcmltYXJ5MUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNiwgaGVpZ2h0OiAzNixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOCxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCA2cHgnLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeTFDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlLnJvb3QsXG4gICAgICAgICAgICAgICAgaWNvblN0eWxlOiBzdHlsZS5pY29uLFxuICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMucHJvcHMuY2FsbGJhY2sgfHwgdGhpcy5wcm9wcy5vblRvdWNoVGFwLFxuICAgICAgICAgICAgICAgIGljb25DbGFzc05hbWU6IFwibWRpIG1kaS1cIiArIHRoaXMucHJvcHMubWRpSWNvbixcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB0aGlzLnByb3BzLmdldE1lc3NhZ2UodGhpcy5wcm9wcy5tZXNzYWdlSWQsIHRoaXMucHJvcHMubWVzc2FnZUNvcmVOYW1lc3BhY2UgPyAnJyA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgdG9vbHRpcFBvc2l0aW9uOiB0aGlzLnByb3BzLnRvb2x0aXBQb3NpdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQWN0aW9uQnV0dG9uO1xufSkoQ29tcG9uZW50KTtcblxuQWN0aW9uQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgICBjYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Ub3VjaFRhcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbWRpSWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtZXNzYWdlSWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkFjdGlvbkJ1dHRvbiA9ICgwLCBfU2hhcmVDb250ZXh0Q29uc3VtZXIyWydkZWZhdWx0J10pKEFjdGlvbkJ1dHRvbik7XG5BY3Rpb25CdXR0b24gPSBtdWlUaGVtZWFibGUoKShBY3Rpb25CdXR0b24pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBY3Rpb25CdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDE3IENoYXJsZXMgZHUgSmV1IC0gQWJzdHJpdW0gU0FTIDx0ZWFtIChhdCkgcHlkLmlvPlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUHlkaW8uXG4gKlxuICogUHlkaW8gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBQeWRpbyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBQeWRpby4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBUaGUgbGF0ZXN0IGNvZGUgY2FuIGJlIGZvdW5kIGF0IDxodHRwczovL3B5ZGlvLmNvbT4uXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOyByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfbWF0ZXJpYWxVaSA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpJyk7XG5cbnZhciBfbWF0ZXJpYWxVaVN0eWxlcyA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpL3N0eWxlcycpO1xuXG52YXIgRWRpdG9yVGFiID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEVkaXRvclRhYiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBFZGl0b3JUYWIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFZGl0b3JUYWIpO1xuXG4gICAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKEVkaXRvclRhYi5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhFZGl0b3JUYWIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciB0YWJzID0gX3Byb3BzLnRhYnM7XG4gICAgICAgICAgICB2YXIgYWN0aXZlID0gX3Byb3BzLmFjdGl2ZTtcbiAgICAgICAgICAgIHZhciBvbkNoYW5nZSA9IF9wcm9wcy5vbkNoYW5nZTtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcbiAgICAgICAgICAgIHZhciBtdWlUaGVtZSA9IF9wcm9wcy5tdWlUaGVtZTtcbiAgICAgICAgICAgIHZhciBwcmltYXJ5MUNvbG9yID0gbXVpVGhlbWUucGFsZXR0ZS5wcmltYXJ5MUNvbG9yO1xuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogX2V4dGVuZHMoeyBkaXNwbGF5OiAnZmxleCcgfSwgc3R5bGUpIH0sXG4gICAgICAgICAgICAgICAgdGFicy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWN0aXZlID0gdC5WYWx1ZSA9PT0gYWN0aXZlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRmxhdEJ1dHRvbiwgeyBsYWJlbDogdC5MYWJlbCwgb25Ub3VjaFRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHQuVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcHJpbWFyeTogaXNBY3RpdmUsIHN0eWxlOiBpc0FjdGl2ZSA/IHsgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkICcgKyBwcmltYXJ5MUNvbG9yIH0gOiB7IGJvcmRlckJvdHRvbTogMCB9IH0pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBzdHlsZTogeyBmbGV4OiAxIH0gfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRWRpdG9yVGFiO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbkVkaXRvclRhYiA9ICgwLCBfbWF0ZXJpYWxVaVN0eWxlcy5tdWlUaGVtZWFibGUpKCkoRWRpdG9yVGFiKTtcblxudmFyIEVkaXRvclRhYkNvbnRlbnQgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG4gICAgX2luaGVyaXRzKEVkaXRvclRhYkNvbnRlbnQsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuICAgIGZ1bmN0aW9uIEVkaXRvclRhYkNvbnRlbnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFZGl0b3JUYWJDb250ZW50KTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihFZGl0b3JUYWJDb250ZW50LnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEVkaXRvclRhYkNvbnRlbnQsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgdGFicyA9IF9wcm9wczIudGFicztcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSBfcHJvcHMyLmFjdGl2ZTtcblxuICAgICAgICAgICAgdmFyIGFjdGl2ZUNvbnRlbnQgPSBudWxsO1xuICAgICAgICAgICAgdGFicy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodC5WYWx1ZSA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQgPSB0LkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVDb250ZW50O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEVkaXRvclRhYkNvbnRlbnQ7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxudmFyIEdlbmVyaWNFZGl0b3IgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQzKSB7XG4gICAgX2luaGVyaXRzKEdlbmVyaWNFZGl0b3IsIF9SZWFjdCRDb21wb25lbnQzKTtcblxuICAgIGZ1bmN0aW9uIEdlbmVyaWNFZGl0b3IocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdlbmVyaWNFZGl0b3IpO1xuXG4gICAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKEdlbmVyaWNFZGl0b3IucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy50YWJzLmxlZnQubGVuZ3RoID8gcHJvcHMudGFicy5sZWZ0WzBdLlZhbHVlIDogJycsXG4gICAgICAgICAgICByaWdodDogcHJvcHMudGFicy5yaWdodC5sZW5ndGggPyBwcm9wcy50YWJzLnJpZ2h0WzBdLlZhbHVlIDogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoR2VuZXJpY0VkaXRvciwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUubGVmdCAmJiBwcm9wcy50YWJzLmxlZnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxlZnQ6IHByb3BzLnRhYnMubGVmdFswXS5WYWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5yaWdodCAmJiBwcm9wcy50YWJzLnJpZ2h0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByaWdodDogcHJvcHMudGFicy5yaWdodFswXS5WYWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciB0YWJzID0gX3Byb3BzMy50YWJzO1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IF9wcm9wczMuaGVhZGVyO1xuICAgICAgICAgICAgdmFyIG9uU2F2ZUFjdGlvbiA9IF9wcm9wczMub25TYXZlQWN0aW9uO1xuICAgICAgICAgICAgdmFyIG9uQ2xvc2VBY3Rpb24gPSBfcHJvcHMzLm9uQ2xvc2VBY3Rpb247XG4gICAgICAgICAgICB2YXIgb25SZXZlcnRBY3Rpb24gPSBfcHJvcHMzLm9uUmV2ZXJ0QWN0aW9uO1xuICAgICAgICAgICAgdmFyIHNhdmVFbmFibGVkID0gX3Byb3BzMy5zYXZlRW5hYmxlZDtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IF9wcm9wczMuc3R5bGU7XG4gICAgICAgICAgICB2YXIgcHlkaW8gPSBfcHJvcHMzLnB5ZGlvO1xuICAgICAgICAgICAgdmFyIGVkaXRvck9uZUNvbHVtbiA9IF9wcm9wczMuZWRpdG9yT25lQ29sdW1uO1xuICAgICAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IF9zdGF0ZS5sZWZ0O1xuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gX3N0YXRlLnJpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoZWRpdG9yT25lQ29sdW1uKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWVyZ2VkID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0YWJzLmxlZnQpLCBfdG9Db25zdW1hYmxlQXJyYXkodGFicy5yaWdodCkpO1xuICAgICAgICAgICAgICAgIHZhciBoYXNMYXN0ID0gbWVyZ2VkLmZpbHRlcihmdW5jdGlvbiAodGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWIuQWx3YXlzTGFzdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzTGFzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShtZXJnZWQuZmlsdGVyKGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGFiLkFsd2F5c0xhc3Q7XG4gICAgICAgICAgICAgICAgICAgIH0pKSwgW2hhc0xhc3RbMF1dKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBfZXh0ZW5kcyh7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGhlaWdodDogJzEwMCUnIH0sIHN0eWxlKSB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0VFRUVFRScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5SYWlzZWRCdXR0b24sIHsgZGlzYWJsZWQ6ICFzYXZlRW5hYmxlZCwgcHJpbWFyeTogdHJ1ZSwgbGFiZWw6IHB5ZGlvLk1lc3NhZ2VIYXNoWyc1MyddLCBvblRvdWNoVGFwOiBvblNhdmVBY3Rpb24gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuRmxhdEJ1dHRvbiwgeyBkaXNhYmxlZDogIXNhdmVFbmFibGVkLCBsYWJlbDogcHlkaW8uTWVzc2FnZUhhc2hbJzYyOCddLCBvblRvdWNoVGFwOiBvblJldmVydEFjdGlvbiwgc3R5bGU6IHsgbWFyZ2luTGVmdDogMTAgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5JY29uQnV0dG9uLCB7IGljb25DbGFzc05hbWU6IFwibWRpIG1kaS1jbG9zZVwiLCB0b29sdGlwOiBweWRpby5NZXNzYWdlSGFzaFsnODYnXSwgb25Ub3VjaFRhcDogb25DbG9zZUFjdGlvbiwgc3R5bGU6IHsgbWFyZ2luTGVmdDogMTAgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZmxleDogMSwgcGFkZGluZzogJzEwcHggMjBweCcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoRWRpdG9yVGFiLCB7IHRhYnM6IG1lcmdlZCwgYWN0aXZlOiBsZWZ0LCBzdHlsZTogeyBmbGV4OiAxIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsZWZ0OiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkRpdmlkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXg6IDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogX2V4dGVuZHMoeyBvdmVyZmxvd1k6ICdhdXRvJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmc6IDEwIH0sIHRhYnMubGVmdFN0eWxlKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEVkaXRvclRhYkNvbnRlbnQsIHsgdGFiczogbWVyZ2VkLCBhY3RpdmU6IGxlZnQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogX2V4dGVuZHMoeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBoZWlnaHQ6ICcxMDAlJyB9LCBzdHlsZSkgfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nOiAnMTBweCAyMHB4IDIwcHgnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZmxleDogMSwgcGFkZGluZ1JpZ2h0OiAyMCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBwYWRkaW5nVG9wOiAxOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuUmFpc2VkQnV0dG9uLCB7IGRpc2FibGVkOiAhc2F2ZUVuYWJsZWQsIHByaW1hcnk6IHRydWUsIGxhYmVsOiBweWRpby5NZXNzYWdlSGFzaFsnNTMnXSwgb25Ub3VjaFRhcDogb25TYXZlQWN0aW9uIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9tYXRlcmlhbFVpLkZsYXRCdXR0b24sIHsgZGlzYWJsZWQ6ICFzYXZlRW5hYmxlZCwgbGFiZWw6IHB5ZGlvLk1lc3NhZ2VIYXNoWyc2MjgnXSwgb25Ub3VjaFRhcDogb25SZXZlcnRBY3Rpb24sIHN0eWxlOiB7IG1hcmdpbkxlZnQ6IDEwIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX21hdGVyaWFsVWkuSWNvbkJ1dHRvbiwgeyBpY29uQ2xhc3NOYW1lOiBcIm1kaSBtZGktY2xvc2VcIiwgdG9vbHRpcDogcHlkaW8uTWVzc2FnZUhhc2hbJzg2J10sIG9uVG91Y2hUYXA6IG9uQ2xvc2VBY3Rpb24sIHN0eWxlOiB7IG1hcmdpbkxlZnQ6IDEwIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEVkaXRvclRhYiwgeyB0YWJzOiB0YWJzLmxlZnQsIGFjdGl2ZTogbGVmdCwgc3R5bGU6IHsgZmxleDogMSB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbGVmdDogdmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEVkaXRvclRhYiwgeyB0YWJzOiB0YWJzLnJpZ2h0LCBhY3RpdmU6IHJpZ2h0LCBzdHlsZTogeyBmbGV4OiAxIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyByaWdodDogdmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfbWF0ZXJpYWxVaS5EaXZpZGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4OiAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IF9leHRlbmRzKHsgb3ZlcmZsb3dZOiAnYXV0bycsIHdpZHRoOiAnNTAlJywgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgI2UwZTBlMCcsIHBhZGRpbmc6IDEwIH0sIHRhYnMubGVmdFN0eWxlKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEVkaXRvclRhYkNvbnRlbnQsIHsgdGFiczogdGFicy5sZWZ0LCBhY3RpdmU6IGxlZnQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBfZXh0ZW5kcyh7IG92ZXJmbG93WTogJ2F1dG8nLCB3aWR0aDogJzUwJScsIHBhZGRpbmc6IDEwIH0sIHRhYnMucmlnaHRTdHlsZSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChFZGl0b3JUYWJDb250ZW50LCB7IHRhYnM6IHRhYnMucmlnaHQsIGFjdGl2ZTogcmlnaHQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gR2VuZXJpY0VkaXRvcjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBHZW5lcmljRWRpdG9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDctMjAxNyBDaGFybGVzIGR1IEpldSAtIEFic3RyaXVtIFNBUyA8dGVhbSAoYXQpIHB5ZC5pbz5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFB5ZGlvLlxuICpcbiAqIFB5ZGlvIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogUHlkaW8gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggUHlkaW8uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVGhlIGxhdGVzdCBjb2RlIGNhbiBiZSBmb3VuZCBhdCA8aHR0cHM6Ly9weWRpby5jb20+LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfbWF0ZXJpYWxVaSA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpJyk7XG5cbnZhciBfY29tcG9zaXRlQ29tcG9zaXRlQ2FyZCA9IHJlcXVpcmUoJy4uL2NvbXBvc2l0ZS9Db21wb3NpdGVDYXJkJyk7XG5cbnZhciBfY29tcG9zaXRlQ29tcG9zaXRlQ2FyZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGVDb21wb3NpdGVDYXJkKTtcblxudmFyIF9jZWxsc0NlbGxDYXJkID0gcmVxdWlyZSgnLi4vY2VsbHMvQ2VsbENhcmQnKTtcblxudmFyIF9jZWxsc0NlbGxDYXJkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NlbGxzQ2VsbENhcmQpO1xuXG52YXIgSW5mb1BhbmVsID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEluZm9QYW5lbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBJbmZvUGFuZWwocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZm9QYW5lbCk7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW5mb1BhbmVsLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBwb3BvdmVyT3BlbjogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5mb1BhbmVsLCBbe1xuICAgICAgICBrZXk6ICdvcGVuUG9wb3ZlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuUG9wb3ZlcihldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvcG92ZXJPcGVuOiB0cnVlLCBwb3BvdmVyQW5jaG9yOiBldmVudC50YXJnZXQgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBweWRpbyA9IF9wcm9wcy5weWRpbztcbiAgICAgICAgICAgIHZhciBub2RlID0gX3Byb3BzLm5vZGU7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmlzUm9vdCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBQeWRpb1dvcmtzcGFjZXMuSW5mb1BhbmVsQ2FyZCxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgcGFkZGluZzogMCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfY2VsbHNDZWxsQ2FyZDJbJ2RlZmF1bHQnXSwgeyBjZWxsSWQ6IHB5ZGlvLnVzZXIuYWN0aXZlUmVwb3NpdG9yeSwgcHlkaW86IHB5ZGlvLCBtb2RlOiAnaW5mb1BhbmVsJyB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBQeWRpb1dvcmtzcGFjZXMuSW5mb1BhbmVsQ2FyZCxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgcGFkZGluZzogMCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfY29tcG9zaXRlQ29tcG9zaXRlQ2FyZDJbJ2RlZmF1bHQnXSwgeyBub2RlOiBub2RlLCBweWRpbzogcHlkaW8sIG1vZGU6ICdpbmZvUGFuZWwnIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEluZm9QYW5lbDtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbmZvUGFuZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwNy0yMDE3IENoYXJsZXMgZHUgSmV1IC0gQWJzdHJpdW0gU0FTIDx0ZWFtIChhdCkgcHlkLmlvPlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUHlkaW8uXG4gKlxuICogUHlkaW8gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBQeWRpbyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBQeWRpby4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBUaGUgbGF0ZXN0IGNvZGUgY2FuIGJlIGZvdW5kIGF0IDxodHRwczovL3B5ZGlvLmNvbT4uXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9weWRpb1V0aWxYbWwgPSByZXF1aXJlKCdweWRpby91dGlsL3htbCcpO1xuXG52YXIgX3B5ZGlvVXRpbFhtbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weWRpb1V0aWxYbWwpO1xuXG52YXIgX3B5ZGlvSHR0cEFwaSA9IHJlcXVpcmUoJ3B5ZGlvL2h0dHAvYXBpJyk7XG5cbnZhciBfcHlkaW9IdHRwQXBpMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvSHR0cEFwaSk7XG5cbnZhciBfcHlkaW8gPSByZXF1aXJlKCdweWRpbycpO1xuXG52YXIgX3B5ZGlvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B5ZGlvKTtcblxudmFyIF9weWRpb0h0dHBSZXN0QXBpID0gcmVxdWlyZSgncHlkaW8vaHR0cC9yZXN0LWFwaScpO1xuXG52YXIgX1B5ZGlvJHJlcXVpcmVMaWIgPSBfcHlkaW8yWydkZWZhdWx0J10ucmVxdWlyZUxpYignYm9vdCcpO1xuXG52YXIgbW9tZW50ID0gX1B5ZGlvJHJlcXVpcmVMaWIubW9tZW50O1xuXG52YXIgU2hhcmVIZWxwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNoYXJlSGVscGVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2hhcmVIZWxwZXIpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTaGFyZUhlbHBlciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnbWFpbGVyU3VwcG9ydGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1haWxlclN1cHBvcnRlZChweWRpbykge1xuICAgICAgICAgICAgcmV0dXJuIHB5ZGlvLlBhcmFtZXRlcnMuZ2V0KCd2YWxpZE1haWxlcicpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRBdXRob3JpemF0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdXRob3JpemF0aW9ucyhweWRpbykge1xuXG4gICAgICAgICAgICB2YXIgcGx1Z2luQ29uZmlncyA9IHB5ZGlvLmdldFBsdWdpbkNvbmZpZ3MoXCJhY3Rpb24uc2hhcmVcIik7XG4gICAgICAgICAgICB2YXIgYXV0aG9yaXphdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgZm9sZGVyX3B1YmxpY19saW5rOiBwbHVnaW5Db25maWdzLmdldChcIkVOQUJMRV9GT0xERVJfUFVCTElDX0xJTktcIiksXG4gICAgICAgICAgICAgICAgZm9sZGVyX3dvcmtzcGFjZXM6IHBsdWdpbkNvbmZpZ3MuZ2V0KFwiRU5BQkxFX0ZPTERFUl9JTlRFUk5BTF9TSEFSSU5HXCIpLFxuICAgICAgICAgICAgICAgIGZpbGVfcHVibGljX2xpbms6IHBsdWdpbkNvbmZpZ3MuZ2V0KFwiRU5BQkxFX0ZJTEVfUFVCTElDX0xJTktcIiksXG4gICAgICAgICAgICAgICAgZmlsZV93b3Jrc3BhY2VzOiBwbHVnaW5Db25maWdzLmdldChcIkVOQUJMRV9GSUxFX0lOVEVSTkFMX1NIQVJJTkdcIiksXG4gICAgICAgICAgICAgICAgZWRpdGFibGVfaGFzaDogcGx1Z2luQ29uZmlncy5nZXQoXCJIQVNIX1VTRVJfRURJVEFCTEVcIiksXG4gICAgICAgICAgICAgICAgaGFzaF9taW5fbGVuZ3RoOiBwbHVnaW5Db25maWdzLmdldChcIkhBU0hfTUlOX0xFTkdUSFwiKSB8fCA2LFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX21hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWF4X2V4cGlyYXRpb246IHBsdWdpbkNvbmZpZ3MuZ2V0KFwiRklMRV9NQVhfRVhQSVJBVElPTlwiKSxcbiAgICAgICAgICAgICAgICBtYXhfZG93bmxvYWRzOiBwbHVnaW5Db25maWdzLmdldChcIkZJTEVfTUFYX0RPV05MT0FEXCIpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHBhc3NNYW5kYXRvcnkgPSBwbHVnaW5Db25maWdzLmdldChcIlNIQVJFX0ZPUkNFX1BBU1NXT1JEXCIpO1xuICAgICAgICAgICAgaWYgKHBhc3NNYW5kYXRvcnkpIHtcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9ucy5wYXNzd29yZF9tYW5kYXRvcnkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbnMucGFzc3dvcmRfcGxhY2Vob2xkZXIgPSBwYXNzTWFuZGF0b3J5ID8gcHlkaW8uTWVzc2FnZUhhc2hbJ3NoYXJlX2NlbnRlci4xNzYnXSA6IHB5ZGlvLk1lc3NhZ2VIYXNoWydzaGFyZV9jZW50ZXIuMTQ4J107XG4gICAgICAgICAgICByZXR1cm4gYXV0aG9yaXphdGlvbnM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2J1aWxkUHVibGljVXJsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkUHVibGljVXJsKHB5ZGlvLCBsaW5rSGFzaCkge1xuICAgICAgICAgICAgdmFyIHNob3J0Rm9ybSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gcHlkaW8uUGFyYW1ldGVycztcbiAgICAgICAgICAgIGlmIChzaG9ydEZvcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy4uLicgKyBwYXJhbXMuZ2V0KCdQVUJMSUNfQkFTRVVSSScpICsgJy8nICsgbGlua0hhc2g7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBweWRpby5nZXRGcm9udGVuZFVybCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1cmwucHJvdG9jb2wgKyAnLy8nICsgdXJsLmhvc3QgKyBwYXJhbXMuZ2V0KCdQVUJMSUNfQkFTRVVSSScpICsgJy8nICsgbGlua0hhc2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHB5ZGlvIHtQeWRpb31cbiAgICAgICAgICogQHBhcmFtIG5vZGUge0FqeHBOb2RlfVxuICAgICAgICAgKiBAcmV0dXJuIHt7cHJldmlldzogYm9vbGVhbiwgd3JpdGVhYmxlOiBib29sZWFufX1cbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdub2RlSGFzRWRpdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vZGVIYXNFZGl0b3IocHlkaW8sIG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghbm9kZS5nZXRNZXRhZGF0YSgpLmhhcygnbWltZV9oYXNfcHJldmlld19lZGl0b3InKSkge1xuICAgICAgICAgICAgICAgIHZhciBlZGl0b3JzID0gcHlkaW8uUmVnaXN0cnkuZmluZEVkaXRvcnNGb3JNaW1lKG5vZGUuZ2V0QWp4cE1pbWUoKSk7XG4gICAgICAgICAgICAgICAgZWRpdG9ycyA9IGVkaXRvcnMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmlkICE9PSAnZWRpdG9yLmJyb3dzZXInICYmIGUuaWQgIT09ICdlZGl0b3Iub3RoZXInO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciB3cml0ZWFibGUgPSBlZGl0b3JzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jYW5Xcml0ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBub2RlLmdldE1ldGFkYXRhKCkuc2V0KFwibWltZV9oYXNfcHJldmlld19lZGl0b3JcIiwgZWRpdG9ycy5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgICAgICBub2RlLmdldE1ldGFkYXRhKCkuc2V0KFwibWltZV9oYXNfd3JpdGVhYmxlX2VkaXRvclwiLCB3cml0ZWFibGUubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByZXZpZXc6IG5vZGUuZ2V0TWV0YWRhdGEoKS5nZXQoXCJtaW1lX2hhc19wcmV2aWV3X2VkaXRvclwiKSxcbiAgICAgICAgICAgICAgICB3cml0ZWFibGU6IG5vZGUuZ2V0TWV0YWRhdGEoKS5nZXQoXCJtaW1lX2hhc193cml0ZWFibGVfZWRpdG9yXCIpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBweWRpbyB7UHlkaW99XG4gICAgICAgICAqIEBwYXJhbSBsaW5rTW9kZWwge0NvbXBvc2l0ZU1vZGVsfVxuICAgICAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBpbGVMYXlvdXREYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBpbGVMYXlvdXREYXRhKHB5ZGlvLCBsaW5rTW9kZWwpIHtcblxuICAgICAgICAgICAgLy8gU2VhcmNoIHJlZ2lzdHJ5IGZvciB0ZW1wbGF0ZSBub2RlcyBzdGFydGluZyB3aXRoIG1pbmlzaXRlX1xuICAgICAgICAgICAgdmFyIHRtcGwgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY3VycmVudEV4dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBub2RlID0gbGlua01vZGVsLmdldE5vZGUoKTtcbiAgICAgICAgICAgIGlmIChub2RlLmlzTGVhZigpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEV4dCA9IG5vZGUuZ2V0QWp4cE1pbWUoKTtcbiAgICAgICAgICAgICAgICB0bXBsID0gX3B5ZGlvVXRpbFhtbDJbJ2RlZmF1bHQnXS5YUGF0aFNlbGVjdE5vZGVzKHB5ZGlvLmdldFhtbFJlZ2lzdHJ5KCksIFwiLy90ZW1wbGF0ZVtjb250YWlucyhAbmFtZSwgJ3VuaXF1ZV9wcmV2aWV3XycpXVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG1wbCA9IF9weWRpb1V0aWxYbWwyWydkZWZhdWx0J10uWFBhdGhTZWxlY3ROb2RlcyhweWRpby5nZXRYbWxSZWdpc3RyeSgpLCBcIi8vdGVtcGxhdGVbY29udGFpbnMoQG5hbWUsICdtaW5pc2l0ZV8nKV1cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdG1wbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG1wbC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3sgTEFZT1VUX05BTUU6IHRtcGxbMF0uZ2V0QXR0cmlidXRlKCdlbGVtZW50JyksIExBWU9VVF9MQUJFTDogJycgfV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3J0VGhlbWUgPSBweWRpby5QYXJhbWV0ZXJzLmdldCgndGhlbWUnKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIHRtcGwubWFwKGZ1bmN0aW9uICh4bWxOb2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoZW1lID0geG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ3RoZW1lJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoZW1lICYmIHRoZW1lICE9PSBjcnRUaGVtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0geG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ2VsZW1lbnQnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHhtbE5vZGUuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0geG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFeHQgJiYgbmFtZSA9PT0gXCJ1bmlxdWVfcHJldmlld19maWxlXCIgJiYgIVNoYXJlSGVscGVyLm5vZGVIYXNFZGl0b3IocHlkaW8sIG5vZGUpLnByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIHRoaXMgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1lc3NhZ2VIYXNoW2xhYmVsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBNZXNzYWdlSGFzaFtsYWJlbF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IHhtbE5vZGUuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goeyBMQVlPVVRfTkFNRTogbmFtZSwgTEFZT1VUX0VMRU1FTlQ6IGVsZW1lbnQsIExBWU9VVF9MQUJFTDogbGFiZWwgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2ZvcmNlTWFpbGVyT2xkU2Nob29sJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvcmNlTWFpbGVyT2xkU2Nob29sKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbC5weWRpby5nZXRQbHVnaW5Db25maWdzKFwiYWN0aW9uLnNoYXJlXCIpLmdldChcIkVNQUlMX0lOVklURV9FWFRFUk5BTFwiKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncXJjb2RlRW5hYmxlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBxcmNvZGVFbmFibGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbC5weWRpby5nZXRQbHVnaW5Db25maWdzKFwiYWN0aW9uLnNoYXJlXCIpLmdldChcIkNSRUFURV9RUkNPREVcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIG5vZGVcbiAgICAgICAgICogQHBhcmFtIGNlbGxNb2RlbFxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0VXNlcnNcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2VuZENlbGxJbnZpdGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRDZWxsSW52aXRhdGlvbihub2RlLCBjZWxsTW9kZWwsIHRhcmdldFVzZXJzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoKSB7fSA6IGFyZ3VtZW50c1szXTtcblxuICAgICAgICAgICAgdmFyIF9TaGFyZUhlbHBlciRwcmVwYXJlRW1haWwgPSBTaGFyZUhlbHBlci5wcmVwYXJlRW1haWwobm9kZSwgbnVsbCwgY2VsbE1vZGVsKTtcblxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlSWQgPSBfU2hhcmVIZWxwZXIkcHJlcGFyZUVtYWlsLnRlbXBsYXRlSWQ7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVEYXRhID0gX1NoYXJlSGVscGVyJHByZXBhcmVFbWFpbC50ZW1wbGF0ZURhdGE7XG5cbiAgICAgICAgICAgIHZhciBtYWlsID0gbmV3IF9weWRpb0h0dHBSZXN0QXBpLk1haWxlck1haWwoKTtcbiAgICAgICAgICAgIHZhciBhcGkgPSBuZXcgX3B5ZGlvSHR0cFJlc3RBcGkuTWFpbGVyU2VydmljZUFwaShfcHlkaW9IdHRwQXBpMlsnZGVmYXVsdCddLmdldFJlc3RDbGllbnQoKSk7XG4gICAgICAgICAgICBtYWlsLlRvID0gW107XG4gICAgICAgICAgICB2YXIgaWdub3JlZCA9IDA7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXRVc2VycykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHUgPSB0YXJnZXRVc2Vyc1trXTtcbiAgICAgICAgICAgICAgICB2YXIgdG8gPSBuZXcgX3B5ZGlvSHR0cFJlc3RBcGkuTWFpbGVyVXNlcigpO1xuICAgICAgICAgICAgICAgIGlmICh1LklkbVVzZXIgJiYgdS5JZG1Vc2VyLkxvZ2luICYmIHUuSWRtVXNlci5BdHRyaWJ1dGVzICYmICh1LklkbVVzZXIuQXR0cmlidXRlc1snaGFzRW1haWwnXSB8fCB1LklkbVVzZXIuQXR0cmlidXRlc1snZW1haWwnXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG8uVXVpZCA9IHUuSWRtVXNlci5Mb2dpbjtcbiAgICAgICAgICAgICAgICAgICAgbWFpbC5Uby5wdXNoKHRvKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZ25vcmVkKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VzID0gX3B5ZGlvMlsnZGVmYXVsdCddLmdldEluc3RhbmNlKCkuTWVzc2FnZUhhc2g7XG4gICAgICAgICAgICBpZiAobWFpbC5Uby5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtYWlsLlRlbXBsYXRlSWQgPSB0ZW1wbGF0ZUlkO1xuICAgICAgICAgICAgICAgIG1haWwuVGVtcGxhdGVEYXRhID0gdGVtcGxhdGVEYXRhO1xuICAgICAgICAgICAgICAgIGFwaS5zZW5kKG1haWwpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBtZXNzYWdlc1snY29yZS5tYWlsZXIuMSddLnJlcGxhY2UoJyVzJywgbWFpbC5Uby5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChpZ25vcmVkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtc2cgKz0gJyAnICsgbWVzc2FnZXNbJ2NvcmUubWFpbGVyLmVudHJpZXMuaWdub3JlZCddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfcHlkaW8yWydkZWZhdWx0J10uZ2V0SW5zdGFuY2UoKS5VSS5kaXNwbGF5TWVzc2FnZSgnU1VDQ0VTUycsIG1zZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9weWRpbzJbJ2RlZmF1bHQnXS5nZXRJbnN0YW5jZSgpLlVJLmRpc3BsYXlNZXNzYWdlKCdFUlJPUicsIG1lc3NhZ2VzWydjb3JlLm1haWxlci5lbnRyaWVzLmlnbm9yZWQnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIG5vZGUge05vZGV9XG4gICAgICAgICAqIEBwYXJhbSBsaW5rTW9kZWwge0xpbmtNb2RlbH1cbiAgICAgICAgICogQHBhcmFtIGNlbGxNb2RlbCB7Q2VsbE1vZGVsfVxuICAgICAgICAgKiBAcmV0dXJuIHt7dGVtcGxhdGVJZDogc3RyaW5nLCB0ZW1wbGF0ZURhdGE6IHt9LCBtZXNzYWdlOiBzdHJpbmcsIGxpbmtNb2RlbDogKn19XG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlcGFyZUVtYWlsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBhcmVFbWFpbChub2RlKSB7XG4gICAgICAgICAgICB2YXIgbGlua01vZGVsID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHZhciBjZWxsTW9kZWwgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVEYXRhID0ge307XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVJZCA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgdXNlciA9IHB5ZGlvLnVzZXI7XG4gICAgICAgICAgICBpZiAodXNlci5nZXRQcmVmZXJlbmNlKFwiZGlzcGxheU5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZURhdGFbXCJJbnZpdGVyXCJdID0gdXNlci5nZXRQcmVmZXJlbmNlKFwiZGlzcGxheU5hbWVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlRGF0YVtcIkludml0ZXJcIl0gPSB1c2VyLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxpbmtNb2RlbCkge1xuICAgICAgICAgICAgICAgIHZhciBsaW5rT2JqZWN0ID0gbGlua01vZGVsLmdldExpbmsoKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5pc0xlYWYoKSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkID0gXCJQdWJsaWNGaWxlXCI7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRGF0YVtcIkZpbGVOYW1lXCJdID0gbGlua09iamVjdC5MYWJlbCB8fCBub2RlLmdldExhYmVsKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVJZCA9IFwiUHVibGljRm9sZGVyXCI7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRGF0YVtcIkZvbGRlck5hbWVcIl0gPSBsaW5rT2JqZWN0LkxhYmVsIHx8IG5vZGUuZ2V0TGFiZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVEYXRhW1wiTGlua1BhdGhcIl0gPSBcIi9wdWJsaWMvXCIgKyBsaW5rT2JqZWN0LkxpbmtIYXNoO1xuICAgICAgICAgICAgICAgIGlmIChsaW5rT2JqZWN0Lk1heERvd25sb2Fkcykge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZURhdGFbXCJNYXhEb3dubG9hZHNcIl0gPSBsaW5rT2JqZWN0Lk1heERvd25sb2FkcyArIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaW5rT2JqZWN0LkFjY2Vzc0VuZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IG1vbWVudChuZXcgRGF0ZShsaW5rT2JqZWN0LkFjY2Vzc0VuZCAqIDEwMDApKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVEYXRhW1wiRXhwaXJlXCJdID0gbS5mb3JtYXQoJ0xMJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkID0gXCJDZWxsXCI7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVEYXRhW1wiQ2VsbFwiXSA9IGNlbGxNb2RlbC5nZXRMYWJlbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlSWQsIHRlbXBsYXRlRGF0YTogdGVtcGxhdGVEYXRhLCBtZXNzYWdlOiBtZXNzYWdlLCBsaW5rTW9kZWw6IGxpbmtNb2RlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTaGFyZUhlbHBlcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNoYXJlSGVscGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4iXX0=
