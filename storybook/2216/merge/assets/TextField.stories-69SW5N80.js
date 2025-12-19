import{j as e,r as E}from"./iframe-d8TPt7Dq.js";import{A as j}from"./ActionGroup-Bto2kHza.js";import{B as f}from"./Button-CG9B_DsC.js";import{L as t}from"./Label-DUZNK_N3.js";import{S as b}from"./Section-gs_NZoj_.js";import{T as n}from"./TextField-CmTn1kYZ.js";import{b as p,u,F as c,t as S}from"./Form-9w--j5Mp.js";import{R as h,S as x}from"./ResetButton-DO1Nuvjf.js";import{s as F}from"./Action-BNptIGGg.js";import{F as B}from"./FieldError-Z630sQ-Y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-q6Z3lF5f.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./clsx-B-dksMZM.js";import"./index-hNZo4M03.js";import"./getActionGroupSlot-BPC2rtYu.js";import"./useStatic-C-4yNygp.js";import"./IconWarning-BBwUIuFu.js";import"./remote-DqOJ-OtV.js";import"./Text-B_83j2CJ.js";import"./browser-Cq89yPle.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./Text-CbFZ93_1.js";import"./utils-CQWCrNEN.js";import"./LoadingSpinner-CZkvTSmf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./context-s9WFa2xd.js";import"./Button-CiuUFhcg.js";import"./ProgressBar-DbAphBhf.js";import"./Label-Ddce6lPW.js";import"./Hidden-DwOTALl4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CyX9DgZ-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DD6hZDmw.js";import"./useFocus-Dzzsimxq.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocusable-Blyv-8JB.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BGdNAGXU.js";import"./Dialog-DKAUR0i0.js";import"./RSPContexts-Bn3c_trp.js";import"./OverlayArrow-DsjdeIno.js";import"./useControlledState-Du7Hq4ap.js";import"./Collection-C_DIbhIS.js";import"./CollectionBuilder-DWjCGULS.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./Separator-CfU7skaS.js";import"./SelectionManager-CwYh5ako.js";import"./useEvent-BEdiQQE9.js";import"./useCollator-BT1LDj3M.js";import"./FocusScope-TlUkqt74.js";import"./VisuallyHidden-_OGl7ay2.js";import"./TextFieldBase-CrCDv3B5.js";import"./FieldDescription-CQGlo9YG.js";import"./useFieldComponent-XccPD61N.js";import"./TextField-DzbzMCaM.js";import"./FieldError-D74Rm1AJ.js";import"./Form-bB72J6qo.js";import"./Group-Bs1XJ8tf.js";import"./Input-Cp9jMkj6.js";import"./useTextField-BALSLGms.js";import"./useFormReset-AO5_sbxL.js";import"./useFormValidation-DzABwrGN.js";import"./useControlledHostValueProps-CJz_h5pu.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Uwn_o1DG.js";import"./context-BnRBG3H-.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ue=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ue as __namedExportsOrder,Ie as default};
