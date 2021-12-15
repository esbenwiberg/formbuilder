import React from "react";

const validationMessageStyles = {
    animationName: "css-0, css-13",
    animationDuration: "0.367s",
    animationTimingFunction: "cubic-bezier(0.1, 0.9, 0.2, 1)",
    animationFillMode: "both",
    fontFamily: `"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif`,
    fontSize: "12px",
    fontWeight: 400,
    color: "rgb(164, 38, 44)",
    margin: "0px",
    paddingBottom: "5px",
    display: "flex",
    alignItems: "center"
}

// TODO: move out of here (this is FluentUI specific) (ewi)
export const fluentUiValidationMessageElement = (message: string) : JSX.Element => {
    return <span><div role="alert"><p className="ms-TextField-errorMessage" style={validationMessageStyles}><span data-automation-id="error-message">{message}</span></p></div></span>
}