import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { heightToDP, widthToDP } from 'react-native-responsive-screens'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Slider from '@react-native-community/slider'

const Information = ({ navigation }: any) => {
    const [value, setValue] = useState(16)

    const [date, setDate] = useState('')

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (pickedDate: Date) => {
        const age = calculateAge(pickedDate)

        if (age < 16) {
            Alert.alert(
                "Age Restricted",
                "You must be at least 16 years old to use this application"
            );
            hideDatePicker();
            return;
        }
        const formattedDate = pickedDate.toLocaleDateString('en-GB');
        setDate(formattedDate)
        setValue(age);
        Alert.alert("A date has been picked: ");
        hideDatePicker();

    };

    const calculateAge = (pickedDate: Date) => {
        const today = new Date()
        const birthDate = new Date(pickedDate)

        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        return age;
    }




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient colors={['#0F172A', '#0B0F1A']} style={styles.container}>
                <ScrollView>
                    <Text style={styles.headingText}>Create Account</Text>
                    <Text style={styles.stepText}>Step 1 of 2</Text>
                    <View style={styles.formContainer}>
                        <Text style={styles.formText}>Let's get started!</Text>
                        <Text style={styles.formsubText}>Tell us about yourself.</Text>
                        <View style={styles.nameContainer}>
                            <View style={{ flexDirection: 'column', width: '100%', height: '30%', justifyContent: 'center' }}>
                                <Ionicons name="person" size={20} color='gray' style={styles.iconStyle} />
                                <Text style={styles.nameText}>What's Your Name?</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput
                                    placeholder='Enter your name'
                                    placeholderTextColor='gray'
                                    style={styles.inputText}
                                />
                            </View>
                        </View>
                        <View style={styles.ageContainer}>
                            <Ionicons name="calendar" size={28} color={"white"} />
                            <Text style={styles.ageText}>How old are you?</Text>
                        </View>
                        <View style={styles.sliderBox}>
                            <Text style={styles.sliderText}>{value} yrs</Text>
                            <Slider style={styles.Slider}
                                minimumValue={16}
                                maximumValue={60}
                                step={1}
                                value={value}
                                onValueChange={(age) => setValue(age)}
                            />
                        </View>

                        <View style={styles.birthdateContainer}>
                            <Text style={styles.birthdateText}>Your Date of Birth :</Text>
                            <View style={styles.ageInputContainer}>
                                <TextInput placeholder='select your date of birth' placeholderTextColor={'gray'} style={styles.inputText} value={date} editable={false} />
                                <TouchableOpacity onPress={() => { showDatePicker() }}><Ionicons name='calendar' size={28} color={"white"} /></TouchableOpacity>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}

                                />
                            </View>
                        </View>

                    </View>

                    <TouchableOpacity style={styles.continueButton} onPress={() => {
                        navigation.replace('BottomTabs')
                    }}><Text style={styles.continueText}>Continue</Text></TouchableOpacity>

                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default Information

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    headingText: {
        color: 'white',
        fontSize: heightToDP('3.2%'),
        fontWeight: 'bold',
    },
    stepText: {
        color: 'gray',
        fontSize: heightToDP('2%'),
        marginTop: heightToDP('1%')
    },
    formContainer: {
        marginTop: heightToDP('3%'),
        width: widthToDP('95%'),
        height: heightToDP('65%'),
    },
    formText: {
        color: 'white',
        fontSize: heightToDP('2.5%'),
        fontWeight: 'bold',
    },
    formsubText: {
        color: 'gray',
        fontSize: heightToDP('2%'),
        marginTop: heightToDP('0.5%')
    },
    nameContainer: {
        marginTop: heightToDP('2%'),
        width: '90%',
        height: heightToDP('15%'),
        backgroundColor: '#202835ff',
        borderRadius: widthToDP('5%'),
        justifyContent: 'center',
    },
    iconStyle: {
        position: 'absolute',
        left: widthToDP('3%'),
    },
    nameText: {
        color: 'white',
        fontSize: heightToDP('2%'),
        marginLeft: widthToDP('10%'),
    },
    inputBox: {
        width: '90%',
        height: heightToDP('5%'),
        marginTop: heightToDP('1%'),
        alignSelf: 'center',
        borderRadius: widthToDP('3%'),
        backgroundColor: '#45474aff',
    },
    inputText: {
        marginLeft: widthToDP('3%'),
        color: 'white',
        fontSize: heightToDP('2%'),
    },
    ageContainer: {
        marginTop: heightToDP('2%'),
        width: widthToDP('90%'),
        height: heightToDP('5%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    ageText: {
        color: 'white',
        fontSize: heightToDP('2.3%'),
        marginLeft: widthToDP('1%'),
        fontWeight: 'bold',
    },
    sliderBox: {
        marginTop: heightToDP('2%'),
        flexDirection: 'row',
        width: widthToDP('90%'),
        height: heightToDP('5%'),
        alignItems: 'center'
    },
    Slider: {
        width: widthToDP('70%'),
        height: heightToDP('3%')
    },
    sliderText: {
        color: 'white',
        fontSize: heightToDP('2%')
    },
    birthdateContainer: {
        width: widthToDP('90%'),
        height: heightToDP('18%'),
        marginTop: heightToDP('2%'),
        // backgroundColor:'red'
    },
    birthdateText: {
        fontSize: heightToDP('2.3%'),
        color: 'white',
        fontWeight: 'bold'
    },
    ageInputContainer: {
        marginTop: '5%',
        width: '90%',
        height: '30%',
        borderRadius: 24,
        backgroundColor: '#45474aff',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    continueButton: {
        width: widthToDP('30%'),
        height: heightToDP('5%'),
        backgroundColor: '#202835ff',
        borderRadius: 24,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueText: {
        color: 'white',
    }
})