import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { calculateBMI, getBMICategory } from '../../utils/bmiCalculations';

const BMICalculatorScreen = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [bmi, setBmi] = useState(null);

  const handleCalculate = () => {
    const result = calculateBMI(weight, height);
    setBmi(result);
  };

  return (
    <View style={styles.container}>
      {/* BMI Calculator UI */}
    </View>
  );
};

export default BMICalculatorScreen;