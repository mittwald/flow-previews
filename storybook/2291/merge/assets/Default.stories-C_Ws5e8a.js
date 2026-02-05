import{j as r}from"./iframe-BL1IY_6V.js";import{N as o}from"./NumberField-l_7wDuzJ.js";import{L as t}from"./Label-8Io_X3px.js";import{F as c}from"./FieldDescription-DBr0KSuv.js";import{F as g}from"./FieldError-D0yWaYHs.js";import{C as x,a as b}from"./ContextualHelpTrigger-DisKMuI6.js";import{B as h}from"./Button-B7zQBVb0.js";import{T as F}from"./Text-BSlhLkmN.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-oZ5IqIdY.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./clsx-B-dksMZM.js";import"./index-Cr6jOlTO.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./useControlledHostValueProps-BUMS7H49.js";import"./Button-CHtMceZn.js";import"./utils-GyL2rjZN.js";import"./ProgressBar-DK1MtX49.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./context-BeO7KH58.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxRwZ9-L.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useFocusable-CUtc6O_Q.js";import"./FieldError-CCCCRqJ9.js";import"./Text-B4yGITBG.js";import"./Form-Ca3ASx7C.js";import"./Group-DzRbvT54.js";import"./Input-BFv5VDBN.js";import"./useControlledState-CA6yhcg7.js";import"./useFormValidation-DCrH4OQY.js";import"./useSpinButton-DGFan2pl.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./useFormReset-C4J5P-lS.js";import"./useEvent-BBSiUFe7.js";import"./useTextField-vHdyh5zn.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";import"./Popover-B7Z0vypa.js";import"./useOverlayController-D_GPxB6v.js";import"./context-Cv8xNoZb.js";import"./useStatic-BujRUGzM.js";import"./OverlayContextProvider-Nf2zCsXY.js";import"./Dialog-CDLoJFKu.js";import"./RSPContexts-BsiO56QH.js";import"./OverlayArrow-CpLmLaON.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./SelectionManager-C3JHuUY2.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./VisuallyHidden-CgqIxBlU.js";import"./OverlayTrigger-D4p9MH82.js";import"./LoadingSpinner-BFVS5fU_.js";import"./browser-DogRo3Wh.js";import"./EmulatedBoldText-UtdvjbkN.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Tr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Tr as __namedExportsOrder,Wr as default};
