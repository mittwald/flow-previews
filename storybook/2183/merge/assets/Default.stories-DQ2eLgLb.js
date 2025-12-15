import{j as e}from"./iframe-CN4G8qqm.js";import{S as o}from"./SearchField-CDmCcUsV.js";import{L as n}from"./Label-SrhLxamV.js";import{F as c}from"./TranslationProvider-D4PNRj4s.js";import{F as d}from"./FieldError-ClazPaCD.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-TTf0ydYE.js";import"./PropsContextProvider-4OAE62jj.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./clsx-B-dksMZM.js";import"./Activity-BEbOvIp9.js";import"./IconChevronDown-oGa76fM6.js";import"./remote-DWrodQTa.js";import"./LoadingSpinner-D2A4fUcq.js";import"./Button-Bq80dFyw.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./Text-0Ubm83r2.js";import"./browser-TeUtxSTm.js";import"./utils-DbmEdXKf.js";import"./EmulatedBoldText-moUjmeps.js";import"./ariaLive-BjvyJtUO.js";import"./Button-DbVJWx45.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CcGGjrZQ.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./IconClose-91D_EWrB.js";import"./IconSearch-CItetYlb.js";import"./useControlledHostValueProps-D4EY9U9i.js";import"./FieldError-BYURGtTT.js";import"./RSPContexts-DE5X9chL.js";import"./Form-CGtio7r9.js";import"./Group-CcXOZiUc.js";import"./Input-DrCQZ-OZ.js";import"./SelectionIndicator-D0PPGfWn.js";import"./useTextField-BcSIXJQ5.js";import"./useFormReset-CiTTEZ9A.js";import"./useFormValidation-Dm9_Tt2c.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-HOHtpdM6.js";import"./context-CQHW5bQg.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./Separator-BYdiAAyF.js";import"./useStatic-CM9-VZa7.js";import"./useOverlayController-CzXHiyE9.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-BS5-adBO.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <FieldDescription>Press enter to search</FieldDescription>
    </SearchField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <Label>Suche</Label>
    </SearchField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props} defaultValue="test" isInvalid>
      <FieldError>Invalid search value</FieldError>
    </SearchField>
}`,...m.parameters?.docs?.source}}};const hr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError"];export{t as Default,i as Disabled,s as ReadOnly,a as WithFieldDescription,m as WithFieldError,p as WithLabel,hr as __namedExportsOrder,ur as default};
