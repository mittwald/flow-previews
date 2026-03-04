import{j as r}from"./iframe-CEWg6_IX.js";import{N as t}from"./NumberField-BP4MYfa1.js";import{L as o}from"./Label-BaJSnICs.js";import{F as l}from"./FieldDescription-BJFWlccI.js";import{F as d}from"./FieldError-fCgHoEMk.js";import{C as u,a as c}from"./ContextualHelpTrigger-B-fxFq0g.js";import{B as x}from"./Button-CA6AkUR_.js";import{T as g}from"./Text-Bw_cIJde.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BOMK2S5G.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./clsx-B-dksMZM.js";import"./index-BYd0o8d1.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./useControlledHostValueProps-DuyCNcnr.js";import"./Button-Dhdc5WDI.js";import"./utils-VWmQzJjV.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./context-BwTFrxK2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./FieldError-B_BExaNJ.js";import"./Text-B3jOd0w4.js";import"./Form-XtAuYD0I.js";import"./Group-BY2zOSJX.js";import"./Input-DI2XwVnV.js";import"./useControlledState-DV7blYjC.js";import"./useFormValidation-przZuKLk.js";import"./useSpinButton-QzrP8-0Q.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./useFormReset-D1AT4nVs.js";import"./useCollator-bALXm-sp.js";import"./useTextField-aMHav-G9.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";import"./Popover-CBq8Jp6I.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./Dialog-0Ix26WHm.js";import"./RSPContexts-ulpMISZ-.js";import"./OverlayArrow-LwODxVqr.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./SelectionManager-B6Y4EMPJ.js";import"./FocusScope-BNRdhUBQ.js";import"./VisuallyHidden-DHhRta61.js";import"./OverlayTrigger-DGu3y4_r.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/NumberField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsx(t,{onChange:h("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(l,{children:"Enter your age"})]})},s={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},p={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(d,{children:"Age is required"})]})},m={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},n={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(u,{children:[r.jsx(x,{ariaSlot:null}),r.jsx(c,{children:r.jsx(g,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Dr=["Default","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,n as WithContextualHelp,s as WithDefaultValue,a as WithFieldDescription,p as WithFieldError,m as WithUnit,Dr as __namedExportsOrder,Sr as default};
