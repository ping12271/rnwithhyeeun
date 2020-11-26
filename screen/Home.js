import React from 'react';
import { View, Text, TouchableOpacity }  from 'react-native';

const home = ({navigation}) => {
    return (
        <View>
            <Text>안녕하세요</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
            >
                <Text>
                    Go to Detail
                </Text>
            </TouchableOpacity>
            
                
        </View>
    );
};

export default home;