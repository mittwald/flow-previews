import{r as x,j as r}from"./iframe-B9oS1eAm.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-4NarTcNc.js";import{L as i}from"./Label-IJFVFDuP.js";import{B as t}from"./Button-DYAI_N0q.js";import{S as g}from"./Section-BlZng62t.js";import{A as E}from"./ActionGroup-C8kGbhyk.js";import{s as F}from"./Action-uBGtkJG1.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-D5jKFLKO.js";import{F as L}from"./FieldError-BkKW3wP7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D5cDPq7G.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./clsx-B-dksMZM.js";import"./index-CYuWkd4j.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./context-CSGUwiAp.js";import"./useRef-D23fJLYr.js";import"./utils-CkbQ6lDO.js";import"./ButtonView-BFgeb-7u.js";import"./browser-DuZ3LDHb.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./IconWarning-CbErselp.js";import"./remote-B89JZTQ6.js";import"./Text-D9DZPtYx.js";import"./EmulatedBoldText-BYYx2Dxb.js";import"./Text-DSVxOKBO.js";import"./LoadingSpinner-BCe3g54S.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCaEF3RH.js";import"./ProgressBar-DmEGRNOl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLQlKL9C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CvAqmGGe.js";import"./useFocus-BUMqhqrN.js";import"./useFocusRing-CD4YKl48.js";import"./useFocusable-DLbArD3q.js";import"./ContextMenuSection-B77fxBO-.js";import"./Dialog-DQxs1UCg.js";import"./RSPContexts-BiSXvS4y.js";import"./OverlayArrow-D190ErXx.js";import"./useControlledState-BhPlyXsf.js";import"./Collection-BQ9glRT8.js";import"./CollectionBuilder-Aei3o-DO.js";import"./SelectionIndicator-CiC6xaeC.js";import"./Separator-DWgkhh6N.js";import"./SelectionManager-PMRgnxaW.js";import"./useEvent-DvZ6slzf.js";import"./useCollator-09eSufO1.js";import"./FocusScope-BifOUh1d.js";import"./VisuallyHidden-D5FMvG_d.js";import"./getActionGroupSlot-DVOrLfdJ.js";import"./useStatic-D0W9io-P.js";import"./context-CJJiwCXZ.js";import"./FieldDescription-OkIQBqxg.js";import"./Tooltip-C3NwG1ML.js";import"./ContextualHelpTrigger-TFo053PZ.js";import"./Popover-YwALvm8D.js";import"./useOverlayController-kt2fLXEJ.js";import"./OverlayContextProvider-B6Y-y8F0.js";import"./OverlayTrigger-BbXRNnL7.js";import"./Heading-DxBk4dsC.js";import"./Heading-DFJD7l83.js";import"./useFieldComponent-BBgwgWHq.js";import"./useControlledHostValueProps-DrCLF4RV.js";import"./TextField-CgbI6ZAs.js";import"./FieldError-Dfuql1HI.js";import"./Form-DFtxLsB8.js";import"./Group-DvDunJNi.js";import"./Input-eUUGTdC3.js";import"./useTextField-CpCpLcdr.js";import"./useFormReset-CfNbS0Tm.js";import"./useFormValidation-pe71fieX.js";import"./AlertText-D9s0hTSb.js";import"./AlertIcon-CyL6LR1b.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
