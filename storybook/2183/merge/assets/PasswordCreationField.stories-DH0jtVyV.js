import{r as x,j as r}from"./iframe-BIOR2-hs.js";import{b as p,u as f,F as h,t as S}from"./Form-DmAReG0K.js";import{L as i}from"./Label-BLkwK3Kt.js";import{R as b,S as w}from"./ResetButton-DZ7gY5XE.js";import{B as t}from"./Button-CfZ-AQyp.js";import{S as g,s as F}from"./Section-BqNRxlPT.js";import{A as E}from"./ActionGroup-CY4j-L1M.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-DsDqWsQ-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BVxG6scv.js";import"./PropsContextProvider-RMvdN3RZ.js";import"./mergeRefs-U5WlywcK.js";import"./index-k9AOzptS.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BKbYN9ME.js";import"./context-BLOg-x3I.js";import"./browser-D0ITs1ti.js";import"./utils-DsOUUUiG.js";import"./ProgressBar-_rI0OtV6.js";import"./Hidden-CVR9fNcA.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DZ71cvXF.js";import"./remote-CjhnXpnY.js";import"./Text-DusIDTsD.js";import"./EmulatedBoldText-Wg5Zh9Cq.js";import"./LoadingSpinner-CKTuHmBU.js";import"./Button-Vr3ctEdr.js";import"./useFocusRing-1hKsP8MW.js";import"./useFocusable-B_nx0oid.js";import"./context-CUEzUKrh.js";import"./RSPContexts-DcPCJIF5.js";import"./Collection-Cvuk07Q7.js";import"./CollectionBuilder-Dgt7X-YC.js";import"./SelectionIndicator-DG9tWISV.js";import"./Separator-DTwWIU6f.js";import"./useStatic-CRF1h1Jc.js";import"./Accordion-NoXfJmUE.js";import"./Alert-CoZzyuQ9.js";import"./AlertIcon-BvUo9Etu.js";import"./AlertBadge-DCY0z1jh.js";import"./Align-C8XIH-7n.js";import"./Popover-BGEckYFs.js";import"./OverlayTrigger-4gUv_Eql.js";import"./TableFooterRow-BUV2_OgU.js";import"./SkeletonText-DYOjw4oF.js";import"./Avatar-BUQx2CI1.js";import"./AvatarStack-Xz4hqYuD.js";import"./Badge-Cr-ClmAO.js";import"./BigNumber-L7ZWV3y6.js";import"./Breadcrumb-qAQdTaCx.js";import"./Link-DoJ4IPEN.js";import"./Heading-Cv__lUFC.js";import"./Legend-ZeqB-YKM.js";import"./FileCardList-C94A5o8Z.js";import"./Image-DwW9X8dg.js";import"./Color-CnqARC2o.js";import"./Content-BrpitEoE.js";import"./ContextualHelpTrigger-BXnzR8Ux.js";import"./CounterBadge-BfId8Yot.js";import"./DonutChart-C8wwiAZA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-8GDMUcKQ.js";import"./Header-CRVpFWgA.js";import"./Initials-D4NqoMu-.js";import"./InlineCode-DaFFs495.js";import"./PopoverTrigger-BXV6g6Jr.js";import"./Separator-BAa6viOO.js";import"./Message-DKDXC3NB.js";import"./MessageSeparator-CGyHmQ4m.js";import"./NavigationGroup-D7bLGYP0.js";import"./Notification-D2xjz265.js";import"./NotificationProvider-XOHGZ29Q.js";import"./ProgressBar-B6DJTl7K.js";import"./Rating-UOf7auGu.js";import"./Skeleton-BNldNKri.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},re={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
