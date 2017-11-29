import { isEquals, getTransform } from './helper'
import React, {Component } from 'react'
import { StyleSheet, View } from 'react-native'
import * as _ from 'lodash'
type Props = {
  color:string,
  start: any,
  end: any,
}

const defaultProps = {
  color: '#8E91A8',
  start: {x: 0, y: 0},
  end: {x: 0, y: 0}
}
export default class Line extends Component<Props> {
    constructor(props: Props = defaultProps) {
        super(props);
        this.state = _.assign(defaultProps, props);
        console.log(_.assign(defaultProps, props));
    }

    setNativeProps(props) {
        this.setState(props);
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps.color !== this.props.color ) {
            this.setState({color: nextProps.color});
        }
    }

    render() {
        console.log(this.state)
        let { start, end, color } = this.state;

        if ( isEquals(start, end) ) return null;

        let transform = getTransform(start, end);
        let length = transform.d;
        let angle = transform.a + 'rad';
        let moveX = transform.x;
        let moveY = transform.y;

        return (
            <View ref='line' style={[
                styles.line, {backgroundColor: color, left: start.x, top: start.y, width: length},
                {transform: [{translateX: moveX}, {translateY: moveY}, {rotateZ: angle}]}
            ]} />
        )
    }
}



const styles = StyleSheet.create({
    line: {
        position: 'absolute',
        height: 1
    }
})

module.exports = Line    // for compatible with require only