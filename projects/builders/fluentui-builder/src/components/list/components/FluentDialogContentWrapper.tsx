import React, { FunctionComponent, useEffect, useState } from "react";
import { IFormBuilderListEditorDialogContentOptions } from '@wiberg/formbuilder';


export const FluentDialogContentWrapper: FunctionComponent<IFormBuilderListEditorDialogContentOptions> = ({renderDelay, fallback, children}) => {

	const [ready, setReady] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setReady(true);
		}, renderDelay ?? 367);
	}, [])

    if (!ready) return <>{fallback ?? null}</>;
    return <>{children}</>
}