import ExportedImage from "next-image-export-optimizer";

const Image = ({ src, alt, ...props }) => {
  return (
    <ExportedImage
      src={`images/${src}`}
      alt={alt}
      draggable="false"
      {...props}
    />
  );
};

export default Image;

/* import { styled } from "../../styles/stitches.config";

const Image = ({ imageName, hero, banner, ...props }) => {
  const width = hero ? "1920" : banner ? "2000" : "800";
  const height = hero ? "1080" : banner ? "500" : "600";
  return (
    <Picture>
      <source
        type="image/jpg"
        srcSet={`images/${imageName}-m.jpg`}
        media="(max-width: 600px)"
      />
      <source
        type="image/jpg"
        srcSet={`images/${imageName}-d.jpg`}
        media="(min-width: 601px)"
      />

      <StyledImage
        src={`images/${imageName}.jpg`}
        aria-hidden="true"
        loading={hero || banner ? "eager" : "lazy"}
        decoding="async"
        width={width}
        height={height}
        draggable={false}
        {...props}
      />
    </Picture>
  );
};

export default Image;

const Picture = styled("picture", {});

const StyledImage = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
}); */
