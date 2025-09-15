import{r as M,j as r}from"./iframe-BwL5TE8j.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BO_Ay1fK.js";import{L as P}from"./Label-DWj4cilU.js";import{u as N,F as z,a as U}from"./Form-BT-3LKRS.js";import{s as Y}from"./Action-Dz3okKrM.js";import{B as h}from"./Button-aac4MlcR.js";import{m as Z}from"./IconWarning-CFzxGyJP.js";import{C as G}from"./CopyButton-Bq-_YdYc.js";import"./PropsContextProvider-CbKMeUzs.js";import"./mergeRefs-BHw4ks4u.js";import"./index-CZakacYE.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-sKqByAl8.js";import"./utils-D5K6eLjb.js";import"./Text-lZrUqOdv.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DtaLpYpv.js";import"./Hidden-Bk94MQHU.js";import"./useFocusRing-Dnm1Bceh.js";import"./useFocus-B2onYDnw.js";import"./TextField-CoIF75G6.js";import"./Form-GeiXMdXB.js";import"./useLabel-0Q5rWqkC.js";import"./Label-CyvFU2WD.js";import"./useTextField-B_NtZtsZ.js";import"./useFormReset-BObq63rv.js";import"./useControlledState-B8vyFbA3.js";import"./useFocusable-DDKZ0z65.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CJJ4jg0R.js";import"./FieldDescription-BtKIxAwS.js";import"./Text-DGokGAz6.js";import"./browser-BFoEGF9u.js";import"./EmulatedBoldText-C4JMZ2uF.js";import"./Tooltip-aP5uXKxi.js";import"./OverlayArrow-ClAfltY8.js";import"./ProgressBar-BqBMnQMD.js";import"./context-CLDbs9sm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-B8lu9hLL.js";import"./ReactAriaControlledValueFix-CQ1NxDjh.js";import"./ContextualHelpTrigger-DrpOYYh_.js";import"./Popover-yYGh9Pu-.js";import"./DialogTriggerView-Cn2CtqME.js";import"./context-CPjnFp9f.js";import"./useStatic-lPJ6-trN.js";import"./Dialog-CAhtHN7d.js";import"./Button-BJbpMApz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-H2LW6Ly5.js";import"./RSPContexts-twmoior-.js";import"./Collection-D-rOi4Fm.js";import"./CollectionBuilder-BSKAEL2-.js";import"./Separator-BewLs59G.js";import"./SearchField-D9OSv9aH.js";import"./useEvent-CsEmoHY2.js";import"./SelectionManager-DjWaGKUE.js";import"./useCollator-BVjT8-HM.js";import"./FocusScope-BNA3YsCO.js";import"./VisuallyHidden-kWjY9XjT.js";import"./Heading-CfBpJMd-.js";import"./Heading-KvETIO-A.js";import"./getActionGroupSlot-D5WSPsgm.js";import"./LoadingSpinner-xuWixoMH.js";import"./react-children-utilities-CLpmS857.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
