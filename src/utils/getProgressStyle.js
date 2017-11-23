import PilotIcon from '../assets/pilot.png'
import DriverIcon from '../assets/driver.png'
import CapitainIcon from '../assets/captain.png'
import Bussinessmanicon from '../assets/businessman.png'
import StudentIcon from '../assets/student.png'
import SchoolboyIcon from '../assets/schoolboy.png'

export const getProgressStyle = (perc) => {
  switch (true) {
    case perc > 100: return {icon: PilotIcon, style: {backgroundColor: '#94e100'}}
    case perc > 80 && perc < 101: return {icon: CapitainIcon, style: {backgroundColor: '#94e100'}}
    case perc > 60 && perc < 81: return {icon: DriverIcon, style: {backgroundColor: '#ffda44'}}
    case perc > 40 && perc < 61: return {icon: Bussinessmanicon, style: {backgroundColor: '#ffda44'}}
    case perc > 20 && perc < 41: return {icon: StudentIcon, style: {backgroundColor: '#ff8400', color: 'white'}}
    case perc > 5 && perc < 21: return {icon: SchoolboyIcon, style: {backgroundColor: '#ff5400', color: 'white'}}
    case perc > 3 && perc < 6: return {icon: SchoolboyIcon, style: {backgroundColor: '#ff5400', color: 'white', right: "-30px"}}
    case perc > 1 && perc < 4: return {icon: SchoolboyIcon, style: {backgroundColor: '#ff5400', color: 'white', right: "-45px"}}
    case perc >= 0 && perc < 2: return {icon: SchoolboyIcon, style: {backgroundColor: '#ff5400', color: 'white', right: "-60px"}}
    default: return {icon: PilotIcon, style: {backgroundColor: '#94e100'}}
  }
}