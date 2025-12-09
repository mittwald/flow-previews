import{r as x,j as r}from"./iframe-BfTJ8OoU.js";import{b as p,u as f,F as h,t as S}from"./Form-D5Qxyvhh.js";import{L as i}from"./Label-OsD2mDHN.js";import{R as b,S as w}from"./ResetButton-Btgq5MTA.js";import{B as t}from"./Button-CAnEum-p.js";import{S as g,s as F}from"./Section-ieM08Mfc.js";import{A as E}from"./ActionGroup-BXvzv2B4.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-Dni6ZWL5.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BLLy2Odl.js";import"./PropsContextProvider-pKtaUqJb.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./context-DfwvGs8v.js";import"./browser-_NOMM9Cq.js";import"./utils-CAkX6XFC.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CnDmU8KM.js";import"./Text-ChPpwgcs.js";import"./EmulatedBoldText-Do8p-rFi.js";import"./LoadingSpinner-CDSlajDH.js";import"./Button-v46gVvAB.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./context-DqfyIwOm.js";import"./RSPContexts-B_hP9IPu.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./useStatic-DZbTJ5BB.js";import"./Accordion-EetxEBhv.js";import"./Alert-CFx8_uD8.js";import"./AlertIcon-Bk9PFIDr.js";import"./AlertBadge-zn-1W_0t.js";import"./Align-DLans5uB.js";import"./Popover-DxokbZnr.js";import"./OverlayTrigger-CvXwRqat.js";import"./TableFooterRow-BfBKGOJY.js";import"./SkeletonText-BAh3LYCP.js";import"./Avatar-DBLpjnAX.js";import"./AvatarStack-BHU-_pXB.js";import"./Badge-B1Bj-2mY.js";import"./BigNumber-BzAzuR-m.js";import"./Breadcrumb-DO48AN_q.js";import"./Link-fRrhQgjx.js";import"./Heading-C_Cd2XWG.js";import"./Legend-D59IIsbr.js";import"./FileCardList-Crd4-rJi.js";import"./Image-D7QRJIgn.js";import"./Color-BcE30bux.js";import"./Content-BbEJXFUy.js";import"./ContextualHelpTrigger-BBU6ZCx4.js";import"./CounterBadge-qpjoO2b-.js";import"./DonutChart-DSkqB0Nj.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D4r4pUSf.js";import"./Header-DgEQtgXz.js";import"./Initials-DNuviWyX.js";import"./InlineCode-OjIKEpaK.js";import"./PopoverTrigger-zZ3JKVIV.js";import"./Separator-B5S4ffvA.js";import"./Message-Bivfjnxf.js";import"./MessageSeparator-BWNjQn1R.js";import"./NavigationGroup-JMiAIgUz.js";import"./Notification-6ZwISdx7.js";import"./NotificationProvider-BNxs8g7x.js";import"./ProgressBar-BlJq2aYe.js";import"./Rating-BodFdmqC.js";import"./Skeleton--CLyUYrz.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
