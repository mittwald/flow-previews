import{r as x,j as r}from"./iframe-Bj8CIgLy.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-5FZ7-Sc5.js";import{L as i}from"./Label-DCfOJgVU.js";import{B as t}from"./Button-b_60CJFp.js";import{S as g}from"./Section-Bw-Treyf.js";import{A as E}from"./ActionGroup-C-nWA-s8.js";import{s as F}from"./Action-DbcbId4I.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-T6dPPpW1.js";import{F as L}from"./FieldError-Dbjs-A5K.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DEq-wVmB.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./clsx-B-dksMZM.js";import"./index-DYakERwo.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./useRef-CJxAjFY9.js";import"./utils-D41FTHpf.js";import"./ButtonView-DoUQTLRD.js";import"./browser-Rl4DjN4H.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./Text-BbFFlg8m.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kf97rzrP.js";import"./ProgressBar-CzzSLaP3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BLrqdZMB.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocusable-DNf9Dm0r.js";import"./ContextMenuSection-aa2v9fsF.js";import"./Dialog-vXYkYCcw.js";import"./RSPContexts-C3RQOwqv.js";import"./OverlayArrow-zA421arv.js";import"./useControlledState-C0IHmt74.js";import"./Collection-Ddvl2Mqw.js";import"./CollectionBuilder-BBfbdfv8.js";import"./SelectionIndicator-DBsPgOzp.js";import"./Separator-ZmTIxQU_.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./useCollator-w2x96sHr.js";import"./FocusScope-DNVRBXI-.js";import"./VisuallyHidden-D10Fyvvv.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./useStatic-BJFVwiuT.js";import"./context-CihUwagI.js";import"./FieldDescription-tBjikzHa.js";import"./Tooltip-sa6qPAw7.js";import"./ContextualHelpTrigger-9o23bYp0.js";import"./Popover-BqYOhRmm.js";import"./useOverlayController-1hyOtPEK.js";import"./OverlayContextProvider-CVeWPhf8.js";import"./OverlayTrigger-BDKA1kYb.js";import"./Heading-CKRtDLQC.js";import"./Heading-CLbyuN1D.js";import"./useFieldComponent-DFS7CEov.js";import"./useControlledHostValueProps-D2bTA6r2.js";import"./TextField-DWq53d6e.js";import"./FieldError-cTj-tlV1.js";import"./Form-CdHdNrpC.js";import"./Group-C2p9sJyZ.js";import"./Input-DxRXMpsm.js";import"./useTextField-gMvFPb5G.js";import"./useFormReset-DPVe5t_C.js";import"./useFormValidation-CuYWsRMr.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
