import{r as x,j as r}from"./iframe-Dk60Gpin.js";import{b as p,u as f,F as h,t as S}from"./Form-BlvV6-f1.js";import{L as i}from"./Label-DRmbs-HY.js";import{R as b,S as w}from"./ResetButton-B_ncRbLl.js";import{B as t}from"./Button-BaFAPk6P.js";import{S as g,s as F}from"./Section-CoeixnSJ.js";import{A as E}from"./ActionGroup-Dtx1HegN.js";import{aw as C,ax as R,ao as n,ay as o,az as V,g as L}from"./TimeField-4D5Nhq3P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-4gi8GiXC.js";import"./PropsContextProvider-BdZs02Td.js";import"./mergeRefs-MJGqjKNq.js";import"./index-DJhA7Wui.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Bc2xZT0_.js";import"./context-fp4w0YcD.js";import"./browser-BvxtBXb9.js";import"./utils-Ch0ZZJ4D.js";import"./ProgressBar-D9iry1uY.js";import"./Hidden-D3Wnlg7j.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BTcUjjec.js";import"./Text-BbMQM1DG.js";import"./EmulatedBoldText-BXENtjIV.js";import"./LoadingSpinner-BDrvrciy.js";import"./Button-BnOkCogS.js";import"./useFocusRing-BRWpt41V.js";import"./useFocusable-BjdDuCYq.js";import"./context-BthpMtM5.js";import"./RSPContexts-CVMXvjX8.js";import"./Collection-BeF55kv5.js";import"./CollectionBuilder-B_txidaV.js";import"./SelectionIndicator-Dw3nAwCY.js";import"./Separator-CD2VJwjG.js";import"./useStatic-CwfWB48x.js";import"./Accordion--PiuPE_9.js";import"./Alert-eguRclW1.js";import"./AlertIcon-BvG3TXg-.js";import"./AlertBadge-Ci3q7ONa.js";import"./Align-otZVcDBU.js";import"./Popover-DUzfCkJT.js";import"./OverlayTrigger-D41F-SKL.js";import"./TableFooterRow-ZiMRcLMp.js";import"./SkeletonText-BdDEip2O.js";import"./Avatar-uhIZWmRw.js";import"./AvatarStack-Ce0OtoHB.js";import"./Badge-Ci0_YhS-.js";import"./BigNumber-D_1n_f24.js";import"./Breadcrumb-DTmlwgi3.js";import"./Link-Bk7l3Hhl.js";import"./Heading-BClLfS9l.js";import"./Legend-lyiM8tnC.js";import"./FileCardList-z1TOLFrB.js";import"./Image-BFIYVrgb.js";import"./Color-CuKRh3Mj.js";import"./Content-qRe1c-jG.js";import"./ContextualHelpTrigger-3ee7SYMq.js";import"./CounterBadge-DvjVQF88.js";import"./DonutChart-DxQSNKcp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B1AdWPYh.js";import"./Header-C1g8Z3mN.js";import"./Initials-BwxHVFlG.js";import"./InlineCode-DeaiiFf1.js";import"./PopoverTrigger-aEhJpWUL.js";import"./Separator-DpLqTccG.js";import"./Message-DgNLVg8a.js";import"./MessageSeparator-CqkN_4jq.js";import"./NavigationGroup-BNi9xF1W.js";import"./Notification-BYPtdgjX.js";import"./NotificationProvider-DbUFBJzc.js";import"./ProgressBar-BAxPsWQD.js";import"./Rating-CiM8MErc.js";import"./Skeleton-DAWVrv5Y.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
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
        validate: usePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <PasswordCreationField defaultValue={""} isInvalid>
          <Label>Password</Label>
          <Button>asd</Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </PasswordCreationField>
        <PasswordCreationField defaultValue={""}>
          <Label>Password</Label>
          <Button>asd</Button>
        </PasswordCreationField>
      </Form>;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const re=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,re as __namedExportsOrder,$r as default};
