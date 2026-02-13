import{r as x,j as r}from"./iframe-Bq_dTdDz.js";import{a as p,u as f,F as h,R as b,S as j,t as S}from"./ResetButton-BqUs2IaX.js";import{L as i}from"./Label-DlbZYBs5.js";import{B as t}from"./Button-DwhPeKe2.js";import{S as g}from"./Section-DNG5i0i9.js";import{A as E}from"./ActionGroup-CKWSskWv.js";import{s as F}from"./ActionBatch-DTgx0kqH.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-DBk609nj.js";import{F as L}from"./FieldError-ClLnELEE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BU-d9n8a.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./clsx-B-dksMZM.js";import"./index-C2qM6Ecb.js";import"./Overlay-BhiillRq.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./OverlayContextProvider-CwxNfmUY.js";import"./LoadingSpinner-QnwB8HJT.js";import"./IconWarning-AvRveFf8.js";import"./remote-BGgAcFUF.js";import"./utils-Dc83Zc3S.js";import"./Dialog-atW1yRI0.js";import"./Button-B82FCYrG.js";import"./ProgressBar-BeilQHeM.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BL_xrhrx.js";import"./context-DasT5rkr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxmEVb--.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./useFocusable-B7WP4__g.js";import"./RSPContexts-BEGF6Rgy.js";import"./OverlayArrow-D8uV1uDe.js";import"./useControlledState-DvV_L9jP.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./SelectionIndicator-B0He5XEj.js";import"./Separator-oRLs3WBO.js";import"./Text-RESw6iu2.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./VisuallyHidden-6gUpRQYP.js";import"./ActionGroupView-9NY9P0eT.js";import"./Content-CIrJX21x.js";import"./Heading-C8DRlUq-.js";import"./Heading-Cv2K6T9Y.js";import"./Text-3w39UNLL.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Modal-B1kIozjh.js";import"./ButtonView-Vc-lBIdn.js";import"./Flex-DWL773Qy.js";import"./useRef-C3TY9z6n.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CF0FAI_C.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./FieldDescription-ByrQyhzl.js";import"./Tooltip-fPwJV1ep.js";import"./ContextualHelpTrigger-CzZwUIm3.js";import"./Popover-DIyRcO8w.js";import"./OverlayTrigger-CkrzYHRb.js";import"./useFieldComponent-C92nVZms.js";import"./useControlledHostValueProps-Byhklanl.js";import"./TextField-Bbc_VGXT.js";import"./FieldError-CB3_Y2qo.js";import"./Form-Bm3_NoD-.js";import"./Group-DFA2OkWU.js";import"./Input-b7EgChKn.js";import"./useTextField-BNdYQUXF.js";import"./useFormReset-BNYkLVEo.js";import"./useFormValidation-ofgJ0bTW.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ae={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),O(s)},a=f({defaultValues:{user:""}}),m=S();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const me=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,c as WithFocus,l as WithForm,me as __namedExportsOrder,ae as default};
