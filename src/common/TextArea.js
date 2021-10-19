import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const TextArea = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {TextArea};
