import { FunctionComponent,  useEffect, useState } from 'react';
import { MessageBar, MessageBarType, Spinner } from '@fluentui/react';
import React from "react";
import useIsMounted from '../../../../../hooks/useIsMounted';

export interface ILoadingSpinnerProps {
	timeout?: number;
	timeoutMessage?: string;
}

export const FluentSpinner: FunctionComponent<ILoadingSpinnerProps> = props => {

	const [timedOut, setTimedOut] = useState(false);

	const isMounted = useIsMounted();

	useEffect(() => {
		setTimeout(() => {
			if (!isMounted()) return;
			setTimedOut(true);
		}, props.timeout ?? 2000);
	}, [])

    return (
		timedOut 
			? 	<MessageBar
					messageBarType={ MessageBarType.error }
					styles={{root: { width: "100%" }}}
				>
					{ props.timeoutMessage ?? "Schema not found!" }
				</MessageBar>
			: 	<Spinner />
	)
}