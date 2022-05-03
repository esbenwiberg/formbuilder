import { Pivot, PivotItem, Stack } from "@fluentui/react";
import { FunctionComponent } from "react";
import React from "react";
import { IFormGrouping } from "@wiberg/formbuilder";

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

export const myTabGroupRender: React.FC<{grouping: IFormGrouping}> = ({grouping, children}) => (
    <PivotItem
        itemIcon={grouping.validationError ? "Error" : undefined}
        key={grouping.groupKey}
        headerText={grouping.displayName}
        children={
            <Stack tokens={{ childrenGap: 8 }}>
                { children }
            </Stack>
        }
    />
)
