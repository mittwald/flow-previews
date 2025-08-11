import{r as M,j as r}from"./iframe-CMpsVwOM.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-3Bi_MGoV.js";import{L as h}from"./Label-kjk-IWzA.js";import{u as N,F as z,a as U}from"./Form-D1uf8pOr.js";import{s as Y}from"./Action-C-7Oy_wv.js";import{B as u}from"./Button-B762HPeD.js";import{m as Z}from"./IconWarning-D8u_mAP3.js";import{C as G}from"./CopyButton-DN_0gsUX.js";import"./PropsContextProvider-BMeS3O6n.js";import"./mergeRefs-C92X0W_p.js";import"./index-CZ3QCY_v.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Dnex0fXb.js";import"./utils-pWRi9foc.js";import"./Text-CCkfOTTF.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BmHKM3mz.js";import"./Hidden-Cyo3M4hZ.js";import"./useFocusRing-DqD2BiAa.js";import"./useFocus-C9MMrMar.js";import"./TextField-Cwtkj9As.js";import"./Form-BGZ-9vu8.js";import"./useLabel-BA3FU80w.js";import"./Label-CYx7L7HM.js";import"./useTextField-CVfCDHOY.js";import"./useFormReset-CrSG7MNm.js";import"./useControlledState-BNxfrGT2.js";import"./useFocusable-FYb42PWO.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DenvXdCo.js";import"./FieldDescription-63c09u0s.js";import"./Text-BimBNWGT.js";import"./browser-B-2It7Rx.js";import"./EmulatedBoldText-M-EPRI7w.js";import"./Tooltip-D8IErp1u.js";import"./OverlayArrow-CMVfGmQe.js";import"./ProgressBar-DR_zEB_o.js";import"./context-EPQ013pJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BlPP9i8C.js";import"./ReactAriaControlledValueFix-oklrrIu3.js";import"./ContextualHelpTrigger-DodJB_Ag.js";import"./Popover-ChWuErEI.js";import"./DialogTriggerView-zPfOYurT.js";import"./context-BB_uKWDa.js";import"./useStatic-BFocWmVI.js";import"./Dialog-4INrBZTO.js";import"./Button-CNx4aTn8.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dcm4Z-gf.js";import"./RSPContexts-DHCERfty.js";import"./Collection-C_dbbgqH.js";import"./CollectionBuilder-Cc21ue3R.js";import"./Separator-ySPE90Jb.js";import"./SearchField-yY4hDHGI.js";import"./useEvent-CBtEWer2.js";import"./SelectionManager-Bwjhvkb_.js";import"./useCollator-CBSgX5OE.js";import"./FocusScope-HNBnbjNF.js";import"./VisuallyHidden-Ctc-ZpYI.js";import"./Heading-HMKXl4u6.js";import"./Heading-BtLFOT0L.js";import"./getActionGroupSlot-CEeEGEjJ.js";import"./LoadingSpinner-C0J7J3GJ.js";import"./react-children-utilities-DKTCRAEF.js";import"./onlyText-PKT04ZQx.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,v,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var T,W,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
