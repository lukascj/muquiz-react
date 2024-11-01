export const data = {
    "notes": {
        "white": [
            "C",
            "D",
            "E",
            "F",
            "G",
            "A",
            "B"
        ],
        "black": [
            "C#/D♭",
            "D#/E♭",
            "F#/G♭",
            "G#/A♭",
            "A#/B♭"
        ],
        "black_sharp": [
            "C#",
            "D#",
            "F#",
            "G#",
            "A#"
        ],
        "black_flat": [
            "D♭",
            "E♭",
            "G♭",
            "A♭",
            "B♭"
        ],
        "values": [
            // Highest val allowed: 6
            // Lowest: -2
            // Bottom line equals 0
            // 3.5 difference between occurences of same note
            {
                "name": "C",
                "vals": {
                    "treble": {
                        "o4": -1, // Octave 4
                        "o5": 2.5, 
                        "o6": 6
                    },
                    "bass": {
                        "o4": -2, 
                        "o5": 1.5, 
                        "o6": 5
                    }
                }
            },
            {
                "name": "D",
                "vals": {
                    "treble": {
                        "o4": -0.5, 
                        "o5": 3
                    },
                    "bass": {
                        "o4": -1.5,
                        "o5": 2,
                        "o6": 5.5
                    }
                }
            },
            {
                "name": "E",
                "vals": {
                    "treble": {
                        "o4": 0,
                        "o5": 3.5
                    },
                    "bass": {
                        "o4": -1,
                        "o5": 2.5,
                        "o6": 6
                    }
                }
            },
            {
                "name": "F",
                "vals": {
                    "treble": {
                        "o4": 0.5,
                        "o5": 4
                    },
                    "bass": {
                        "o4": -0.5,
                        "o5": 3
                    }
                }
            },
            {
                "name": "G",
                "vals": {
                    "treble": {
                        "o4": 1,
                        "o5": 4.5
                    },
                    "bass": {
                        "o4": 0,
                        "o5": 3.5
                    }
                }
            },
            {
                "name": "A",
                "vals": {
                    "treble": {
                        "o4": 1.5,
                        "o5": 5
                    },
                    "bass": {
                        "o4": 0.5,
                        "o5": 4
                    }
                }
            },
            {
                "name": "B",
                "vals": {
                    "treble": {
                        "o4": 2,
                        "o5": 5.5
                    },
                    "bass": {
                        "o4": 1,
                        "o5": 4.5
                    }
                }
            }
        ]
    },
    "clefs": [
        { "name": "treble", "symbol": "𝄞" },
        { "name": "bass", "symbol": "𝄢" },
        { "name": "alto", "symbol": "𝄡" },
        { "name": "tenor", "symbol": "𝄡" }
    ],
    "time_signatures": [
        { "name": "2/4", "type": "simple", "description": "Two quarter notes per measure" },
        { "name": "3/4", "type": "simple", "description": "Three quarter notes per measure" },
        { "name": "4/4", "type": "simple", "description": "Four quarter notes per measure" },
        { "name": "6/8", "type": "compound", "description": "Six eighth notes per measure" },
        { "name": "9/8", "type": "compound", "description": "Nine eighth notes per measure" },
        { "name": "12/8", "type": "compound", "description": "Twelve eighth notes per measure" },
        { "name": "5/4", "type": "odd meter", "description": "Five quarter notes per measure" },
        { "name": "7/8", "type": "odd meter", "description": "Seven eighth notes per measure" }
    ],
    "note_lengths": [
        { "name": "1", "rest-symbol": "𝄻", "note-symbol": "𝅝"}, // whole
        { "name": "1/2", "rest-symbol": "𝄼", "note-symbol": "𝅗𝅥"}, // half
        { "name": "1/4", "rest-symbol": "𝄽", "note-symbol": "𝅘𝅥"}, // quarter
        { "name": "1/8", "rest-symbol": "𝄾", "note-symbol": "𝅘𝅥𝅮"}, // eighth
        { "name": "1/16", "rest-symbol": "𝄿", "note-symbol": "𝅘𝅥𝅯"}, // sixteenth
    ],
    "chords": {
        "major": [
            { "name": "C", "notes": ["C", "E", "G"] },
            { "name": "D", "notes": ["D", "F#", "A"] },
            { "name": "E", "notes": ["E", "G#", "B"] },
            { "name": "F", "notes": ["F", "A", "C"] },
            { "name": "G", "notes": ["G", "B", "D"] },
            { "name": "A", "notes": ["A", "C#", "E"] },
            { "name": "B", "notes": ["B", "D#", "F#"] }
        ],
        "minor": [
            { "name": "Cmin", "notes": ["C", "E♭", "G"] },
            { "name": "C#min", "notes": ["C#", "E", "G#"] },
            { "name": "Dmin", "notes": ["D", "F", "A"] },
            { "name": "Emin", "notes": ["E", "G", "B"] },
            { "name": "Fmin", "notes": ["F", "A♭", "C"] },
            { "name": "Gmin", "notes": ["G", "B♭", "D"] },
            { "name": "Amin", "notes": ["A", "C", "E"] },
            { "name": "Bmin", "notes": ["B", "D", "F#"] }
        ],
        "dominant_7th": [
            { "name": "C7", "notes": ["C", "E", "G", "B♭"] },
            { "name": "D7", "notes": ["D", "F#", "A", "C"] },
            { "name": "E7", "notes": ["E", "G#", "B", "D"] },
            { "name": "F7", "notes": ["F", "A", "C", "E♭"] },
            { "name": "G7", "notes": ["G", "B", "D", "F"] },
            { "name": "A7", "notes": ["A", "C#", "E", "G"] },
            { "name": "B7", "notes": ["B", "D#", "F#", "A"] }
        ],
        "dominant_7sus4": [
            { "name": "C7sus4", "notes": ["C", "F", "G", "B♭"] },
            { "name": "D7sus4", "notes": ["D", "G", "A", "C"] },
            { "name": "E7sus4", "notes": ["E", "A", "B", "D"] },
            { "name": "G7sus4", "notes": ["G", "C", "D", "F"] }
        ],
        "major_7th": [
            { "name": "Cmaj7", "notes": ["C", "E", "G", "B"] },
            { "name": "C#maj7", "notes": ["C#", "E#", "G#", "B#"] },
            { "name": "Dmaj7", "notes": ["D", "F#", "A", "C#"] },
            { "name": "Emaj7", "notes": ["E", "G#", "B", "D#"] },
            { "name": "Fmaj7", "notes": ["F", "A", "C", "E"] },
            { "name": "Gmaj7", "notes": ["G", "B", "D", "F#"] },
            { "name": "Amaj7", "notes": ["A", "C#", "E", "G#"] },
            { "name": "Bmaj7", "notes": ["B", "D#", "F#", "A#"] }
        ],
        "minor_7th": [
            { "name": "Cmin7", "notes": ["C", "E♭", "G", "B♭"] },
            { "name": "C#min7", "notes": ["C#", "E", "G#", "B"] },
            { "name": "Dmin7", "notes": ["D", "F", "A", "C"] },
            { "name": "Emin7", "notes": ["E", "G", "B", "D"] },
            { "name": "Fmin7", "notes": ["F", "A♭", "C", "E♭"] },
            { "name": "Gmin7", "notes": ["G", "B♭", "D", "F"] },
            { "name": "Amin7", "notes": ["A", "C", "E", "G"] },
            { "name": "Bmin7", "notes": ["B", "D", "F#", "A"] }
        ],
        "minor_7♭5": [
            { "name": "Cmin7♭5", "notes": ["C", "E♭", "F#", "B♭"] },
            { "name": "C#min7♭5", "notes": ["C#", "E", "G", "B"] },
            { "name": "Dmin7♭5", "notes": ["D", "F", "G", "C"] },
            { "name": "Emin7♭5", "notes": ["E", "G", "A", "C"] },
            { "name": "Fmin7♭5", "notes": ["F", "A♭", "B", "E♭"] },
            { "name": "Gmin7♭5", "notes": ["G", "B♭", "B", "D♭"] },
            { "name": "Amin7♭5", "notes": ["A", "C", "D", "F"] },
            { "name": "Bmin7♭5", "notes": ["B", "D", "E", "G"] }
        ],
        "major_7♭5": [
            { "name": "Cmaj7♭5", "notes": ["C", "E", "G♭", "B"] },
            { "name": "C#maj7♭5", "notes": ["C#", "E#", "G", "B#"] },
            { "name": "Dmaj7♭5", "notes": ["D", "F#", "A♭", "C#"] },
            { "name": "Emaj7♭5", "notes": ["E", "G#", "B♭", "D#"] },
            { "name": "Fmaj7♭5", "notes": ["F", "A", "C♭", "E"] },
            { "name": "Gmaj7♭5", "notes": ["G", "B", "D♭", "F#"] },
            { "name": "Amaj7♭5", "notes": ["A", "C#", "E♭", "G#"] },
            { "name": "Bmaj7♭5", "notes": ["B", "D#", "F", "A#"] }
        ],
        "9th": [
            { "name": "C9", "notes": ["C", "E", "G", "B♭", "D"] },
            { "name": "C#9", "notes": ["C#", "E#", "G#", "B", "D#"] },
            { "name": "D9", "notes": ["D", "F#", "A", "C", "E"] },
            { "name": "E9", "notes": ["E", "G#", "B", "D", "F#"] },
            { "name": "F9", "notes": ["F", "A", "C", "E♭", "G"] },
            { "name": "G9", "notes": ["G", "B", "D", "F", "A"] },
            { "name": "A9", "notes": ["A", "C#", "E", "G", "B"] },
            { "name": "B9", "notes": ["B", "D#", "F#", "A", "C#"] }
        ],
        "major_9th": [
            { "name": "Cmaj9", "notes": ["C", "E", "G", "B", "D"] },
            { "name": "C#maj9", "notes": ["C#", "E#", "G#", "B#", "D#"] },
            { "name": "Dmaj9", "notes": ["D", "F#", "A", "C#", "E"] },
            { "name": "Emaj9", "notes": ["E", "G#", "B", "D#", "F#"] },
            { "name": "Fmaj9", "notes": ["F", "A", "C", "E", "G"] },
            { "name": "Gmaj9", "notes": ["G", "B", "D", "F#", "A"] },
            { "name": "Amaj9", "notes": ["A", "C#", "E", "G#", "B"] },
            { "name": "Bmaj9", "notes": ["B", "D#", "F#", "A#", "C#"] }
        ], 
        "minor_9th": [
            { "name": "Cmin9", "notes": ["C", "E♭", "G", "B♭", "D"] },
            { "name": "C#min9", "notes": ["C#", "E", "G#", "B", "D#"] },
            { "name": "Dmin9", "notes": ["D", "F", "A", "C", "E"] },
            { "name": "Emin9", "notes": ["E", "G", "B", "D", "F#"] },
            { "name": "Fmin9", "notes": ["F", "A♭", "C", "E♭", "G"] },
            { "name": "Gmin9", "notes": ["G", "B♭", "D", "F", "A"] },
            { "name": "Amin9", "notes": ["A", "C", "E", "G", "B"] },
            { "name": "Bmin9", "notes": ["B", "D", "F#", "A", "C#"] }
        ]
    },
    "scales": {
        "major": [
            {
                "name": "C major",
                "notes": ["C", "D", "E", "F", "G", "A", "B"]
            },
            {
                "name": "C# major",
                "notes": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"]
            },
            {
                "name": "D major",
                "notes": ["D", "E", "F#", "G", "A", "B", "C#"]
            },
            {
                "name": "D# major",
                "notes": ["D#", "E#", "F##", "G#", "A#", "B#", "C##"]
            },
            {
                "name": "E major",
                "notes": ["E", "F#", "G#", "A", "B", "C#", "D#"]
            },
            {
                "name": "F major",
                "notes": ["F", "G", "A", "B♭", "C", "D", "E"]
            },
            {
                "name": "F# major",
                "notes": ["F#", "G#", "A#", "B", "C#", "D#", "E#"]
            },
            {
                "name": "G major",
                "notes": ["G", "A", "B", "C", "D", "E", "F#"]
            },
            {
                "name": "G# major",
                "notes": ["G#", "A#", "B#", "C#", "D#", "E#", "F##"]
            },
            {
                "name": "A major",
                "notes": ["A", "B", "C#", "D", "E", "F#", "G#"]
            },
            {
                "name": "A# major",
                "notes": ["A#", "B#", "C##", "D#", "E#", "F##", "G##"]
            },
            {
                "name": "B major",
                "notes": ["B", "C#", "D#", "E", "F#", "G#", "A#"]
            }
        ],
        "natural_minor": [
            {
                "name": "C natural minor",
                "notes": ["C", "D", "E♭", "F", "G", "A♭", "B♭"]
            },
            {
                "name": "C# natural minor",
                "notes": ["C#", "D#", "E", "F#", "G#", "A", "B"]
            },
            {
                "name": "D natural minor",
                "notes": ["D", "E", "F", "G", "A", "B♭", "C"]
            },
            {
                "name": "E natural minor",
                "notes": ["E", "F#", "G", "A", "B", "C", "D"]
            },
            {
                "name": "F natural minor",
                "notes": ["F", "G", "A♭", "B♭", "C", "D♭", "E♭"]
            },
            {
                "name": "G natural minor",
                "notes": ["G", "A", "B♭", "C", "D", "E♭", "F"]
            },
            {
                "name": "A natural minor",
                "notes": ["A", "B", "C", "D", "E", "F", "G"]
            },
            {
                "name": "B natural minor",
                "notes": ["B", "C#", "D", "E", "F#", "G", "A"]
            }
        ],
        "harmonic_minor": [
            {
                "name": "C harmonic minor",
                "notes": ["C", "D", "E♭", "F", "G", "A♭", "B"]
            },
            {
                "name": "C# harmonic minor",
                "notes": ["C#", "D#", "E", "F#", "G#", "A", "B#"]
            },
            {
                "name": "D harmonic minor",
                "notes": ["D", "E", "F", "G", "A", "B♭", "C#"]
            },
            {
                "name": "E harmonic minor",
                "notes": ["E", "F#", "G", "A", "B", "C", "D#"]
            },
            {
                "name": "F harmonic minor",
                "notes": ["F", "G", "A♭", "B♭", "C", "D♭", "E"]
            },
            {
                "name": "G harmonic minor",
                "notes": ["G", "A", "B♭", "C", "D", "E♭", "F#"]
            },
            {
                "name": "A harmonic minor",
                "notes": ["A", "B", "C", "D", "E", "F", "G#"]
            },
            {
                "name": "B harmonic minor",
                "notes": ["B", "C#", "D", "E", "F#", "G", "A#"]
            }
          ],
          "melodic_minor": [
            {
                "name": "C melodic minor",
                "notes": ["C", "D", "E♭", "F", "G", "A", "B"]
            },
            {
                "name": "C# melodic minor",
                "notes": ["C#", "D#", "E", "F#", "G#", "A#", "B#"]
            },
            {
                "name": "D melodic minor",
                "notes": ["D", "E", "F", "G", "A", "B", "C#"]
            },
            {
                "name": "E melodic minor",
                "notes": ["E", "F#", "G", "A", "B", "C#", "D#"]
            },
            {
                "name": "F melodic minor",
                "notes": ["F", "G", "A♭", "B♭", "C", "D", "E"]
            },
            {
                "name": "G melodic minor",
                "notes": ["G", "A", "B♭", "C", "D", "E", "F#"]
            },
            {
                "name": "A melodic minor",
                "notes": ["A", "B", "C", "D", "E", "F#", "G#"]
            },
            {
                "name": "B melodic minor",
                "notes": ["B", "C#", "D", "E", "F#", "G#", "A#"]
            }
        ]
    }
}