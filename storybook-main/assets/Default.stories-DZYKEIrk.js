import{r as h,j as r}from"./iframe-C5hcdLE6.js";import{P as m}from"./PasswordCreationField-4LRVsmjd.js";import{L as u}from"./Label-KhBIX57N.js";import{B as g}from"./Button-CzDqHNvA.js";import{m as C}from"./IconWarning-BGpxRwU-.js";import{C as w}from"./CopyButton-CtGxOXfc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DE5jfE1R.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./clsx-B-dksMZM.js";import"./index-ClIq6yug.js";import"./Action-CDW165y9.js";import"./context-kwHKhOde.js";import"./useStatic-CWBOctoH.js";import"./browser-BJ6k16eC.js";import"./getActionGroupSlot-CVriiRzc.js";import"./FieldDescription-C0cABHms.js";import"./Text-D8uazRXK.js";import"./EmulatedBoldText-G7OdIUUd.js";import"./Text-79_FySwa.js";import"./utils-B3GIFt3C.js";import"./Tooltip-DRG-qmXR.js";import"./OverlayArrow-DN70rght.js";import"./useFocus-Fr_BfSOs.js";import"./ProgressBar-Cgmeu2qU.js";import"./Label-Cdw77YDw.js";import"./Hidden-CzLEuVYW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DIyDpHH2.js";import"./context-E1uxYtQv.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C9jQ4AxE.js";import"./useFocusable-xzWj-wm9.js";import"./useFocusRing-B86g4qKF.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./ContextualHelpTrigger-qRm64qS-.js";import"./Popover-CdmUaf65.js";import"./useOverlayController-BWvUtZsb.js";import"./OverlayContextProvider-CVTCD2MZ.js";import"./Dialog-D66iw0U8.js";import"./Button-CX4O7Muw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyQlFp9g.js";import"./RSPContexts-BMj0h4_3.js";import"./Collection-DXvYJhLm.js";import"./CollectionBuilder-CZUA7JnX.js";import"./SelectionIndicator-B5s74P3-.js";import"./Separator-DaQ1DUjO.js";import"./SelectionManager-Bbl3GIce.js";import"./useEvent-Drml-VA-.js";import"./useCollator-C0ggjMz1.js";import"./FocusScope-CQ3JVi5A.js";import"./VisuallyHidden-n5FPXG3E.js";import"./OverlayTrigger-DT2_gJPw.js";import"./Heading-DWTXooi-.js";import"./Heading-Y84dBjpP.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-t_EOnv-a.js";import"./FieldError-CRlQMLVN.js";import"./FieldError-CqTmSUdd.js";import"./AlertText-Dgs9QBLV.js";import"./AlertIcon-DM3zFbIf.js";import"./useControlledHostValueProps-BEHg_3O_.js";import"./TextField-Bek_G-5m.js";import"./Form-Dgtv3yvc.js";import"./Group-aRvuTcjD.js";import"./Input-0x1obYXp.js";import"./useTextField-CufDKcCg.js";import"./useFormReset-BnJ7w8Tn.js";import"./useFormValidation-BJOScXHE.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-hJnys7-d.js";import"./remote-DfH19er1.js";import"./react-children-utilities-8X3bcm-z.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
