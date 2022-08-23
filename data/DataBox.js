import Department from "../models/Department"
import Course from "../models/Course"


export const DEPARTMENTS = [
    new Department(1, "science", 'Science'),
    new Department(2, 'attach-money', 'Finance'),
    new Department(3, 'color-lens', 'Art'),
    new Department(4, 'question-answer', 'Trivia')

]

export const Science_Courses = [
    new Course(1, 'Mathematics'),
    new Course(2, 'English'),
    new Course(3, 'Physics'),
    new Course(4, 'Biology'),
    new Course(5, 'Chemistry'),
]

export const DashboardActions = ['Find A Tutor', 'Find A Library', 'Join Book Club']

export const Art_Courses = [
    new Course(1, 'Applied Art', '#12ADC1'),
    new Course(1, 'Fine Art', '#12ADC1'),
    new Course(1, 'English Literature', '#12ADC1'),
    new Course(1, 'Textile', '#12ADC1'),
    new Course(1, 'Journalism', '#12ADC1'),
]

export const Finance_Courses = [
    new Course(1, 'Business Studies', '#12ADC1'),
    new Course(1, 'Economics', '#12ADC1'),
    new Course(1, 'Commerce', '#12ADC1'),
    new Course(1, 'Accounting', '#12ADC1'),
    new Course(1, 'Political Science', '#12ADC1'),
]