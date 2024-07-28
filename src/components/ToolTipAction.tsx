import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"


type ToolTipActionType = {
	children: React.ReactNode;
	label: string;
	side?: "top" | "bottom" | "left" | "right";
	align: "start" | "center" | "end";
}

export const ToolTipAction = ({ children, label, side, align }: ToolTipActionType) => {
	return <TooltipProvider>
		<Tooltip>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent side={side} align={align}>
				<p className="font-outfitLight text-gray-500 text-sm capitalize">{label}</p>
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>

}
