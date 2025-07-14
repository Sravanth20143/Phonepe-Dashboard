import React, {useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import MoneyTransfers from '../components/MoneyTransfers';
import RechargeAndBills from '../components/RechargeAndBills';
import ServiceCards from '../components/ServiceCards';
import BottomNavigation from '../components/BottomNavigation';
import Modal from '../components/Common/Modal';
import {COLORS} from '../constants/colors';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionPress = (optionName) => {
    setSelectedOption(optionName);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedOption('');
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <MoneyTransfers onOptionPress={handleOptionPress} />
        <RechargeAndBills onOptionPress={handleOptionPress} />
        <ServiceCards onOptionPress={handleOptionPress} />
        
        <View style={styles.bottomSpacer} />
      </ScrollView>
      <BottomNavigation />
      <Modal 
        visible={modalVisible} 
        onClose={closeModal} 
        selectedOption={selectedOption} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop:40,
    paddingBottom: 45
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  bottomSpacer: {
    height: 20,
  },
});

export default HomeScreen;