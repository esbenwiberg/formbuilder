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
            {
                React.Children.map(props.children, (_, idx) => (
                    <PivotItem
                        key={props.groupings[idx].groupKey}
                        headerText={props.groupings[idx].displayName}
                        >
                        {_}
                    </PivotItem>
                ))
            }
        </Pivot>
    )
}

export const MyTabGroupRender: React.FC<{grouping: IFormGrouping}> = ({grouping, children}) => (
    <Stack tokens={{ childrenGap: 8 }}>
        { children }
    </Stack>
)

