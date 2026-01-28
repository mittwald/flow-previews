import{r as h,j as r}from"./iframe-DQPKoo92.js";import{P as m}from"./PasswordCreationField-Cwst9ReY.js";import{L as u}from"./Label-Og-F06uZ.js";import{B as g}from"./Button-0l0f_jx8.js";import{m as C}from"./IconWarning-CpLICj99.js";import{C as w}from"./CopyButton-DS9blTPL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DGh7GyZ8.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./clsx-B-dksMZM.js";import"./index-CnP3WCIP.js";import"./Action-DXbaOV3K.js";import"./context-Fi_0LQNU.js";import"./useStatic-AmwUmW1y.js";import"./browser-ChlnFVHS.js";import"./getActionGroupSlot-BNoomJEc.js";import"./FieldDescription-TOm-cQme.js";import"./Text-C51WlGhJ.js";import"./EmulatedBoldText-ZCYLfeIO.js";import"./Text-Y949w0K8.js";import"./utils-XAdJPTNp.js";import"./Tooltip-BtED7DES.js";import"./OverlayArrow-CG2s7j2J.js";import"./useFocus-BE88ppMu.js";import"./ProgressBar-Cy5AjeoP.js";import"./Label-DrxyNCZO.js";import"./Hidden-BalHJt_t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DkBHutKV.js";import"./context-CJqjcP4U.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Cni30Eah.js";import"./useControlledState-CudIhSdL.js";import"./useFocusable-DX4YK8A-.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./ContextualHelpTrigger-Dl9SlfD7.js";import"./Popover-BWekKAiU.js";import"./useOverlayController-C_B26ZeO.js";import"./OverlayContextProvider-CDaDnEoz.js";import"./Dialog-DjFTJjHY.js";import"./Button-C7sB4TeW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ByCBMVLm.js";import"./RSPContexts-C1KLf5C0.js";import"./Collection-YBemO0n0.js";import"./CollectionBuilder-n6Ro7SqS.js";import"./SelectionIndicator-DugKwRvD.js";import"./Separator-CC-j5b8u.js";import"./SelectionManager-0yrNUuw-.js";import"./useEvent-CfqveZ0P.js";import"./useCollator-BoFTkl_Q.js";import"./FocusScope-CJXytNJ4.js";import"./VisuallyHidden-Dk42l2-2.js";import"./OverlayTrigger-BTPrK45t.js";import"./Heading-BY6Bbsl0.js";import"./Heading-CRkNhhGs.js";import"./useFieldComponent-BKiBq2W6.js";import"./FieldError-IxBtEnB-.js";import"./FieldError-C-pwln9P.js";import"./AlertText-C5_JXWa-.js";import"./AlertIcon-v4rlNZlK.js";import"./useControlledHostValueProps-Cp6qVjJt.js";import"./TextField-BdwVHITI.js";import"./Form-C06cTOQY.js";import"./Group-hfhbZ0QM.js";import"./Input-MWzFGwJT.js";import"./useTextField-C7hH2N6q.js";import"./useFormReset-C7RuWveb.js";import"./useFormValidation-B8bsM8-M.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-B8goxKJR.js";import"./remote-BNYVvti7.js";import"./react-children-utilities-Dv85Y7H_.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
