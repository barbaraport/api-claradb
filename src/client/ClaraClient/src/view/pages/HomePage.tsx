import React, { Component } from "react";
import { Menu } from "../components/menu/Menu";

interface HomePageProps {
    pageRedirectFunction: Function;

}

export class HomePage extends Component<HomePageProps, any> {
    constructor(props: HomePageProps) {
        super(props);

    }

    private buildComponent(){
        let component = (
            <>
               <Menu></Menu>
            </>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }

}