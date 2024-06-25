# Prueba Técnica React-Native

### Test Description

The test involves developing a Single Page Application (SPA) that lists characters from Rick and Morty.

The API from which the data will be retrieved is https://rickandmortyapi.com/api, and its documentation is available at https://rickandmortyapi.com/documentation/#rest. Use the REST version of the API.

### Requirements

To adequately evaluate the frontend work, we will need some basic points covered, as well as some desirable features to properly assess the developed application.

### Minimum Requirements

- [*] Create a list of Rick and Morty characters.
- [*] The list should display 10 characters.
- [*] Add pagination or a "load more" button.
- [*] Create a filter area that at least filters by name.
- [*] Create a view that shows information about a single character with detailed information.

### Optional Requirements

- [*] Implement some type of cache in the API calls.
- [*] Implement the following tools in the project: eslint, prettier. This will provide error management through eslint and uniform formatting for the entire project with prettier.

### Features to Evaluate

- [*] Testing of at least one component.
- [*] Use animations with react-native-reanimated or another preferred library.
- [*] Careful layout design.
- [*] Best practices.
- [*] Clean code.

### _The design is up to the candidate._

![mockUp](docs/mockUp.png)

### Key Points

- [*] Design should be adaptable to both Android and iOS.
- [*] Do not use interface design frameworks like Tailwind, Bootstrap, etc.
- [*] Use CSS, SCSS, or preferably styled-components or @emotion/styled.

# Solution

### Technologies

- React Native [Expo] [web, android, ios]
- TypeScript
- Styled Components

### Installation

```bash
$ git clone https://github.com/BinniZenobioCordovaLeandro/sportian-fantasy-game.git
$ cd sportian-fantasy-game
$ pnpm install
$ pnpm start
```

### Test plan

1. Open Home path [home/1](http://localhost:8081/home/1)
2. Explore pagination [home/2](http://localhost:8081/home/2) [home/3](http://localhost:8081/home/3)
3. Open Detail path [character/1](http://localhost:8081/character/1)
4. Explore diferent characters [character/2](http://localhost:8081/character/2) [character/3](http://localhost:8081/character/3)
5. Use multifilter field [filter](http://localhost:8081/home/1)
6. Change system theme [dark or light](http://localhost:8081/home/1)

### Sumary of the solution

- The project was developed using React Native with Expo, TypeScript, and Styled Components.

- The project has a Home screen that lists the characters from Rick and Morty, with a filter area that filters by name, species, and type.

- The project has a Detail screen that shows information about a single character with detailed information.

- The project has a theme switcher that changes the system theme between dark and light.

- The project has a cache system that stores the characters list in a global variable for each request.

- The project has a screaming architecture with a folder structure that separates the components, screens, services, hooks, models and utils.
