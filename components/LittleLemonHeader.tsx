import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
	return (
		<View style={{ backgroundColor: '#F4CE14' }}>
			<Text
				style={{
					padding: 10,
					paddingTop: 60,
					fontSize: 34,
					color: 'black',
					textAlign: 'center',
				}}
			>
				Little Lemon
			</Text>
		</View>
	);
}
