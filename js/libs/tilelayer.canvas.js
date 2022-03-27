L.TileLayer.Canvas = L.TileLayer.extend({
  _delays: {},
  _delaysForZoom: null,
  createCanvas: function (tile, coords, done) {
    let err;
    const ctx = tile.getContext("2d");
    const { doubleSize } = this.options;

    const { x: width, y: height } = this.getTileSize();
    tile.width = doubleSize ? width * 2 : width;
    tile.height = doubleSize ? height * 2 : height;

    const img = new Image();
    img.onload = () => {
      try {
        ctx.drawImage(img, 0, 0);
        tile.complete = true;
      } catch (e) {
        err = e;
      } finally {
        done(err, tile);
      }
    };
    const tileZoom = this._getZoomForUrl();
    img.src = isNaN(tileZoom) ? '' : this.getTileUrl(coords);
    img.crossOrigin = "anonymous";
  },
  createTile: function (coords, done) {
    const { timeout } = this.options;
    const { z: zoom } = coords;
    const tile = document.createElement("canvas");

    if (timeout) {
      if (zoom !== this._delaysForZoom) {
        this._clearDelaysForZoom();
        this._delaysForZoom = zoom;
      }

      if (!this._delays[zoom]) this._delays[zoom] = [];

      this._delays[zoom].push(setTimeout(() => {
        this.createCanvas(tile, coords, done);
      }, timeout));
    } else {
      this.createCanvas(tile, coords, done);
    }

    return tile;
  },
  _clearDelaysForZoom: function() {
    const prevZoom = this._delaysForZoom;
    const delays = this._delays[prevZoom];

    if (!delays) return;

    delays.forEach((delay, index) => {
      clearTimeout(delay);
      delete delays[index];
    });

    delete this._delays[prevZoom];
  },
});

L.tileLayer.canvas = function tileLayerCanvas(url, options) {
  return new L.TileLayer.Canvas(url, options);
};