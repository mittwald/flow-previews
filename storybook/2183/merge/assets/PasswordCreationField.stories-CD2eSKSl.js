import{r as x,j as r}from"./iframe-D2Ryv2XM.js";import{u as c,F as f}from"./Form-D-bCb0z0.js";import{L as i}from"./Label-Dm7SPIiB.js";import{B as t}from"./Button-0ymElbGx.js";import{S}from"./Section-B5eWJ7cO.js";import{A as g}from"./ActionGroup-DNKY23T8.js";import{s as h}from"./Action-P2r8aGEo.js";import{d as E,O as C,P as n,n as o,r as R}from"./PasswordCreationField-pQC5rs-w.js";import{F as V}from"./FieldError-Df9KKLMS.js";import{F,t as L}from"./Field-rJhDd3xD.js";import{R as b}from"./ResetButton-BsZgDZaX.js";import{S as j}from"./SubmitButton-CH__5W-V.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-k7JOs1GI.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-P0LvaFxL.js";import"./index-DQBbrLYy.js";import"./index-C63C9hiI.js";import"./useLocalizedStringFormatter-D3q43d5z.js";import"./context-nMHmB_Zz.js";import"./Label-BRB94mKh.js";import"./utils-BqLZYyR8.js";import"./Hidden-BS4L5nhJ.js";import"./IconApp-D72ec8J0.js";import"./remote-c0PQzJc6.js";import"./IconX-DZdRXBmP.js";import"./IconCheck-Bb3WY8_H.js";import"./Text-BztGJEd5.js";import"./EmulatedBoldText-j8ZSwmcB.js";import"./Text-D7v3tGEm.js";import"./LoadingSpinner-BrbkAsB7.js";import"./ariaLive-CUFvfrWF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBxmpU8U.js";import"./ProgressBar-Ftd9nhbH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-xl5SJTPu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-oTeUo0kc.js";import"./useFocus-CHBEY2MC.js";import"./useFocusRing-Bonkbq1h.js";import"./useFocusable-DzubWnzm.js";import"./ContextMenuSection-jWpLoqR_.js";import"./lib-90ocxLs-.js";import"./Dialog-Dv3Dn_KI.js";import"./RSPContexts-B-8XijCb.js";import"./OverlayArrow-DTmL_qI5.js";import"./useControlledState-B1ZkKesc.js";import"./Collection-jKLygJGW.js";import"./CollectionBuilder-Da9Ni7nz.js";import"./SelectionIndicator-B0cJwLAx.js";import"./Separator-BR_z4vVr.js";import"./SelectionManager-vwj_R8g4.js";import"./useEvent-OdyTuNWc.js";import"./useCollator-ZYyR423s.js";import"./FocusScope-1u2Sr5XR.js";import"./VisuallyHidden-CLaEN95T.js";import"./dynamic-CYMBERZG.js";import"./getActionGroupSlot-W54WmM0W.js";import"./useStatic-Dp5ohCc9.js";import"./context-FPyrczIP.js";import"./FieldDescription-CYrFJZP5.js";import"./Tooltip-qSVReDLI.js";import"./TranslationProvider-CMU4tGmG.js";import"./IconCircleCheck-V25Lv6Jk.js";import"./ContextualHelpTrigger-ateKbOBp.js";import"./Popover-DUxHcx38.js";import"./OverlayContextProvider-B2OZPBTA.js";import"./useOverlayController--hBRUqQr.js";import"./OverlayTrigger-Bw08bMtJ.js";import"./IconInfo-DLzcvNiF.js";import"./Heading-DXhz_H9M.js";import"./Heading-DRwXALuA.js";import"./useFieldComponent-w9ZrCArw.js";import"./useControlledHostValueProps-BpR4WfzB.js";import"./TextField-dqp2wQe0.js";import"./FieldError-CWHVrlnl.js";import"./Form-HDxy_CB-.js";import"./Group-ONole-Nc.js";import"./Input-B6UkKbKT.js";import"./useTextField-5tyHJfNY.js";import"./useFormReset-BscIah2r.js";import"./useFormValidation-DGXgC3JE.js";import"./IconDanger-DUFERqG9.js";import"./useRef-CNxeDH63.js";const y=(e=E)=>{const a=x.useMemo(()=>C.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[R.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:F,render:()=>{const e=async s=>{await h(1e3),O(s)},a=c({defaultValues:{user:""}}),m=L();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(g,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await h(2e3),console.log("submitted",a)},children:[r.jsx(F,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await h(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await h(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
