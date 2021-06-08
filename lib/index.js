const perms = {
    user: ["notify", "friends", "photos", "audio", "video", null, "stories", "pages", "add_app_to_left_menu", null, "status", "notes", "messages", "wall", null, "ads", "offline", "docs", "groups", "notifications", "stats", null, "email", null, null, null, null, "market"],
    community: ["stories", null, "photos", null, null, null, "app_widget", null, null, null, null, null, "messages", null, null, null, null, "docs", "manage"],
};

const decodeBitMask = (bitMask, permArray) => {
    let result = [];

    let binMaskString = bitMask.toString(2);
    let binMaskArray = [...binMaskString]; //string -> array

    binMaskArray.map((bin, index) => {
        let perm = permArray[index];
        if (bin === "1" && perm !== null) {
            result.push(permArray[index]);
        };
    });

    return result;
};

module.exports = { perms, decodeBitMask };
