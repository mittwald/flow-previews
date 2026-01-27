import{j as e,r as E}from"./iframe-BK9Ry9wr.js";import{A as j}from"./ActionGroup-B30hSGLL.js";import{B as f}from"./Button-CHbQbW2n.js";import{L as t}from"./Label-MHPgjcAC.js";import{S as b}from"./Section-Cd3PiQqp.js";import{T as n}from"./TextField-CgdWTge8.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-C0XPbUI0.js";import{s as F}from"./Action-CpYeBO1D.js";import{F as B}from"./FieldError-Dlnwp2IY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-QikLaQcI.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./clsx-B-dksMZM.js";import"./index-DqsXJ4xp.js";import"./getActionGroupSlot-BQEdHt4G.js";import"./useStatic-D1EtWzUP.js";import"./IconWarning-ClqYagFF.js";import"./remote-BKPS1KcS.js";import"./Text-kkda9Q25.js";import"./browser-DDyWafud.js";import"./EmulatedBoldText-NOAnNUmj.js";import"./Text-Cq5Rc76r.js";import"./utils-DO-BnPGQ.js";import"./LoadingSpinner-FeF_CDXe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./context-DsIoSqto.js";import"./Button-CnSM8-vw.js";import"./ProgressBar-EpzEHd1o.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MQsZvy4I.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DlcvFeQS.js";import"./useFocus-C5fN754a.js";import"./useFocusRing-Dknf048Z.js";import"./useFocusable-CjhkSx1Q.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BoFqJWQI.js";import"./Dialog-CFBRHxwp.js";import"./RSPContexts--7QpwlJX.js";import"./OverlayArrow-CRZVDLqR.js";import"./useControlledState-D5gBJyZQ.js";import"./Collection-DA19Hn3z.js";import"./CollectionBuilder-D0V9DfFD.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./Separator-C7FW_ZyO.js";import"./SelectionManager-BORRpVca.js";import"./useEvent-C7NWigLs.js";import"./useCollator-DyL6zZr9.js";import"./FocusScope-Lcnwzjdv.js";import"./VisuallyHidden-D79PysQv.js";import"./TextFieldBase-gihnozah.js";import"./FieldDescription-urh4LMIG.js";import"./useFieldComponent-DnU67IFr.js";import"./TextField-BdABkByo.js";import"./FieldError-jtZpQJaz.js";import"./Form-DgYJKMgS.js";import"./Group-DCFzKDnc.js";import"./Input-yJFna98K.js";import"./useTextField-BPhFFoYw.js";import"./useFormReset-CaS7VrAz.js";import"./useFormValidation-4onogkfY.js";import"./useControlledHostValueProps-CUu1Ad4Y.js";import"./useRef-DMVqSxmL.js";import"./ButtonView-CN2Wm_bq.js";import"./context-BUIiTJfL.js";import"./AlertText-Q3UmWydJ.js";import"./AlertIcon-CZTB9fHB.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
