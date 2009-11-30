var b = uki.build({
    view: 'Base',
    rect: '0 0 1000px 1000px',
    children: [{
        view: 'Label',
        rect: '300px 100px 400px 28px', anchors: "top",
        autosize: 'width',
        text: 'uki is awesome!',
        align: 'center'
    }]
}).attachTo( document.getElementById('test') );

var button = uki.find('Base > [text^=uki]')[0];
button.dom().style.lineHeight = '27px'

uki.defaultTheme.backgrounds['button-normal']().attachTo(button);
uki.find('Base > [text^=uki]').bind('click', function() {
    alert('Hello world!');
});
