import { INavLink, INavLinkGroup, INavStyles, Nav, Stack } from "@fluentui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { BuildTrees } from "./TreeBuilder";
import React from "react";
import { IFormGrouping } from "@wiberg/formbuilder";

const navStyles: Partial<INavStyles> = {
    root: {
        width: '300px',
        // height: 'calc(100vh - 500px)',
        boxSizing: 'border-box',
        overflowY: 'auto'
    }
};

interface IProps {
    groupings: Array<IFormGrouping>;
}

export const MyNavGroupContainer: FunctionComponent<IProps> = props => {
        
    const [navLinks, setNavLinks] = useState<Array<INavLink>>();
    const [selectedKey, setselectedKey] = useState<string | undefined>();

    const buildNavLinks = (): INavLink[] => {
        
        const groupNames = props.groupings.map(_ => _.displayName);
        // expand initial selected groups
        const alterItem = (item: INavLink) => (item.isExpanded = selectedKey?.startsWith(item.key as string));

        const groups = BuildTrees<INavLink>(groupNames, 'name', 'key', 'links', alterItem);
        return groups;
    }

    useEffect(() => {
        const links = buildNavLinks();
        setNavLinks(links);
    }, [props.groupings])

    const linkClickHandler = (event: any, item: INavLink | undefined) : void => {
        setselectedKey(item?.key);
    }

    return (
        <div key="testhestost">
                <Nav
                    key="mynavgroup"
                    onLinkClick={linkClickHandler}
                    groups={[{ links: navLinks } as INavLinkGroup]}
                    styles={navStyles}
                    // initialSelectedKey={ undefined }
                    selectedKey={ selectedKey }
                />
            <div style={{position: "relative", top: "-130px", left: "400px" }}>
                <Stack tokens={{ childrenGap: 8 }}>
                    { (props.children as Array<JSX.Element>).filter(_ => _.props.grouping.displayName?.startsWith(selectedKey)) }
                </Stack>
            </div>
        </div>
    )
}

export const MyNavGroupRender: React.FC<{grouping: IFormGrouping}> = ({grouping, children}) => (
    <div key={grouping.groupKey}>
        <h3>{grouping.displayName}</h3>
        { children }
    </div>
)
