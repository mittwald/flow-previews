import{r as M,j as r}from"./iframe-h8pIb5Kv.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-D8rFhDlv.js";import{L as P}from"./Label-B99siZxZ.js";import{u as N,F as z,a as U}from"./Form-B31odCWn.js";import{s as Y}from"./Action-gSATwLl0.js";import{B as h}from"./Button-BCd5wwjT.js";import{m as Z}from"./IconWarning-sarICh-8.js";import{C as G}from"./CopyButton-2W2wVagN.js";import"./PropsContextProvider-Bz7r3WKV.js";import"./mergeRefs-lWAZUqj4.js";import"./index-BfqXMi3X.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DvcRcsU3.js";import"./utils-Cexs4pbb.js";import"./Text-DqGJg9Bh.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DyQYlV1N.js";import"./Hidden-Dc9Kv2au.js";import"./useFocusRing-7BAVz6YI.js";import"./useFocus-B-etxL-K.js";import"./TextField-BlHsJIwz.js";import"./Form-Cc9esAZh.js";import"./useLabel-DzpD0Vg0.js";import"./Label-BakLPZbA.js";import"./useTextField-661dC4d6.js";import"./useFormReset-BL-bWUrE.js";import"./useControlledState-BXC3uZfW.js";import"./useFocusable-CAY1QTdY.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Df2paDgt.js";import"./FieldDescription-DHjSwSuh.js";import"./Text-BnbJhuWd.js";import"./browser-f0s2BEP-.js";import"./EmulatedBoldText-D5nLjsiS.js";import"./Tooltip-CBB_pURX.js";import"./OverlayArrow-DnTwsWqb.js";import"./ProgressBar-BoBEJuQ0.js";import"./context-pcAEe7OC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-157cI7o6.js";import"./ReactAriaControlledValueFix-C5M_eLWV.js";import"./ContextualHelpTrigger-CWPDs4mF.js";import"./Popover-D6TQHQrt.js";import"./DialogTriggerView-CVy2Q8IW.js";import"./context-BoMfRFQo.js";import"./useStatic-DDG80hCS.js";import"./Dialog-C9-zvFsT.js";import"./Button-CV7XsWAw.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BeaeLWhg.js";import"./RSPContexts-Cd0V4yxa.js";import"./Collection-jwpUx6pV.js";import"./CollectionBuilder-CLrwyJlT.js";import"./Separator-CedZax0a.js";import"./SearchField-Pbcm1Prj.js";import"./useEvent-KXd4In2f.js";import"./SelectionManager-ClbqTV3I.js";import"./useCollator-CMfRCWJM.js";import"./FocusScope-CkC1yDzC.js";import"./VisuallyHidden-CByVy45C.js";import"./Heading-Ctyu0gzH.js";import"./Heading-YCD57lb1.js";import"./getActionGroupSlot-e-XHpWMr.js";import"./LoadingSpinner-D0_GuOvu.js";import"./react-children-utilities-CJ8JQ-RG.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
