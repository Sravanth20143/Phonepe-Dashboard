import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToMobileNumber from './ToMobileNumber';
import ToBankAccount from './ToBankAccount';
import ReferAndGet from './ReferAndGet';
import CheckBalance from './CheckBalance';
import {COLORS} from '../../constants/colors';

const MoneyTransfers = ({onOptionPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Money Transfers</Text>
      <View style={styles.optionsContainer}>
        <ToMobileNumber onPress={() => onOptionPress('To Mobile Number')} />
        <ToBankAccount onPress={() => onOptionPress('To Bank & Self A/c')} />
        <ReferAndGet onPress={() => onOptionPress('Refer & Get Upto ₹200')} />
        <CheckBalance onPress={() => onOptionPress('Check Balance')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 15,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MoneyTransfers;