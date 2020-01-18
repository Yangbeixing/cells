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


import ApiClient from '../ApiClient';
import JobsContextMetaFilterType from './JobsContextMetaFilterType';
import ServiceQuery from './ServiceQuery';





/**
* The JobsContextMetaFilter model module.
* @module model/JobsContextMetaFilter
* @version 1.0
*/
export default class JobsContextMetaFilter {
    /**
    * Constructs a new <code>JobsContextMetaFilter</code>.
    * @alias module:model/JobsContextMetaFilter
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>JobsContextMetaFilter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobsContextMetaFilter} obj Optional instance to populate.
    * @return {module:model/JobsContextMetaFilter} The populated <code>JobsContextMetaFilter</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsContextMetaFilter();

            
            
            

            if (data.hasOwnProperty('Type')) {
                obj['Type'] = JobsContextMetaFilterType.constructFromObject(data['Type']);
            }
            if (data.hasOwnProperty('Query')) {
                obj['Query'] = ServiceQuery.constructFromObject(data['Query']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/JobsContextMetaFilterType} Type
    */
    Type = undefined;
    /**
    * @member {module:model/ServiceQuery} Query
    */
    Query = undefined;








}


