// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000101010202020202020202020202020202020202020202020202020202020202010101010202020202020202020202020202020202020202020202020202020201010101020202020202020202020202020202020202020202020202020202020101010102020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.