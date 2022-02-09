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



/**
 * 
 * @export
 * @interface KafkaRequestAllOf
 */
export interface KafkaRequestAllOf {
    /**
     * Values: [accepted, preparing, provisioning, ready, failed, deprovision, deleting] 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'status'?: string;
    /**
     * Name of Cloud used to deploy. For example AWS
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'cloud_provider'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof KafkaRequestAllOf
     */
    'multi_az': boolean;
    /**
     * Values will be regions of specific cloud provider. For example: us-east-1 for AWS
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'region'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'owner'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'bootstrap_server_host'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'updated_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'failed_reason'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'version'?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'instance_type'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof KafkaRequestAllOf
     */
    'reauthentication_enabled': boolean;
    /**
     * 
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    'kafka_storage_size'?: string;
}

