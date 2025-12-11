import{r as x,j as r}from"./iframe-DJotDYDy.js";import{b as p,u as f,F as h,t as S}from"./Form--OyMN0Zf.js";import{L as i}from"./Label-DswoIiqU.js";import{R as b,S as w}from"./ResetButton-BXzEWh8-.js";import{B as t}from"./Button-CQDQfA67.js";import{S as g,s as F}from"./Section-Bz15vzU3.js";import{A as E}from"./ActionGroup-C7fdOZLN.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-BlAfO89Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8klVav1.js";import"./PropsContextProvider-C8D7pSNe.js";import"./mergeRefs-TkKWhRS-.js";import"./index-ebT-aqWZ.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BEYdlta5.js";import"./context-BRylSH4L.js";import"./browser-D3MZEWQb.js";import"./utils-C6pspRr_.js";import"./ProgressBar-Bd3Cq33t.js";import"./Hidden-W-9e78A-.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B2TzUZi8.js";import"./remote-C1ZUFjaQ.js";import"./Text-D93KUIkM.js";import"./EmulatedBoldText-DL9TulOO.js";import"./LoadingSpinner-C00dVMXY.js";import"./Button-Dv79gn0L.js";import"./useFocusRing-C6VIijHL.js";import"./useFocusable-CiM2gaeN.js";import"./context-OUVwQ3_j.js";import"./RSPContexts-CU0-oOpl.js";import"./Collection-BohX5TfD.js";import"./CollectionBuilder-BdsPzAgw.js";import"./SelectionIndicator-CS7AIL_l.js";import"./Separator-D2bXbcR5.js";import"./useStatic-Dv4cIFiB.js";import"./Accordion-zR5eFsCn.js";import"./Alert-DLOSTbSN.js";import"./AlertIcon-CudStmFb.js";import"./AlertBadge-hHuvqtIQ.js";import"./Align-Dk0iJg5X.js";import"./Popover-CTYLH_EU.js";import"./OverlayTrigger-Ba9XbFcO.js";import"./TableFooterRow-DVt43RQ5.js";import"./SkeletonText-Ca5w9B9h.js";import"./Avatar-CanBm8d9.js";import"./AvatarStack-CkGqbJia.js";import"./Badge-D6gkAHgL.js";import"./BigNumber-CoSdM1jp.js";import"./Breadcrumb-OJI6AK0i.js";import"./Link-Br48FmRg.js";import"./Heading-C_Kr3DP-.js";import"./Legend-BG_Ok682.js";import"./FileCardList-BHXDHcva.js";import"./Image-DuNd2GJV.js";import"./Color-DSNVJGOK.js";import"./Content-Cmsz75X5.js";import"./ContextualHelpTrigger-C6QZhAxg.js";import"./CounterBadge-DIAsQ6Mo.js";import"./DonutChart-CDa6nqpQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CShNVj2X.js";import"./Header-LVC8PwXi.js";import"./Initials-Dpb5-Mu6.js";import"./InlineCode-CS-pupFg.js";import"./PopoverTrigger-CTOjZswe.js";import"./Separator-DdvEDZlm.js";import"./Message-BphMRukK.js";import"./MessageSeparator-DL5Mtc4a.js";import"./NavigationGroup-GlfagvwS.js";import"./Notification-Bfz10Opj.js";import"./NotificationProvider-BEeuteXk.js";import"./ProgressBar-DEoqe-N6.js";import"./Rating-1LXSamgX.js";import"./Skeleton-DH-hjyZA.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},re={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
