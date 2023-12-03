import { SelectedImageProps } from "../common/shared.types";

export interface CardProps {
  project: {
    id: number;
    title: string;
    type: string;
    tags: string[];
    description: string;
    link: {
      icon: string;
      label: string;
      url: string;
    };
    images?: SelectedImageProps[];
  };
  setSelectedImage: React.Dispatch<
    React.SetStateAction<SelectedImageProps | null>
  >;
}
