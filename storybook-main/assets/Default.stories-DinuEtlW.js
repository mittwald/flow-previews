import{r as h,j as r}from"./iframe-C8tsaODo.js";import{P as m}from"./PasswordCreationField-C6J3Bh_E.js";import{L as u}from"./Label-1oLHWqvU.js";import{B as g}from"./Button-BxguJBhT.js";import{m as C}from"./IconWarning-Up7WC4e0.js";import{C as w}from"./CopyButton-CNm2Je7V.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DA7vjxZL.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./clsx-B-dksMZM.js";import"./index-BNoG6unV.js";import"./ActionBatch-BUyIhhJw.js";import"./useOverlayController-Bf797MvO.js";import"./useStatic-jSI8PS8c.js";import"./browser-qgMJ3NzC.js";import"./getActionGroupSlot-C3_vSruP.js";import"./FieldDescription-BZoE01SC.js";import"./Text-BE7lE0T8.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./Text-BkxlIu3p.js";import"./utils-CdcYI7XL.js";import"./Tooltip-Dagmmp6X.js";import"./OverlayArrow-CxwkoRJi.js";import"./platform-Dz8CwCz0.js";import"./ProgressBar-DplTBNX0.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oJhcJRxp.js";import"./context-BwdmRhET.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DauayxVe.js";import"./useFocus-D0DC1KKH.js";import"./useControlledState-CN29789s.js";import"./useFocusable-BW2xec3w.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./ContextualHelpTrigger-BXgy7R1C.js";import"./Popover-D8RRHCNj.js";import"./OverlayContextProvider-Buisu9vo.js";import"./Dialog-CNeqByqP.js";import"./Button-Dm2nITC7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-vv50L64r.js";import"./RSPContexts-DtfJrVYY.js";import"./Collection-Drvm3BjC.js";import"./CollectionBuilder-CUdEZ73w.js";import"./SelectionIndicator-5GEQvOaX.js";import"./Separator-AhH2lqvH.js";import"./SelectionManager-BzBOXU82.js";import"./useEvent-520ieM62.js";import"./useCollator-q3kgEL61.js";import"./FocusScope-DFjW_d09.js";import"./VisuallyHidden-hgCntKQk.js";import"./OverlayTrigger-xIqGS4XS.js";import"./Heading-BUyGvYSI.js";import"./Heading-LrX14EbB.js";import"./useFieldComponent-FgbLRzY4.js";import"./FieldError-EQJdnOUU.js";import"./FieldError-DSXMmXMO.js";import"./AlertText-BlUc9teP.js";import"./AlertIcon-DJlFLAIk.js";import"./useControlledHostValueProps-D0AOVaZQ.js";import"./TextField-B6A8u9tv.js";import"./Form-Ch0mipSV.js";import"./Group-DRewra_w.js";import"./Input-ConcdJ9I.js";import"./useTextField-BlhjZ_T-.js";import"./useFormReset-BpTKK099.js";import"./useFormValidation-CZJdaAR2.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C-PnKOui.js";import"./remote-Ckar2tK9.js";import"./react-children-utilities-DrL1a9IJ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Tr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Tr as __namedExportsOrder,Vr as default};
