import{r as x,j as r}from"./iframe-56IBTyTv.js";import{c as p,u as f,F as h,t as S}from"./Form-PvUfpyd4.js";import{L as i}from"./Label-XId0FOSA.js";import{R as b,S as w}from"./ResetButton-B4EwSCy2.js";import{B as t}from"./Button-CFrxsoAe.js";import{S as g,s as F}from"./Section-CWOxkqLh.js";import{A as E}from"./ActionGroup-J5RwwMSR.js";import{at as C,au as R,al as n,av as o,aw as V,g as L}from"./TimeField-DFBvkPXF.js";import"./index-nuYtCEEu.js";import"./dynamic-CXTlw0o3.js";import"./PropsContextProvider-Bnm9-YIt.js";import"./mergeRefs-Cyrc671G.js";import"./index-CFQkVl6N.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CJPwUZ4n.js";import"./context-C94D1Tcb.js";import"./browser-DgtGg3YC.js";import"./utils-By6OiP0m.js";import"./ProgressBar-BjWRzbkF.js";import"./Hidden-BYV7a_dx.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DWxFADKK.js";import"./Text-D89DiGla.js";import"./EmulatedBoldText-BnqixNdP.js";import"./LoadingSpinner-DIFU_u_Q.js";import"./Button-Bg0OEiur.js";import"./useFocusRing-CwXi6gl-.js";import"./useFocusable-Ctb1BwR8.js";import"./context-C8voyd_c.js";import"./RSPContexts-ONk7znnk.js";import"./Collection-BYrAemKx.js";import"./CollectionBuilder-Bc4oKRVn.js";import"./SelectionIndicator-DENIl1oK.js";import"./Separator-BgOKs_kR.js";import"./useStatic-BFaumh86.js";import"./Accordion-zGlAAwDO.js";import"./Alert-KjDlqK_2.js";import"./AlertIcon-DXhK-bl3.js";import"./AlertBadge-CSdPQEPk.js";import"./Align-BexLs-oj.js";import"./Popover-BfnMJAl3.js";import"./OverlayTrigger-BjNrDJjP.js";import"./TableFooterRow-CKg0W8E3.js";import"./SkeletonText-D5ouES9k.js";import"./Avatar-n5CHccvP.js";import"./AvatarStack-C2OuNUTw.js";import"./Badge-BorAN_Zo.js";import"./BigNumber-BK1aV7_F.js";import"./Breadcrumb-DCvkjqRg.js";import"./Link-gAUYFHTC.js";import"./Heading-C8An-zqi.js";import"./Legend-pkpzEGV_.js";import"./FileCardList-FudbpZWY.js";import"./Image-Clsgyrfz.js";import"./Color-BHlBrJNB.js";import"./Content-fBwvLB0a.js";import"./ContextualHelpTrigger-jAzey3OP.js";import"./CounterBadge-BLzRgZI1.js";import"./DonutChart-CblbZ-Gl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DIclsztf.js";import"./Header-BsQFcaSy.js";import"./Initials-lP5x31RC.js";import"./InlineCode-Dotm0ZC8.js";import"./PopoverTrigger-CUNBmLil.js";import"./Separator-Cc_0uyhZ.js";import"./Message-BPeVl3z6.js";import"./MessageSeparator-B8eILiD5.js";import"./NavigationGroup-_2LkB9uU.js";import"./Notification-iD7WbJZd.js";import"./NotificationProvider-cB8fVvxQ.js";import"./ProgressBar-Dh_0DhV8.js";import"./Rating-CvVeafk5.js";import"./Skeleton-S1htOct_.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const re=["Default","WithForm","WithFieldError","WithFocus"];export{l as Default,u as WithFieldError,c as WithFocus,d as WithForm,re as __namedExportsOrder,$r as default};
