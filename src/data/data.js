export const data = {
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
        { "name": "whole note", "symbol": "𝄽", "beats": 4 },
        { "name": "half note", "symbol": "𝄼", "beats": 2 },
        { "name": "quarter note", "symbol": "𝄻", "beats": 1 },
        { "name": "eighth note", "symbol": "𝄼𝄸", "beats": 0.5 },
        { "name": "sixteenth note", "symbol": "𝄼𝄸𝄸", "beats": 0.25 },
        { "name": "thirty-second note", "symbol": "𝄼𝄸𝄸𝄸", "beats": 0.125 }
    ],
    "chords": [
        { "name": "C", "notes": ["C", "E", "G"] },
        { "name": "Cmaj7", "notes": ["C", "E", "G", "B"] },
        { "name": "C7", "notes": ["C", "E", "G", "B♭"] },
        { "name": "C#maj7", "notes": ["C#", "E#", "G#", "B#"] },
        { "name": "D", "notes": ["D", "F#", "A"] },
        { "name": "Dmaj7", "notes": ["D", "F#", "A", "C#"] },
        { "name": "D7", "notes": ["D", "F#", "A", "C"] },
        { "name": "E", "notes": ["E", "G#", "B"] },
        { "name": "Emaj7", "notes": ["E", "G#", "B", "D#"] },
        { "name": "E7", "notes": ["E", "G#", "B", "D"] },
        { "name": "F", "notes": ["F", "A", "C"] },
        { "name": "Fmaj7", "notes": ["F", "A", "C", "E"] },
        { "name": "F7", "notes": ["F", "A", "C", "E♭"] },
        { "name": "G", "notes": ["G", "B", "D"] },
        { "name": "Gmaj7", "notes": ["G", "B", "D", "F#"] },
        { "name": "G7", "notes": ["G", "B", "D", "F"] },
        { "name": "A", "notes": ["A", "C#", "E"] },
        { "name": "Amaj7", "notes": ["A", "C#", "E", "G#"] },
        { "name": "A7", "notes": ["A", "C#", "E", "G"] },
        { "name": "B", "notes": ["B", "D#", "F#"] },
        { "name": "Bmaj7", "notes": ["B", "D#", "F#", "A#"] },
        { "name": "B7", "notes": ["B", "D#", "F#", "A"] },
        { "name": "Cmin", "notes": ["C", "E♭", "G"] },
        { "name": "Cmin7", "notes": ["C", "E♭", "G", "B♭"] },
        { "name": "C#min", "notes": ["C#", "E", "G#"] },
        { "name": "C#min7", "notes": ["C#", "E", "G#", "B"] },
        { "name": "Dmin", "notes": ["D", "F", "A"] },
        { "name": "Dmin7", "notes": ["D", "F", "A", "C"] },
        { "name": "Emin", "notes": ["E", "G", "B"] },
        { "name": "Emin7", "notes": ["E", "G", "B", "D"] },
        { "name": "Fmin", "notes": ["F", "A♭", "C"] },
        { "name": "Fmin7", "notes": ["F", "A♭", "C", "E♭"] },
        { "name": "Gmin", "notes": ["G", "B♭", "D"] },
        { "name": "Gmin7", "notes": ["G", "B♭", "D", "F"] },
        { "name": "Amin", "notes": ["A", "C", "E"] },
        { "name": "Amin7", "notes": ["A", "C", "E", "G"] },
        { "name": "Bmin", "notes": ["B", "D", "F#"] },
        { "name": "Bmin7", "notes": ["B", "D", "F#", "A"] },
        { "name": "C7sus4", "notes": ["C", "F", "G"] },
        { "name": "Cmin7b5", "notes": ["C", "E♭", "F#", "B♭"] },
        { "name": "C#min7b5", "notes": ["C#", "E", "G", "B"] },
        { "name": "Dmin7b5", "notes": ["D", "F", "G", "C"] },
        { "name": "Emin7b5", "notes": ["E", "G", "A", "C"] },
        { "name": "Fmin7b5", "notes": ["F", "A♭", "B", "E♭"] },
        { "name": "Gmin7b5", "notes": ["G", "B♭", "B", "D♭"] },
        { "name": "Amin7b5", "notes": ["A", "C", "D", "F"] },
        { "name": "Bmin7b5", "notes": ["B", "D", "E", "G"] },
        { "name": "C9", "notes": ["C", "E", "G", "B♭", "D"] },
        { "name": "C#9", "notes": ["C#", "E#", "G#", "B", "D#"] },
        { "name": "D9", "notes": ["D", "F#", "A", "C", "E"] },
        { "name": "Cmaj9", "notes": ["C", "E", "G", "B", "D"] },
        { "name": "C#maj9", "notes": ["C#", "E#", "G#", "B#", "D#"] }
    ],
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