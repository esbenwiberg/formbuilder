import { Pivot, PivotItem, Stack } from "@fluentui/react";
import { FunctionComponent } from "react";
import React from "react";
import { IFormGrouping } from "../../../../formbuilder/interfaces/IFormGrouping";

interface IGroupContainerProps {
    groupings: Array<IFormGrouping>;
}

export const MyTabGroupContainer: FunctionComponent<IGroupContainerProps> = props => {
    return (
        <Pivot styles={{root:{paddingBottom: "30px"}}} key="tabgroupcontainer">
            { props.children }
        </Pivot>
    )
}

export const myTabGroupRender = (grouping: IFormGrouping, children: Array<any>) : JSX.Element => (
    <PivotItem
        key={grouping.groupKey}
        headerText={grouping.displayName}
        children={
            <Stack tokens={{ childrenGap: 8 }}>
                { children }
            </Stack>
        }
    />
)
