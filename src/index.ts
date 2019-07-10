enum VisualizationType {
    ScatterPlot = "ScatterPlot",
    ScatterPlotMatrix = "ScatterPlotMatrix",
    Table = "Table",
    None = "None"
}

interface Selection {
    dimensions: Array<string>;
}

export interface PointSelection extends Selection {
    dataIds: Array<string>;
}

export interface RectangularSelection extends Selection {
    left: number;
    top: number;
    right: number;
    bottom: number;
    dataIds: Array<string>;
}

export interface ChangeAxis {
    dimensions: Array<string>;
}

export interface Interaction {
    visualizationType: VisualizationType;
    interactionType: ChangeAxis | PointSelection | RectangularSelection;
}

export type InteractionHistory = Array<Interaction>;

export { VisualizationType };
