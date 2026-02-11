import{r as x,j as r}from"./iframe-CtuK0rEJ.js";import{a as p,u as f,F as h,R as b,S as j,t as S}from"./ResetButton-BX7hRNPH.js";import{L as i}from"./Label-Cngj9T_J.js";import{B as t}from"./Button-CC2cGGC1.js";import{S as g}from"./Section-2iB_IAde.js";import{A as E}from"./ActionGroup-BTUNgIac.js";import{s as F}from"./Action-PwkWFif3.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-B_72zGLp.js";import{F as L}from"./FieldError-BKJxUnBZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6fOzfTlj.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./clsx-B-dksMZM.js";import"./index-DPf65gvx.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./context-BLHFXQwL.js";import"./useRef-C7qv1QkI.js";import"./utils-C1DNWP44.js";import"./ButtonView-I97CEkNt.js";import"./browser-Up8UMddv.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./IconWarning-BSe4G4Pm.js";import"./remote-DD8nhYq_.js";import"./Text-CyAseKfN.js";import"./EmulatedBoldText-BeUk81Jn.js";import"./Text-DmIZo_mX.js";import"./LoadingSpinner-CJNtrFTB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CSRC_w1a.js";import"./ProgressBar-D8lgnq4k.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DJNpTGh1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Da2cRPrr.js";import"./useFocus-N-Pc0sLJ.js";import"./useFocusRing-Dq2x8hiG.js";import"./useFocusable-AhKszEdS.js";import"./ContextMenuSection-J2A0uHtm.js";import"./Dialog-DqwEKDxA.js";import"./RSPContexts-Ci8ojbfD.js";import"./OverlayArrow-D5uKmzPJ.js";import"./useControlledState-Cc_BEFH0.js";import"./Collection-B0ADhrnF.js";import"./CollectionBuilder-DAn9FB1h.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./Separator-CEf8TdmS.js";import"./SelectionManager-CRpdvIdx.js";import"./useEvent-D8j21rfZ.js";import"./useCollator-BzRay_B5.js";import"./FocusScope-Cm3IhtBV.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./getActionGroupSlot-B6ptHBUs.js";import"./useStatic-M0CnbsK2.js";import"./context-CuLUjLGN.js";import"./FieldDescription-BqM7i6ko.js";import"./Tooltip-DQ7Jfv76.js";import"./ContextualHelpTrigger-Ci-04t-O.js";import"./Popover-fZyy-KqV.js";import"./useOverlayController-B6-IGISv.js";import"./OverlayContextProvider-C66rhlmO.js";import"./OverlayTrigger-Bu3GFQ-B.js";import"./Heading-BbatUer_.js";import"./Heading-BKLVTPfM.js";import"./useFieldComponent-CPjzSNK0.js";import"./useControlledHostValueProps-DO0HHcXX.js";import"./TextField-BZp_AUMa.js";import"./FieldError-AgjktxA6.js";import"./Form-8SXxse9a.js";import"./Group-CRx_nl1e.js";import"./Input-BchQzUPE.js";import"./useTextField-Dry1ib5S.js";import"./useFormReset-C6F9Oqzr.js";import"./useFormValidation-uULaRcd4.js";import"./AlertText-i0FuOWey.js";import"./AlertIcon-CPMEIwAr.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
