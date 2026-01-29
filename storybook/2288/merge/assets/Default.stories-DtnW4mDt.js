import{r as h,j as r}from"./iframe-BUwXHbLV.js";import{P as m}from"./PasswordCreationField-CKTCxGeO.js";import{L as u}from"./Label-VcTz9-oy.js";import{B as g}from"./Button-C47X2BbH.js";import{m as C}from"./IconWarning-DpZLdH-i.js";import{C as w}from"./CopyButton-DgE3DdHa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-jPtu3qAR.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./clsx-B-dksMZM.js";import"./index-B1fishDV.js";import"./Action-Wt0sSzk-.js";import"./context-BtwGTzrQ.js";import"./useStatic-BtWsPYN-.js";import"./browser-DgSxuaKY.js";import"./getActionGroupSlot-BbKcnB6j.js";import"./FieldDescription-CJjcfRgA.js";import"./Text-DQHJUI0D.js";import"./EmulatedBoldText-gevFAAZ0.js";import"./Text-foJVwDWR.js";import"./utils-JDwP1GoF.js";import"./Tooltip-nohw18Qw.js";import"./OverlayArrow-CQQ2-IZh.js";import"./useFocus-B6YbSr7t.js";import"./ProgressBar-BJDPOd_q.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcLR3Pis.js";import"./context-DM2fd8XH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DaHiZmYv.js";import"./useControlledState-DYrRTv7P.js";import"./useFocusable-Dbq66Fw_.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./ContextualHelpTrigger-DmImrJkZ.js";import"./Popover-DKz-OvIj.js";import"./useOverlayController-Dogh-DtE.js";import"./OverlayContextProvider-CQG9zk-L.js";import"./Dialog-2n0yrNbm.js";import"./Button-BNkVsOQ0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BcgTA6VC.js";import"./RSPContexts-CfLLQl4G.js";import"./Collection-X5iiX-bG.js";import"./CollectionBuilder-BS4P0rnp.js";import"./SelectionIndicator-CP3BVA3N.js";import"./Separator-BSF4rUHh.js";import"./SelectionManager-DzUqgA1m.js";import"./useEvent-BDYLqd-z.js";import"./useCollator-DJB12Mbt.js";import"./FocusScope-l2gJymgt.js";import"./VisuallyHidden-Cs-P9S0b.js";import"./OverlayTrigger-FaFIiRYX.js";import"./Heading-DVvJZI_m.js";import"./Heading-Bx_NYZMu.js";import"./useFieldComponent-NdCAuKiZ.js";import"./FieldError-BFYCcyQ4.js";import"./FieldError-DDJD7LnR.js";import"./AlertText-BJWw_2bk.js";import"./AlertIcon-Dx8NA4Z8.js";import"./useControlledHostValueProps-BrTeFcEP.js";import"./TextField-HNnoCTf3.js";import"./Form-D0DN8V4Z.js";import"./Group-BwNIZrev.js";import"./Input-NxVda43d.js";import"./useTextField-BaJoqTBw.js";import"./useFormReset-juEzhCU8.js";import"./useFormValidation-GMJFkgaI.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-KdI7mP_U.js";import"./remote-DgECwzV4.js";import"./react-children-utilities-Cb59dqqA.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
