import{r as h,j as r}from"./iframe-BBHdjMJ6.js";import{P as m}from"./PasswordCreationField-ane30dIC.js";import{L as u}from"./Label-D4z-eNsD.js";import{B as g}from"./Button-P5io5pgW.js";import{m as C}from"./IconWarning-CyXtdbqA.js";import{C as w}from"./CopyButton-Mh1cRrrw.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cm-8a2Jt.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./clsx-B-dksMZM.js";import"./index-FWsSj9e8.js";import"./Action-qWLGDSFj.js";import"./context-DiIk_s_n.js";import"./useStatic-C9-mjYGz.js";import"./browser-BpCzgQab.js";import"./getActionGroupSlot-DTels04I.js";import"./FieldDescription-C-QWZBIG.js";import"./Text--O-2RTYx.js";import"./EmulatedBoldText-DKBJ0QzH.js";import"./Text-CkngT02A.js";import"./utils-gePwv3Li.js";import"./Tooltip-lS0Z-hNm.js";import"./OverlayArrow-D6Rp8cyC.js";import"./useFocus-CRClO8Jv.js";import"./ProgressBar-C-Wzcy4_.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDbjeNSC.js";import"./context-XjgBcoVm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-ClLYF0Wy.js";import"./useControlledState-CTrYQ-In.js";import"./useFocusable-CfkxnlZA.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./ContextualHelpTrigger-KvdUgcXJ.js";import"./Popover-ZlNB2WlB.js";import"./useOverlayController-CB3s63Hy.js";import"./OverlayContextProvider-Co9CnEOm.js";import"./Dialog-BeRC8Qw9.js";import"./Button-DU6B0w55.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BicAkDgM.js";import"./RSPContexts-C5-K-EZi.js";import"./Collection-C6Dl6i0H.js";import"./CollectionBuilder-DfMW8xNP.js";import"./SelectionIndicator-DJhqJXB-.js";import"./Separator-Dx2ExPSk.js";import"./SelectionManager-CKq6y8XV.js";import"./useEvent-0gy1gNIh.js";import"./useCollator-CP6m8uNZ.js";import"./FocusScope-0pM5bnV4.js";import"./VisuallyHidden-D-7oSl-x.js";import"./OverlayTrigger-xwaQ_4qt.js";import"./Heading-vAH38JYJ.js";import"./Heading-UXRD4YW7.js";import"./useFieldComponent-DcHfvLKR.js";import"./FieldError-DdPPmb_Z.js";import"./FieldError-D_l7_28D.js";import"./AlertText-Du4ye3-W.js";import"./AlertIcon-BGgK2Oqf.js";import"./useControlledHostValueProps-Bh4DAuTR.js";import"./TextField-SLDL9hnk.js";import"./Form-Dur_LiI2.js";import"./Group-BKul3vV0.js";import"./Input-a6j3yjSB.js";import"./useTextField-BtK0z8dg.js";import"./useFormReset-CMCffA9I.js";import"./useFormValidation-jj6Fwru_.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Crr5qNPb.js";import"./remote-BykRkK4-.js";import"./react-children-utilities-CnG3QtZN.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
