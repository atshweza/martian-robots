# Martian Robots Simulator

A React + TypeScript application that simulates robot movement on a bounded grid (Mars), following a sequence of instructions.

## Problem Overview

This project simulates the movement of robotic rovers across a rectangular grid on the surface of Mars. The goal is to track multiple robots based on sequences of instructions and report their final coordinates and orientation.

Robots explore a rectangular grid and follow instructions:

- `L` → Turn left (90°)
- `R` → Turn right (90°)
- `F` → Move forward

### ⚠️ Special Rule
If a robot moves off the grid:
- It is marked as **LOST**
- Leaves a **scent**
- Future robots ignore moves that would cause the same loss

---

## 🛠️ Tech Stack

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧪 Vitest + React Testing Library

---

## 📦 Project Structure

```
src/
  components/
  utils/
  types/
  test/
```

---

## 🚀 Getting Started

### Install dependencies
```bash
yarn install
```

### Run app
```bash
yarn dev
```

### Run tests
```bash
yarn test
```

---

## 🧪 Example Input

```
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL
```

### ✅ Output

```
1 1 E
3 3 N LOST
2 3 S
```

---

## 📈 Future Improvements

- Visual grid with robot animation
- Zustand state management
- Step-by-step simulation mode
- Input validation UI
- Mobile responsiveness

---

## 🤝 Contributing

Pull requests are welcome. Please follow the PR template.

---

## 📄 License

MIT