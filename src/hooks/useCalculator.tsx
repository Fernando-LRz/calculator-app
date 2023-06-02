import { useRef, useState } from 'react';

enum Operators {
    addition, subtraction, division, multiplication
};

const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
    }

    const buildNumber = ( numberStr: string ) => {
        // Evitar más de un punto decimal
        if( number.includes('.') && numberStr === '.' ) return;

        if( number.startsWith('0') || number.startsWith('-0') ) {

            // Agregar el punto decimal
            if( numberStr === '.' ) {
                setNumber( number + numberStr );

                // Verificar si es 0, y hay un punto decimal
            } else if( numberStr === '0' && number.includes('.') ) {
                setNumber( number + numberStr );

                // Verificar si es diferente a cero y no hay punto decimal
            } else if( numberStr !== '0' && !number.includes('.') ) {
                setNumber( numberStr );
             
                // Evitar múltiples ceros antes del punto decimal
            } else if( numberStr === '0' && !number.includes('.') ) {
                setNumber( number );

            } else {
                setNumber( number + numberStr );
            }

        } else {
            setNumber( number + numberStr );
        }
    }

    const positiveNegative = () => {
        if( number.includes('-') ) {
            setNumber( number.replace('-', '+') );
        } else {
            setNumber( '-' + number );
        }
    }

    const del = () => {
        let negative = '';
        let auxNumber = number;
        
        if( number.includes('-') ) {
            negative = '-';
            auxNumber = number.substring(1);
        }

        if( auxNumber.length > 1 ) {
            setNumber( negative + auxNumber.slice(0, -1) );
        } else {
            setNumber('0');
        }
    }

    const setPreviousNumber = () => {
        // Evitar que se añada el punto si se encuentra al final del número
        if( number.endsWith('.') ) {
            setPrevNumber(number);
        } else {
            setPrevNumber(number);
        }

        // Resetear el número 
        setNumber('0');
    }   

    const divide = () => {
        setPreviousNumber();
        lastOperation.current = Operators.division;
    }

    const multiply = () => {
        setPreviousNumber();
        lastOperation.current = Operators.multiplication;
    }

    const add = () => {
        setPreviousNumber();
        lastOperation.current = Operators.addition;
    }
 
    const subtract = () => {
        setPreviousNumber();
        lastOperation.current = Operators.subtraction;
    }

    const calculateResult = () => {
        // Evitar calcular el resultado si el número previo es cero
        if(prevNumber === '0') return;

        const number1 = Number( number );
        const number2 = Number ( prevNumber );

        switch(lastOperation.current) {
            case Operators.addition: 
                setNumber( `${ number1 + number2 }`);
                break;
            case Operators.subtraction: 
                setNumber( `${ number2 - number1 }`);
                break;
            case Operators.multiplication: 
                setNumber( `${ number1 * number2 }`);
                break;
            case Operators.division: 
                setNumber( `${ number2 / number1 }`);
                break;
        }

        setPrevNumber('0');
    }

    return {
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
    }
}

export default useCalculator;