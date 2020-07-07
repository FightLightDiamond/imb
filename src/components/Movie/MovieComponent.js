import React from 'react';
import {FlatList, TextInput, View, Button} from 'react-native';
import FlatListItem from './FlatListItem';
import EditModel from './EditModal';

export default class MovieComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            releaseYear: '0',
        };
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {onAdd, onFetch, onUpdate, movies} = this.props;

        return (
            <View>
                <View>
                    <TextInput style={{borderBottomColor: 'black', borderBottomWidth: 1, height: 50}}
                               onChangeText={text => this.setState({name: text})}
                               value={this.state.name}
                               placeholder={'Enter new movie name'}
                    />
                    <TextInput style={{borderBottomColor: 'black', borderBottomWidth: 1, height: 50}}
                               onChangeText={text => this.setState({releaseYear: text})}
                               value={this.state.releaseYear}
                               placeholder={'Release releaseYear'}
                    />
                </View>

                <View>
                    <Button onPress={() => onFetch('asc')}
                            title={'Fetch'}/>

                    <Button onPress={() => {
                        const {name, releaseYear} = this.state;

                        if (!name.length || !releaseYear.length) {
                            alert('You must enter movie name and release releaseYear');
                            return;
                        }

                        onAdd({name: name, releaseYear: releaseYear});
                    }}
                            title={'Add'}/>
                </View>

                <FlatList
                    data={movies}
                    keyExtractor={item => item.id + ""}
                    renderItem={
                        ({item, index}) => <FlatListItem {...item}
                                                         itemIndex={index}
                                                         movieComponent={this}
                        />

                    }
                />

                <EditModel ref={'editModal'}
                           onUpdate={onUpdate}
                           movieComponent={this}/>
            </View>
        );
    }
}
