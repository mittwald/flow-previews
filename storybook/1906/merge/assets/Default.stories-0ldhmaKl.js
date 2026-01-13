import{r as h,j as r}from"./iframe-S6a6IBGW.js";import{P as m}from"./PasswordCreationField-BkeN3xma.js";import{L as u}from"./Label-caCQNiXZ.js";import{B as g}from"./Button-B33IEcV3.js";import{m as C}from"./IconWarning-D0GzEl3K.js";import{C as w}from"./CopyButton-CcHe5l9w.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-wFxxwS8T.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./clsx-B-dksMZM.js";import"./index-C8QsAo4A.js";import"./Action-D3nLwb6j.js";import"./context-DRdj7qWz.js";import"./useStatic-DJ0VynuZ.js";import"./browser-C6w_OiT9.js";import"./getActionGroupSlot-13Cq_BqQ.js";import"./FieldDescription-BbDHCmf8.js";import"./Text-CLecf1p6.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./Text-XPHoRcaC.js";import"./utils-B8ercvf4.js";import"./Tooltip-WRjlUrTr.js";import"./OverlayArrow-B-DFCcpR.js";import"./useFocus--oJxMCZo.js";import"./ProgressBar-f-zsGPPU.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-I1naabyM.js";import"./context-CXquv49b.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BHa0sYDq.js";import"./useFocusable-DTyt-kbS.js";import"./useFocusRing-pCPuJRtg.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./ContextualHelpTrigger-YSXDoxzL.js";import"./Popover-CTHthEzP.js";import"./useOverlayController-D5w3iZSN.js";import"./OverlayContextProvider-BTF4iLEG.js";import"./Dialog-C_QuIxo5.js";import"./Button-BnRrl5N8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BUR3MtQf.js";import"./RSPContexts-DL3JmftS.js";import"./Collection-BbaIJWHd.js";import"./CollectionBuilder-Cv1bZrpu.js";import"./SelectionIndicator-DSvv5afS.js";import"./Separator-CvanrP9u.js";import"./SelectionManager-Bk0PvS8a.js";import"./useEvent--nB5Gcy3.js";import"./useCollator-DUo0f6hW.js";import"./FocusScope-BEprXHob.js";import"./VisuallyHidden-BN0xrgav.js";import"./OverlayTrigger-4uRsw7zJ.js";import"./Heading-OEjBXIpA.js";import"./Heading-B4TNl6d1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-C7YS4lAg.js";import"./FieldError-BcgoZm7g.js";import"./FieldError-BRuAmhML.js";import"./AlertText-CIQFF9OC.js";import"./AlertIcon-DgqrgpKu.js";import"./useControlledHostValueProps-CCflrE_G.js";import"./TextField-E7LLUMXU.js";import"./Form-n7Om2L0f.js";import"./Group-_IqKYLf1.js";import"./Input-BCdJg_3v.js";import"./useTextField-BpiGn0fy.js";import"./useFormReset-DK3gdO9Q.js";import"./useFormValidation-DHFSk2Ol.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-ngl346gH.js";import"./remote-CCjzztUh.js";import"./react-children-utilities-DgTbs8DB.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
