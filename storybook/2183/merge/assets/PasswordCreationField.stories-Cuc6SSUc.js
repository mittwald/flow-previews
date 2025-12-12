import{r as x,j as r}from"./iframe-DEcBxJMv.js";import{b as p,u as f,F as h,t as S}from"./Form-BWEAk-wT.js";import{L as i}from"./Label-DKovwxNh.js";import{R as b,S as w}from"./ResetButton-DEcSG1p7.js";import{B as t}from"./Button-SrFk_XSt.js";import{S as g,s as F}from"./Section-DBHphcZQ.js";import{A as E}from"./ActionGroup-DvFbVXMb.js";import{aw as C,ax as R,ao as n,ay as o,az as V,g as L}from"./TimeField-Dm82K8tp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BupQFwyZ.js";import"./PropsContextProvider-MiOt2FVz.js";import"./mergeRefs-sinOTIgX.js";import"./index-BqRQQrKV.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BRb5cwJZ.js";import"./context-CCmXnIub.js";import"./browser-BXvtU8ie.js";import"./utils-UdYzeLBf.js";import"./ProgressBar-EpRxxAE3.js";import"./Hidden-D2mpT24u.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BC7HEquB.js";import"./remote-DoDHjwnJ.js";import"./Text-BBAymND1.js";import"./EmulatedBoldText-CK8KF88J.js";import"./LoadingSpinner-BVhceB8v.js";import"./Button-BxMepmz1.js";import"./useFocusRing-D_wOvvGC.js";import"./useFocusable-BmM1dgKm.js";import"./context-font-zWS.js";import"./RSPContexts-WhR4y82c.js";import"./Collection-DpX_tac4.js";import"./CollectionBuilder-DE4qpmv-.js";import"./SelectionIndicator-Cf3jtetL.js";import"./Separator-UL7-w-P3.js";import"./useStatic-BAiSxx7G.js";import"./Accordion-BLxSKLD2.js";import"./Alert-Bj8aMttH.js";import"./AlertIcon-B311quy6.js";import"./AlertBadge-DgPHrTJs.js";import"./Align-DJzhUqNo.js";import"./Popover-C7mJHuVQ.js";import"./OverlayTrigger-u_RpKHc5.js";import"./TableFooterRow-C_lpJ_Ld.js";import"./SkeletonText-DAnNzdg5.js";import"./Avatar-bYuIu1Zy.js";import"./AvatarStack-DTmDz1dE.js";import"./Badge-bbz8daB-.js";import"./BigNumber-BlHVGSpu.js";import"./Breadcrumb-GNNk4mVy.js";import"./Link-CPvKToX3.js";import"./Heading-DVq-3Nns.js";import"./Legend-C5yWylkj.js";import"./FileCardList-Bi3qt08T.js";import"./Image-CcShDLXX.js";import"./Color-B19feJBC.js";import"./Content-ClXCVH_y.js";import"./ContextualHelpTrigger-PNpDQr7A.js";import"./CounterBadge-BITuIXzG.js";import"./DonutChart-DfevOAtY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cw2rsL0x.js";import"./Header-DifY7CnZ.js";import"./Initials-TsKejgdG.js";import"./InlineCode-BkoHhJoS.js";import"./PopoverTrigger-BYjVsibp.js";import"./Separator-Cmo-OklH.js";import"./Message-Dzzvnonj.js";import"./MessageSeparator-DMvMYf8R.js";import"./NavigationGroup-DIvfJjdh.js";import"./Notification-DUi0yP4R.js";import"./NotificationProvider-Qm9FlLcY.js";import"./ProgressBar-ULT9xIn5.js";import"./Rating-C0VI3x7Z.js";import"./Skeleton-B3H61kIa.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},re={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
