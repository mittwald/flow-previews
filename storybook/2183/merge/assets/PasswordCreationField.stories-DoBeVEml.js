import{r as x,j as r}from"./iframe-6jyXgxue.js";import{b as p,u as f,F as h,t as S}from"./Form-CqT2k3Ls.js";import{L as i}from"./Label-ChCKJV3V.js";import{R as b,S as w}from"./ResetButton-IThoXGd6.js";import{B as t}from"./Button-C79y5FLr.js";import{S as g,s as F}from"./Section-H3gIqLfl.js";import{A as E}from"./ActionGroup-CzskHu9f.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-BWhC3HpL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DCXw5NHQ.js";import"./PropsContextProvider-BY7KHLjg.js";import"./mergeRefs-DLi8bP-A.js";import"./index--zh6xbBg.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BA1DAplF.js";import"./context-JQMt_ZQS.js";import"./browser-BMGdvove.js";import"./utils-gjysgmBz.js";import"./ProgressBar-BwsfQ2n1.js";import"./Hidden-DJLEoSnR.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C-gwxPU9.js";import"./remote-D3kJiMg-.js";import"./Text-Dlqenc2H.js";import"./EmulatedBoldText-BIdH-rcf.js";import"./LoadingSpinner-D7O-q36Z.js";import"./Button-DvSQe7YO.js";import"./useFocusRing-BAh6-13b.js";import"./useFocusable-CajPj44S.js";import"./context-DHByHAd4.js";import"./RSPContexts-B8t3YJD-.js";import"./Collection-D3_W2fei.js";import"./CollectionBuilder-CkuRVJqW.js";import"./SelectionIndicator-B4LTYmXz.js";import"./Separator-DRruZlSn.js";import"./useStatic-D2icMmWp.js";import"./Accordion-fULoH9xe.js";import"./Alert-DrBylAny.js";import"./AlertIcon-CE8OjIho.js";import"./AlertBadge-DgAWcThQ.js";import"./Align-BzUcMv_f.js";import"./Popover-D8d0zPXi.js";import"./OverlayTrigger-C4RVAI_V.js";import"./TableFooterRow-DpjTUBn1.js";import"./SkeletonText-6_21vf5Q.js";import"./Avatar-C1mA-DAE.js";import"./AvatarStack-BqyIa6ad.js";import"./Badge-WZr49ZKv.js";import"./BigNumber-C54ZRNi7.js";import"./Breadcrumb-Cwl4tYyc.js";import"./Link-D0jiVju_.js";import"./Heading-CJE26UUg.js";import"./Legend-WIvdEy4p.js";import"./FileCardList-B0iLEsKd.js";import"./Image-COP6xYUW.js";import"./Color-JgwV0I9-.js";import"./Content-BVhQmARn.js";import"./ContextualHelpTrigger-CJ7SzJu0.js";import"./CounterBadge-D4Tjgl8K.js";import"./DonutChart-6sh_E6SJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CRpXUc1l.js";import"./Header-BSNdFr4b.js";import"./Initials-prUY4cPn.js";import"./InlineCode-Czh4dmVv.js";import"./PopoverTrigger-Dz8Taoga.js";import"./Separator-BU3gQHFS.js";import"./Message-f3EcTgP_.js";import"./MessageSeparator-D_xNlPF-.js";import"./NavigationGroup-C98vmueH.js";import"./Notification-DPFB18oq.js";import"./NotificationProvider-Ce0Lip3J.js";import"./ProgressBar-uMhxME4A.js";import"./Rating-DbrK3hf3.js";import"./Skeleton-Dm-B8LNv.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},re={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
