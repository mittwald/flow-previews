import{r as x,j as r}from"./iframe-W1iyoXhf.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-VIcfaLD7.js";import{L as i}from"./Label-h36KWMeP.js";import{B as t}from"./Button-IzhK2U-6.js";import{S as g}from"./Section-CeOL9WXO.js";import{A as E}from"./ActionGroup-C1jzAEQv.js";import{s as F}from"./Action-BaKsvCHV.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-HljWsHVV.js";import{F as L}from"./FieldError-V9E4UopR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-X2nPVSXv.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./clsx-B-dksMZM.js";import"./index-BUhRJiS3.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./context-Dx3ASvxi.js";import"./useRef-HGB3QOF9.js";import"./utils-Co92dFN-.js";import"./browser-D1HYvIQy.js";import"./ButtonView-DeVNGu_o.js";import"./Label.module-CUYTf9Jc.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./IconWarning-Cnnsa5dA.js";import"./remote-CbMcOagV.js";import"./Text-DcDEk3cp.js";import"./EmulatedBoldText-BfE11w5D.js";import"./Text-DMuz8jzh.js";import"./LoadingSpinner-BMAt0-EL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DSUkPhZw.js";import"./ProgressBar-o5FIdMg8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C8GMPbyu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DwtcUURT.js";import"./useFocus-BF1azJZZ.js";import"./useFocusRing-D7D1hXRw.js";import"./useFocusable-CYBapKrT.js";import"./ContextMenuSection-DWjrG_wk.js";import"./Dialog-Dwmqa2yo.js";import"./RSPContexts-CkYyS58h.js";import"./OverlayArrow-DhCjeFi1.js";import"./useControlledState-BeXX8b-c.js";import"./Collection-H-B8rljE.js";import"./CollectionBuilder-BFDcIzLe.js";import"./SelectionIndicator--NYjhiR7.js";import"./Separator-BxaFcvwN.js";import"./SelectionManager-CBsBpJX-.js";import"./useEvent-D9hyQfDj.js";import"./useCollator-CZzcr_Mi.js";import"./FocusScope-mUzTN5zH.js";import"./VisuallyHidden-9GsfRhh1.js";import"./getActionGroupSlot-nARO-zR5.js";import"./useStatic-DFE9WV1t.js";import"./context-Cx4Tf49f.js";import"./FieldDescription-sYQgLYFM.js";import"./Tooltip-D7_Eoy2a.js";import"./ContextualHelpTrigger-kJ6VrudW.js";import"./Popover-ZTnfTngx.js";import"./useOverlayController-BLagNJVD.js";import"./OverlayContextProvider-CtixpOlY.js";import"./OverlayTrigger-CDdGESRy.js";import"./Heading-CkZ0B9ED.js";import"./Heading-DW_b7ElP.js";import"./useFieldComponent-CeQ6dqWY.js";import"./useControlledHostValueProps-CGhWZ5l6.js";import"./TextField-Cp6pNbDA.js";import"./FieldError-CaERYIVC.js";import"./Form-BBVMks-l.js";import"./Group-BXkBt_dH.js";import"./Input-lNMUeypu.js";import"./useTextField-afbLRwDD.js";import"./useFormReset-DYb2_5Lx.js";import"./useFormValidation-aWhqwd0R.js";import"./AlertText-x_xx3UIw.js";import"./AlertIcon-Cyqu-_3z.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
