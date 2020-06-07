import {
  ArcGisMapServerImageryProvider,
  BingMapsImageryProvider,
  ImageryProvider,
  WebMapServiceImageryProvider,
  OpenStreetMapImageryProvider,
  TileMapServiceImageryProvider,
  GoogleEarthEnterpriseImageryProvider,
  GoogleEarthEnterpriseMapsProvider,
  GridImageryProvider,
  IonImageryProvider,
  MapboxImageryProvider,
  MapboxStyleImageryProvider,
  SingleTileImageryProvider,
  TileCoordinatesImageryProvider,
  UrlTemplateImageryProvider,
  WebMapTileServiceImageryProvider,
  GoogleEarthEnterpriseMetadata,
  TerrainProvider,
  ArcGISTiledElevationTerrainProvider,
  CesiumTerrainProvider,
  EllipsoidTerrainProvider,
  GoogleEarthEnterpriseTerrainProvider,
  VRTheWorldTerrainProvider,
  DataSource,
  CzmlDataSource,
  GeoJsonDataSource,
  KmlDataSource,
  CustomDataSource,
  Camera,
  Scene,
  Property,
  PropertyBag,
  ConstantProperty,
  SampledProperty,
  PositionProperty,
  SampledPositionProperty,
  TimeIntervalCollectionProperty,
  CompositeProperty,
  CompositePositionProperty,
  Cartesian3,
  ReferenceProperty,
  MaterialProperty,
  EntityCollection,
  CallbackProperty,
  ConstantPositionProperty,
  TimeIntervalCollectionPositionProperty,
  ColorMaterialProperty,
  CompositeMaterialProperty,
  GridMaterialProperty,
  ImageMaterialProperty,
  PolylineGlowMaterialProperty,
  PolylineOutlineMaterialProperty,
  StripeMaterialProperty,
  CheckerboardMaterialProperty,
  PolylineDashMaterialProperty,
  VelocityVectorProperty,
  VelocityOrientationProperty,
  PropertyArray,
  PositionPropertyArray,
  PolylineArrowMaterialProperty,
  NodeTransformationProperty,
  GeometryInstance,
  PolygonGeometry,
  PolygonHierarchy,
  BoxGeometry,
  CoplanarPolygonGeometry,
  CoplanarPolygonOutlineGeometry,
  CorridorGeometry,
  BoxOutlineGeometry,
  CircleGeometry,
  CircleOutlineGeometry,
  CorridorOutlineGeometry,
  CylinderOutlineGeometry,
  EllipseGeometry,
  FrustumGeometry,
  GroundPolylineGeometry,
  PlaneGeometry,
  PolylineGeometry,
  PolylineVolumeGeometry,
  PolylineVolumeOutlineGeometry,
  RectangleGeometry,
  SimplePolylineGeometry,
  SphereGeometry,
  WallGeometry,
  CylinderGeometry,
  EllipseOutlineGeometry,
  EllipsoidGeometry,
  EllipsoidOutlineGeometry,
  FrustumOutlineGeometry,
  PlaneOutlineGeometry,
  PolygonOutlineGeometry,
  RectangleOutlineGeometry,
  SphereOutlineGeometry,
  WallOutlineGeometry,
} from "cesium";

// Verify ImageryProvider instances conform to the expected interface
let imageryProvider: ImageryProvider;
imageryProvider = new WebMapServiceImageryProvider({ url: "", layers: "0" });
imageryProvider = new BingMapsImageryProvider({ url: "" });
imageryProvider = new ArcGisMapServerImageryProvider({ url: "" });
imageryProvider = new BingMapsImageryProvider({ url: "" });
imageryProvider = new OpenStreetMapImageryProvider({ url: "" });
imageryProvider = new TileMapServiceImageryProvider({ url: "" });
imageryProvider = new GridImageryProvider({ url: "" });
imageryProvider = new IonImageryProvider({ assetId: 2 });
imageryProvider = new MapboxImageryProvider({ mapId: "" });
imageryProvider = new MapboxStyleImageryProvider({ styleId: "" });
imageryProvider = new SingleTileImageryProvider({ url: "" });
imageryProvider = new TileCoordinatesImageryProvider();
imageryProvider = new UrlTemplateImageryProvider({ url: "" });
imageryProvider = new WebMapServiceImageryProvider({ url: "", layers: "" });
imageryProvider = new GoogleEarthEnterpriseImageryProvider({
  url: "",
  metadata: new GoogleEarthEnterpriseMetadata(""),
});
imageryProvider = new GoogleEarthEnterpriseMapsProvider({
  url: "",
  channel: 1,
});
imageryProvider = new WebMapTileServiceImageryProvider({
  url: "",
  layer: "",
  style: "",
  tileMatrixSetID: "",
});

