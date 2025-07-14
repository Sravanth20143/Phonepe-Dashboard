// src/components/RechargeAndBills/TuitionFees.js
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const TuitionFees = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        
        <View style={styles.bookIcon}>
          <View style={styles.bookShape} />
        </View>
      </View>
      <Text style={styles.title}>Tuition Fees</Text>
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
    position: 'relative',
  },
  
  bookIcon: {
    width: 22,
    height: 22,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookShape: {
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

export default TuitionFees;