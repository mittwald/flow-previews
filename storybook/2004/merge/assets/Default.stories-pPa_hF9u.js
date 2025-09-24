import{r as M,j as r}from"./iframe-D1JKOwdq.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-C7hXWiXP.js";import{L as P}from"./Label-Cf_c9vA3.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DIybQHuX.js";import{s as Y}from"./Action-CgsrqEHD.js";import{B as h}from"./Button-DG818FIU.js";import{q as Z}from"./IconWarning-DZISCuC-.js";import{C as G}from"./CopyButton-BKinMaie.js";import"./dynamic-ar8rpZDa.js";import"./PropsContextProvider-CKqNcsdJ.js";import"./mergeRefs-CYbnUoq6.js";import"./index-DOZ5qla4.js";import"./clsx-B-dksMZM.js";import"./FieldError-BZfRYFbv.js";import"./utils-BVsEXjGQ.js";import"./Text-BIeeVT6X.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-B-JYoqhF.js";import"./Hidden-Dr2BftiN.js";import"./useFocusRing-8cxgDEwk.js";import"./useFocus-CYEgIwnz.js";import"./TextField-DfMFf88Q.js";import"./Form-CftHRla7.js";import"./useLabel-Uyswehsd.js";import"./Label-CseS0v8E.js";import"./useTextField-xidCibEs.js";import"./useFormReset-CG85pNSA.js";import"./useControlledState-CYjuzTtD.js";import"./useFocusable-wd6aWIaf.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DJpBvO0q.js";import"./FieldDescription-DXguCw-8.js";import"./Text-Cv35yGBC.js";import"./browser-BI97FZcU.js";import"./EmulatedBoldText-d9mRwZf5.js";import"./Tooltip-BThkLkoh.js";import"./ClearPropsContextView-Be28GGXB.js";import"./ProgressBar-4Tm_fzI6.js";import"./context-Bzqo5E_q.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CIU1pqtk.js";import"./ReactAriaControlledValueFix-B3m6RDpm.js";import"./ContextualHelpTrigger-DD7MnAwI.js";import"./Popover-CJsB8pDc.js";import"./DialogTriggerView-BgJsodt7.js";import"./context-Cusklrj0.js";import"./useStatic-D26xSXCN.js";import"./Button-DG6zvYi3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CwJM0Ele.js";import"./RSPContexts-CoUOlwWC.js";import"./FocusScope-B4gQukNN.js";import"./useCollator-sKXsPUo5.js";import"./VisuallyHidden-DUuSn0Sw.js";import"./Collection-Zsa7miPe.js";import"./CollectionBuilder-B5sifEeq.js";import"./Separator-BMEhDY-1.js";import"./SearchField-BZI0oCti.js";import"./useEvent-DQOxTklk.js";import"./SelectionManager-DFpd0p6B.js";import"./Heading-R_2RsziQ.js";import"./Heading-B9dYxPkj.js";import"./useManagedValue-BP8W24iB.js";import"./getActionGroupSlot-DpLzBOSg.js";import"./LoadingSpinner-D-A5UE94.js";import"./react-children-utilities-Bae4AvNk.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
