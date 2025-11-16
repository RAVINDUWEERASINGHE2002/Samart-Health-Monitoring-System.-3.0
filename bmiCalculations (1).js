export const calculateBMI = (weight, height) => {
  const heightInMeters = height / 100;
  return parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(2));
};

export const getBMICategory = (bmi) => {
  if (bmi < 18.5) return { category: 'Underweight', color: '#3B82F6' };
  if (bmi < 25) return { category: 'Normal', color: '#10B981' };
  if (bmi < 30) return { category: 'Overweight', color: '#F59E0B' };
  return { category: 'Obese', color: '#EF4444' };
};

export const getIdealWeightRange = (height) => {
  const heightInMeters = height / 100;
  const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
  const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
  return { min: minWeight, max: maxWeight };
};