import{r as x,j as r}from"./iframe-C3qryY9m.js";import{u as c,F as f}from"./Form-Dzh9-M4k.js";import{L as i}from"./Label-C-0JfuKv.js";import{F as h,t as S}from"./Field-C5YwXwEF.js";import{B as t}from"./Button-DjS8Y37J.js";import{S as g}from"./Section-r39qLNYF.js";import{A as E}from"./ActionGroup-pX8NZfE-.js";import{s as F}from"./Action-BLUuMHcv.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-BR2RnxOE.js";import{F as L}from"./FieldError-2lUipCQG.js";import{R as b}from"./ResetButton-f8kamCMI.js";import{S as j}from"./SubmitButton-DNmC6Pyz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-7Ut6r0Ca.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./index-BCGSECUV.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./context-Dn-XBzeE.js";import"./Label-CyYSEd83.js";import"./utils-DpUn2o29.js";import"./Hidden-ft2VLnDU.js";import"./dynamic-B40s9Zwa.js";import"./IconApp-CHP_d6TO.js";import"./remote-C56XpJ0V.js";import"./IconX-BtmXIBsH.js";import"./IconCheck-DRxnKso5.js";import"./Text-D-8m5QW2.js";import"./EmulatedBoldText-BhqmPl42.js";import"./Text-ugyEWZ3z.js";import"./LoadingSpinner-D_zbcCDn.js";import"./ariaLive-DbWlUYfw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DXnGr114.js";import"./ProgressBar-D4KqjXjU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQT2EQei.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gRpVWz6L.js";import"./useFocus-BlyEGXer.js";import"./useFocusRing-GVTVCbky.js";import"./useFocusable-B6lNdGau.js";import"./ContextMenuSection-BM6PTmuP.js";import"./lib-90ocxLs-.js";import"./Dialog-eOuJy3Tw.js";import"./RSPContexts-DdcVv8cM.js";import"./OverlayArrow-CC04FrS6.js";import"./useControlledState-D6tzoGpH.js";import"./Collection-CWTLjfsE.js";import"./CollectionBuilder-1df9N_mD.js";import"./SelectionIndicator-Cnczr7tl.js";import"./Separator-Ccf3ET9r.js";import"./SelectionManager-BRiRdz2V.js";import"./useEvent-DVkloeR1.js";import"./useCollator-WS3ME5vT.js";import"./FocusScope-DBhIZEy-.js";import"./VisuallyHidden-CRCUMBi1.js";import"./getActionGroupSlot-BQTW5J-Z.js";import"./useStatic-CxeJCkNi.js";import"./context-BBcvZ-pJ.js";import"./FieldDescription-fqGYoTDI.js";import"./Tooltip-DLc4fcJY.js";import"./TranslationProvider-Dn6WBep5.js";import"./IconCircleCheck-0UPAfc84.js";import"./ContextualHelpTrigger-7Y4yxSdb.js";import"./Popover-DdsS2BWk.js";import"./OverlayContextProvider-VRFY-eRQ.js";import"./useOverlayController-DqQbDVt2.js";import"./OverlayTrigger-IQRhRthi.js";import"./IconInfo-DqIIvtum.js";import"./Heading-DVuRKGIc.js";import"./Heading-DglVJtml.js";import"./useFieldComponent-BCb9qeqT.js";import"./useControlledHostValueProps-RAl4dK1J.js";import"./TextField-D4EaxVx1.js";import"./FieldError-Bjrpvc0X.js";import"./Form-3X5C6e4Q.js";import"./Group-BEZrTaXd.js";import"./Input-BWLNXNeV.js";import"./useTextField-CfZJHhZI.js";import"./useFormReset-CU22rOa5.js";import"./useFormValidation-DvJkknbD.js";import"./IconDanger-CnINUXvw.js";import"./useRef-IOGWkLv5.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:h,render:()=>{const e=async s=>{await F(1e3),O(s)},a=c({defaultValues:{user:""}}),m=S();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(h,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ce=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,ce as __namedExportsOrder,pe as default};
