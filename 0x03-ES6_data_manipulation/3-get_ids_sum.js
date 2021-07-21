/* eslint-disable */
export default function getStudentIdsSum(students) {
    return students.reduce((accumulator, currentValue) => {
        return currentValue.id + accumulator;
    });
};
