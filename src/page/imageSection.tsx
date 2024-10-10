import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import styled from "styled-components";
import clusterImg from "@/assets/cluster.png";

interface ImageSectionProps {
  awaitTime?: number;
  imageSrc?: string;
  title?: string;
}

export const ImageSection = ({ ...props }: ImageSectionProps) => {
  const [onLoading, setOnLoading] = useState(false);
  const [curImg, setCurImg] = useState<string | undefined>("");

  useEffect(() => {
    setOnLoading(true);

    setTimeout(() => {
      setOnLoading(false);
      setCurImg(props.imageSrc);
    }, props.awaitTime);
  }, [props.awaitTime]);

  return (
    <SectionLayout>
      <p>NIR 데이터를 이용한 5개의 군집 분류 결과</p>
      <Title>{props.title ?? ""}</Title>
      <img src={curImg ?? clusterImg} />
      {onLoading && (
        <Loading>
          <RotatingLines />
        </Loading>
      )}
    </SectionLayout>
  );
};

const SectionLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: var(--color-grey-400);
  width: 90%;

  p{
    line-height: 2rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    text-align: center;
  }
`;

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  width: 100%;
  min-height: 32px;
  background-color: var(--color-grey-700);
  color: white;
  text-align: center;
  padding: 0.5rem;
  border-radius: 4px;
`;
