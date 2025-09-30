import{r as q,j as r}from"./iframe-Co5olYEg.js";import{P as m}from"./PasswordCreationField-DMBH-lxj.js";import{L as u}from"./Label-BiorYBBr.js";import{B as y}from"./Button-W4WIo1el.js";import{p as E}from"./IconWarning-Deg5RPPa.js";import{C as v}from"./CopyButton-DOMsO9lu.js";import"./index-Cun1SEai.js";import"./dynamic-DrcT1vJi.js";import"./PropsContextProvider-B3fcy-aZ.js";import"./mergeRefs-DCCfFRi5.js";import"./index-dJ4wby8j.js";import"./clsx-B-dksMZM.js";import"./FieldError-Clh4ku1F.js";import"./utils-CfsHCmXQ.js";import"./Text-DL7aZegp.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BEO1bpjW.js";import"./useFocusRing-CNR6shO8.js";import"./useFocus-D_PcVBPO.js";import"./Input-B4YaMKko.js";import"./Hidden-DTncj6eg.js";import"./TextField-CWDJYZYb.js";import"./context-C8LB4vR8.js";import"./Form-XAAYfRmY.js";import"./Label-z037IMCX.js";import"./useTextField-kPi4VDlP.js";import"./useFormReset-CgjW6y2V.js";import"./useControlledState-BLXlsrOK.js";import"./useFocusable-CeUOSLWr.js";import"./useFormValidation-CpjqECXn.js";import"./FormField.module-CqWyJNQI.js";import"./Action-Cid4LteC.js";import"./context-ppKN523Y.js";import"./useStatic-BjVSqcP9.js";import"./browser-Lvchr8XH.js";import"./getActionGroupSlot-BPrq4YXq.js";import"./FieldError-ozznJ0Nd.js";import"./FieldDescription-BesRHQ6n.js";import"./Text-D64yDBkh.js";import"./EmulatedBoldText-m8x9dOVA.js";import"./Tooltip-CiL83krk.js";import"./ClearPropsContextView-ZglcEVcs.js";import"./ProgressBar-CLW14R0J.js";import"./context-VmB2ki6S.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CMxRm_Et.js";import"./ReactAriaControlledValueFix-DZySu1uE.js";import"./ContextualHelpTrigger-BlPJ-xDo.js";import"./Popover-PLO4F2vM.js";import"./DialogTriggerView-CesmwlI4.js";import"./Button-B1uEfXYj.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BWYiyAlu.js";import"./RSPContexts-DTaEDLKz.js";import"./FocusScope-Dnc6FNOh.js";import"./useCollator-BMKqU-cc.js";import"./VisuallyHidden-CTHGVqVW.js";import"./Collection-Zbxmz5mL.js";import"./CollectionBuilder-BnPgo0UY.js";import"./Separator-BmXooASW.js";import"./SelectionManager-DPLcFzYl.js";import"./useEvent-DsDRYPQb.js";import"./Heading-DRAIgzpf.js";import"./Heading-teNtWRwy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-CcsszAmd.js";import"./LoadingSpinner-CRLYV60Z.js";import"./react-children-utilities-Ct60DWOK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=q.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(y,{children:r.jsx(E,{})})]})},p={render:o=>{const[n,d]=q.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(v,{text:n})]})}};var h,g,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var w,P,x;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
