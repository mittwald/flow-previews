import{r as M,j as r}from"./iframe-BXWHolr7.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-BI2E-GRs.js";import{L as P}from"./Label-CRWIqmlk.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-ZscHQela.js";import{s as Y}from"./Action-CuEh1pD2.js";import{B as h}from"./Button-CnhqfASw.js";import{m as Z}from"./IconWarning-C9wAMmE4.js";import{C as G}from"./CopyButton-Cjrdn0fJ.js";import"./PropsContextProvider-Aeosf-s6.js";import"./mergeRefs-D5kad6xW.js";import"./index-BO_Ze_Is.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-kOzNSTVH.js";import"./utils-B2TamtWx.js";import"./Text-CshnnIVL.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DKRCTPap.js";import"./Hidden-BM-MvoWz.js";import"./useFocusRing-C9RrD32J.js";import"./useFocus-BHj76f0r.js";import"./TextField-vF4BsGOY.js";import"./Form-C40WvtQf.js";import"./useLabel-CPYM8v3M.js";import"./Label-BCj8S481.js";import"./useTextField-CHuCSPiE.js";import"./useFormReset-D3PYmlJ_.js";import"./useControlledState-Dr1QSdOx.js";import"./useFocusable-CA3YRohc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Dg8tiTi9.js";import"./FieldDescription-uhd6Mbtt.js";import"./Text-cublDBL7.js";import"./browser-tTf4FW93.js";import"./EmulatedBoldText-C4nbdyGF.js";import"./Tooltip-CuAGZklf.js";import"./OverlayArrow-ttgUUjRL.js";import"./ProgressBar-CBzNVdsU.js";import"./context-Dja7lVng.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-7zHp9kQ3.js";import"./ReactAriaControlledValueFix-4_aywS1Z.js";import"./ContextualHelpTrigger-COE899K5.js";import"./Popover-DMHeBmQY.js";import"./DialogTriggerView-ULagL9pU.js";import"./context-Cnp30bgj.js";import"./useStatic-C8CrPjkp.js";import"./Dialog-C_udrGIm.js";import"./Button-YX5RGg2w.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C1TcPoWb.js";import"./RSPContexts-804iL0FW.js";import"./Collection-C0Q6vASR.js";import"./CollectionBuilder-d4B1PmIH.js";import"./Separator-1cY_KjOn.js";import"./SearchField-CrZc0iss.js";import"./useEvent-DVY60GN0.js";import"./SelectionManager-C8B9SdRc.js";import"./useCollator-DktWPlR1.js";import"./FocusScope-Bq5J7cyD.js";import"./VisuallyHidden-BHe7S0lR.js";import"./Heading-DCH3YBy1.js";import"./Heading-B5OGAapG.js";import"./useManagedValue-BoQCSISW.js";import"./getActionGroupSlot-CpZVtoBZ.js";import"./LoadingSpinner-CMZ7XUGA.js";import"./react-children-utilities-D4nFlAty.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ce={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,de as __namedExportsOrder,ce as default};
