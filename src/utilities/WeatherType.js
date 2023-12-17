import cloudImage from '../../assets/cloud.jpg';
import thunderImage from '../../assets/thunder.jpg';
import dizzleImage from '../../assets/dizzle.jpg';
import cloudSnowImage from '../../assets/cloud-snow.jpg';
import clearImage from '../../assets/clear.jpeg';
import hazeImage from '../../assets/haze.jpg';
import mistImage from '../../assets/mist.jpg';

export default WeatherType = {
    Thunderstorm: {
        icon: 'weather-lightning',
        message: 'It could get noisy',
        backgroundColor: '#000000',
        backgroundImage: thunderImage,
    },
    Drizzle: {
        icon: 'weather-rainy',
        message: 'It might rain a little',
        backgroundColor: '#36454f',
        backgroundImage: dizzleImage,
    },
    Rain: {
        icon: 'weather-pouring',
        message: 'You will need an umbrella',
        backgroundColor: '#0000ff',
        backgroundImage: dizzleImage,
    },
    Snow: {
        icon: 'weather-snowy-heavy',
        message: 'Lets build a snowman',
        backgroundColor: '#7f6065',
        backgroundImage: cloudSnowImage,
    },
    Clear: {
        icon: 'weather-partly-cloudy',
        message: 'It is perfect t-shirt weather',
        backgroundColor: '#7f6065',
        backgroundImage: clearImage,
    },
    Clouds: {
        icon: 'weather-cloudy',
        message: 'You could live in the clouds',
        backgroundColor: '#363636',
        backgroundImage: cloudImage,
    },
    Haze: {
        icon: 'weather-hazy',
        message: 'It might be a bit damp',
        backgroundColor: '#58586e',
        backgroundImage: hazeImage,
    },
    Mist: {
        icon: 'weather-fog',
        message: 'It might be hard to see',
        backgroundColor: '#3e3e37',
        backgroundImage: mistImage,
    },
}