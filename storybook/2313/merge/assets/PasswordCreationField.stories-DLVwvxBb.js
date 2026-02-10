import{r as x,j as r}from"./iframe-HxmydubW.js";import{a as p,u as f,F as h,R as b,S as j,t as S}from"./ResetButton-H0M11BQL.js";import{L as i}from"./Label-Jo5QLCir.js";import{B as t}from"./Button-CfZWs4w7.js";import{S as g}from"./Section-DaADFqCH.js";import{A as E}from"./ActionGroup-D6Gqna5x.js";import{s as F}from"./ActionBatch-ChYSHCOJ.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-BwH_FtRn.js";import{F as L}from"./FieldError-431GXjJZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7w-3Mi4.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./clsx-B-dksMZM.js";import"./index-CEuE-GZL.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./context-CAIZZp13.js";import"./useRef-D0OjaGz6.js";import"./utils-QtLN3P4K.js";import"./useStatic-ffXkYFOn.js";import"./ButtonView-BtepizEV.js";import"./browser-XpDtWA4a.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./IconWarning-C9xwJqAl.js";import"./remote-fubbDoJI.js";import"./Text-CUJOJiDD.js";import"./EmulatedBoldText-tUaMuzLe.js";import"./Text-CyO0jXov.js";import"./LoadingSpinner-CzIk11gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B_Zn8gpO.js";import"./ProgressBar-BLMl0tpz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CkTRhQb0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-yluX3X-J.js";import"./useFocus-AF-IcVAt.js";import"./useFocusRing-CAJt6BJw.js";import"./useFocusable-H6SSWU_B.js";import"./ContextMenuSection-DBGHgVvh.js";import"./Dialog-BZeO2Xjo.js";import"./RSPContexts-Cjdg_leM.js";import"./OverlayArrow-CRirkybg.js";import"./useControlledState-N-j6hnQm.js";import"./Collection-Dh0U_T2u.js";import"./CollectionBuilder-DZvSqS6p.js";import"./SelectionIndicator-dYnAwztx.js";import"./Separator-D3qRtCTd.js";import"./SelectionManager-BhAKHVOw.js";import"./useEvent-Br9MlQ6p.js";import"./useCollator-qjE4hkog.js";import"./FocusScope-D_FLL8Ht.js";import"./VisuallyHidden-BPW-z4K2.js";import"./getActionGroupSlot-CHtGBuk8.js";import"./context-I_ID-Cd_.js";import"./FieldDescription-C-093zKF.js";import"./Tooltip-DSVxnjDe.js";import"./ContextualHelpTrigger-BexeYOf9.js";import"./Popover-Dc_4CAsZ.js";import"./useOverlayController-CICFPSY8.js";import"./OverlayContextProvider-e8rtjnFo.js";import"./OverlayTrigger-DvKHyWhH.js";import"./Heading-C9JwdE7Y.js";import"./Heading-B7f00fHt.js";import"./useFieldComponent-Bahj-THY.js";import"./useControlledHostValueProps-1O-1Ij3-.js";import"./TextField-1V9RulCp.js";import"./FieldError-BaqMj9An.js";import"./Form-Di40r5ck.js";import"./Group-C6Hde1Sd.js";import"./Input-Bo21dlHq.js";import"./useTextField-Bjw6L3s9.js";import"./useFormReset-C2bi11DR.js";import"./useFormValidation-BHp8DdfT.js";import"./AlertText-CJjUY60n.js";import"./AlertIcon-BFPz9yZd.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
