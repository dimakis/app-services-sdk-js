/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ResultListPage
 */
export interface ResultListPage {
    /**
     * Total number of entries in the full result set
     * @type {number}
     * @memberof ResultListPage
     */
    total: number;
    /**
     * Current page number (returned for fetch requests)
     * @type {number}
     * @memberof ResultListPage
     */
    page?: number;
    /**
     * Number of entries per page (returned for fetch requests)
     * @type {number}
     * @memberof ResultListPage
     */
    size?: number;
}


