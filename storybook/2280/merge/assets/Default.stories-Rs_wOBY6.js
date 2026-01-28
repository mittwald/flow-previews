import{r as h,j as r}from"./iframe-DXKyl4qq.js";import{P as m}from"./PasswordCreationField-DCprBnpn.js";import{L as u}from"./Label-DJy_0fcC.js";import{B as g}from"./Button-0acoIVQZ.js";import{m as C}from"./IconWarning-BTtxekbk.js";import{C as w}from"./CopyButton-D9KHFHHG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CaArDE2O.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./clsx-B-dksMZM.js";import"./index-CK0x1Z6h.js";import"./Action-eA8jYG3_.js";import"./context-9N5Shw7P.js";import"./useStatic-CdHxY_ZS.js";import"./browser-Q1FjFR8E.js";import"./getActionGroupSlot-CBJ6_xHE.js";import"./FieldDescription-BLR7NcCI.js";import"./Text-DlQihciA.js";import"./EmulatedBoldText-Bw3TIL22.js";import"./Text-Dy69l_TS.js";import"./utils-Cgx1j8_A.js";import"./Tooltip-CAJ4vYen.js";import"./OverlayArrow-BvQnSdeu.js";import"./useFocus-BAjbVDBz.js";import"./ProgressBar-C7LcFD3o.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXFTMfS2.js";import"./context-C5-138xc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DoixN5z_.js";import"./useControlledState-DW1EgN0_.js";import"./useFocusable-DAwaDAhU.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./ContextualHelpTrigger-D10VcDcc.js";import"./Popover-aE3BG6iV.js";import"./useOverlayController-jwGD9Xed.js";import"./OverlayContextProvider-M458RI5v.js";import"./Dialog-B1psX4sF.js";import"./Button-O8jlFCas.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-MFF54RNh.js";import"./RSPContexts-DBmlKLt8.js";import"./Collection-9k1PtGDv.js";import"./CollectionBuilder-Ur5Id6rg.js";import"./SelectionIndicator-BncnqGmj.js";import"./Separator-CtwDwrgV.js";import"./SelectionManager-Dx4eaKjX.js";import"./useEvent-B4GDMgLt.js";import"./useCollator-D4u7p9z_.js";import"./FocusScope-CeuTnAxx.js";import"./VisuallyHidden-XnRwWdWi.js";import"./OverlayTrigger-BY_70k08.js";import"./Heading-C5r2I8c5.js";import"./Heading-CG4_-w1-.js";import"./useFieldComponent-DrLbNusb.js";import"./FieldError-hPaNUVVF.js";import"./FieldError-CXwp2WFY.js";import"./AlertText-BbpMfzbs.js";import"./AlertIcon-BU8g3GYG.js";import"./useControlledHostValueProps-8m6fvoIX.js";import"./TextField-Bx0CYa7T.js";import"./Form-VygiigBM.js";import"./Group-DMqjorr8.js";import"./Input-Bhgje7aH.js";import"./useTextField-1rJhdvTW.js";import"./useFormReset-Cw-gwOYV.js";import"./useFormValidation-1Ohd4Vow.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-NKyffFLh.js";import"./remote-5V97MXBJ.js";import"./react-children-utilities-BZQ23u6f.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
