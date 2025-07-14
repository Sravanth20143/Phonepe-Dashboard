import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoansCard from './LoansCard';
import InsuranceCard from './InsuranceCard';
import SavingsCard from './SavingsCard';
import TravelCard from './TravelCard';
import MutualFundsCard from './MutualFundsCard';
import {COLORS} from '../../constants/colors';

const ServiceCards = ({onOptionPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <LoansCard onPress={() => onOptionPress('Loans')} />
        <InsuranceCard onPress={() => onOptionPress('Insurance')} />
      </View>
      <View style={styles.row}>
        <SavingsCard onPress={() => onOptionPress('Savings')} />
        <TravelCard onPress={() => onOptionPress('Travel & Transit')} />
      </View>
      <View style={styles.singleRow}>
        <MutualFundsCard onPress={() => onOptionPress('Mutual Funds')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  singleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default ServiceCards;