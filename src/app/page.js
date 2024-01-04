import Banner from '@/components/Pages/Home/Banner/Banner';
import DoctorContainer from '@/components/Pages/Home/DoctorContainer/DoctorContainer';
import Header from '@/components/Shared/Header/Header';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <DoctorContainer></DoctorContainer>
    </div>
  );
};

export default page;