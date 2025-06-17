import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { UserProfile } from '../../types';

interface UserCardProps {
  user: UserProfile;
  onScheduleChat: (userId: string) => void;
  onMessage: (userId: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onScheduleChat, onMessage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {user.name} <Text style={styles.connectionDegree}>{user.connectionDegree}</Text>
          </Text>
          <Text style={styles.userTitle}>{user.title}</Text>
          <Text style={styles.userLocation}>{user.location}</Text>
        </View>
      </View>

      <View style={styles.interestsContainer}>
        <Text style={styles.interestsLabel}>Career Interests:</Text>
        <Text style={styles.interests}>{user.careerInterests.join(', ')}</Text>
        <Text style={styles.interestsLabel}>Personal Interests:</Text>
        <Text style={styles.interests}>{user.personalInterests.join(', ')}</Text>
      </View>

      <View style={styles.availabilityContainer}>
        <Icon name="clock-outline" size={16} color="#666" />
        <Text style={styles.availability}>Available: {user.availability}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.scheduleButton}
          onPress={() => onScheduleChat(user.id)}
        >
          <Text style={styles.scheduleButtonText}>Schedule Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.messageButton}
          onPress={() => onMessage(user.id)}
        >
          <Icon name="message-outline" size={20} color="#0a66c2" />
          <Text style={styles.messageButtonText}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  connectionDegree: {
    color: '#666',
    fontSize: 14,
  },
  userTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  userLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  interestsContainer: {
    marginVertical: 8,
  },
  interestsLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginTop: 4,
  },
  interests: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  availability: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 16,
  },
  scheduleButton: {
    flex: 1,
    backgroundColor: '#0a66c2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginRight: 8,
  },
  scheduleButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  messageButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#0a66c2',
  },
  messageButtonText: {
    color: '#0a66c2',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
});

export default UserCard; 