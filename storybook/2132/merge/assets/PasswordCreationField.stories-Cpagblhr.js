import{r as w,j as r}from"./iframe-Bl9ZNzly.js";import{c as p,u as f,F as h,t as y}from"./Form-D4bMdH2K.js";import{L as i}from"./Label-DNzUxKIf.js";import{R as x,S as b}from"./ResetButton-DWEYZxhb.js";import{B as t}from"./Button-C43dgBgP.js";import{S as B,s as F}from"./Section-CDNuzGQn.js";import{A as S}from"./ActionGroup-B7w-C4eg.js";import{au as g,av as E,h as C,am as n,aw as o,ax as R,g as V}from"./TimeField-B_NJ8Ky6.js";import"./index-nuYtCEEu.js";import"./dynamic-DN5dqmlD.js";import"./PropsContextProvider-DcJmUF2I.js";import"./mergeRefs-ux46nP0M.js";import"./index-BGoG8N2m.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-IXeJde12.js";import"./context-BsRR-XG9.js";import"./browser-DgAJHjYP.js";import"./utils-Ba3Wc4Cj.js";import"./ProgressBar-D1AHMkFy.js";import"./Hidden-B2JOjUUO.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CdD_Vr9D.js";import"./Text-DVbVn-gX.js";import"./EmulatedBoldText-C2RodUkO.js";import"./LoadingSpinner-BmMjYWfH.js";import"./Button-CmlWxNPG.js";import"./useFocusRing-DOvKN8uX.js";import"./useFocusable-JrbUxoa4.js";import"./context-B3t2ll3v.js";import"./RSPContexts-CKPxvq-y.js";import"./Collection-2c0i4EEE.js";import"./CollectionBuilder-BRsb4ZNp.js";import"./SelectionIndicator-FRTj7WMW.js";import"./Separator-E4Y45gOI.js";import"./useStatic-CHy8y9O8.js";import"./getActionGroupSlot-BTnOUAI3.js";import"./Accordion-BUjWPilm.js";import"./Alert-C0kR42rQ.js";import"./AlertIcon-CHB7dkgT.js";import"./AlertBadge-D4s5aIEX.js";import"./Align-CpM0_uVF.js";import"./Popover-B6t3DWPA.js";import"./OverlayTrigger-DDLdbzyu.js";import"./TableFooterRow-DMeEteug.js";import"./SkeletonText-CN7sz2xZ.js";import"./Avatar-BbmMq3FT.js";import"./AvatarStack-B2yM02yc.js";import"./Badge-9mW_yPuD.js";import"./BigNumber-DoG3YCKA.js";import"./Breadcrumb-Cp2zriY7.js";import"./Link-5zhhGX89.js";import"./Heading-6r91OnV5.js";import"./Legend-DkfP-nrK.js";import"./FileCardList-Cz5qlLht.js";import"./Image-CXwyLNTy.js";import"./Color-DNqf-ZTv.js";import"./Content-C5jzPnX3.js";import"./ContextualHelpTrigger-ckkh_Rgl.js";import"./CounterBadge-D8ojNEaL.js";import"./DonutChart-CwEutUfZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-LspQ7VGl.js";import"./Header-BkQqDlqE.js";import"./Initials-I4jIDVmP.js";import"./InlineCode-B5iqyuuQ.js";import"./PopoverTrigger-DSjKq8wS.js";import"./Separator-Cyan_bJo.js";import"./Message-CFIx3glm.js";import"./MessageSeparator-BMRRM_XG.js";import"./NavigationGroup-Dk3SJKPd.js";import"./Notification-CB0idSLS.js";import"./NotificationProvider-CofHTDPs.js";import"./ProgressBar-Btc4VOSd.js";import"./Rating-AGxiWe12.js";import"./Skeleton-Bm0zXdSH.js";const P=(e=g)=>{const a=w.useMemo(()=>E.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return C(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,L=v("submit"),j={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[R.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=y();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(B,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:P()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(S,{children:[r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:P(j)},name:"password",children:r.jsxs(n,{validationPolicy:j,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return w.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        validate: generatePasswordCreationFieldValidation(policyDecl)
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
