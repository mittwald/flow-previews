import{r as E,j as e}from"./iframe-DCel2PhG.js";import{A as j}from"./ActionGroup-BLs0BWGb.js";import{B as f}from"./Button-CjhaH8vt.js";import{L as t}from"./Label-DVkF56bm.js";import{S as b}from"./Section-BGkAXCBO.js";import{T as o}from"./TextField-CB124b8G.js";import{a as c,u,F as p,R as h,S as x,t as S}from"./ResetButton-Bo6dOnRX.js";import{s as F}from"./ActionBatch-BNnkW8Wa.js";import{F as B}from"./FieldError-DI0hFked.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CoRoJ1gY.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./clsx-B-dksMZM.js";import"./index-DcvCSlSd.js";import"./getActionGroupSlot-BM5R5I3-.js";import"./useStatic-Gj7JsFzP.js";import"./IconWarning-CNMqfC0c.js";import"./remote-MfAOzJwE.js";import"./Text-CfcNN3C1.js";import"./browser-ChoxEgkm.js";import"./EmulatedBoldText-6uMsyrU3.js";import"./Text-H5k4jR7L.js";import"./utils-jFfJrK0I.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./context-ChvTJ1gc.js";import"./Button-Dbr1_oBf.js";import"./ProgressBar-COcMCNPc.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-V0mABmwM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-l6QeQysM.js";import"./useFocus-BSXyJlKK.js";import"./useFocusRing-D6latAqm.js";import"./useFocusable-CF_X-2Wu.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DVvHUSFD.js";import"./Dialog-BnrJ3EGg.js";import"./RSPContexts-BWRH8UQz.js";import"./OverlayArrow-BUpR8Z4Q.js";import"./useControlledState-uXSCouXp.js";import"./Collection-Mm3AtcTx.js";import"./CollectionBuilder-CIgtGDmA.js";import"./SelectionIndicator-DYHfPyq2.js";import"./Separator-BB0Sm4E2.js";import"./SelectionManager-CIJEtr4-.js";import"./useEvent-CN9vdLun.js";import"./useCollator-qJfX3fiN.js";import"./FocusScope-BrLtMtFa.js";import"./VisuallyHidden-giqV-lwH.js";import"./useControlledHostValueProps-DRZV2yGu.js";import"./useFieldComponent-CWMmv0d5.js";import"./FieldDescription-ChM1MP2a.js";import"./TextField-CrSgtVMY.js";import"./FieldError-QICB5hyW.js";import"./Form-BsISnRaP.js";import"./Group-yuR7pI6G.js";import"./Input-D8WhG3Nd.js";import"./useTextField-C88_NvvV.js";import"./useFormReset-DvzBERJE.js";import"./useFormValidation-CVEw0jVb.js";import"./ActionGroupView-4YYVwVM7.js";import"./Content-B1u41BWn.js";import"./Heading-DPAdBgTw.js";import"./Heading-Cs7GlIOt.js";import"./Modal-V5k8QPuM.js";import"./useOverlayController-BAgKybrq.js";import"./Overlay-LFamQv73.js";import"./OverlayContextProvider-BfHmVY35.js";import"./ButtonView--o7XYYP5.js";import"./Flex-tHl6Xyli.js";import"./useRef-C3FTlCPC.js";import"./AlertText-CGICoaW7.js";import"./AlertIcon-C6GnHejw.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),ze={title:"Integrations/React Hook Form/TextField",component:c,render:()=>{const n=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:n,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Qe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Qe as __namedExportsOrder,ze as default};
