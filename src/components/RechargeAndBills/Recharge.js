// src/components/RechargeAndBills/Recharge.js
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const Recharge = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.batteryIcon}>
          <View style={styles.batteryShape} />
          <View style={styles.lightning} />
        </View>
      </View>
      <Text style={styles.title}>Recharge</Text>
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
  batteryIcon: {
    width: 22,
    height: 22,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryShape: {
    width: 16,
    height: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
  lightning: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: COLORS.yellow,
    borderRadius: 4,
  },
  title: {
    fontSize: 12,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
});

export default Recharge;





