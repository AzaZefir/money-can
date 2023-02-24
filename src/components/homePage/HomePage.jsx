import React from 'react';
import { Header } from '../common/header/Header';
import { About } from './aboutBlock/About';
import { Constructor } from './ConstructorBlock/Constructor';
import { ContuctUs } from './contucUs/ContuctUs';
import { DepartmentCards } from './departmentsCards/DepartmentCards';
import { ImportantToUs } from './ImportantToUs/ImportantToUs';
import { NewCollection } from './newCollection/NewCollection';
import { Reviews } from './reviews/Reviews';

export const HomePage = () => {
  return (
    <div>
      <About />
      <Constructor />
      <ImportantToUs />
      <DepartmentCards />
      <NewCollection />
      <Reviews />
      <ContuctUs/>
    </div>
  );
};
