enum VisualizationType {
    ScatterPlot = 'ScatterPlot',
    ScatterPlotMatrix = 'ScatterPlotMatrix',
    Table = 'Table',
}

export interface PointSelection {
    dataIds: Array<string>;
}

export interface RectangularSelection {
    x: number;
    y: number;
    width: number;
    height: number;
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

