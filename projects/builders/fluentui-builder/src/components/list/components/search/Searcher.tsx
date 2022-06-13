import { FunctionComponent, useRef, useEffect } from 'react';
import { DelayedSearchBox } from './DelayedSearchBox';
import React from "react";

interface IProps {
	items: Array<any>
	searchFields: Array<string>;
	onSearch: (filtered: Array<any>, searchText: string, initial?: boolean) => void;
	enableTextHighlight?: boolean;
	highLightElements?: () => Array<Element>;
	className?: string;
	delay?: number;
	disabled?: boolean;
	searchPlaceHolder?: string;
	customSearchFunction?: (searchValueParts: Array<string>) => Array<any>;
	filterOnItemsChange?: boolean;
	minCharsForSearch?: number;
	onInputFocus?: (event: any) => void;
}

export const Searcher: FunctionComponent<IProps> = props => {

	let searchText = useRef<string>("");
	let highlightInProgess = useRef<boolean>(false);

	useEffect(() => {
		if (props.filterOnItemsChange && searchText.current)
			filterItems(searchText.current);
	}, [props.items])
 
	useEffect(() => { 
		filterItems(searchText.current, true);
	}, [props.customSearchFunction])

	useEffect(() => {
		let newValueParts = searchText.current.split(" ");
		highlightSearchText(newValueParts);
	}, [props.highLightElements])

	const filterItems = (value: string, initial?: boolean) : void => {
		if (!props.items || !props.items.length) return;
		if (props.minCharsForSearch != null && value !== undefined && value.length != 0 && value.length < props.minCharsForSearch) return;
		let newValueParts = value.split(" ");

		let filteredItems = [];
		if (props.customSearchFunction)
			filteredItems = props.customSearchFunction(newValueParts);
		else {
			let propertyGetter = (item: any, field: string) => item[field];
			filteredItems = props.items.filter(item => props.searchFields.some(sf => newValueParts.every(part => new RegExp(`${part}`,"i").test(propertyGetter(item, sf)))));
		}
		
		if (!initial)
			props.onSearch(filteredItems, value);
		if (props.enableTextHighlight && props.highLightElements)
			highlightSearchText(newValueParts);
	}

	const highlightSearchText = (searchTextParts: Array<string>) : void => {
		if (!props.highLightElements) return;
		if (highlightInProgess.current) return;
		highlightInProgess.current = true;
		// clear highlight on new search
		var highlightElements = props.highLightElements();
		highlightElements.forEach(_ => _.innerHTML = _.innerHTML.replace(/(<span class="formbuilder-searcher-highlight">|<\/span>)/igm, ""));
		// set highlights
		highlightElements.forEach((_) => {
			let html = _.innerHTML;
			
			const tagsRegEx = new RegExp('(<.+?>|&\\w+;)');

			searchTextParts.forEach((searchText, idx) => {
				let minChars = props.minCharsForSearch ?? 0;
				if (searchText.length < minChars) return;
				const htmlParts = html.split(tagsRegEx).filter(Boolean);
				html = htmlParts.map( item =>
					tagsRegEx.test(item)
					  ? item
					  : item.replace(new RegExp(`(${searchText})`, 'ig'), `<span class="formbuilder-searcher-highlight">$1</span>`)
				).join('');
			});
			_.innerHTML = html;
		});
		highlightInProgess.current = false;
    }
	
	return <DelayedSearchBox
				className={`formbuilder-searchbox ${props.className  ? props.className : ""}`}
				delay={props.delay ?? 300}
				disabled={props.disabled}
				searchPlaceHolder={props.searchPlaceHolder} 
				onChange={(text: string | undefined) => { searchText.current = text ?? ""; filterItems(text ?? "")} }
				onFocus={props.onInputFocus}
			/>
}
