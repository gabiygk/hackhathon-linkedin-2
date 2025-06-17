import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserCard from '../../components/UserCard/UserCard';
import type { UserProfile } from '../../types';

const FILTER_TAGS = ['Focused', 'Coffee Chats', 'Jobs', 'Unread', 'Discover'];

const CoffeeChatsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('Coffee Chats');

  const handleScheduleChat = (userId: string) => {
    // TODO: Implement scheduling logic
    console.log('Schedule chat with user:', userId);
  };

  const handleMessage = (userId: string) => {
    // TODO: Implement messaging logic
    console.log('Message user:', userId);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity>
          <Icon name="tune-vertical" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="square-edit-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {FILTER_TAGS.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[
              styles.filterTag,
              activeFilter === tag && styles.activeFilterTag,
            ]}
            onPress={() => setActiveFilter(tag)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === tag && styles.activeFilterText,
              ]}
            >
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.content}>
        {mockUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onScheduleChat={handleScheduleChat}
            onMessage={handleMessage}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2ef',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef3f8',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  filterContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  filterTag: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#f3f2ef',
    marginRight: 8,
  },
  activeFilterTag: {
    backgroundColor: '#057642',
  },
  filterText: {
    color: '#666',
    fontSize: 14,
  },
  activeFilterText: {
    color: 'white',
  },
  content: {
    flex: 1,
  },
});

// Mock data
const mockUsers: UserProfile[] = [
  {
    id: '1',
    name: 'Thomas Simmons',
    title: 'Product Designer at Figma',
    company: 'Figma',
    location: 'San Francisco, CA',
    profileImage: 'https://example.com/profile1.jpg',
    connectionDegree: '· 1st',
    careerInterests: ['Product Strategy', 'UX Design', 'Agile Methodology'],
    personalInterests: ['Soccer', 'hiking', 'non-fiction books'],
    availability: 'Weekdays 4-6pm',
    mutualConnections: 12,
  },
  // Add more mock users as needed
];

export default CoffeeChatsScreen; 