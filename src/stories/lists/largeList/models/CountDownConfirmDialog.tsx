import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text } from '@fluentui/react';
import { DefaultButton, Dialog, DialogFooter, DialogType, PrimaryButton } from '@fluentui/react';

export interface ICountDownConfirmDialogInfo {
	title: string;
	subText: string;
	count: number;
	callback: () => void;
	dismissCallback: () => void;
}

export interface ICountDownConfirmDialogProps {
	info: ICountDownConfirmDialogInfo;
	confirmText?: string;
	cancelText?: string;
}

export const CountDownConfirmDialog: FunctionComponent<ICountDownConfirmDialogProps> = props => {

	const [info, setInfo] = useState<ICountDownConfirmDialogInfo>(props.info);
	useEffect(() => setInfo(props.info), [props.info]);

	useEffect(() => setCount(info?.count), [info]);

	const [count, setCount] = useState<number>(null);

	useEffect(() => {
		if (count === null || count === undefined || count < 0 || info === null || info === undefined) return;

		// exit when we reach 0
		if (count === 0) {
			info.callback();
			setInfo(null);
			return;
		}
	
		// save intervalId to clear the interval when the
		// component re-renders
		const intervalId = setInterval(() => {
			setCount(count - 1);
		}, 1000);
	
		// clear interval on re-render to avoid memory leaks
		return () => clearInterval(intervalId);
		// add timeLeft as a dependency to re-rerun the effect
		// when we update it
	  }, [info, count]);

	return 	info ?
				<Dialog
					hidden={false}
					onDismiss={() => {location.reload()}}
					dialogContentProps={{
						type: DialogType.normal,
						title: info.title,
						subText: info.subText,
						showCloseButton: false
					}}
					modalProps={{
						isBlocking: true,
						styles: { main: { width: 450, textAlign: "center" } }
					}}
				>
					<Text variant="xxLarge">{ count }</Text>
					<DialogFooter>
						<DefaultButton onClick={() => { info.callback(); setInfo(null); }} text={props.confirmText ?? "I know what I'm doing!"} />
						<PrimaryButton onClick={() => { info.dismissCallback(); setInfo(null); }} text={props.cancelText ?? "Cancel"} />
					</DialogFooter>
				</Dialog>
			: null;
}
