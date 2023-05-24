import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

const SceneLogic = ({ downloadFile, setDownloadFile, designName }) => {
  const scene = useThree((state) => state.scene);
  const downloadGLTF = () => {
    try {
      const exporter = new GLTFExporter();
      exporter.parse(
        scene,
        (gltf) => {
          const gltfString = JSON.stringify(gltf);
          const blob = new Blob([gltfString], {
            type: "model/gltf+json",
          });
          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.download = `${designName}.gltf`;
          link.href = url;
          link.click();

          URL.revokeObjectURL(url);
        },
        (error) => {
          console.log("An error happened", error);
          throw error;
        },
        {}
      );
    } catch (error) {
      console.error("Error", error);
    } finally {
      setDownloadFile(false);
    }
  };

  // useEffect(() => {
  //     if (downloadFile) {
  //         downloadGLTF();
  //     }
  // }, [downloadFile]);

  return null;
};

export default SceneLogic;
