import { INavLink, INavLinkGroup, INavStyles, Nav, Stack } from "@fluentui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { IFormGrouping } from "../../../formbuilder/interfaces/IFormGrouping";
import { BuildTrees } from "./TreeBuilder";
import React from "react";

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
        
        let groupNames = props.groupings.map(_ => _.displayName);
        // expand initial selected groups
        let alterItem = (item: INavLink) => (item.isExpanded = selectedKey?.startsWith(item.key as string));

        let groups = BuildTrees<INavLink>(groupNames, 'name', 'key', 'links', alterItem);
        return groups;
    }

    useEffect(() => {
        let links = buildNavLinks();
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
            <div style={{position: "relative", top: "-170px", left: "400px" }}>
                <Stack tokens={{ childrenGap: 8 }} key="askjrlfd">
                    { (props.children as Array<JSX.Element>).filter(_ => _.props["data-groupname"].startsWith(selectedKey)) }
                </Stack>
            </div>
        </div>
    )
}

export const myNavGroupRender = (grouping: IFormGrouping, children: Array<any>) : JSX.Element => (
    <div key={grouping.groupKey} data-groupname={grouping.displayName}>
        <h3>{grouping.displayName}</h3>
        { children }
    </div>
)
