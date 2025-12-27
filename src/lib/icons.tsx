import {
  BadgePlus,
  ExternalLink,
  Eye,
  File,
  FileSymlink,
  PhoneCall,
  Save,
  SquarePen,
  Store,
  Trash2,
} from "lucide-react";
import { FaUser, FaWhatsapp } from "react-icons/fa";

export const icons = {
  user: (styles: string | void) => <FaUser className={styles ?? ""} />,
  agregar: (styles: string | void) => <BadgePlus className={styles ?? ""} />,
  guardar: (styles: string | void) => <Save className={styles ?? ""} />,
  ver: (styles: string | void) => <Eye className={styles ?? ""} />,
  eliminar: (styles: string | void) => <Trash2 className={styles ?? ""} />,
  editar: (styles: string | void) => <SquarePen className={styles ?? ""} />,
  pdf: (styles: string | void) => <FileSymlink className={styles ?? ""} />,
  whatsapp: (styles: string | void) => <FaWhatsapp className={styles ?? ""} />,
  telefono: (styles: string | void) => <PhoneCall className={styles ?? ""} />,
  pos: (styles: string | void) => <Store className={styles ?? ""} />,
  link: (styles: string | void) => <ExternalLink className={styles ?? ""} />,
};
