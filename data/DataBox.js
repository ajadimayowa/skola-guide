import Department from "./models/Department"
import Course from "./models/Subject"
import Book from "./models/Book"

export const DashboardActions = ['Find A Tutor', 'Find A Library', 'Join Book Club', 'Take A Quiz']





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

export const All_Books = [
    new Course(['cs', 'cf'], 'ma', 'Mathematics', '#D0A208'),
    new Course(['cs', 'cf', 'ca', 'ct'], 'en', 'English', '#D0A208'),
    new Course(['cs'], 'ph', 'Physics', '#D0A208'),
    new Course(['cs'], 'ch', 'Chemistry', '#D0A208'),
    new Course(['cs'], 'bi', 'Biology', '#D0A208'),
    new Course(['ca'], 'ap', 'Applied Art', '#fdd037'),
    new Course(['ca'], 'fi', 'Fine Art', '#fdd037'),
    new Course(['ca', 'cs'], 'el', 'English Literature', '#fdd037'),
    new Course(['ca'], 'te', 'Textile', '#fdd037'),
    new Course(['ca'], 'jo', 'Journalism', '#fdd037'),
    new Course(['cf'], 'bu', 'Business Studies', '#12ADC1'),
    new Course(['cf'], 'ec', 'Economics', '#12ADC1'),
    new Course(['cf'], 'co', 'Commerce', '#12ADC1'),
    new Course(['cf'], 'ac', 'Accounting', '#12ADC1'),
    new Course(['ca', 'cf'], 'po', 'Political Science', '#12ADC1'),
    new Course(['cf'], 'ad', 'Administative Study', '#12ADC1'),
    new Course(['cf'], 'ba', 'Banking', '#12ADC1'),
    new Course(['cf'], 'bk', 'Book Keeping', '#12ADC1'),

]