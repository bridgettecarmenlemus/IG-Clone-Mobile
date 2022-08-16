import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PhotoCard from "./PhotoCard";

const bsPhotos = [
  { id: 1, description: "Selfie With Mom" },
  { id: 2, description: "Photo of Breakfast" },
  { id: 3, description: "Airplane wing in Sky" },
  { id: 4, description: "My Nails Painted" },
  { id: 5, description: "Abandoned door" },
  { id: 6, description: "French Bulldog" },
  { id: 7, description: "Wynwood wall Graffiti" },
  { id: 8, description: "Latte art with biscuit" },
  { id: 9, description: "Black and white skyline" },
];

function PhotoList() {
  return (
    <ScrollView style={styles.photoList}>
      {bsPhotos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  photoList: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
});
export default PhotoList;
