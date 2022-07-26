import React from 'react';
import CarItem from '../../components/CarItem/CarItem';
import { ICarItem } from "../../intarfaces";
import Select from '../../components/Select/Select';
import styles from "./cars.module.scss";
import { GetStaticProps } from 'next';

interface CarsProps {
  cars: ICarItem[];
}


export const getStaticProps: GetStaticProps<CarsProps> = async () => {
	const response = await fetch(
    `https://api.carmart.ru/cars/temp?page=1&perPage=24&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand=Audi&brand=Mitsubishi&brand=Volkswagen&brand=Kia&brand=Honda&brand=Hyundai`
  );
  const data = await response.json();

  return {
    props: { 
      cars: data.list,
    },
  };
}

const Cars = ({ cars }: CarsProps) => {
  return (
    <>
      <Select />
      <ul className={styles.cars}>
        {cars && cars.map((car: ICarItem) => <CarItem key={car._id} car={car} />)}
      </ul>
    </>
  );
};

export default Cars;