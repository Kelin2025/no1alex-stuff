import * as React from "react";
import { useStore } from "effector-react";
import { Event, Store, forward, createEvent, createStore } from "effector";

import { Box } from "../atoms/Box";
import { Input } from "../atoms/Input";
import { Field } from "../moleculas/Field";
import { Button } from "../atoms/Button";

const DefaultInput = ({ value, onChange }) => (
  <Input value={value} onChange={onChange} />
);

export const createField = ({
  store,
  event,
  label,
  view = DefaultInput
}) => () => {
  const value = useStore(store);
  const View = view;
  return (
    <Field label={label}>
      <View value={value} onChange={event} />
    </Field>
  );
};

type Input<T> = {
  (props: any): any;
  $value: Store<T>;
  changed: Event<T>;
};

type createInputProps<T> = {
  label: string;
  initialValue: T;
  view: any;
};

export function createInput<T>({
  label,
  initialValue,
  view = DefaultInput
}: createInputProps<T>) {
  const $value = createStore<T>(initialValue);
  const changed = createEvent<T>();

  $value.on(changed, (state, next) => next);

  const Component = props => {
    const value = useStore($value);
    const View = view;

    return (
      <Field label={label}>
        <View {...props} value={value} onChange={changed} />
      </Field>
    );
  };

  Component.$value = $value;
  Component.changed = changed;

  return Component;
}

interface Button<T> {
  (props: T): any;
  pressed: Event<T>;
}

type createButton = <T>(settings: {
  type?: "save" | "cancel" | "primary";
  text: any;
  onClick?: Event<T>;
}) => Button<T>;

export const createButton: createButton = ({
  type = null,
  text: Text,
  onClick = null
}) => {
  const pressed = createEvent();
  let Component;

  if (typeof Text === "function") {
    Component = ({ className, children, style, ...props }) => {
      return (
        <Button
          type={type}
          {...{ className, children, style }}
          onClick={() => pressed(props)}
        >
          <Text />
        </Button>
      );
    };
  } else {
    Component = ({ className, children, style, ...props }) => {
      return (
        <Button
          type={type}
          {...{ className, children, style }}
          onClick={() => pressed(props)}
        >
          {Text}
        </Button>
      );
    };
  }

  if (onClick) {
    forward({
      from: pressed,
      to: onClick
    });
  }

  Component.pressed = pressed;

  return Component;
};

export type createButtonsRow = (
  buttons: Parameters<createButton>[0] | Function
) => Function;

export const createButtonsRow = buttons => {
  const views = buttons.map(button => {
    if (typeof button === "function") {
      return button;
    }
    return createButton(button);
  });

  return () => {
    return (
      <Box flow="column">
        {views.map((View, idx) => (
          <View key={idx} />
        ))}
      </Box>
    );
  };
};
