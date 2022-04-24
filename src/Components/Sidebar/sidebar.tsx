import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav, CNavTitle, CNavItem } from '@coreui/react'

export class sidebar extends Component {
         render() {
            return (
                <CSidebar>
                    <CSidebarBrand>Prison Industrial Complex</CSidebarBrand>
                    <CSidebarNav>
                    <CNavItem href="#">Home</CNavItem>
                    <CNavItem href="#">Why Was This Created?</CNavItem>
                    <CNavItem href="#">About</CNavItem>
                    </CSidebarNav>
                </CSidebar>
            );
        }
    }


