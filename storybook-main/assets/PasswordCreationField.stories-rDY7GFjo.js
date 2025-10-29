import{r as b,j as r}from"./iframe-BFuSR0CY.js";import{a as c,u as f,F as h,t as w}from"./Form-CHCtd8Yh.js";import{L as i}from"./Label-Bzfu9tdI.js";import{B as o}from"./Button-B8_RMB4T.js";import{S as P}from"./Section-D9YHwW4r.js";import{A as j}from"./ActionGroup-D5-F9zXz.js";import{s as F}from"./Action-BBEtKGm4.js";import{d as y,O as g,P as n,n as t,r as B}from"./PasswordCreationField-DEB8fSwh.js";import{e as S}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{F as E}from"./useFieldComponent-DvAk7ROg.js";import"./index-nuYtCEEu.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./clsx-B-dksMZM.js";import"./index-D8dET2XL.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./context-6pf_efel.js";import"./browser-h3r-jBf1.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dl8lfN0K.js";import"./utils-CEuw8CkJ.js";import"./Hidden-BoaT9a_j.js";import"./IconWarning-BDLPxpKm.js";import"./Text-BXhKPUqX.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./Text-CVe1O8QA.js";import"./LoadingSpinner-CF0vj0R_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CV2egPhG.js";import"./ProgressBar-D1Sp6uIf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DzVjSD7h.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYMimxLy.js";import"./useFocus-Dfi_0tQM.js";import"./useFocusRing-CdpePOyD.js";import"./useFocusable-Or0L-1Mb.js";import"./ContextMenuSection-DOizDCjF.js";import"./Dialog-D9CJ_WbB.js";import"./RSPContexts-Df5wrtNL.js";import"./OverlayArrow-wdl515fE.js";import"./useControlledState-Y8_jrThy.js";import"./Collection-C9ImqwdO.js";import"./CollectionBuilder-ZO6bxSPM.js";import"./SelectionIndicator-DEvuKTnp.js";import"./Separator-BLwDKZm_.js";import"./SelectionManager-DrJQTmKT.js";import"./useEvent-D6E-W8z_.js";import"./useCollator-D7Ttiyl_.js";import"./FocusScope-Dzg120-u.js";import"./VisuallyHidden-_YfAavcM.js";import"./dynamic-BFfatATg.js";import"./getActionGroupSlot-C1e95e1F.js";import"./useStatic-BcQq_-tU.js";import"./context-CFFRtyxF.js";import"./Group-ln6N3sDl.js";import"./Input-Dy1mfW1m.js";import"./TextField-CuNLH0lz.js";import"./Form-CopJ-XT2.js";import"./useTextField-DzB7yg8E.js";import"./useFormReset-CMQHaKTN.js";import"./useFormValidation-Dt4bKs4p.js";import"./FieldDescription-DReTe5UI.js";import"./Tooltip-_6ZohaIC.js";import"./ClearPropsContextView-BzCLuTLO.js";import"./ClearPropsContext-DVOTNhZJ.js";import"./ReactAriaControlledValueFix-CD5iZKpR.js";import"./ContextualHelpTrigger-C_PjFtWq.js";import"./Popover-DHySGxM6.js";import"./OverlayContextProvider-CfKGEq1m.js";import"./OverlayTrigger-CApgQhCu.js";import"./ControlledNotification-4GKhJW90.js";import"./Heading-CGhPkmp1.js";import"./Heading-BHjkLbk1.js";import"./useManagedValue-DQtRhby5.js";import"./react-children-utilities-705z1kI6.js";const C=(e=y)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[B.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Xr={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:"Jo dwag a password is required!"},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(j,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:C(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        validate: generatePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const $r=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,$r as __namedExportsOrder,Xr as default};
