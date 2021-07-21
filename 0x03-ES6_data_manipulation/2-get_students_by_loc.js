/* eslint-disable */
export default function getStudentsByLocation(students, city) {
    if (!Array.isArray(students)) {
        return [];
    };
    students.filter((item) => {
        return item.location === city;
    });
};
