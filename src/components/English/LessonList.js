import React from 'react';
import {Col, Row} from 'react-native-easy-grid';
import {
    Caption,
} from 'react-native-paper';

export default class LessonList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {lesson} = this.props;

        return (
            <Row style={{margin: 5}}>
                <Col size={6}>
                    <Caption>{lesson.name}</Caption>
                </Col>
            </Row>
        );
    }
}
