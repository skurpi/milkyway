import React from 'react';
import { StyleSheet, Button, Text, TextInput, View, SafeAreaView, Platform } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={style.droidSafeArea}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Boobtracker</Text>
                    <Text>Latest feeds</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, backgroundColor: 'powderblue' }} >
                            <Text>Monday</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'skyblue' }} >
                            <Text>Sunday</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'steelblue' }} >
                            <Text>Saturday</Text>
                        </View>
                    </View>
                    <Text>Add feed</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>TimePicker</Text>{/*https://reactnativeexample.com/a-react-native-datetime-picker-for-android-and-ios/ */}
                        <TextInput
                            style={{ height: 40 }}
                            placeholder="Extra notes?"
                            onChangeText={(text) => this.setState({ text })}
                        />
                        <Button
                            onPress={() => { console.log('todo') }}
                            title="Save"
                            color="#841584"
                            accessibilityLabel="Save the details of the feed"
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
})
