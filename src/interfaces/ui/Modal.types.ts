import { SelectedImageProps } from "../common/shared.types";

export interface ModalProps {
  selectedImage: SelectedImageProps;
  setSelectedImage: React.Dispatch<
    React.SetStateAction<SelectedImageProps | null>
  >;
}
