$(function(){ // on dom ready

    $('#cy').cytoscape({
	style: cytoscape.stylesheet()
	    .selector('node')
	    .css({
		'content': 'data(name)',
		'text-valign': 'center',
		'color': 'Black',
		'text-outline-width': 2,
		'text-outline-color': '#888',
		'width' : 200,
		'height' : 200,
//		'shape': 'rectangle',
		'shape': 'data(faveShape)',
//		'background-color' : 'Red',
		'background-image' : 'b.png',
		'background-width' :  '100%',
		'background-height' : 	 'data(backgroundheight)',	
//		'background-repeat' : 'repeat-x',
//		'background-position-x' : '0px',
		'background-position-y' : '0px',
		'background-size' : '80px 100px',
		
	    })
	    .selector('edge')
	    .css({
		'target-arrow-shape': 'triangle',
		'source-arrow-shape': 'triangle'
	    })
	    .selector(':selected')
	    .css({
		'background-color': 'black',
		'line-color': 'black',
		'target-arrow-color': 'black',
		'source-arrow-color': 'black'
	    })
	    .selector('.faded')
	    .css({
		'opacity': 0.25,
		'text-opacity': 0
	    }),
	
	elements: {
	    nodes: [
		{ data: { id: 'j', name: 'Jerry', backgroundheight: '75%', faveShape: 'rectangle' } },
		{ data: { id: 'e', name: 'Elaine', backgroundheight: '10%', faveShape: 'triangle' } },
		{ data: { id: 'k', name: 'Kramer', backgroundheight: '75%', faveShape: 'triangle' } },
		{ data: { id: 'g', name: 'George', backgroundheight: '20%', faveShape: 'triangle' } },
		{ data: { id: 't', name: 'Tibo', backgroundheight: '75%', faveShape: 'triangle' } },
		{ data: { id: 'u', name: 'Ursule', backgroundheight: '60%', faveShape: 'triangle' } },
		{ data: { id: 'v', name: 'Valerie', backgroundheight: '5%', faveShape: 'triangle' } },
		{ data: { id: 'w', name: 'Watson', backgroundheight: '95%', faveShape: 'triangle' } }
	    ],
	    edges: [
		{ data: { source: 'j', target: 'e' } },
		{ data: { source: 'j', target: 'k' } },
		{ data: { source: 'j', target: 'g' } },
		{ data: { source: 'e', target: 'j' } },
		{ data: { source: 'e', target: 'k' } },
		{ data: { source: 'k', target: 'j' } },
		{ data: { source: 'k', target: 'e' } },
		{ data: { source: 'k', target: 'g' } },
		{ data: { source: 'g', target: 'j' } },
		{ data: { source: 't', target: 'u' } },
		{ data: { source: 'u', target: 'v' } },
		{ data: { source: 'v', target: 'w' } }
	    ]
	},
	
	layout: {
	    name: 'arbor',
	    padding: 10
	},
	
	// on graph initial layout done (could be async depending on layout...)
	ready: function(){
	    window.cy = this;
	    
	    // giddy up...
	    
	    cy.elements().unselectify();
	    
	    cy.on('tap', 'node', function(e){
		var node = e.cyTarget; 
		var neighborhood = node.neighborhood().add(node);
		
		cy.elements().addClass('faded');
		neighborhood.removeClass('faded');
	    });
	    
	    cy.on('tap', function(e){
		if( e.cyTarget === cy ){
		    cy.elements().removeClass('faded');
		}
	    });
	}
    });

}); // on dom ready
