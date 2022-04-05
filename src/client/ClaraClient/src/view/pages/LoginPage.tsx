import React, { Component } from "react";
import { LoginForm } from "../components/LoginForm";

interface LoginPageProps {
    pageRedirectFunction: Function;

}

export class LoginPage extends Component<LoginPageProps, any> {
    constructor(props: LoginPageProps) {
        super(props);

    }

    private buildComponent(){
        let component = (
            <>
                <LoginForm redirectPageFunction={this.props.pageRedirectFunction}/>
            </>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }

}