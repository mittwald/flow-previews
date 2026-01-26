import{j as r}from"./iframe-DqoQz6HB.js";import{N as o}from"./NumberField-CVLDh85l.js";import{L as t}from"./Label-Bciq9MXz.js";import{F as c}from"./FieldDescription-BKQMjDZO.js";import{F as g}from"./FieldError-eFMpVXMe.js";import{C as x,a as b}from"./ContextualHelpTrigger-DrOum0LA.js";import{B as h}from"./Button-TzxOXnkY.js";import{T as F}from"./Text-CYiIq5CT.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-X8YFoMoP.js";import"./flowComponent-D6vhYXOR.js";import"./index-DYypvI_A.js";import"./clsx-B-dksMZM.js";import"./index-BvQFjuk4.js";import"./IconWarning-CoQAKsWX.js";import"./remote-BY0bWN8b.js";import"./useControlledHostValueProps-BkJGNwZt.js";import"./Button-CY3jZXsw.js";import"./utils-OqNg9teq.js";import"./ProgressBar-C57Cfwin.js";import"./Label-B_OqtZ_p.js";import"./Hidden-DWz6zm5D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CCbYr5fG.js";import"./context-BlYILeGE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DK4IO0uy.js";import"./useFocus-zlQbWpmC.js";import"./useFocusRing-B1e51Uuh.js";import"./useFocusable-CZXIUH7h.js";import"./FieldError-WaBW2_7-.js";import"./Text-78LD2Kdh.js";import"./Form-JBdB4aYd.js";import"./Group-NaJr1bQi.js";import"./Input-C72DEuZz.js";import"./useControlledState-CN54iNBt.js";import"./useFormValidation-CMGs1DuG.js";import"./useSpinButton-cSWILPnz.js";import"./useLocalizedStringFormatter-DTNQU4JA.js";import"./useFormReset-BpNr6OOM.js";import"./useEvent-Dki6vxlR.js";import"./useTextField-CnwBOLmd.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DJCCvPqw.js";import"./AlertIcon-DE1EJRfD.js";import"./Popover-Cy3iouQi.js";import"./useOverlayController-rufURv7M.js";import"./context-DlAFKpyv.js";import"./useStatic-DhkP1cmF.js";import"./OverlayContextProvider-D9Ss5hpb.js";import"./Dialog-D_XSL9SB.js";import"./RSPContexts-C8plwG6a.js";import"./OverlayArrow-8MHoSxw7.js";import"./Collection-BKZaABnx.js";import"./CollectionBuilder-CCjg17Je.js";import"./SelectionIndicator-CdYNTPNo.js";import"./Separator-DUOURVJm.js";import"./SelectionManager-UV_-jhfP.js";import"./useCollator-DdiKTCc8.js";import"./FocusScope-DUYZjiaL.js";import"./VisuallyHidden-BJ3P8dgA.js";import"./OverlayTrigger-DI9kGsc2.js";import"./LoadingSpinner-DERXhFNJ.js";import"./browser-CwaVi4T-.js";import"./EmulatedBoldText-DhB0ijlY.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
