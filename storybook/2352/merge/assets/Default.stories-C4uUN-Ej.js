import{j as r}from"./iframe-DhXHhh1w.js";import{N as o}from"./NumberField-B6QL5ITP.js";import{L as t}from"./Label-B97zndYQ.js";import{F as c}from"./FieldDescription-Cpq8h0bA.js";import{F as g}from"./FieldError-NwdeaE8Z.js";import{C as x,a as b}from"./ContextualHelpTrigger-b40qHGBo.js";import{B as h}from"./Button-DK8hND6e.js";import{T as F}from"./Text-VjJbV_1P.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CXGCADuw.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./clsx-B-dksMZM.js";import"./index-B6ijkuYI.js";import"./IconWarning-Cq0bATFd.js";import"./remote-3lBAaKOS.js";import"./useControlledHostValueProps-Bz_KAzkR.js";import"./Button-B72XzUR4.js";import"./utils--GApMcJ9.js";import"./ProgressBar-F8Z66Kjl.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B7imI5Js.js";import"./context-C0JBe_V4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DuFsm5YE.js";import"./useFocus-CCcmXvuL.js";import"./useFocusRing-C0Ptw1X0.js";import"./useFocusable-DaonITQz.js";import"./FieldError-DoyTFare.js";import"./Text-BhHd18lu.js";import"./Form-Cr93Lgju.js";import"./Group-Bojaf2qr.js";import"./Input-CeMR8XUm.js";import"./useControlledState-BAaAMcGs.js";import"./useFormValidation-Bi2teCon.js";import"./useSpinButton-DN3R0XyU.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./useFormReset-BhTKQiKR.js";import"./useEvent-Ceq3h06g.js";import"./useTextField-DHL_UDQT.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CTc_944s.js";import"./AlertIcon-CowGyQyl.js";import"./Popover-JroSLm89.js";import"./useOverlayController-BReF9zcC.js";import"./useStatic-Cuuv0LOE.js";import"./OverlayContextProvider-CWHHdI4p.js";import"./Dialog-CefhgDMJ.js";import"./RSPContexts-BISy0hbD.js";import"./OverlayArrow-D0YkTT7M.js";import"./Collection-CjYz6Uc3.js";import"./CollectionBuilder-BLnwNesF.js";import"./SelectionIndicator-p-DrZhoI.js";import"./Separator-YN4gslNC.js";import"./SelectionManager-DsW2owD3.js";import"./useCollator-CdSsm3Cn.js";import"./FocusScope-DTOX4bjf.js";import"./VisuallyHidden-B52Q2-iE.js";import"./OverlayTrigger-Dx4VUFaj.js";import"./LoadingSpinner-BQo0GQZs.js";import"./browser-DC-Dnn5c.js";import"./EmulatedBoldText-DK8yRX5h.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Wr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Wr as __namedExportsOrder,Rr as default};
