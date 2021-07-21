/* eslint-disable */
export default function getStudentsByLocation(students, city) {
    students.filter((item) => (item.location === city));
};
