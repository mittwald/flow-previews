import{r as x,j as r}from"./iframe-DCel2PhG.js";import{a as p,u as f,F as h,R as b,S as j,t as S}from"./ResetButton-Bo6dOnRX.js";import{L as i}from"./Label-DVkF56bm.js";import{B as t}from"./Button-CjhaH8vt.js";import{S as g}from"./Section-BGkAXCBO.js";import{A as E}from"./ActionGroup-BLs0BWGb.js";import{s as F}from"./ActionBatch-BNnkW8Wa.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-BfCfrTdH.js";import{F as L}from"./FieldError-DI0hFked.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CoRoJ1gY.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./clsx-B-dksMZM.js";import"./index-DcvCSlSd.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./context-ChvTJ1gc.js";import"./ActionGroupView-4YYVwVM7.js";import"./Content-B1u41BWn.js";import"./Heading-DPAdBgTw.js";import"./Heading-Cs7GlIOt.js";import"./RSPContexts-BWRH8UQz.js";import"./utils-jFfJrK0I.js";import"./Text-CfcNN3C1.js";import"./browser-ChoxEgkm.js";import"./EmulatedBoldText-6uMsyrU3.js";import"./Text-H5k4jR7L.js";import"./Modal-V5k8QPuM.js";import"./useOverlayController-BAgKybrq.js";import"./useStatic-Gj7JsFzP.js";import"./Overlay-LFamQv73.js";import"./OverlayContextProvider-BfHmVY35.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./IconWarning-CNMqfC0c.js";import"./remote-MfAOzJwE.js";import"./Dialog-BnrJ3EGg.js";import"./Button-Dbr1_oBf.js";import"./ProgressBar-COcMCNPc.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-V0mABmwM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-l6QeQysM.js";import"./useFocus-BSXyJlKK.js";import"./useFocusRing-D6latAqm.js";import"./useFocusable-CF_X-2Wu.js";import"./OverlayArrow-BUpR8Z4Q.js";import"./useControlledState-uXSCouXp.js";import"./Collection-Mm3AtcTx.js";import"./CollectionBuilder-CIgtGDmA.js";import"./SelectionIndicator-DYHfPyq2.js";import"./Separator-BB0Sm4E2.js";import"./SelectionManager-CIJEtr4-.js";import"./useEvent-CN9vdLun.js";import"./useCollator-qJfX3fiN.js";import"./FocusScope-BrLtMtFa.js";import"./VisuallyHidden-giqV-lwH.js";import"./ButtonView--o7XYYP5.js";import"./Flex-tHl6Xyli.js";import"./useRef-C3FTlCPC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DVvHUSFD.js";import"./getActionGroupSlot-BM5R5I3-.js";import"./FieldDescription-ChM1MP2a.js";import"./Tooltip-C2shJgFN.js";import"./ContextualHelpTrigger-bHjB4hdv.js";import"./Popover-C8zyal55.js";import"./OverlayTrigger-BYr1biz5.js";import"./useFieldComponent-CWMmv0d5.js";import"./useControlledHostValueProps-DRZV2yGu.js";import"./TextField-CrSgtVMY.js";import"./FieldError-QICB5hyW.js";import"./Form-BsISnRaP.js";import"./Group-yuR7pI6G.js";import"./Input-D8WhG3Nd.js";import"./useTextField-C88_NvvV.js";import"./useFormReset-DvzBERJE.js";import"./useFormValidation-CVEw0jVb.js";import"./AlertText-CGICoaW7.js";import"./AlertIcon-C6GnHejw.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ae={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const me=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,me as __namedExportsOrder,ae as default};
