import{r as h,j as r}from"./iframe-B_VLmVOf.js";import{P as m}from"./PasswordCreationField-BNU7siZD.js";import{L as u}from"./Label-f9h1IAZy.js";import{B as g}from"./Button-Bx9uZJMk.js";import{m as C}from"./IconWarning-COj126FB.js";import{C as w}from"./CopyButton-MavJbmHV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BPLgH_zA.js";import"./flowComponent-Bc5-OX5Z.js";import"./index-GX3ioGoD.js";import"./clsx-B-dksMZM.js";import"./index-Cpfd6Pim.js";import"./Action-Ct3jXlr4.js";import"./context-DKzx1USb.js";import"./useStatic-Ch5ZGK2l.js";import"./browser-BI-ei-gA.js";import"./getActionGroupSlot-DWxJJpa_.js";import"./FieldDescription-BbTUQEDp.js";import"./Text-DLyTxpXl.js";import"./EmulatedBoldText-C4lFh4eF.js";import"./Text-Cz72Ll4P.js";import"./utils-C3gFrn3p.js";import"./Tooltip-C7XlhTjQ.js";import"./OverlayArrow-BqV4egk9.js";import"./useFocus-BThPJxs2.js";import"./ProgressBar-B-kO7AM1.js";import"./Label-BcEUcVG2.js";import"./Hidden-BDeD6EhR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-3m37nTep.js";import"./context-x63-ahNn.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cy2UyDQ-.js";import"./useFocusable-D136elhd.js";import"./useFocusRing-CqgXonXS.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./ContextualHelpTrigger-BEEy5LHt.js";import"./Popover-4LrwwwQo.js";import"./useOverlayController-C5Zlkgph.js";import"./OverlayContextProvider-BI7L_fxB.js";import"./Dialog-B23HRyeo.js";import"./Button-sEz_Ftmo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-dvDnySA_.js";import"./RSPContexts-CewByvV8.js";import"./Collection-gtDJcyu2.js";import"./CollectionBuilder-DNk5Dmq7.js";import"./SelectionIndicator-BccBPPpV.js";import"./Separator-2P5ZQBAJ.js";import"./SelectionManager-DSvZPYB7.js";import"./useEvent-CYdGT-0S.js";import"./useCollator-C3rClAMq.js";import"./FocusScope-PhJ8RGzw.js";import"./VisuallyHidden-neYV3Owd.js";import"./OverlayTrigger-r-EuZvmq.js";import"./Heading-CnR3VTEF.js";import"./Heading-CCNcjRWR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CG-gR-7X.js";import"./FieldError-Daf8utl3.js";import"./FieldError-DsHbeww2.js";import"./AlertText-DdDDd0bO.js";import"./AlertIcon-CQ3Ik0rE.js";import"./useControlledHostValueProps-DAUFWDQs.js";import"./TextField-DZdOAXTp.js";import"./Form-Bzu1lHbY.js";import"./Group-B7avKtg4.js";import"./Input-CDIp8Otf.js";import"./useTextField-B1qLDQLP.js";import"./useFormReset-DzSH81mS.js";import"./useFormValidation-BmcsTB_W.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-8NlAwzA_.js";import"./remote-D8h-jp0X.js";import"./react-children-utilities-dDYVEcTH.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
