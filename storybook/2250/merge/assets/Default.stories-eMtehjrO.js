import{r as h,j as r}from"./iframe-CF9WEugj.js";import{P as m}from"./PasswordCreationField-BexR-0fY.js";import{L as u}from"./Label-ZZPbbDTF.js";import{B as g}from"./Button-Dt7_Feft.js";import{m as C}from"./IconWarning-DXWyAVP8.js";import{C as w}from"./CopyButton-I3hyunJN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DQFpeFdM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./clsx-B-dksMZM.js";import"./index-DHfgQlLW.js";import"./Action-DBGOtx5u.js";import"./context-Dm_RzWW0.js";import"./useStatic-De5kLziu.js";import"./browser-CV2qUG2E.js";import"./getActionGroupSlot-Cyy_QqE0.js";import"./FieldDescription-BgZC1fDx.js";import"./Text-Czdsn8RZ.js";import"./EmulatedBoldText--WvdXsxT.js";import"./Text-wlSF0gym.js";import"./utils-B4BZttt0.js";import"./Tooltip-B8sC8QTX.js";import"./OverlayArrow-CtiJ0l0O.js";import"./useFocus-DZR1guyz.js";import"./ProgressBar-BnLxRH_4.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DF6AwuO5.js";import"./context-Bi2P07EN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C05rL349.js";import"./useFocusable-CSB6sBEJ.js";import"./useFocusRing-Ddjb8e7x.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./ContextualHelpTrigger-BmTwMB1U.js";import"./Popover-Cnq1gXmI.js";import"./useOverlayController-CbGkJu3W.js";import"./OverlayContextProvider-BjE0srji.js";import"./Dialog-Dbq5Vprd.js";import"./Button--TTYmuFt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DuLNiG6M.js";import"./RSPContexts-DsXbJK4N.js";import"./Collection-B5WHZIaw.js";import"./CollectionBuilder-DOv_JUaO.js";import"./SelectionIndicator-CwdThPwI.js";import"./Separator-DX3N9c3E.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./VisuallyHidden-C66z9jQL.js";import"./OverlayTrigger-ZNA0xvDx.js";import"./Heading-CDe2moQI.js";import"./Heading-DsznpHXx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-B3P2g6wY.js";import"./FieldError-D4UoR9vC.js";import"./FieldError-BfE9I5LY.js";import"./AlertText-BTQfuEQp.js";import"./AlertIcon-Ck6cmA9H.js";import"./useControlledHostValueProps-Cois-wEY.js";import"./TextField-zFAapi7_.js";import"./Form-Dv2vFItu.js";import"./Group-B_lWGLp0.js";import"./Input-BGfnvYjW.js";import"./useTextField-Cmxyrl-A.js";import"./useFormReset-w9h9-zRZ.js";import"./useFormValidation-BLUWg_De.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CdxOiWQd.js";import"./remote-DKS26xip.js";import"./react-children-utilities-CgmJr-E3.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
