import{r as M,j as r}from"./iframe-CCJYfocm.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Ds99VZJT.js";import{L as P}from"./Label-BdPqFAfu.js";import{u as N,F as z,a as U}from"./Form-DM3Z68ea.js";import{s as Y}from"./Action-1vXJU-5u.js";import{B as h}from"./Button-hb7RSFxN.js";import{m as Z}from"./IconWarning-zKFwDxee.js";import{C as G}from"./CopyButton-Du1QfOsN.js";import"./PropsContextProvider-B2Y3k6X1.js";import"./mergeRefs-A29wE7X8.js";import"./index-zIu0Aebb.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BNB-0_Es.js";import"./utils-OhB6egAd.js";import"./Text-COyZC_d0.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D22NaB6f.js";import"./Hidden-D09nfSIf.js";import"./useFocusRing-D9TEPTC8.js";import"./useFocus-ByyEn-Pe.js";import"./TextField-Cq8rv60r.js";import"./Form-OfbaOX07.js";import"./useLabel-DWLXZ_5I.js";import"./Label-yb6vzwnx.js";import"./useTextField-wND_NR3Q.js";import"./useFormReset-CzFRjtap.js";import"./useControlledState-CXb2Atq5.js";import"./useFocusable-C8TAEKG6.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-rHcTk1sA.js";import"./FieldDescription-BHYoePko.js";import"./Text-oKQCGqUf.js";import"./browser-B7o8lEj9.js";import"./EmulatedBoldText-CzNN3IMB.js";import"./Tooltip-DxNJ-9tz.js";import"./OverlayArrow-BKYRJuLy.js";import"./ProgressBar-Bltfi6Tm.js";import"./context-CpznRjhe.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-MhDzL5qd.js";import"./ReactAriaControlledValueFix-C6DE_Ocy.js";import"./ContextualHelpTrigger-DzXP0jYo.js";import"./Popover-DX1tLi1k.js";import"./DialogTriggerView--CAPxN8Q.js";import"./context-BPkPSR0u.js";import"./useStatic-Bygmx728.js";import"./Dialog-1LpWSZns.js";import"./Button-Dp1voZV2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D-nD__UC.js";import"./RSPContexts-DtIV_XWn.js";import"./Collection-BUL5CBgy.js";import"./CollectionBuilder-BSXaKqWH.js";import"./Separator-Cu0Xy5nC.js";import"./SearchField-DFDOPoEe.js";import"./useEvent-Dxdl7lNs.js";import"./SelectionManager-BWi45uf1.js";import"./useCollator-BUSEmk8n.js";import"./FocusScope-D-ZTlcmj.js";import"./VisuallyHidden-DyP1I_X7.js";import"./Heading-DPpg3tUR.js";import"./Heading-DjiA9CZu.js";import"./getActionGroupSlot-AK7rMFD6.js";import"./LoadingSpinner-Cz7ScZS_.js";import"./react-children-utilities-BwYMlwm2.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
