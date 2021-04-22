export const SET_AUTHED_USER ='SET_AUTHED_USER'
export const Clear_AUTHED_USER = "Clear_AUTHED_USER";

export function setAuthedUser (id) {
    return {
        type:SET_AUTHED_USER,
        id,
    }
}

export function ClearAuthedUser() {
    return {
      type: Clear_AUTHED_USER,
    };
}