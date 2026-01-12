import{r as x,j as r}from"./iframe-Ca6Y6Qbd.js";import{b as p,u as f,F as h,t as S}from"./Form-BzkK98Z8.js";import{L as i}from"./Label-BiOSulbp.js";import{R as b,S as j}from"./ResetButton-C16fmyxf.js";import{B as t}from"./Button-Cmpvhu71.js";import{S as g}from"./Section-DDmZgP0d.js";import{A as E}from"./ActionGroup-DteDdq98.js";import{s as F}from"./Action-BHbL3yoQ.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-7ZJpR7fc.js";import{F as L}from"./FieldError-Btuc_7Om.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CaH7ifbO.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./clsx-B-dksMZM.js";import"./index-dqS1_mS3.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./context-BSVjMcq9.js";import"./browser-CbMIui3y.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-oMJsQOKa.js";import"./utils-CgPiupY7.js";import"./Hidden-B5n9q6va.js";import"./useRef-Cv9XEJ0w.js";import"./IconWarning-DE1Emhrq.js";import"./remote-B__m5VQE.js";import"./Text-BEUemzSa.js";import"./EmulatedBoldText-B497YwdM.js";import"./Text-XI5tIYL5.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BwNAbkAI.js";import"./ProgressBar-CbWR67C5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DSKkVaVQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-7njUzVdk.js";import"./useFocus-YlOppDM-.js";import"./useFocusRing-DB26dgIQ.js";import"./useFocusable-DsA9Nlin.js";import"./ContextMenuSection-Dxs1x_rP.js";import"./Dialog-B1e_uHMT.js";import"./RSPContexts-CuMU_eQB.js";import"./OverlayArrow-BonLfIYe.js";import"./useControlledState-CsFJYMR6.js";import"./Collection-C7E6DkxT.js";import"./CollectionBuilder-CQicpO9a.js";import"./SelectionIndicator-Cqdhise0.js";import"./Separator-BkDE-Ve8.js";import"./SelectionManager-08rbWnYj.js";import"./useEvent-CONOGrCj.js";import"./useCollator-BHsGRBEt.js";import"./FocusScope-g3u6sbgU.js";import"./VisuallyHidden-DA0DNDbd.js";import"./getActionGroupSlot-DZQMPipw.js";import"./useStatic-CLFM6Rz8.js";import"./context-BIxaIE9W.js";import"./FieldDescription-CPhIvjGD.js";import"./Tooltip-DErBWCpz.js";import"./ContextualHelpTrigger-C-tpRNIq.js";import"./Popover-DUAQfyPS.js";import"./useOverlayController-D-zjYsKH.js";import"./OverlayContextProvider-Bf0QUNhT.js";import"./OverlayTrigger-ONQN5d76.js";import"./Heading-CiyOEL28.js";import"./Heading-CtfKFM99.js";import"./useFieldComponent-Drxg4ucu.js";import"./useControlledHostValueProps-DPBYxvo9.js";import"./TextField-Dn0ILkoc.js";import"./FieldError-DTh-affr.js";import"./Form-DvyEl8-X.js";import"./Group-DMrJjXdW.js";import"./Input-zU6xkduX.js";import"./useTextField-DJ9r6KnP.js";import"./useFormReset-QXLzcWbc.js";import"./useFormValidation-CFRjiWi1.js";import"./AlertText-PH5mi2hk.js";import"./AlertIcon-CE0IjQiw.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},se={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const ie=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,ie as __namedExportsOrder,se as default};
