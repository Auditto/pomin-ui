/* ==========================================================================
 * @pomin/ui — ponto de entrada.
 *
 * Há duas formas de importar, e as duas funcionam:
 *
 *   import { Button } from "@pomin/ui";            // barril
 *   import { Button } from "@pomin/ui/button";     // subcaminho
 *
 * O subcaminho é o que torna a migração de um app trivial: os componentes
 * viviam em "@/components/ui/button", então basta trocar o prefixo. E ele
 * carrega só o módulo pedido, sem depender de tree-shaking.
 *
 * Este arquivo é GERADO por scripts/gerar-barril.mjs — não edite à mão.
 * ========================================================================== */

export * from "./components/ui/accordion";
export * from "./components/ui/ai-prompt-box";
export * from "./components/ui/alert";
export * from "./components/ui/alert-dialog";
export * from "./components/ui/aspect-ratio";
export * from "./components/ui/avatar";
export * from "./components/ui/badge";
export * from "./components/ui/breadcrumb";
export * from "./components/ui/button";
export * from "./components/ui/button-group";
export * from "./components/ui/calendar";
export * from "./components/ui/card";
export * from "./components/ui/carousel";
export * from "./components/ui/chart";
export * from "./components/ui/chat";
export * from "./components/ui/checkbox";
export * from "./components/ui/collapsible";
export * from "./components/ui/combobox";
export * from "./components/ui/command";
export * from "./components/ui/context-menu";
export * from "./components/ui/data-table";
export * from "./components/ui/date-picker";
export * from "./components/ui/dialog";
export * from "./components/ui/direction";
export * from "./components/ui/drawer";
export * from "./components/ui/dropdown-menu";
export * from "./components/ui/empty";
export * from "./components/ui/empty-state";
export * from "./components/ui/field";
export * from "./components/ui/file-upload";
export * from "./components/ui/floating-dock";
export * from "./components/ui/form";
export * from "./components/ui/hover-card";
export * from "./components/ui/input";
export * from "./components/ui/input-group";
export * from "./components/ui/input-otp";
export * from "./components/ui/item";
export * from "./components/ui/kanban";
export * from "./components/ui/kbd";
export * from "./components/ui/label";
export * from "./components/ui/menubar";
export * from "./components/ui/native-select";
export * from "./components/ui/navbar";
export * from "./components/ui/navigation-menu";
export * from "./components/ui/pagination";
export * from "./components/ui/popover";
export * from "./components/ui/progress";
export * from "./components/ui/radio-group";
export * from "./components/ui/resizable";
export * from "./components/ui/scroll-area";
export * from "./components/ui/search-bar";
export * from "./components/ui/select";
export * from "./components/ui/separator";
export * from "./components/ui/sheet";
export * from "./components/ui/sidebar";
export * from "./components/ui/skeleton";
export * from "./components/ui/slider";
export { Toaster } from "./components/ui/sonner";
export * from "./components/ui/spinner";
export * from "./components/ui/stat-card";
export * from "./components/ui/stepper";
export * from "./components/ui/switch";
export * from "./components/ui/table";
export * from "./components/ui/tabs";
export * from "./components/ui/textarea";
export * from "./components/ui/timeline";
export * from "./components/ui/toast";
export { Toaster as RadixToaster } from "./components/ui/toaster";
export * from "./components/ui/toggle";
export * from "./components/ui/toggle-group";
export * from "./components/ui/tooltip";
export * from "./components/ui/typography";
export * from "./components/ui/user-list";

export { cn } from "./lib/utils";
export { useIsMobile } from "./hooks/use-mobile";
