import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: movie.poster_path }} // Pastikan poster_path adalah URL yang valid
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#222',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200, // Ubah tinggi untuk menyesuaikan dengan tampilan Netflix
  },
  title: {
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MovieCard;