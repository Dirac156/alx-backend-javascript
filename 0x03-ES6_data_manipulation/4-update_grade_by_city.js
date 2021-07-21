/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrade) {
    return students.map((student) => {
        const studentGrade = newGrade.filter((element) => ( element.studentId === student.id ))
                                     .map((x) => x.grade)[0];
        student["grade"] = studentGrade || 'N/A';
        return student; 
    }).filter((element) => (element.location === city));
};
