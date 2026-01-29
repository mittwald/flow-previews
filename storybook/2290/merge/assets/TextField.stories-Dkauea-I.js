import{j as e,r as E}from"./iframe-CV15FJMl.js";import{A as j}from"./ActionGroup-Bfa2abXX.js";import{B as f}from"./Button-CPmcSz1K.js";import{L as t}from"./Label-BYiN1vfD.js";import{S as b}from"./Section-DxMSYwau.js";import{T as n}from"./TextField-B9Sj9JY1.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-Dy0XVagH.js";import{s as F}from"./Action-k7eAd4lv.js";import{F as B}from"./FieldError-e14SOUTJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-83TxHgtq.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./clsx-B-dksMZM.js";import"./index-DgyS9CYh.js";import"./getActionGroupSlot-CEtNZ_Ue.js";import"./useStatic-CaY36sW2.js";import"./IconWarning-CS7d0V5Y.js";import"./remote-BYNvJzFU.js";import"./Text-DO3jYkuR.js";import"./browser-8BNXX35r.js";import"./EmulatedBoldText-CKJb5Byw.js";import"./Text-Bk0CAvR5.js";import"./utils-B45PgFGd.js";import"./LoadingSpinner-C2UghIT7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./context-Is67_JkX.js";import"./Button-Deu1Fo5o.js";import"./ProgressBar-DYhZqT6M.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DgTpLYXb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C9ebI84m.js";import"./useFocus-C3kMSW21.js";import"./useFocusRing-CoS5ESqQ.js";import"./useFocusable-DenRoGzb.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BP5kvD_3.js";import"./Dialog-CvkIF4vR.js";import"./RSPContexts-09abhkzW.js";import"./OverlayArrow-BtUNb3SD.js";import"./useControlledState-Br5i43rk.js";import"./Collection-BDyrlbfU.js";import"./CollectionBuilder-DPEpUwFF.js";import"./SelectionIndicator-C649Jmr0.js";import"./Separator-BUXgDBus.js";import"./SelectionManager-DjElDtGz.js";import"./useEvent-CGsPBawQ.js";import"./useCollator-C223TjTn.js";import"./FocusScope-Da56m84L.js";import"./VisuallyHidden-DJ3SqDe0.js";import"./TextFieldBase-CM4cdUAH.js";import"./FieldDescription-BbUtqeWX.js";import"./useFieldComponent-4syZJMEs.js";import"./TextField-C5RLv0sl.js";import"./FieldError-CDBleeuN.js";import"./Form-B5_Ftb3l.js";import"./Group-Oc33WXVS.js";import"./Input-Wuyb26cC.js";import"./useTextField-DH39Jsbq.js";import"./useFormReset-DQt01LcM.js";import"./useFormValidation-rdndu8q5.js";import"./useControlledHostValueProps-CzUjaEYd.js";import"./useRef-Q0HZ1Gfv.js";import"./ButtonView-CuCKGckF.js";import"./context-z7OXrsOp.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const Ge=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ge as __namedExportsOrder,Ue as default};
