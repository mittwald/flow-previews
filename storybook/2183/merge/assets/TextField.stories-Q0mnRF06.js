import{j as e,r as E}from"./iframe-Eg8-wFCR.js";import{A as j}from"./ActionGroup-Bgv1jUgx.js";import{B as F}from"./Button-bx6caw1c.js";import{L as t}from"./Label-1lc8IvKU.js";import{S as b}from"./Section-CDeeOWJg.js";import{T as o}from"./TextField-DVjt4M9V.js";import{s as p}from"./Action-DV4LdD_S.js";import{u,F as c}from"./Form-rEWg9Zdr.js";import{F as B}from"./FieldError-D_RdlzA4.js";import{F as h,t as S}from"./Field-uyOiJLAv.js";import{R as x}from"./ResetButton-Ct6ToO92.js";import{S as f}from"./SubmitButton-26fIdb4C.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DS6EBQ3r.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./clsx-B-dksMZM.js";import"./index-7P9p2RDg.js";import"./getActionGroupSlot-Dz1zi_Ez.js";import"./useStatic-BFryEnnL.js";import"./IconChevronDown-CB7etEhV.js";import"./remote-DyWsWGYm.js";import"./IconX-chnQqdsu.js";import"./IconCheck-CfWObqtZ.js";import"./Text-cFe2oWr9.js";import"./browser-CGaD3WbY.js";import"./EmulatedBoldText-BvL31EIC.js";import"./Text-CVQZ1Ff_.js";import"./utils-DpUmHG9o.js";import"./LoadingSpinner-l0sJlHn4.js";import"./ariaLive-JHqpu2fU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./context-D30M243T.js";import"./Button-DrB4xT8J.js";import"./ProgressBar-BDU9deru.js";import"./Label-ayphvmky.js";import"./Hidden-CPM5AGUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiQu3Cp5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eXiMCUEC.js";import"./useFocus-BombNWQr.js";import"./useFocusRing-DXLUoCe1.js";import"./useFocusable-CMi9d24v.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DlfXeTZ7.js";import"./lib-90ocxLs-.js";import"./Dialog-BIruH5Sw.js";import"./RSPContexts-ajqDrbBU.js";import"./OverlayArrow-CDko6Bkl.js";import"./useControlledState-B4vwiKN6.js";import"./Collection-DZl0ZzX8.js";import"./CollectionBuilder-B_QcNnrf.js";import"./SelectionIndicator-LygQ_MIk.js";import"./Separator-DQMCvS0x.js";import"./SelectionManager-CFu8e8go.js";import"./useEvent-Cv81pFWJ.js";import"./useCollator-C-69fnSd.js";import"./FocusScope-BFrkZdE_.js";import"./VisuallyHidden-B_EYeIgM.js";import"./TextFieldBase-DNudVy7t.js";import"./FieldDescription-CAHlR0jD.js";import"./useFieldComponent-CePCnb_B.js";import"./TextField-D11bwwwF.js";import"./FieldError-BwCFTN-W.js";import"./Form-DkJGoq-X.js";import"./Group-BHVgCnMY.js";import"./Input-q1ZC5BdI.js";import"./useTextField-BX8mCjCv.js";import"./useFormReset-BOxw_xUS.js";import"./useFormValidation-D_eOv9kq.js";import"./useControlledHostValueProps-CMYSf_Mb.js";import"./context-W5o617c2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconDanger-Djal8A6_.js";import"./useRef-BMP_ah12.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const n=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:n,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(F,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(F,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ze=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ze as __namedExportsOrder,Ye as default};
