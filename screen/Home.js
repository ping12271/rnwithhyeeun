import React from 'react';
import { View, Text, Button }  from 'react-native';


const home = ({navigation}) => {
    return (
        <View>
            <Text>안녕하세요</Text>
            <Button 
                onPress={() => navigation.navigate('Detail')}
                title="Go to Detail"
            />
        </View>
    );
};

export default home;