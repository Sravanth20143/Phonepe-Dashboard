import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.homeIcon}>
          <View style={styles.homeShape} />
        </View>
        <Text style={[styles.navText, styles.activeText]}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.searchIcon}>
          <View style={styles.searchShape} />
        </View>
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.qrContainer}>
          <View style={styles.qrIcon}>
            <View style={styles.qrPattern} />
          </View>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.alertIcon}>
          <View style={styles.alertShape} />
        </View>
        <Text style={styles.navText}>Alerts</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.historyIcon}>
          <View style={styles.historyShape} />
        </View>
        <Text style={styles.navText}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderColor,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  homeIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  homeShape: {
    width: 18,
    height: 18,
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
  searchIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  searchShape: {
    width: 18,
    height: 18,
    backgroundColor: COLORS.gray,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: COLORS.gray,
  },
  qrContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
  qrIcon: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrPattern: {
    width: 16,
    height: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
  alertIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  alertShape: {
    width: 18,
    height: 18,
    backgroundColor: COLORS.gray,
    borderRadius: 9,
  },
  historyIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  historyShape: {
    width: 18,
    height: 18,
    backgroundColor: COLORS.gray,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: COLORS.gray,
  },
  navText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  activeText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default BottomNavigation;