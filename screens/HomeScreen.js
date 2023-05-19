import {
    SafeAreaView
} from 'react-native-safe-area-context';
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-5">

            {/* Header */}

            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-300 rounded-full p-4"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location <ChevronDownIcon size={20} color="#00ccbb" /> </Text>
                </View>

                <UserIcon size={35} color="#00ccbb" />

            </View>

            {/* Search */}

            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="grey" />
                    <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                </View>

                <AdjustmentsVerticalIcon color="#00ccbb" />
            </View>

            {/* Body */}

            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured rows */}
                <FeaturedRow
                    id="1"
                    title="Featured"
                    description="Paid placement from our partners"
                />

                <FeaturedRow
                    id="2"
                    title="Tasty Discounts"
                    description="Everyone's been enjoying"
                />

                <FeaturedRow
                    id="3"
                    title="Offers near you"
                    description="Why not support your local restaurant"
                />

            </ScrollView>

        </SafeAreaView>
    )
}
export default HomeScreen