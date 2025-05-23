export * from '../models/AINode';
export * from '../models/AttachmentLink';
export * from '../models/AttachmentPublic';
export * from '../models/AuthForgotPasswordRequest';
export * from '../models/AuthGoogleInitiateResponse';
export * from '../models/AuthResetPasswordRequest';
export * from '../models/AuthVerifyResetTokenRequest';
export * from '../models/CallCreateRequest';
export * from '../models/CompanyCreate';
export * from '../models/CompanyDetail';
export * from '../models/CompanyPublic';
export * from '../models/HTTPValidationError';
export * from '../models/MyPlan';
export * from '../models/OrderCreateRequest';
export * from '../models/OrderCreateResponse';
export * from '../models/OrderDetail';
export * from '../models/OrderPublic';
export * from '../models/PageAttachmentPublic';
export * from '../models/PageCompanyPublic';
export * from '../models/PageOrderPublic';
export * from '../models/PageRolePublic';
export * from '../models/PageUserPublic';
export * from '../models/PageVoicePublic';
export * from '../models/Plan';
export * from '../models/PointsLogPublic';
export * from '../models/PresignedUrlCreate';
export * from '../models/PresignedUrlInfo';
export * from '../models/RefreshToken';
export * from '../models/RolePublic';
export * from '../models/SimpleResponse';
export * from '../models/SpeechToSpeechResponse';
export * from '../models/TextToSpeechCreate';
export * from '../models/TextToSpeechResponse';
export * from '../models/Token';
export * from '../models/UserCreate';
export * from '../models/UserPublic';
export * from '../models/UserRegister';
export * from '../models/UserUpdate';
export * from '../models/UserUpdatePassword';
export * from '../models/UserVoiceAddRequest';
export * from '../models/UserVoicesAssignmentRequest';
export * from '../models/ValidationError';
export * from '../models/ValidationErrorLocInner';
export * from '../models/VoiceActionResponse';
export * from '../models/VoiceDetail';
export * from '../models/VoicePublic';

import { AINode } from '../models/AINode';
import { AttachmentLink } from '../models/AttachmentLink';
import { AttachmentPublic } from '../models/AttachmentPublic';
import { AuthForgotPasswordRequest } from '../models/AuthForgotPasswordRequest';
import { AuthGoogleInitiateResponse } from '../models/AuthGoogleInitiateResponse';
import { AuthResetPasswordRequest } from '../models/AuthResetPasswordRequest';
import { AuthVerifyResetTokenRequest } from '../models/AuthVerifyResetTokenRequest';
import { CallCreateRequest } from '../models/CallCreateRequest';
import { CompanyCreate } from '../models/CompanyCreate';
import { CompanyDetail } from '../models/CompanyDetail';
import { CompanyPublic } from '../models/CompanyPublic';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { MyPlan } from '../models/MyPlan';
import { OrderCreateRequest } from '../models/OrderCreateRequest';
import { OrderCreateResponse } from '../models/OrderCreateResponse';
import { OrderDetail } from '../models/OrderDetail';
import { OrderPublic } from '../models/OrderPublic';
import { PageAttachmentPublic } from '../models/PageAttachmentPublic';
import { PageCompanyPublic } from '../models/PageCompanyPublic';
import { PageOrderPublic } from '../models/PageOrderPublic';
import { PageRolePublic } from '../models/PageRolePublic';
import { PageUserPublic } from '../models/PageUserPublic';
import { PageVoicePublic } from '../models/PageVoicePublic';
import { Plan } from '../models/Plan';
import { PointsLogPublic } from '../models/PointsLogPublic';
import { PresignedUrlCreate } from '../models/PresignedUrlCreate';
import { PresignedUrlInfo } from '../models/PresignedUrlInfo';
import { RefreshToken } from '../models/RefreshToken';
import { RolePublic } from '../models/RolePublic';
import { SimpleResponse } from '../models/SimpleResponse';
import { SpeechToSpeechResponse } from '../models/SpeechToSpeechResponse';
import { TextToSpeechCreate   , TextToSpeechCreateFormatEnum   , TextToSpeechCreateUseMemoryCacheEnum        } from '../models/TextToSpeechCreate';
import { TextToSpeechResponse } from '../models/TextToSpeechResponse';
import { Token } from '../models/Token';
import { UserCreate } from '../models/UserCreate';
import { UserPublic } from '../models/UserPublic';
import { UserRegister } from '../models/UserRegister';
import { UserUpdate } from '../models/UserUpdate';
import { UserUpdatePassword } from '../models/UserUpdatePassword';
import { UserVoiceAddRequest } from '../models/UserVoiceAddRequest';
import { UserVoicesAssignmentRequest } from '../models/UserVoicesAssignmentRequest';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { VoiceActionResponse } from '../models/VoiceActionResponse';
import { VoiceDetail } from '../models/VoiceDetail';
import { VoicePublic } from '../models/VoicePublic';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "TextToSpeechCreateFormatEnum",
    "TextToSpeechCreateUseMemoryCacheEnum",
]);

let typeMap: {[index: string]: any} = {
    "AINode": AINode,
    "AttachmentLink": AttachmentLink,
    "AttachmentPublic": AttachmentPublic,
    "AuthForgotPasswordRequest": AuthForgotPasswordRequest,
    "AuthGoogleInitiateResponse": AuthGoogleInitiateResponse,
    "AuthResetPasswordRequest": AuthResetPasswordRequest,
    "AuthVerifyResetTokenRequest": AuthVerifyResetTokenRequest,
    "CallCreateRequest": CallCreateRequest,
    "CompanyCreate": CompanyCreate,
    "CompanyDetail": CompanyDetail,
    "CompanyPublic": CompanyPublic,
    "HTTPValidationError": HTTPValidationError,
    "MyPlan": MyPlan,
    "OrderCreateRequest": OrderCreateRequest,
    "OrderCreateResponse": OrderCreateResponse,
    "OrderDetail": OrderDetail,
    "OrderPublic": OrderPublic,
    "PageAttachmentPublic": PageAttachmentPublic,
    "PageCompanyPublic": PageCompanyPublic,
    "PageOrderPublic": PageOrderPublic,
    "PageRolePublic": PageRolePublic,
    "PageUserPublic": PageUserPublic,
    "PageVoicePublic": PageVoicePublic,
    "Plan": Plan,
    "PointsLogPublic": PointsLogPublic,
    "PresignedUrlCreate": PresignedUrlCreate,
    "PresignedUrlInfo": PresignedUrlInfo,
    "RefreshToken": RefreshToken,
    "RolePublic": RolePublic,
    "SimpleResponse": SimpleResponse,
    "SpeechToSpeechResponse": SpeechToSpeechResponse,
    "TextToSpeechCreate": TextToSpeechCreate,
    "TextToSpeechResponse": TextToSpeechResponse,
    "Token": Token,
    "UserCreate": UserCreate,
    "UserPublic": UserPublic,
    "UserRegister": UserRegister,
    "UserUpdate": UserUpdate,
    "UserUpdatePassword": UserUpdatePassword,
    "UserVoiceAddRequest": UserVoiceAddRequest,
    "UserVoicesAssignmentRequest": UserVoicesAssignmentRequest,
    "ValidationError": ValidationError,
    "ValidationErrorLocInner": ValidationErrorLocInner,
    "VoiceActionResponse": VoiceActionResponse,
    "VoiceDetail": VoiceDetail,
    "VoicePublic": VoicePublic,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
