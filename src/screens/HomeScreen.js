import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Button, ActivityIndicator, Alert } from 'react-native';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import moviesData from '../moviesData'; // Import data film statis

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set movies data and loading state
    setMovies(moviesData);
    setLoading(false);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setMovies(moviesData); // Refresh data statis
      setLoading(false);
    }, 1000); // Simulate 1 second loading time
  };

  const handleMoviePress = (movie) => {
    Alert.alert('Movie Selected', `You clicked on ${movie.title}`);
    // Di sini Anda bisa navigasi ke layar detail film atau aksi lainnya
  };

  const renderItem = ({ item }) => (
    <MovieCard movie={item} onPress={() => handleMoviePress(item)} />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#e50914" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="KFLIX" />
      <Button title="Refresh Movies" onPress={handleRefresh} color="#1E201E" />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E3D4',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ABF80',
  },
  loadingText: {
    color: '#6A669D',
    textAlign: 'center',
    marginTop: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;