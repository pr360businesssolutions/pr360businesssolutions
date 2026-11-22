// Maps icon names used in the data files to Lucide React components.
// Keeping this in one place avoids importing icons across many files.
import {
  ClipboardCheck,
  Bot,
  Database,
  Users,
  Smartphone,
  UserCog,
  ListChecks,
  Search,
  ClipboardList,
  PlayCircle,
  Bug,
  RefreshCw,
  FileBarChart,
  SlidersHorizontal,
  Target,
  Layers,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

const map = {
  ClipboardCheck,
  Bot,
  Database,
  Users,
  Smartphone,
  UserCog,
  ListChecks,
  Search,
  ClipboardList,
  PlayCircle,
  Bug,
  RefreshCw,
  FileBarChart,
  SlidersHorizontal,
  Target,
  Layers,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
}

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || CheckCircle2
  return <Cmp {...props} />
}
