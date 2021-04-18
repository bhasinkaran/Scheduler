// import Form from '../components/Form';

// export default function LoginScreen({ navigation }) {

//   return (
//     <SafeView style={styles.container}>
//       <Form
//         initialValues={{ email: '', password: '' }}
//         validationSchema={validationSchema}
//         onSubmit={values => handleOnLogin(values)}
//       >
//         <Form.Field
//           name="email"
//           leftIcon="email"
//           placeholder="Enter email"
//           autoCapitalize="none"
//           keyboardType="email-address"
//           textContentType="emailAddress"
//           autoFocus={true}
//         />
//         <Form.Field
//           name="password"
//           leftIcon="lock"
//           placeholder="Enter password"
//           autoCapitalize="none"
//           autoCorrect={false}
//           secureTextEntry={passwordVisibility}
//           textContentType="password"
//           rightIcon={rightIcon}
//           handlePasswordVisibility={handlePasswordVisibility}
//         />
//         <Form.Switch name="register">
//         <Form.Button title={values => values.register ? 'Register' : 'Login'} />
//         {<Form.ErrorMessage error={loginError} visible={true} />}
//       </Form>
//     </SafeView>
//   );
// }