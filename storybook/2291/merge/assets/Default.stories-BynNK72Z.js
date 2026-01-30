import{r as h,j as r}from"./iframe-DSXKf9Qs.js";import{P as m}from"./PasswordCreationField-B7NWbXjG.js";import{L as u}from"./Label-BZGX3mYQ.js";import{B as g}from"./Button-D9RPwGO-.js";import{m as C}from"./IconWarning-CsaNdeaY.js";import{C as w}from"./CopyButton-euaw0QjX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-waHTXRlt.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./clsx-B-dksMZM.js";import"./index-xIXPquhv.js";import"./Action-D8TvePO3.js";import"./context-CiYX6UJF.js";import"./useStatic-CLatwN1t.js";import"./browser-zi1f_NHh.js";import"./getActionGroupSlot-CBC8VLuN.js";import"./FieldDescription-D3qqafyO.js";import"./Text-C7KW9wgf.js";import"./EmulatedBoldText-CWbGlL7P.js";import"./Text-BGc7dsTw.js";import"./utils-BkNrSrSW.js";import"./Tooltip-D-fh5voC.js";import"./OverlayArrow-wV4le4-P.js";import"./useFocus-BkCMpCSs.js";import"./ProgressBar-zeu61Rhn.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2CXizlL.js";import"./context-DU2DYbHB.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-9tutEJo4.js";import"./useControlledState-C8VBbj0I.js";import"./useFocusable-BiabYp81.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./ContextualHelpTrigger-DuP20wth.js";import"./Popover-jJwFFzdg.js";import"./useOverlayController-C4MSz-T2.js";import"./OverlayContextProvider-BrBwXgQ3.js";import"./Dialog-Dgijbiav.js";import"./Button-DD62R7IC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D3-3tpV2.js";import"./RSPContexts-C47t6iqA.js";import"./Collection-Bm0CT5e0.js";import"./CollectionBuilder-fJJ3qX8z.js";import"./SelectionIndicator-BtJjQV2B.js";import"./Separator-BRbgnZrd.js";import"./SelectionManager-DlGSpMCY.js";import"./useEvent-BOIZmRJ7.js";import"./useCollator-dJhHztcY.js";import"./FocusScope-C1tZWIaN.js";import"./VisuallyHidden-p8Ypb2KO.js";import"./OverlayTrigger-DEiWUU1J.js";import"./Heading-CyZwRqCp.js";import"./Heading-ChWDXA_z.js";import"./useFieldComponent-CCab4n06.js";import"./FieldError-DyLpPvQc.js";import"./FieldError-D2u-4343.js";import"./AlertText-ppaXibkF.js";import"./AlertIcon-Bx5_fWVD.js";import"./useControlledHostValueProps-DA4HPgA7.js";import"./TextField-DBMQ6SdS.js";import"./Form-CmWGeahq.js";import"./Group-cFUMqjZ6.js";import"./Input-C3UpKYh9.js";import"./useTextField-yOaw7krz.js";import"./useFormReset-CY4Zdzy9.js";import"./useFormValidation-CZFMPKAm.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CM9ywy6H.js";import"./remote-Gy-Ku51P.js";import"./react-children-utilities-CfcEWQ4K.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
