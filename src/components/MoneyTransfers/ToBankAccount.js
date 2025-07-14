// src/components/MoneyTransfers/ToBankAccount.js
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const ToBankAccount = ({onPress}) => {
   return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.rupeeIcon}>
          <Text style={styles.rupeeSymbol}>🏦</Text>
        </View>
      </View>
      <Text style={styles.title}>To Bank &{'\n'}Self A/C</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  title: {
    fontSize: 12,
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 16,
  },
});
export default ToBankAccount;