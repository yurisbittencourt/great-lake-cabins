import { styled } from "../../styles/stitches.config";
import ExportedImage from "next-image-export-optimizer";

const NewImage = ({ src, alt, ...props }) => {
  return <NewExportedImage src={src} alt={alt} {...props} />;
};

export default NewImage;

const NewExportedImage = styled(ExportedImage, {
  width: "100% !important",
  height: "100% !important",
  position: "relative !important",
});
