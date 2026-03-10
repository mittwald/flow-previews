import{r as x,j as r}from"./iframe-BOfxQ126.js";import{a as p,u as f,F as h,R as b,S as j,t as S}from"./ResetButton-4yrHDRhQ.js";import{L as i}from"./Label-CqRpIaXO.js";import{B as t}from"./Button-y6FeYCBC.js";import{S as g}from"./Section-C6FrpL68.js";import{A as E}from"./ActionGroup-BJX7-2AL.js";import{s as F}from"./ActionBatch-B3OckZQJ.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-BZ72hWLR.js";import{F as L}from"./FieldError-DCo5F_nc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BEImSkKK.js";import"./flowComponent-sv_DULJq.js";import"./index-BJ7B_kXa.js";import"./clsx-B-dksMZM.js";import"./index-X6kmY2GD.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./context-Bpmop-v_.js";import"./ActionGroupView-x-6e1Fyk.js";import"./Content-C0CTBJnI.js";import"./Heading-XWK9z325.js";import"./Heading-t8wVFZ6a.js";import"./RSPContexts-8t9TLuqJ.js";import"./utils-Ca0-H8MP.js";import"./Text-kIO13lDY.js";import"./browser-Ch4oJYG9.js";import"./EmulatedBoldText-LIZTvG-s.js";import"./Text-OoL-eb0_.js";import"./Modal-DHfoMw3X.js";import"./useOverlayController-NqoHBo9l.js";import"./useStatic-DMadDPeg.js";import"./Overlay-D-1f0Sj_.js";import"./OverlayContextProvider-BWPPKQaI.js";import"./LoadingSpinner-BjosoRSs.js";import"./IconWarning-BoBPkWIf.js";import"./remote-DjEyU7NV.js";import"./Dialog-CCDN7DJz.js";import"./Button-6yn426ID.js";import"./ProgressBar-BM4farBg.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5EK40Aa-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-up0eurfY.js";import"./useFocus-CUROCE8M.js";import"./useFocusRing-i6kyKwnh.js";import"./useFocusable-C918yQby.js";import"./OverlayArrow-DOAKdHdF.js";import"./useControlledState-DE1u8yHr.js";import"./Collection-B3wPaI_q.js";import"./CollectionBuilder-D0zf41op.js";import"./SelectionIndicator-DVX-Gi0p.js";import"./Separator-BU8JOY49.js";import"./SelectionManager-ItpN5XhA.js";import"./useEvent-BMn21gml.js";import"./useCollator-CnlvukHk.js";import"./FocusScope-CCHjHw-t.js";import"./VisuallyHidden-DfBCvB4u.js";import"./ButtonView-CgihUfDk.js";import"./Flex-ClQXTQke.js";import"./useRef-ChX_wJCz.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-cxjJtW6K.js";import"./getActionGroupSlot-RLrBfD2i.js";import"./FieldDescription-BJeDAEM1.js";import"./Tooltip-BsnzGYHf.js";import"./ContextualHelpTrigger-DIs850zI.js";import"./Popover-BeNB5A8p.js";import"./OverlayTrigger-ClVCYjM8.js";import"./useFieldComponent-D5YpTCds.js";import"./useControlledHostValueProps-C2Pi2SXC.js";import"./TextField-DZ7UuVf5.js";import"./FieldError-GcSEBXG9.js";import"./Form-CRtfSpWI.js";import"./Group-CfOaYHrv.js";import"./Input-Dk2m6F6l.js";import"./useTextField-B-yXo6Fk.js";import"./useFormReset-B-rsDa9Z.js";import"./useFormValidation-CxieGJiT.js";import"./AlertText-DpLHter-.js";import"./AlertIcon-CIUnjm1o.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ae={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
