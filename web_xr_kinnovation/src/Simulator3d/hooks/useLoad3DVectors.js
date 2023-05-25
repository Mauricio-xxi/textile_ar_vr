// import {
//     DataProvider,
//     DataProviderTaskWait,
// } from 'actions/backend/BackendActions';
// import { SIMU_ENDPOINT } from 'config';
import React, { useCallback, useState, useEffect } from "react";
import { result } from "../data/simu"

const useLoad3DVectors = (designId, viewport) => {
  const [loading, setLoading] = useState(true);
  const [backendVectors, setBackendVectors] = useState(undefined);
  // const request3dVectorFromBackend = useCallback(
  //     (designId, viewport) => {
  //         const request = {
  //             action: 'POST',
  //             endpoint: `${SIMU_ENDPOINT}/get_3d_data/${designId}`,
  //             data: {
  //                 viewport,
  //             },
  //         };
  //         DataProvider(request)
  //             .then(respTaskId => {
  //                 const callbacks = {
  //                     pending: () => {},
  //                     success: response => {
  //                         // loadingRef.current.hide();
  //                         // setData(response.result);
  //                         setBackendVectors(response.result);
  //                         setLoading(false);
  //                     },
  //                     error: error => {
  //                         console.error(
  //                             'Simulator get 3d data: error=',
  //                             error
  //                         );
  //                         throw error;
  //                     },
  //                 };

  //                 DataProviderTaskWait(respTaskId, callbacks, undefined, 500);
  //             })
  //             .catch(error => {
  //                 // loadingRef.current.hide();
  //                 console.error('Simulator get 3d data: error=', error);
  //                 // frontEndError('TR_FAILING_CREATING_3D_SIMULATION');
  //             });
  //     },
  //     [designId, viewport]
  // );

  const request3dVectorFromBackend = () => {
    setBackendVectors(result);
    setLoading(false);
  };

  useEffect(() => {
    request3dVectorFromBackend(designId, viewport);
  }, [designId, viewport]);

  return { backendVectors, loading };
};

export default useLoad3DVectors;
