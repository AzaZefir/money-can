import React from 'react';
import { ContucForm } from './contuctForm/ContucForm';
import { ContuctCompany } from './contuctCompany/ContuctCompany';
import { ContuctComand } from './contuctComand/ContuctComand';

export const ContuctPage = () => {
  return (
    <section className="contuct-page">
      <section className="contuct-page__form">
        <ContucForm />
      </section>
      <section className="contuct-page__company">
        <ContuctCompany />
      </section>
      <section className="contuct-page__comand">
        <ContuctComand />
      </section>
      <section className='contuct__map'>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11696.552555433744!2d74.60490565!3d42.86992839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1677494983736!5m2!1sru!2skg"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </section>
  );
};
