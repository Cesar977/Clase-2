import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';

export default function Favoritos() {
  const { favoritos } = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Favoritos</Text>
      {favoritos.length === 0 ? (
        <Text>No hay Pokémon favoritos aún.</Text>
      ) : (
        <View style={styles.lista}>
          {favoritos.map((pokemon, index) => (
            <TouchableOpacity
              key={index}
              style={styles.pokemonItem}
              onPress={() => navigation.navigate('Pokemon', { nombre: pokemon.nombre })}
            >
              <Image
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                }}
                style={styles.imagen}
              />
              <Text>{pokemon.nombre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  lista: {
    marginTop: 20,
  },
  pokemonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  imagen: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
  },
});
