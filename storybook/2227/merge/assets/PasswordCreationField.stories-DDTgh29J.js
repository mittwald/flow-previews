import{r as x,j as r}from"./iframe-XJIuIQsX.js";import{b as p,u as f,F as h,t as S}from"./Form-DR-KRktv.js";import{L as i}from"./Label-CRXdwP8g.js";import{R as b,S as j}from"./ResetButton-BrV1pp9P.js";import{B as t}from"./Button-B3qcLgg7.js";import{S as g}from"./Section-ec-jB7Az.js";import{A as E}from"./ActionGroup-CXEtNV5m.js";import{s as F}from"./Action-Dpd9i1rx.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-DEL-id3Z.js";import{F as L}from"./FieldError-CSSPElPx.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BLJCE7jR.js";import"./flowComponent-BaQJj-Fe.js";import"./index-BFrTfb9P.js";import"./clsx-B-dksMZM.js";import"./index-D1QpPuaY.js";import"./useLocalizedStringFormatter-CdJGeOAf.js";import"./context-DW91oCRu.js";import"./browser-BhoN5hvb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-1nVOodib.js";import"./utils-OSbsBMtV.js";import"./Hidden-CYqdvOeA.js";import"./useRef-Co0EoVoZ.js";import"./IconWarning-Dh1UuZN-.js";import"./remote-Ep0bJUq6.js";import"./Text-CrMkSLGe.js";import"./EmulatedBoldText-CPYC_Ehx.js";import"./Text-CQ_rpqob.js";import"./LoadingSpinner-CuoS48qC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BAG3sHuP.js";import"./ProgressBar-BrwhHLJj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1JuXYfT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DEhEh88f.js";import"./useFocus-CATpB0h3.js";import"./useFocusRing-CeYeFZfu.js";import"./useFocusable-DTUbS3BZ.js";import"./ContextMenuSection-Bgb904Cq.js";import"./Dialog-DrSVAvJg.js";import"./RSPContexts-CKZ7RQV4.js";import"./OverlayArrow-Coj8W95X.js";import"./useControlledState-B6b60Ty3.js";import"./Collection-DBAq6tm-.js";import"./CollectionBuilder-DFJ49rUK.js";import"./SelectionIndicator-rwMeyIsD.js";import"./Separator-5XoV32yu.js";import"./SelectionManager-BTpprE_r.js";import"./useEvent-c3AV6770.js";import"./useCollator-pMxc4jG8.js";import"./FocusScope-XmTgMg9O.js";import"./VisuallyHidden-ClcaDoKJ.js";import"./getActionGroupSlot-Cw46BERC.js";import"./useStatic-Badjbl0n.js";import"./context-BdOjCQgT.js";import"./FieldDescription-C4dINrt8.js";import"./Tooltip-mOhxnYiI.js";import"./ContextualHelpTrigger-Bw1CRfMm.js";import"./Popover-OQKS3awK.js";import"./useOverlayController-Bcgt-d4I.js";import"./OverlayContextProvider-C-39O9JG.js";import"./OverlayTrigger-CKuY1bLi.js";import"./Heading-M0mrZOb3.js";import"./Heading-BJR3kI60.js";import"./useFieldComponent-HT5XfbIG.js";import"./useControlledHostValueProps-Dc265rjM.js";import"./TextField-DKJWTYYh.js";import"./FieldError-oVAZyPGl.js";import"./Form-BZYlLUUP.js";import"./Group-CYE-HYpS.js";import"./Input-CQdNUZHp.js";import"./useTextField-DQN1AJHT.js";import"./useFormReset-_i9wmexA.js";import"./useFormValidation-DwGL1Z7V.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},oe={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const te=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,te as __namedExportsOrder,oe as default};
