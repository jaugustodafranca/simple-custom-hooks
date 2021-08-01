# React Custom Hooks

The purpose of this library is to gather useful Custom Hooks to facilitate our daily lives as a programmer.

## Install

```
yarn add react-custom-hooks
or
npm install react-custom-hooks
```

## Usage

```
import { useForm } from 'react-custom-hooks'
...
const [data, onChange] = useForm({ name: '' })


const handleChangeInput = event => {
  const { name, value } = event.target
  onChange({ name: value })
}
```

## Hooks

> ### useForm

**File**: [`use-form.js`](./custom-hooks/use-form.js)

**Objective**: Manipulate the form data

**Entries**: `initialState`

**return**: `[data, onChange]`

> ### useClickOutside

**File**: [`use-click-outside.js`](./custom-hooks/use-click-outside.js)

**Objective**: Listening a click outside an element

**Entries**: `ref` and `callback`

**return**: _nothing_

> ### useDebounce

**File**: [`use-debounce.js`](./custom-hooks/use-debounce.js)

**Objective**: Add a delay on change a value

**Entries**: `ref` and `callback`

**return**: `[debouncedValue]`

> ### useFetch

**File**: [`use-fetch.js`](./custom-hooks/use-fetch.js)

**Objective**: Handle a request using **axios**

**Entries**: `url`, `method`, `body`, `successCallback` and `errorCallback`

**return**: `[data, isLoading, error]`

> ### useLocalStorage

**File**: [`use-local-storage.js`](./custom-hooks/use-local-storage.js)

**Objective**: Handle data in the local storage

**Entries**: `key` and `initialState`

**return**: `[data, storeData, cleanLocalStorage]`

> ### useOnKeyPress

**File**: [`use-on-key-press.js`](./custom-hooks/use-on-key-press.js)

**Objective**: Handle data in the local storage

**Entries**: `targetKey` and `callback`

**return**: _nothing_

> ### usePrevious

**File**: [`use-previous.js`](./custom-hooks/use-previous.js)

**Objective**: Get the previous value o data

**Entries**: `value`

**return**: `previousValue`

> ### useScroll

**File**: [`use-scroll.js`](./custom-hooks/use-scroll.js)

**Objective**: Handle page scroll

**Entries**: `elementRef` and `scrollType`

**return**: `{ goTop, goBottom, goToElement }`

> ### useToggle

**File**: [`use-toggle.js`](./custom-hooks/use-toggle.js)

**Objective**: Control a boolean state

**Entries**: `initialState`

**return**: `[modalOpen, toggle, setModalOpen]`

> ### useWindowSize

**File**: [`use-window.size.js`](./custom-hooks/use-window.size.js)

**Objective**: Get page size information

**Entries**: `mobileSize` and `desktopSize`

**return**: `{ {height, width}, isMobile, isDesktop, isTablet }`

#### Feel free to contribute and recommend to other devs :octocat:

---

References:

- https://reactjs.org/docs/hooks-intro.html
