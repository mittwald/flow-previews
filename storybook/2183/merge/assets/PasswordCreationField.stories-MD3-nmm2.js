import{r as x,j as r}from"./iframe-DpK2T2Nf.js";import{b as p,u as f,F as h,t as S}from"./Form-CkzEMyZX.js";import{L as i}from"./Label-Dg6bYAOF.js";import{R as b,S as w}from"./ResetButton-CiJw6KVL.js";import{B as t}from"./Button-KfPOVuM-.js";import{S as g,s as F}from"./Section-kGcYQ44e.js";import{A as E}from"./ActionGroup-CLHBsVX4.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-BgQf6oTj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CdnvgWlT.js";import"./PropsContextProvider-hxBwTeBf.js";import"./mergeRefs-dZVNHuSH.js";import"./index-Cxqu85Zl.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CTYggBE6.js";import"./context-CrPZXd5J.js";import"./browser-Ckyi0rpL.js";import"./utils-5sSs2C2Q.js";import"./ProgressBar-BP1RROy1.js";import"./Hidden-BSBCwIf4.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cg4y-Lel.js";import"./remote-Cox__P30.js";import"./Text-ClluuiBD.js";import"./EmulatedBoldText-Bc0AgoG-.js";import"./LoadingSpinner-BQl4MMkz.js";import"./Button--HL08e3g.js";import"./useFocusRing-XJTDMv14.js";import"./useFocusable-BDOA7VsR.js";import"./context-CPEq1qsE.js";import"./RSPContexts-7V3qTNb_.js";import"./Collection-C-I12dkD.js";import"./CollectionBuilder-DnacpWim.js";import"./SelectionIndicator-D-pfjXW7.js";import"./Separator-Dg6KLd5_.js";import"./useStatic-3aliboqk.js";import"./Accordion-AedciLQh.js";import"./Alert-DHDG4MsT.js";import"./AlertIcon-05dXw9V_.js";import"./AlertBadge-CiTXQfnp.js";import"./Align-BSBJJ5zM.js";import"./Popover-BkpsMHU6.js";import"./OverlayTrigger-Dvz2NSVn.js";import"./TableFooterRow-CnVEUuwp.js";import"./SkeletonText-DSV460fR.js";import"./Avatar-BrVjDT-U.js";import"./AvatarStack-45n5MqLA.js";import"./Badge-DcxmWiGs.js";import"./BigNumber-Cq7hcHwo.js";import"./Breadcrumb-B1G9czV2.js";import"./Link-CNUblXN_.js";import"./Heading-CcD2dsF3.js";import"./Legend-CEh7Zw0y.js";import"./FileCardList-vN5JX68X.js";import"./Image-C1ftWFwl.js";import"./Color-DQzo7sAT.js";import"./Content-9dvKA7Z7.js";import"./ContextualHelpTrigger-CBiXLQUX.js";import"./CounterBadge-C-xbOE4o.js";import"./DonutChart-DJ670UUe.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DCNzeETN.js";import"./Header-eZj9M83o.js";import"./Initials-DhFZ0NCC.js";import"./InlineCode-08Yq6ux1.js";import"./PopoverTrigger-DK96Ugpl.js";import"./Separator-EDbsgt1x.js";import"./Message-C8l33cRQ.js";import"./MessageSeparator-B4es_r1t.js";import"./NavigationGroup-CzqtYd5z.js";import"./Notification-DFv7qa6j.js";import"./NotificationProvider-mo_Pr_YX.js";import"./ProgressBar-COfErnlM.js";import"./Rating-BjEvYZAj.js";import"./Skeleton-Dv7muKa-.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},re={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
