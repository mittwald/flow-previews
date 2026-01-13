import{j as r}from"./iframe-rOlqB43H.js";import{N as o}from"./NumberField-HvzpPGeJ.js";import{L as t}from"./Label-DjfUIXm4.js";import{F as c}from"./FieldDescription-DkDvm_UR.js";import{F as g}from"./FieldError-B7iskscN.js";import{C as x,a as b}from"./ContextualHelpTrigger-CeuDqs9U.js";import{B as h}from"./Button-Bjmah8F5.js";import{T as F}from"./Text-CXuVairg.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-sAEQMV1g.js";import"./flowComponent-BTUHU9lP.js";import"./index-CsMmwq4Q.js";import"./clsx-B-dksMZM.js";import"./index-DzmHy0yH.js";import"./IconWarning-Di5b70C_.js";import"./remote-DT0xwqhP.js";import"./useControlledHostValueProps-658OjKDK.js";import"./Button-CW-dJdjv.js";import"./utils-Ccj3VlSZ.js";import"./ProgressBar-B_qKaJMi.js";import"./Label-Hp9JhiSo.js";import"./Hidden-DOKrBgVK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CbRIwZrE.js";import"./context-C0IlT2TZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D4qdaxsz.js";import"./useFocus-B5EXjvsK.js";import"./useFocusRing-lBaj0PQL.js";import"./useFocusable-vYreZ1I2.js";import"./FieldError-CnSkRhK3.js";import"./Text-CjxKuecI.js";import"./Form-C-fbNo1l.js";import"./Group-DT2FxViN.js";import"./Input-DoF-1MyK.js";import"./useControlledState-BGrTDRws.js";import"./useFormValidation-DWvRQI9h.js";import"./useSpinButton-NqP63et_.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./useFormReset-BZ2QXIUx.js";import"./useEvent-Cj6N6ygk.js";import"./useTextField-CM0Sin4-.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DG4pRxN7.js";import"./AlertIcon-BISUoRMj.js";import"./Popover-BlI-7oje.js";import"./useOverlayController-Dp5_YYyg.js";import"./context-BHPibtfH.js";import"./useStatic-B2jLjEI4.js";import"./OverlayContextProvider-D43YjdGu.js";import"./Dialog-B6AZQFUz.js";import"./RSPContexts-D_fvST6z.js";import"./OverlayArrow-OpojsIn2.js";import"./Collection-CVOOSTzg.js";import"./CollectionBuilder-ClYuAlnm.js";import"./SelectionIndicator-CrjLUeul.js";import"./Separator-ClOd3Ug2.js";import"./SelectionManager-ewEKpYWO.js";import"./useCollator-BzTQk6BT.js";import"./FocusScope-BxWeftc5.js";import"./VisuallyHidden-CY9UiAKH.js";import"./OverlayTrigger-BdoRRXtX.js";import"./LoadingSpinner-BbLFRhi0.js";import"./browser-DeRtoS4T.js";import"./EmulatedBoldText-td0NnrMW.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
