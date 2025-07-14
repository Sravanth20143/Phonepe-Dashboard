// src/components/RechargeAndBills/LoanEMI.js
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const LoanEMI = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.emiIcon}>
          <View style={styles.emiShape} />
        </View>
      </View>
      <Text style={styles.title}>Loan EMI</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 70,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  emiIcon: {
    width: 22,
    height: 22,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emiShape: {
    width: 16,
    height: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
  title: {
    fontSize: 12,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
});

export default LoanEMI;