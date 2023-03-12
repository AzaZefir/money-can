import CatalogSkeleton from '../../common/skeleton/CatalogSeleton';
import { CatalogCard } from './catalogCard/CatalogCard';

export const CatalogCards = ({ searchedCatalogItems, isLoading }) => {
  return (
    <div className="catalog__cards">
      {isLoading
        ? [...new Array(6)].map((_,index) => <CatalogSkeleton key={index} />)
        : searchedCatalogItems.map((item) => <CatalogCard key={item.image} {...item} />)}
    </div>
  );
};
