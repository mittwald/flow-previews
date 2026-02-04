import{r as x,j as r}from"./iframe-Da9Lw8R_.js";import{a as p,u as f,F as h,t as S,R as b,S as j}from"./ResetButton-DAXeM7OM.js";import{L as i}from"./Label-D7d2SkgN.js";import{B as t}from"./Button-CkcTXATp.js";import{S as g}from"./Section-CjTpAbFV.js";import{A as E}from"./ActionGroup-n4kQwCcc.js";import{s as F}from"./Action-CSMihAu4.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-DPrSPZrN.js";import{F as L}from"./FieldError-DXoqYbez.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-bM8H28Zu.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./clsx-B-dksMZM.js";import"./index-TT_JC2bB.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./context-CsdpTyhd.js";import"./useRef-Dm7IxWdg.js";import"./utils-Cwd4tFKX.js";import"./useOverlayController-DXJN5Feb.js";import"./context-DT0iENXB.js";import"./useStatic-BOFCRskE.js";import"./ButtonView-C0Td427Q.js";import"./browser-DDWH8I0V.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./IconWarning-BYkwpstY.js";import"./remote-CsFbcl9r.js";import"./Text-l_fYsQ08.js";import"./EmulatedBoldText-CVyVzJMR.js";import"./Text-CpGlsQu3.js";import"./LoadingSpinner-DXGsR4uF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CzbwBi45.js";import"./ProgressBar-Chvpo8FD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CzV-HlgB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIogNAwh.js";import"./useFocus-BBVXnzgP.js";import"./useFocusRing-BItT14i_.js";import"./useFocusable-CwPW854N.js";import"./ContextMenuSection-CnBpObAx.js";import"./Dialog-Cw1z9AtQ.js";import"./RSPContexts-CqxOCNft.js";import"./OverlayArrow-Cf3S1QD1.js";import"./useControlledState-B4YxKAgg.js";import"./Collection-Gkv_ybXQ.js";import"./CollectionBuilder-uz1z8vZv.js";import"./SelectionIndicator-DjHwUAme.js";import"./Separator-VHKWzJTM.js";import"./SelectionManager-42CnKCgE.js";import"./useEvent-DSYhgwkh.js";import"./useCollator-D6vsHj3W.js";import"./FocusScope-BpnzFkst.js";import"./VisuallyHidden-gkajg-fe.js";import"./getActionGroupSlot-DWoHNcNE.js";import"./FieldDescription-C0EOWzJH.js";import"./Tooltip-F1bzw6B1.js";import"./ContextualHelpTrigger-BJem8cZf.js";import"./Popover-FxFSsQeG.js";import"./OverlayContextProvider-BnH0GpUl.js";import"./OverlayTrigger-BJ63rVtT.js";import"./Heading-p9-3Hmaq.js";import"./Heading-CheJhR1R.js";import"./useFieldComponent-yufHgNqa.js";import"./useControlledHostValueProps-rJ1Rukac.js";import"./TextField-BMLAakzF.js";import"./FieldError-DSdSdK3H.js";import"./Form-D3ZAWear.js";import"./Group-CWa8s-M0.js";import"./Input-inZV5DIC.js";import"./useTextField-oegUv-Jp.js";import"./useFormReset-4DR8Px1h.js";import"./useFormValidation-DjSyrx87.js";import"./AlertText-bxsLSC5L.js";import"./AlertIcon-Co0MJDJf.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},te={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
