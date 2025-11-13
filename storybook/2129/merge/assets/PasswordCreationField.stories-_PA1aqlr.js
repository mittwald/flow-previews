import{r as w,j as r}from"./iframe-DBT7gULD.js";import{c as p,u as f,F as h,t as y}from"./Form-BdIOPkVK.js";import{L as i}from"./Label-CB-Jrcob.js";import{R as x,S as b}from"./ResetButton-CfIscrHL.js";import{B as t}from"./Button-CCcVMCFh.js";import{S as B,s as F}from"./Section-D6BoVeKj.js";import{A as S}from"./ActionGroup-BaRaSr0H.js";import{ay as g,az as E,j as C,ao as n,aA as o,aB as R,F as V}from"./Modal-BDM5GHUs.js";import"./index-nuYtCEEu.js";import"./dynamic-DeRu_afx.js";import"./flowComponent-C7by5vuA.js";import"./index-Cczfp9NA.js";import"./clsx-B-dksMZM.js";import"./index-pYm4_kYT.js";import"./useLocalizedStringFormatter-qYqIvEHn.js";import"./context-DTlkSZ0Y.js";import"./browser-DvkhEBxs.js";import"./utils-D0uB-Zwx.js";import"./ProgressBar-DcCMsBu5.js";import"./Hidden-BMktz6gh.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BUJnRJXc.js";import"./Text-BcenBV84.js";import"./EmulatedBoldText-Cn-N7_G4.js";import"./LoadingSpinner-UyNbbNkS.js";import"./Button-C-UpDsRO.js";import"./useFocusRing-BJASUfOx.js";import"./useFocusable-m652rNBk.js";import"./context-D6D-GlPg.js";import"./RSPContexts-Dom4UWqx.js";import"./Collection-BjYIoe9r.js";import"./CollectionBuilder-DOBxcW2Y.js";import"./SelectionIndicator-BqFKF874.js";import"./Separator-CWTtrhm9.js";import"./useStatic-CqxwceTm.js";import"./getActionGroupSlot-Bfgl2kFS.js";import"./FileCardList-DKqY5nDG.js";import"./Avatar-D4XiVYbq.js";import"./AlertIcon-B2G5YJ_h.js";import"./Image-DK0DVEvL.js";import"./Link-hErBzw1I.js";import"./ControlledNotification-BggQqaRM.js";import"./LayoutCard-yF4LQl2s.js";import"./Accordion-DbrfaGK3.js";import"./Alert-BVpQpQXk.js";import"./AlertBadge-C-4v8xNv.js";import"./Align-DkyK3rk7.js";import"./AvatarStack-5oER6YSZ.js";import"./BigNumber-ByEBpfDg.js";import"./Breadcrumb-C9tjsQdJ.js";import"./Heading-CxhJw16G.js";import"./Legend-BSuRheR8.js";import"./Color-CfsSCbKc.js";import"./TableFooterRow-B5ePBGv6.js";import"./SkeletonText-yAbLh4O6.js";import"./Content-BNSFZdxK.js";import"./CounterBadge-C-EdT-Ua.js";import"./DonutChart-BfLW1k2r.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CCV8_Obm.js";import"./Header-DF0mjguX.js";import"./Initials-CLL_WJIt.js";import"./InlineCode-CHkCj2DF.js";import"./Separator-DSZggq8J.js";import"./MessageSeparator-DKc-7GUt.js";import"./NavigationGroup-CtWNzX63.js";import"./Notification-CgJLhaIj.js";import"./NotificationProvider-BBWQX6wG.js";import"./ProgressBar-DwVQ0bzm.js";import"./Rating-DhxcEvbm.js";import"./Skeleton-HhO4ThtG.js";const P=(e=g)=>{const a=w.useMemo(()=>E.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return C(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:L}=__STORYBOOK_MODULE_ACTIONS__,v=L("submit"),j={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[R.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Zr={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),v(s)},a=f({defaultValues:{user:""}}),m=y();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(B,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:P()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(S,{children:[r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:P(j)},name:"password",children:r.jsxs(n,{validationPolicy:j,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return w.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Jr=["Default","WithForm","WithFieldError","WithFocus"];export{l as Default,u as WithFieldError,c as WithFocus,d as WithForm,Jr as __namedExportsOrder,Zr as default};
