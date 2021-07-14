import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring} from 'react-native-reanimated';
import {TapGestureHandler} from 'react-native-gesture-handler';

const AnimatedDot = () =>{
const pressed = useSharedValue(false);

const eventHandle = useAnimatedGestureHandler({
onStart:(event, ctx) =>{
    pressed.value = true;
},
onEnd: (event, ctx) =>{
    pressed.value = false;
}
})

const uas = useAnimatedStyle(()=>{
return{
backgroundColor: withSpring(pressed.value ? '#FEEF86' : '#001972'),
transform: [{scale: withSpring(pressed.value ? 1.5 : 1 )}],
}
})

const yoloText = useAnimatedStyle (() =>{
return{
    opacity: withSpring(pressed.value ? 1.0 : 0.0),
}
})

return(
<View style = {styles.container}>
{/* TapGestureHandler tells the program that the wrapped components are interactive */}
<TapGestureHandler onGestureEvent = {eventHandle} >
    <Animated.View style = {[styles.ball, uas]} >
        <Animated.Text style = {[styles.message, yoloText]}>YOLO!</Animated.Text>
    </Animated.View>
</TapGestureHandler>
</View>
)
}

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
},
ball:{
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#001972',
    alignItems: 'center',
    justifyContent: 'center',

},
message:{
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
},

})

export default AnimatedDot;