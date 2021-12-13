import { FunctionComponent, useRef } from 'react';
import { SearchBox } from '@fluentui/react';
import { lang } from '../../../../../../models/language/Language';
import React from "react";
import { debounce } from '../../../../../../utils/common/Debounce';

interface IProps {
	className?: string;
	onChange: (value?: string) => void;
	delay: number;
	disabled?: boolean;
	searchPlaceHolder?: string;
	onFocus?: (event: any) => void;
}

export const DelayedSearchBox: FunctionComponent<IProps> = props => {

	let _searchTimer = useRef<NodeJS.Timer>();

	const OnChange = (value?: string) : void => {
		var newTimer = debounce(_searchTimer.current, () => props.onChange(value), props.delay);
		_searchTimer.current = newTimer;
    }
	
	return 	<SearchBox 
				className={props.className}
				placeholder={props.searchPlaceHolder ?? lang.texts.areas.list.searchDefaultPlaceholder} 
				onChange={(e: any, newValue: string | undefined) => OnChange(newValue)}
				disabled={props.disabled}
				styles={{ root: { maxWidth: "450px" }}}
				autoFocus
				autoComplete={'off'}
				onFocus={props.onFocus}
			/>
}
