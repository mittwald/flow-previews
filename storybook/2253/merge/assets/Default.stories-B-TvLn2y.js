import{r as h,j as r}from"./iframe-DA37PzgD.js";import{P as m}from"./PasswordCreationField-CsogpZb6.js";import{L as u}from"./Label-DPj6ip94.js";import{B as g}from"./Button-C_3hQ6qU.js";import{m as C}from"./IconWarning-DMc9nDIB.js";import{C as w}from"./CopyButton-BgmV9S0f.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cec-XZha.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./clsx-B-dksMZM.js";import"./index-CccRe4nm.js";import"./Action-hYBLKXUj.js";import"./context-Cc9V1wfK.js";import"./useStatic-ChmTLNpH.js";import"./browser-Tq-Ovndo.js";import"./getActionGroupSlot-wxzu3uZW.js";import"./FieldDescription-z_r4u74B.js";import"./Text-CKy5VQ2_.js";import"./EmulatedBoldText-CMCwPeqW.js";import"./Text-VNYIIeBR.js";import"./utils-DtYp6psM.js";import"./Tooltip-WQCQ-XqN.js";import"./OverlayArrow-BTxrL9C1.js";import"./useFocus-Ck97lmu1.js";import"./ProgressBar-Dk36AjFP.js";import"./Label-D_nNHFmP.js";import"./Hidden-CyblAlwf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrQo68aR.js";import"./context-KzPqYKh3.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-izS5uoD6.js";import"./useFocusable-_BBBrAx0.js";import"./useFocusRing-GdKi_2te.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./ContextualHelpTrigger-B7TfKZIV.js";import"./Popover-CcmaDUys.js";import"./useOverlayController-h5OHZ8gf.js";import"./OverlayContextProvider-DWmJMYYY.js";import"./Dialog-hpWxHudW.js";import"./Button-BzF7Ww8-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress--pFlH7xw.js";import"./RSPContexts-DnMMFVEJ.js";import"./Collection-Br_xwhc2.js";import"./CollectionBuilder-DSPHiwuI.js";import"./SelectionIndicator-D-mCry-j.js";import"./Separator-uGGsp39Q.js";import"./SelectionManager-WiFwd4h7.js";import"./useEvent-D5fcY2Sa.js";import"./useCollator-BaT-QBRk.js";import"./FocusScope-CIeecyJ9.js";import"./VisuallyHidden-C_Tup-b1.js";import"./OverlayTrigger-BLRGcvFA.js";import"./Heading-IQrV0yVS.js";import"./Heading-C-vMGDS8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DTrWN6Rf.js";import"./FieldError-CnCGw98P.js";import"./FieldError-jhFQ-VHV.js";import"./AlertText-HBRlOgXf.js";import"./AlertIcon-BbDcA2fv.js";import"./useControlledHostValueProps-BlueJkLA.js";import"./TextField-C4o0vjpo.js";import"./Form-DXCSZa8G.js";import"./Group-x45aU-Mx.js";import"./Input-BujLciHZ.js";import"./useTextField-CRU8yiuX.js";import"./useFormReset-ChjOdAw3.js";import"./useFormValidation-2Nc27zh7.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-YNnYvyP0.js";import"./remote-BJWo5b31.js";import"./react-children-utilities-BIyLA61P.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
