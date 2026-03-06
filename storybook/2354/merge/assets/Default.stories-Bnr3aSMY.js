import{r as h,j as r}from"./iframe-BLMVSPV3.js";import{P as m}from"./PasswordCreationField-VaR3FEk0.js";import{L as u}from"./Label-C8Rr5uKt.js";import{B as g}from"./Button-RfhP7QLX.js";import{m as C}from"./IconWarning-DFK0SIT3.js";import{C as w}from"./CopyButton-CPie9VpD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DAjDUp_G.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./clsx-B-dksMZM.js";import"./index-B-iUx4vd.js";import"./ActionBatch-Cx_n21HW.js";import"./useOverlayController-DYQ-WflD.js";import"./useStatic-BWoTOt9k.js";import"./browser-CtcijgRV.js";import"./getActionGroupSlot-BdFM70uG.js";import"./FieldDescription-1iFVSl7S.js";import"./Text-CGLO_VNW.js";import"./EmulatedBoldText-DNZQf_gm.js";import"./Text-DPHxU6u7.js";import"./utils-je6Mfjnf.js";import"./Tooltip-Cn4nFX1Z.js";import"./OverlayArrow-DqBJvRH_.js";import"./useFocus-B92CKOsl.js";import"./ProgressBar-qhTm7W5b.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcRiwsCk.js";import"./context-BPm1HUwp.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-IVoDVSxb.js";import"./useControlledState-Bp8O9Zqw.js";import"./useFocusable-DsXmOaAq.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./ContextualHelpTrigger-A31pDvWU.js";import"./Popover-CG38Kmd4.js";import"./OverlayContextProvider-D_krly58.js";import"./Dialog-BT74UQ_T.js";import"./Button-4lGsfIj0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DgsdN2D5.js";import"./RSPContexts-BTwsU_Cp.js";import"./Collection-D_0q5y9E.js";import"./CollectionBuilder-DVFPK5dr.js";import"./SelectionIndicator-MBj-w85S.js";import"./Separator-CN6eRPM4.js";import"./SelectionManager-Dh2FxkL1.js";import"./useEvent-UzzlN-16.js";import"./useCollator-DnWD9muh.js";import"./FocusScope-uhT9mVfL.js";import"./VisuallyHidden-DQ4qIwkH.js";import"./OverlayTrigger-CUid1uyF.js";import"./Heading-BFhkb_kv.js";import"./Heading-DGpyEp1Z.js";import"./useFieldComponent-y-VnQdYS.js";import"./FieldError-C9r0kVik.js";import"./FieldError-CUXp9-J-.js";import"./AlertText-Btk8Ksd_.js";import"./AlertIcon-BrGMsY0L.js";import"./useControlledHostValueProps-Ch3Pmn36.js";import"./TextField-CJFAhKLP.js";import"./Form-CkFb-Mj9.js";import"./Group-fZwN4R35.js";import"./Input-BNOgaKSE.js";import"./useTextField-CR83D2he.js";import"./useFormReset-7ZGeCzym.js";import"./useFormValidation-CsmzuQo6.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BCnxKzgI.js";import"./remote-B_iWR4WH.js";import"./react-children-utilities-BRkHxvnD.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
