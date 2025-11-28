import{r as x,j as r}from"./iframe-6pmDYBey.js";import{b as p,u as f,F as h,t as S}from"./Form-Bc7s9N1y.js";import{L as i}from"./Label-BogZLDOy.js";import{R as b,S as w}from"./ResetButton-DqKgT8J4.js";import{B as t}from"./Button-Bz4oJBBk.js";import{S as g,s as F}from"./Section-Byh4aHn5.js";import{A as E}from"./ActionGroup-8lne9rS6.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-DUzJzX0v.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-PozyV8BB.js";import"./PropsContextProvider-Bcab5p0Y.js";import"./mergeRefs-KX5b3W0M.js";import"./index-D7Awe5Nv.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Cc63-Qc3.js";import"./context-D-9qd8rr.js";import"./browser-Curoa5u0.js";import"./utils-CclRT-8x.js";import"./ProgressBar-DSMryv5h.js";import"./Hidden-DGWIRGX2.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-D2rzgsKD.js";import"./Text-DCl4bIjP.js";import"./EmulatedBoldText-CBUClY1I.js";import"./LoadingSpinner-D_0Hr43y.js";import"./Button-Bf_N8W1N.js";import"./useFocusRing-CIK_JYa4.js";import"./useFocusable-k6dtakHQ.js";import"./context-CTAsMywl.js";import"./RSPContexts-BHIIqogi.js";import"./Collection-BzIHwVQs.js";import"./CollectionBuilder-s3gBlVxZ.js";import"./SelectionIndicator-BUH0wchX.js";import"./Separator-C2Ax_jJi.js";import"./useStatic-Bv4Ps5t5.js";import"./Accordion-Buaowi87.js";import"./Alert-ZPf2dT69.js";import"./AlertIcon-mseo8G9-.js";import"./AlertBadge-DrOGK01L.js";import"./Align-Sifn-_cY.js";import"./Popover-Dd0-1EJu.js";import"./OverlayTrigger-DSzgE-rS.js";import"./TableFooterRow-BRY3iv1g.js";import"./SkeletonText-BkaviKx9.js";import"./Avatar-COqmIfCf.js";import"./AvatarStack-Cs-Y5kji.js";import"./Badge-B7ODamfh.js";import"./BigNumber-couKEJe3.js";import"./Breadcrumb-WdUL6sK0.js";import"./Link-CJ38LeDn.js";import"./Heading-6phWYNIK.js";import"./Legend-B78FuCBX.js";import"./FileCardList-CHBLnU9n.js";import"./Image-Dcyti7CF.js";import"./Color-BRGYsDjI.js";import"./Content-CuYBsCwt.js";import"./ContextualHelpTrigger-vqI_wpNC.js";import"./CounterBadge-DyAdtC5E.js";import"./DonutChart-DZLxrNmm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BknOPFCn.js";import"./Header-DUij04U4.js";import"./Initials-DRBi35hY.js";import"./InlineCode-DxO_Ztsz.js";import"./PopoverTrigger-BKP_QpSy.js";import"./Separator-C65il62N.js";import"./Message-A68FCta2.js";import"./MessageSeparator-YwFb4hEt.js";import"./NavigationGroup-BryWzwah.js";import"./Notification-QlklNnDw.js";import"./NotificationProvider-DiOqRdCr.js";import"./ProgressBar-bXP38px7.js";import"./Rating-DQiv0-CI.js";import"./Skeleton-BwBlZATo.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
