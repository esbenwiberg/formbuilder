import { FunctionComponent,  useEffect, useState } from 'react';
import { mergeStyles, MessageBar, MessageBarType, Shimmer, ShimmerElementType } from '@fluentui/react';
import useIsMounted from '../../../../../hooks/useIsMounted';
import { lang } from '../../../../../models/language/Language';
import React from "react";
import { ILoadingProps } from '../../../../interfaces/ILoadingProps';

const wrapperClass = mergeStyles({
	padding: 2,
	selectors: {
		'& > .ms-Shimmer-container': {
			margin: '5px 0',
		},
	},
});

const shimmerLabel = [
	{ type: ShimmerElementType.line, height: 20 },
];

const shimmerInput = [
	{ type: ShimmerElementType.line, height: 30  },
];

const propertyShimmer = (idx: number) => (
	<div className={wrapperClass} key={`formbuilder-shimmer-line-${idx}`}>
		<Shimmer shimmerElements={shimmerLabel} width="35%" />
		<Shimmer shimmerElements={shimmerInput} />
	</div>
)

export const FluentFormShimmer: FunctionComponent<ILoadingProps> = props => {

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
					key="formbuilder-shimmer-bar"
					messageBarType={ MessageBarType.error }
					styles={{root: { width: "100%" }}}
				>
					{ props.timeoutMessage ?? lang.texts.areas.common.schemaNotFound }
				</MessageBar>
			: 	<div style={{paddingBottom: "10px"}} key="formbuilder-shimmer">
					{ [1,2,3,4,5].map((_, idx) => propertyShimmer(idx)) }
				</div>
	)
}