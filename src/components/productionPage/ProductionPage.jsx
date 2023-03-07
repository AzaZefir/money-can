import React from 'react';
import designStars from './../../assets/images/designDepartment/designStars.svg';
import prod1 from './../../assets/images/production/pexels-the-lazy-artist-gallery-1342609.jpg';
import prod2 from './../../assets/images/production/pexels-angela-roma-7480096.jpg';
import prod3 from './../../assets/images/production/pexels-cottonbro-studio-4622423.jpg';
import starSvg from './../../assets/images/designDepartment/designStars.svg';
import { Button } from './../common/button/Button';
import { ContuctUs } from './../common/callUs/ContuctUs';
import { DesignBossWorks } from '../designDepPage/designBoss/designBossWorks/DesignBossWorks';

export const ProductionPage = () => {
  return (
    <section className="production">
      <section className="production__description">
        <div className="container">
          <h2>Производство</h2>
          <p>
            Швейный цех является производственным подразделением, которое занимается пошивом одежды,
            используя ручную и машинную швейную технику. Обычно производство одежды начинается с
            подготовки документации, включающей в себя конструкцию и раскрой модели. Затем швейное
            подразделение оформляет производственную заявку, в которой указывается необходимое
            количество материала, из которого будет изготовлена одежда. Далее следует производство и
            обработка материала. В этот процесс входит предварительный раскрой, швейная обработка,
            производство и обработка деталей модели, а также контроль качества. Затем швейное
            подразделение производит сборку изделия, включая контроль и установку деталей,
            присоединение аксессуаров и декоративных элементов, а также нанесение именной или
            логотипной этикетки. В завершении производства изделие упаковывается и отправляется на
            склад или выставку.
          </p>
        </div>
      </section>
      <section className="first-production">
        <div className="container">
          <figure>
            <img src={prod1} alt="производство" />
          </figure>
          <div>
            <div>
              <div>
                <p>
                  <strong>Руководитеь отдела:</strong> Бирдемкеева Зарина
                </p>
                <p>
                  <strong>Специализация:</strong>{' '}
                  <ul>
                    <li>
                      худи - от <strong>2000</strong> руб.
                    </li>
                    <li>
                      платья - от <strong>1800</strong> руб.
                    </li>
                    <li>
                      пиджак - от <strong>2000</strong> руб.
                    </li>
                    <li>
                      брюки - от <strong>500 </strong> руб.
                    </li>
                    <li>
                      куртки - от <strong>1500</strong> руб.
                    </li>
                  </ul>
                </p>
                <p>
                  <strong>Мощность:</strong> 200 шт. в день
                </p>
                <p>
                  <strong>Колличество машинок:</strong>
                  <ul>
                    <li>15 прямострочек</li>
                    <li>3 спецмашинок</li>
                  </ul>
                </p>
              </div>
              <figure>
                <img src={starSvg} alt="" />
              </figure>
            </div>
            <div className="first-production_btn">
              <Button>Просмотреть каталог</Button> <Button>Забронировать</Button>
            </div>
          </div>
        </div>
        <DesignBossWorks />
      </section>

      <section className="first-production">
        <div className="container">
          <figure>
            <img src={prod2} alt="производство" />
          </figure>
          <div>
            <div>
              <div>
                <p>
                  <strong>Руководитеь отдела:</strong> Бирдемкеева Зарина
                </p>
                <p>
                  <strong>Специализация:</strong>{' '}
                  <ul>
                    <li>
                      худи - от <strong>2000</strong> руб.
                    </li>
                    <li>
                      платья - от <strong>1800</strong> руб.
                    </li>
                    <li>
                      пиджак - от <strong>2000</strong> руб.
                    </li>
                    <li>
                      брюки - от <strong>500 </strong> руб.
                    </li>
                    <li>
                      куртки - от <strong>1500</strong> руб.
                    </li>
                  </ul>
                </p>
                <p>
                  <strong>Мощность:</strong> 200 шт. в день
                </p>
                <p>
                  <strong>Колличество машинок:</strong>
                  <ul>
                    <li>15 прямострочек</li>
                    <li>3 спецмашинок</li>
                  </ul>
                </p>
              </div>
              <figure>
                <img src={starSvg} alt="" />
              </figure>
            </div>
            <div className="first-production_btn">
              <Button>Просмотреть каталог</Button> <Button>Забронировать</Button>
            </div>
          </div>
        </div>
        <DesignBossWorks />{' '}
      </section>

      <section className="first-production">
        <div className="container">
          <figure>
            <img src={prod3} alt="производство" />
          </figure>
          <div>
            <div>
              <div>
                <p>
                  <strong>Руководитеь отдела:</strong> Бирдемкеева Зарина
                </p>
                <p>
                  <strong>Специализация:</strong>{' '}
                  <ul>
                    <li>
                      худи - от <strong>2000</strong> руб.
                    </li>
                    <li>
                      платья - от <strong>1800</strong> руб.
                    </li>
                    <li>
                      пиджак - от <strong>2000</strong> руб.
                    </li>
                    <li>
                      брюки - от <strong>500 </strong> руб.
                    </li>
                    <li>
                      куртки - от <strong>1500</strong> руб.
                    </li>
                  </ul>
                </p>
                <p>
                  <strong>Мощность:</strong> 200 шт. в день
                </p>
                <p>
                  <strong>Колличество машинок:</strong>
                  <ul>
                    <li>15 прямострочек</li>
                    <li>3 спецмашинок</li>
                  </ul>
                </p>
              </div>
              <figure>
                <img src={starSvg} alt="" />
              </figure>
            </div>
            <div className="first-production_btn">
              <Button>Просмотреть каталог</Button>
              <Button>Забронировать</Button>
            </div>
          </div>
        </div>
        <DesignBossWorks />
      </section>

      <ContuctUs />
    </section>
  );
};
