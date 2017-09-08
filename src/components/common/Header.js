// Import Libraries
import React from 'react';
import { Text, View } from 'react-native';

// Function based component
const Header = (props) => {
    //import styles
    const { textStyle, viewStyle } = styles; 
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Define Stylesheet
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',    // vertical align
        alignItems: 'center',       // horizontal align
        height: 50,
      //  paddingTop: 10,
        // SHADOW NOT AVAILABLE FOR ANDROID
        //shadowColor: '#000',
        //shadowOffset: { width: 20, height: 2 },
        //shadowOpacity: 1,
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
        fontSize: 20
    }
};

// Export Component
export { Header };
