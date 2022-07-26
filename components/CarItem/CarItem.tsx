import Image from 'next/image';
import React from 'react';
import { ICarItem } from "../../intarfaces";
import styles from "./CartItem.module.scss";

interface CarItemProps {
  car: ICarItem;
}

const CarItem = ({ car }: CarItemProps): JSX.Element => {
  const srcImage = "https://photobank.carmart.ru/photo/stock-default.jpg";

  return (
    <div className={styles.car}>
      <div className={styles.name}>
        <span className={styles.model}>
          {car.classifieds.description} {car.feedData.equipmentVariantName}
        </span>
        <span className={styles.year}>{car.feedData.modelYear}</span>
      </div>
      <div className={styles.vin}>{car.feedData.vin}</div>
      <div className={styles.images}>
        {car.photobank.imgs.map((img: any, index: number) => (
          <Image
            loader={() => srcImage}
            width={264}
            height={196}
            key={index}
            src={srcImage}
            alt="img"
          />
        ))}
      </div>
      <div className={styles.engine}>
        <span className={styles.title}>Двигатель</span>
        <span className={styles.info}>{car.feedData.engine.engineName}</span>
      </div>
      <div className={styles.transmission}>
        <span className={styles.title}>КПП</span>
        <span className={styles.info}>
          {car.feedData.equipmentVariantTransmissionType}
        </span>
      </div>
      <div className={styles.distance}>
        <span className={styles.title}>Пробег</span>
        <span className={styles.info}>{car.feedData.autoProbeg}</span>
      </div>
      <div className={styles.color}>
        <span className={styles.title}>Цвет</span>
        <span className={styles.info}>
          {car.feedData.colorByClassifierName}
        </span>
      </div>
      <div className={styles.pakages}>
        <span className={styles.title}>Пакеты</span>
        <span className={styles.info}>
          {car.feedData.baseOptions ? (
            <>
              {car.feedData.baseOptions[0].optionName.slice(0, 24)}...
              <span>
                (+ ещё {car.feedData.baseOptions.length} пакета (ов) )
              </span>
            </>
          ) : (
            "Нет"
          )}
        </span>
      </div>
      <div className={styles.price}>
        <div className={styles.retailPrice}>
          <span>{car.feedData.autoPrice}</span> ₽
        </div>
        <div className={styles.extra}>
          Доп. опции на <span>999999</span> ₽
        </div>
      </div>
      <button className={styles.button}>Купить</button>
    </div>
  );
};

export default CarItem;