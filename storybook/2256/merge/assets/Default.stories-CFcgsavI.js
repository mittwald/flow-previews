import{r as h,j as r}from"./iframe-W1iyoXhf.js";import{P as m}from"./PasswordCreationField-HljWsHVV.js";import{L as u}from"./Label-h36KWMeP.js";import{B as g}from"./Button-IzhK2U-6.js";import{m as C}from"./IconWarning-Cnnsa5dA.js";import{C as w}from"./CopyButton-C_uhTBGu.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-X2nPVSXv.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./clsx-B-dksMZM.js";import"./index-BUhRJiS3.js";import"./Action-BaKsvCHV.js";import"./context-Cx4Tf49f.js";import"./useStatic-DFE9WV1t.js";import"./browser-D1HYvIQy.js";import"./getActionGroupSlot-nARO-zR5.js";import"./FieldDescription-sYQgLYFM.js";import"./Text-DcDEk3cp.js";import"./EmulatedBoldText-BfE11w5D.js";import"./Text-DMuz8jzh.js";import"./utils-Co92dFN-.js";import"./Tooltip-D7_Eoy2a.js";import"./OverlayArrow-DhCjeFi1.js";import"./useFocus-BF1azJZZ.js";import"./ProgressBar-o5FIdMg8.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C8GMPbyu.js";import"./context-Dx3ASvxi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BeXX8b-c.js";import"./useFocusable-CYBapKrT.js";import"./useFocusRing-D7D1hXRw.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./ContextualHelpTrigger-kJ6VrudW.js";import"./Popover-ZTnfTngx.js";import"./useOverlayController-BLagNJVD.js";import"./OverlayContextProvider-CtixpOlY.js";import"./Dialog-Dwmqa2yo.js";import"./Button-DSUkPhZw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DwtcUURT.js";import"./RSPContexts-CkYyS58h.js";import"./Collection-H-B8rljE.js";import"./CollectionBuilder-BFDcIzLe.js";import"./SelectionIndicator--NYjhiR7.js";import"./Separator-BxaFcvwN.js";import"./SelectionManager-CBsBpJX-.js";import"./useEvent-D9hyQfDj.js";import"./useCollator-CZzcr_Mi.js";import"./FocusScope-mUzTN5zH.js";import"./VisuallyHidden-9GsfRhh1.js";import"./OverlayTrigger-CDdGESRy.js";import"./Heading-CkZ0B9ED.js";import"./Heading-DW_b7ElP.js";import"./useFieldComponent-CeQ6dqWY.js";import"./FieldError-V9E4UopR.js";import"./FieldError-CaERYIVC.js";import"./AlertText-x_xx3UIw.js";import"./AlertIcon-Cyqu-_3z.js";import"./useControlledHostValueProps-CGhWZ5l6.js";import"./TextField-Cp6pNbDA.js";import"./Form-BBVMks-l.js";import"./Group-BXkBt_dH.js";import"./Input-lNMUeypu.js";import"./useTextField-afbLRwDD.js";import"./useFormReset-DYb2_5Lx.js";import"./useFormValidation-aWhqwd0R.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BMAt0-EL.js";import"./remote-CbMcOagV.js";import"./react-children-utilities-BJvc4Xcu.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
