import React from 'react';
import bossSvg from '../../../assets/images/designDepartment/boss.jpg';
import quoteSvg from '../../../assets/images/designDepartment/quote 1.svg';
import { DesignBossWorks } from './designBossWorks/DesignBossWorks';


export const DesignBoss = () => {
  return (
    <section className="design-department__boss">
      <div className="container">
        <figure>
          <img src={bossSvg} alt="Руководитель отдела" title="Руководитель дизайн отдела" />
        </figure>
        <div>
          <p>
            <strong>Руководитеь отдела:</strong> Бирдемкеева Зарина
          </p>
          <p>
            <strong>Услуги:</strong> разработка лекал, пошив образца
          </p>
          <p>
            <strong>Прайс:</strong>{' '}
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
            <img src={quoteSvg} alt="" />
            Руководитель дизайн-отдела по пошиву одежды отвечает за разработку и реализацию дизайнов
            одежды для производства. Он должен понимать тенденции в одежде, а также предпочтения
            потребителей и использовать эту информацию для создания дизайнов одежды, которые будут
            привлекать покупателей. Он должен также координировать работу своего отдела и
            предоставлять консультации другим отделам в организации.
            <img src={quoteSvg} alt="" />
          </p>
        </div>
      </div>
      <DesignBossWorks/>
    </section>
  );
};
