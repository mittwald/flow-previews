import{r as h,j as r}from"./iframe-CH-PGbIe.js";import{P as m}from"./PasswordCreationField-DbsAi7MN.js";import{L as u}from"./Label-BpHmIn39.js";import{B as g}from"./Button-Dl-iCxcF.js";import{m as C}from"./IconWarning-BrtiYPUm.js";import{C as w}from"./CopyButton-Bq_QNDJf.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYPsp9rr.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./clsx-B-dksMZM.js";import"./index-yvyiz2TD.js";import"./Action-CX67yONB.js";import"./context-BsZ7lsCx.js";import"./useStatic-DyjFLUOF.js";import"./browser-Bk_hun62.js";import"./getActionGroupSlot-BkUFYgi5.js";import"./FieldDescription-DMXEORO1.js";import"./Text-DUTVzyy5.js";import"./EmulatedBoldText-DLXz_2Ie.js";import"./Text-C_Kx-nbJ.js";import"./utils-BUbYN1U7.js";import"./Tooltip-gcYstrAI.js";import"./OverlayArrow-BxBE_adq.js";import"./useFocus-C-u_ZFsP.js";import"./ProgressBar-BvIgs7se.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBwXLpG2.js";import"./context-BEPAk1pi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CuUFHyYZ.js";import"./useControlledState-BQPo69mZ.js";import"./useFocusable-DX9jgPLa.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./ContextualHelpTrigger-qd0S77SP.js";import"./Popover-E9WcTTGu.js";import"./useOverlayController-DE9i1G--.js";import"./OverlayContextProvider-C92IYoS4.js";import"./Dialog-LWxSnoH8.js";import"./Button-BxJ7LcYT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CjXzQGxt.js";import"./RSPContexts-CFzFD81a.js";import"./Collection-BTj5Zmqj.js";import"./CollectionBuilder-D_HWiiHS.js";import"./SelectionIndicator-DFgYB22t.js";import"./Separator-D7Dxs4fR.js";import"./SelectionManager-Cy9wSm_1.js";import"./useEvent-DmJ5-BvT.js";import"./useCollator-NRPLm61h.js";import"./FocusScope-Com4Ovel.js";import"./VisuallyHidden-BZmadp8e.js";import"./OverlayTrigger-BCj6WW1R.js";import"./Heading-BkfS56Xz.js";import"./Heading-DuD4iKmL.js";import"./useFieldComponent-R38s1k2Z.js";import"./FieldError-9pLulNyY.js";import"./FieldError-PikikH1M.js";import"./AlertText-lzhTm-Qc.js";import"./AlertIcon-Cf4_Rc8_.js";import"./useControlledHostValueProps-BPSsIec4.js";import"./TextField-C221tDOx.js";import"./Form-BPpqOWmF.js";import"./Group-D9bGLtxm.js";import"./Input-C82ooeG7.js";import"./useTextField-DqKvfInW.js";import"./useFormReset-DarrOQyz.js";import"./useFormValidation-CGeoBpxY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BVg6Htwb.js";import"./remote-NkxELaCk.js";import"./react-children-utilities-hFcdB3zS.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
