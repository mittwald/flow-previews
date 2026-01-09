import{r as h,j as r}from"./iframe-BoA7YzYm.js";import{P as m}from"./PasswordCreationField-CyOXiY_T.js";import{L as u}from"./Label-Cjbbehtk.js";import{B as g}from"./Button-BKFimoLG.js";import{n as C}from"./IconWarning-Cm4x5FHH.js";import{C as w}from"./CopyButton-BFLh2Gpy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYpyzP7H.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./clsx-B-dksMZM.js";import"./index-C8IfwtBf.js";import"./Action-DzFCrVY1.js";import"./context-Cs30ZfjP.js";import"./useStatic-BAyQxveA.js";import"./browser--2iaZute.js";import"./getActionGroupSlot-Cyrp6itk.js";import"./FieldDescription-Ct19ob0x.js";import"./Text-Dcujjsgx.js";import"./EmulatedBoldText-B6CuOWoW.js";import"./Text-DzES3Axw.js";import"./utils-CbCfmbCJ.js";import"./Tooltip-BX3ISXFQ.js";import"./OverlayArrow-DNHvsvRZ.js";import"./useFocus-0w8IxMP9.js";import"./ProgressBar-0Lez36-3.js";import"./Label-CIY5uMr1.js";import"./Hidden-COFYe48C.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BJjmJvn4.js";import"./context-Bl3IUlM5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bptfp7LK.js";import"./useFocusable-03sk398M.js";import"./useFocusRing-QIpAUb-m.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./ContextualHelpTrigger-GPL0Atee.js";import"./Popover-tixea_gI.js";import"./useOverlayController-DTpdZrop.js";import"./OverlayContextProvider-CUahq4yj.js";import"./Dialog-BDOoN61w.js";import"./Button-BSweg4_1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VWzB255U.js";import"./RSPContexts-D0KJsdCX.js";import"./Collection-DjWHVVf5.js";import"./CollectionBuilder-B_pnCfkc.js";import"./SelectionIndicator-fGxLhP25.js";import"./Separator-DSRy3Jbj.js";import"./SelectionManager-B2bGzozG.js";import"./useEvent-B6QIfMFm.js";import"./useCollator-DeMqSZ32.js";import"./FocusScope-ewaHP7Wk.js";import"./VisuallyHidden-ulLndJxN.js";import"./OverlayTrigger-sv_J9YIM.js";import"./Heading-gW7z3NjW.js";import"./Heading-BxB-LiTB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DkEUVrE8.js";import"./FieldError-CkVfHT3s.js";import"./FieldError-DIrg2qiC.js";import"./useControlledHostValueProps-varpk8I2.js";import"./TextField-by_fX4UO.js";import"./Form-DOX3bg_5.js";import"./Group-CR0xPesX.js";import"./Input-BsUxPOGC.js";import"./useTextField-Bdu5byVa.js";import"./useFormReset-Lf5kfq5Z.js";import"./useFormValidation-D99W395Z.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CJmPD5N7.js";import"./remote-W2BsjsJq.js";import"./react-children-utilities-BJ9mHEBp.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
