import{r as h,j as r}from"./iframe-HHIIuBER.js";import{P as m}from"./PasswordCreationField-0QcwVMlu.js";import{L as u}from"./Label-CBXKH6Tn.js";import{B as g}from"./Button-D9uXd6kS.js";import{m as C}from"./IconWarning-CPuUEZGY.js";import{C as w}from"./CopyButton-Du7k5Wjy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-UvYry7O0.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./clsx-B-dksMZM.js";import"./index-CXDCOpiF.js";import"./Action-_oJPJyM7.js";import"./context-D550pjOP.js";import"./useStatic-CHenPBZg.js";import"./browser-BiwdkBmz.js";import"./getActionGroupSlot-DxN6Z1_y.js";import"./FieldDescription-CXq0EMj9.js";import"./Text-1gTdtZLR.js";import"./EmulatedBoldText-DygQZkyN.js";import"./Text-XNblTka2.js";import"./utils-Cg0Q0SJj.js";import"./Tooltip-DLe4peB_.js";import"./OverlayArrow-BDTM6fDd.js";import"./useFocus--KWf2FGc.js";import"./ProgressBar-2UTBzJPE.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5SH0-wGx.js";import"./context-BwOS-W-N.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-4HIuR3kq.js";import"./useControlledState-DbjjrDzt.js";import"./useFocusable-CK9MQKQ0.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./ContextualHelpTrigger-_10dIPQD.js";import"./Popover-vPNRkUgo.js";import"./useOverlayController-CPglRTe1.js";import"./OverlayContextProvider-C_3PlVFc.js";import"./Dialog-17xgL67A.js";import"./Button-B3mdCDJz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DR7SsbUT.js";import"./RSPContexts-DTcyqJ2O.js";import"./Collection-CvBP3D3N.js";import"./CollectionBuilder-O9kuHpIB.js";import"./SelectionIndicator-D4-zI_jf.js";import"./Separator-C2NuKe-C.js";import"./SelectionManager-sYUHP04o.js";import"./useEvent-Btkolbn2.js";import"./useCollator-h0FVZg7K.js";import"./FocusScope-BRQqWTqz.js";import"./VisuallyHidden-W06uk0vU.js";import"./OverlayTrigger-CzuKQCYE.js";import"./Heading-Dy213gst.js";import"./Heading-BMnEpmdL.js";import"./useFieldComponent-DUw61_cc.js";import"./FieldError-Fy3l3DO0.js";import"./FieldError-DxbTuNm9.js";import"./AlertText-DlszfG1H.js";import"./AlertIcon-CK1OfGfa.js";import"./useControlledHostValueProps-CdoEpCQx.js";import"./TextField-CEqZFMZ3.js";import"./Form-bxdneiGL.js";import"./Group-CQTHjQwH.js";import"./Input-BPv4G1er.js";import"./useTextField-DsRplzos.js";import"./useFormReset-9uO05BU2.js";import"./useFormValidation-CzNeWdfJ.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DsMp8zOw.js";import"./remote-MyOm1NIW.js";import"./react-children-utilities-DhdvkLz4.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
