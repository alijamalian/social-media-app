import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { router } from 'lib/routers'

export default function App() {
	return (
		<ChakraProvider>
			<RouterProvider router={router} />
			<h1>Test</h1>
		</ChakraProvider>
	)
}
