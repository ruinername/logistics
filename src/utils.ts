import {useEffect, useState} from "react";
import {Truck} from "./store/api";

const toCamel = (s: any) => {
  return s.replace(/([-_][a-z])/ig, ($1: any) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const isArray = function (a: any) {
  return Array.isArray(a);
};

const isObject = function (o: any) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

export function keysToCamel (o: any) {
  if (isObject(o)) {
    const n = {};

    Object.keys(o)
      .forEach((k) => {
        // @ts-ignore
        n[toCamel(k)] = keysToCamel(o[k]);
      });

    return n;
  } else if (isArray(o)) {
    return o.map((i: any) => {
      return keysToCamel(i);
    });
  }

  return o;
};

export function removeEmpty(obj: any) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}

export function useIsMobile() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])

  return width <= 767;
}

export function useTimelineMobileLayout() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])

  return width <= 1100;
}

export function useWhiteBackground() {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    return () => {
      document.body.style.backgroundColor = '#F7F8FA';
    }
  }, []);
}