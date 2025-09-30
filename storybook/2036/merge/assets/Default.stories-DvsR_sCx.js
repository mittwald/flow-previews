import{r as q,j as r}from"./iframe-lUo2nGnz.js";import{P as m}from"./PasswordCreationField-gFYtZqAt.js";import{L as u}from"./Label-JtAW2uUp.js";import{B as y}from"./Button-BJSwvuxb.js";import{p as E}from"./IconWarning-BtoswtWr.js";import{C as v}from"./CopyButton-ZGvG7trq.js";import"./index-Cun1SEai.js";import"./dynamic-C5kU0I4Y.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./clsx-B-dksMZM.js";import"./FieldError-pxjDXQ2F.js";import"./utils-D2KvaKmW.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cor_1PTD.js";import"./useFocusRing-frjSVRec.js";import"./useFocus-C7dEKa6p.js";import"./Input-Dtsuwq9P.js";import"./Hidden-BOpFHvF6.js";import"./TextField-CsqP2Q0r.js";import"./context-BgyeT2oB.js";import"./Form-CNo_OXXk.js";import"./Label-CYuE9nkF.js";import"./useTextField-gX6rH2pE.js";import"./useFormReset-D9xEl0IY.js";import"./useControlledState-DwS5X_XZ.js";import"./useFocusable-2sr9c9hg.js";import"./useFormValidation-DhAPE9Wk.js";import"./FormField.module-CqWyJNQI.js";import"./Action-CDVhK15_.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./browser-BBsn6OTc.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./FieldError-DpFF5VSh.js";import"./FieldDescription-Dnyf46T_.js";import"./Text-BGPM5sar.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./Tooltip-BiTx2-UR.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./ProgressBar-3LATX2wa.js";import"./context-FIeePqeN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./ReactAriaControlledValueFix-CoyWxoVa.js";import"./ContextualHelpTrigger-YCFhHj29.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./Button-D-InGAKb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Iu709INZ.js";import"./RSPContexts-CxDqvi-e.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Heading-mkjIQ5vz.js";import"./Heading-C6yyDy0w.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-CKTufiVD.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./react-children-utilities-CPVTkiFW.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=q.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(y,{children:r.jsx(E,{})})]})},p={render:o=>{const[n,d]=q.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(v,{text:n})]})}};var h,g,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var w,P,x;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
