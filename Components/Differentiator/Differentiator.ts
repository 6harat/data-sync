var DiffExt = new (require('../../Lib/diff_match_patch/diff_match_patch_uncompressed.js').diff_match_patch)();

if (require.main === module) {
    console.log(DiffExt.diff_main("Bharat", "Gulati"));
}

module.exports=DiffExt;