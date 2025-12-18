import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./styles.css";
import { useNavigate } from "react-router-dom";

type Ruta = {
  nombre: string;
  route?: string;
  onClick?: () => void | null;
};

type BreadCrumbProps = {
  routes?: Ruta[];
  type?: "navigate" | "onClick";
};

export const BreadCrumb = ({
  routes = [],
  type = "navigate",
}: BreadCrumbProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2">
      {routes.map((route, index) => (
        <React.Fragment key={index}>
          <div
            className={`text-sm select-none
              ${
                index == routes.length - 1
                  ? "opacity-70"
                  : "underline-anim-bread-crumb cursor-pointer "
              }
              `}
            onClick={() => {
              if (type == "navigate" && route?.route) {
                navigate(route?.route);
              }
              if (type == "onClick" && route?.onClick) {
                route?.onClick();
              }
            }}
          >
            {route.nombre}
          </div>
          {index !== routes.length - 1 && (
            <span className="text-gray-500">
              <FaArrowRight />
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
