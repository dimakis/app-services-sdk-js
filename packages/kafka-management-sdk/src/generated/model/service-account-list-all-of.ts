/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage Kafka instances.
 *
 * The version of the OpenAPI document: 1.10.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ServiceAccountListItem } from './service-account-list-item';

/**
 * 
 * @export
 * @interface ServiceAccountListAllOf
 */
export interface ServiceAccountListAllOf {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountListAllOf
     */
    'kind': string;
    /**
     * 
     * @type {Array<ServiceAccountListItem>}
     * @memberof ServiceAccountListAllOf
     */
    'items': Array<ServiceAccountListItem>;
}

