// EDIT THIS FILE to change the guide. Works in the page and in the service worker.
// audio: optional file in /audio (e.g. "audio/entrance.mp3"); it is cached automatically for offline use.
self.APP_LANG = "en-US";
self.SITE_NAME = "Heritage Guide";
self.SECTIONS = [
  {
    title: "Main entrance",
    text: "Welcome to the heritage site. You are standing at the main entrance, under a stone archway. The ground beneath your feet is smooth paving. The site is made of a large garden at the front, a historic steam locomotive on a short track to the right of the garden, and a main building behind the garden with several rooms. Swipe or press Next to explore each area in order. At any time, press Entrance to come back here, or Where am I to hear your location.",
    discover: ["A staff desk on your left, with tactile maps and large print leaflets", "A bench on your right, a good place to wait", "The garden path straight ahead"],
    clues: "Smooth paving, a stone archway overhead, staff desk on your left, street noise behind you.",
    where: "You are at the main entrance, the starting point of the visit.",
    toEntrance: "You are already at the entrance.",
    audio: ""
  },
  {
    title: "The garden",
    text: "From the entrance, walk straight ahead onto a gravel path about two metres wide. The garden is a formal garden with low hedges on both sides, and rose beds in the centre. A fountain sits at the middle crossing, where the path meets a second path leading right to the train.",
    discover: ["Scented rose and lavender beds at hand height along the left hedge", "A stone fountain with a low rim you can touch", "Gravel underfoot, which crunches on the main path"],
    clues: "Crunching gravel, scent of roses and lavender, running water from the fountain.",
    where: "You are in the garden, on the gravel path between the entrance and the fountain.",
    toEntrance: "Turn around so the sound of the fountain is behind you, and follow the gravel path back about thirty steps to the stone archway.",
    audio: ""
  },
  {
    title: "The steam locomotive",
    text: "Take the path to the right at the fountain. After about twenty steps the gravel changes to metal rails set in concrete. The locomotive stands on the track. It is about eight metres long. A staff member can help you step up to the footplate, where the driver once stood.",
    discover: ["The large iron wheels, cold and smooth, at waist height", "The brass bell and the whistle chain on the cab", "The footplate with the regulator handle and the coal shovel"],
    clues: "Metal rails underfoot, a smell of oil and iron, large cold iron wheels.",
    where: "You are beside the steam locomotive, to the right of the garden.",
    toEntrance: "Walk back along the path until you reach gravel again, turn left at the fountain, and continue about thirty steps to the entrance archway.",
    audio: ""
  },
  {
    title: "Room 1: the great hall",
    text: "From the fountain, continue straight ahead to the main building and go through the double wooden doors. Room 1 is the great hall, a large echoing room with a wooden floor. Display cases stand along the walls, and a large oak table stands in the middle.",
    discover: ["The oak table, which you can touch, carved with the founder's initials", "A touch case with replica tools on the left wall", "A fireplace on the far wall, with a carved stone surround"],
    clues: "Echoing room, wooden floor that creaks, a faint smell of old wood and polish.",
    where: "You are in room 1, the great hall, inside the main building.",
    toEntrance: "Go back through the double doors, walk straight along the gravel path through the garden past the fountain, to the stone archway.",
    audio: ""
  },
  {
    title: "Room 2: the study",
    text: "From the great hall, a doorway on the right leads to room 2. It is a small, quiet study with a carpeted floor. There is a writing desk with a typewriter and shelves of books.",
    discover: ["The typewriter, which visitors may press", "A shelf of leather bound books at hand height", "A listening post with recorded letters"],
    clues: "Soft carpet, quiet and muffled sound, smell of paper and leather.",
    where: "You are in room 2, the study, off the great hall.",
    toEntrance: "Leave through the doorway on your left to the great hall, cross to the double doors, go out and follow the gravel path to the entrance.",
    audio: ""
  }
];
