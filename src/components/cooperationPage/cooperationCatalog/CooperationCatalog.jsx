import React from 'react';
import arr1 from './../../../assets/images/cooperationImg/Arrow 1.svg';
import addCatItem from './../../../assets/images/cooperationImg/cartAdd.svg';
import bagSvg from './../../../assets/images/cooperationImg/bag.svg';
import currencySvg from './../../../assets/images/cooperationImg/currency.svg';

export const CooperationCatalog = () => {
  return (
    <div className="container">
      <h2>Условия сотрудничества</h2>
      <section className="cooperation__catalog">
        <div className="cooperation__catalog_arrow">
          <img src={arr1} alt="" />
        </div>
        <div className="cooperation__catalog_block">
          <div>
            <img src={addCatItem} alt="" />
            <h4>Преобретение товара из каталога</h4>
          </div>
          <img src={bagSvg} alt="" /> <strong>Оформление заказа</strong>
          <ol>
            <li>
              Выберите в каталоге изделие, с нужными цветами и размерами, которое хотите заказать.
              Отправьте в корзину
            </li>
            <li>
              В корзине вы можете добавить на ваше усмотрение дополнительную фурнитуру, лейблы,
              упаковку, маркировку и тд.
            </li>
            <li>Убедитесь в правильности указания колличества товаров и итоговой суммы </li>
            <li>Итоговая сумма высветится в электронном калькуляторе</li>
            <li>Нажмите на кнопку “оплатить”</li>
          </ol>
          <img src={currencySvg} alt="" />
          <strong>Оплата</strong>
          <ol>
            <li>
              Оплату производите на наши реквизиты расчетного счета или на карту(реквезиты будут
              указаны после нажатия на кнопку “оплатить”)
            </li>
            <li>Чек об оплате скидываете в нашу бухгалтерию контакты</li>
            <li>Мы высылаем вам подписанный договор</li>
            <li>Вы подписываете договор и высылаете нам копию договора</li>
            <li>
              Мы собираем товар и отправляем вам накладную от транспортной компании (в течении 1 - 2
              дня)
            </li>
            <li>
              Вы оплачиваете стоимость услуги карго (в течении 1-3 дня, транспортная компания грузит
              товар после полной оплаты)
            </li>
            <li>
              Товар подлежит возврату в течении 30 дней со дня отправки, при выявлении очевидных
              браков высылаете нам фото, видео материалы{' '}
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};
