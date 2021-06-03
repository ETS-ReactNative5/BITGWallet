import { StyleSheet } from 'react-native';
import { colors, fontStyles } from '../../../styles/common';

const styles = StyleSheet.create({
	container: {
		padding: 15,
		borderRadius: 100,
		justifyContent: 'center'
	},
	text: {
		fontSize: 14,
		textAlign: 'center',
		...fontStyles.bold
	},
	green: {
		backgroundColor: colors.green
	},
	greenText: {
		color: colors.white
	},
	blue: {
		backgroundColor: colors.green
	},
	blueText: {
		color: colors.white
	},
	orange: {
		backgroundColor: colors.green200
	},
	orangeText: {
		color: colors.white
	},
	infoText: {
		color: colors.green200
	},
	confirm: {
		backgroundColor: colors.green200,
		minHeight: 50
	},
	confirmText: {
		color: colors.white
	},
	roundedNormal: {
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.green200,
		padding: 8
	},
	roundedNormalText: {
		color: colors.green200
	},
	normal: {
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.green600
	},
	normalText: {
		color: colors.green600
	},
	transparent: {
		backgroundColor: colors.transparent,
		borderWidth: 1,
		borderColor: colors.white
	},
	transparentNoBorder: {
		backgroundColor: colors.transparent,
		borderWidth: 0,
	},
	cancel: {
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.grey400
	},
	cancelText: {
		color: colors.grey400
	},
	signingCancel: {
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.green
	},
	signingCancelText: {
		color: colors.green
	},
	warning: {
		backgroundColor: colors.red
	},
	info: {
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.green
	},
	warningText: {
		color: colors.white
	},
	warningTextEmpty: {
		color: colors.red
	},
	neutral: {
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.grey500
	},
	neutralText: {
		color: colors.grey500
	},
	sign: {
		backgroundColor: colors.green,
		borderWidth: 1,
		borderColor: colors.green
	},
	signText: {
		color: colors.white
	},
	danger: {
		backgroundColor: colors.red,
		borderColor: colors.red,
		borderWidth: 1
	},
	whiteText: {
		...fontStyles.bold,
		color: colors.white
	},
	viewText: {
		fontSize: 18,
		...fontStyles.bold,
		color: colors.white
	},
	view: {
		borderWidth: 1,
		borderColor: colors.white
	}
});

function getStyles(type) {
	let fontStyle, containerStyle;
	switch (type) {
		case 'orange':
			fontStyle = styles.orangeText;
			containerStyle = styles.orange;
			break;
		case 'blue':
			fontStyle = styles.blueText;
			containerStyle = styles.blue;
			break;
		case 'green':
			fontStyle = styles.greenText;
			containerStyle = styles.green;
			break;
		case 'confirm':
			fontStyle = styles.confirmText;
			containerStyle = styles.confirm;
			break;
		case 'normal':
			fontStyle = styles.normalText;
			containerStyle = styles.normal;
			break;
		case 'rounded-normal':
			fontStyle = styles.roundedNormalText;
			containerStyle = styles.roundedNormal;
			break;
		case 'cancel':
			fontStyle = styles.cancelText;
			containerStyle = styles.cancel;
			break;
		case 'signingCancel':
			fontStyle = styles.signingCancelText;
			containerStyle = styles.signingCancel;
			break;
		case 'transparent':
			fontStyle = styles.whiteText;
			containerStyle = styles.transparent;
			break;
		case 'transparent-blue':
			fontStyle = styles.normalText;
			containerStyle = styles.transparent;
			break;
		case 'transparent-white':
			fontStyle = styles.whiteText;
			containerStyle = styles.transparentNoBorder;
			break;
		case 'warning':
			fontStyle = styles.warningText;
			containerStyle = styles.warning;
			break;
		case 'warning-empty':
			fontStyle = styles.warningTextEmpty;
			containerStyle = styles.transparent;
			break;
		case 'info':
			fontStyle = styles.infoText;
			containerStyle = styles.info;
			break;
		case 'neutral':
			fontStyle = styles.neutralText;
			containerStyle = styles.neutral;
			break;
		case 'danger':
			fontStyle = styles.confirmText;
			containerStyle = styles.danger;
			break;
		case 'sign':
			fontStyle = styles.signText;
			containerStyle = styles.sign;
			break;
		case 'view':
			fontStyle = styles.viewText;
			containerStyle = styles.view;
			break;
		default:
			throw new Error('Unknown button type');
	}

	return {
		fontStyle: [styles.text, fontStyle],
		containerStyle: [styles.container, containerStyle]
	};
}

export default getStyles;
