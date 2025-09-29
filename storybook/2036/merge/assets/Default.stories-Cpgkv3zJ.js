import{r as q,j as r}from"./iframe-skRbRPoL.js";import{P as m}from"./PasswordCreationField-DOC5TmyG.js";import{L as u}from"./Label-Cq3I2A96.js";import{B as y}from"./Button-Dz0DuBiT.js";import{p as E}from"./IconWarning-DXpZ8EkD.js";import{C as v}from"./CopyButton-BMLgox6X.js";import"./index-Cun1SEai.js";import"./dynamic-CBZdW0rY.js";import"./PropsContextProvider-D-E9sUQW.js";import"./mergeRefs-BKTGVx17.js";import"./index-CXI9rWZp.js";import"./clsx-B-dksMZM.js";import"./FieldError-CQn8D9rY.js";import"./utils-BGdTTFGe.js";import"./Text-CUtREENU.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BpjaHcFI.js";import"./useFocusRing-DlSXTuap.js";import"./useFocus-CV5tS3zW.js";import"./Input-B5CQfP72.js";import"./Hidden-CDt-bii7.js";import"./TextField-PYB9-DEX.js";import"./context-Bs3ecAZ9.js";import"./Form-B2_iaNmT.js";import"./Label-BZeHbbby.js";import"./useTextField-COBl652h.js";import"./useFormReset-i0yRktMd.js";import"./useControlledState-D1OKWRDf.js";import"./useFocusable-CCkYWWjg.js";import"./useFormValidation-C1IjZLpu.js";import"./FormField.module-CqWyJNQI.js";import"./Action-BwiD4nix.js";import"./context-BgdpZ9Nh.js";import"./useStatic-DAiG3iJH.js";import"./browser-5dwj1raN.js";import"./getActionGroupSlot-DYUIykqS.js";import"./FieldError-Bawolgzq.js";import"./FieldDescription-D6SY3-DN.js";import"./Text-CrBUObvU.js";import"./EmulatedBoldText-bw_ADscr.js";import"./Tooltip-Dj9B3O7t.js";import"./ClearPropsContextView-mAWKRp53.js";import"./ProgressBar-OmNCHxSP.js";import"./context-BDj_8DgP.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CwRDR58d.js";import"./ReactAriaControlledValueFix-C0F2IYAO.js";import"./ContextualHelpTrigger-CHzzPArH.js";import"./Popover-DZXUsAhj.js";import"./DialogTriggerView-CvcPrbY8.js";import"./Button-BwtVAxMD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BEGjP4QC.js";import"./RSPContexts-x0Tynp33.js";import"./FocusScope-CC4fXxOZ.js";import"./useCollator-KwZeuNwe.js";import"./VisuallyHidden-BpSio_rc.js";import"./Collection-CRLgXtsT.js";import"./CollectionBuilder-wU1sry9x.js";import"./Separator-CtW8b_yz.js";import"./SelectionManager-B23tCYpi.js";import"./useEvent-C3cKfFZ7.js";import"./Heading-Df7NblNI.js";import"./Heading-CrizDQZ8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-B2qLoCp4.js";import"./LoadingSpinner-DNyrAbcW.js";import"./react-children-utilities-EZnmKX7q.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=q.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(y,{children:r.jsx(E,{})})]})},p={render:o=>{const[n,d]=q.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(v,{text:n})]})}};var h,g,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var w,P,x;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(P=e.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var j,B,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var b,f,D;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(f=a.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var R,_,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(F=(_=i.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var L,O,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const Xr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,i as WithCustomButtons,a as WithPlaceholder,Xr as __namedExportsOrder,Qr as default};
