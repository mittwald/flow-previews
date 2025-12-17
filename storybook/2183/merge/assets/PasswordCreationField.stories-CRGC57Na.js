import{r as x,j as r}from"./iframe-BJ1-yygM.js";import{u as c,F as f}from"./Form-BPGCmo5L.js";import{L as i}from"./Label-bQxZtSdp.js";import{F as h,t as S}from"./Field-CVD51OnP.js";import{B as t}from"./Button-Cjtrvck7.js";import{S as g}from"./Section-bElmBl_A.js";import{A as E}from"./ActionGroup-eYecTP4S.js";import{s as F}from"./Action-BvXzPu3R.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-fyeVx1sP.js";import{F as L}from"./FieldError-lhJwSH7g.js";import{R as b}from"./ResetButton-BLz3Cm6N.js";import{S as j}from"./SubmitButton-YaRbcpMV.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DT5Kx7EO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ1h1TR6.js";import"./index-Du7YS11i.js";import"./index-BJaBKPR5.js";import"./useLocalizedStringFormatter-C5JOLvkZ.js";import"./context-CjOncL0b.js";import"./Label-CzmfrLRz.js";import"./utils-CcDDSJ_p.js";import"./Hidden-DoQenIIt.js";import"./dynamic-80JeIFF7.js";import"./IconChevronDown-CrWkAVaz.js";import"./remote-CmT8aojC.js";import"./IconX-n5-6JmhA.js";import"./IconCheck-B4qlzGu9.js";import"./Text-DheJl8Kj.js";import"./EmulatedBoldText-DCklMUI5.js";import"./Text-CgGmMVxG.js";import"./LoadingSpinner-Bwp7e6t0.js";import"./ariaLive-C1jz4QjY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DhOdN5WZ.js";import"./ProgressBar-M3cNuExw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C_0uKhPF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqKRozC0.js";import"./useFocus-BC8nQK7S.js";import"./useFocusRing-D91RCqts.js";import"./useFocusable-CM2LayHg.js";import"./ContextMenuSection-D1y8_-WQ.js";import"./lib-90ocxLs-.js";import"./Dialog-e6B9GMJE.js";import"./RSPContexts-50ouH6ts.js";import"./OverlayArrow-C2s0LJSp.js";import"./useControlledState-CbxGCAex.js";import"./Collection-BVEk6ex7.js";import"./CollectionBuilder-CVOjzY3Z.js";import"./SelectionIndicator-OOMR3Qmo.js";import"./Separator-CwS8pNTz.js";import"./SelectionManager-cQe1qOty.js";import"./useEvent-BqUxelCP.js";import"./useCollator-DQ7H9sze.js";import"./FocusScope-CXPBJiEJ.js";import"./VisuallyHidden-BOLsTiDm.js";import"./getActionGroupSlot-0vgdHqUy.js";import"./useStatic-hN62Mrr5.js";import"./context-C5k-fmhI.js";import"./FieldDescription-Rja0j7vU.js";import"./Tooltip-CQXc8T3n.js";import"./TranslationProvider-B_loSML2.js";import"./IconCircleCheck-BFEG22El.js";import"./ContextualHelpTrigger-UT1RMToZ.js";import"./Popover-BUtdYAK1.js";import"./OverlayContextProvider-Dkf9ZMKi.js";import"./useOverlayController-DHl1wDZH.js";import"./OverlayTrigger-5palw4T3.js";import"./IconInfo-D8-cEu7p.js";import"./Heading-D6aYHOG-.js";import"./Heading-CdNRKyim.js";import"./useFieldComponent-CZz1dHQJ.js";import"./useControlledHostValueProps-eN6I3MnG.js";import"./TextField-sX1L9nh_.js";import"./FieldError-6-KO0iYn.js";import"./Form-BhOz7HsW.js";import"./Group-D63yskOW.js";import"./Input-BS77WJBr.js";import"./useTextField-Cjm7LB6I.js";import"./useFormReset-DyV6pE3E.js";import"./useFormValidation-tUUfdeof.js";import"./IconDanger-CYKvK3jT.js";import"./useRef-TDnYH5OC.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:h,render:()=>{const e=async s=>{await F(1e3),O(s)},a=c({defaultValues:{user:""}}),m=S();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(h,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
