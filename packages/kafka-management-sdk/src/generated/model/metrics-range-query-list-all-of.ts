/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage Kafka instances.
 *
 * The version of the OpenAPI document: 1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RangeQuery } from './range-query';

/**
 * 
 * @export
 * @interface MetricsRangeQueryListAllOf
 */
export interface MetricsRangeQueryListAllOf {
    /**
     * 
     * @type {string}
     * @memberof MetricsRangeQueryListAllOf
     */
    'kind'?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsRangeQueryListAllOf
     */
    'id'?: string;
    /**
     * 
     * @type {Array<RangeQuery>}
     * @memberof MetricsRangeQueryListAllOf
     */
    'items'?: Array<RangeQuery>;
}

