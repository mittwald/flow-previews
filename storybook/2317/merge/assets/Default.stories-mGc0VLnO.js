import{r as h,j as r}from"./iframe-wn9t8CHT.js";import{P as m}from"./PasswordCreationField-D3mmbzmY.js";import{L as u}from"./Label-5bTXkWLT.js";import{B as g}from"./Button-CkMrcy8B.js";import{m as C}from"./IconWarning-B-Wnft1S.js";import{C as w}from"./CopyButton-Ci7bK-uD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Ce3zwrtf.js";import"./flowComponent-CQL_Hol9.js";import"./index-Daog0jgF.js";import"./clsx-B-dksMZM.js";import"./index-DGBNuX5e.js";import"./Action-CYz45Lq2.js";import"./context-DvLe6BQ8.js";import"./useStatic-Dq0n5AIR.js";import"./browser-C4GSjbSD.js";import"./getActionGroupSlot-DC-fIdha.js";import"./FieldDescription-BbTglOXg.js";import"./Text-vlZ105c0.js";import"./EmulatedBoldText-BRurVn-6.js";import"./Text-CigTZLQg.js";import"./utils-BBqjM3mV.js";import"./Tooltip-B3_VDxD3.js";import"./OverlayArrow-Dlbb_9eh.js";import"./useFocus-Dfm-Pt4C.js";import"./ProgressBar-DYDTpv9y.js";import"./Label-vEkUlCU_.js";import"./Hidden-B0JF82fI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfKSfnQU.js";import"./context-DUIKEoYM.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-4Aw-0NUA.js";import"./useControlledState-Ckzcuwb2.js";import"./useFocusable-MJ0CU3Gf.js";import"./useLocalizedStringFormatter-BW5ArTpm.js";import"./ContextualHelpTrigger-B54v114n.js";import"./Popover-CB12jP-7.js";import"./useOverlayController-BCCPmC-G.js";import"./OverlayContextProvider-DPqnyBOx.js";import"./Dialog-QaAGaw4t.js";import"./Button-C_8bimI7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-febwKXtN.js";import"./RSPContexts-CP6K_mUq.js";import"./Collection-Dabp6tSw.js";import"./CollectionBuilder-Dc9k3CRr.js";import"./SelectionIndicator-Drl_jI2J.js";import"./Separator-D7rNCrfy.js";import"./SelectionManager-CyQywfav.js";import"./useEvent-msC5Saat.js";import"./useCollator-ia3Kz-2A.js";import"./FocusScope-Cff801J_.js";import"./VisuallyHidden-Rhd9Lwfr.js";import"./OverlayTrigger-DiExDdE4.js";import"./Heading-BtcPMLbU.js";import"./Heading-BifW3h1d.js";import"./useFieldComponent-CuQvVX64.js";import"./FieldError-C9AtZQjZ.js";import"./FieldError-BriaHAsp.js";import"./AlertText-G52nApD-.js";import"./AlertIcon-CswpW_U3.js";import"./useControlledHostValueProps-Cyhqc6HR.js";import"./TextField-DI04usGC.js";import"./Form-BpC7EEKj.js";import"./Group-uuffA9yu.js";import"./Input-VHI0T5Gg.js";import"./useTextField-BdONBPSY.js";import"./useFormReset-BfPrTbq9.js";import"./useFormValidation-DyGMCXIt.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C5pntlan.js";import"./remote-BKPU2Q50.js";import"./react-children-utilities-BxRM7kRu.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
