import Carousel from '@/components/reusable/Carousel'
import CalendarComponent from '@/components/userDashboard/CalendarComponent'
import StarterComponent from '@/components/userDashboard/StarterComponent'
import UserStats from '@/components/userDashboard/UserStats'
import { CarouselItemData, UserDashboardInfo, UserDashboardProps } from '@/interfaces/types'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

const UserDashboard: NextPage<UserDashboardProps> = ({carouselItems, userDashboardInfo}) => {
  return (
    <>
      <StarterComponent userDashboardInfo={userDashboardInfo}/>
      <Carousel carouselItems={carouselItems} />
      <UserStats userDashboardInfo={userDashboardInfo} />
      <CalendarComponent />
    </>
  )
}

export const getStaticProps: GetStaticProps<UserDashboardProps> = async () => {
  const [carouselResponse, userDashboardInfoResponse] =
    await Promise.all([
      fetch("http://localhost:3031/carousel"),
      fetch("http://localhost:3031/userDashboardInfo")
    ]);

  const carouselItems: CarouselItemData[] = await carouselResponse.json();
  
  const userDashboardInfoArray = await userDashboardInfoResponse.json();
  const userDashboardInfo: UserDashboardInfo = userDashboardInfoArray[0];

  return {
    props: {
      carouselItems,
      userDashboardInfo
    },
    revalidate: 10,
  };
};

export default UserDashboard
