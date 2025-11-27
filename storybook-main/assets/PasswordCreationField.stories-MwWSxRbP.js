import{r as x,j as r}from"./iframe-CAXopRTx.js";import{b as p,u as f,F as h,t as S}from"./Form-MlTWLio9.js";import{L as i}from"./Label-Cxhs4ZYP.js";import{R as b,S as w}from"./ResetButton-DG3gYnEo.js";import{B as t}from"./Button-Ctv-dB52.js";import{S as g,s as F}from"./Section-DhxlZfa0.js";import{A as E}from"./ActionGroup-DKCSrD6Z.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-AvIAec-n.js";import"./index-nuYtCEEu.js";import"./dynamic-D21vqi9G.js";import"./PropsContextProvider-BV-EFtmJ.js";import"./mergeRefs-C_4KEy1o.js";import"./index-9z8TnNhf.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-0XeO7SJn.js";import"./context-NOf08-wC.js";import"./browser-Byp0bOe_.js";import"./utils-Dzmr5ZRW.js";import"./ProgressBar-Dw7oROZh.js";import"./Hidden-DOod4g1Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CZAvow1a.js";import"./Text-BF5hWH0r.js";import"./EmulatedBoldText-DePsUjt1.js";import"./LoadingSpinner-CoC4LtwE.js";import"./Button-Chz2mIUC.js";import"./useFocusRing-DTLGJlTA.js";import"./useFocusable-CGAuhRwL.js";import"./context-B6djjyHK.js";import"./RSPContexts-BuWbS9Uz.js";import"./Collection-Bc328CGA.js";import"./CollectionBuilder-TpkYGVLd.js";import"./SelectionIndicator-dypojMNo.js";import"./Separator-BMVIHcHI.js";import"./useStatic-B1gRKxid.js";import"./Accordion-BN6dZ4oC.js";import"./Alert-BmpR03pc.js";import"./AlertIcon-CPsr1mMB.js";import"./AlertBadge-DFIj-iNs.js";import"./Align-B2qDxo9l.js";import"./Popover-Tc25RGFF.js";import"./OverlayTrigger-Bjc5GfEu.js";import"./TableFooterRow-BQ4TOCow.js";import"./SkeletonText-B_tzDs56.js";import"./Avatar-DLDydU_T.js";import"./AvatarStack-DUfYWTId.js";import"./Badge-BFCmhw44.js";import"./BigNumber-Cyz0DTSh.js";import"./Breadcrumb-C1rkvIvu.js";import"./Link-D9RFi070.js";import"./Heading-kGKtBlX4.js";import"./Legend-BJ6Ck0Hy.js";import"./FileCardList-CpJRlD7z.js";import"./Image-DfNgiqKc.js";import"./Color-B5km2NmY.js";import"./Content-BXyxWnVJ.js";import"./ContextualHelpTrigger-Dj6mrcgU.js";import"./CounterBadge-BL38auu8.js";import"./DonutChart-CcFbTUD3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be_vBexi.js";import"./Header-BScDeb9f.js";import"./Initials-W36NzcvX.js";import"./InlineCode-CkLg5Zr5.js";import"./PopoverTrigger-Dqa8sMRl.js";import"./Separator-DxMsHozP.js";import"./Message-7lyTqTqh.js";import"./MessageSeparator-CQ1CLCTT.js";import"./NavigationGroup-C4JnuN_r.js";import"./Notification-Dq2Soo6r.js";import"./NotificationProvider-BPY70jq3.js";import"./ProgressBar-r_4SSeaH.js";import"./Rating-B9iG1IJI.js";import"./Skeleton-Dmrl1knY.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