// Verify TerrainProvider instances conform to the expected interface
let terrainProvider: TerrainProvider;
terrainProvider = new ArcGISTiledElevationTerrainProvider({ url: "" });
terrainProvider = new CesiumTerrainProvider({ url: "" });
terrainProvider = new EllipsoidTerrainProvider();
terrainProvider = new VRTheWorldTerrainProvider({ url: "" });
terrainProvider = new GoogleEarthEnterpriseTerrainProvider({
  url: "",
  metadata: new GoogleEarthEnterpriseMetadata(""),
});

// Verify DataSource instances conform to the expected interface
let dataSource: DataSource;
dataSource = new CzmlDataSource();
dataSource = new GeoJsonDataSource();
dataSource = new KmlDataSource({
  canvas: document.createElement("canvas"),
  camera: new Camera(new Scene()),
});
dataSource = new CustomDataSource();

// Verify Property instances conform to the expected interface
let property: Property;
property = new CallbackProperty(() => 0, false);
property = new ConstantProperty(1);
property = new TimeIntervalCollectionProperty();
property = new CompositeProperty();
property = new SampledProperty(Cartesian3);
property = new PropertyBag();
property = new PropertyArray();
property = new PositionProperty();
property = new MaterialProperty();
property = new VelocityVectorProperty();
property = new VelocityOrientationProperty();
property = new PositionPropertyArray();
property = new NodeTransformationProperty();
property = new ReferenceProperty(new EntityCollection(), "object1", [
  "billboard",
  "scale",
]);

// Verify PositionProperty instances conform to the expected PositionProperty and Property interfaces
let positionProperty: PositionProperty;
property = positionProperty = new SampledPositionProperty();
property = positionProperty = new CompositePositionProperty();
property = positionProperty = new ConstantPositionProperty();
property = positionProperty = new TimeIntervalCollectionPositionProperty();
property = positionProperty = new ReferenceProperty(
  new EntityCollection(),
  "object1",
  ["billboard", "scale"]
);

// Verify MaterialProperty instances conform to the expected MaterialProperty and Property interfaces
let materialProperty: MaterialProperty;
property = materialProperty = new ColorMaterialProperty();
property = materialProperty = new CompositeMaterialProperty();
property = materialProperty = new GridMaterialProperty();
property = materialProperty = new ImageMaterialProperty();
property = materialProperty = new PolylineGlowMaterialProperty();
property = materialProperty = new PolylineOutlineMaterialProperty();
property = materialProperty = new StripeMaterialProperty();
property = materialProperty = new CheckerboardMaterialProperty();
property = materialProperty = new PolylineDashMaterialProperty();
property = materialProperty = new PolylineArrowMaterialProperty();

let geometryInstance: GeometryInstance;

geometryInstance = new GeometryInstance({
  geometry: new BoxGeometry({
    minimum: new Cartesian3(0, 0, 0),
    maximum: new Cartesian3(1, 1, 1),
  }),
});

geometryInstance = new GeometryInstance({
  geometry: new BoxOutlineGeometry({
    minimum: new Cartesian3(0, 0, 0),
    maximum: new Cartesian3(1, 1, 1),
  }),
});

geometryInstance = new GeometryInstance({
  geometry: new CircleGeometry({
    center: new Cartesian3(0, 0, 0),
    radius: 10,
  }),
});

geometryInstance = new GeometryInstance({
  geometry: new CircleOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new CoplanarPolygonGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new CoplanarPolygonOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new CorridorGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new CorridorGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new CorridorOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new CylinderGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new CylinderOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new EllipseGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new EllipseOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new EllipsoidGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new EllipsoidOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new FrustumGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new FrustumOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new GroundPolylineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new PlaneGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new PlaneOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new PolygonGeometry({ polygonHierarchy: new PolygonHierarchy() }),
});

geometryInstance = new GeometryInstance({
  geometry: new PolygonOutlineGeometry({
    polygonHierarchy: new PolygonHierarchy(),
  }),
});

geometryInstance = new GeometryInstance({
  geometry: new PolylineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new PolylineVolumeGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new PolylineVolumeOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new RectangleGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new RectangleOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new SimplePolylineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new SphereGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new SphereOutlineGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new WallGeometry(),
});

geometryInstance = new GeometryInstance({
  geometry: new WallOutlineGeometry(),
});
