// src/components/MoneyTransfers/ToMobileNumber.js
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const ToMobileNumber = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.rupeeIcon}>
          <Text style={styles.rupeeSymbol}>📞</Text>
        </View>
        {/* <View style={styles.checkmark} /> */}
      </View>
      <Text style={styles.title}>To Mobile{'\n'}Number</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 80,
  },
  iconContainer: {
    width: 55,
    height: 55,
    backgroundColor: COLORS.primary,
    borderRadius: 27.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  rupeeIcon: {
    width: 25,
    height: 25,
    
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupeeSymbol: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  title: {
    fontSize: 12,
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 16,
  },
  // checkmark: {
  //   position: 'absolute',
  //   top: -3,
  //   right: -3,
  //   width: 18,
  //   height: 18,
  //   backgroundColor: COLORS.green,
  //   borderRadius: 9,
  //   borderWidth: 2,
  //   borderColor: COLORS.white,
  // },
});

export default ToMobileNumber;





