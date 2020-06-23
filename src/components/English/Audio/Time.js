import React from 'react';
import {Text} from 'react-native';

export default class Meaning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
    }

    componentWillMount(): void {
        const {audio} = this.props;

        var getTime = setInterval(() => {
            audio.getCurrentTime((seconds) => {
                this.setState({
                    time: seconds
                })
            });

            // clearInterval(getTime);
        }, 500)

    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Text>{this.state.time}</Text>
        );
    }
}
