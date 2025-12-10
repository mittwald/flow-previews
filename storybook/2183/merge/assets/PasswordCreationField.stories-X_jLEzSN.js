import{r as x,j as r}from"./iframe-Ctq1zpNY.js";import{b as p,u as f,F as h,t as S}from"./Form-C84o_xHk.js";import{L as i}from"./Label-CT-9atCO.js";import{R as b,S as w}from"./ResetButton-Tsnsh9NB.js";import{B as t}from"./Button-DNyG1kJP.js";import{S as g,s as F}from"./Section-D2jBz3SO.js";import{A as E}from"./ActionGroup-CARzfJtb.js";import{au as C,av as R,am as n,aw as o,ax as V,g as L}from"./TimeField-DpNFufVp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BfX5vXPY.js";import"./PropsContextProvider-BoUiLDJD.js";import"./mergeRefs-B0cZ0A1R.js";import"./index-CTRuU27q.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Ca1VgSxY.js";import"./context-BUbxt6aY.js";import"./browser-D7Nrk8GS.js";import"./utils-BnoqN3lQ.js";import"./ProgressBar-Bxh0Ye9X.js";import"./Hidden-DCaHa4pK.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-UjLKXv7l.js";import"./remote-0oz4JQoy.js";import"./Text-BfSoULNy.js";import"./EmulatedBoldText-DAcbt9PZ.js";import"./LoadingSpinner-Daveedqv.js";import"./Button-CDyTi84i.js";import"./useFocusRing-CS37ztg9.js";import"./useFocusable-wHVwTxSo.js";import"./context-C8D6suKc.js";import"./RSPContexts-DHJyFFU0.js";import"./Collection-Cmcp_j_K.js";import"./CollectionBuilder-6JKqc06M.js";import"./SelectionIndicator-BUhvtPLn.js";import"./Separator-DoPI3Rcg.js";import"./useStatic-BZ5oCv4Q.js";import"./Accordion-BlmA1-vk.js";import"./Alert-197Nc-vU.js";import"./AlertIcon-D5hQ6U-3.js";import"./AlertBadge-BEYUMP2v.js";import"./Align-CDoIACkY.js";import"./Popover-BOF7jNb2.js";import"./OverlayTrigger-CsCUjwyJ.js";import"./TableFooterRow-CA0OY6Ij.js";import"./SkeletonText-ZOgXAPP6.js";import"./Avatar-DCHePwE0.js";import"./AvatarStack-CgDyXG0P.js";import"./Badge-CP-oLjib.js";import"./BigNumber-DYHcOH-J.js";import"./Breadcrumb-1b5V4Dif.js";import"./Link-BTf1B7UH.js";import"./Heading-CoaPK5Bd.js";import"./Legend-DvSzQrMJ.js";import"./FileCardList-CBpBQcHx.js";import"./Image-DXaLhdwB.js";import"./Color-BBsiMDPd.js";import"./Content-CnMobkgI.js";import"./ContextualHelpTrigger-BSZNnUoZ.js";import"./CounterBadge-tJHLELVH.js";import"./DonutChart-D6V2PmVt.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-AUFqOAj4.js";import"./Header-16boNNDy.js";import"./Initials-BpI7DWhz.js";import"./InlineCode-C00u1vDr.js";import"./PopoverTrigger-DiryRmSf.js";import"./Separator-D_c6JRK_.js";import"./Message-CzMhkybn.js";import"./MessageSeparator-VEfMPvYr.js";import"./NavigationGroup-B0Bocd3L.js";import"./Notification-B7Llmu8M.js";import"./NotificationProvider-DSXavLVT.js";import"./ProgressBar-CNRtmkEG.js";import"./Rating-Cm4XTZ6E.js";import"./Skeleton-DUjtquuF.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const j=await(await a.validate(s)).isValid;return m.current={password:s,isValid:j},j}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,T=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},re={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),T(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(w,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
