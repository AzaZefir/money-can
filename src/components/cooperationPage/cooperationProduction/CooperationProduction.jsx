import React from 'react';
import arr2 from './../../../assets/images/cooperationImg/Arrow 2.svg';
import currencySvg from './../../../assets/images/cooperationImg/currency.svg';
import buildingSvg from './../../../assets/images/cooperationImg/build.svg';

export const CooperationProduction = () => {
  return (
    <div className="container">
      <div className="cooperation__production_arrow">
        <img src={arr2} alt="" />
      </div>
      <div className="cooperation__production_block">
        <div>
          <img src={buildingSvg} alt="" />
          <h4>Условия сотрудничества: производство</h4>
        </div>
        <ol>
          <li>
            Согласовываете образец, по каторому будет отшита ваша партия заказа с руководителем
            производства
          </li>
          <li>Согласование сроков исполнения заказа</li>
          <li>
            Выбираете параметры упаковки вашего заказа (т.е. этикетки, зип пакеты, лейблы и т.д){' '}
          </li>
        </ol>
        <img src={currencySvg} alt="" />
        <strong>Оплата</strong>
        <ol>
          <li>Мы высылаем вам договор с итоговой суммой</li>
          <li>Оплачиваете 50% от всей суммы прописанной в договоре по реквизитам</li>
          <li>После оплаты мы начинаем закуп ткани и фурнитуры</li>
          <li>За 1 - 2 дня сообщаем вам об окончании пошива партии товара</li>
          <li>Высылаем вам накладную от транпортной компании о приеме груза</li>
          <li>Вы оплачиваете оставшуюся часть суммы указанную в договоре</li>
        </ol>
      </div>
    </div>
  );
};
