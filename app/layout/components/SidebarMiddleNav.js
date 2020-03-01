import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboards"
        >
            <SidebarMenu.Item title="Analytics" to='/dashboards/analytics' exact />
            <SidebarMenu.Item title="Projects" to='/dashboards/projects' exact />
        </SidebarMenu.Item>

        { /* -------- Devices ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-clone"></i>}
            title="Devices"
        >
            <SidebarMenu.Item title="Table" to='/devices/table' exact />
            <SidebarMenu.Item title="Widgets" to='/devices/widgets' exact />
            <SidebarMenu.Item title="New Device" to='/devices/form' exact />
        </SidebarMenu.Item>
        { /* -------- Recipes ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Recipes"
        >
            <SidebarMenu.Item title="Table" to='/recipes/table' exact />
            <SidebarMenu.Item title="New Recipe" to='/recipes/form' exact />
        </SidebarMenu.Item>
        { /* -------- Events ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-toggle-on"></i>}
            title="Events"
        >
            <SidebarMenu.Item title="Charts" to='/events/charts' />
        </SidebarMenu.Item>
    </SidebarMenu >
);
