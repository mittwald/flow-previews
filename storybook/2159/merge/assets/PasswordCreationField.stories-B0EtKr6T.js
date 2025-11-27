import{r as x,j as r}from"./iframe-7BcSOkL1.js";import{b as p,u as f,F as h,t as S}from"./Form-XneFK107.js";import{L as i}from"./Label-1f6WodcS.js";import{R as b,S as w}from"./ResetButton-Ho5zA5gP.js";import{B as t}from"./Button-BCb61ouP.js";import{S as g,s as F}from"./Section-BM04QQ4S.js";import{A as E}from"./ActionGroup-FxuoPE1e.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-CijeBcVc.js";import"./index-nuYtCEEu.js";import"./dynamic-BRBd3S7h.js";import"./PropsContextProvider-T63dMOzs.js";import"./mergeRefs-O6Tz23YZ.js";import"./index-DFg9K6WW.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-mETPtdfy.js";import"./context-BxMgKMFE.js";import"./browser-DkuKIMCf.js";import"./utils-CnXd-itf.js";import"./ProgressBar-LVm02CMO.js";import"./Hidden-BaJxX0T2.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DFK7FPRm.js";import"./Text-sNy_JVUg.js";import"./EmulatedBoldText-KFps1Djg.js";import"./LoadingSpinner-CQRWUrve.js";import"./Button-BRvXO2c0.js";import"./useFocusRing-dBoRO-LN.js";import"./useFocusable-WK7F_Oar.js";import"./context-BY2qRpUu.js";import"./RSPContexts-VFAeT7fJ.js";import"./Collection-Nrq8gGX_.js";import"./CollectionBuilder-CIDh9Gu3.js";import"./SelectionIndicator-MGv3fhI5.js";import"./Separator-QlyzxrY4.js";import"./useStatic-DpF8IrGJ.js";import"./Accordion-BgHobUJE.js";import"./Alert-BQNPh5ec.js";import"./AlertIcon-sj9HDcTQ.js";import"./AlertBadge-BLLOUyvy.js";import"./Align-aNcJd3ZC.js";import"./Popover-BpKg5fzM.js";import"./OverlayTrigger-CbmE6C3-.js";import"./TableFooterRow-C9n4XIk3.js";import"./SkeletonText-Dy0ubcCb.js";import"./Avatar-BAV3j3y8.js";import"./AvatarStack-C6ZLwmar.js";import"./Badge-CnwbPEBD.js";import"./BigNumber-BcqybdoX.js";import"./Breadcrumb-ffW0rgiH.js";import"./Link-BKHlTtzt.js";import"./Heading-B3rrQZdA.js";import"./Legend-C9JtvmWd.js";import"./FileCardList-SRvmN5kn.js";import"./Image-hgYl8lpC.js";import"./Color-DwtLdQ8R.js";import"./Content-7kAZ-hbm.js";import"./ContextualHelpTrigger-BM0OhULK.js";import"./CounterBadge-D-e_4-L-.js";import"./DonutChart-C7Yxj0ZB.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DEBLlaTe.js";import"./Header-C14rp7oJ.js";import"./Initials-DHljFpPT.js";import"./InlineCode-Cn06tSfu.js";import"./PopoverTrigger-CWou1-Xt.js";import"./Separator-BAEfiZhs.js";import"./Message-BYi7izf0.js";import"./MessageSeparator-l1p35Wzt.js";import"./NavigationGroup-C79N-DNU.js";import"./Notification-ClV3UBCJ.js";import"./NotificationProvider-CbODtqmP.js";import"./ProgressBar-BfuFFwrF.js";import"./Rating-BqxzbIze.js";import"./Skeleton-DuvA9UgZ.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
