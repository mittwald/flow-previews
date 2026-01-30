import{r as x,j as r}from"./iframe-BIoFjWpr.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-MQWJL61W.js";import{L as i}from"./Label-D-wfWBos.js";import{B as t}from"./Button-60lZfz3H.js";import{S as g}from"./Section-DckT0YJI.js";import{A as E}from"./ActionGroup-BEBqOCwY.js";import{s as F}from"./Action-CpJIOnVf.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-BtzUOH5l.js";import{F as L}from"./FieldError-CY5Rdgwt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BzebB2lX.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./clsx-B-dksMZM.js";import"./index-h2cI_GQ2.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./context-CeBhVpDW.js";import"./useRef-DU35bVT5.js";import"./utils-DZ7CVsEQ.js";import"./ButtonView-D8SKXTBC.js";import"./browser-BAGCYS_p.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./IconWarning-EC1k16Yv.js";import"./remote-CdlQwHLV.js";import"./Text-Dw86EjFX.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./Text-DporVAh2.js";import"./LoadingSpinner-B_0T51TC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9bxiqwiQ.js";import"./ProgressBar-gq9TT67v.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIJOcLbZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Uox4pFjd.js";import"./useFocus-CQPopARV.js";import"./useFocusRing-C05eNqGk.js";import"./useFocusable-CwNae-cD.js";import"./ContextMenuSection-D04Tf7Yh.js";import"./Dialog-khxuiED6.js";import"./RSPContexts-TtAa_5CI.js";import"./OverlayArrow-BK2hFoQS.js";import"./useControlledState-A9PECuda.js";import"./Collection-aRoAI_rd.js";import"./CollectionBuilder-DVbi1VxZ.js";import"./SelectionIndicator-DDosGdOa.js";import"./Separator-CBKzJJ-r.js";import"./SelectionManager-CEROFblv.js";import"./useEvent-GmwJ1EXB.js";import"./useCollator-2eiQlCLN.js";import"./FocusScope-DZU3T--c.js";import"./VisuallyHidden-iLNm3MD9.js";import"./getActionGroupSlot-NgI5MKDv.js";import"./useStatic-BOUdEr4J.js";import"./context-Bujl8L45.js";import"./FieldDescription-CmT-44YL.js";import"./Tooltip-C9gBBqKv.js";import"./ContextualHelpTrigger-JoEqeQ00.js";import"./Popover-BZLukQkr.js";import"./useOverlayController-OHHrE_gT.js";import"./OverlayContextProvider-BXZ1bgu-.js";import"./OverlayTrigger-DP9QTZiV.js";import"./Heading-CdczJAyy.js";import"./Heading-DvZsP83m.js";import"./useFieldComponent-DpF862rt.js";import"./useControlledHostValueProps-DbQDLAPx.js";import"./TextField-D2l0jW9W.js";import"./FieldError-3U-LgGLS.js";import"./Form-BlXCmAsm.js";import"./Group-kc9AGw0Y.js";import"./Input-D2aCw11E.js";import"./useTextField-BXYStOBz.js";import"./useFormReset-DTiYdK4X.js";import"./useFormValidation-5Xewoqko.js";import"./AlertText-CqfZMgA0.js";import"./AlertIcon-CufExgwJ.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
