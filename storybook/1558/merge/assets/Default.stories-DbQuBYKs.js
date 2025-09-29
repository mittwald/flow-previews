import{r as M,j as r}from"./iframe-BIwOddjN.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-COoeqZS4.js";import{L as P}from"./Label-B4Iiqc5w.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DjUL3FMV.js";import{s as Y}from"./Action-DaT8fcnF.js";import{B as h}from"./Button-DVKpBB_-.js";import{p as Z}from"./IconWarning-DNMJ1XNo.js";import{C as G}from"./CopyButton-CJPQo4II.js";import"./index-Cun1SEai.js";import"./dynamic-copMXHk7.js";import"./PropsContextProvider-DqT3XDtE.js";import"./mergeRefs-wvzFS0ov.js";import"./index-CyjKSzst.js";import"./clsx-B-dksMZM.js";import"./FieldError-BSmtWAN4.js";import"./utils-DPukZ4w7.js";import"./Text-D1MRO4dn.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D1uUUTSd.js";import"./useFocusRing-Dx0gNijd.js";import"./useFocus-Cj2Pu7gn.js";import"./Input-BEzcl50g.js";import"./Hidden-D6potscK.js";import"./TextField-CK3Fd1lq.js";import"./context-Cplzyq73.js";import"./Form-DjKVzcCs.js";import"./useLabel-DBHdatlR.js";import"./Label-CW0KcP1q.js";import"./useTextField-CdGi1PVy.js";import"./useFormReset-FXsWoN_h.js";import"./useControlledState-B4IhsBlg.js";import"./useFocusable-CxKBVkW3.js";import"./useFormValidation-DXfcJvC1.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B63dcrBv.js";import"./FieldDescription-CuTbHSSK.js";import"./Text-3VIHsAGv.js";import"./browser-6nVKIs6I.js";import"./EmulatedBoldText-C5hkPB09.js";import"./Tooltip-BtSbkLwf.js";import"./ClearPropsContextView-CLESuCpt.js";import"./ProgressBar-CzA5dAYd.js";import"./context-CbJ8Tawl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CJPccLDK.js";import"./ReactAriaControlledValueFix-3bxT__-Q.js";import"./ContextualHelpTrigger-T-5A_0t4.js";import"./Popover-BYGuuW82.js";import"./DialogTriggerView-D6nKQ5a7.js";import"./context-CorlgKQy.js";import"./useStatic-CAHKYPS0.js";import"./Button-DDY6r886.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-4QX-FuAL.js";import"./RSPContexts-CSo-c8h2.js";import"./FocusScope-CDSFipnx.js";import"./useCollator-vh40vrkm.js";import"./VisuallyHidden-En5QTDR8.js";import"./Collection-YqThax3x.js";import"./CollectionBuilder-DWtnsQIQ.js";import"./Separator-DroliD3e.js";import"./SelectionManager-CuYmYu-p.js";import"./useEvent-BngoJEfX.js";import"./Heading-Bnq9f_Vp.js";import"./Heading-CXpceP0M.js";import"./useManagedValue-DasR4cU_.js";import"./getActionGroupSlot-CgWgqcfK.js";import"./LoadingSpinner-CG5b-Kig.js";import"./react-children-utilities-PJ-tckMe.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const Po=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,Po as __namedExportsOrder,ho as default};
