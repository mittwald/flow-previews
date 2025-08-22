import{r as M,j as r}from"./iframe-CbGYfYhl.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DFIaKROM.js";import{L as P}from"./Label-ChSLebPR.js";import{u as N,F as z,a as U}from"./Form-TtiWG0JA.js";import{s as Y}from"./Action-QD7EalEG.js";import{B as h}from"./Button-Gcjkh2he.js";import{m as Z}from"./IconWarning-DbjMP3z5.js";import{C as G}from"./CopyButton-hqOix9ZO.js";import"./PropsContextProvider-jqIHveb4.js";import"./mergeRefs-B7E9CKB8.js";import"./index-DUvIA6jy.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CCN5oAXI.js";import"./utils-Bta_km8V.js";import"./Text-B56mlhY7.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-G140fFme.js";import"./Hidden-CH7YYats.js";import"./useFocusRing-D3ulEQrZ.js";import"./useFocus-CgyMmhEU.js";import"./TextField-DGs8gg6j.js";import"./Form-dHMqMIPi.js";import"./useLabel-D6vayTQl.js";import"./Label-CQ-8Wai_.js";import"./useTextField-ONw8H3cW.js";import"./useFormReset-knQsHZrP.js";import"./useControlledState-Ckf81dN5.js";import"./useFocusable-CdHr2TzL.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DIOhoIE9.js";import"./FieldDescription-D4tY6X_s.js";import"./Text-OS1-aGym.js";import"./browser-CJ8QzV59.js";import"./EmulatedBoldText-CQSaLX8r.js";import"./Tooltip-DzIEw_6q.js";import"./OverlayArrow-CAzhQBDT.js";import"./ProgressBar-C2FOdX6j.js";import"./context-DrN7EfSG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CO6Ocor8.js";import"./ReactAriaControlledValueFix-B7ow68aT.js";import"./ContextualHelpTrigger-BDgeVdPH.js";import"./Popover-AInzHW1-.js";import"./DialogTriggerView-BAlepQJB.js";import"./context-J2lB5nq9.js";import"./useStatic-CDZ8mZeU.js";import"./Dialog-DWI3Gb4X.js";import"./Button-dGVmYdyu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B6TDm-Ku.js";import"./RSPContexts-CWauLjE1.js";import"./Collection-CnCkxRBF.js";import"./CollectionBuilder-zI7nOiFC.js";import"./Separator-BL4Cqy6R.js";import"./SearchField-0rw3SXHS.js";import"./useEvent-BrHW1E5Z.js";import"./SelectionManager-C3iuS2jK.js";import"./useCollator-B95zPweT.js";import"./FocusScope-CXp1mWOp.js";import"./VisuallyHidden-BDzAgjFk.js";import"./Heading-CwkEWkPk.js";import"./Heading-Cd40tbYh.js";import"./getActionGroupSlot-DTlXxCo0.js";import"./LoadingSpinner-BIdUmOnp.js";import"./react-children-utilities-CALHcDe7.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,v;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var R,L,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,le as __namedExportsOrder,pe as default};
