import{r as x,j as r}from"./iframe-BUX4ZqHF.js";import{b as p,u as f,F as h,t as S}from"./Form-uWo6WJWO.js";import{L as i}from"./Label-kgnV-RXM.js";import{R as b,S as j}from"./ResetButton-DCTmDlFv.js";import{B as t}from"./Button-BQks1Fwk.js";import{S as g}from"./Section-DIg16xJ5.js";import{A as E}from"./ActionGroup-BG42jB9j.js";import{s as F}from"./Action-BoSxlb-x.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-B2_X7jKN.js";import{F as L}from"./FieldError-BcNphJCj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C-JL21_Y.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./clsx-B-dksMZM.js";import"./index-BP0Kc6JB.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./context-DdyqVFXP.js";import"./browser-D0x3Xdqp.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-I8DqILoy.js";import"./utils-D9iTInv6.js";import"./Hidden-CmsGFsNY.js";import"./useRef-HkbLjGA6.js";import"./IconWarning-CQ3vdTUk.js";import"./remote-CM65cF_Q.js";import"./Text-CCD2jWDE.js";import"./EmulatedBoldText-B3B0n9A6.js";import"./Text-BG7MORzn.js";import"./LoadingSpinner-DAzOOzOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7cH5OT2.js";import"./ProgressBar-D_H4fWP7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVc7LJa4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqXzXpsh.js";import"./useFocus-CJRF0W0a.js";import"./useFocusRing-LYLGckDp.js";import"./useFocusable-CNxG1VTZ.js";import"./ContextMenuSection-B-plY6qU.js";import"./Dialog-Ds9eM6L5.js";import"./RSPContexts-CCyvn2fa.js";import"./OverlayArrow-BDz2U1dX.js";import"./useControlledState-CgyNYXn6.js";import"./Collection-J1EtBqZM.js";import"./CollectionBuilder-CBbbBxBU.js";import"./SelectionIndicator-C49t11ym.js";import"./Separator-DMMpEXgu.js";import"./SelectionManager-CFGiEO44.js";import"./useEvent-CCX_Td5o.js";import"./useCollator-j_WBsrii.js";import"./FocusScope-CKMlMtX2.js";import"./VisuallyHidden-CEZo4IbP.js";import"./getActionGroupSlot-BiFvGjQj.js";import"./useStatic-HiZWtrs6.js";import"./context-DLe4PJj-.js";import"./FieldDescription-DA8sVKuh.js";import"./Tooltip-D3oHsFSE.js";import"./ContextualHelpTrigger-CRL1lMTN.js";import"./Popover-Cjs7ZgFB.js";import"./useOverlayController-Di9xJg3a.js";import"./OverlayContextProvider-DK3zJnZ3.js";import"./OverlayTrigger-DrYjWhwY.js";import"./Heading-CZDnCkj5.js";import"./Heading-Dcla-H3e.js";import"./useFieldComponent-L2xw4dQD.js";import"./useControlledHostValueProps-BQgkkibT.js";import"./TextField-nAzC6DdA.js";import"./FieldError-DwISghd1.js";import"./Form-Dyklbi3v.js";import"./Group-DB1vfutX.js";import"./Input-Dt9-alkO.js";import"./useTextField-DrmwD8Vx.js";import"./useFormReset-DwYjTvSA.js";import"./useFormValidation-CdmTUY1H.js";import"./AlertText-C1IAOcr2.js";import"./AlertIcon-B17jmh6q.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},se={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
