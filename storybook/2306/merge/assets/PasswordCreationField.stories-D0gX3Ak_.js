import{r as x,j as r}from"./iframe-BwTc9KkQ.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-DnBeQq07.js";import{L as i}from"./Label-BbbV6hPu.js";import{B as t}from"./Button-Ckvz-MCb.js";import{S as g}from"./Section-C6exBiSb.js";import{A as E}from"./ActionGroup-DFlQAehv.js";import{s as F}from"./Action-BhNW5Llg.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-B5DSYALy.js";import{F as L}from"./FieldError-BhKB-hqh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BE4DvzFx.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./clsx-B-dksMZM.js";import"./index-C6-tpPRF.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./context-BwyA9HG-.js";import"./useRef-sbMflI1L.js";import"./utils-CBQcEIVx.js";import"./ButtonView-BIDw_mr1.js";import"./browser-vKZ8hCbx.js";import"./Label.module-CUYTf9Jc.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./IconWarning-CuEgZ9GS.js";import"./remote-B0txjFXx.js";import"./Text-Gc4XBNKO.js";import"./EmulatedBoldText-nz1iuJug.js";import"./Text-DngMYAZH.js";import"./LoadingSpinner-lc_9xcB8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqSxrgNL.js";import"./ProgressBar-CaYu3rjO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BSSuBv8C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CJeMKVhz.js";import"./useFocus-BpPHYutm.js";import"./useFocusRing-DolIE8eq.js";import"./useFocusable-B00zaX18.js";import"./ContextMenuSection-LW48IjXN.js";import"./Dialog-DfJHDuJ2.js";import"./RSPContexts-DUJ8CZ2M.js";import"./OverlayArrow-DC7WkuhA.js";import"./useControlledState-DJoARPq6.js";import"./Collection-Dw9lmv_g.js";import"./CollectionBuilder-O788RXXq.js";import"./SelectionIndicator-CWwUcpBG.js";import"./Separator-DSMZMwnt.js";import"./SelectionManager-BszBT5Go.js";import"./useEvent-DNrOKzwb.js";import"./useCollator-D6rhmeJa.js";import"./FocusScope-D13mvD2r.js";import"./VisuallyHidden-BgOZVVaM.js";import"./getActionGroupSlot-CPP3dnXc.js";import"./useStatic-D7wzuZGA.js";import"./context-BTkxUDR7.js";import"./FieldDescription-B41gpymH.js";import"./Tooltip-BeTjs40R.js";import"./ContextualHelpTrigger-D7X_sSt5.js";import"./Popover-BUM7xHoq.js";import"./useOverlayController-DcbIZot8.js";import"./OverlayContextProvider-aDhVlP4w.js";import"./OverlayTrigger-D7e37rU3.js";import"./Heading-DdwcYqWJ.js";import"./Heading-DshP_5_D.js";import"./useFieldComponent-D1bp3yFp.js";import"./useControlledHostValueProps-CGmEN8BG.js";import"./TextField-D8A2fYJW.js";import"./FieldError-B40__s1G.js";import"./Form-CXxVDbS0.js";import"./Group-BaqfBrUe.js";import"./Input-C8bkJupR.js";import"./useTextField-CS5fspsv.js";import"./useFormReset-38634gnl.js";import"./useFormValidation-BAeTIVc2.js";import"./AlertText-tZCm05zF.js";import"./AlertIcon-B9dP4NVD.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
