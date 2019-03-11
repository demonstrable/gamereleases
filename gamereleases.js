function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/18rThZu7_IvolfRr8K9wiU5S-_fYcJiZC03O9WyhRQ1U/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)