import React from 'react';
import qualitySvg from '../../../assets/images/homePageImg/qualitySvg.svg';
import speedSvg from '../../../assets/images/homePageImg/speedSvg.svg';
import responsibilitySvg from '../../../assets/images/homePageImg/resposibility.svg';

export const ImportantToUs = () => {
  return (
    <section className="important-to-us-bg">
      <div className="container d-flex flex-column justify-content-between align-items-center py-5">
        <h2>Что для нас важно</h2>
        <div className="important-to-us-cards row d-flex justify-content-between pt-5">
          <div className="col  d-flex justify-content-between flex-column align-items-center">
            <img src={qualitySvg} alt="Качество" />
            <h4 className="important-to-us-text py-3">Качество</h4>
            <p>
              Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного
              качества
            </p>
          </div>
          <div className="col d-flex justify-content-between flex-column align-items-center">
            <img src={speedSvg} alt="Скорость" />
            <h4 className="important-to-us-text py-3">Скорость</h4>
            <p>
              Благодаря отлаженной системе в Moneycan можем отшивать до 300-та единиц продукции в
              наших собственных цехах
            </p>
          </div>
          <div className="col d-flex justify-content-between flex-column align-items-center">
            <img src={responsibilitySvg} alt="ответственность" />
            <h4 className="important-to-us-text py-3">Ответственность</h4>
            <p>
              Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда -
              все это MoneyCan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
