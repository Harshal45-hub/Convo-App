import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightToDP, widthToDP } from 'react-native-responsive-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';


const LoginSignUp: React.FC = ({ navigation }: any) => {
  return (

    <LinearGradient
      colors={['#0F172A', '#0B0F1A']}
      style={styles.container}
    >
      
        <Image
          source={{ uri: 'https://i.postimg.cc/Xv87d78m/file-0000000007387206a595bb400334bf4b.png' }}
          style={{ width: '95%', height: heightToDP('30%'), borderRadius: widthToDP('10%'), opacity: 1, alignSelf: 'center', marginBottom: 24 }}
        />
      
        {/* Title */}
        <Text style={styles.title}>Find Your Tribe</Text>
        <Text style={styles.subtitle}>
          Connect with like-minded people
        </Text>
       
       <ScrollView style={{flex:1}}>
        {/* Email */}
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Email address"
            placeholderTextColor="#6B7280"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#6B7280"
            secureTextEntry
            style={styles.input}
          />
          <Ionicons name="eye-outline" size={20} color="#6B7280" />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity activeOpacity={0.9} onPress={() => {
          navigation.replace('Information');
        }}>
          <LinearGradient
            colors={['#3B82F6', '#2563EB']}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* OR */}
        <Text style={styles.orText}>OR</Text>

        {/* Google Login */}
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={20} color="#DB4437" />
          <Text style={styles.socialText}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Apple Login */}
        <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
          <Ionicons name="logo-apple" size={20} color="#fff" />
          <Text style={[styles.socialText, { color: '#fff' }]}>
            Continue with Apple
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Signup */}
      <View style={styles.signupRow}>
        <Text style={styles.signupText}>
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('SignUp')
        }}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>

  );
};

export default LoginSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#E5E7EB',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 32,
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C2536',
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 16,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: '#E5E7EB',
    fontSize: 15,
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },

  forgotText: {
    color: '#60A5FA',
    fontSize: 13,
  },

  loginButton: {
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  orText: {
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: 14,
    backgroundColor: '#111827',
    marginBottom: 12,
  },

  appleButton: {
    backgroundColor: '#000',
  },

  socialText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#E5E7EB',
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    zIndex: 10,
    elevation: 5
  },

  signupText: {
    color: '#9CA3AF',
  },

  signupLink: {
    color: '#3B82F6',
    fontWeight: '600',
  },
});