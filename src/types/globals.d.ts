declare global {
    interface Window {
      __TAURI__: {
        convertFileSrc: (src: string, protocol: string) => string;
      };
    }
  }
  
  export {};