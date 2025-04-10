// NOTE(@kitten): We really shouldn't have to reference this, but we get a cascading type error
// because ts-jest isolates our typings in a way that makes expo-modules-core fail in our tests only

/// <reference path="../../../expo-modules-core/src/ts-declarations/NativeComponentRegistry" />
/// <reference path="../../../expo/src/ts-declarations/react-native" />
