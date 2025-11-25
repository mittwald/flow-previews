import{r as x,j as r}from"./iframe-BLnMNn74.js";import{b as p,u as f,F as h,t as S}from"./Form-D1UTqeWr.js";import{L as n}from"./Label-DsxxKAsc.js";import{R as b,S as j}from"./ResetButton-_Ssv2ALf.js";import{B as t}from"./Button-BheRlZ5y.js";import{S as g,s as F}from"./Section-C4IRs01H.js";import{A as E}from"./ActionGroup-D4qujtmo.js";import{ay as C,az as R,ao as i,aA as o,aB as V,F as L}from"./Modal-8XeHYI3F.js";import"./index-nuYtCEEu.js";import"./dynamic-lDfDlCad.js";import"./flowComponent-Cc_1rAUW.js";import"./index-D7hijKS_.js";import"./clsx-B-dksMZM.js";import"./index-BEG_ZaEs.js";import"./useLocalizedStringFormatter-B2X4EAgn.js";import"./context-DeTRhxa_.js";import"./browser-3pbWDgJF.js";import"./utils-mouUCLqv.js";import"./ProgressBar-CiddY3ze.js";import"./Hidden-DG1PJtoX.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DVYn3YAA.js";import"./Text-BLxKn04K.js";import"./EmulatedBoldText-Y_QL0NOh.js";import"./LoadingSpinner-CXYzRfKv.js";import"./Button-DcXCtAho.js";import"./useFocusRing-DSyHnBAC.js";import"./useFocusable-CD4hwFyS.js";import"./context-tC_fb_7Z.js";import"./RSPContexts-PYGgvhgu.js";import"./Collection-B9Zfgr-f.js";import"./CollectionBuilder-BNaZkMOR.js";import"./SelectionIndicator-B3Vil9K4.js";import"./Separator-CoYUerX-.js";import"./useStatic-C1gHOY5o.js";import"./FileCardList-C-nFF2lq.js";import"./Avatar-uSFzf8En.js";import"./AlertIcon-D_ZK5_qh.js";import"./Image-C3aTXuYo.js";import"./Link-BiwBBQmE.js";import"./ControlledNotification-CJ1U_sXf.js";import"./Flex-DEZ5_BjM.js";import"./Accordion-DYry0ver.js";import"./Alert-DpWN8tfH.js";import"./AlertBadge-DR63qZD8.js";import"./Align-DGThSHH9.js";import"./AvatarStack-C5tI56sp.js";import"./BigNumber-B8IdDyzZ.js";import"./Breadcrumb-QEC6aw0y.js";import"./Heading-D0fV1MUw.js";import"./Legend-DalDE9ec.js";import"./Color-CZRI8S1_.js";import"./TableFooterRow-DZByrFxu.js";import"./SkeletonText-CgnC14Qd.js";import"./Content-D01rsQck.js";import"./CounterBadge-DDvI3NyR.js";import"./DonutChart-CCUCxJB3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-48_UokG_.js";import"./Header-Dvm5iR7H.js";import"./Initials-CGdYflvx.js";import"./InlineCode-5yLIxxaJ.js";import"./LayoutCard-BJitsBmJ.js";import"./Separator-B4qHJCoW.js";import"./MessageSeparator-BlU-rXLl.js";import"./NavigationGroup-BwV6U3dj.js";import"./Notification-BlXVrBim.js";import"./NotificationProvider-B_e8WRLe.js";import"./ProgressBar-CqlEDKCU.js";import"./Rating-CMJWfAMs.js";import"./Skeleton-Dhd804V2.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Jr={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(i,{validationPolicy:P,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(i,{defaultValue:"",isInvalid:!0,children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(i,{defaultValue:"",children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(i,{children:[r.jsx(n,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
