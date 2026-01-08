import "./loaderHorizontal.css";

type LoaderHorizontalProps = { styles: string };

const LoaderHorizontal = ({ styles }: LoaderHorizontalProps) => {
  return <div className={`loaderHorizontal ${styles}`}></div>;
};

export default LoaderHorizontal;
