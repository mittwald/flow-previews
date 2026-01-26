import{r as x,j as r}from"./iframe-BZLAsPNC.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-Buihhz8x.js";import{L as i}from"./Label-DKRPZs6o.js";import{B as t}from"./Button-CSRJ_rM3.js";import{S as g}from"./Section-CMyrzkHY.js";import{A as E}from"./ActionGroup-Co14a4VD.js";import{s as F}from"./Action-mWe4s719.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-CxMx8RY3.js";import{F as L}from"./FieldError-D2O_dT2D.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DRBl70hS.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./clsx-B-dksMZM.js";import"./index-CYjhUmDO.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./context-B1QKiSyt.js";import"./useRef-CZJNdnDd.js";import"./utils-GBJhPEt0.js";import"./ButtonView-DfyaGCHA.js";import"./browser-D75BLayN.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./IconWarning-BRgKnpuG.js";import"./remote-DD9qKW4I.js";import"./Text-oqqebshB.js";import"./EmulatedBoldText-i2HM1out.js";import"./Text-C0MYo1gI.js";import"./LoadingSpinner-BfzFiOBJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YUsFH9mL.js";import"./ProgressBar-DjUlq4Bp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DAhF5fA-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C3AJe8l0.js";import"./useFocus-BAbXgSuO.js";import"./useFocusRing-DUiko_nB.js";import"./useFocusable-CJlLttAU.js";import"./ContextMenuSection-B5_hjl5E.js";import"./Dialog-BHTl5ZpY.js";import"./RSPContexts-DRyX1L5k.js";import"./OverlayArrow-D53qTIEL.js";import"./useControlledState-BdOl-nfx.js";import"./Collection-oaJ1OlFu.js";import"./CollectionBuilder-DNc7feWH.js";import"./SelectionIndicator--Gts2DGf.js";import"./Separator-kzi7KXEN.js";import"./SelectionManager-SkouX_in.js";import"./useEvent-BRYkpDGi.js";import"./useCollator-CueQXTCK.js";import"./FocusScope-BleEWu6g.js";import"./VisuallyHidden-B55KrhOv.js";import"./getActionGroupSlot-SLjFrrTu.js";import"./useStatic-CJRmLxnl.js";import"./context-Wd_RxxmY.js";import"./FieldDescription-Dh69MaGI.js";import"./Tooltip-6SDKyh7G.js";import"./ContextualHelpTrigger-LgV73S23.js";import"./Popover-aQEA2L0G.js";import"./useOverlayController-C7H6e68I.js";import"./OverlayContextProvider-BlSJPydV.js";import"./OverlayTrigger-CosWzk9C.js";import"./Heading-CmA86V_y.js";import"./Heading-Bg25gZBW.js";import"./useFieldComponent-C5gewvzz.js";import"./useControlledHostValueProps-D32lW-Mj.js";import"./TextField-BKV_Y9qx.js";import"./FieldError-B9G53mk8.js";import"./Form-CDvikIHs.js";import"./Group-D7D0OI93.js";import"./Input-av1t-akK.js";import"./useTextField-BnHH6rYj.js";import"./useFormReset-B4usOE4z.js";import"./useFormValidation-BLPWS9Vb.js";import"./AlertText-DgwQ_4kg.js";import"./AlertIcon-wpFTQr76.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
