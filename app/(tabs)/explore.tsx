import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Filter } from 'lucide-react-native';
import { colors } from '@/utils/colors';
import { categories, providers } from '@/utils/data';
import { ServiceProvider } from '@/utils/types';
import SearchBar from '@/components/common/SearchBar';
import ProviderCard from '@/components/ProviderCard';
import HeaderBar from '@/components/common/HeaderBar';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = searchQuery === '' || 
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.profession.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || provider.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleProviderPress = (provider: ServiceProvider) => {
    // Navigate to provider details
    console.log('Provider pressed:', provider.name);
  };

  const handleBookPress = (provider: ServiceProvider) => {
    // Navigate to booking screen
    console.log('Book pressed for:', provider.name);
  };

  return (
    <View style={styles.container}>
      <HeaderBar 
        title="Explore" 
        rightComponent={
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color={colors.text.primary} />
          </TouchableOpacity>
        }
      />
      
      <View style={styles.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
          placeholder="Search by name or profession..."
        />
      </View>
      
      <View style={styles.categoryFilterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryFilterList}
        >
          <TouchableOpacity
            style={[
              styles.categoryFilterItem,
              selectedCategory === null && styles.selectedCategoryFilterItem
            ]}
            onPress={() => setSelectedCategory(null)}
          >
            <Text
              style={[
                styles.categoryFilterText,
                selectedCategory === null && styles.selectedCategoryFilterText
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryFilterItem,
                selectedCategory === category.id && styles.selectedCategoryFilterItem
              ]}
              onPress={() => setSelectedCategory(
                selectedCategory === category.id ? null : category.id
              )}
            >
              <Text
                style={[
                  styles.categoryFilterText,
                  selectedCategory === category.id && styles.selectedCategoryFilterText
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <FlatList
        data={filteredProviders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProviderCard
            provider={item}
            onPress={handleProviderPress}
            onBook={handleBookPress}
          />
        )}
        contentContainerStyle={styles.providersList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateText}>
              No service providers found.
            </Text>
            <Text style={styles.emptyStateSubtext}>
              Try adjusting your search or filters.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  searchContainer: {
    paddingHorizontal: 16,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryFilterContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  categoryFilterList: {
    paddingHorizontal: 16,
  },
  categoryFilterItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.background.primary,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.neutral[200],
  },
  selectedCategoryFilterItem: {
    backgroundColor: colors.primary.main,
    borderColor: colors.primary.main,
  },
  categoryFilterText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.text.secondary,
  },
  selectedCategoryFilterText: {
    color: colors.primary.text,
  },
  providersList: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },
  emptyStateContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.tertiary,
    textAlign: 'center',
  },
});