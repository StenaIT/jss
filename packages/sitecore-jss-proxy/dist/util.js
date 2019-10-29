"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryParseJson = function (jsonString) {
    try {
        var json = JSON.parse(jsonString);
        // handle non-exception-throwing cases
        if (json && typeof json === 'object' && json !== null) {
            return json;
        }
    }
    catch (e) {
        console.error("error parsing json string '" + jsonString + "'", e);
    }
    return null;
};
exports.buildQueryString = function (params) {
    return Object.keys(params)
        .map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]); })
        .join('&');
};
