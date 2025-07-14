// src/components/RechargeAndBills/Electricity.js
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const Electricity = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.bulbIcon}>
          <View style={styles.bulbShape} />
        </View>
      </View>
      <Text style={styles.title}>Electricity</Text>
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
  bulbIcon: {
    width: 22,
    height: 22,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulbShape: {
    width: 12,
    height: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 6,
  },
  title: {
    fontSize: 12,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
});

export default Electricity;