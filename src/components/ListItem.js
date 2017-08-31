import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Platform } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ListItem extends Component {
    constructor() {
        super();
    
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDesc() {
        const {  library, expanded } = this.props

        if(expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id) }
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDesc()}
                </View>
            </TouchableWithoutFeedback>
        );  
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateTOProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateTOProps, actions)(ListItem);