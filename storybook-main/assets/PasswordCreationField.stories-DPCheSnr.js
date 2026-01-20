import{r as x,j as r}from"./iframe-Q1VSciNm.js";import{b as p,u as f,F as h,t as S}from"./Form-By36tU3G.js";import{L as i}from"./Label-CSNGUTYQ.js";import{R as b,S as j}from"./ResetButton-C1v5iCxV.js";import{B as t}from"./Button-BkL5LUHK.js";import{S as g}from"./Section-vwMkFMln.js";import{A as E}from"./ActionGroup-BD4CHJoH.js";import{s as F}from"./Action-DYNAwBsP.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-DTw2jRuU.js";import{F as L}from"./FieldError-RY9dMzjY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-3r4dJt.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./clsx-B-dksMZM.js";import"./index-C3b6LhZY.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./context-BLO98TmC.js";import"./browser-DUAAaQNQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DHpNBk6c.js";import"./utils-Cfx54F97.js";import"./Hidden-XjRrgtIh.js";import"./useRef-CjXrhFY-.js";import"./IconWarning-Bp2wXPUs.js";import"./remote-B8jFwJ6r.js";import"./Text-1lLVDQct.js";import"./EmulatedBoldText-Bq17Dbi4.js";import"./Text-FwHfWGj4.js";import"./LoadingSpinner-CTh5kqiZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-42pr8eMu.js";import"./ProgressBar-BibYjS7R.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B4QM81Mz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CkY15rDX.js";import"./useFocus-Dgy1zF73.js";import"./useFocusRing-oK86YNHq.js";import"./useFocusable-BFiW_6Mc.js";import"./ContextMenuSection-DbRI5vVv.js";import"./Dialog-ib05FTRH.js";import"./RSPContexts-MtiuAHte.js";import"./OverlayArrow-vyusEtHs.js";import"./useControlledState-Cr50bzxN.js";import"./Collection-Dj4b01oP.js";import"./CollectionBuilder-D4fjBWoV.js";import"./SelectionIndicator-BJwzvmKN.js";import"./Separator-C0Z-5W1p.js";import"./SelectionManager-QcgbohAp.js";import"./useEvent-B6bvG52n.js";import"./useCollator-Dn5lVtzm.js";import"./FocusScope-BLxdUf1u.js";import"./VisuallyHidden-btJzxMJm.js";import"./getActionGroupSlot-gyV-83t6.js";import"./useStatic-DcS9SWFS.js";import"./context-xTt93I09.js";import"./FieldDescription-CuqQgw1Y.js";import"./Tooltip-DSmChc5e.js";import"./ContextualHelpTrigger-C9lRXKTV.js";import"./Popover-D68emFpc.js";import"./useOverlayController-CoiqP3F-.js";import"./OverlayContextProvider-y6JRCx08.js";import"./OverlayTrigger-DzAIUhz9.js";import"./Heading-D8FX4Qh8.js";import"./Heading-BIQD_zbY.js";import"./useFieldComponent-1pDy4PKz.js";import"./useControlledHostValueProps-Np1uUgIf.js";import"./TextField-DJTUJYn-.js";import"./FieldError-QjdNZ-FN.js";import"./Form-rX7Gw7MM.js";import"./Group-CKcbXsxe.js";import"./Input-a5vdzoE4.js";import"./useTextField-DunWRHOY.js";import"./useFormReset-C0YD-aRq.js";import"./useFormValidation-DIYVKRGL.js";import"./AlertText-D1OEnaPR.js";import"./AlertIcon-C25ddq9s.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},se={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
