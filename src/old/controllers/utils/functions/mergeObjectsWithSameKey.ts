// @ts-nocheck

const mergeObjectsWithSameKey = (array: any[], key: string) => {
	return array.reduce(
		(result: { [key]: number }[], currentValue: { [key]: number }) => {
			const index = result.findIndex(
				(item) => item[key] === currentValue[key]
			);

			index >= 0
				? (result[index] = { ...result[index], ...currentValue })
				: result.push(currentValue);

			return result;
		},
		[]
	);
};

export default mergeObjectsWithSameKey;
