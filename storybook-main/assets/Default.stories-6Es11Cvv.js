import{r as h,j as r}from"./iframe-CywxDTj6.js";import{P as m}from"./PasswordCreationField-BvYT4XrG.js";import{L as u}from"./Label-D6CHoy0y.js";import{B as g}from"./Button-Dt6rqZC2.js";import{n as C}from"./IconWarning-BQFONsdl.js";import{C as w}from"./CopyButton-DbjRbv8T.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D64zpBY8.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./clsx-B-dksMZM.js";import"./index-CFicy-UB.js";import"./Action-DyuzWneU.js";import"./context-DM4I0BsB.js";import"./useStatic-B4t8cENg.js";import"./browser-CaezisB_.js";import"./getActionGroupSlot-CAhf_Uni.js";import"./FieldDescription-Ce5UPLEI.js";import"./Text-vlJOJK2L.js";import"./EmulatedBoldText-Vtu08ir6.js";import"./Text-Dc57gZlo.js";import"./utils-JmAwA3ix.js";import"./Tooltip-D8rvDqaK.js";import"./OverlayArrow-kC1F2-h6.js";import"./useFocus-DDJfJTZx.js";import"./ProgressBar-BoAFCcAD.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtuLxX2S.js";import"./context-Wz-N3Tdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CrIAtAXB.js";import"./useFocusable-D7CLIfGa.js";import"./useFocusRing-D1WKjA4v.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./ContextualHelpTrigger-FvPMYmI8.js";import"./Popover-CRD9Qx5x.js";import"./useOverlayController-CQzVIUEY.js";import"./OverlayContextProvider-C85v0gvj.js";import"./Dialog-RfbYVzK-.js";import"./Button-DzvzizsP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CStV9ujD.js";import"./RSPContexts-DB0ICqF0.js";import"./Collection-DZTo--rr.js";import"./CollectionBuilder-CNb94HNq.js";import"./SelectionIndicator-B2WWcQye.js";import"./Separator-DF0yS6SS.js";import"./SelectionManager-Mk_lDA9T.js";import"./useEvent-CDXAxsds.js";import"./useCollator-Dm-KYvmX.js";import"./FocusScope-CPNFfVyd.js";import"./VisuallyHidden-CBo5v6jz.js";import"./OverlayTrigger-DpHz--ek.js";import"./Heading-DXOJNO6C.js";import"./Heading-C30wQAmC.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DA2iK2GC.js";import"./FieldError-zwomljJ3.js";import"./FieldError-fWQdbmrt.js";import"./useControlledHostValueProps-CdUTecqJ.js";import"./TextField-BP70AlI8.js";import"./Form-B03hL8Gq.js";import"./Group-Dmh4PTRU.js";import"./Input-CoVkAmRj.js";import"./useTextField-D7eiRyT5.js";import"./useFormReset-CCwx8s_G.js";import"./useFormValidation-CXUK0Gt0.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Byj--1Pk.js";import"./remote-DxJecAWu.js";import"./react-children-utilities-CT-M5ONO.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
