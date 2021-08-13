import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'

// Custom Components
import HeaderOne from './common/headers/header-three';
import HeaderTwo from './common/headers/header-two';
import HeaderThree from './common/headers/header-three';

import FooterOne from "./common/footers/footer-two";
import FooterTwo from "./common/footers/footer-two";
import FooterThree from "./common/footers/footer-two";

// ThemeSettings
import ThemeSettings from "./common/theme-settings"



class App extends Component {
	componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color15.css` );
    }

    render() {
        return (
            <div>
                <HeaderOne logoName={'logo.png'}/>
                {this.props.children}
                <FooterOne logoName={'logo.png'}/>

                <ThemeSettings />

            </div>
        );
    }
}

export default withTranslate(App);
