import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies oauth2 authentication to the request context.
 */
export class OAuth2PasswordBearerAuthentication implements SecurityAuthentication {
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    public constructor(private accessToken: string) {}

    public getName(): string {
        return "OAuth2PasswordBearer";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class APIKeyHeaderAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "APIKeyHeader";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("x-key", this.apiKey);
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "OAuth2PasswordBearer"?: SecurityAuthentication,
    "APIKeyHeader"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };
export type HttpSignatureConfiguration = unknown; // TODO: Implement

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "OAuth2PasswordBearer"?: OAuth2Configuration,
    "APIKeyHeader"?: ApiKeyConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["OAuth2PasswordBearer"]) {
        authMethods["OAuth2PasswordBearer"] = new OAuth2PasswordBearerAuthentication(
            config["OAuth2PasswordBearer"]["accessToken"]
        );
    }

    if (config["APIKeyHeader"]) {
        authMethods["APIKeyHeader"] = new APIKeyHeaderAuthentication(
            config["APIKeyHeader"]
        );
    }

    return authMethods;
}