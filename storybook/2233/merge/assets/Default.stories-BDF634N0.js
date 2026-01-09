import{r as h,j as r}from"./iframe-BeQWUZkN.js";import{P as m}from"./PasswordCreationField-CTlwF_sh.js";import{L as u}from"./Label-B2Ym8roL.js";import{B as g}from"./Button-CGVqLO1a.js";import{m as C}from"./IconWarning-BINGtqrd.js";import{C as w}from"./CopyButton-BnQaG9r9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CY8Jd6pV.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./clsx-B-dksMZM.js";import"./index-C7QqpnOV.js";import"./Action-E4S27TIO.js";import"./context-C8zS221N.js";import"./useStatic-H-gT8Tnv.js";import"./browser-CC8M21FF.js";import"./getActionGroupSlot-Mt7aWTck.js";import"./FieldDescription-DmDXfwSl.js";import"./Text-DBLOUBNs.js";import"./EmulatedBoldText-Ds4ybabF.js";import"./Text-oRZAcHnn.js";import"./utils-DahaGO1Z.js";import"./Tooltip-DmO9pGJl.js";import"./OverlayArrow-CQhuNf01.js";import"./useFocus-B8WX1wz4.js";import"./ProgressBar-DrS-kVcX.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bej11zP_.js";import"./context-BW8umLlU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CVKu2BVA.js";import"./useFocusable-5ZG33T1u.js";import"./useFocusRing-plkuiMUL.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./ContextualHelpTrigger-_zyCU7H2.js";import"./Popover-BNxboum2.js";import"./useOverlayController-Cg89pKF6.js";import"./OverlayContextProvider-DSplWZAb.js";import"./Dialog-BcNKaqXQ.js";import"./Button-CL6J7LkF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DC5PU-Mt.js";import"./RSPContexts-3R6axPUC.js";import"./Collection-BT4mtoIi.js";import"./CollectionBuilder-8XmSCxqz.js";import"./SelectionIndicator-CpkhsEOb.js";import"./Separator-jKx-ftTc.js";import"./SelectionManager-g_157G_P.js";import"./useEvent-D73bdPYV.js";import"./useCollator-BitTSQ9h.js";import"./FocusScope-BFFCHkyv.js";import"./VisuallyHidden-Dai9OIPt.js";import"./OverlayTrigger-CQFXwfOk.js";import"./Heading-Em1n1mkD.js";import"./Heading-DqQ4fdlj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-Df_LAOUO.js";import"./FieldError-BcvtKrk-.js";import"./FieldError-D83BnXEF.js";import"./AlertText-zAJvVLJZ.js";import"./AlertIcon-Bvyhnsbm.js";import"./useControlledHostValueProps-tRPPDpMf.js";import"./TextField-ZmZv6OFU.js";import"./Form-Dldpy16s.js";import"./Group-tR5aTCJO.js";import"./Input-DQvG8v1g.js";import"./useTextField-BfYqTdEi.js";import"./useFormReset-C8CI0grL.js";import"./useFormValidation-enT2NaDW.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BzbdJJnJ.js";import"./remote-BjhB0wla.js";import"./react-children-utilities-BkG6wfo9.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
