import{r as h,j as r}from"./iframe-kP2HEfFS.js";import{P as m}from"./PasswordCreationField-AoEROHeP.js";import{L as u}from"./Label-o-9raADe.js";import{B as g}from"./Button-D2SKyW-T.js";import{m as C}from"./IconWarning-3wMfkhbI.js";import{C as w}from"./CopyButton-CtFCilh5.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bb3YYypk.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./clsx-B-dksMZM.js";import"./index-Gr0VxzdI.js";import"./Action-DkWPc0_f.js";import"./context-Dy6MMTPO.js";import"./useStatic-D099is7R.js";import"./browser-CLBqp6VR.js";import"./getActionGroupSlot-DpvImWBQ.js";import"./FieldDescription-BziMx8Bm.js";import"./Text-DmTsXHLN.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./Text-Bt0sFzeR.js";import"./utils-C12UPk0k.js";import"./Tooltip-CmK6uwgF.js";import"./OverlayArrow-CvR9rE0m.js";import"./useFocus-C5lTzrJh.js";import"./ProgressBar-BJr25bRm.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-07phmwB_.js";import"./context-C1J5EAXU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-K2EmMrc1.js";import"./useFocusable-B7yvIBUC.js";import"./useFocusRing-CKDLKfs4.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./ContextualHelpTrigger-qxifvWEU.js";import"./Popover-rKvPy3vS.js";import"./useOverlayController-BKD7nFkO.js";import"./OverlayContextProvider-BizSMrSr.js";import"./Dialog-DLhIMuXA.js";import"./Button-BPAnAcar.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Zu3olfM4.js";import"./RSPContexts-BgFmjUDe.js";import"./Collection-MFl1TxyK.js";import"./CollectionBuilder-DD43TuPt.js";import"./SelectionIndicator-v5-gN0xn.js";import"./Separator-CNO8xmqY.js";import"./SelectionManager-DX3kNlRf.js";import"./useEvent-BZyKNwjW.js";import"./useCollator-eXCpI9bT.js";import"./FocusScope-BDiazwAe.js";import"./VisuallyHidden-BxKC931y.js";import"./OverlayTrigger-iZasDHkJ.js";import"./Heading-BD2z6cnX.js";import"./Heading-BzscSBm2.js";import"./useFieldComponent-D28HcwQQ.js";import"./FieldError-CJUuAB6W.js";import"./FieldError-BL6ZnBFp.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";import"./useControlledHostValueProps-B56CX2d2.js";import"./TextField-BupKGr6e.js";import"./Form-D51h5Mwy.js";import"./Group-kUVC2JK5.js";import"./Input-pH48-oWo.js";import"./useTextField-G-5KfczL.js";import"./useFormReset-BTQYEics.js";import"./useFormValidation-CKIaBDhF.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DqLZcArG.js";import"./remote-7RhInu5H.js";import"./react-children-utilities-BXEAqfW2.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
