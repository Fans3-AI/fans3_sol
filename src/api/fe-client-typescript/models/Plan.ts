/**
 * [TEST]Voice Agent API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Plan {
    'id': number;
    'name'?: string | null;
    'interval': string;
    'tier': string;
    'origAmount': number;
    'amount': number;
    'points': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "string",
            "format": ""
        },
        {
            "name": "tier",
            "baseName": "tier",
            "type": "string",
            "format": ""
        },
        {
            "name": "origAmount",
            "baseName": "orig_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "points",
            "baseName": "points",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Plan.attributeTypeMap;
    }

    public constructor() {
    }
}
