import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import styled from "styled-components";

interface ImageSectionProps {
  awaitTime?: number;
  imageSrc?: string;
  title?: string;
}

export const ImageSection = ({ ...props }: ImageSectionProps) => {
  const [onLoading, setOnLoading] = useState(false);

  useEffect(() => {
    setOnLoading(true);

    setTimeout(() => {
      setOnLoading(false);
    }, props.awaitTime);
  }, [props.awaitTime]);

  return props.title ? (
    <SectionLayout>
      {onLoading ? (
        <RotatingLines />
      ) : (
        <div>
          <Title>{props.title}</Title>
          <img src={props.imageSrc} />
        </div>
      )}
    </SectionLayout>
  ) : (
    <NoneDataSection>Select file</NoneDataSection>
  );
};

const SectionLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const NoneDataSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  background-color: var(--color-grey-700);
  color: white;
  text-align: center;
  padding: 0.5rem;
  border-radius: 4px;
`;
