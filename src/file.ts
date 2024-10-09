import { formatIsoDate } from "./util/date";
import image1 from "@/assets/2021_A009_01_02220240828T112615A.png";
import image2 from "@/assets/2021_A009_02_05320240829T164956A.png";
import image3 from "@/assets/2021_A009_04_05520240902T141219A.png";
import image4 from "@/assets/2021_A009_05_08420240903T095707A.png";
import image5 from "@/assets/2021_A009_06_00420240903T103805A.png";

export type fileType = {
  fileName: string;
  createdAt: string;
  awaitTime: number;
  imageSrc: string;
  fileId: string;
};

export const fileList: fileType[] = [
  {
    fileId: "awelkfn3s2jdkf",
    fileName: "2021_A009_01_02220240828T112615A",
    createdAt: formatIsoDate("2024-09-24T16:24:33.15124", "YYYY.MM.DD HH:mm"),
    imageSrc: image1,
    awaitTime: 2000,
  },
  {
    fileId: "gkrnlsek211kakwdm2",
    fileName: "2021_A009_02_05320240829T164956A",
    createdAt: formatIsoDate("2024-09-24T16:28:22.15124", "YYYY.MM.DD HH:mm"),
    imageSrc: image2,
    awaitTime: 1500,
  },
  {
    fileId: "awkdmxxxnzz1132",
    fileName: "2021_A009_04_05520240902T141219A",
    createdAt: formatIsoDate("2024-09-24T16:29:33.15124", "YYYY.MM.DD HH:mm"),
    imageSrc: image3,
    awaitTime: 1000,
  },
  {
    fileId: "ak21231lalkznf8",
    fileName: "2021_A009_05_08420240903T095707A",
    createdAt: formatIsoDate("2024-09-24T16:35:33.15124", "YYYY.MM.DD HH:mm"),
    imageSrc: image4,
    awaitTime: 1200,
  },
  {
    fileId: "28awjdk1lnas",
    fileName: "2021_A009_06_00420240903T103805A",
    createdAt: formatIsoDate("2024-09-24T17:01:33.15124", "YYYY.MM.DD HH:mm"),
    imageSrc: image5,
    awaitTime: 2400,
  },
];
