import{j as r}from"./iframe-nlVW-CPZ.js";import{N as o}from"./NumberField-D8CAXozZ.js";import{L as t}from"./Label-BuWy1qrT.js";import{F as c}from"./FieldDescription-a2tRS2_K.js";import{F as g}from"./FieldError-C-5FG0Dy.js";import{C as x,a as b}from"./ContextualHelpTrigger-CF9guurq.js";import{B as h}from"./Button-_Sn69Jgj.js";import{T as F}from"./Text-BzuDjaz9.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DOzg870F.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./clsx-B-dksMZM.js";import"./index-DrBjklCk.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./useControlledHostValueProps-C--TiKRF.js";import"./Button-BXbNlZWB.js";import"./utils-CyuEFqip.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./context-CIGB7i0H.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BSHzPeES.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useFocusable-DHxyzauV.js";import"./FieldError-BpjEpOFY.js";import"./Text-sEy-KTn9.js";import"./Form-DSPAlIu9.js";import"./Group-w-lYdjjN.js";import"./Input-BlMpicf_.js";import"./useControlledState-ywoEmBU4.js";import"./useFormValidation-DqSMo-uw.js";import"./useSpinButton-BQ-pbP0Z.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./useFormReset-J8eUPjf8.js";import"./useEvent-C_UmhbA0.js";import"./useTextField-C4USa82P.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";import"./Popover-D2O_yi7O.js";import"./useOverlayController-52PC3yWy.js";import"./context-DJb9q1Xr.js";import"./useStatic-C5UephlJ.js";import"./OverlayContextProvider-CMO4Tng6.js";import"./Dialog-zXGOOBEm.js";import"./RSPContexts-DlUCcPRc.js";import"./OverlayArrow-xJgx9UYQ.js";import"./Collection-VsHvURZ5.js";import"./CollectionBuilder-BC18ROL9.js";import"./SelectionIndicator-DdhOYUUY.js";import"./Separator-Ei4AiFvo.js";import"./SelectionManager-BMKEE2dl.js";import"./useCollator-CE-FIC6l.js";import"./FocusScope-DihhZg9P.js";import"./VisuallyHidden-44O2XzGD.js";import"./OverlayTrigger-DTUPogrt.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./browser-BoEfPalF.js";import"./EmulatedBoldText-DYHVi4jR.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
