export enum VisualizationType {
    ScatterPlot = 'ScatterPlot',
    ScatterPlotMatrix = 'ScatterPlotMatrix',
    Table = 'Table',
}

export enum InteractionType {
    PointSelection = 'PointSelection',
    RectangularSelection = 'RectangularSelection',
    ChangeAxis = 'ChangeAxis',
}

export interface Interaction {
    dataIds: Array<string>;
    visualizationType: VisualizationType
    dimensions: Array<string>;
    interactionType: InteractionType;
}

export interface InteractionHistory {
    interactions: Array<Interaction>;
}
