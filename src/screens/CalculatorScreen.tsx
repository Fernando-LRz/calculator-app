import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import styles from '../theme/appTheme';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {

    const { 
        number, 
        prevNumber, 
        clean,
        positiveNegative,
        del,
        divide,
        multiply,
        subtract, 
        add,
        buildNumber, 
        calculateResult  
    } = useCalculator();

    return (
        <View style={ styles.calculatorContainer }>
            {/* Resultado previo */}
            {
                ( prevNumber !== '0' && (
                    <Text style={ styles.smallResult }>{ prevNumber }</Text>
                ))
            }

            {/* Resultado actual */}
            <Text 
                style={ styles.result }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >{ number }</Text>

            {/* Fila de botones */}
            <View style={ styles.row }>
                <Button text="C" color="#9B9B9B" action={ clean } />
                <Button text="+/-" color="#9B9B9B" action={ positiveNegative } />
                <Button text="del" color="#9B9B9B" action={ del } />
                <Button text="/" color="#FF9427" action={ divide } />
            </View>

            {/* Fila de botones */}
            <View style={ styles.row }>
                <Button text="7" action={ buildNumber }/>
                <Button text="8" action={ buildNumber }/>
                <Button text="9" action={ buildNumber }/>
                <Button text="X" color="#FF9427" action={ multiply } />
            </View>

            {/* Fila de botones */}
            <View style={ styles.row }>
                <Button text="4" action={ buildNumber }/>
                <Button text="5" action={ buildNumber }/>
                <Button text="6" action={ buildNumber }/>
                <Button text="-" color="#FF9427" action={ subtract } />
            </View>

            {/* Fila de botones */}
            <View style={ styles.row }>
                <Button text="1" action={ buildNumber }/>
                <Button text="2" action={ buildNumber }/>
                <Button text="3" action={ buildNumber }/>
                <Button text="+" color="#FF9427" action={ add } />
            </View>

            {/* Fila de botones */}
            <View style={ styles.row }>
                <Button text="0" wider action={ buildNumber }/>
                <Button text="." action={ buildNumber }/>
                <Button text="=" color="#FF9427" action={ calculateResult } />
            </View>
        </View>
    )
}

export default CalculatorScreen;