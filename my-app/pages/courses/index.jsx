import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import { blogList } from '../../config/coursesdata';

const Course = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch('https://deafmatrix.com/api/News/')
      .then((res) => res.json())
      .then((data) => {
        blogList = data;
        const found = blogList.find((b) => b.id === parseInt(id));
        if (found) setBlog(found);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('CoursesPage')} style={styles.goBack}>
        <Text style={styles.goBackText}>← Go Back</Text>
      </TouchableOpacity>

      {blog ? (
        <View style={styles.blogWrap}>
          <Text style={styles.date}>Published {blog.createdAt}</Text>
          <Text style={styles.title}>{blog.title}</Text>
          <View style={styles.subCategory}>
            {blog.subCategory.map((category, i) => (
              <Chip key={i} label={category} />
            ))}
          </View>
          <Image source={{ uri: blog.cover }} style={styles.coverImage} />
          <Text style={styles.description}>{blog.description}</Text>
        </View>
      ) : (
        <EmptyList />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  goBack: { marginBottom: 16 },
  goBackText: { color: '#007bff', fontSize: 16 },
  blogWrap: { marginBottom: 32 },
  date: { fontSize: 12, color: '#555' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 8 },
  subCategory: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 },
  coverImage: { width: '100%', height: 200, marginVertical: 16, borderRadius: 8 },
  description: { fontSize: 16, color: '#333', lineHeight: 22 },
});

export default Course;
