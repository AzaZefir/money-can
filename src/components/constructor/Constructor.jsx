import React from 'react';
import constrEllipsSvg from '../../assets/images/constructor/constrEllipse.svg';
import constrModelSvg from '../../assets/images/constructor/constrModel.svg';
import { Button } from './../common/button/Button';
import plusSvg from '../../assets/images/constructor/plus.svg';
import minusSvg from '../../assets/images/constructor/minus.svg';
import Slider from 'react-slick';
import addBtnSvg from './../../assets/images/catalogImg/cart-plus 1.svg';
import slImg1 from './../../assets/images/designDepartment/pexels-anubhaw-anand-3756030.jpg';

export const Constructor = () => {
  const settings = {
    infinite: true,
    slidesToShow:1,
    centerMode: true,
    className: 'center',
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide);
    },
  };
  return (
    <div className="constructor">
      <div className="container">
        <div className="constructor__slider">
          <Slider {...settings}>
            <div className="constructor__slider_card">
              <img src={slImg1} alt="" />
            </div>
            <div className="constructor__slider_card">
              <img src={slImg1} alt="" />
            </div>
            <div className="constructor__slider_card">
              <img src={slImg1} alt="" />
            </div>
            <div className="constructor__slider_card">
              <img src={slImg1} alt="" />
            </div>
            <div className="constructor__slider_card">
              <img src={slImg1} alt="" />
            </div>
            <div className="constructor__slider_card">
              <img src={slImg1} alt="" />
            </div>
          </Slider>
        </div>
        <div className="constructor__model">
          <img src={constrModelSvg} alt="" />
          <img src={constrEllipsSvg} alt="" />
        </div>
        <div className="constructor__deps">
          <div className="constructor__deps__types">
            <div className="constructor__deps__textile">
              <h4>Ткань</h4>
              <div>
                <span className="cotton"></span>
                <span className="leather"></span>
                <span className="sintetic"></span>
                <span className="soft-leather"></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="constructor__deps__colors">
              <h4>Цвет</h4>
              <div className="constructor__deps__colors_block">
                <span className="grey"></span>
                <span className="violet"></span>
                <span className="red"></span>
                <span className="grey"></span>
                <span className="khaki"></span>
                <span className="dark"></span>
                <span className="yellow"></span>
                <span className="orange"></span>
                <span className="green"></span>
                <span className="white"></span>
              </div>
            </div>
            <div className="constructor__deps__sizes">
              <h4>Размеры</h4>
              <div>
                <span>
                  <strong>XS</strong>{' '}
                </span>
                <span>
                  <strong>S</strong>{' '}
                </span>
                <span>
                  <strong>L</strong>{' '}
                </span>
                <span>
                  <strong>M</strong>
                </span>
                <span>
                  <strong>XL</strong>{' '}
                </span>
                <span>
                  <strong>XXL</strong>{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="constructor__items__count">
            <h4>Кол-во</h4>
            <div>
              <div>
                <Button>
                  <img src={plusSvg} alt="" />
                </Button>
                <span>
                  <strong>300</strong>{' '}
                </span>
                <Button>
                  <img src={minusSvg} alt="" />
                </Button>
              </div>
              <p>Минимальный заказ: 300 ед</p>
            </div>
          </div>
          <div className="constructor__items__price">
            <div>
              <h4>Цена</h4>
              <div>
                <div>
                  <span>
                    <strong>0.00</strong> RUB
                  </span>
                  <p>Срок исполнения: 1 - 9 дней</p>
                </div>
                <div>
                  <span>
                    <strong>0.00</strong> RUB
                  </span>
                  <span>За одну шт.</span>
                </div>
              </div>
            </div>
            <p>
              * Предложение не является публичной офертой. Итоговая стоимость обсуждается с
              менеджером
            </p>
          </div>
          <div className="constructor__btn">
            <Button>
              <img src={addBtnSvg} alt="" />
            </Button>
            <Button>Получить консультацию</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
