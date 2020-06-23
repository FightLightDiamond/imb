import React from 'react';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {FlatList, Text} from 'react-native';

export default class Meaning extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {details} = this.props;

        return (
            <FlatList
                data={details}
                renderItem={
                    ({item}) => (
                        <Grid>
                            <Row size={1}>
                                <Col>
                                    <Text>{item.meaning}</Text>
                                </Col>
                            </Row>
                        </Grid>
                    )
                }
                keyExtractor={(item) => `${item.id}`}
            />
        );
    }
}
