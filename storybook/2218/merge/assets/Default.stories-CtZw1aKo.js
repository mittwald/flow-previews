import{r as h,j as r}from"./iframe-BVdPrJ3b.js";import{P as m}from"./PasswordCreationField-DNBF7xKi.js";import{L as u}from"./Label-CzweG7Yl.js";import{B as g}from"./Button-DWZoHS5b.js";import{n as C}from"./IconWarning-YADbbYCH.js";import{C as w}from"./CopyButton-DMf8nsLW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-VccpDVll.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./clsx-B-dksMZM.js";import"./index-BWMeLKrj.js";import"./Action-D5COu0gZ.js";import"./context-CCTeyNcb.js";import"./useStatic-BX7NV0z1.js";import"./browser-DSBfFWZr.js";import"./getActionGroupSlot-l8kcu2OD.js";import"./FieldDescription-CkXX9Bje.js";import"./Text-nQWL8z2r.js";import"./EmulatedBoldText-BVln2yP5.js";import"./Text-CmXVeCCc.js";import"./utils-BEq1Wr11.js";import"./Tooltip-Br0qyXOd.js";import"./OverlayArrow-DJuQPxkq.js";import"./useFocus-DKH0A8r5.js";import"./ProgressBar-D7sWQ_td.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CZZK6Myr.js";import"./context-D026yTy_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CgIeep-j.js";import"./useFocusable-CP0kX89o.js";import"./useFocusRing-D6WsekYV.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./ContextualHelpTrigger-C5PYT5_R.js";import"./Popover-Cqwaieux.js";import"./useOverlayController-xrHTUCYk.js";import"./OverlayContextProvider-D_N4RW7r.js";import"./Dialog-BIQQDMqR.js";import"./Button-BCUp5wJP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DUwPxRbX.js";import"./RSPContexts-Bdb5uPWt.js";import"./Collection-BL4wwMNo.js";import"./CollectionBuilder-CV7Ejkkp.js";import"./SelectionIndicator-BRRaId4S.js";import"./Separator-oDuFt3L8.js";import"./SelectionManager-C_oDRx_o.js";import"./useEvent-DCTAoM_e.js";import"./useCollator-CjJjrWZi.js";import"./FocusScope-Bh-KjmdJ.js";import"./VisuallyHidden-BtVtJU_V.js";import"./OverlayTrigger-BdaWs8nX.js";import"./Heading-CFOSEH3z.js";import"./Heading-BpzKqMX-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-Pua8aj4t.js";import"./FieldError-BeQ9X37c.js";import"./FieldError-BhKmMJaW.js";import"./useControlledHostValueProps-BPJxn4ac.js";import"./TextField-C5rmUei-.js";import"./Form-BeiuGm7T.js";import"./Group-Bu0EB2GR.js";import"./Input-Du7-TamR.js";import"./useTextField-BIKh80Mc.js";import"./useFormReset-DipgmSs2.js";import"./useFormValidation-BHFBjW_A.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DBvrX9Qx.js";import"./remote-CTgJkn4z.js";import"./react-children-utilities-CVOGzLtW.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
