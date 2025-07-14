// src/components/MoneyTransfers/ReferAndGet.js
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const ReferAndGet = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.megaphoneIcon}>
          <View style={styles.megaphoneShape} />
        </View>
      </View>
      <Text style={styles.title}>Refer & Get{'\n'}Upto ₹200</Text>
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
  megaphoneIcon: {
    width: 25,
    height: 25,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  megaphoneShape: {
    width: 15,
    height: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
  title: {
    fontSize: 12,
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default ReferAndGet;