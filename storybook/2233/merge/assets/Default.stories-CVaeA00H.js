import{r as h,j as r}from"./iframe-BpfR1GYm.js";import{P as m}from"./PasswordCreationField-wjo2rduK.js";import{L as u}from"./Label-DS3YgAXJ.js";import{B as g}from"./Button-C4OB0yac.js";import{o as C}from"./IconWarning-BOf1a1NO.js";import{C as w}from"./CopyButton-CkS8f92_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B2LUuPCk.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./clsx-B-dksMZM.js";import"./index-BNT5TWiv.js";import"./Action-BgYAV17K.js";import"./context-CfiW950r.js";import"./useStatic-C8Msussh.js";import"./browser-CJuVe1n5.js";import"./getActionGroupSlot-DhmxW89Z.js";import"./FieldDescription-BIvCG2uM.js";import"./Text-jE0jlBS1.js";import"./EmulatedBoldText-Ba7yrIZA.js";import"./Text-DujklUHl.js";import"./utils-z0hzRCNL.js";import"./Tooltip-C4Z51BPA.js";import"./OverlayArrow-CweGqLKW.js";import"./useFocus-ZHbPEGRJ.js";import"./ProgressBar-C8HL_nLQ.js";import"./Label-TUuaFaku.js";import"./Hidden-DWXiMutX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oNP935J_.js";import"./context-BQnsf3fS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bs2ReOE0.js";import"./useFocusable-CybXUwCv.js";import"./useFocusRing-lHZkZ90J.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./ContextualHelpTrigger-CO3uohoL.js";import"./Popover-D5ZxaFGN.js";import"./useOverlayController-D3DGUENW.js";import"./OverlayContextProvider-Df0cEgpx.js";import"./Dialog-B9wBOAXv.js";import"./Button-Dq2UVXBx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VEcsoWoE.js";import"./RSPContexts-DDsKHTka.js";import"./Collection-YpU2JVsv.js";import"./CollectionBuilder-9PEIzLQk.js";import"./SelectionIndicator-n0OjLjyZ.js";import"./Separator-BrTPl_Ln.js";import"./SelectionManager-DNmOxeny.js";import"./useEvent-DNbaaWG3.js";import"./useCollator-C5z3r8b8.js";import"./FocusScope--j43gSQ5.js";import"./VisuallyHidden-Dk8KR5l4.js";import"./OverlayTrigger-W5qY0Tf-.js";import"./Heading-gFHdw-hu.js";import"./Heading-BjKLoeTv.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DI1dsoTY.js";import"./FieldError-CXRDkScB.js";import"./FieldError-DbjIiGK3.js";import"./InlineAlert-Dumml4W9.js";import"./AlertIcon-BPm48GUQ.js";import"./useControlledHostValueProps-RQKiDY30.js";import"./TextField-C5sF5vhI.js";import"./Form-Dn5OdnSf.js";import"./Group-Id9jy-Co.js";import"./Input-By9tEQCu.js";import"./useTextField-EtH9XVMV.js";import"./useFormReset-LNCZiIDy.js";import"./useFormValidation-DJqpOl9D.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C50Cnz5-.js";import"./remote-Cr2dkfGH.js";import"./react-children-utilities-Dsbs2jcM.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
