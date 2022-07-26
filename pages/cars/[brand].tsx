import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import CarItem from "../../components/CarItem/CarItem";
import Select from '../../components/Select/Select';
import { options } from '../../helpers/helpers';
import styles from "./cars.module.scss";
import { ICarItem } from '../../intarfaces';

interface BrandProps {
  cars: ICarItem[];
} 

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: options.map((option) => `/cars/${option.value}`),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params) {
    return {
      notFound: true
    }
  }

  const brandName = options.some((option) => option.value === params.brand);

  if (!brandName) {
    return {
      notFound: true,
    };
  }

  const response = await fetch(
    `https://api.carmart.ru/cars/temp?page=1&perPage=24&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand=${params.brand}`
  );
  const data = await response.json();
  return {
    props: { cars: data.list },
  };
};

const Brand = ({ cars }: BrandProps) => {
  return (
    <>
      <Select />
      <ul className={styles.cars}>
        {cars && cars.map((car: ICarItem) => <CarItem key={car._id} car={car} />)}
      </ul>
    </>
  );
};

export default Brand; 