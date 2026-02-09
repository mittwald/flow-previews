import{r as x,j as r}from"./iframe-BzN-GDSV.js";import{a as p,u as f,F as h,R as b,S as j,t as S}from"./ResetButton-HvWvEm8D.js";import{L as i}from"./Label-aAQCtXm8.js";import{B as t}from"./Button-CqLQCx50.js";import{S as g}from"./Section-DEFyhRPR.js";import{A as E}from"./ActionGroup-RxX1lyJu.js";import{s as F}from"./Action-DMSKmOJg.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-DYMHJOxG.js";import{F as L}from"./FieldError-C55-OsIs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CBHHoCBf.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./clsx-B-dksMZM.js";import"./index-jqMu6fsr.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./context-CV01TaOS.js";import"./useRef-ClXlOumO.js";import"./utils-DZiSZNRH.js";import"./ButtonView-GH3X29hF.js";import"./browser-BZan5p2Q.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./IconWarning-Dq5gBH8b.js";import"./remote-DmyBa_Y3.js";import"./Text-w8Xk5tzh.js";import"./EmulatedBoldText-Bg-XhDZU.js";import"./Text-9Slz249r.js";import"./LoadingSpinner-DwhPZLF8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTrxkMff.js";import"./ProgressBar-BhNLuOhb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D4-tvGJV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CKBw2syN.js";import"./useFocus-CD9nXzJ_.js";import"./useFocusRing-DeK7XLS9.js";import"./useFocusable-CZxxukff.js";import"./ContextMenuSection-Fnzuskm8.js";import"./Dialog-D-_l-Dz2.js";import"./RSPContexts-836Xa0kI.js";import"./OverlayArrow-45O3XaxD.js";import"./useControlledState-VicJRSad.js";import"./Collection-Ckv3RK5p.js";import"./CollectionBuilder-P-tNz_Gd.js";import"./SelectionIndicator-Clnr_8iz.js";import"./Separator-grnmoeTC.js";import"./SelectionManager-TX1M696V.js";import"./useEvent-D8LZAcV8.js";import"./useCollator-6LAjsKx4.js";import"./FocusScope-BMhRfsbp.js";import"./VisuallyHidden-DwmcGrU0.js";import"./getActionGroupSlot-CEsFjkmd.js";import"./useStatic-BCK3u9CD.js";import"./context-CO_pcEBI.js";import"./FieldDescription-CPA3vpEK.js";import"./Tooltip-jHHI1xlH.js";import"./ContextualHelpTrigger-B-LVvw4_.js";import"./Popover-DxjLrjat.js";import"./useOverlayController-CQvNW7BN.js";import"./OverlayContextProvider-LhIWYE9-.js";import"./OverlayTrigger-DARUzxHp.js";import"./Heading-_0-NRbck.js";import"./Heading-Cy7B52s5.js";import"./useFieldComponent-DWIvkE7m.js";import"./useControlledHostValueProps-SG0om-EY.js";import"./TextField-CEYcqWGv.js";import"./FieldError-DErqUxVb.js";import"./Form-BzSZff5w.js";import"./Group-C5-ujBH7.js";import"./Input-C4dwqHoB.js";import"./useTextField-Czkfh9lB.js";import"./useFormReset-C_nKv_ku.js";import"./useFormValidation-Bm80HquG.js";import"./AlertText-_Zms_FAC.js";import"./AlertIcon-CN2JBdj6.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const se=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,se as __namedExportsOrder,te as default};
