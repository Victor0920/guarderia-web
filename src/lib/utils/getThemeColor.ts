const getThemeColor = (color: string) => {
	switch (color) {
		case 'darkblue':
			return '#2d3047';
		case 'lightblue':
			return '#00b2ca';
		case 'green':
			return '#7dcfb6';
		case 'orange':
			return '#fa7e61';
		case 'lightorange':
			return '#fee1c7';
		default:
			return color;
	}
};

export default getThemeColor;
