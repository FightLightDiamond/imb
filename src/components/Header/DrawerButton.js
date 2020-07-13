import React from 'react';
import {
    Button,
} from 'react-native';

export default class DrawerButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log(this.props.toggle)

        return (
            <Button
                onPress={() => this.props.toggle()}
                title="Drawer"
            />
        );
    }
}
