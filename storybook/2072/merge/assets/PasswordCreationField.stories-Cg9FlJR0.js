import{r as x,j as r}from"./iframe-DOEJXvGk.js";import{b as p,u as f,F as h,t as S}from"./Form-UjzAV8c2.js";import{L as i}from"./Label-CHbDmU_0.js";import{R as b,S as w}from"./ResetButton-BFU_0WFQ.js";import{B as t}from"./Button-BYGUtkd2.js";import{S as g,s as F}from"./Section-BqMXvD2Y.js";import{A as E}from"./ActionGroup-ZPTq9sUD.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-DzkbFTLr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-yU3-i23D.js";import"./PropsContextProvider-Ccrn_JGz.js";import"./mergeRefs-BUxfbHrI.js";import"./index-cXd2_Nql.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-sTlF3R26.js";import"./context-fI8vs3af.js";import"./browser-DH30uIAM.js";import"./utils-DdqmmzJ9.js";import"./ProgressBar-DdcYoj3j.js";import"./Hidden-BmzTuRrq.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Ci_z427u.js";import"./Text-D2s12SBY.js";import"./EmulatedBoldText-8EHop2RJ.js";import"./LoadingSpinner-C3IBuXDG.js";import"./Button-DlVwZwD1.js";import"./useFocusRing-8zbAs-ap.js";import"./useFocusable-DGnKZu4u.js";import"./context-ClAoL54q.js";import"./RSPContexts-bWk5q8vU.js";import"./Collection-Dx7U-2xV.js";import"./CollectionBuilder-CplTTDmS.js";import"./SelectionIndicator-D1mCVvRy.js";import"./Separator-vJb5vpxT.js";import"./useStatic-DU36eiHs.js";import"./Accordion-DrpzS9Tu.js";import"./Alert-Dz6Txycm.js";import"./AlertIcon-DeM3Y1y8.js";import"./AlertBadge-F2NWY7KX.js";import"./Align-Wr8YCtA6.js";import"./Popover-DVCzA5rA.js";import"./OverlayTrigger-DmCvlVUl.js";import"./TableFooterRow-BqdPD20e.js";import"./SkeletonText-DM-BrczZ.js";import"./Avatar-AfEQ8aJ7.js";import"./AvatarStack-PbGcOMzO.js";import"./Badge-CoMRyfRW.js";import"./BigNumber-BuS1c3m1.js";import"./Breadcrumb-CGjUpZnK.js";import"./Link-BnTqUE_d.js";import"./Heading-B55jlt0S.js";import"./Legend-BR0OJkN5.js";import"./FileCardList-BfoXr3eL.js";import"./Image-Bzob2sy0.js";import"./Color-C7W8ONo_.js";import"./Content-BvjUUUqh.js";import"./ContextualHelpTrigger-SA4yZZHq.js";import"./CounterBadge-Bq8ZiO3w.js";import"./DonutChart-D4hkpW0U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BGYJy9GV.js";import"./Header-DpcvefSw.js";import"./Initials-Bo59F16W.js";import"./InlineCode-D_4JxDia.js";import"./PopoverTrigger-BL7IIJoh.js";import"./Separator-BKXlt3AK.js";import"./Message-DDZrbHos.js";import"./MessageSeparator-BlAKvn2O.js";import"./NavigationGroup-b6mYgSHm.js";import"./Notification-Btu7hZt1.js";import"./NotificationProvider-QjMkPqGI.js";import"./ProgressBar-BZO70kmk.js";import"./Rating-CzHquKAT.js";import"./Skeleton-DpeTzzxW.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
