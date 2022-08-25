import Department from "../models/Department"
import Course from "../models/Course"

export const DashboardActions = ['Find A Tutor', 'Find A Library', 'Join Book Club', 'Take A Quiz']

export const DEPARTMENTS = [
    new Department(1, "science", 'Science'),
    new Department(2, 'attach-money', 'Finance'),
    new Department(3, 'color-lens', 'Art'),
    new Department(4, 'question-answer', 'Trivia')

]

export const Science_Courses = [
    new Course(1, 'Mathematics', '#D0A208'),
    new Course(2, 'English', '#D0A208'),
    new Course(3, 'Physics', '#D0A208'),
    new Course(4, 'Chemistry', '#D0A208'),
    new Course(5, 'Biology', '#D0A208'),
]

export const Art_Courses = [
    new Course(1, 'Applied Art', '#fdd037'),
    new Course(2, 'Fine Art', '#fdd037'),
    new Course(3, 'English Literature', '#fdd037'),
    new Course(4, 'Textile', '#fdd037'),
    new Course(5, 'Journalism', '#fdd037'),
]

export const Finance_Courses = [
    new Course(1, 'Business Studies', '#12ADC1'),
    new Course(2, 'Economics', '#12ADC1'),
    new Course(3, 'Commerce', '#12ADC1'),
    new Course(4, 'Accounting', '#12ADC1'),
    new Course(5, 'Political Science', '#12ADC1'),
    new Course(6, 'Administative Study', '#12ADC1'),
    new Course(7, 'Banking', '#12ADC1'),
    new Course(8, 'Book Keeping', '#12ADC1'),
]

export const Trivia_Courses = [
    new Course(1, 'History Of Nigeria', '#E79C3D'),
    new Course(2, 'Binging Down Gadaffi', '#E79C3D'),
    new Course(3, 'The Ogbomos People', '#E79C3D'),
    new Course(4, 'Lagos To The World', '#E79C3D'),
    new Course(5, 'Letter To Alex', '#E79C3D'),
]