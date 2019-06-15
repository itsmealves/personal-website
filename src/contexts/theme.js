import React from 'react';

const themes = {
    'greenish': {
        white: '#ecf0f1',
        primary: '#2ecc71',
        secondary: '#1abc9c',
        accent: '#9b59b6',
        black: '#222'
    },
    'blueish': {
        white: '#ecf0f1',
        primary: '#3498db',
        secondary: '#2980b9',
        accent: '#9b59b6',
        black: '#222'
    },
    'purpleish': {
        white: '#ecf0f1',
        primary: '#9b59b6',
        secondary: '#8e44ad',
        accent: '#9b59b6',
        black: '#222'
    }
}



const defaultTheme = 'greenish';
const defaultValue = themes[defaultTheme];
const { Provider, Consumer } = React.createContext(defaultValue);

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...defaultValue,
            set: this.changeTheme.bind(this)
        };
    }

    changeTheme(themeName) {
        const theme = themeName? themeName : defaultTheme;
        this.setState({ ...themes[theme] });
    }

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        );
    }
}

export { Consumer as default, ThemeProvider }
