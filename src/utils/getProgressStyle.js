import PilotIcon from '../assets/pilot.png'
import DriverIcon from '../assets/driver.png'
import CapitainIcon from '../assets/captain.png'
import Bussinessmanicon from '../assets/businessman.png'
import StudentIcon from '../assets/student.png'
import SchoolboyIcon from '../assets/schoolboy.png'

export const getProgressStyle = (perc, fields) => {
  switch (true) {
    case perc > 150: return {icon: PilotIcon, style: {backgroundColor: '#94e100'}}
    case perc > 125 && perc < 151: return {icon: CapitainIcon, style: {backgroundColor: '#94e100'}}
    case perc >= 100 && perc < 126: return {icon: DriverIcon, style: {backgroundColor: '#94e100'}}
    case perc > 40 && perc < 100: return {icon: Bussinessmanicon, style: {backgroundColor: '#ffda44'}}
    case perc > 30 && perc < 71: return {icon: StudentIcon, style: {backgroundColor: '#ff8400', color: 'white'}}
    case perc >= 6  && perc < 31: return {icon: SchoolboyIcon, style: {backgroundColor: '#ff5400', color: 'white'}}
    case perc >= 0  && perc < 6: return {icon: SchoolboyIcon, style: {backgroundColor: '#ff5400', color: 'white'}}
    default: return {icon: PilotIcon, style: {backgroundColor: '#94e100'}}
  }
}