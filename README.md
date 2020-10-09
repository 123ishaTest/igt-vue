# Incremental Game Template Vue
> A template project to quickly create incremental games with Typescript and Vue.

### Introduction
Over the years of developing different incremental games, We have thought about a lot of game-related things.
This project is an attempt to bundle it all together coherently.
It should not be considered as a 'game engine' but mainly a collection of useful scripts that work together.


### Design
The static root object is called `App`. When it is started, it creates an instance of `Game` where you can inject different `Feature`s.
This means that all your features are accessible with `App.game.<feature>`.

Features can be implemented by extending the `Feature` class. Features like this automatically get included in the game loop.
This means they get called with `update(deltaTime: number)` automatically, as well as being saved and loaded.
Your game will consist of multiple features communicating with each other.



### Supported features

##### Saving and loading
Have your class implement `Saveable` and create a `<class>SaveData` object that extends `SaveData`.

```ts
export class Example implements Saveable {
	...

	saveKey = "example";

	load(data: ExampleSaveData): void {
	    this.clicks = data.clicks
	}

	parseSaveData(json: Record<string, unknown>): SaveData {
	    return new ExampleSaveData(json?.clicks as number ?? 0);
	}

	save(): ExampleSaveData {
	    return new ExampleSaveData(this.clicks)
	}
```

##### Currency system
Allows you to have multiple currencies in your game without code duplication.

```ts
// Add raw values directly
App.game.wallet.gainCurrency(new Currency(10, CurrencyType.money));

// Custom function to apply possible multipliers
App.game.wallet.gainMoney(10);
```

##### Statistics
Statistics provide an easily extensible system for storing any increasing number you can think of.
Instead of having your `Feature`s depend on `Statistics`, it works the other way around.
`Statistics` subscribe on events triggered by `Feature`s.

```ts
this.registerStatistic(new NumberStatistic('totalMoneyGained'))
App.game.wallet.onMoneyGain.subscribe(amount => this.incrementNumberStatistic('totalMoneyGained', amount));
```

##### Settings
Lets you easily create settings for the user to configure. Supports boolean and multiple choice settings with booleans, numbers and strings

```ts
App.game.settings.add(new BooleanSetting('exampleSetting', 'Doesnt do much really', true));

if (App.game.settings.getSetting('exampleSetting').value) {
    console.log("This setting is true")
}
```

```html
<h2>Example setting: <span data-bind="text: settings.getSetting('exampleSetting').value"> </span>!</h2>
<button data-bind="click: () => settings.getSetting('exampleSetting').toggle()">Toggle setting</button>
```

##### Requirements
`Requirement`s are a generic way to lock things like `Feature`s behind requirements.
The most used Requirement is the `StatisticRequirement`, but you can also create custom target.

> **_NOTE:_** In order for the Vue components to update accordingly, make sure to add the relevant object the requirement is watching to the `data` in the component.

```ts
const requirement = new TotalMoneyRequirement(10);
if (!requirement.isCompleted()) {
    console.log(requirement.lockedReason());
    console.log(requirement.getProgress());
}
```

##### Achievements
Achievements are based on Requirements. You can create any achievement by passing in a custom requirement.
Each `Achievement` triggers an event on completion, which can be subscribed to. Vue components can use this to display a notification for example.

```ts
// Achievements.ts
this.registerAchievement(new Achievement(AchievementType.TotalMoney10, 'Small potatoes', 'Have 10 total money', new TotalMoneyRequirement(10)))
```

### Integrated tools
The following frameworks/libraries are currently included
- Typescript
- Vue
- jQuery
- ESLint

Other libraries can easily be added via Webpack.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
