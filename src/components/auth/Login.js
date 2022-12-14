import { REGISTER } from 'lib/routers'
import { Link as RouterLink } from 'react-router-dom'

const {
	Center,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button,
	Link,
	Text,
} = require('@chakra-ui/react')

function Login() {
	return (
		<Center w="100%" h="100vh">
			<Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
				<Heading mb="4" size="lg" textAlign="center">
					Log In
				</Heading>

				<form onSubmit={() => {}}>
					<FormControl isInvalid={true} py="2">
						<FormLabel>Email </FormLabel>
						<Input type="email" placeholder="user@email.com" />
						<FormErrorMessage>This is an error message</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={true} py="2">
						<FormLabel>Password </FormLabel>
						<Input type="password" placeholder="Password123" />
						<FormErrorMessage>This is an error message</FormErrorMessage>
					</FormControl>
					<Button
						mt="4"
						type="submit"
						colorScheme="teal"
						size="md"
						w="full"
						isLoading={true}
						loadingText="Logging in"
					>
						Log In
					</Button>
				</form>
				<Text fontSize="xlg" align="center" mt="6">
					Don't have an account?{' '}
					<Link
						as={RouterLink}
						to={REGISTER}
						color="teal.800"
						fontWeight="medium"
						textDecor="underline"
						_hover={{ background: 'teal.100' }}
					>
						Register
					</Link>{' '}
					instead!
				</Text>
			</Box>
		</Center>
	)
}

export default Login
