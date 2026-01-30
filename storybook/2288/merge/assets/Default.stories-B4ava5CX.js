import{r as h,j as r}from"./iframe-l1bkuF5f.js";import{P as m}from"./PasswordCreationField-DLpsMllP.js";import{L as u}from"./Label-DX1aPacI.js";import{B as g}from"./Button-pfxdB-3A.js";import{m as C}from"./IconWarning-rcKmWr_e.js";import{C as w}from"./CopyButton-C89CFOHv.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BrVBKZhY.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./clsx-B-dksMZM.js";import"./index-BcUcgGWs.js";import"./Action-DCncdG_g.js";import"./context-DTty7kAQ.js";import"./useStatic-BFe86sAb.js";import"./browser-BVqvvpC_.js";import"./getActionGroupSlot-Cs9bLGLr.js";import"./FieldDescription-D6vtnelM.js";import"./Text-BKhP8tr9.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./Text-CmGzUVny.js";import"./utils-DCQYs-TM.js";import"./Tooltip-bfmV_sNT.js";import"./OverlayArrow-D02QNQ8I.js";import"./useFocus-jq5Lg4Og.js";import"./ProgressBar-DS8uskay.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dw5Dmo8O.js";import"./context-C-s-FPG6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DvEP7g7r.js";import"./useControlledState-BZaI1cg9.js";import"./useFocusable-D4tCxmX8.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./ContextualHelpTrigger-BH5-NAC2.js";import"./Popover-DwVIQaA1.js";import"./useOverlayController-C6j4pd50.js";import"./OverlayContextProvider-DvOu6vjy.js";import"./Dialog-DkFD9hxJ.js";import"./Button-DvXEMDiE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CEqZlFux.js";import"./RSPContexts-D359D01x.js";import"./Collection-DHw8h3FC.js";import"./CollectionBuilder-BxR2eRiM.js";import"./SelectionIndicator-8EnZgCgK.js";import"./Separator-CBgmYkk4.js";import"./SelectionManager-D4DTSuSz.js";import"./useEvent-F8xm2saN.js";import"./useCollator-Cf6z8j_R.js";import"./FocusScope-CXOryEg0.js";import"./VisuallyHidden-GyOwAGCf.js";import"./OverlayTrigger-CsWZNQmA.js";import"./Heading-DaHrt9QJ.js";import"./Heading-B0CySuUv.js";import"./useFieldComponent-C26zWsIy.js";import"./FieldError-mREW9pPY.js";import"./FieldError-DlCb0goX.js";import"./AlertText-Ck8xqn1I.js";import"./AlertIcon-DudqDlux.js";import"./useControlledHostValueProps--S7JGTy0.js";import"./TextField-CVOy62IB.js";import"./Form-C3oxrYxL.js";import"./Group-DMPrUoj7.js";import"./Input-DWCi9_rf.js";import"./useTextField-L-wLu2nH.js";import"./useFormReset-B-5bGtDV.js";import"./useFormValidation-CUmRTDZB.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./remote-DAiDHcEq.js";import"./react-children-utilities-vhAwfQ60.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
