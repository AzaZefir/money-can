import React from 'react'
import arr4 from './../../../assets/images/cooperationImg/Arrow 4.svg';
import delSvg from './../../../assets/images/cooperationImg/delivery.svg';
import delAvtoSvg from './../../../assets/images/cooperationImg/delAvto.svg';
import delAviaSvg from './../../../assets/images/cooperationImg/delAvia.svg';

export const CooperationDelivery = () => {
  return (
    <div className="container">
          <div className="cooperation__delivery_arrow">
            <img src={arr4} alt="" />
          </div>
          <div className="cooperation__delivery_content">
            <div>
              <img src={delSvg} alt="" />
              <h4>Доставка</h4>
            </div>
            <ul>
              <li>
                <img src={delAvtoSvg} alt="" />
                Авто карго
              </li>
              <li className="delLi">Срок 4-15 дней до Москвы</li>
              <li className="delLi">Стоимость 35-40 руб/кг до Москвы</li>
              <li>
                <img src={delAviaSvg} alt="" />
                Авиа карго
              </li>
              <li className="delLi">Срок 2-3 дня до Москвы</li>
              <li className="delLi">Стоимость 150-190 руб/кг до Москвы</li>
              <li className="delLi delLiCol">
                Если доставка не в Москву, доставка товара производится методом доотправки
                (досылом), через логистические компании, работающие внутри РФ за отдельную плату по
                своим тарифам.
              </li>
              <li className="delLi delLiCol">
                Пример: груз должен дойти до Ульяновска(любого другого города). Мы отправили товар
                из Бишкека в Москву по 30р/кг. После прибытия в Москву Карго самостоятельно
                перенаправит груз до Ульяновска. Оплата за доставку из Москвы до Ульяновска
                производится отдельно по тарифу логистической комании, работающей в РФ.
              </li>
            </ul>
          </div>
        </div>
  )
}
