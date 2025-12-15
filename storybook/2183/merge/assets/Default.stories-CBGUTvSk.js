import{j as r}from"./iframe-CN4G8qqm.js";import{N as o}from"./NumberField-DL5KyKrS.js";import{L as t}from"./Label-SrhLxamV.js";import{F as c}from"./TranslationProvider-D4PNRj4s.js";import{F as g}from"./FieldError-ClazPaCD.js";import{C as x,a as b}from"./ContextualHelpTrigger-DIvAEDZl.js";import{B as h}from"./Button-Bq80dFyw.js";import{T as F}from"./Text-0Ubm83r2.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-TTf0ydYE.js";import"./PropsContextProvider-4OAE62jj.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./clsx-B-dksMZM.js";import"./Activity-BEbOvIp9.js";import"./IconChevronDown-oGa76fM6.js";import"./remote-DWrodQTa.js";import"./LoadingSpinner-D2A4fUcq.js";import"./IconChevronUp-CGizelTn.js";import"./IconMinus-CB6xlJX3.js";import"./IconPlus-D84ibPtA.js";import"./useControlledHostValueProps-D4EY9U9i.js";import"./Button-DbVJWx45.js";import"./utils-DbmEdXKf.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CcGGjrZQ.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./FieldError-BYURGtTT.js";import"./browser-TeUtxSTm.js";import"./Form-CGtio7r9.js";import"./Group-CcXOZiUc.js";import"./Input-DrCQZ-OZ.js";import"./SelectionIndicator-D0PPGfWn.js";import"./useFormValidation-Dm9_Tt2c.js";import"./useSpinButton-Ddo2VOfE.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./useFormReset-CiTTEZ9A.js";import"./useTextField-BcSIXJQ5.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-HOHtpdM6.js";import"./context-CQHW5bQg.js";import"./RSPContexts-DE5X9chL.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./Separator-BYdiAAyF.js";import"./useStatic-CM9-VZa7.js";import"./ariaLive-BjvyJtUO.js";import"./useOverlayController-CzXHiyE9.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-BS5-adBO.js";import"./Popover-ro5fYKAY.js";import"./OverlayTrigger-D4cmnJfg.js";import"./IconInfo-BhF6VzKQ.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./EmulatedBoldText-moUjmeps.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Lr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...u.parameters?.docs?.source}}};const yr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,yr as __namedExportsOrder,Lr as default};
