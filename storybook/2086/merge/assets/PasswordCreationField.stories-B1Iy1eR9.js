import{r as b,j as r}from"./iframe-DOYRhvKw.js";import{a as c,u as f,F as h,t as w}from"./Form-CJukERYt.js";import{L as i}from"./Label-D1jneSDA.js";import{B as o}from"./Button-C2r2j3I4.js";import{S as P}from"./Section-BJf3Kb9f.js";import{A as j}from"./ActionGroup-BQVi9nN6.js";import{s as F}from"./Action-BNkegqWa.js";import{d as y,O as g,P as n,n as t,r as B}from"./PasswordCreationField-CntQg9-J.js";import{e as S}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{F as E}from"./useFieldComponent-CVvykpK2.js";import"./index-nuYtCEEu.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./clsx-B-dksMZM.js";import"./index-CsHgCCkK.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./context-NzKNm45Y.js";import"./browser-BfmJHaZX.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DPl4piTh.js";import"./utils-Bgpcx055.js";import"./Hidden-vFw0yyvc.js";import"./IconWarning-CT2mn3WV.js";import"./Text-uG3ng9U4.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./Text-ChShlFeN.js";import"./LoadingSpinner-x8jgjTbZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqQnue56.js";import"./ProgressBar-DECQ-pQm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CzwTtnKl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-GLnS58A3.js";import"./useFocus-19H2kxNT.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocusable-DT2cLKuD.js";import"./ContextMenuSection-C5Ehy01g.js";import"./Dialog-QPXJS7lu.js";import"./RSPContexts-D64TVg0j.js";import"./OverlayArrow-C0WVRV0f.js";import"./useControlledState-BpyUCkTO.js";import"./Collection-BmR1fMr0.js";import"./CollectionBuilder-COEzD4ng.js";import"./SelectionIndicator-DAPFHJnO.js";import"./Separator-9JM_OpZ0.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./useCollator-Dm4rB5GB.js";import"./FocusScope-CgTCZfj1.js";import"./VisuallyHidden-DLTCEUwm.js";import"./dynamic-nHNYFzn9.js";import"./getActionGroupSlot-DkFy2TVv.js";import"./useStatic-kDWe5hml.js";import"./context-CjasfPnd.js";import"./Group-HF6ucXVn.js";import"./Input-OSTDVC9B.js";import"./TextField-zZoLVZYC.js";import"./Form-iQ1p0tBu.js";import"./useTextField-B558uymh.js";import"./useFormReset-BHPIYNcK.js";import"./useFormValidation-37foNTGu.js";import"./FieldDescription-Blyf9m0W.js";import"./Tooltip-CfJ3nkrW.js";import"./ClearPropsContextView-HZAP9uO_.js";import"./ClearPropsContext-BqcXprie.js";import"./ReactAriaControlledValueFix-BeGVeEzJ.js";import"./ContextualHelpTrigger-BQC-j1CJ.js";import"./Popover-C_Lqylf0.js";import"./useOverlayController-7tlEbJro.js";import"./OverlayContextProvider-_T8uFS1c.js";import"./OverlayTrigger-BlX_Ocgn.js";import"./ControlledNotification-DTnIJfc-.js";import"./Heading-BcQRRFfC.js";import"./Heading-BiqQ-WE6.js";import"./useManagedValue-CTsotaDH.js";import"./react-children-utilities-BC28ceB8.js";const C=(e=y)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[B.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:"Jo dwag a password is required!"},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(j,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:C(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const re=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,re as __namedExportsOrder,$r as default};
