/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

/**
* The InstallTLSSelfSigned model module.
* @module model/InstallTLSSelfSigned
* @version 1.0
*/

var InstallTLSSelfSigned = (function () {
    /**
    * Constructs a new <code>InstallTLSSelfSigned</code>.
    * @alias module:model/InstallTLSSelfSigned
    * @class
    */

    function InstallTLSSelfSigned() {
        _classCallCheck(this, InstallTLSSelfSigned);

        this.Hostnames = undefined;
    }

    /**
    * Constructs a <code>InstallTLSSelfSigned</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InstallTLSSelfSigned} obj Optional instance to populate.
    * @return {module:model/InstallTLSSelfSigned} The populated <code>InstallTLSSelfSigned</code> instance.
    */

    InstallTLSSelfSigned.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstallTLSSelfSigned();

            if (data.hasOwnProperty('Hostnames')) {
                obj['Hostnames'] = _ApiClient2['default'].convertToType(data['Hostnames'], ['String']);
            }
        }
        return obj;
    };

    /**
    * @member {Array.<String>} Hostnames
    */
    return InstallTLSSelfSigned;
})();

exports['default'] = InstallTLSSelfSigned;
module.exports = exports['default'];
