import React from 'react'
import { StyleSheet } from 'react-native'
import { List, ListItem, Body, Text } from 'native-base'

const Articles = (props) => (
    <List>
        <ListItem  onPress={props.action}>
            <Body>
                <Text style={styles.title}>{props.headline}</Text>
            </Body>
        </ListItem>
    </List>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 10
    }
  })


export default Articles
