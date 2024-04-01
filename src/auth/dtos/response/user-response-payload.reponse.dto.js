"use strict";
exports.__esModule = true;
exports.UserResponsePayload = void 0;
var UserResponsePayload = /** @class */ (function () {
    function UserResponsePayload(user) {
        (this.email = user.email),
            (this.sub = user.id),
            (this.role = user.role),
            (this.pwdChangeRequired = user.pwd_change_required),
            (this.id = user.id),
            (this.emailChangeRequired = user.email_change_required);
    }
    return UserResponsePayload;
}());
exports.UserResponsePayload = UserResponsePayload;
