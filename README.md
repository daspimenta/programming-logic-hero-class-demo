# Hero Class Demo

A small JavaScript program that demonstrates classes and objects. It defines a `hero` class, creates four hero instances, and prints an attack message for each one.

## Table of Contents

- [How It Works](#how-it-works)
- [Heroes](#heroes)
- [Getting Started](#getting-started)
- [Example Output](#example-output)
- [Known Limitations](#known-limitations)
- [Roadmap](#roadmap)
- [License](#license)

## How It Works

The `hero` class takes three properties through its constructor:

| Property   | Description            |
|:-----------|:-----------------------|
| `heroName` | Hero's name            |
| `level`    | Hero's level           |
| `skill`    | Hero's skill           |

It also defines two methods:

- `attack()` prints a message saying the hero attacked using their skill.
- `use()` prints a message saying the hero is using their skill.

## Heroes

| Name    | Level | Skill        |
|:--------|:------|:-------------|
| Wizard  | 25    | magic        |
| Warrior | 30    | sword        |
| Monk    | 28    | martial arts |
| Ninja   | 35    | shuriken     |

## Getting Started

### Prerequisites

A JavaScript runtime such as [Node.js](https://nodejs.org/), or a browser developer console.

### Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Usage

Run the program:

```bash
node index.js
```

To add a new hero, create another instance and call its methods:

```js
let hero5 = new hero("Archer", 27, "bow")
hero5.attack()
```

## Example Output

```text
Wizard attacked by using magic
Warrior attacked by using sword
Monk attacked by using martial arts
Ninja attacked by using shuriken
```

## Known Limitations

- The `use()` method is defined but never called in the current script.
- The `level` property is stored but not used by any method.
- The constructor does not validate its inputs.

## Roadmap

- [ ] Rename the class to `Hero` to follow the JavaScript naming convention
- [ ] Use the `level` property in a method
- [ ] Add more methods, such as `defend()`
- [ ] Validate the constructor inputs

## License

Distributed under the MIT License.
