import{r as x,j as r}from"./iframe-Du_qouD_.js";import{c as p,u as f,F as h,t as S}from"./Form-CbVRmMuM.js";import{L as n}from"./Label-DvpwKxrD.js";import{R as b,S as j}from"./ResetButton-C_wM_wok.js";import{B as t}from"./Button-BKlVJwIr.js";import{S as g,s as F}from"./Section-CP9sTMI1.js";import{A as E}from"./ActionGroup-c_vby5Es.js";import{ay as C,az as R,ao as i,aA as o,aB as V,F as L}from"./Modal-MGKc6uhP.js";import"./index-nuYtCEEu.js";import"./dynamic-DNgOdReL.js";import"./flowComponent-rDAUUIs0.js";import"./index-D82te6aO.js";import"./clsx-B-dksMZM.js";import"./index-Cna9wk2l.js";import"./useLocalizedStringFormatter-BKry4ylq.js";import"./context-56QjP3j7.js";import"./browser-BIThWoNI.js";import"./utils-4z-LHo9M.js";import"./ProgressBar-C8JML2M-.js";import"./Hidden-CaZvTbg6.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BYd1-Vrn.js";import"./Text-DSmwKiK5.js";import"./EmulatedBoldText-B6vrvEtA.js";import"./LoadingSpinner-BVVVUtHG.js";import"./Button-9sEBXLr3.js";import"./useFocusRing-BYlN_rzy.js";import"./useFocusable-BqYSv_Ya.js";import"./context-DfFGI3iw.js";import"./RSPContexts-As5yeo4a.js";import"./Collection-BebXuOLE.js";import"./CollectionBuilder-D1Dgngsg.js";import"./SelectionIndicator-C_AcjXXq.js";import"./Separator-BJxFAi6I.js";import"./useStatic-6KqxvQye.js";import"./getActionGroupSlot-h_LfU4fO.js";import"./FileCardList--2ZieuqZ.js";import"./Avatar-oOQkBEoe.js";import"./AlertIcon-BgpHVoHm.js";import"./Image-B0yvlgyM.js";import"./Link-DmpqZIYe.js";import"./ControlledNotification-CTznOicW.js";import"./LayoutCard-CmyaRvn3.js";import"./Accordion-D5QR60XG.js";import"./Alert-Uq-uDDS4.js";import"./AlertBadge-DNhsD8PX.js";import"./Align-CyVr7OuT.js";import"./AvatarStack-B5s0vN09.js";import"./BigNumber-Bu3QLXdy.js";import"./Breadcrumb-CfGUSdKq.js";import"./Heading-BD53zFfj.js";import"./Legend-BiYpWzHE.js";import"./Color-7P_eHJ9S.js";import"./TableFooterRow-BddxhsDt.js";import"./SkeletonText-DpYKmaWm.js";import"./Content-COgSVb0P.js";import"./CounterBadge-DDdYZMsC.js";import"./DonutChart-Bdt4MC04.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be-RmoYN.js";import"./Header-DGdm1J9_.js";import"./Initials-C70OZOod.js";import"./InlineCode-Bj3DEPPw.js";import"./Separator-eScn2XrM.js";import"./MessageSeparator-Brh9XJMv.js";import"./NavigationGroup-DtZinfMC.js";import"./Notification-C9dD5dH2.js";import"./NotificationProvider-RI2P6NdS.js";import"./ProgressBar-CmgKYrsQ.js";import"./Rating-CkwJjaD1.js";import"./Skeleton-DIz56cOV.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Jr={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(i,{validationPolicy:P,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(i,{defaultValue:"",isInvalid:!0,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(i,{defaultValue:"",children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Qr=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,Qr as __namedExportsOrder,Jr as default};
