// create 3D viewer instance
var viewer3d = new MeshesJS.Viewer3D({
    //size: { width: 600, height: 300 }
});

// add viewer canvas to DOM
var $viewer3d = $('#viewer3d').html(viewer3d.canvas);

// full screen
function fullScreen() {
    viewer3d.setSize({
        width: $(window).width(),
        height: $(window).height()
    });
    viewer3d.render();
}

$(window).resize(function() {
    fullScreen();
});

fullScreen();

// file input
var $fileInput = $('#file input:file');
var fileInput  = $fileInput.get(0);

// on file selected
$fileInput.change(function() {
    for (var i = 0; i < fileInput.files.length; i++) {
        var file = fileInput.files[i];
        viewer3d.load(file, {
            onLoaded: function(mesh) {
                console.info(['loaded', mesh.name]);
            },
            onError: function(error) {
                console.error([file.name, error.message]);
            }
        });
    }
    $fileInput.val('');
});
