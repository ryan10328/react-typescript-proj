import * as React from 'react';
import { Component, ComponentState } from 'react';

interface AppProps {
    title: string;
}

class App extends Component<AppProps, ComponentState> {
    render() {
        return (
            <div>
                Root Component
            </div>
        );
    }
}

export default App;