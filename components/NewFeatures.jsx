import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
     <div
      className={`${styles.flexCenter} `}
    > 

      <img src={imgUrl} alt="icon" className="w-15 h-15 object-contain rounded-lg"  />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-blue-300">
     {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-orange-400 leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
