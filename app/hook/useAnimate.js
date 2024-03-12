import { useState, useEffect, useRef } from "react";

export function useAnimate() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });

    observer.observe(targetRef.current);

    // return () => {
    //   if (targetRef.current) {
    //     observer.unobserve(targetRef.current);
    //   }
    // };
  }, []);

  return <></>;
}
