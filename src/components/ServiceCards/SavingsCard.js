// src/components/ServiceCards/SavingsCard.js
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/colors';

const {width} = Dimensions.get('window');
const cardWidth = (width - 55) / 2;

const SavingsCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>Savings</Text>
        <Text style={styles.subtitle}>Save Daily, Gold SIP</Text>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  
});

export default SavingsCard;
