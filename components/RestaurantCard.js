import { View, Text, TouchableOpacity, Image } from 'react-native'
const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
    return (
        <TouchableOpacity className="">
            <Image source={{ uri: imgUrl, }} className='h-36 w-64 rounded' />

            <View className=''>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default RestaurantCard