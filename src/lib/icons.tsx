import { BadgePlus, Save } from "lucide-react";
import { FaUser } from "react-icons/fa";

export const icons = {
  user: (styles: string | void) => <FaUser className={styles ?? ""} />,
  agregar: (styles: string | void) => <BadgePlus className={styles ?? ""} />,
  guardar: (styles: string | void) => <Save className={styles ?? ""} />,
};
