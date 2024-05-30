// Allow the drop action on the target element
function allowDrop(event) {
    event.preventDefault();
}

// Handle the drag start event
function drag(event) {
    // Clone the dragged element
    var clone = event.target.cloneNode(true);
    // Set a unique ID for the clone to avoid duplicate IDs in the DOM
    clone.id = 'clone-' + new Date().getTime();
    // Store the clone's ID in the dataTransfer object
    event.dataTransfer.setData("text", clone.id);
    
    // Append the clone to the body but keep it hidden
    clone.style.position = "absolute";
    clone.style.top = "-9999px";
    document.body.appendChild(clone);
    
    // Use the clone as the drag image
    event.dataTransfer.setDragImage(clone, 0, 0);
}

// Handle the drop event
function drop(event) {
    event.preventDefault();
    // Get the ID of the dragged element's clone from the dataTransfer object
    var cloneId = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(cloneId);
    
    // Ensure the clone is visible and properly positioned
    draggedElement.style.position = "relative";
    draggedElement.style.top = "0";
    
    // Append the dragged clone to the drop target
    event.target.appendChild(draggedElement);
    
    // Optionally, clean up the clone's inline styles if needed
    draggedElement.style.removeProperty('position');
    draggedElement.style.removeProperty('top');
}

// Attach dragstart event listeners to all draggable elements
document.querySelectorAll('.login-button, .sign-button, .text-bar').forEach(element => {
    element.addEventListener('dragstart', drag);
});
