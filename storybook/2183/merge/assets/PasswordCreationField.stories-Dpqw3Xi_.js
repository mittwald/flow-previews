import{r as x,j as r}from"./iframe-Br-RCPWN.js";import{b as p,u as f,F as h,t as S}from"./Form-DEqxISVK.js";import{L as i}from"./Label-BJkXaCeQ.js";import{R as b,S as w}from"./ResetButton-bLd0bg_q.js";import{B as t}from"./Button-D54g6t8r.js";import{S as g,s as F}from"./Section-DJ8xVnwh.js";import{A as E}from"./ActionGroup-Br-HBLHh.js";import{aw as C,ax as R,ao as n,ay as o,az as V,g as L}from"./TimeField-BGRSwV-o.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CeRu270G.js";import"./PropsContextProvider-CSAj95jw.js";import"./mergeRefs-DP0fvyvw.js";import"./index-DO8vOkwc.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-DcURVzAt.js";import"./context-Bc5k9Bh6.js";import"./browser-Dyp86VHf.js";import"./utils-Dak_ECAp.js";import"./ProgressBar-DLYSkAPs.js";import"./Hidden-BWng0Hd6.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C1NRfwVV.js";import"./remote-Bo4xuhzH.js";import"./Text-CIylET5F.js";import"./EmulatedBoldText-DiJCrkGJ.js";import"./LoadingSpinner-B0xf-tui.js";import"./Button-CoaZdKpJ.js";import"./useFocusRing-kD3u5y5H.js";import"./useFocusable-B6Sg882a.js";import"./context-De-RWUql.js";import"./RSPContexts-CI5k95q6.js";import"./Collection-DW1fpUON.js";import"./CollectionBuilder-BjAB2jGU.js";import"./SelectionIndicator-H4UlTQ5u.js";import"./Separator-WgOMTL7q.js";import"./useStatic-eGeAE8fm.js";import"./Accordion-hQD9PfV1.js";import"./Alert-Bb_4C7nc.js";import"./AlertIcon-Ci_dM1ct.js";import"./AlertBadge-DZwGkMpO.js";import"./Align-DfN4ymbR.js";import"./Popover-QdAZ89s_.js";import"./OverlayTrigger-D0y2BIl1.js";import"./TableFooterRow--YVmAQJL.js";import"./SkeletonText-DH8cB97o.js";import"./Avatar-CQV4Pag9.js";import"./AvatarStack-mpuF30DC.js";import"./Badge-AGFHXSuV.js";import"./BigNumber-BKnsR0fX.js";import"./Breadcrumb-Dn0ZcgHN.js";import"./Link-Cd6zxchg.js";import"./Heading-BOVN6eFE.js";import"./Legend-m_Z_E65H.js";import"./FileCardList-Cr1bdGd9.js";import"./Image-CX8OimUo.js";import"./Color-BM0XuHzd.js";import"./Content-B9XeZb2J.js";import"./ContextualHelpTrigger-DYkgoDVG.js";import"./CounterBadge-CiNfB30V.js";import"./DonutChart-BSut2oKM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-jxwvzdOg.js";import"./Header-q2hXiR9Q.js";import"./Initials-2ZjSAOrE.js";import"./InlineCode-vkQ-McU7.js";import"./PopoverTrigger-B_oYUYip.js";import"./Separator-DOub_aiP.js";import"./Message-DH3zGPpQ.js";import"./MessageSeparator-Bc8NECux.js";import"./NavigationGroup-Buu17kA2.js";import"./Notification-B1zm2nBo.js";import"./NotificationProvider-h_8RrIcw.js";import"./ProgressBar-Di15BDR2.js";import"./Rating-BAfMiDeC.js";import"./Skeleton-NDiigi_I.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},re={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
