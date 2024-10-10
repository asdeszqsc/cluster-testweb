import styled from "styled-components";
import { fileList, fileType } from "@/file";
import { useState } from "react";
import { ImageSection } from "./imageSection";
import DownloadIcon from "@/assets/download-svgrepo-com.svg";
import { open } from "fs";

export const ServiceHome = () => {
  const [cFileList, setcFileList] = useState<fileType[]>(fileList);
  const [currentData, setCurrentData] = useState<fileType>();

  const loadData = async (fileId: string) => {
    const res = cFileList.find((c) => c.fileId === fileId);
    if (res) setCurrentData({ ...res });

    // console.log(cFileList.find((c) => c.fileId === fileId)?.imageSrc);
  };

  //   const handleDownload = async (file: string) => {
  //     const downloadUrl = window.URL.createObjectURL(await open(file)); // 해당 file을 가리키는 url 생성

  //     const anchorElement = document.createElement("a");
  //     document.body.appendChild(anchorElement);
  //     anchorElement.download = "some file";
  //     anchorElement.href = downloadUrl;

  //     anchorElement.click(); // 코드 상으로 클릭을 해줘서 다운로드를 트리거

  //     document.body.removeChild(anchorElement); // cleanup - 쓰임을 다한 a 태그 삭제
  //     window.URL.revokeObjectUrl(downloadUrl); // cleanup - 쓰임을 다한 url 객체 삭제
  //   };

  return (
    <Layout>
      <LeftSection>
        <ImageSection
          imageSrc={currentData?.imageSrc}
          awaitTime={currentData?.awaitTime}
          title={currentData?.fileName}
        />
      </LeftSection>
      <RightSection>
        <UploadLabel htmlFor="upload">업로드</UploadLabel>
        <input
          style={{ display: "none" }}
          id="upload"
          type="file"
          onChange={(e) => {
            console.log(e.target.files);
          }}
        />
        <FilelistContainer>
          <thead>
            <tr>
              <TableHeader size="350">fileName</TableHeader>
              <TableHeader size="200">created</TableHeader>
              <TableHeader size="50">file</TableHeader>
            </tr>
          </thead>
          <tbody>
            {cFileList.map((f) => (
              <FileRow selected={currentData?.fileId === f.fileId} key={f.fileId} onClick={() => loadData(f.fileId)}>
                <td>{f.fileName}</td>
                <td>{f.createdAt ?? ""}</td>
                <td>
                  <CustomTd>
                    <DownloadIcon />
                  </CustomTd>
                </td>
              </FileRow>
            ))}
          </tbody>
        </FilelistContainer>
      </RightSection>
    </Layout>
  );
};

const CustomTd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  padding: 40px 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
`;

const UploadLabel = styled.label`
  display: flex;
  width: 96px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  height: 36px;
  background-color: var(--color-grey-800);
  color: white;
  border: none;
  font-weight: 500;

  &:hover,
  &:active {
    cursor: pointer;
    background-color: var(--color-grey-700);
  }

  &:disabled {
    background-color: var(--color-grey-300);
    cursor: not-allowed;
  }
`;

const RightSection = styled.div`
  height: 100%;
  width: 40%;
`;

const FilelistContainer = styled.table``;

const TableHeader = styled.th<{ size: string }>`
  width: ${(p) => p.size ?? "100"}px;
  background-color: white;
  color: black;
  border: 1px solid black;
`;

const FileRow = styled.tr<{ selected: boolean }>`
  &:hover {
    background-color: #e3e3e3;
    cursor: pointer;
  }

  td {
    ${(p) => p.selected && "background-color: #e3e3e3"};
    padding: 5px;
    border: 1px solid;
  }
`;
