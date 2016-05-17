function collect_same_elements(collection_a, object_b) {
    var same_elements = [];

    collection_a.forEach(function (item_a) {
        if (isExist(item_a.key, object_b)) {
            same_elements.push(item_a.key);
        }
    });

    return same_elements;
}

function isExist(element, object_b) {
    for (var i = 0; i < object_b.value.length; i++) {
        if (element === object_b.value[i]) {

            return true;
        }
    }
}

module.exports = collect_same_elements;
