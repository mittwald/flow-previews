import{r as x,j as r}from"./iframe-BaRURXeF.js";import{b as p,u as f,F as h,t as S}from"./Form-CWGjihS8.js";import{L as i}from"./Label-CpPOvDoZ.js";import{R as b,S as w}from"./ResetButton-uHNtfVEW.js";import{B as t}from"./Button-BjAgJLRT.js";import{S as g,s as F}from"./Section-CfuTaxA1.js";import{A as E}from"./ActionGroup-BqTo77Ty.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-DEmi22Cp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-LiyYElAE.js";import"./PropsContextProvider-CKQsAkKj.js";import"./mergeRefs-CGRzoa_B.js";import"./index-BhlYqO80.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-yUHQIKaT.js";import"./context-CYqmZhth.js";import"./browser-CM47kAFn.js";import"./utils-DLb-qyNT.js";import"./ProgressBar-CbCQbUzb.js";import"./Hidden-4QxVQfrM.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-G7PHo1OD.js";import"./remote-EuXJkqzN.js";import"./Text-BMdRX-ix.js";import"./EmulatedBoldText-DsXTzWmB.js";import"./LoadingSpinner-BDiYNwtM.js";import"./Button-DbzxAUZp.js";import"./useFocusRing-Yd8LsoRn.js";import"./useFocusable-Dn7zfyGG.js";import"./context-CODOobiJ.js";import"./RSPContexts-DmKb4WxY.js";import"./Collection-43nLtjEw.js";import"./CollectionBuilder-Dy7CTaNG.js";import"./SelectionIndicator-BZ3vqlEj.js";import"./Separator-cqbaw05v.js";import"./useStatic-CNK9zRwr.js";import"./Accordion-DkBEZ7j6.js";import"./Alert-RHiIiWHO.js";import"./AlertIcon-C9siGvOC.js";import"./AlertBadge-CBeycHMc.js";import"./Align-DsDp8vGU.js";import"./Popover-DoWZP4BQ.js";import"./OverlayTrigger-DFb3iraJ.js";import"./TableFooterRow-BxDD7_XF.js";import"./SkeletonText-Bt_cfZBE.js";import"./Avatar-1SCvSi8v.js";import"./AvatarStack-DuV7PUnh.js";import"./Badge-DRN_LKUg.js";import"./BigNumber-Ci6wTEcF.js";import"./Breadcrumb-Bd90eB5U.js";import"./Link-CWq94S9a.js";import"./Heading-BwlLLsXH.js";import"./Legend-D_JENtdo.js";import"./FileCardList-3twRSReA.js";import"./Image-B_c5xt_D.js";import"./Color-DkHd8LXz.js";import"./Content-XdBLbNrv.js";import"./ContextualHelpTrigger-HbivXqDu.js";import"./CounterBadge-w2O-pKbc.js";import"./DonutChart-ijRk1-wk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dbt83k4-.js";import"./Header-BQdYbaW-.js";import"./Initials-CE2vMNu3.js";import"./InlineCode-CvuJDjkP.js";import"./PopoverTrigger-Brf0WlCq.js";import"./Separator-BCTCUtVH.js";import"./Message-xiisQYm4.js";import"./MessageSeparator-DUGderQ8.js";import"./NavigationGroup-Q3YJa56w.js";import"./Notification-BRKgriQg.js";import"./NotificationProvider-CiuSUFHe.js";import"./ProgressBar-xPSdXL8f.js";import"./Rating-BSWRSES9.js";import"./Skeleton-Cmq3II1T.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},re={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const ee=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,ee as __namedExportsOrder,re as default};
