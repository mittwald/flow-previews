import{r as x,j as r}from"./iframe-CJFOFCad.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-BkgcDrX7.js";import{L as i}from"./Label-DpG9gbVN.js";import{B as t}from"./Button-D5kumnA4.js";import{S as g}from"./Section-CCwmV9uG.js";import{A as E}from"./ActionGroup-B-ixDo6k.js";import{s as F}from"./Action-Vq-tbHvg.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-cq5rJ1xL.js";import{F as L}from"./FieldError-Dc2Z54jn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfulQ7wG.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./clsx-B-dksMZM.js";import"./index-Cu9s0VFH.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./context-CMyux8LD.js";import"./useRef-B-LbwbXp.js";import"./utils-CsQ8IQtm.js";import"./ButtonView-BS0xOJCI.js";import"./browser-C8kWAWSZ.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./IconWarning-1TKJLzWG.js";import"./remote-BxHvJS68.js";import"./Text-CI7VZqhd.js";import"./EmulatedBoldText-BF5DLBnT.js";import"./Text-8vym_gVd.js";import"./LoadingSpinner-CM8bIOhN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BaNQUerH.js";import"./ProgressBar-D1JMQZ2r.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cb3KoAb3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NyliDXf7.js";import"./useFocus-Cgy8euA9.js";import"./useFocusRing-wbIo7ugc.js";import"./useFocusable-13L7602I.js";import"./ContextMenuSection-C56vs4OS.js";import"./Dialog-YkcYiA7q.js";import"./RSPContexts-CNS2UWja.js";import"./OverlayArrow-DEHMSq9h.js";import"./useControlledState-DvHOpAD3.js";import"./Collection-B9y5YoW-.js";import"./CollectionBuilder-Dz6WVvJx.js";import"./SelectionIndicator-BI4debiO.js";import"./Separator-CS0DDWqc.js";import"./SelectionManager-DYEiw_sj.js";import"./useEvent-Bx7Hxhw9.js";import"./useCollator-DYyzym3S.js";import"./FocusScope-BYRCsx--.js";import"./VisuallyHidden-CZLhXAB_.js";import"./getActionGroupSlot-MsF1cFZX.js";import"./useStatic-C0hf5llT.js";import"./context-DTASnmZz.js";import"./FieldDescription-8OICn3TI.js";import"./Tooltip-B0L7BzP_.js";import"./ContextualHelpTrigger-DPZeT7jF.js";import"./Popover-Bd7FtJNb.js";import"./useOverlayController-BwJW5xew.js";import"./OverlayContextProvider-DL2zELSv.js";import"./OverlayTrigger-ByPpL00z.js";import"./Heading-BkdVO0Fc.js";import"./Heading-DOJDeA1a.js";import"./useFieldComponent-CVIwC-Yy.js";import"./useControlledHostValueProps-B-yVA_IL.js";import"./TextField-CtInFNLD.js";import"./FieldError-B3-rgjm7.js";import"./Form-B3lCmY-S.js";import"./Group-DiioWKhA.js";import"./Input-BgsLbNjC.js";import"./useTextField-DDOj-p7O.js";import"./useFormReset-DXleDB5s.js";import"./useFormValidation-DcThlYcg.js";import"./AlertText-BB2MdEuH.js";import"./AlertIcon-BfQxSvrI.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
