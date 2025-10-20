import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddLayout from '../component/AddLayout'
import Dashbordscreen from '../component/Dashbordscreen'
import StudentScreen from '../component/StudentScreen'
import CourseScreen from '../component/CourseScreen'
import SettingSreen from '../component/SettingScreen'
import { DemoOneScreen } from '../component/DemoOneScreen'
import Demo2Screen from '../component/Demo2Screen'
import Demo3Screen from '../component/Demo3Screen'
import Profile from '../component/Profile'
import Profile2Screen from '../component/Profile2Screen'
import Slider from '../component/Slider'

export default function AppRoutes() {
  return (
    <Routes>
        {/* aaplyakde ekadhi file nasel tr error yenar nahi tr home screen la janar */}
      <Route path="/" element={<AddLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashbordscreen />} />
        <Route path="students" element={<StudentScreen />} />
        <Route path="courses" element={<CourseScreen />} />
        <Route path="settings" element={<SettingSreen />} />
        <Route path="domoOneScreen" element={<DemoOneScreen />} />
        <Route path="domoTwoScreen" element={<Demo2Screen />} />
        <Route path="domo3Screen" element={<Demo3Screen />} />
        <Route path="profilescreen" element={<Profile/>}/>
        <Route path="profile2screen" element={<Profile2Screen/>}/>
        <Route path="slider" element={<Slider/>}/>

      </Route>
      {/* Catch all route - redirect to dashboard */}
      {/* home pagela yenyasathi */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
