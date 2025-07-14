import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Recharge from './Recharge';
import TuitionFees from './TuitionFees';
import Electricity from './Electricity';
import LoanEMI from './LoanEMI';
import {COLORS} from '../../constants/colors';

const RechargeAndBills = ({onOptionPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recharge & Bills</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <Recharge onPress={() => onOptionPress('Recharge')} />
        <TuitionFees onPress={() => onOptionPress('Tuition Fees')} />
        <Electricity onPress={() => onOptionPress('Electricity')} />
        <LoanEMI onPress={() => onOptionPress('Loan EMI')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: COLORS.lightGray,
    borderRadius: 15,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  viewAll: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RechargeAndBills;