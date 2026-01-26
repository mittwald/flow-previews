import{j as e,r as E}from"./iframe-Bc-jwLWq.js";import{A as j}from"./ActionGroup-FKzgV-D_.js";import{B as f}from"./Button-DRfNiyCG.js";import{L as t}from"./Label-p4o9WkV1.js";import{S as b}from"./Section-DeLGaA3j.js";import{T as n}from"./TextField-BYPJVCyH.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-BFkMdFPI.js";import{s as F}from"./Action-BW1QHV35.js";import{F as B}from"./FieldError-Cp2fPOrN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CTlJFVeg.js";import"./flowComponent-DGcImTRM.js";import"./index-CElyulra.js";import"./clsx-B-dksMZM.js";import"./index-Ct8kadYq.js";import"./getActionGroupSlot-DJ6HE5sS.js";import"./useStatic-D2AFXt6d.js";import"./IconWarning-BPpigV-o.js";import"./remote-CficONz5.js";import"./Text-Bs06tnQB.js";import"./browser-Cfl6H5sa.js";import"./EmulatedBoldText-CZY7LDuf.js";import"./Text-DgSTzWgU.js";import"./utils-BIv87FRG.js";import"./LoadingSpinner-D9DMVpgJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C0QVYeul.js";import"./context-BDmep644.js";import"./Button-HPdphaJl.js";import"./ProgressBar-CdyMER2G.js";import"./Label-B3yduWiM.js";import"./Hidden-BOhzI0oW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BfZDlGh7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NBjG5NMF.js";import"./useFocus-C6ldElRQ.js";import"./useFocusRing-B0jLa-Vk.js";import"./useFocusable-DIXmUg59.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DJB6II09.js";import"./Dialog-BLkrUNfj.js";import"./RSPContexts-pS-AnHir.js";import"./OverlayArrow-C2KXIoV9.js";import"./useControlledState-IlB9I5Xo.js";import"./Collection-BCq2XeeE.js";import"./CollectionBuilder-CKD3RAIJ.js";import"./SelectionIndicator-BwDlTF6c.js";import"./Separator-jBiWh72R.js";import"./SelectionManager-Bz5s9XnK.js";import"./useEvent-sz969hj6.js";import"./useCollator-XCIFooBT.js";import"./FocusScope-Bs4WKWZW.js";import"./VisuallyHidden-CmlM99K4.js";import"./TextFieldBase-C0T21KTJ.js";import"./FieldDescription-CxtFvhlF.js";import"./useFieldComponent-ahSSNXad.js";import"./TextField-qgwh5fDT.js";import"./FieldError-CGIyNVOV.js";import"./Form-DqUF-Ufv.js";import"./Group-I4ZSji5i.js";import"./Input-fHIZlSCw.js";import"./useTextField-C1Foi7Jk.js";import"./useFormReset-DFcj21LA.js";import"./useFormValidation-DyPlpM72.js";import"./useControlledHostValueProps-DoY3RCm0.js";import"./useRef-BXGxKB79.js";import"./ButtonView-BKhjZf5-.js";import"./context-CAc_7aQG.js";import"./AlertText-COarWx13.js";import"./AlertIcon-DCb6GQr1.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
