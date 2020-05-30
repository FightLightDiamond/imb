import React from 'react';
import {
    Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

export default function CategoryListItem(props) {
    const {category, onPress} = props;

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image resizeMode='cover' style={styles.categoryImage} source={{url:category.img}}/>
            </View>
        </TouchableOpacity>
    );
}

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const image = {
    width: width * 0.9,
    height: height * 0.7,
};

const styles = StyleSheet.create({
    categoryImage: image,
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        shadowColor: '#fff',
        shadowOpacity: 0.1,
        borderRadius: 4,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700',
    },
});
